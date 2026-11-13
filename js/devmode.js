import { db, doc, updateDoc, getDoc, runTransaction } from "./firebase.js";
import { state } from "./state.js";
import { devHooks, forceAdvance, refreshFromLatest, resolveFinalVote } from "./game.js";

const MAX_PLAYERS = 5;

export function initDevMode() {
  const boot = () => {
    if (!state.myPlayerId) {
      setTimeout(boot, 50);
      return;
    }
    state.devRealPlayerId = state.myPlayerId;
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
    <button type="button" id="devTimerScale" class="dev-btn" aria-pressed="false">타이머 x10</button>
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

async function handleDevRoom(data) {
  if (!data || data.hostId !== state.devRealPlayerId || !state.currentRoomCode) return;
  await assignFreeCharacters(data);
  await autoSkipYes(data);
  await autoBotVotes(data);
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
  let shouldResolve = false;

  await runTransaction(db, async (tx) => {
    shouldResolve = false;
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
    tx.update(ref, { votes });
    shouldResolve = Object.keys(fresh.players || {}).every((pid) => !!votes[pid]);
  });

  if (!shouldResolve) return;
  const snap = await getDoc(ref);
  if (snap.exists()) await resolveFinalVote(snap.data());
}
