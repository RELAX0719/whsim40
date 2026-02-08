// ========== 種族規則 ==========
const DETACHMENT_RULES = {
  "necrons": {
    "awakened-dynasty": {
      name: "覺醒王朝 Awakened Dynasty",
      description: "指揮協議：當角色領導單位時，該單位所有命中擲骰+1。",
      effect: "+1 to Hit when CHARACTER leads unit",
      stratagems: [
        { name: "永恆亡者協議", cp: 1, desc: "復活被摧毀的角色（半血）", phases: ["command"] },
        { name: "不滅軍團協議", cp: 1, desc: "敵方射擊/近戰後觸發復活協議", phases: ["shooting", "fight"] },
        { name: "飢渴虛空協議", cp: 1, desc: "近戰S+1，角色領導時AP改進", phases: ["fight"] },
        { name: "突襲風暴協議", cp: 1, desc: "遠程武器獲得[突擊]，角色領導可重擲衝刺", phases: ["movement", "shooting"] },
        { name: "征服暴君協議", cp: 1, desc: "半射程內重擲命中1，角色領導全重擲", phases: ["shooting"] },
        { name: "復仇星辰協議", cp: 2, desc: "敵方摧毀附近單位後，角色單位可射擊", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Character") || context.hasLeader) {
          return { hitBonus: 1 };
        }
        return {};
      }
    },
    "annihilation-legion": {
      name: "殲滅軍團 Annihilation Legion",
      description: "殲滅協議：毀滅者和剝皮者可重擲衝鋒，若目標低於半血則+1衝鋒。毀滅者射擊最近目標時AP+1。",
      effect: "Destroyer Cult/Flayed Ones re-roll charges, +1 if target below half. +1 AP vs closest",
      stratagems: [
        { name: "死亡面具", cp: 1, desc: "敵方命中-1", phases: ["shooting", "fight"] },
        { name: "虛弱氣息", cp: 1, desc: "攻擊受傷敵人命中/致傷+1", phases: ["shooting", "fight"] },
        { name: "殺戮復活", cp: 1, desc: "摧毀敵人後觸發復活協議", phases: ["fight"] },
        { name: "無情獵手", cp: 1, desc: "堆疊/整合移動擴展至6\"", phases: ["fight"] },
        { name: "血腥殘暴", cp: 1, desc: "敵方撤退時造成致命傷並追擊", phases: ["movement"] },
        { name: "瘋狂之怒", cp: 1, desc: "被摧毀後向敵方移動", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        const isDestroyer = attacker.keywords?.includes("Destroyer") || attacker.keywords?.includes("Flayed");
        if (isDestroyer) {
          let bonus = { rerollCharge: true };
          if (target && target.currentHP <= target.maxHP / 2) {
            bonus.chargeBonus = 1;
          }
          if (context.phase === "shooting" && context.isClosestTarget) {
            bonus.apBonus = 1;
          }
          return bonus;
        }
        return {};
      }
    },
    "canoptek-court": {
      name: "幽靈構裝體法庭 Canoptek Court",
      description: "能量矩陣：祕術師和幽靈構裝體重擲命中1，完全在矩陣內則全重擲。矩陣根據目標控制擴張。",
      effect: "Cryptek/Canoptek re-roll 1s, full re-roll in Power Matrix",
      stratagems: [
        { name: "祕術師詛咒", cp: 1, desc: "祕術師被摧毀後幽靈構裝體命中/致傷+1", phases: ["shooting", "fight"] },
        { name: "殲滅核心", cp: 2, desc: "矩陣內祕術師/幽靈構裝體獲得[毀滅性傷口]", phases: ["shooting", "fight"] },
        { name: "太陽脈衝", cp: 1, desc: "目標標記附近武器獲得[無視掩護]", phases: ["shooting"] },
        { name: "反應子程序", cp: 1, desc: "幽靈構裝體增強移動反應", phases: ["movement"] }
      ],
      apply: (attacker, target, context) => {
        const isCryptek = attacker.keywords?.includes("Cryptek");
        const isCanoptek = attacker.keywords?.includes("Canoptek");
        if (isCryptek || isCanoptek) {
          if (context.inPowerMatrix) {
            return { rerollAllHits: true };
          }
          return { rerollHitOnes: true };
        }
        return {};
      }
    },
    "hypercrypt-legion": {
      name: "超維密室軍團 Hypercrypt Legion",
      description: "超維相移：單位可在移動階段消失並在射擊階段前重新出現於9\"外。深入打擊後可花費2CP衝鋒。",
      effect: "Units can hyperphase, 2CP to charge after deep strike",
      stratagems: [
        { name: "超維位移", cp: 1, desc: "移動階段移除單位，射擊階段前9\"外重新部署", phases: ["movement"] },
        { name: "閃現衝鋒", cp: 2, desc: "深入打擊後可衝鋒", phases: ["charge"] },
        { name: "維度裂隙", cp: 1, desc: "敵方無法對剛出現的單位反應射擊", phases: ["movement"] }
      ],
      apply: (attacker, target, context) => {
        return { canHyperphase: true };
      }
    },
    "cryptek-conclave": {
      name: "祕術師集會 Cryptek Conclave",
      description: "科技至上：祕術師和幽靈構裝體獲得4+無敵豁免。祕術師領導時給予單位5+無懼死亡。",
      effect: "Cryptek/Canoptek 4+ invulnerable, led units get 5+ FNP",
      stratagems: [
        { name: "奈米蟲修復", cp: 1, desc: "幽靈構裝體恢復D3傷口", phases: ["command"] },
        { name: "時間加速", cp: 2, desc: "祕術師或幽靈構裝體可以在射擊階段後再移動", phases: ["shooting"] },
        { name: "技術覆蓋", cp: 1, desc: "祕術師12\"內敵方車輛和無畏機甲-1命中", phases: ["shooting", "fight"] },
        { name: "祕術師庇護", cp: 1, desc: "祕術師死亡時可轉移傷害給幽靈構裝體", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        const isCryptek = attacker.keywords?.includes("Cryptek");
        const isCanoptek = attacker.keywords?.includes("Canoptek");
        if (isCryptek || isCanoptek) {
          let bonus = { invSave: 4 };
          if (isCryptek && context.hasLedUnit) {
            bonus.feelNoPain = 5;
          }
          return bonus;
        }
        return {};
      }
    },
    "starshatter-arsenal": {
      name: "星碎軍械庫 Starshatter Arsenal",
      description: "無情猛攻：攻擊目標標記範圍內的單位時，命中+1。載具和騎乘單位遠程武器獲得[突擊]。",
      effect: "+1 Hit vs units near objectives, Vehicles/Mounted get Assault",
      stratagems: [
        { name: "集中火力", cp: 1, desc: "同一目標多單位射擊時致傷+1", phases: ["shooting"] },
        { name: "毀滅光束", cp: 2, desc: "一個單位所有武器獲得[毀滅性傷口]", phases: ["shooting"] },
        { name: "壓制火力", cp: 1, desc: "被射擊的單位下回合移動-2\"", phases: ["shooting"] }
      ],
      apply: (attacker, target, context) => {
        let bonus = {};
        if (context.phase === "shooting" && context.nearObjective) {
          bonus.hitBonus = 1;
        }
        if (attacker.keywords?.includes("Vehicle") || attacker.keywords?.includes("Mounted")) {
          bonus.assault = true;
        }
        return bonus;
      }
    },
    "cursed-legion": {
      name: "詛咒軍團 Cursed Legion",
      description: "冷酷狂熱：毀滅者武器S+2。毀滅者殲滅敵軍後，友軍死靈武器S+2（持續到回合結束）。",
      effect: "+2 Strength for Destroyer Cult, spreads on kill",
      stratagems: [
        { name: "無止盡憎恨", cp: 1, desc: "毀滅者攻擊時重擲所有致傷" },
        { name: "瘋狂屠殺", cp: 2, desc: "近戰額外攻擊次數等於已造成傷害數" }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Destroyer")) {
          return { strengthBonus: 2 };
        }
        if (context.destroyerKilledThisTurn) {
          return { strengthBonus: 2 };
        }
        return {};
      }
    },
    "pantheon-of-woe": {
      name: "災禍萬神殿 Pantheon of Woe",
      description: "宇宙扭曲：C'tan碎片和怪獸單位獲得扭曲力場光環：6\"內敵軍受到攻擊時AP+1。可帶多個C'tan。",
      effect: "C'tan/Monster aura: +1 AP vs enemies within 6\"",
      stratagems: [
        { name: "現實撕裂", cp: 2, desc: "C'tan的攻擊自動造成致命傷（替代正常傷害）" },
        { name: "星神之力", cp: 1, desc: "C'tan的靈能武器傷害+1" },
        { name: "死靈皮膚綁定", cp: 1, desc: "C'tan受傷時附近死靈單位可分擔傷害" }
      ],
      apply: (attacker, target, context) => {
        if (context.nearAllyMonster || context.nearAllyCtan) {
          return { apBonus: 1 };
        }
        return {};
      }
    }
  },
  "tyranids": {
    "invasion-fleet": {
      name: "入侵艦隊 Invasion Fleet",
      description: "超適應：戰鬥開始選擇一種適應：蜂湧本能（對步兵/蟲群持續命中1）、超級侵略（對怪獸/載具致命打擊）、蟲巢獵手（對角色精準打擊）。",
      effect: "Choose: Sustained Hits 1 vs Infantry, Lethal Hits vs Monster/Vehicle, or Precision vs Characters",
      stratagems: [
        { name: "快速再生", cp: 1, desc: "獲得6+無懼死亡（突觸範圍內5+）" },
        { name: "腎上腺素激增", cp: 2, desc: "近戰未修正5+為致命打擊" },
        { name: "無盡蟲群", cp: 1, desc: "無盡群體單位恢復D3+3模型" },
        { name: "狂暴突襲", cp: 1, desc: "衝鋒後近戰命中+1" },
        { name: "超適應進化", cp: 1, desc: "本回合改變超適應選擇" }
      ],
      adaptations: {
        "swarming": { name: "蜂湧本能", effect: "vs Infantry/Swarm: Sustained Hits 1" },
        "aggression": { name: "超級侵略", effect: "vs Monster/Vehicle: Lethal Hits" },
        "predator": { name: "蟲巢獵手", effect: "vs Characters: Precision" }
      },
      apply: (attacker, target, context) => {
        const adaptation = context.selectedAdaptation || "swarming";
        if (adaptation === "swarming" && (target?.keywords?.includes("Infantry") || target?.keywords?.includes("Swarm"))) {
          return { sustainedHits: 1 };
        }
        if (adaptation === "aggression" && (target?.keywords?.includes("Monster") || target?.keywords?.includes("Vehicle"))) {
          return { lethalHits: true };
        }
        if (adaptation === "predator" && target?.keywords?.includes("Character")) {
          return { precision: true };
        }
        return {};
      }
    },
    "crusher-stampede": {
      name: "碾壓狂潮 Crusher Stampede",
      description: "狂怒巨獸：怪獸單位低於起始模型數時命中+1，低於半血時致傷+1。滿編時OC+2。",
      effect: "Monsters: +1 Hit if below starting, +1 Wound if below half, +2 OC at full",
      stratagems: [
        { name: "腐蝕內臟", cp: 1, desc: "致命爆發自動造成致命傷" },
        { name: "狂暴怪獸", cp: 1, desc: "近戰重擲所有命中" },
        { name: "巨大衝擊", cp: 1, desc: "衝鋒後擲6D6，4+各造成1致命傷" },
        { name: "堅韌外殼", cp: 1, desc: "怪獸獲得5+無懼死亡" }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Monster")) {
          let bonus = {};
          if (attacker.currentHP < attacker.maxHP) {
            bonus.hitBonus = 1;
          }
          if (attacker.currentHP <= attacker.maxHP / 2) {
            bonus.woundBonus = 1;
          }
          if (attacker.currentHP === attacker.maxHP) {
            bonus.ocBonus = 2;
          }
          return bonus;
        }
        return {};
      }
    },
    "unending-swarm": {
      name: "無盡蟲潮 Unending Swarm",
      description: "無可阻擋：無盡群體單位被射擊後進行「湧動移動」，向最近敵人移動D6\"。",
      effect: "Endless Multitude units Surge D6\" toward enemies after being shot",
      stratagems: [
        { name: "突觸驅策", cp: 1, desc: "重擲湧動距離，可改向目標標記移動", phases: ["shooting"] },
        { name: "無盡波浪", cp: 2, desc: "被摧毀的無盡群體返回戰略預備隊（每戰一次）", phases: ["command"] },
        { name: "蜂湧群體", cp: 1, desc: "15+模型時持續命中1，5+為致命打擊", phases: ["shooting", "fight"] },
        { name: "淹沒戰線", cp: 1, desc: "無盡群體衝鋒時敵方無法反應射擊", phases: ["charge"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Endless Multitude")) {
          return { canSurge: true, surgeDistance: "D6" };
        }
        return {};
      }
    },
    "assimilation-swarm": {
      name: "同化蟲群 Assimilation Swarm",
      description: "餵養蟲群：收割者單位在目標標記附近可進行再生，恢復傷口或復活模型。基因竊取者每多一單位OC+1。",
      effect: "Harvesters regenerate near objectives, Genestealers +1 OC per unit",
      stratagems: [
        { name: "感染存在", cp: 1, desc: "基因竊取者攻擊後敵人必須戰慄測試", phases: ["fight"] },
        { name: "異形飢餓", cp: 1, desc: "收割者殺敵後恢復D3傷口", phases: ["fight"] },
        { name: "教團崛起", cp: 2, desc: "基因竊取者深入打擊距離改為6\"", phases: ["movement"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.name?.includes("基因竊取者") || attacker.name?.includes("Genestealers")) {
          return { ocBonus: context.genestealerUnitCount || 1 };
        }
        if (attacker.keywords?.includes("Harvester") && context.nearObjective) {
          return { canRegenerate: true };
        }
        return {};
      }
    },
    "synaptic-nexus": {
      name: "突觸節點 Synaptic Nexus",
      description: "突觸命令：每個指揮階段可啟動強大的突觸能力，影響突觸範圍內所有單位。",
      effect: "Activate powerful Synaptic Imperatives each Command phase",
      stratagems: [
        { name: "蟲巢意志", cp: 1, desc: "突觸單位和範圍內單位重擲命中1", phases: ["shooting", "fight"] },
        { name: "適應本能", cp: 1, desc: "選擇單位獲得一種武器關鍵字到回合結束", phases: ["command"] },
        { name: "靈能尖嘯", cp: 2, desc: "6\"內敵人-1領導值並受D3致命傷", phases: ["command"] },
        { name: "蟲巢護盾", cp: 1, desc: "突觸範圍內單位獲得5+無懼死亡", phases: ["shooting", "fight"] }
      ],
      imperatives: {
        "aggression": { name: "侵略命令", effect: "近戰攻擊+1" },
        "adaptation": { name: "適應命令", effect: "護甲豁免+1" },
        "dominion": { name: "統御命令", effect: "OC翻倍" }
      },
      apply: (attacker, target, context) => {
        if (context.inSynapseRange) {
          const imperative = context.activeImperative || "aggression";
          if (imperative === "aggression") return { attackBonus: 1 };
          if (imperative === "adaptation") return { saveBonus: 1 };
          if (imperative === "dominion") return { ocMultiplier: 2 };
        }
        return {};
      }
    },
    "vanguard-onslaught": {
      name: "先鋒攻勢 Vanguard Onslaught",
      description: "搜尋觸鬚：伏擊者和神經伏擊者獲得增強移動和更遠的滲透部署。",
      effect: "Lictors/Neurolictors enhanced infiltrate and movement",
      stratagems: [
        { name: "隱匿潛伏者", cp: 1, desc: "伏擊者在掩護中-1被命中", phases: ["shooting"] },
        { name: "暗影突襲", cp: 1, desc: "深入打擊後可射擊並衝鋒", phases: ["movement"] },
        { name: "恐懼之源", cp: 2, desc: "敵方單位必須進行戰慄測試或無法反應", phases: ["charge"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.name?.includes("伏擊者") || attacker.name?.includes("Lictor")) {
          return { enhancedInfiltrate: true, extraMove: 2 };
        }
        return {};
      }
    },
    "subterranean-assault": {
      name: "地底突襲 Subterranean Assault",
      description: "突擊隧道：穿地獸和巨口獸可創建隧道標記。其他鑽地者可從隧道部署。攻擊時重擲命中1。",
      effect: "Trygon/Mawloc create tunnels, Burrowers deploy from them, re-roll 1s to Hit",
      stratagems: [
        { name: "地底伏擊", cp: 2, desc: "從隧道部署的單位本回合可衝鋒", phases: ["charge"] },
        { name: "恐怖突現", cp: 1, desc: "巨口獸深入打擊時對3\"內敵人造成D3+3致命傷", phases: ["movement"] },
        { name: "隧道網絡", cp: 1, desc: "鑽地者可在隧道間傳送", phases: ["movement"] }
      ],
      apply: (attacker, target, context) => {
        return { rerollHitOnes: true };
      }
    },
    "warrior-bioform-onslaught": {
      name: "戰士生體攻勢 Warrior Bioform Onslaught",
      description: "領袖巨獸：泰倫戰士、蟲族戰士首領和飛翼首領獲得5+無敵豁免和突觸能力。",
      effect: "Warriors/Prime get 5+ invulnerable save and Synapse",
      stratagems: [
        { name: "生體適應", cp: 1, desc: "戰士單位獲得一種武器關鍵字", phases: ["command"] },
        { name: "蟲群領袖", cp: 1, desc: "戰士領導的單位重擲命中1", phases: ["shooting", "fight"] },
        { name: "強化甲殼", cp: 1, desc: "戰士獲得4+無敵豁免到回合結束", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.name?.includes("戰士") || attacker.name?.includes("Warriors") || attacker.name?.includes("Prime")) {
          return { invSave: 5, hasSynapse: true };
        }
        return {};
      }
    }
  },
  "space-marines": {
    "gladius-task-force": {
      name: "格拉迪烏斯特遣隊 Gladius Task Force",
      description: "戰鬥教條：每回合可啟動一種教條（毀滅、戰術、突擊），每種每場只能用一次。",
      effect: "Combat Doctrines: Devastator/Tactical/Assault bonus once per battle",
      stratagems: [
        { name: "唯死方休", cp: 2, desc: "被摧毀的模型可在移除前攻擊一次", phases: ["fight"] },
        { name: "榮耀戰團", cp: 1, desc: "近戰階段額外攻擊", phases: ["fight"] },
        { name: "蔑視之甲", cp: 1, desc: "受到攻擊時AP-1", phases: ["shooting", "fight"] },
        { name: "適應戰略", cp: 1, desc: "改變當前戰鬥教條", phases: ["command"] },
        { name: "火力風暴", cp: 1, desc: "射擊時重擲命中1", phases: ["shooting"] },
        { name: "小隊戰術", cp: 1, desc: "單位可在敵方移動後移動6\"", phases: ["movement"] }
      ],
      apply: (attacker, target, context) => {
        return { rerollWoundOnes: true };
      }
    },
    "anvil-siege-force": {
      name: "鐵砧圍城部隊 Anvil Siege Force",
      description: "帝國之盾：遠程武器獲得[Heavy]；未移動單位命中+1，若已有Heavy則致傷+1。",
      effect: "Ranged weapons gain Heavy; stationary units +1 Hit or +1 Wound",
      stratagems: [
        { name: "嚴格紀律", cp: 1, desc: "單位自動通過戰慄測試", phases: ["command"] },
        { name: "戰鬥演練", cp: 1, desc: "重擲所有命中骰", phases: ["shooting"] },
        { name: "復仇之雹", cp: 2, desc: "對攻擊過己方的敵人命中+1", phases: ["shooting"] },
        { name: "無懼威脅", cp: 2, desc: "對載具/怪獸致傷+1", phases: ["shooting"] },
        { name: "寸步不退", cp: 1, desc: "獲得5+無懼死亡", phases: ["shooting", "fight"] },
        { name: "蔑視之甲", cp: 1, desc: "受到攻擊時AP-1", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        let bonus = { heavy: true };
        if (!attacker.hasMoved) {
          bonus.hitBonus = 1;
        }
        return bonus;
      }
    },
    "firestorm-assault-force": {
      name: "火風暴突擊部隊 Firestorm Assault Force",
      description: "近距殲滅：遠程武器獲得[Assault]；12\"內目標時S+1。",
      effect: "Ranged weapons gain Assault; +1 Strength within 12\"",
      stratagems: [
        { name: "戰火試煉", cp: 1, desc: "衝鋒後近戰命中+1", phases: ["fight"] },
        { name: "火力猛攻", cp: 1, desc: "射擊時獲得[持續命中1]", phases: ["shooting"] },
        { name: "燃燒復仇", cp: 1, desc: "被摧毀的單位可射擊一次", phases: ["shooting"] },
        { name: "快速登車", cp: 1, desc: "下車後仍可衝鋒", phases: ["movement"] },
        { name: "焚燒協議", cp: 2, desc: "火焰武器自動最大攻擊次數", phases: ["shooting"] },
        { name: "蔑視之甲", cp: 1, desc: "受到攻擊時AP-1", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        let bonus = { assault: true };
        if (context.distance && context.distance <= 12) {
          bonus.strengthBonus = 1;
        }
        return bonus;
      }
    },
    "ironstorm-spearhead": {
      name: "鐵風暴矛頭 Ironstorm Spearhead",
      description: "裝甲之怒：每單位每階段可重擲一個命中、致傷或傷害骰。",
      effect: "Re-roll one Hit, Wound, or Damage roll per unit per phase",
      stratagems: [
        { name: "蔑視之甲", cp: 1, desc: "受到攻擊時AP-1", phases: ["shooting", "fight"] },
        { name: "復仇怨靈", cp: 1, desc: "無畏機甲被摧毀時可攻擊", phases: ["fight"] },
        { name: "遠古之怒", cp: 1, desc: "無畏機甲近戰攻擊+1", phases: ["fight"] },
        { name: "機魂之力", cp: 1, desc: "載具忽略受損狀態懲罰", phases: ["shooting", "fight"] },
        { name: "不屈信念", cp: 1, desc: "載具獲得6+無懼死亡", phases: ["shooting", "fight"] },
        { name: "仁慈即軟弱", cp: 1, desc: "對半血敵人傷害+1", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Vehicle") || attacker.keywords?.includes("Dreadnought")) {
          return { rerollOneDie: true };
        }
        return {};
      }
    },
    "stormlance-task-force": {
      name: "風暴矛特遣隊 Stormlance Task Force",
      description: "閃電突襲：單位可在急行後衝鋒，或撤退後衝鋒。",
      effect: "Units can Advance and Charge, or Fall Back and Charge",
      stratagems: [
        { name: "蔑視之甲", cp: 1, desc: "受到攻擊時AP-1", phases: ["shooting", "fight"] },
        { name: "疾風閃避", cp: 1, desc: "被射擊時-1命中", phases: ["shooting"] },
        { name: "全速前進", cp: 2, desc: "急行擲骰自動為6", phases: ["movement"] },
        { name: "閃擊齊射", cp: 1, desc: "急行後射擊不受懲罰", phases: ["shooting"] },
        { name: "震撼突襲", cp: 1, desc: "衝鋒成功後近戰S+1", phases: ["fight"] },
        { name: "疾馳衝鋒", cp: 1, desc: "衝鋒擲骰+2", phases: ["charge"] }
      ],
      apply: (attacker, target, context) => {
        return { advanceAndCharge: true, fallBackAndCharge: true };
      }
    },
    "vanguard-spearhead": {
      name: "先鋒矛頭 Vanguard Spearhead",
      description: "暗影大師：敵方射擊-1命中；超過12\"外獲得掩護。",
      effect: "-1 to enemy shooting; Cover beyond 12\"",
      stratagems: [
        { name: "蔑視之甲", cp: 1, desc: "受到攻擊時AP-1", phases: ["shooting", "fight"] },
        { name: "暗影突襲", cp: 1, desc: "深入打擊後可射擊並衝鋒", phases: ["movement"] },
        { name: "精準打擊", cp: 2, desc: "攻擊角色時無視[獨行俠]", phases: ["shooting"] },
        { name: "計算佯攻", cp: 1, desc: "撤退後仍可射擊", phases: ["movement"] },
        { name: "游擊戰術", cp: 1, desc: "戰鬥後可從戰場移除進入預備隊", phases: ["fight"] },
        { name: "致命誘餌", cp: 1, desc: "敵方衝鋒時進行反應射擊", phases: ["charge"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Phobos")) {
          return { stealth: true, infiltrate: true };
        }
        return { stealth: true };
      }
    },
    "1st-company-task-force": {
      name: "第一連特遣隊 1st Company Task Force",
      description: "極端威脅：每場戰鬥一次，攻擊誓約目標時可重擲所有致傷骰。",
      effect: "Re-roll all Wound rolls vs Oath target once per game",
      stratagems: [
        { name: "蔑視之甲", cp: 1, desc: "受到攻擊時AP-1", phases: ["shooting", "fight"] },
        { name: "職責與榮耀", cp: 1, desc: "終結者獲得5+無懼死亡", phases: ["shooting", "fight"] },
        { name: "恐怖精通", cp: 1, desc: "近戰攻擊獲得[致命命中]", phases: ["fight"] },
        { name: "戰團英雄", cp: 1, desc: "角色可英勇介入6\"", phases: ["charge"] },
        { name: "軌道傳送", cp: 1, desc: "終結者可從預備隊9\"外部署", phases: ["movement"] },
        { name: "傳奇堅韌", cp: 1, desc: "減少1點受到的傷害（最低1）", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Terminator")) {
          return { rerollWounds: true, invSave: 4 };
        }
        return {};
      }
    }
  },
  "chaos": {
    "slaves-to-darkness": {
      name: "黑暗奴僕",
      description: "Let the Galaxy Burn：攻擊目標標記範圍內單位時致傷+1。",
      effect: "+1 to Wound vs units near objectives",
      apply: (attacker, target, context) => {
        if (context.nearObjective) return { woundBonus: 1 };
        return {};
      }
    }
  },
  "orks": {
    "war-horde": {
      name: "戰爭部落 War Horde",
      description: "持續打擊：歐克近戰武器獲得[持續命中1]。",
      effect: "Ork melee weapons gain Sustained Hits 1",
      stratagems: [
        { name: "失控衝撞", cp: 1, desc: "被摧毀的載具可移動後再爆炸", phases: ["shooting", "fight"] },
        { name: "歐克永不倒", cp: 2, desc: "被摧毀的模型可先攻擊再移除", phases: ["fight"] },
        { name: "狂暴屠殺", cp: 1, desc: "未修正5+命中視為致命命中", phases: ["fight"] },
        { name: "硬如釘子", cp: 1, desc: "敵方致傷-1", phases: ["shooting", "fight"] },
        { name: "暴民規則", cp: 1, desc: "10+模型單位自動解除戰慄", phases: ["command"] },
        { name: "衝啊！", cp: 1, desc: "步兵急行和衝鋒擲骰+2", phases: ["movement", "charge"] }
      ],
      apply: (attacker, target, context) => {
        if (context.phase === "fight") {
          return { sustainedHits: 1 };
        }
        return {};
      }
    },
    "da-big-hunt": {
      name: "大狩獵 Da Big Hunt",
      description: "狩獵目標：每指揮階段選擇敵方怪獸/載具/軍閥為獵物。獸襲者對獵物重擲衝鋒，AP+1。",
      effect: "Beast Snaggas re-roll charges and +1 AP vs designated Prey",
      stratagems: [
        { name: "拖倒牠", cp: 1, desc: "近戰獲得[持續命中1]，對獵物5+致命命中", phases: ["fight"] },
        { name: "勢不可擋", cp: 1, desc: "騎乘單位衝鋒每模型擲D6，4+造成致命傷", phases: ["charge"] },
        { name: "更大的獵物", cp: 1, desc: "急行/撤退後仍可對獵物衝鋒", phases: ["charge"] },
        { name: "休想跑", cp: 1, desc: "敵人撤退後可移動6\"追擊", phases: ["movement"] },
        { name: "潛行戰術", cp: 1, desc: "獲得掩護；步兵額外獲得隱匿", phases: ["shooting"] },
        { name: "本能獵手", cp: 1, desc: "戰鬥後可移除進入預備隊", phases: ["fight"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Beast Snagga")) {
          let bonus = { rerollCharge: true };
          if (target?.keywords?.includes("Monster") || target?.keywords?.includes("Vehicle") || target?.isWarlord) {
            bonus.apBonus = 1;
          }
          return bonus;
        }
        return {};
      }
    },
    "kult-of-speed": {
      name: "速度崇拜 Kult of Speed",
      description: "急速狂徒：速度狂徒單位急行或撤退後仍可射擊和衝鋒。",
      effect: "Speed Freeks can shoot and charge after Advance or Fall Back",
      stratagems: [
        { name: "最快狂徒", cp: 1, desc: "獲得5+無敵（T8以下載具4+）", phases: ["shooting", "fight"] },
        { name: "投擲松鼠", cp: 1, desc: "9\"內敵人須進行戰慄測試-1", phases: ["shooting"] },
        { name: "火力風暴", cp: 1, desc: "射擊獲得[持續命中1]，9\"內為[持續命中2]", phases: ["shooting"] },
        { name: "閃擊射擊", cp: 1, desc: "射擊獲得[致命命中]，9\"內5+為致命命中", phases: ["shooting"] },
        { name: "全速前進", cp: 1, desc: "衝鋒後近戰致傷+1", phases: ["fight"] },
        { name: "更多小子", cp: 1, desc: "敵人進入9\"內後可移動6\"", phases: ["movement"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Speed Freeks") || attacker.keywords?.includes("Vehicle")) {
          return { advanceAndShoot: true, advanceAndCharge: true, fallBackAndShoot: true };
        }
        return {};
      }
    },
    "dread-mob": {
      name: "恐懼暴民 Dread Mob",
      description: "機械狂熱：機師/步行機/格雷琴載具射擊/近戰時擲D6獲得隨機加成。",
      effect: "Roll D6 for random weapon abilities; Gretchin gain Battleline",
      stratagems: [
        { name: "鏗鏘巨爪", cp: 1, desc: "近戰S+2，傷害+1，獲得[危險]", phases: ["fight"] },
        { name: "超級燃料", cp: 1, desc: "重擲急行；射擊獲得[突擊]", phases: ["movement", "shooting"] },
        { name: "大傢伙專用彈", cp: 1, desc: "對怪獸/載具致傷+1，獲得[危險]", phases: ["shooting"] },
        { name: "噠噠噠！", cp: 1, desc: "重擲命中1（推進時重擲全部），獲得[危險]", phases: ["shooting"] },
        { name: "狡猾小鬼", cp: 1, desc: "格雷琴對敵人造成D3+1致命傷並移動6\"", phases: ["movement"] },
        { name: "額外零件", cp: 1, desc: "步行機/載具受傷傷害-1", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Walker") || attacker.keywords?.includes("Mek")) {
          const roll = Math.floor(Math.random() * 6) + 1;
          if (roll <= 2) return { sustainedHits: 1 };
          if (roll <= 4) return { lethalHits: true };
          return { criticalWoundAP: 1 };
        }
        return {};
      }
    },
    "green-tide": {
      name: "綠潮 Green Tide",
      description: "暴民心態：步兵單位獲得5+無敵；10+模型單位可重擲豁免1。",
      effect: "Infantry 5+ invulnerable; 10+ models re-roll saves of 1",
      stratagems: [
        { name: "競爭本能", cp: 1, desc: "近戰重擲致傷1（10+模型重擲全部）", phases: ["fight"] },
        { name: "推土機暴力", cp: 1, desc: "3\"內模型可攻擊3\"內敵人", phases: ["fight"] },
        { name: "吹噓權", cp: 1, desc: "兩個6\"內的男孩單位視為10+模型", phases: ["command"] },
        { name: "來吧小子！", cp: 1, desc: "男孩單位恢復D3+2模型", phases: ["command"] },
        { name: "肌肉浪潮", cp: 1, desc: "衝鋒擲骰+當前回合數", phases: ["charge"] },
        { name: "上啊！", cp: 1, desc: "向最近敵人移動D6\"（10+模型移動6\"）", phases: ["movement"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Infantry")) {
          let bonus = { invSave: 5 };
          if (attacker.modelsAlive >= 10) {
            bonus.rerollSaveOnes = true;
          }
          return bonus;
        }
        return {};
      }
    },
    "bully-boyz": {
      name: "霸凌男孩 Bully Boyz",
      description: "雙重WAAAGH!：可為巨甲頭頭/頭頭/戰爭頭頭發動第二次WAAAGH!。",
      effect: "Call a second Waaagh! for Nobz/Meganobz/Warboss units",
      stratagems: [
        { name: "武裝到牙", cp: 1, desc: "頭頭/巨甲重擲命中1（WAAAGH時重擲全部）", phases: ["shooting", "fight"] },
        { name: "傲慢到死", cp: 1, desc: "被摧毀的頭頭5+可先攻擊（WAAAGH時7+）", phases: ["fight"] },
        { name: "永遠找茬", cp: 1, desc: "消滅敵人後整合D3+3\"（WAAAGH時6\"）", phases: ["fight"] },
        { name: "碾壓衝擊", cp: 1, desc: "接戰範圍每模型擲D6，5+致命傷（WAAAGH時4+）", phases: ["fight"] },
        { name: "砍倒他們", cp: 1, desc: "敵人絕望逃脫-1（WAAAGH時生效）", phases: ["fight"] },
        { name: "龐大野獸", cp: 1, desc: "受到攻擊AP-1", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Nobz") || attacker.keywords?.includes("Meganobz") || attacker.name?.includes("頭頭")) {
          return { doubleWaaagh: true, feelNoPain: 5 };
        }
        return {};
      }
    },
    "taktikal-brigade": {
      name: "戰術旅 Taktikal Brigade",
      description: "戰術指令：頭頭/機師/戰爭頭頭可透過領導測試給附近單位戰術加成。",
      effect: "Boss/Mek/Warboss issue Taktiks via Leadership tests",
      stratagems: [
        { name: "那是我們的", cp: 1, desc: "接戰中單位OC+1", phases: ["command"] },
        { name: "好好打", cp: 1, desc: "近戰選擇[持續命中1]或[致命命中]", phases: ["fight"] },
        { name: "戰術撤退", cp: 1, desc: "撤退後仍可射擊/衝鋒", phases: ["movement"] },
        { name: "碾壓降臨", cp: 1, desc: "風暴男孩衝鋒後4+造成致命傷", phases: ["charge"] },
        { name: "下一個目標", cp: 1, desc: "敵人撤退後可移動6\"", phases: ["movement"] },
        { name: "死鬼潛行", cp: 1, desc: "突擊隊/風暴男孩移除進入預備隊", phases: ["movement"] }
      ],
      apply: (attacker, target, context) => {
        if (attacker.keywords?.includes("Character")) {
          return { issueOrders: true, leadershipBonus: 1 };
        }
        return {};
      }
    },
    "more-dakka": {
      name: "更多火力 More Dakka!",
      description: "無盡射擊：歐克步兵和步行機遠程武器獲得[持續命中2]。",
      effect: "Ork Infantry/Walker ranged weapons gain Sustained Hits 2",
      stratagems: [
        { name: "歐克還是歐克", cp: 1, desc: "近戰重擲致傷1（目標附近重擲全部）", phases: ["fight"] },
        { name: "衝啊小子！", cp: 1, desc: "為單一單位啟動WAAAGH（即使已用過）", phases: ["command"] },
        { name: "超級炫耀", cp: 1, desc: "步行機M+1、Ld+1、OC+1、命中+1", phases: ["shooting", "fight"] },
        { name: "長時失控掃射", cp: 1, desc: "射擊無視18\"內敵人掩護", phases: ["shooting"] },
        { name: "特殊彈藥", cp: 1, desc: "對18\"內最近敵人射擊AP+1", phases: ["shooting"] },
        { name: "這叫火力？", cp: 1, desc: "被敵人摧毀模型後可立即射擊該敵人", phases: ["shooting", "fight"] }
      ],
      apply: (attacker, target, context) => {
        if ((attacker.keywords?.includes("Infantry") || attacker.keywords?.includes("Walker")) && context.phase === "shooting") {
          return { sustainedHits: 2 };
        }
        return {};
      }
    }
  }
};
