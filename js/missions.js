// ========== 任務系統 ==========

// 主要任務
const PRIMARY_MISSIONS = {
  "take-and-hold": {
    name: "奪取並固守 Take and Hold",
    description: "控制目標點獲得VP。控制1個目標=5VP，控制更多=10VP，控制多數=15VP",
    scoring: (player) => {
      const controlled = gameState.objectives.filter(o => o.control === player).length;
      const total = gameState.objectives.length;
      if (controlled === 0) return 0;
      if (controlled >= Math.ceil(total / 2) + 1) return 15;
      if (controlled >= 2) return 10;
      return 5;
    }
  },
  "supply-drop": {
    name: "物資投放 Supply Drop",
    description: "第2、3、4回合各有一個隨機目標點價值翻倍",
    scoring: (player) => {
      const controlled = gameState.objectives.filter(o => o.control === player).length;
      const priorityObj = gameState.objectives.find(o => o.priority && o.control === player);
      let score = controlled * 4;
      if (priorityObj) score += 5;
      return Math.min(15, score);
    }
  },
  "purge-the-foe": {
    name: "殲滅敵軍 Purge the Foe",
    description: "摧毀敵方單位獲得VP。每摧毀一個單位+2VP，每回合最多+5VP",
    scoring: (player) => {
      const killedThisRound = gameState.missionProgress[player]?.killedThisRound || 0;
      return Math.min(5, killedThisRound * 2);
    }
  }
};

// 次要任務
const SECONDARY_MISSIONS = {
  "assassination": {
    name: "刺殺 Assassination",
    category: "無畏",
    maxVP: 12,
    description: "摧毀敵方角色單位：每個+4VP",
    checkCondition: (player, context) => {
      if (context.type === "kill" && context.killedUnit?.keywords?.includes("Character")) {
        return { scored: true, vp: 4, message: `刺殺成功！擊殺 ${context.killedUnit.name}` };
      }
      return { scored: false };
    }
  },
  "bring-it-down": {
    name: "擊落巨獸 Bring It Down",
    category: "無畏",
    maxVP: 12,
    description: "摧毀敵方怪獸/載具：傷口10+得3VP，9-得2VP",
    checkCondition: (player, context) => {
      if (context.type === "kill") {
        const target = context.killedUnit;
        const isMonsterOrVehicle = target?.keywords?.includes("Monster") || target?.keywords?.includes("Vehicle");
        if (isMonsterOrVehicle) {
          const wounds = target.maxHP || 0;
          const vp = wounds >= 10 ? 3 : 2;
          return { scored: true, vp: vp, message: `擊落巨獸！${target.name} (+${vp}VP)` };
        }
      }
      return { scored: false };
    }
  },
  "no-prisoners": {
    name: "格殺勿論 No Prisoners",
    category: "無畏",
    maxVP: 10,
    description: "累計消滅敵方模型獲得VP：每10個模型+2VP",
    checkCondition: (player, context) => {
      if (context.type === "kill") {
        const modelsKilled = context.killedUnit?.modelCount || 1;
        const prev = gameState.missionProgress[player]?.modelsKilledForPrisoners || 0;
        gameState.missionProgress[player].modelsKilledForPrisoners = prev + modelsKilled;
        const total = gameState.missionProgress[player].modelsKilledForPrisoners;
        if (Math.floor(total / 10) > Math.floor(prev / 10)) {
          return { scored: true, vp: 2, message: `格殺勿論！累計 ${total} 模型 (+2VP)` };
        }
      }
      return { scored: false };
    }
  },
  "behind-enemy-lines": {
    name: "深入敵後 Behind Enemy Lines",
    category: "影子行動",
    maxVP: 8,
    description: "回合結束時有單位在敵方部署區：1個+2VP，2個+4VP",
    checkCondition: (player, context) => {
      if (context.type === "endTurn") {
        const enemyZone = player === 1 ? { minY: 0, maxY: 150 } : { minY: 450, maxY: 600 };
        const unitsInEnemyZone = gameState.units.filter(u =>
          u.player === player && u.alive && u.y >= enemyZone.minY && u.y <= enemyZone.maxY
        ).length;
        if (unitsInEnemyZone >= 2) {
          return { scored: true, vp: 4, message: `深入敵後！${unitsInEnemyZone} 個單位在敵區` };
        } else if (unitsInEnemyZone >= 1) {
          return { scored: true, vp: 2, message: `深入敵後！1個單位在敵區` };
        }
      }
      return { scored: false };
    }
  }
};

// 核心戰略
const CORE_STRATAGEMS = {
  "command-reroll": {
    name: "指揮重擲 Command Re-roll",
    cost: 1,
    phase: ["any"],
    description: "重擲一顆骰子",
    effect: (context) => {
      return { reroll: 1 };
    }
  },
  "insane-bravery": {
    name: "瘋狂勇氣 Insane Bravery",
    cost: 1,
    phase: ["command"],
    description: "一個戰慄中的單位自動通過戰慄測試",
    effect: (context) => {
      if (context.unit && context.unit.battleShocked) {
        context.unit.battleShocked = false;
        return { success: true, message: `${context.unit.name} 恢復士氣！` };
      }
      return { success: false };
    }
  },
  "counter-offensive": {
    name: "反擊 Counter-offensive",
    cost: 2,
    phase: ["fight"],
    description: "在敵方近戰後立即反擊",
    effect: (context) => {
      return { fightFirst: true };
    }
  },
  "overwatch": {
    name: "監視射擊 Overwatch",
    cost: 1,
    phase: ["charge"],
    description: "對衝鋒的敵軍進行射擊（6+命中）",
    effect: (context) => {
      return { overwatch: true, hitModifier: -999 };
    }
  },
  "heroic-intervention": {
    name: "英勇介入 Heroic Intervention",
    cost: 1,
    phase: ["charge"],
    description: "附近的角色可以加入近戰",
    effect: (context) => {
      return { heroicIntervention: true, range: 6, moveDistance: 3 };
    }
  },
  "tank-shock": {
    name: "坦克衝擊 Tank Shock",
    cost: 1,
    phase: ["charge"],
    description: "載具衝鋒造成致命傷",
    effect: (context) => {
      return { tankShock: true };
    }
  }
};
