import { db, doc, updateDoc, getDoc, runTransaction } from "./firebase.js";
import { state, actions } from "./state.js";
import { computeVoteWinner, devHooks, forceAdvance, refreshFromLatest, runBotInvestigations, runBotStatements } from "./game.js";

const AUTO_PHASE_KEY = "mmDevAutoOnPhase";

const MAX_PLAYERS = 5;

export function initDevMode() {
  const boot = () => {
    if (!state.myPlayerId) {
      setTimeout(boot, 50);
      return;
    }
    state.devRealPlayerId = state.myPlayerId;
    window.__mmTest = { state, actions, refresh: refreshFromLatest, lastAuto: null };
    mountPanel();
    devHooks.onRoomUpdate = (data) => {
      refreshViewAsOptions(data);
      queue = queue.then(() => handleDevRoom(data)).catch((err) => console.error("devmode", err));
    };
  };
  boot();
}

let queue = Promise.resolve();

function mountPanel() {
  const panel = document.createElement("aside");
  panel.id = "devPanel";
  panel.className = "dev-panel";
  panel.innerHTML = `
    <div class="dev-panel-title">TEST DEV</div>
    <button type="button" id="devAddBot" class="dev-btn">+ 봇 추가</button>
    <button type="button" id="devForceNext" class="dev-btn">다음 단계</button>
    <button type="button" id="devBotInvestigate" class="dev-btn">봇 자동 조사</button>
    <button type="button" id="devBotStatement" class="dev-btn">봇 자동 진술</button>
    <button type="button" id="devTimerScale" class="dev-btn" aria-pressed="false">타이머 x10</button>
    <label class="dev-label dev-check">
      <input type="checkbox" id="devAutoOnPhase">
      <span>단계 넘길 때 자동 실행</span>
    </label>
    <label class="dev-label">view as
      <select id="devViewAs" class="dev-select">
        <option value="">내 계정</option>
      </select>
    </label>
  `;
  document.body.appendChild(panel);

  document.getElementById("devAddBot").addEventListener("click", () => {
    addBot().catch((err) => console.error(err));
  });
  document.getElementById("devForceNext").addEventListener("click", () => {
    forceAdvance().catch((err) => console.error(err));
  });
  document.getElementById("devBotInvestigate").addEventListener("click", () => {
    runBotInvestigations()
      .then((result) => {
        if (result.skipped) alert("지금은 테스트 방에서 조사할 수 없습니다.");
      })
      .catch((err) => console.error(err));
  });
  document.getElementById("devBotStatement").addEventListener("click", () => {
    runBotStatements()
      .then((result) => {
        if (result.skipped) alert("지금은 테스트 방에서 진술을 공개할 수 없습니다.");
      })
      .catch((err) => console.error(err));
  });
  const autoBox = document.getElementById("devAutoOnPhase");
  autoBox.checked = localStorage.getItem(AUTO_PHASE_KEY) === "1";
  autoBox.addEventListener("change", () => {
    localStorage.setItem(AUTO_PHASE_KEY, autoBox.checked ? "1" : "0");
  });
  document.getElementById("devTimerScale").addEventListener("click", () => {
    const on = state.devTimerScale !== 10;
    state.devTimerScale = on ? 10 : 1;
    const btn = document.getElementById("devTimerScale");
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.classList.toggle("dev-btn-on", on);
    btn.textContent = on ? "타이머 x10 켜짐" : "타이머 x10";
  });
  document.getElementById("devViewAs").addEventListener("change", (event) => {
    state.myPlayerId = event.target.value || state.devRealPlayerId;
    refreshFromLatest();
  });
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

function refreshViewAsOptions(data) {
  const select = document.getElementById("devViewAs");
  if (!select || !data || !data.players) return;
  const current = state.myPlayerId === state.devRealPlayerId ? "" : state.myPlayerId;
  const options = [["", "내 계정"]];
  Object.entries(data.players).forEach(([pid, player]) => {
    const label = `${player.nickname || pid}${player.isBot ? " (bot)" : ""}`;
    options.push([pid, label]);
  });
  const signature = options.map((option) => option.join(":")).join("|");
  if (select.dataset.signature === signature) return;
  select.dataset.signature = signature;
  select.innerHTML = options.map(([value, label]) => `<option value="${esc(value)}">${esc(label)}</option>`).join("");
  select.value = options.some(([value]) => value === current) ? current : "";
}

async function addBot() {
  if (!state.currentRoomCode) return alert("먼저 방을 만드세요.");
  const ref = doc(db, "rooms", state.currentRoomCode);
  const snap = await getDoc(ref);
  if (!snap.exists()) return;
  const data = snap.data();
  if (data.hostId !== state.devRealPlayerId) return;
  const players = data.players || {};
  if (Object.keys(players).length >= MAX_PLAYERS) {
    return alert("이 방은 최대 5명까지 참가할 수 있습니다.");
  }
  let n = 1;
  while (players[`bot_${n}`]) n += 1;
  await updateDoc(ref, {
    [`players.bot_${n}`]: {
      nickname: `BOT ${n}`,
      isBot: true,
      charId: null,
      isHost: false
    }
  });
}

let armedPhase = null;

function autoPhaseEnabled() {
  return document.getElementById("devAutoOnPhase")?.checked === true;
}

async function maybeAutoPhase(data) {
  if (!data?.test) return;
  if (armedPhase === null) {
    armedPhase = data.phase;
    return;
  }
  if (data.phase === armedPhase) return;
  const snap = await getDoc(doc(db, "rooms", state.currentRoomCode));
  if (!snap.exists() || snap.data().phase !== data.phase) return;
  armedPhase = data.phase;
  if (!autoPhaseEnabled()) return;
  const investigated = await runBotInvestigations();
  const stated = await runBotStatements();
  window.__mmTest.lastAuto = {
    phase: data.phase,
    investigated: investigated.investigated,
    clues: investigated.clues,
    stated: stated.stated,
    investigateSkipped: investigated.skipped,
    statementSkipped: stated.skipped
  };
}

async function handleDevRoom(data) {
  if (!data || data.hostId !== state.devRealPlayerId || !state.currentRoomCode) return;
  await assignFreeCharacters(data);
  await autoSkipYes(data);
  await autoBotVotes(data);
  await maybeAutoPhase(data);
}

async function assignFreeCharacters(data) {
  if (data.phase !== "LOBBY" || !state.currentScenario) return;
  const players = data.players || {};
  const bots = Object.entries(players).filter(([, player]) => player.isBot && !player.charId);
  if (!bots.length) return;

  const is5 = Object.keys(players).length >= 5;
  const available = state.currentScenario.characters
    .filter((character) => character.isDefault || is5)
    .map((character) => character.id);
  const taken = new Set(Object.values(players).map((player) => player.charId).filter(Boolean));
  const free = available.filter((id) => !taken.has(id));
  if (!free.length) return;

  const updates = {};
  bots.forEach(([pid], index) => {
    if (free[index]) updates[`players.${pid}.charId`] = free[index];
  });
  if (Object.keys(updates).length) {
    await updateDoc(doc(db, "rooms", state.currentRoomCode), updates);
  }
}

async function autoSkipYes(data) {
  const vote = data.skipVote;
  if (!vote || vote.status !== "VOTING") return;
  const votes = vote.votes || {};
  const updates = {};
  Object.entries(data.players || {}).forEach(([pid, player]) => {
    if (player.isBot && votes[pid] === undefined) updates[`skipVote.votes.${pid}`] = true;
  });
  if (Object.keys(updates).length) {
    await updateDoc(doc(db, "rooms", state.currentRoomCode), updates);
  }
}

function validVoteTargets(player, data) {
  const count = Object.keys(data.players || {}).length;
  return state.currentScenario.characters.filter((character) => {
    if (character.id === player.charId) return false;
    if (!character.isDefault && count < 5) return false;
    return true;
  });
}

async function autoBotVotes(data) {
  if (data.phase !== "FINAL_VOTE" || !state.currentScenario) return;
  const ref = doc(db, "rooms", state.currentRoomCode);

  await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists()) return;
    const fresh = snap.data();
    if (fresh.phase !== "FINAL_VOTE") return;
    const votes = { ...(fresh.votes || {}) };
    let changed = false;
    Object.entries(fresh.players || {}).forEach(([pid, player]) => {
      if (!player.isBot || votes[pid]) return;
      const options = validVoteTargets(player, fresh);
      if (!options.length) return;
      const pick = options[Math.floor(Math.random() * options.length)];
      votes[pid] = pick.id;
      changed = true;
    });
    if (!changed) return;
    const allVoted = Object.keys(fresh.players || {}).every((pid) => !!votes[pid]);
    if (allVoted) {
      tx.update(ref, {
        votes,
        phase: "ENDING",
        winner: computeVoteWinner(votes, fresh),
        timerSeconds: 0
      });
    } else {
      tx.update(ref, { votes });
    }
  });
}
