// ========== 遊戲狀態 ==========

let gameState = {
  phase: "deployment",
  round: 1,
  currentPlayer: 1,
  units: [],
  selectedUnit: null,
  terrain: [],
  objectives: [],
  vp: { 1: 0, 2: 0 },
  cp: { 1: 0, 2: 0 },
  deploy: {
    ready: { 1: false, 2: false },
    player1Complete: false,
    player2Complete: false
  },
  draggingUnit: null,
  primaryMission: null,
  secondaryMissions: { 1: [], 2: [] },
  missionProgress: {
    1: { killedThisRound: 0, totalKills: 0, modelsKilledForPrisoners: 0 },
    2: { killedThisRound: 0, totalKills: 0, modelsKilledForPrisoners: 0 }
  },
  tacticalObjectives: {
    1: { deck: [], hand: [], discarded: [] },
    2: { deck: [], hand: [], discarded: [] }
  },
  usedStratagemsThisPhase: [],
  usedCoreStratagemsThisTurn: { 1: [], 2: [] }
};

// 軍隊列表
let armyRosters = { 1: [], 2: [] };

// 玩家種族規則
let playerDetachments = { 1: null, 2: null };

// AI 設定
let ai1Enabled = false;
let ai2Enabled = true;
let aiDifficulty = "normal";

// 視覺效果開關
let enableDiceAnimation = true;

// 視窗縮放和平移
let viewZoom = 1;
let viewOffsetX = 0;
let viewOffsetY = 0;

// 獲取AI難度
function getAIDifficulty() {
  const select = document.getElementById('aiDifficulty');
  return select ? select.value : 'normal';
}

// 延遲函數
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 擲骰
function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

// 擲多個D6
function rollDice(count) {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(rollD6());
  }
  return results;
}
