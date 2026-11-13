import { db, doc, setDoc, getDoc, updateDoc, onSnapshot } from "./firebase.js";
import { state, actions } from "./state.js";
import {
  switchView,
  applyLobbyHeader,
  updateTimerDisplay,
  updateSystemDiscordGuide,
  renderCharacterSelection,
  renderPrologue,
  renderInGameDashboard,
  renderEnding
} from "./ui.js";

async function loadScenarioModule(scenarioId) {
  try {
    const module = await import(`../scenarios/scenario-${scenarioId}.js`);
    state.currentScenario = module.default;
    return state.currentScenario;
  } catch (err) {
    console.error("시나리오 로드 실패:", err);
    alert("시나리오 파일을 불러올 수 없습니다. scenarios/scenario-" + scenarioId + ".js 파일 위치나 파일 내부 문법 오류를 확인하세요.");
    return null;
  }
}

const INGAME_PHASES = ['R1', 'R2', 'R2_WHISPER', 'R3', 'R4', 'R4_WHISPER', 'R5_DEFENSE', 'FINAL_VOTE'];
const FINAL_VOTE_SECONDS = 120;
const MAX_PLAYERS = 5;

export const devHooks = { onRoomUpdate: null };

let latestRoomData = null;
let phaseAdvancing = false;
let resolvingVote = false;
let timerFiredPhase = null;

function isActingHost(data) {
  const room = data || latestRoomData;
  if (!room) return false;
  if (state.devRealPlayerId) return room.hostId === state.devRealPlayerId;
  return room.hostId === state.myPlayerId;
}

window.selectThemeAndGoToLobby = async function(themeId) {
  state.currentThemeId = themeId;
  const loaded = await loadScenarioModule(themeId);
  if (!loaded) return;
  applyLobbyHeader(loaded);
  switchView('viewLobby');
};

function listenToRoom(roomCode) {
  if (state.roomUnsubscribe) state.roomUnsubscribe();
  state.roomUnsubscribe = onSnapshot(doc(db, "rooms", roomCode), (snapshot) => {
    if (!snapshot.exists()) return;
    const data = snapshot.data();
    handleStateUpdate(data);
  });
}

function setupTimer(data) {
  state.localTimerSeconds = data.timerSeconds ?? 900;
  updateTimerDisplay(state.localTimerSeconds);

  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = null;

  if (!INGAME_PHASES.includes(data.phase)) return;

  if (state.localTimerSeconds <= 0) {
    if (isActingHost(data) && timerFiredPhase !== data.phase) {
      timerFiredPhase = data.phase;
      onTimerExpired(data);
    }
    return;
  }
  timerFiredPhase = null;

  state.timerInterval = setInterval(() => {
    if (state.localTimerSeconds <= 0) return;
    const scale = state.devTimerScale || 1;
    state.localTimerSeconds = Math.max(0, state.localTimerSeconds - scale);
    updateTimerDisplay(state.localTimerSeconds);
    const shouldSync = isActingHost(data) && (
      state.localTimerSeconds === 0 || scale > 1 || state.localTimerSeconds % 5 === 0
    );
    if (shouldSync && state.currentRoomCode) {
      updateDoc(doc(db, "rooms", state.currentRoomCode), { timerSeconds: state.localTimerSeconds }).catch(() => {});
    }
    if (state.localTimerSeconds === 0) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
      if (isActingHost(data) && timerFiredPhase !== data.phase) {
        timerFiredPhase = data.phase;
        onTimerExpired(data);
      }
    }
  }, 1000);
}

async function onTimerExpired(data) {
  if (!isActingHost(data) || phaseAdvancing) return;
  phaseAdvancing = true;
  try {
    const snap = await getDoc(doc(db, "rooms", state.currentRoomCode));
    if (!snap.exists()) return;
    const fresh = snap.data();
    if (fresh.phase !== data.phase) return;
    if (fresh.phase === 'FINAL_VOTE') await resolveFinalVote(fresh);
    else await proceedNextPhase(fresh);
  } finally {
    phaseAdvancing = false;
  }
}

function handleStateUpdate(data, notifyDev = true) {
  latestRoomData = data;
  state.currentPhase = data.phase;
  state.isCurrentHost = (data.hostId === state.myPlayerId);
  document.body.dataset.phase = data.phase || "";

  const pCount = Object.keys(data.players || {}).length;
  document.getElementById('displayRoomCode').innerText = data.roomCode;
  document.getElementById('playerCount').innerText = pCount;

  syncHostNotice(data);
  syncSystemNotice(data);

  const hostInputArea = document.getElementById('hostAnnouncementInputBox');
  if (state.isCurrentHost && !['LOBBY', 'ENDING'].includes(data.phase)) {
    hostInputArea.classList.remove('hidden');
  } else {
    hostInputArea.classList.add('hidden');
  }

  setupTimer(data);

  const hostNextControl = document.getElementById('hostNextPhaseControl');
  if (state.isCurrentHost && !['LOBBY', 'PROLOGUE', 'FINAL_VOTE', 'ENDING'].includes(data.phase)) {
    hostNextControl.classList.remove('hidden');
  } else {
    hostNextControl.classList.add('hidden');
  }

  updateSystemDiscordGuide(data);
  handleWhisperNotice(data);
  handleSkipVoteModal(data);
  handleCardShareSync(data);

  if (notifyDev) {
    try {
      if (typeof devHooks.onRoomUpdate === "function") devHooks.onRoomUpdate(data);
    } catch (err) {
      console.error(err);
    }
  }

  if (data.phase === 'LOBBY') {
    switchView('viewCharacterSelect');
    renderCharacterSelection(data);
    return;
  }

  if (data.phase === 'PROLOGUE') {
    switchView('viewPrologue');
    renderPrologue(data);
    return;
  }

  if (data.phase === 'ENDING') {
    switchView('viewEnding');
    renderEnding(data);
    return;
  }

  switchView('viewGame');
  renderInGameDashboard(data);
}

function syncHostNotice(data) {
  const modal = document.getElementById('hostNoticeModal');
  const bar = document.getElementById('hostNoticeReopenBar');
  const textEl = document.getElementById('hostNoticeModalText');
  if (!modal || !bar) return;

  const text = data.announcement || "";
  const at = Number(data.announcementAt) || 0;
  if (!text || !at) {
    modal.classList.add('hidden');
    bar.classList.add('hidden');
    return;
  }

  if (textEl) textEl.innerText = text;
  if (at > state.lastSeenAnnouncementAt) {
    state.lastSeenAnnouncementAt = at;
    state.hostNoticeDismissed = false;
  }

  if (state.hostNoticeDismissed) {
    modal.classList.add('hidden');
    bar.classList.remove('hidden');
  } else {
    modal.classList.remove('hidden');
    bar.classList.add('hidden');
  }
}

function syncSystemNotice(data) {
  const line = document.getElementById('systemNoticeLine');
  if (!line) return;
  if (data.systemNotice) {
    line.textContent = data.systemNotice;
    line.classList.remove('hidden');
  } else {
    line.textContent = "";
    line.classList.add('hidden');
  }
}

export function refreshFromLatest() {
  if (latestRoomData) handleStateUpdate(latestRoomData, false);
}

async function assignRandomCharacters(data) {
  const pids = Object.keys(data.players);
  const is5P = pids.length >= 5;
  const availableChars = state.currentScenario.characters.filter(c => c.isDefault || is5P).map(c => c.id);

  for (let i = availableChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availableChars[i], availableChars[j]] = [availableChars[j], availableChars[i]];
  }

  const updates = {};
  pids.forEach((pid, idx) => {
    updates[`players.${pid}.charId`] = availableChars[idx];
  });

  await updateDoc(doc(db, "rooms", state.currentRoomCode), updates);
}

window.pickCharacter = async function(charId) {
  if (!state.currentRoomCode) return;
  await updateDoc(doc(db, "rooms", state.currentRoomCode), {
    [`players.${state.myPlayerId}.charId`]: charId
  });
};

function handleSkipVoteModal(data) {
  const modal = document.getElementById('skipVoteModal');
  const sv = data.skipVote;
  if (!sv || sv.status !== 'VOTING') {
    modal.classList.add('hidden');
    return;
  }

  const pids = Object.keys(data.players || {});
  const myVote = sv.votes && sv.votes[state.myPlayerId];

  if (myVote === undefined) {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }

  if (state.isCurrentHost) {
    const votes = sv.votes || {};
    const voteCount = Object.keys(votes).length;

    const hasNo = Object.values(votes).some(v => v === false);
    if (hasNo) {
      const msg = "다음 단계 스킵 요청이 부결되었습니다. (반대 표 발생)";
      updateDoc(doc(db, "rooms", state.currentRoomCode), {
        skipVote: null,
        systemNotice: msg
      });
      setTimeout(async () => {
        try {
          const snap = await getDoc(doc(db, "rooms", state.currentRoomCode));
          if (snap.exists() && snap.data().systemNotice === msg) {
            await updateDoc(doc(db, "rooms", state.currentRoomCode), { systemNotice: "" });
          }
        } catch (err) {
          console.error(err);
        }
      }, 4000);
      return;
    }

    if (voteCount === pids.length && Object.values(votes).every(v => v === true)) {
      updateDoc(doc(db, "rooms", state.currentRoomCode), { skipVote: null });
      proceedNextPhase(data);
    }
  }
}

async function proceedNextPhase(data) {
  let nextPhase = 'R1';
  let nextRound = data.round;
  let nextTimer = 900;
  const pCount = Object.keys(data.players || {}).length;
  const isTwoPlayers = (pCount === 2);

  switch(data.phase) {
    case 'R1':
      nextPhase = 'R2';
      nextRound = 2;
      nextTimer = 900;
      break;
    case 'R2':
      if (isTwoPlayers) {
        nextPhase = 'R3';
        nextRound = 3;
        nextTimer = 900;
      } else {
        nextPhase = 'R2_WHISPER';
        nextRound = 2;
        nextTimer = 300;
      }
      break;
    case 'R2_WHISPER':
      nextPhase = 'R3';
      nextRound = 3;
      nextTimer = 900;
      break;
    case 'R3':
      nextPhase = 'R4';
      nextRound = 4;
      nextTimer = 900;
      break;
    case 'R4':
      if (isTwoPlayers) {
        nextPhase = 'R5_DEFENSE';
        nextRound = 5;
        nextTimer = 600;
      } else {
        nextPhase = 'R4_WHISPER';
        nextRound = 4;
        nextTimer = 300;
      }
      break;
    case 'R4_WHISPER':
      nextPhase = 'R5_DEFENSE';
      nextRound = 5;
      nextTimer = 600;
      break;
    case 'R5_DEFENSE':
      nextPhase = 'FINAL_VOTE';
      nextRound = 5;
      nextTimer = FINAL_VOTE_SECONDS;
      break;
    default:
      return;
  }

  document.getElementById('whisperNoticeModal').classList.add('hidden');

  await updateDoc(doc(db, "rooms", state.currentRoomCode), {
    phase: nextPhase,
    round: nextRound,
    timerSeconds: nextTimer,
    roundInvestigateDone: {},
    roundClueDone: {},
    skipVote: null,
    whisperRooms: { room1: [], room2: [] },
    announcement: "",
    systemNotice: ""
  });
}

async function beginRound1() {
  await updateDoc(doc(db, "rooms", state.currentRoomCode), {
    phase: 'R1',
    round: 1,
    timerSeconds: 900,
    roundInvestigateDone: {},
    roundClueDone: {},
    skipVote: null,
    announcement: "",
    systemNotice: ""
  });
}

export async function forceAdvance() {
  if (!state.currentRoomCode) return;
  const snap = await getDoc(doc(db, "rooms", state.currentRoomCode));
  if (!snap.exists()) return;
  const data = snap.data();
  if (!isActingHost(data) || data.phase === 'ENDING') return;

  if (data.phase === 'LOBBY') {
    const players = Object.values(data.players || {});
    if (players.length < 2 || players.some(p => !p.charId)) {
      alert("모든 플레이어가 역할을 고른 뒤에 다음 단계로 갈 수 있습니다.");
      return;
    }
    await updateDoc(doc(db, "rooms", state.currentRoomCode), { phase: 'PROLOGUE' });
    return;
  }

  if (data.phase === 'PROLOGUE') {
    await beginRound1();
    return;
  }

  if (data.phase === 'FINAL_VOTE') {
    await resolveFinalVote(data);
    return;
  }

  await proceedNextPhase(data);
}

function handleWhisperNotice(data) {
  const pCount = Object.keys(data.players || {}).length;
  if (pCount === 2) return;

  const isWhisper = data.phase.includes('WHISPER');
  if (!isWhisper) {
    document.getElementById('whisperNoticeModal').classList.add('hidden');
    state.lastNotifiedWhisperPhase = null;
    return;
  }

  const r1 = data.whisperRooms?.room1 || [];
  const r2 = data.whisperRooms?.room2 || [];

  if (state.lastNotifiedWhisperPhase !== data.phase) {
    if (r1.includes(state.myPlayerId)) {
      document.getElementById('whisperNoticeRoomText').innerText = "🎧 [디스코드 밀담방 1]로 이동하세요!";
      document.getElementById('whisperNoticeModal').classList.remove('hidden');
      state.lastNotifiedWhisperPhase = data.phase;
    } else if (r2.includes(state.myPlayerId)) {
      document.getElementById('whisperNoticeRoomText').innerText = "🎧 [디스코드 밀담방 2]로 이동하세요!";
      document.getElementById('whisperNoticeModal').classList.remove('hidden');
      state.lastNotifiedWhisperPhase = data.phase;
    }
  }
}

function handleCardShareSync(data) {
  const share = data.sharedCard;
  if (!share || !share.timestamp) return;
  if (share.timestamp <= state.lastHandledShareTimestamp) return;

  state.lastHandledShareTimestamp = share.timestamp;

  if (share.senderPid !== state.myPlayerId) {
    const inMyRoom = (share.roomType === 'room1' && data.whisperRooms?.room1?.includes(state.myPlayerId)) ||
                     (share.roomType === 'room2' && data.whisperRooms?.room2?.includes(state.myPlayerId));
    if (inMyRoom) {
      document.getElementById('cardShareSenderText').innerText = `${share.senderName}님이 증거를 실물 공유했습니다.`;
      document.getElementById('cardShareImg').src = share.cardImg || "";
      document.getElementById('cardShareTitle').innerText = share.cardTitle;
      document.getElementById('cardShareDesc').innerText = share.cardDesc;
      document.getElementById('cardShareModal').classList.remove('hidden');
    }
  }
}

async function investigateAlibi(targetCharId, data, isNPC) {
  const pool = data.alibiPool && data.alibiPool[targetCharId];
  if (!pool || pool.length === 0) return alert("해당 인물의 알리바이 카드가 모두 소진되었습니다.");

  const randomIndex = Math.floor(Math.random() * pool.length);
  const cardNum = pool[randomIndex];
  const newPool = [...pool];
  newPool.splice(randomIndex, 1);

  const targetChar = state.currentScenario.characters.find(c => c.id === targetCharId);
  const cardObj = targetChar.alibiCards[cardNum];

  let cardTitle = cardObj.name || `${targetChar.name}의 알리바이 #${cardNum + 1}`;
  let cardText = cardObj.desc || "";
  let cardImg = cardObj.img || "";

  const myInv = (data.playerInventories && data.playerInventories[state.myPlayerId]) || { alibis: [], clues: [] };
  const updatedAlibis = [...(myInv.alibis || []), {
    charId: targetCharId,
    charName: `${targetChar.name}${isNPC ? ' (NPC)' : ''}`,
    cardNum: cardNum + 1,
    title: cardTitle,
    text: cardText,
    img: cardImg
  }];

  const doneCount = ((data.roundInvestigateDone && data.roundInvestigateDone[state.myPlayerId]) || 0) + 1;

  await updateDoc(doc(db, "rooms", state.currentRoomCode), {
    [`alibiPool.${targetCharId}`]: newPool,
    [`playerInventories.${state.myPlayerId}.alibis`]: updatedAlibis,
    [`roundInvestigateDone.${state.myPlayerId}`]: doneCount
  });

  window.showEvidenceModal(
    `[${targetChar.name}${isNPC ? ' (NPC 용의자)' : ''} 알리바이 카드 확보 (5장 중 #${cardNum + 1})]`,
    `제목: ${cardTitle}`,
    `내용: "${cardText}"\n\n내 단서 보관함에 저장되었습니다.`,
    cardImg
  );
}

async function shareCardToWhisperRoom(roomType, title, desc, img, data) {
  const myInfo = data.players[state.myPlayerId];
  const myChar = state.currentScenario.characters.find(c => c.id === myInfo.charId);
  const myRPName = myChar ? myChar.name : (myInfo ? myInfo.nickname : "플레이어");

  await updateDoc(doc(db, "rooms", state.currentRoomCode), {
    sharedCard: {
      roomType: roomType,
      senderPid: state.myPlayerId,
      senderName: myRPName,
      cardTitle: title,
      cardDesc: desc,
      cardImg: img || "",
      timestamp: Date.now()
    }
  });

  alert(`[${title}] 증거를 밀담룸 플레이어들에게 실물로 공개했습니다!`);
}

export function computeVoteWinner(votes, data) {
  const killerId = state.currentScenario.killerId;
  const killerPid = Object.entries(data.players || {}).find(([, p]) => p.charId === killerId)?.[0] || null;
  const tally = {};

  Object.entries(votes || {}).forEach(([pid, cid]) => {
    if (!cid) return;
    if (killerPid && pid === killerPid) return;
    tally[cid] = (tally[cid] || 0) + 1;
  });

  let maxCount = 0;
  const topCandidates = [];
  Object.entries(tally).forEach(([cid, cnt]) => {
    if (cnt > maxCount) {
      maxCount = cnt;
      topCandidates.length = 0;
      topCandidates.push(cid);
    } else if (cnt === maxCount) {
      topCandidates.push(cid);
    }
  });

  return topCandidates.includes(killerId) ? 'CITIZEN' : 'KILLER';
}

export async function resolveFinalVote(source) {
  if (resolvingVote || !state.currentRoomCode) return;
  if (!isActingHost(source)) return;
  resolvingVote = true;
  try {
    const snap = await getDoc(doc(db, "rooms", state.currentRoomCode));
    if (!snap.exists()) return;
    const fresh = snap.data();
    if (fresh.phase !== 'FINAL_VOTE') return;
    const winner = computeVoteWinner(fresh.votes || {}, fresh);
    await updateDoc(doc(db, "rooms", state.currentRoomCode), {
      phase: 'ENDING',
      winner,
      timerSeconds: 0
    });
  } finally {
    resolvingVote = false;
  }
}

async function submitVote(targetCharId, data) {
  const targetChar = state.currentScenario.characters.find(c => c.id === targetCharId);
  const targetName = targetChar ? targetChar.name : targetCharId;

  if (!confirm(`정말 '${targetName}'을(를) 사건의 진범으로 지목하시겠습니까?\n한 번 제출하면 변경할 수 없습니다.`)) return;

  const updatedVotes = { ...(data.votes || {}), [state.myPlayerId]: targetCharId };
  const playerIds = Object.keys(data.players || {});
  const allVoted = playerIds.every(pid => !!updatedVotes[pid]);

  if (allVoted) {
    const winner = computeVoteWinner(updatedVotes, data);
    await updateDoc(doc(db, "rooms", state.currentRoomCode), {
      votes: updatedVotes,
      phase: 'ENDING',
      winner
    });
  } else {
    await updateDoc(doc(db, "rooms", state.currentRoomCode), {
      votes: updatedVotes
    });
  }
}

actions.assignRandomCharacters = assignRandomCharacters;
actions.investigateAlibi = investigateAlibi;
actions.shareCardToWhisperRoom = shareCardToWhisperRoom;
actions.submitVote = submitVote;

export function initGame() {
  document.getElementById('btnHeaderHome').addEventListener('click', () => {
    if (state.currentRoomCode) {
      if (!confirm("현재 진행 중인 방에서 나가고 시나리오 선택 화면으로 이동하시겠습니까?")) return;
      if (state.roomUnsubscribe) { state.roomUnsubscribe(); state.roomUnsubscribe = null; }
      state.currentRoomCode = null;
    }
    switchView('viewThemeSelect');
  });

  document.getElementById('btnSendHostNotice').addEventListener('click', async () => {
    const val = document.getElementById('inputHostNotice').value.trim();
    if (!val || !state.currentRoomCode) return;
    await updateDoc(doc(db, "rooms", state.currentRoomCode), {
      announcement: val,
      announcementAt: Date.now()
    });
  });
  document.getElementById('btnClearHostNotice').addEventListener('click', async () => {
    document.getElementById('inputHostNotice').value = "";
    if (!state.currentRoomCode) return;
    await updateDoc(doc(db, "rooms", state.currentRoomCode), { announcement: "" });
  });

  const dismissHostNotice = () => {
    state.hostNoticeDismissed = true;
    document.getElementById('hostNoticeModal').classList.add('hidden');
    if (document.getElementById('hostNoticeModalText').innerText.trim()) {
      document.getElementById('hostNoticeReopenBar').classList.remove('hidden');
    }
  };
  document.getElementById('btnDismissHostNotice').addEventListener('click', dismissHostNotice);
  document.getElementById('btnCloseHostNoticeModal').addEventListener('click', dismissHostNotice);
  document.getElementById('hostNoticeReopenBar').addEventListener('click', () => {
    state.hostNoticeDismissed = false;
    document.getElementById('hostNoticeModal').classList.remove('hidden');
    document.getElementById('hostNoticeReopenBar').classList.add('hidden');
  });

  // 방 생성
  document.getElementById('btnCreateRoom').addEventListener('click', async () => {
    const nick = document.getElementById('inputNickname').value.trim();
    if (!nick) return alert("닉네임을 입력해 주세요.");
    if (!state.currentScenario) await loadScenarioModule(state.currentThemeId);

    const roomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
    state.currentRoomCode = roomCode;

    const initialAlibiPool = {};
    state.currentScenario.characters.forEach(c => {
      initialAlibiPool[c.id] = [0, 1, 2, 3, 4];
    });

    const roomData = {
      roomCode: roomCode,
      themeId: state.currentThemeId,
      hostId: state.myPlayerId,
      phase: 'LOBBY',
      round: 1,
      timerSeconds: 900,
      players: {
        [state.myPlayerId]: { nickname: nick, charId: null, isHost: true }
      },
      alibiPool: initialAlibiPool,
      cluePool: state.currentScenario.clues.map(c => c.id),
      drawnClues: {},
      playerInventories: {},
      roundInvestigateDone: {},
      roundClueDone: {},
      skipVote: null,
      whisperRooms: { room1: [], room2: [] },
      sharedCard: null,
      votes: {},
      announcement: "",
      systemNotice: ""
    };
    if (new URLSearchParams(location.search).get("test") === "1") roomData.test = true;

    await setDoc(doc(db, "rooms", roomCode), roomData);
    listenToRoom(roomCode);
  });

  // 방 참가
  document.getElementById('btnJoinRoom').addEventListener('click', async () => {
    const nick = document.getElementById('inputNickname').value.trim();
    const code = document.getElementById('inputRoomCode').value.trim().toUpperCase();
    if (!nick || !code) return alert("닉네임과 방 코드를 모두 입력해 주세요.");

    const roomRef = doc(db, "rooms", code);
    const snap = await getDoc(roomRef);
    if (!snap.exists()) return alert("해당 방이 존재하지 않습니다.");

    const rData = snap.data();
    const players = rData.players || {};
    const alreadyIn = !!players[state.myPlayerId];
    if (rData.phase !== 'LOBBY') {
      return alert("이미 시작된 방에는 참가할 수 없습니다.");
    }
    if (!alreadyIn && Object.keys(players).length >= MAX_PLAYERS) {
      return alert("이 방은 최대 5명까지 참가할 수 있습니다.");
    }
    if (rData.themeId !== state.currentThemeId) {
      state.currentThemeId = rData.themeId;
      await loadScenarioModule(state.currentThemeId);
    }

    await updateDoc(roomRef, {
      [`players.${state.myPlayerId}`]: { nickname: nick, charId: null, isHost: false }
    });
    state.currentRoomCode = code;
    listenToRoom(code);
  });

  document.getElementById('btnStartGame').addEventListener('click', async () => {
    await updateDoc(doc(db, "rooms", state.currentRoomCode), { phase: 'PROLOGUE' });
  });

  document.getElementById('btnProceedToRound1').addEventListener('click', async () => {
    await beginRound1();
  });

  document.getElementById('btnRequestNextPhase').addEventListener('click', async () => {
    if (!state.isCurrentHost) return;
    const snap = await getDoc(doc(db, "rooms", state.currentRoomCode));
    if (!snap.exists()) return;
    const data = snap.data();

    if (data.skipVote && data.skipVote.status === 'VOTING') {
      return alert("이미 스킵 투표가 진행 중입니다.");
    }

    await updateDoc(doc(db, "rooms", state.currentRoomCode), {
      skipVote: {
        status: 'VOTING',
        votes: { [state.myPlayerId]: true }
      }
    });
  });

  document.getElementById('btnSkipVoteYes').addEventListener('click', async () => {
    await updateDoc(doc(db, "rooms", state.currentRoomCode), {
      [`skipVote.votes.${state.myPlayerId}`]: true
    });
    document.getElementById('skipVoteModal').classList.add('hidden');
  });

  document.getElementById('btnSkipVoteNo').addEventListener('click', async () => {
    await updateDoc(doc(db, "rooms", state.currentRoomCode), {
      [`skipVote.votes.${state.myPlayerId}`]: false
    });
    document.getElementById('skipVoteModal').classList.add('hidden');
  });

  document.getElementById('btnDrawClue').addEventListener('click', async () => {
    const snap = await getDoc(doc(db, "rooms", state.currentRoomCode));
    if (!snap.exists()) return;
    const data = snap.data();

    if (data.roundClueDone && data.roundClueDone[state.myPlayerId]) {
      return alert("현장 증거는 라운드당 1회만 수색할 수 있습니다.");
    }

    const pool = data.cluePool || [];
    if (pool.length === 0) return alert("더 이상 수색할 현장 증거가 없습니다.");

    const randomIndex = Math.floor(Math.random() * pool.length);
    const clueId = pool[randomIndex];
    const newPool = [...pool];
    newPool.splice(randomIndex, 1);

    const clueObj = state.currentScenario.clues.find(c => c.id === clueId);
    const myInv = (data.playerInventories && data.playerInventories[state.myPlayerId]) || { alibis: [], clues: [] };
    const updatedClues = [...(myInv.clues || []), clueId];

    await updateDoc(doc(db, "rooms", state.currentRoomCode), {
      cluePool: newPool,
      [`playerInventories.${state.myPlayerId}.clues`]: updatedClues,
      [`roundClueDone.${state.myPlayerId}`]: true
    });

    const clueName = clueObj ? clueObj.name : clueId;
    window.showEvidenceModal(
      `[현장 증거 발견: ${clueName}]`,
      clueName,
      `"${clueObj ? clueObj.desc : ''}"\n\n내 단서 보관함에 보관되었습니다.`,
      clueObj && clueObj.img ? clueObj.img : ""
    );
  });

  document.getElementById('btnAssignRoom1').addEventListener('click', async () => {
    const snap = await getDoc(doc(db, "rooms", state.currentRoomCode));
    if (!snap.exists()) return;
    const data = snap.data();

    const selected = Array.from(document.querySelectorAll('.chk-whisper-1:checked')).map(el => el.value);
    const cleanedRoom2 = (data.whisperRooms?.room2 || []).filter(pid => !selected.includes(pid));

    await updateDoc(doc(db, "rooms", state.currentRoomCode), {
      'whisperRooms.room1': selected,
      'whisperRooms.room2': cleanedRoom2,
      systemNotice: "밀담룸 1 배정이 확정되었습니다. 배정된 인원은 디스코드 밀담방 1로 이동하세요!"
    });
  });

  document.getElementById('btnAssignRoom2').addEventListener('click', async () => {
    const snap = await getDoc(doc(db, "rooms", state.currentRoomCode));
    if (!snap.exists()) return;
    const data = snap.data();

    const selected = Array.from(document.querySelectorAll('.chk-whisper-2:checked')).map(el => el.value);
    const cleanedRoom1 = (data.whisperRooms?.room1 || []).filter(pid => !selected.includes(pid));

    await updateDoc(doc(db, "rooms", state.currentRoomCode), {
      'whisperRooms.room2': selected,
      'whisperRooms.room1': cleanedRoom1,
      systemNotice: "밀담룸 2 배정이 확정되었습니다. 배정된 인원은 디스코드 밀담방 2로 이동하세요!"
    });
  });
}
