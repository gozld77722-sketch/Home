export const state = {
  currentUser: null,
  currentRoomCode: null,
  roomUnsubscribe: null,
  currentScenario: null,
  currentThemeId: "winchester",
  myPlayerId: null,
  timerInterval: null,
  localTimerSeconds: 900,
  currentPhase: null,
  isCurrentHost: false,
  lastHandledShareTimestamp: 0,
  lastNotifiedWhisperPhase: null,
  lastSeenAnnouncementAt: 0,
  hostNoticeDismissed: false,
  devTimerScale: 1,
  devRealPlayerId: null,
  whisperDraft: null,
  hostNoticeDraft: null,
  timelineFilter: "all",
  timelineCollapsed: null
};

// Late-bound game actions so view code can call them without an import cycle.
export const actions = {};
