// ========== 強化系統 ==========

const ENHANCEMENTS = {
  "necrons": {
    "awakened-dynasty": [
      { name: "超越時間", points: 25, desc: "該單位每回合可重擲1顆命中骰和1顆傷害骰" },
      { name: "相位護盾", points: 20, desc: "獲得4+無敵豁免" },
      { name: "活金屬巔峰", points: 15, desc: "活金屬能力每回合恢復D3傷口而非1傷口" },
      { name: "指揮協議", points: 10, desc: "6\"內友軍單位+1領導值" }
    ],
    "hypercrypt-legion": [
      { name: "維度跳躍者", points: 25, desc: "可在任何階段進行傳送" },
      { name: "時間錨", points: 20, desc: "被消滅時擲D6，4+復活於己方部署區" }
    ]
  },
  "tyranids": {
    "invasion-fleet": [
      { name: "適應進化", points: 25, desc: "每回合可選擇一個武器關鍵字獲得" },
      { name: "頂級掠食者", points: 20, desc: "衝鋒階段+1攻擊和+1傷害" },
      { name: "催眠凝視", points: 15, desc: "3\"內敵軍-1命中" },
      { name: "蟲群之聲", points: 10, desc: "蟲群單位6\"內重擲衝鋒距離" }
    ],
    "vanguard-onslaught": [
      { name: "生物型態", points: 25, desc: "+1韌性和+1傷口" },
      { name: "潛行基因", points: 15, desc: "獲得隱匿和獨行者能力" }
    ]
  }
};

// 獲取單位的強化效果
function getEnhancementEffects(unit, context = {}) {
  const effects = {
    invSave: null,
    rerollHit: 0,
    rerollWound: 0,
    rerollDamage: 0,
    attackBonus: 0,
    damageBonus: 0,
    hitMalus: 0,
    toughnessBonus: 0,
    woundBonus: 0,
    healBonus: 0,
    leadershipBonus: 0,
    leadershipAura: 0,
    stealth: false,
    loneOperative: false,
    rerollCharge: false,
    chargeAura: 0,
    triggered: []
  };

  if (!unit.enhancement) return effects;

  const enhancement = unit.enhancement;

  // 死靈強化
  if (enhancement === "超越時間") {
    effects.rerollHit = 1;
    effects.rerollDamage = 1;
    effects.triggered.push("超越時間: 重擲1命中+1傷害");
  }
  else if (enhancement === "相位護盾") {
    effects.invSave = 4;
    effects.triggered.push("相位護盾: 4+無敵");
  }
  else if (enhancement === "活金屬巔峰") {
    effects.healBonus = 2;
    effects.triggered.push("活金屬巔峰: 恢復D3");
  }
  else if (enhancement === "指揮協議") {
    effects.leadershipAura = 6;
    effects.leadershipBonus = 1;
    effects.triggered.push("指揮協議: 6\"內+1Ld");
  }
  else if (enhancement === "維度跳躍者") {
    effects.triggered.push("維度跳躍者: 可傳送");
  }
  else if (enhancement === "時間錨") {
    effects.triggered.push("時間錨: 死亡時4+復活");
  }

  // 泰倫強化
  else if (enhancement === "適應進化") {
    effects.triggered.push("適應進化: 可選武器關鍵字");
  }
  else if (enhancement === "頂級掠食者") {
    if (context.charged) {
      effects.attackBonus = 1;
      effects.damageBonus = 1;
      effects.triggered.push("頂級掠食者: 衝鋒+1A+1D");
    }
  }
  else if (enhancement === "催眠凝視") {
    effects.hitMalus = 1;
    effects.triggered.push("催眠凝視: 敵軍-1命中");
  }
  else if (enhancement === "蟲群之聲") {
    effects.chargeAura = 6;
    effects.rerollCharge = true;
    effects.triggered.push("蟲群之聲: 6\"內重擲衝鋒");
  }
  else if (enhancement === "生物型態") {
    effects.toughnessBonus = 1;
    effects.woundBonus = 1;
    effects.triggered.push("生物型態: +1T+1W");
  }
  else if (enhancement === "潛行基因") {
    effects.stealth = true;
    effects.loneOperative = true;
    effects.triggered.push("潛行基因: 隱匿+獨行者");
  }

  return effects;
}

// 獲取敵軍受到的強化debuff
function getEnhancementDebuff(attacker, target) {
  const debuff = {
    hitMalus: 0,
    triggered: []
  };

  if (!target.enhancement) return debuff;

  // 催眠凝視：3"內敵軍-1命中
  if (target.enhancement === "催眠凝視") {
    const dist = pixelsToInch(Math.hypot(attacker.x - target.x, attacker.y - target.y));
    if (dist <= 3) {
      debuff.hitMalus = 1;
      debuff.triggered.push("催眠凝視: -1命中");
    }
  }

  return debuff;
}
