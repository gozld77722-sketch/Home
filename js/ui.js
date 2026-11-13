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
  const landing = viewId === 'viewThemeSelect';
  document.body.classList.toggle('show-noir-landing', landing);
  const main = document.querySelector('main');
  if (main) {
    main.classList.toggle('justify-center', !landing);
    main.classList.toggle('justify-start', landing);
  }
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

function renderThemeCard(scenario, index) {
  const t = scenario.theme.card;
  const num = String(index + 1).padStart(2, '0');
  return `
    <article class="case-file noir-card rounded-2xl ${t.borderClass} shadow-xl flex flex-col justify-between">
      <div>
        <div class="case-tab">CASE No.${num}</div>
        <div class="case-photo">
          <img src="${t.banner}" alt="${t.bannerAlt}" loading="lazy" decoding="async" class="case-photo-img">
          <span class="case-classified" aria-hidden="true">기밀</span>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2 pointer-events-none">
            <span class="${t.eraClass}">${t.era}</span>
          </div>
        </div>
        <div class="p-3.5 space-y-1.5">
          <div class="flex items-center justify-between gap-2">
            <h3 class="${t.titleClass}">${t.title}</h3>
            <span class="${t.playersClass} whitespace-nowrap">${t.players}</span>
          </div>
          <p class="text-[11px] text-neutral-400 leading-relaxed break-keep">${t.blurb}</p>
        </div>
      </div>
      <div class="p-3.5 pt-0">
        <button onclick="selectThemeAndGoToLobby('${scenario.id}')" class="${t.buttonClass}">
          <i class="${t.buttonIconClass}"></i> 시작하기
        </button>
      </div>
    </article>
  `;
}

export async function renderThemeCards() {
  const grid = document.getElementById('themeCardGrid');
  if (!grid) return;
  const loaded = await Promise.all(
    SCENARIOS.map(id => import(`../scenarios/scenario-${id}.js`))
  );
  grid.innerHTML = loaded.map(({ default: scenario }, index) => renderThemeCard(scenario, index)).join('');
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
      guideText.innerHTML = `🤫 <strong>[디스코드 밀담방 1 & 2]</strong> 1차 밀담 진행 중! 배정된 플레이어는 지정된 밀담방으로 이동하세요.`;
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
      guideText.innerHTML = `🤫 <strong>[디스코드 밀담방 1 & 2]</strong> 2차 밀담 진행 중! 최종 비밀 연대 및 물증을 실물 공유하세요.`;
      timeTag.innerText = "5분 밀담";
      break;
    case 'R5_DEFENSE':
      guideText.innerHTML = `⚖️ <strong>[디스코드 메인 토론방]</strong> 5라운드 최후의 무죄 변론! 보관함의 단서를 보며 결백을 변론하세요.`;
      timeTag.innerText = "10분 변론";
      break;
    case 'FINAL_VOTE':
      guideText.innerHTML = `🚨 <strong>[최후의 지목 투표 · 2분]</strong> 시간이 끝나면 지금까지 제출된 표로 집계합니다. 진범 플레이어의 표는 빠지고, 진범이 최다(동률 포함)면 시민이 이깁니다.`;
      timeTag.innerText = "2분 투표";
      break;
    default:
      guideText.innerText = `사건 조사를 진행하세요.`;
      timeTag.innerText = "";
  }
}

function playerModeLabel(pCount) {
  if (pCount === 2) return "2인 모드 (NPC 2명 / 밀담 없음)";
  if (pCount === 3) return "3인 모드 (NPC 1명 / 밀담 있음)";
  if (pCount === 4) return "4인 모드 (NPC 없음 / 밀담 있음)";
  if (pCount >= 5) return "5인 모드 (5번째 인물 해금 / NPC 없음)";
  return `${pCount}인 대기`;
}

export function renderCharacterSelection(data) {
  const grid = document.getElementById('characterCardGrid');
  grid.innerHTML = "";
  const pCount = Object.keys(data.players || {}).length;
  const is5P = pCount >= 5;

  document.getElementById('scenarioModeBadge').innerText = playerModeLabel(pCount);

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
    R2_WHISPER: "2라운드: 1차 밀담",
    R3: "3라운드: 알리바이 균열 & 심층 추궁",
    R4: "4라운드: 마지막 물증 토론",
    R4_WHISPER: "4라운드: 2차 밀담",
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

function whisperRoster(data) {
  const people = [];
  state.currentScenario.characters.forEach(charDef => {
    const entry = Object.entries(data.players).find(([, p]) => p.charId === charDef.id);
    if (!entry) return;
    const [pid, p] = entry;
    people.push({ pid, nickname: p.nickname || pid, charName: charDef.name });
  });
  return people;
}

function sameIdSet(a, b) {
  if (a.length !== b.length) return false;
  const set = new Set(a);
  return b.every(id => set.has(id));
}

function whisperSelection(roomKey, data) {
  const stored = [...(data.whisperRooms?.[roomKey] || [])];
  const draft = state.whisperDraft;
  if (!draft || draft.phase !== data.phase || !Array.isArray(draft[roomKey])) return stored;
  if (sameIdSet(draft[roomKey], stored)) {
    draft[roomKey] = null;
    return stored;
  }
  return draft[roomKey];
}

function readChecked(className) {
  return [...document.querySelectorAll(`input.${className}`)].filter(el => el.checked).map(el => el.value);
}

function syncWhisperChecked(className, selected) {
  document.querySelectorAll(`input.${className}`).forEach(input => {
    const on = selected.includes(input.value);
    if (input.checked !== on) input.checked = on;
  });
}

function fillWhisperBox(container, roomNum, people, selected) {
  container.replaceChildren();
  people.forEach(person => {
    const label = document.createElement("label");
    label.className = "flex items-center space-x-1.5 text-xs text-neutral-200";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = person.pid;
    input.checked = selected.includes(person.pid);
    input.className = `chk-whisper-${roomNum} chk-w${roomNum}-${person.pid} rounded bg-neutral-800 border-neutral-600`;
    input.addEventListener("change", () => window.handleWhisperCheckboxChange(person.pid, roomNum));
    const span = document.createElement("span");
    span.className = "truncate";
    span.textContent = `${person.charName} (${person.nickname})`;
    label.append(input, span);
    container.appendChild(label);
  });
}

function renderWhisperCheckboxes(data) {
  const c1 = document.getElementById('whisperRoom1Checkboxes');
  const c2 = document.getElementById('whisperRoom2Checkboxes');
  const people = whisperRoster(data);
  const rosterKey = people.map(person => `${person.pid}\t${person.charName}\t${person.nickname}`).join("\n");
  const room1 = whisperSelection("room1", data);
  const room2 = whisperSelection("room2", data);
  const sameRoster = c1.dataset.roster === rosterKey && c1.childElementCount > 0 && c2.childElementCount > 0;

  if (!sameRoster) {
    fillWhisperBox(c1, 1, people, room1);
    fillWhisperBox(c2, 2, people, room2);
    c1.dataset.roster = rosterKey;
    c2.dataset.roster = rosterKey;
    return;
  }
  syncWhisperChecked("chk-whisper-1", room1);
  syncWhisperChecked("chk-whisper-2", room2);
}

window.handleWhisperCheckboxChange = function(pid, roomNum) {
  const otherClass = roomNum === 1 ? "chk-whisper-2" : "chk-whisper-1";
  document.querySelectorAll(`input.${otherClass}`).forEach(input => {
    if (input.value === pid && input.checked) input.checked = false;
  });
  state.whisperDraft = {
    phase: state.currentPhase,
    room1: readChecked("chk-whisper-1"),
    room2: readChecked("chk-whisper-2")
  };
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

function voteCandidateKey(data) {
  const myVote = (data.votes && data.votes[state.myPlayerId]) || "";
  const pCount = Object.keys(data.players || {}).length;
  const parts = [`me:${state.myPlayerId}`, `voted:${myVote ? "1" : "0"}`, `n:${pCount}`];
  state.currentScenario.characters.forEach(charDef => {
    if (charDef.id === data.players[state.myPlayerId]?.charId) return;
    if (!charDef.isDefault && pCount < 5) return;
    const playerEntry = Object.entries(data.players).find(([, p]) => p.charId === charDef.id);
    parts.push(`${charDef.id}:${playerEntry ? playerEntry[1].nickname : "npc"}`);
  });
  return parts.join("|");
}

function renderFinalVoteSection(data) {
  const grid = document.getElementById('voteButtonsGrid');
  const board = document.getElementById('liveVoteBoard');
  const waitingText = document.getElementById('voteWaitingText');
  board.innerHTML = "";

  const myVote = data.votes && data.votes[state.myPlayerId];
  if (myVote) {
    waitingText.classList.remove('hidden');
  } else {
    waitingText.classList.add('hidden');
  }

  const pCount = Object.keys(data.players || {}).length;
  const pickedCharIds = Object.values(data.players || {}).map(p => p.charId).filter(Boolean);
  const candidateKey = voteCandidateKey(data);

  if (grid.dataset.candidateKey !== candidateKey) {
    grid.innerHTML = "";
    grid.dataset.candidateKey = candidateKey;
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
        btn.addEventListener('click', () => actions.submitVote(charDef.id, actions.getRoomData?.() || data));
        grid.appendChild(btn);
      }
    });
  }

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

const TIMELINE_VISIBLE = new Set([
  "PROLOGUE", "R1", "R2", "R2_WHISPER", "R3", "R4", "R4_WHISPER", "R5_DEFENSE", "FINAL_VOTE", "ENDING"
]);

export function parseTimelineLine(line) {
  const raw = String(line ?? "").trim();
  const match = raw.match(/^(\d{1,2}):(\d{2})\s*[-–—]\s*(.*)$/);
  if (!match) return { time: "", text: raw };
  return {
    time: `${String(match[1]).padStart(2, "0")}:${match[2]}`,
    text: match[3].trim()
  };
}

function timelineTimeKey(time) {
  const match = /^(\d{1,2}):(\d{2})$/.exec(String(time || "").trim());
  if (!match) return Number.POSITIVE_INFINITY;
  return Number(match[1]) * 60 + Number(match[2]);
}

function sortTimelineEntries(entries) {
  return entries.slice().sort((a, b) => {
    const diff = timelineTimeKey(a.time) - timelineTimeKey(b.time);
    if (diff !== 0) return diff;
    return (a.ts || 0) - (b.ts || 0);
  });
}

function formatTimelineEntry(entry) {
  if (entry.time && entry.text) return `${entry.time} - ${entry.text}`;
  return entry.text || entry.time || "";
}

function myCharacter(data) {
  const me = data.players?.[state.myPlayerId];
  if (!me?.charId || !state.currentScenario) return null;
  return state.currentScenario.characters.find(c => c.id === me.charId) || null;
}

function killerCanChooseLie(char) {
  return !!(char && char.isKiller === true && Array.isArray(char.fakeTimeline) && char.fakeTimeline.length);
}

export function renderTimelineBoard(data) {
  const panel = document.getElementById("timelineBoard");
  if (!panel) return;
  const postModal = document.getElementById("timelinePostModal");
  if (postModal && !postModal.classList.contains("hidden")) {
    const ownerGone = postModal.dataset.owner !== state.myPlayerId;
    const phaseLocked = !data || data.phase === "ENDING" || data.phase === "LOBBY";
    if (ownerGone || phaseLocked) postModal.classList.add("hidden");
  }
  const visible = !!(data && state.currentScenario && TIMELINE_VISIBLE.has(data.phase));
  panel.classList.toggle("hidden", !visible);
  if (!visible) return;

  if (state.timelineCollapsed == null) {
    state.timelineCollapsed = window.matchMedia("(max-width: 639px)").matches;
  }
  panel.classList.toggle("tl-collapsed", !!state.timelineCollapsed);
  const chevron = document.getElementById("timelineChevron");
  if (chevron) {
    chevron.className = `fa-solid ${state.timelineCollapsed ? "fa-chevron-down" : "fa-chevron-up"} text-neutral-500 text-xs`;
  }
  const toggle = document.getElementById("btnToggleTimeline");
  if (toggle) toggle.setAttribute("aria-expanded", state.timelineCollapsed ? "false" : "true");

  const entries = sortTimelineEntries(Array.isArray(data.timelineBoard) ? data.timelineBoard : []);
  const count = document.getElementById("timelineCount");
  if (count) count.textContent = entries.length ? `(${entries.length})` : "";

  const mine = myCharacter(data);
  const locked = data.phase === "ENDING";
  const hint = document.getElementById("timelineKillerHint");
  if (hint) {
    if (!locked && killerCanChooseLie(mine)) {
      hint.textContent = "진범 전용: 공개할 때 줄마다 진실과 준비된 거짓 중 하나를 고를 수 있습니다. 다른 사람에게는 같은 모양으로 보입니다.";
      hint.classList.remove("hidden");
    } else {
      hint.textContent = "";
      hint.classList.add("hidden");
    }
  }

  const postBtn = document.getElementById("btnOpenTimelinePost");
  if (postBtn) postBtn.classList.toggle("hidden", locked || !mine);
  const lockNote = document.getElementById("timelineLockNote");
  if (lockNote) {
    lockNote.classList.toggle("hidden", !locked);
    if (locked) lockNote.textContent = "엔딩: 더 이상 올리거나 내릴 수 없습니다. 거짓으로 공개된 줄이 표시됩니다.";
  }

  if (state.timelineFilter !== "all" && !entries.some(entry => entry.charId === state.timelineFilter)) {
    state.timelineFilter = "all";
  }
  renderTimelineFilters(entries);
  renderTimelineEntries(entries.filter(entry => state.timelineFilter === "all" || entry.charId === state.timelineFilter), data, locked);
}

function renderTimelineFilters(entries) {
  const host = document.getElementById("timelineFilters");
  if (!host) return;
  const seen = [];
  entries.forEach(entry => {
    if (entry.charId && !seen.includes(entry.charId)) seen.push(entry.charId);
  });
  const chips = [{ id: "all", name: "전체" }];
  state.currentScenario.characters.forEach(char => {
    if (seen.includes(char.id)) chips.push({ id: char.id, name: char.name });
  });
  const signature = `${state.timelineFilter}|${chips.map(chip => chip.id).join(",")}`;
  if (host.dataset.signature === signature) return;
  host.dataset.signature = signature;
  host.replaceChildren();
  chips.forEach(chip => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.filter = chip.id;
    btn.className = `timeline-filter px-2 py-0.5 rounded border text-[10px] font-bold ${
      state.timelineFilter === chip.id
        ? "bg-amber-900 border-amber-600 text-amber-100"
        : "bg-neutral-900 border-neutral-700 text-neutral-300"
    }`;
    btn.textContent = chip.name;
    host.appendChild(btn);
  });
}

function renderTimelineEntries(entries, data, locked) {
  const list = document.getElementById("timelineEntries");
  if (!list) return;
  const signature = [
    state.timelineFilter,
    locked ? "1" : "0",
    state.myPlayerId || "",
    entries.map(entry => `${entry.id || ""}:${entry.falsified ? "1" : "0"}:${entry.time}:${entry.text}`).join("||")
  ].join("|");
  if (list.dataset.signature === signature) return;
  list.dataset.signature = signature;
  list.replaceChildren();
  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "text-[11px] text-neutral-500 italic py-1";
    empty.textContent = state.timelineFilter === "all"
      ? "아직 공개된 타임라인이 없습니다."
      : "이 인물로 공개된 줄이 없습니다.";
    list.appendChild(empty);
    return;
  }

  entries.forEach(entry => {
    const char = state.currentScenario.characters.find(c => c.id === entry.charId);
    const row = document.createElement("article");
    row.className = "timeline-entry flex items-start gap-2 p-2 rounded border border-neutral-800 bg-black/40";
    row.dataset.id = entry.id || "";
    row.dataset.charId = entry.charId || "";

    const img = document.createElement("img");
    img.className = "w-7 h-7 rounded-full object-cover border border-amber-700/60 shrink-0";
    img.alt = char ? char.name : "인물";
    if (char?.avatarImg) img.src = char.avatarImg;

    const body = document.createElement("div");
    body.className = "min-w-0 flex-1";
    const name = document.createElement("div");
    name.className = "text-[11px] font-bold text-amber-300";
    name.textContent = char ? char.name : (entry.charId || "인물");
    const line = document.createElement("p");
    line.className = "timeline-line text-[11px] text-neutral-200 leading-relaxed break-keep";
    line.textContent = formatTimelineEntry(entry);
    body.append(name, line);

    if (locked && entry.falsified) {
      const badge = document.createElement("p");
      badge.className = "timeline-false text-[10px] font-bold text-red-400 mt-0.5";
      const trueLine = char?.timeline?.[entry.sourceIndex];
      badge.textContent = trueLine
        ? `거짓으로 밝혀짐 · 실제: ${trueLine}`
        : "거짓으로 밝혀짐";
      body.appendChild(badge);
    }

    row.append(img, body);
    if (!locked && entry.pid === state.myPlayerId && entry.id) {
      const remove = document.createElement("button");
      remove.type = "button";
      remove.dataset.remove = entry.id;
      remove.className = "shrink-0 px-1.5 py-0.5 text-[10px] text-neutral-400 hover:text-red-300 border border-neutral-700 rounded";
      remove.textContent = "내리기";
      row.appendChild(remove);
    }
    list.appendChild(row);
  });
}

function closeTimelineModal() {
  document.getElementById("timelinePostModal")?.classList.add("hidden");
}

function choiceBlock(label, line, fake) {
  const box = document.createElement("div");
  box.className = "tl-pick" + (fake ? "" : " on");
  const tag = document.createElement("span");
  tag.className = `block text-[10px] font-bold ${fake ? "text-red-300" : "text-emerald-300"}`;
  tag.textContent = label;
  const body = document.createElement("span");
  body.className = "block text-[11px] text-neutral-200 break-keep mt-0.5";
  body.textContent = line;
  box.append(tag, body);
  return box;
}

export function openTimelinePostModal(data) {
  const modal = document.getElementById("timelinePostModal");
  const lines = document.getElementById("timelinePostLines");
  const hint = document.getElementById("timelinePostHint");
  if (!modal || !lines || !data) return;
  const mine = myCharacter(data);
  if (!mine || data.phase === "ENDING" || data.phase === "LOBBY") return;
  modal.dataset.owner = state.myPlayerId || "";

  const canLie = killerCanChooseLie(mine);
  lines.replaceChildren();
  if (hint) {
    hint.textContent = canLie
      ? "줄마다 진실과 거짓 중 하나를 고르세요. 거짓은 이 시나리오에 준비된 행적이며, 올린 뒤에는 다른 사람에게 진실과 구분되지 않습니다."
      : "고른 줄이 적힌 그대로 모두에게 공개됩니다. 내용은 고칠 수 없습니다.";
  }

  (mine.timeline || []).forEach((trueLine, index) => {
    const fakeLine = canLie ? mine.fakeTimeline[index] : null;
    const row = document.createElement("div");
    row.dataset.index = String(index);
    row.dataset.useFake = "0";
    row.className = "p-2 rounded border border-neutral-800 bg-black/40 space-y-1.5";

    const head = document.createElement("label");
    head.className = "flex items-center gap-2 text-xs text-neutral-100";
    const box = document.createElement("input");
    box.type = "checkbox";
    box.className = "rounded bg-neutral-800 border-neutral-600";
    const caption = document.createElement("span");
    caption.textContent = "이 줄 공개";
    head.append(box, caption);
    row.appendChild(head);

    if (typeof fakeLine === "string" && fakeLine.trim()) {
      const trueBox = choiceBlock("진실", trueLine, false);
      const fakeBox = choiceBlock("거짓", fakeLine, true);
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "timeline-lie-toggle px-2 py-0.5 text-[10px] font-bold rounded border border-amber-700 text-amber-100";
      toggle.textContent = "진실";
      toggle.setAttribute("aria-pressed", "false");
      const apply = (useFake) => {
        row.dataset.useFake = useFake ? "1" : "0";
        toggle.textContent = useFake ? "거짓" : "진실";
        toggle.setAttribute("aria-pressed", useFake ? "true" : "false");
        trueBox.classList.toggle("on", !useFake);
        fakeBox.classList.toggle("on", useFake);
      };
      toggle.addEventListener("click", () => apply(row.dataset.useFake !== "1"));
      row.append(toggle, trueBox, fakeBox);
    } else {
      const text = document.createElement("p");
      text.className = "text-[11px] text-neutral-300 break-keep";
      text.textContent = trueLine;
      row.appendChild(text);
    }
    lines.appendChild(row);
  });

  modal.classList.remove("hidden");
}

function initTimelineBoard() {
  document.getElementById("btnToggleTimeline")?.addEventListener("click", () => {
    const panel = document.getElementById("timelineBoard");
    state.timelineCollapsed = !panel.classList.contains("tl-collapsed");
    const data = actions.getRoomData?.();
    if (data) renderTimelineBoard(data);
    else panel.classList.toggle("tl-collapsed", !!state.timelineCollapsed);
  });
  document.getElementById("timelineFilters")?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-filter]");
    if (!btn) return;
    state.timelineFilter = btn.dataset.filter || "all";
    const host = document.getElementById("timelineFilters");
    if (host) delete host.dataset.signature;
    const data = actions.getRoomData?.();
    if (data) renderTimelineBoard(data);
  });
  document.getElementById("timelineEntries")?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-remove]");
    if (!btn) return;
    actions.removeTimelineEntry?.(btn.dataset.remove);
  });
  document.getElementById("btnOpenTimelinePost")?.addEventListener("click", () => {
    const data = actions.getRoomData?.();
    if (data) openTimelinePostModal(data);
  });
  const close = () => closeTimelineModal();
  document.getElementById("btnCloseTimelinePost")?.addEventListener("click", close);
  document.getElementById("btnCancelTimelinePost")?.addEventListener("click", close);
  document.getElementById("btnConfirmTimelinePost")?.addEventListener("click", async () => {
    const rows = [...document.querySelectorAll("#timelinePostLines [data-index]")];
    const selections = rows
      .filter(row => row.querySelector('input[type="checkbox"]')?.checked)
      .map(row => ({ index: Number(row.dataset.index), useFake: row.dataset.useFake === "1" }));
    if (!selections.length) {
      alert("공개할 줄을 선택하세요.");
      return;
    }
    const posted = await actions.postTimeline?.(selections);
    if (posted) closeTimelineModal();
  });
}

function initTestModeButton() {
  const btn = document.getElementById("btnTestMode");
  const label = document.getElementById("btnTestModeLabel");
  if (!btn || !label) return;
  const on = new URLSearchParams(location.search).get("test") === "1";
  label.textContent = on ? "테스트 종료" : "테스트 모드";
  btn.title = on ? "테스트 종료" : "테스트 모드";
  btn.setAttribute("aria-label", on ? "테스트 종료" : "테스트 모드");
  if (on) btn.classList.add("bg-amber-900", "text-amber-200", "border-amber-700");
  btn.addEventListener("click", () => {
    const url = new URL(location.href);
    if (url.searchParams.get("test") === "1") url.searchParams.delete("test");
    else url.searchParams.set("test", "1");
    location.assign(`${url.pathname}${url.search}${url.hash}`);
  });
}

export function initUi() {
  document.getElementById('btnToggleBGM').addEventListener('click', toggleRainBGM);
  document.getElementById('btnBackToThemeSelect').addEventListener('click', () => switchView('viewThemeSelect'));
  initTestModeButton();
  initTimelineBoard();

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
