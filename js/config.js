// ========== 遊戲配置 ==========

// 點數上限
let maxPoints = 1000;

// 網格設置
function getGridSize() {
  return 20;
}

function getScaledInch() {
  return getGridSize();
}

function inchToPixels(inches) {
  return inches * getScaledInch();
}

function pixelsToInch(pixels) {
  return pixels / getScaledInch();
}

function snapToGrid(x, y) {
  const grid = getGridSize();
  return {
    x: Math.round(x / grid) * grid,
    y: Math.round(y / grid) * grid
  };
}

// 單位底座大小（以網格為單位）
const UNIT_SIZE_IN_GRIDS = {
  "Infantry": 1,
  "Character": 1,
  "Monster": 2,
  "Vehicle": 2,
  "Swarm": 1,
  "Beast": 1.5,
  "Walker": 1.5,
  "Tank": 2.5,
  "Titan": 4
};

// 戰場大小
const BATTLEFIELD_SIZES = {
  "combat-patrol": { width: 44, height: 30, name: "Combat Patrol", desc: "小型對戰，適合 500 點以下", deployZone: 6 },
  "incursion": { width: 44, height: 30, name: "Incursion", desc: "小型對戰，適合 500-1000 點", deployZone: 9 },
  "strike-force": { width: 60, height: 44, name: "Strike Force", desc: "標準對戰，適合 1000-2000 點", deployZone: 12 },
  "onslaught": { width: 90, height: 44, name: "Onslaught", desc: "大型對戰，適合 2000+ 點", deployZone: 12 }
};

let selectedBattlefieldSize = "strike-force";
let selectedMapScenario = "standard";
