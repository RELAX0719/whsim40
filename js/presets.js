// ========== 預設軍隊組合 ==========
const PRESET_ARMIES = {
  "necrons": [
    // ===== 1000分組合 (來源: miniheadquarters.com, bolterandchainsword.com) =====
    {
      name: "【1000分】Hypercrypt幽靈",
      desc: "6幽靈+末日方舟核心，高機動性",
      detachment: "hypercrypt-legion",
      units: ["nc-chronomancer", "nc-hexmark", "nc-technomancer", "nc-warriors", "nc-scarabs", "nc-wraiths", "nc-wraiths", "nc-deathmarks", "nc-doomsdayark"],
      warlord: "nc-chronomancer",
      enhancements: [{ unitId: "nc-chronomancer", enhancement: "維度跳躍者", points: 25 }]
    },
    {
      name: "【1000分】三C'tan衝擊",
      desc: "三星神壓制，極端精英列表",
      detachment: "hypercrypt-legion",
      units: ["nc-ctan-nightbringer", "nc-ctan-deceiver", "nc-ctan-transcendent", "nc-warriors", "nc-chronomancer"],
      warlord: "nc-chronomancer",
      enhancements: [{ unitId: "nc-chronomancer", enhancement: "時間錨", points: 20 }]
    },
    {
      name: "【1000分】毀滅者獵殺",
      desc: "毀滅者核心，高傷害輸出",
      detachment: "annihilation-legion",
      units: ["nc-skorpekh-lord", "nc-skorpekh", "nc-skorpekh", "nc-lokhust", "nc-lokhust", "nc-hexmark", "nc-warriors", "nc-scarabs"],
      warlord: "nc-skorpekh-lord",
      enhancements: []
    },
    // ===== 2000分組合 =====
    {
      name: "【2000分】寂靜王+夜靈",
      desc: "寂靜王帶領夜靈進攻",
      detachment: "starshatter-arsenal",
      units: ["nc-silentking", "nc-ctan-nightbringer", "nc-chronomancer", "nc-wraiths", "nc-wraiths", "nc-doomsdayark", "nc-immortals", "nc-immortals"],
      warlord: "nc-silentking",
      enhancements: []
    },
    {
      name: "【2000分】雙C'tan",
      desc: "夜靈+欺詐者雙星神",
      detachment: "hypercrypt-legion",
      units: ["nc-ctan-nightbringer", "nc-ctan-deceiver", "nc-hexmark", "nc-hexmark", "nc-deathmarks", "nc-doomsdayark", "nc-wraiths", "nc-tombblades"],
      warlord: "nc-hexmark",
      enhancements: [{ unitId: "nc-hexmark", enhancement: "維度跳躍者", points: 25 }]
    },
    {
      name: "【2000分】銀潮軍團",
      desc: "霸主帶領銀潮大軍",
      detachment: "awakened-dynasty",
      units: ["nc-overlord", "nc-skorpekh-lord", "nc-szeras", "nc-warriors", "nc-warriors", "nc-lychguard", "nc-spyder", "nc-skorpekh"],
      warlord: "nc-overlord",
      enhancements: [
        { unitId: "nc-overlord", enhancement: "相位護盾", points: 20 },
        { unitId: "nc-skorpekh-lord", enhancement: "超越時間", points: 25 }
      ]
    }
  ],
  "tyranids": [
    // ===== 1000分組合 (來源: thetyranidhive.proboards.com, woehammer.com) =====
    {
      name: "【1000分】滲透獵殺",
      desc: "Vanguard滲透流，大量伏擊單位",
      detachment: "vanguard-onslaught",
      units: ["ty-broodlord", "ty-deathleaper", "ty-genestealers", "ty-genestealers", "ty-lictors", "ty-lictors", "ty-gargoyles", "ty-gargoyles"],
      warlord: "ty-broodlord",
      enhancements: [{ unitId: "ty-broodlord", enhancement: "潛行基因", points: 15 }]
    },
    {
      name: "【1000分】蟲母繁殖",
      desc: "Tervigon補充白蟻，持續壓力",
      detachment: "invasion-fleet",
      units: ["ty-swarmlord", "ty-prime", "ty-tervigon", "ty-warriors", "ty-termagants", "ty-termagants", "ty-termagants"],
      warlord: "ty-swarmlord",
      enhancements: [{ unitId: "ty-swarmlord", enhancement: "適應進化", points: 25 }]
    },
    {
      name: "【1000分】怪獸打擊",
      desc: "大型怪獸為主，高傷害輸出",
      detachment: "invasion-fleet",
      units: ["ty-hivetyrant", "ty-exocrine", "ty-carnifex", "ty-warriors", "ty-termagants", "ty-hormagaunts"],
      warlord: "ty-hivetyrant",
      enhancements: [{ unitId: "ty-hivetyrant", enhancement: "頂級掠食者", points: 20 }]
    },
    // ===== 2000分組合 =====
    {
      name: "【2000分】三Exocrine砲擊",
      desc: "三隻Exocrine遠程砲擊",
      detachment: "invasion-fleet",
      units: ["ty-hivetyrant", "ty-exocrine", "ty-exocrine", "ty-exocrine", "ty-maleceptor", "ty-zoanthropes", "ty-termagants", "ty-termagants"],
      warlord: "ty-hivetyrant",
      enhancements: [
        { unitId: "ty-hivetyrant", enhancement: "適應進化", points: 25 },
        { unitId: "ty-maleceptor", enhancement: "蟲群之聲", points: 10 }
      ]
    },
    {
      name: "【2000分】Norn使者佔點",
      desc: "地底突襲佔領目標",
      detachment: "subterranean-assault",
      units: ["ty-nornemissary", "ty-neurotyrant", "ty-mawloc", "ty-trygon", "ty-warriors", "ty-genestealers", "ty-carnifex", "ty-carnifex"],
      warlord: "ty-nornemissary",
      enhancements: []
    },
    {
      name: "【2000分】蟲海戰術",
      desc: "大量蟲海淹沒敵軍",
      detachment: "invasion-fleet",
      units: ["ty-tervigon", "ty-hivetyrant", "ty-termagants", "ty-termagants", "ty-termagants", "ty-hormagaunts", "ty-hormagaunts", "ty-tyrannofex"],
      warlord: "ty-hivetyrant",
      enhancements: [
        { unitId: "ty-hivetyrant", enhancement: "頂級掠食者", points: 20 },
        { unitId: "ty-tervigon", enhancement: "蟲群之聲", points: 10 }
      ]
    }
  ],
  "orks": [
    // ===== 1000分組合 (來源: woehammer.com) =====
    {
      name: "【1000分】Waagh衝鋒",
      desc: "雙Warboss+Meganobz，強力近戰",
      detachment: "war-horde",
      units: ["or-warboss", "or-warboss", "or-bigmek", "or-meganobz", "or-boyz", "or-boyz", "or-deffkoptas"],
      warlord: "or-warboss",
      enhancements: []
    },
    {
      name: "【1000分】Dakka掃射",
      desc: "Lootas+Tankbustas遠程火力",
      detachment: "more-dakka",
      units: ["or-warboss", "or-bigmek", "or-lootas", "or-lootas", "or-tankbustas", "or-boyz", "or-boyz"],
      warlord: "or-warboss",
      enhancements: []
    },
    {
      name: "【1000分】速攻突擊",
      desc: "Deffkoptas+Stormboyz快速打擊",
      detachment: "kult-of-speed",
      units: ["or-warboss", "or-weirdboy", "or-deffkoptas", "or-deffkoptas", "or-stormboyz", "or-stormboyz", "or-boyz"],
      warlord: "or-warboss",
      enhancements: []
    },
    // ===== 2000分組合 =====
    {
      name: "【2000分】Dakka卡車隊",
      desc: "Ghazghkull帶領火力輸出",
      detachment: "more-dakka",
      units: ["or-ghazghkull", "or-bigmek", "or-lootas", "or-lootas", "or-tankbustas", "or-boyz", "or-boyz", "or-deffkoptas"],
      warlord: "or-ghazghkull",
      enhancements: []
    },
    {
      name: "【2000分】Meganobz重裝",
      desc: "大量Meganobz衝擊",
      detachment: "bully-boyz",
      units: ["or-warboss", "or-bigmek", "or-meganobz", "or-meganobz", "or-meganobz", "or-nobz", "or-boyz", "or-boyz"],
      warlord: "or-warboss",
      enhancements: []
    },
    {
      name: "【2000分】速度Waagh",
      desc: "快速打擊，突然襲擊",
      detachment: "kult-of-speed",
      units: ["or-warboss", "or-weirdboy", "or-deffkoptas", "or-deffkoptas", "or-stormboyz", "or-stormboyz", "or-kommandos", "or-boyz"],
      warlord: "or-warboss",
      enhancements: []
    }
  ],
  "space-marines": [
    // ===== 1000分組合 (來源: dakkadakka.com, goonhammer.com) =====
    {
      name: "【1000分】Gladius滲透",
      desc: "滲透者+偵察兵，任務優先",
      detachment: "gladius-task-force",
      units: ["sm-librarian", "sm-apothecary", "sm-intercessors", "sm-intercessors", "sm-tactical", "sm-tactical", "sm-dreadnought"],
      warlord: "sm-librarian",
      enhancements: []
    },
    {
      name: "【1000分】重裝打擊",
      desc: "無畏機甲+火力支援",
      detachment: "gladius-task-force",
      units: ["sm-captain", "sm-chaplain", "sm-hellblasters", "sm-intercessors", "sm-intercessors", "sm-dreadnought", "sm-eradicators"],
      warlord: "sm-captain",
      enhancements: []
    },
    {
      name: "【1000分】終結者突襲",
      desc: "終結者深入打擊",
      detachment: "1st-company-task-force",
      units: ["sm-captain", "sm-terminators", "sm-assault-terminators", "sm-intercessors", "sm-tactical", "sm-rhino"],
      warlord: "sm-captain",
      enhancements: []
    },
    // ===== 2000分組合 =====
    {
      name: "【2000分】終結者突擊",
      desc: "終結者深入打擊",
      detachment: "gladius-task-force",
      units: ["sm-captain", "sm-chaplain", "sm-terminators", "sm-assault-terminators", "sm-intercessors", "sm-intercessors", "sm-eradicators", "sm-dreadnought"],
      warlord: "sm-captain",
      enhancements: []
    },
    {
      name: "【2000分】火力壓制",
      desc: "重火力輸出壓制敵軍",
      detachment: "firestorm-assault-force",
      units: ["sm-captain", "sm-librarian", "sm-hellblasters", "sm-devastators", "sm-aggressors", "sm-intercessors", "sm-predator", "sm-gladiator"],
      warlord: "sm-captain",
      enhancements: []
    },
    {
      name: "【2000分】快速打擊",
      desc: "快速突擊近戰",
      detachment: "stormlance-task-force",
      units: ["sm-captain", "sm-chaplain", "sm-assault-marines", "sm-vanguard-veterans", "sm-intercessors", "sm-tactical", "sm-rhino", "sm-repulsor"],
      warlord: "sm-captain",
      enhancements: []
    }
  ],
  "chaos": [
    {
      name: "【1000分】乞血狂徒",
      desc: "狂暴近戰部隊",
      detachment: "default",
      units: ["ch-lord", "ch-berzerkers", "ch-berzerkers", "ch-legionaries", "ch-helbrute"],
      warlord: "ch-lord",
      enhancements: []
    },
    {
      name: "【2000分】乞血軍團",
      desc: "大規模乞血軍團",
      detachment: "default",
      units: ["ch-lord", "ch-berzerkers", "ch-berzerkers", "ch-legionaries", "ch-legionaries", "ch-havocs", "ch-helbrute"],
      warlord: "ch-lord",
      enhancements: []
    }
  ]
};
