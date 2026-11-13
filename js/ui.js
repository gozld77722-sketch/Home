import { state, actions } from "./state.js";

let audioCtx = null;
let isBgmPlaying = false;
let noiseNode = null;

function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

export function toggleRainBGM() {
  initAudio();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  if (isBgmPlaying) {
    if (noiseNode) { noiseNode.stop(); noiseNode.disconnect(); noiseNode = null; }
    isBgmPlaying = false;
    document.getElementById('btnToggleBGM').classList.remove('bg-amber-900', 'text-amber-200');
  } else {
    const bufferSize = audioCtx.sampleRate * 2;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }
    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = buffer;
    noiseNode.loop = true;
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.08;
    noiseNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    noiseNode.start();
    isBgmPlaying = true;
    document.getElementById('btnToggleBGM').classList.add('bg-amber-900', 'text-amber-200');
  }
}

export function switchView(viewId) {
  const views = ['viewThemeSelect', 'viewLobby', 'viewCharacterSelect', 'viewPrologue', 'viewGame', 'viewEnding'];
  views.forEach(v => {
    const el = document.getElementById(v);
    if (el) {
      if (v === viewId) el.classList.remove('hidden');
      else el.classList.add('hidden');
    }
  });
}

window.openImageDetail = function(imgSrc, title) {
  if (!imgSrc) return;
  document.getElementById('imageDetailTarget').src = imgSrc;
  document.getElementById('imageDetailCaption').innerText = title || "단서 이미지";
  document.getElementById('imageDetailModal').classList.remove('hidden');
};

window.showEvidenceModal = function(header, title, desc, img) {
  document.getElementById('evidenceModalHeader').innerText = header || "";
  document.getElementById('evidenceModalTitle').innerText = title || "";
  document.getElementById('evidenceModalDesc').innerText = desc || "";
  const imgEl = document.getElementById('evidenceModalImg');
  if (img) {
    imgEl.src = img;
    imgEl.classList.remove('hidden');
    imgEl.onclick = function() { window.openImageDetail(img, title); };
  } else {
    imgEl.removeAttribute('src');
    imgEl.classList.add('hidden');
    imgEl.onclick = null;
  }
  document.getElementById('evidenceModal').classList.remove('hidden');
};

function closeEvidenceModal() {
  document.getElementById('evidenceModal').classList.add('hidden');
}

export const SCENARIOS = ['winchester', 'express', 'hospital', 'glamping', 'cruise'];

function renderThemeCard(scenario) {
  const t = scenario.theme.card;
  return `
    <div class="noir-card rounded-2xl overflow-hidden ${t.borderClass} transition-all duration-300 shadow-xl flex flex-col justify-between group">
      <div>
        <div class="relative w-full h-40 overflow-hidden border-b border-neutral-800">
          <img src="${t.banner}" alt="${t.bannerAlt}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-75">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-2.5">
            <span class="${t.eraClass}">${t.era}</span>
          </div>
        </div>
        <div class="p-3.5 space-y-1.5">
          <div class="flex items-center justify-between">
            <h3 class="${t.titleClass}">${t.title}</h3>
            <span class="${t.playersClass}">${t.players}</span>
          </div>
          <p class="text-[11px] text-neutral-400 leading-relaxed break-keep">${t.blurb}</p>
        </div>
      </div>
      <div class="p-3.5 pt-0">
        <button onclick="selectThemeAndGoToLobby('${scenario.id}')" class="${t.buttonClass}">
          <i class="${t.buttonIconClass}"></i> 시작하기
        </button>
      </div>
    </div>
  `;
}

export async function renderThemeCards() {
  const grid = document.getElementById('themeCardGrid');
  if (!grid) return;
  const loaded = await Promise.all(
    SCENARIOS.map(id => import(`../scenarios/scenario-${id}.js`))
  );
  grid.innerHTML = loaded.map(({ default: scenario }) => renderThemeCard(scenario)).join('');
}

export function applyLobbyHeader(loaded) {
  const lobby = loaded.theme.lobby;
  const tagEl = document.getElementById('lobbyThemeTag');
  const coverImg = document.getElementById('lobbyCoverImg');
  const coverSub = document.getElementById('lobbyCoverSub');
  const lobbyTitle = document.getElementById('lobbyTitle');

  tagEl.innerText = lobby.tag;
  tagEl.className = lobby.tagClass;
  coverImg.src = loaded.prologue?.bannerImg || lobby.fallbackBanner;
  coverSub.innerText = lobby.subtitle;
  lobbyTitle.innerText = loaded.title || lobby.titleFallback;
}

export function updateTimerDisplay(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  const el = document.getElementById('gameTimer');
  if (el) el.innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function updateSystemDiscordGuide(data) {
  const guideText = document.getElementById('systemDiscordGuideText');
  const timeTag = document.getElementById('systemPhaseTimeTag');
  if (!guideText) return;

  const pCount = Object.keys(data.players || {}).length;

  switch(data.phase) {
    case 'R1':
      guideText.innerHTML = (pCount === 2) 
        ? `🎧 <strong>[2인 모드: 1R 시작]</strong> 밀담 없이 토론을 진행합니다. 상대방 및 <strong>NPC 용의자</strong> 알리바이(2회)와 현장 증거를 수색하세요!`
        : `🎧 <strong>[디스코드 메인 토론방]</strong> 1라운드 시작! 자유롭게 알리바이를 조사하고 현장 증거 1회를 수색하세요.`;
      timeTag.innerText = "15분 토론";
      break;
    case 'R2':
      guideText.innerHTML = (pCount === 2)
        ? `🎧 <strong>[2인 모드: 2R 토론]</strong> 상대방과 NPC의 타임라인 모순점을 파고드세요. (밀담 단계 생략)`
        : `🎧 <strong>[디스코드 메인 토론방]</strong> 2라운드 전체 토론 진행 중. 타임라인의 모순점을 찾으세요.`;
      timeTag.innerText = "15분 토론";
      break;
    case 'R2_WHISPER':
      guideText.innerHTML = `🤫 <strong>[디스코드 밀담방 1 & 2]</strong> 1차 듀얼 밀담 진행 중! 배정된 플레이어는 지정된 밀담방으로 이동하세요.`;
      timeTag.innerText = "5분 밀담";
      break;
    case 'R3':
      guideText.innerHTML = (pCount === 2)
        ? `🎧 <strong>[2인 모드: 3R 심층 추궁]</strong> 누적된 NPC 단서와 알리바이를 대조하며 압박하세요.`
        : `🎧 <strong>[디스코드 메인 토론방 복귀]</strong> 3라운드 심층 추궁! 전원 모여 알리바이를 압박하세요.`;
      timeTag.innerText = "15분 토론";
      break;
    case 'R4':
      guideText.innerHTML = (pCount === 2)
        ? `🎧 <strong>[2인 모드: 4R 마지막 토론]</strong> 결정적 물증을 대조해 진범(상대방 또는 제3의 NPC)을 좁히세요.`
        : `🎧 <strong>[디스코드 메인 토론방]</strong> 4라운드 마지막 토론 진행 중. 결정적인 물증을 비교하세요.`;
      timeTag.innerText = "15분 토론";
      break;
    case 'R4_WHISPER':
      guideText.innerHTML = `🤫 <strong>[디스코드 밀담방 1 & 2]</strong> 2차 듀얼 밀담 진행 중! 최종 비밀 연대 및 물증을 실물 공유하세요.`;
      timeTag.innerText = "5분 밀담";
      break;
    case 'R5_DEFENSE':
      guideText.innerHTML = `⚖️ <strong>[디스코드 메인 토론방]</strong> 5라운드 최후의 무죄 변론! 보관함의 단서를 보며 결백을 변론하세요.`;
      timeTag.innerText = "10분 변론";
      break;
    case 'FINAL_VOTE':
      guideText.innerHTML = `🚨 <strong>[최후의 지목 투표]</strong> 변론 종료! 진범을 화면에서 지목하세요 (NPC 용의자도 지목 가능!).`;
      timeTag.innerText = "최종 투표";
      break;
    default:
      guideText.innerText = `사건 조사를 진행하세요.`;
      timeTag.innerText = "";
  }
}

export function renderCharacterSelection(data) {
  const grid = document.getElementById('characterCardGrid');
  grid.innerHTML = "";
  const pCount = Object.keys(data.players || {}).length;
  const is5P = pCount >= 5;

  document.getElementById('scenarioModeBadge').innerText = (pCount === 2) 
    ? "2인 전용 모드 (밀담 생략 / NPC 조사)" 
    : ((pCount === 3) ? "3인 NPC 추리 모드" : (is5P ? "5인 완전 범죄 모드" : `${pCount}인 일반 모드`));

  const myInfo = data.players[state.myPlayerId];
  const randomBtn = document.getElementById('btnRandomAssign');

  if (myInfo && myInfo.isHost) {
    randomBtn.classList.remove('hidden');
    randomBtn.onclick = () => actions.assignRandomCharacters(data);
  } else {
    randomBtn.classList.add('hidden');
  }

  state.currentScenario.characters.forEach(char => {
    const isLocked = !char.isDefault && !is5P;
    let selectedBy = null;
    Object.entries(data.players).forEach(([pid, p]) => {
      if (p.charId === char.id) selectedBy = p.nickname;
    });

    const card = document.createElement('div');
    card.className = `p-3 rounded-lg border flex flex-col justify-between ${
      isLocked ? 'opacity-40 border-neutral-800 bg-neutral-950' : 'noir-card border-neutral-700'
    }`;

    card.innerHTML = `
      <div>
        <div class="flex items-center space-x-2.5 mb-2">
          <img src="${char.avatarImg}" loading="lazy" class="w-12 h-12 rounded object-cover border border-amber-600/50">
          <div>
            <h4 class="text-sm font-bold text-neutral-100">${char.name}</h4>
            <span class="text-[10px] text-amber-400 block">${char.role}</span>
          </div>
        </div>
        <p class="text-[11px] text-neutral-400 leading-snug break-keep mb-2">${char.description}</p>
      </div>
      <div>
        ${
          isLocked 
            ? `<span class="block text-center py-1 text-[11px] text-neutral-600 border border-neutral-800 rounded">5인 전용 잠김</span>`
            : selectedBy 
              ? `<span class="block text-center py-1 text-[11px] font-bold text-amber-400 bg-amber-950/60 border border-amber-800 rounded">[선택됨: ${selectedBy}]</span>`
              : `<button onclick="window.pickCharacter('${char.id}')" class="w-full py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-200 rounded border border-neutral-600 transition">선택하기</button>`
        }
      </div>
    `;
    grid.appendChild(card);
  });

  const startBtn = document.getElementById('btnStartGame');
  const allSelected = Object.values(data.players).every(p => p.charId !== null);
  if (myInfo && myInfo.isHost) {
    startBtn.classList.remove('hidden');
    if (pCount >= 2 && allSelected) {
      startBtn.disabled = false;
      startBtn.className = "w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-100 text-sm font-bold rounded shadow transition cursor-pointer";
    } else {
      startBtn.disabled = true;
      startBtn.className = "w-full sm:w-auto px-6 py-2.5 bg-neutral-800 text-neutral-500 text-sm font-bold rounded cursor-not-allowed";
    }
  } else {
    startBtn.classList.add('hidden');
  }
}

export function renderPrologue(data) {
  document.getElementById('prologueBannerImg').src = state.currentScenario.prologue.bannerImg;
  document.getElementById('prologueLocationLabel').innerText = state.currentScenario.prologue.location;

  const storyContainer = document.getElementById('prologueStoryText');
  storyContainer.innerHTML = state.currentScenario.prologue.story.map(st => `<p>• ${st}</p>`).join('');

  const myInfo = data.players[state.myPlayerId];
  const proceedBtn = document.getElementById('btnProceedToRound1');
  const hostNotice = document.getElementById('prologueHostNotice');

  if (myInfo && myInfo.isHost) {
    proceedBtn.classList.remove('hidden');
    hostNotice.classList.add('hidden');
  } else {
    proceedBtn.classList.add('hidden');
    hostNotice.classList.remove('hidden');
  }
}

export function renderInGameDashboard(data) {
  const myInfo = data.players[state.myPlayerId];
  if (!myInfo || !myInfo.charId) return;

  const myChar = state.currentScenario.characters.find(c => c.id === myInfo.charId);
  if (myChar) {
    document.getElementById('myCharAvatarImg').src = myChar.avatarImg;
    document.getElementById('myCharName').innerText = myChar.name;
    document.getElementById('myCharRole').innerText = myChar.role;

    const secretBox = document.getElementById('mySecretContent');
    secretBox.innerHTML = `
      <div class="p-2.5 bg-black/60 rounded border border-neutral-800">
        <span class="text-amber-400 font-bold block mb-1">내면의 비밀</span>
        <p class="leading-relaxed">${myChar.secret}</p>
      </div>
      <div class="p-2.5 bg-black/60 rounded border border-neutral-800">
        <span class="text-amber-400 font-bold block mb-1">사건 당일 타임라인</span>
        <ul class="space-y-1 list-disc pl-4 text-[11px] text-neutral-300">
          ${myChar.timeline.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  const phaseTitles = {
    R1: "1라운드: 사건 발생 & 상호 알리바이",
    R2: "2라운드: 현장 조사 토론",
    R2_WHISPER: "2라운드: 1차 듀얼 밀담",
    R3: "3라운드: 알리바이 균열 & 심층 추궁",
    R4: "4라운드: 마지막 물증 토론",
    R4_WHISPER: "4라운드: 2차 듀얼 밀담",
    R5_DEFENSE: "5라운드: 최후의 무죄 변론",
    FINAL_VOTE: "5라운드: 최후의 지목 투표"
  };
  document.getElementById('gameRoundLabel').innerText = phaseTitles[data.phase] || `${data.round}라운드 진행 중`;
  document.getElementById('gamePhaseBadge').innerText = data.phase.includes('WHISPER') ? '비밀 밀담' : (data.phase === 'FINAL_VOTE' ? '최종 투표' : '토론 & 수색');

  if (data.phase === 'R5_DEFENSE') {
    document.getElementById('defenseTopNotice').classList.remove('hidden');
    document.getElementById('finalVoteSection').classList.add('hidden');
  } else if (data.phase === 'FINAL_VOTE') {
    document.getElementById('defenseTopNotice').classList.add('hidden');
    document.getElementById('finalVoteSection').classList.remove('hidden');
    renderFinalVoteSection(data);
  } else {
    document.getElementById('defenseTopNotice').classList.add('hidden');
    document.getElementById('finalVoteSection').classList.add('hidden');
  }

  renderAlibiSection(data, myInfo);
  renderClueSection(data);
  renderInventory(data);
  renderWhisperSection(data);
}

function renderAlibiSection(data, myInfo) {
  const container = document.getElementById('alibiInvestigateButtons');
  const badge = document.getElementById('alibiCountBadge');
  container.innerHTML = "";

  const pCount = Object.keys(data.players || {}).length;
  const maxInvestigate = (pCount === 2) ? 2 : 1;
  const doneCount = (data.roundInvestigateDone && data.roundInvestigateDone[state.myPlayerId]) || 0;
  const remainCount = Math.max(0, maxInvestigate - doneCount);

  badge.innerText = `내 조사 가능: ${remainCount}회`;

  const isWhisperOrVote = data.phase.includes('WHISPER') || data.phase === 'R5_DEFENSE' || data.phase === 'FINAL_VOTE';
  if (isWhisperOrVote) {
    container.innerHTML = `<p class="col-span-2 text-xs text-neutral-500 italic text-center py-2">현재 단계에서는 조사가 불가능합니다.</p>`;
    return;
  }

  const pickedCharIds = Object.values(data.players || {}).map(p => p.charId).filter(Boolean);

  state.currentScenario.characters.forEach(charDef => {
    if (charDef.id === myInfo.charId) return;
    if (!charDef.isDefault && pCount < 5) return;

    const isPlayer = pickedCharIds.includes(charDef.id);
    const playerEntry = Object.entries(data.players).find(([pid, p]) => p.charId === charDef.id);
    const playerNick = playerEntry ? playerEntry[1].nickname : null;

    const pool = (data.alibiPool && data.alibiPool[charDef.id]) || [];
    const remainCardsCount = pool.length;

    const btn = document.createElement('button');
    const canInvestigate = remainCount > 0 && remainCardsCount > 0;
    btn.disabled = !canInvestigate;

    btn.className = `p-2 rounded border text-xs font-semibold flex items-center justify-between transition ${
      canInvestigate 
        ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border-amber-900/60 cursor-pointer' 
        : 'bg-neutral-900 text-neutral-600 border-neutral-800 cursor-not-allowed'
    }`;

    btn.innerHTML = `
      <div class="flex items-center space-x-2 truncate">
        <img src="${charDef.avatarImg}" loading="lazy" class="w-6 h-6 rounded-full object-cover">
        <div class="truncate text-left">
          <span class="truncate block">${charDef.name}</span>
          <span class="text-[9px] block ${isPlayer ? 'text-amber-400' : 'text-cyan-400'}">
            ${isPlayer ? `(${playerNick})` : '[NPC 용의자]'}
          </span>
        </div>
      </div>
      <span class="text-[10px] px-1.5 py-0.5 rounded ${remainCardsCount > 0 ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'bg-neutral-800 text-neutral-500'}">
        ${remainCardsCount}/5장
      </span>
    `;

    btn.addEventListener('click', () => actions.investigateAlibi(charDef.id, data, !isPlayer));
    container.appendChild(btn);
  });
}

function renderClueSection(data) {
  const btn = document.getElementById('btnDrawClue');
  const poolCount = (data.cluePool || []).length;
  const isWhisperOrVote = data.phase.includes('WHISPER') || data.phase === 'FINAL_VOTE' || data.phase === 'R5_DEFENSE';
  const hasDrawnThisRound = !!(data.roundClueDone && data.roundClueDone[state.myPlayerId]);

  if (isWhisperOrVote || poolCount === 0 || hasDrawnThisRound) {
    btn.disabled = true;
    btn.className = "w-full py-2 bg-neutral-900 text-neutral-500 text-xs font-semibold rounded border border-neutral-800 cursor-not-allowed";
    if (hasDrawnThisRound) {
      btn.innerHTML = `<i class="fa-solid fa-check mr-1.5 text-emerald-500"></i> 이번 라운드 증거 수색 완료 (라운드당 1회)`;
    } else if (poolCount === 0) {
      btn.innerHTML = `<i class="fa-solid fa-lock mr-1.5 text-neutral-600"></i> 현장 증거 전량 수색 완료`;
    } else {
      btn.innerHTML = `<i class="fa-solid fa-lock mr-1.5 text-neutral-600"></i> 현재 단계 수색 불가`;
    }
  } else {
    btn.disabled = false;
    btn.className = "w-full py-2.5 bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-amber-100 text-xs font-bold rounded border border-amber-600/70 shadow transition flex items-center justify-center cursor-pointer";
    btn.innerHTML = `<i class="fa-solid fa-magnifying-glass-arrow-right mr-1.5 text-amber-300"></i> 현장 증거 수색하기`;
  }
}

function renderInventory(data) {
  const myInv = (data.playerInventories && data.playerInventories[state.myPlayerId]) || { alibis: [], clues: [] };
  const alibiList = document.getElementById('myAlibiCardsList');
  const clueList = document.getElementById('myClueCardsList');
  const totalCount = (myInv.alibis?.length || 0) + (myInv.clues?.length || 0);

  document.getElementById('totalInventoryCount').innerText = `총 ${totalCount}건`;

  if (myInv.alibis && myInv.alibis.length > 0) {
    alibiList.innerHTML = myInv.alibis.map(a => {
      return `
        <div class="p-2 bg-neutral-900/80 border border-neutral-700/80 rounded text-xs space-y-1.5 shadow">
          <div class="flex items-center space-x-2">
            ${a.img ? `<img src="${a.img}" loading="lazy" onclick="window.openImageDetail('${a.img}', '${a.charName} 알리바이 (#${a.cardNum}/5)')" class="w-10 h-10 rounded object-cover border border-amber-600/60 cursor-pointer hover:opacity-80 transition flex-shrink-0" title="클릭하여 확대">` : ''}
            <div class="min-w-0 flex-1">
              <div class="text-amber-400 font-bold text-[11px] truncate">[알리바이 #${a.cardNum}/5] ${a.charName}</div>
              <div class="text-neutral-200 text-[10px] truncate font-semibold">${a.title || ''}</div>
            </div>
          </div>
          <p class="text-neutral-300 text-[11px] leading-relaxed break-keep bg-black/40 p-1.5 rounded">${a.text}</p>
        </div>
      `;
    }).join('');
  } else {
    alibiList.innerHTML = `<p class="text-xs text-neutral-600 italic">확보한 알리바이가 없습니다.</p>`;
  }

  if (myInv.clues && myInv.clues.length > 0) {
    clueList.innerHTML = myInv.clues.map(cid => {
      const c = state.currentScenario.clues.find(x => x.id === cid);
      const clueImg = c?.img || "";

      return `
        <div class="p-2 bg-neutral-900/80 border border-neutral-700/80 rounded text-xs space-y-1.5 shadow">
          <div class="flex items-center space-x-2">
            ${clueImg ? `<img src="${clueImg}" loading="lazy" onclick="window.openImageDetail('${clueImg}', '[현장 증거] ${c ? c.name : cid}')" class="w-10 h-10 rounded object-cover border border-amber-600/60 cursor-pointer hover:opacity-80 transition flex-shrink-0" title="클릭하여 확대">` : ''}
            <div class="min-w-0 flex-1">
              <span class="text-amber-400 font-bold text-[11px] block truncate">[현장 증거] ${c ? c.name : cid}</span>
            </div>
          </div>
          <p class="text-neutral-300 text-[11px] leading-relaxed break-keep bg-black/40 p-1.5 rounded">${c ? c.desc : ''}</p>
        </div>
      `;
    }).join('');
  } else {
    clueList.innerHTML = `<p class="text-xs text-neutral-600 italic">수색한 증거물이 없습니다.</p>`;
  }
}

function renderWhisperSection(data) {
  const box = document.getElementById('secretMeetingBox');
  const pCount = Object.keys(data.players || {}).length;
  const isWhisperPhase = data.phase.includes('WHISPER');

  if (pCount === 2 || !isWhisperPhase) {
    box.classList.add('hidden');
    return;
  }

  box.classList.remove('hidden');

  const room1 = data.whisperRooms?.room1 || [];
  const room2 = data.whisperRooms?.room2 || [];

  const getRPNames = (pids) => pids.map(id => {
    const p = data.players[id];
    if (!p) return '익명';
    const charDef = state.currentScenario.characters.find(c => c.id === p.charId);
    return charDef ? `${charDef.name} (${p.nickname})` : p.nickname;
  }).join(', ') || '<span class="text-neutral-500 italic">비어 있음</span>';

  document.getElementById('whisperRoom1Status').innerHTML = `• 밀담룸 1: ${getRPNames(room1)}`;
  document.getElementById('whisperRoom2Status').innerHTML = `• 밀담룸 2: ${getRPNames(room2)}`;

  const hostAssignArea = document.getElementById('hostWhisperAssignArea');
  if (state.isCurrentHost) {
    hostAssignArea.classList.remove('hidden');
    renderWhisperCheckboxes(data);
  } else {
    hostAssignArea.classList.add('hidden');
  }

  const activeArea = document.getElementById('whisperActiveArea');
  const inRoom1 = room1.includes(state.myPlayerId);
  const inRoom2 = room2.includes(state.myPlayerId);

  if (inRoom1 || inRoom2) {
    activeArea.classList.remove('hidden');
    document.getElementById('myWhisperRoomTitle').innerText = inRoom1 ? "밀담룸 1 참여 중 - 증거물품 실물 공유" : "밀담룸 2 참여 중 - 증거물품 실물 공유";
    renderWhisperCards(data, inRoom1 ? 'room1' : 'room2');
  } else {
    activeArea.classList.add('hidden');
  }
}

function renderWhisperCheckboxes(data) {
  const c1 = document.getElementById('whisperRoom1Checkboxes');
  const c2 = document.getElementById('whisperRoom2Checkboxes');
  c1.innerHTML = "";
  c2.innerHTML = "";

  state.currentScenario.characters.forEach(charDef => {
    const entry = Object.entries(data.players).find(([pid, p]) => p.charId === charDef.id);
    if (!entry) return;
    const [pid, p] = entry;

    const isR1 = (data.whisperRooms?.room1 || []).includes(pid);
    const isR2 = (data.whisperRooms?.room2 || []).includes(pid);

    c1.innerHTML += `
      <label class="flex items-center space-x-1.5 text-xs text-neutral-200">
        <input type="checkbox" value="${pid}" ${isR1 ? 'checked' : ''} onchange="window.handleWhisperCheckboxChange('${pid}', 1)" class="chk-whisper-1 chk-w1-${pid} rounded bg-neutral-800 border-neutral-600">
        <span class="truncate">${charDef.name} (${p.nickname})</span>
      </label>
    `;
    c2.innerHTML += `
      <label class="flex items-center space-x-1.5 text-xs text-neutral-200">
        <input type="checkbox" value="${pid}" ${isR2 ? 'checked' : ''} onchange="window.handleWhisperCheckboxChange('${pid}', 2)" class="chk-whisper-2 chk-w2-${pid} rounded bg-neutral-800 border-neutral-600">
        <span class="truncate">${charDef.name} (${p.nickname})</span>
      </label>
    `;
  });
}

window.handleWhisperCheckboxChange = function(pid, roomNum) {
  if (roomNum === 1) {
    const other = document.querySelector(`.chk-w2-${pid}`);
    if (other && other.checked) other.checked = false;
  } else {
    const other = document.querySelector(`.chk-w1-${pid}`);
    if (other && other.checked) other.checked = false;
  }
};

function renderWhisperCards(data, myRoomType) {
  const list = document.getElementById('whisperCardsList');
  const myInv = (data.playerInventories && data.playerInventories[state.myPlayerId]) || { alibis: [], clues: [] };
  list.innerHTML = "";

  const clues = myInv.clues || [];
  if (clues.length === 0) {
    list.innerHTML = `<span class="text-xs text-neutral-500 italic">공유 가능한 현장 증거가 없습니다. (알리바이는 음성으로만 전달)</span>`;
    return;
  }

  clues.forEach(cid => {
    const c = state.currentScenario.clues.find(x => x.id === cid);
    if (!c) return;
    const clueImg = c.img || "";

    const item = document.createElement('div');
    item.className = "flex items-center justify-between p-1.5 bg-black/40 rounded border border-neutral-800 text-[11px]";
    item.innerHTML = `
      <div class="flex items-center space-x-1.5 truncate">
        ${clueImg ? `<img src="${clueImg}" loading="lazy" class="w-6 h-6 rounded object-cover border border-amber-600/40">` : ''}
        <span class="text-neutral-300 truncate">[현장 증거] ${c.name}</span>
      </div>
      <button class="px-2 py-0.5 bg-amber-800 hover:bg-amber-700 text-amber-100 rounded text-[10px] font-bold">실물 공개</button>
    `;
    item.querySelector('button').addEventListener('click', () => {
      actions.shareCardToWhisperRoom(myRoomType, `[현장 증거] ${c.name}`, c.desc, clueImg, data);
    });
    list.appendChild(item);
  });
}

function renderFinalVoteSection(data) {
  const grid = document.getElementById('voteButtonsGrid');
  const board = document.getElementById('liveVoteBoard');
  const waitingText = document.getElementById('voteWaitingText');
  grid.innerHTML = "";
  board.innerHTML = "";

  const myVote = data.votes && data.votes[state.myPlayerId];
  if (myVote) {
    waitingText.classList.remove('hidden');
  } else {
    waitingText.classList.add('hidden');
  }

  const pCount = Object.keys(data.players || {}).length;
  const pickedCharIds = Object.values(data.players || {}).map(p => p.charId).filter(Boolean);

  state.currentScenario.characters.forEach(charDef => {
    const isMyChar = (charDef.id === data.players[state.myPlayerId]?.charId);
    if (isMyChar) return;
    if (!charDef.isDefault && pCount < 5) return;

    const isPlayer = pickedCharIds.includes(charDef.id);
    const playerEntry = Object.entries(data.players).find(([pid, p]) => p.charId === charDef.id);
    const playerNick = playerEntry ? playerEntry[1].nickname : null;

    if (!myVote) {
      const btn = document.createElement('button');
      btn.className = `px-3.5 py-2 border text-xs font-bold rounded flex items-center space-x-2 transition cursor-pointer ${
        isPlayer 
          ? 'bg-red-950 hover:bg-red-900 border-red-700 text-red-200' 
          : 'bg-indigo-950 hover:bg-indigo-900 border-indigo-700 text-indigo-200'
      }`;
      btn.innerHTML = `
        <img src="${charDef.avatarImg}" loading="lazy" class="w-5 h-5 rounded-full object-cover">
        <span>${charDef.name} ${isPlayer ? `(${playerNick})` : '<span class="text-[10px] text-indigo-400">[NPC 진범 지목]</span>'}</span>
      `;
      btn.addEventListener('click', () => actions.submitVote(charDef.id, data));
      grid.appendChild(btn);
    }
  });

  Object.entries(data.players).forEach(([pid, p]) => {
    const charDef = state.currentScenario.characters.find(c => c.id === p.charId);
    const votedTargetId = data.votes && data.votes[pid];
    let votedName = '<span class="text-neutral-500 italic">고민 중...</span>';
    if (votedTargetId) {
      const vChar = state.currentScenario.characters.find(c => c.id === votedTargetId);
      const isTargetNPC = !pickedCharIds.includes(votedTargetId);
      votedName = `<span class="text-red-400 font-bold">${vChar ? vChar.name : votedTargetId} ${isTargetNPC ? '(NPC)' : ''}</span>`;
    }

    board.innerHTML += `
      <div class="p-2 bg-neutral-900/80 rounded border border-neutral-800 flex justify-between items-center">
        <span>${charDef ? charDef.name : p.nickname} (${p.nickname})</span>
        <span>👉 ${votedName}</span>
      </div>
    `;
  });
}

export function renderEnding(data) {
  const truth = state.currentScenario.endings.truth;
  document.getElementById('endingTruthText').innerText = truth;

  const citizenWin = (data.winner === 'CITIZEN');
  const killerId = state.currentScenario.killerId;

  const myInfo = data.players[state.myPlayerId];
  const isMeKiller = (myInfo && myInfo.charId === killerId);

  const pickedCharIds = Object.values(data.players || {}).map(p => p.charId).filter(Boolean);
  const isKillerNPC = !pickedCharIds.includes(killerId);

  const resultObj = citizenWin ? state.currentScenario.endings.citizenWin : state.currentScenario.endings.killerWin;

  const badgeEl = document.getElementById('endingResultBadge');
  if (citizenWin) {
    if (isMeKiller) {
      badgeEl.innerText = "검거 완료 - 체포됨 (진범 패배)";
      badgeEl.className = "text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-700";
    } else {
      badgeEl.innerText = isKillerNPC ? "NPC 진범 색출 성공! (시민 승리)" : "진범 검거 성공 (시민 승리)";
      badgeEl.className = "text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-700";
    }
  } else {
    if (isMeKiller) {
      badgeEl.innerText = "완전 범죄 성공 (진범 승리)";
      badgeEl.className = "text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-amber-950 text-amber-400 border border-amber-600";
    } else {
      badgeEl.innerText = isKillerNPC ? "수사 실패 (NPC 진범 도주)" : "수사 실패 (진범 탈출)";
      badgeEl.className = "text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-700";
    }
  }

  document.getElementById('endingTitle').innerText = resultObj.title;
  document.getElementById('endingBannerImg').src = resultObj.bannerImg;

  const epiloguesContainer = document.getElementById('endingEpilogues');
  epiloguesContainer.innerHTML = Object.entries(resultObj.epilogues).map(([cid, text]) => {
    const charDef = state.currentScenario.characters.find(c => c.id === cid);
    const isNPC = !pickedCharIds.includes(cid);
    return `
      <div class="p-3 bg-black/50 border border-neutral-800 rounded-lg">
        <span class="text-amber-400 font-bold block mb-1">
          ${charDef ? charDef.name : cid} 후일담 ${isNPC ? '<span class="text-[10px] text-neutral-500">[NPC]</span>' : ''}
        </span>
        <p class="leading-relaxed text-neutral-300">${text}</p>
      </div>
    `;
  }).join('');
}

export function initUi() {
  document.getElementById('btnToggleBGM').addEventListener('click', toggleRainBGM);
  document.getElementById('btnBackToThemeSelect').addEventListener('click', () => switchView('viewThemeSelect'));

  const rulesModal = document.getElementById('rulesModal');
  document.getElementById('btnOpenRulesModal').addEventListener('click', () => rulesModal.classList.remove('hidden'));
  document.getElementById('btnReadRulesQuick').addEventListener('click', () => rulesModal.classList.remove('hidden'));
  document.getElementById('btnCloseRulesModal').addEventListener('click', () => rulesModal.classList.add('hidden'));
  document.getElementById('btnConfirmRules').addEventListener('click', () => rulesModal.classList.add('hidden'));

  document.getElementById('btnCloseWhisperNotice').addEventListener('click', () => {
    document.getElementById('whisperNoticeModal').classList.add('hidden');
  });
  document.getElementById('btnCloseCardShare').addEventListener('click', () => {
    document.getElementById('cardShareModal').classList.add('hidden');
  });
  document.getElementById('btnCloseEvidenceModal').addEventListener('click', closeEvidenceModal);
  document.getElementById('btnConfirmEvidenceModal').addEventListener('click', closeEvidenceModal);

  renderThemeCards();
}
