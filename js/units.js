// ========== 單位資料庫（根據官方10版規則更新）==========
const UNIT_DATABASE = {
  "space-marines": {
    name: "星際戰士",
    color: "#3b82f6",
    units: [
      {
        id: "sm-captain",
        name: "連長 Captain",
        points: 80,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/f/f6/SMCaptain10th.jpg/250px-SMCaptain10th.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 5, Ld: 6, OC: 1 },
        inv: 4,
        keywords: ["Infantry", "Character"],
        weapons: {
          ranged: { name: "重型爆矢槍", range: 30, A: 4, skill: 2, S: 5, AP: -1, D: 2 },
          melee: { name: "動力劍", A: 5, skill: 2, S: 5, AP: -2, D: 2 }
        },
        abilities: ["領袖: 6\"內友軍重擲命中1", "Oath of Moment"]
      },
      {
        id: "sm-intercessors",
        name: "先鋒戰士×5 Intercessors",
        points: 80,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/2/2a/Intercessor_Models_10E.jpg/300px-Intercessor_Models_10E.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 10, Ld: 6, OC: 2 },
        inv: null,
        keywords: ["Infantry", "Battleline"],
        weapons: {
          ranged: { name: "爆矢步槍 Bolt Rifle", range: 24, A: 2, skill: 3, S: 4, AP: -1, D: 1, keywords: ["Assault", "Heavy"] },
          melee: { name: "近戰武器", A: 3, skill: 3, S: 4, AP: 0, D: 1 }
        },
        abilities: ["目標鎖定: 選定目標時+2攻擊"]
      },
      {
        id: "sm-tactical",
        name: "戰術小隊×5 Tactical Squad",
        points: 85,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/5/55/TacticalSquad10.jpg/300px-TacticalSquad10.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 10, Ld: 6, OC: 2 },
        inv: null,
        keywords: ["Infantry", "Battleline"],
        weapons: {
          ranged: { name: "爆矢槍 Boltgun", range: 24, A: 2, skill: 3, S: 4, AP: 0, D: 1 },
          melee: { name: "近戰武器", A: 2, skill: 3, S: 4, AP: 0, D: 1 }
        },
        abilities: ["靈活部署: 可後備部署"]
      },
      {
        id: "sm-hellblasters",
        name: "地獄火槍兵×5 Hellblasters",
        points: 115,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/6/6e/HellblasterMini10th.jpg/180px-HellblasterMini10th.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 10, Ld: 6, OC: 2 },
        inv: null,
        keywords: ["Infantry"],
        weapons: {
          ranged: { name: "等離子殲滅槍 Plasma Incinerator", range: 24, A: 2, skill: 3, S: 7, AP: -2, D: 2, keywords: ["Hazardous"] },
          melee: { name: "近戰武器", A: 2, skill: 3, S: 4, AP: 0, D: 1 }
        },
        abilities: ["過載: Hazardous武器"]
      },
      {
        id: "sm-dreadnought",
        name: "無畏機甲 Redemptor Dreadnought",
        points: 210,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/c/c6/Redemptor8th.jpeg/220px-Redemptor8th.jpeg",
        stats: { M: 8, T: 10, Sv: 2, W: 12, Ld: 6, OC: 4 },
        inv: null,
        keywords: ["Vehicle", "Walker"],
        weapons: {
          ranged: { name: "重型砲彈加農砲", range: 48, A: 6, skill: 3, S: 9, AP: -2, D: 3 },
          melee: { name: "無畏之拳", A: 5, skill: 3, S: 12, AP: -3, D: 3 }
        },
        abilities: ["堅定不移: 衰減檔案"]
      },
      // ===== 新增 Space Marines 單位 =====
      {
        id: "sm-terminators",
        name: "終結者×5 Terminators",
        points: 185,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/3/30/TerminatorSquad10th.jpg/250px-TerminatorSquad10th.jpg",
        stats: { M: 5, T: 5, Sv: 2, W: 15, Ld: 6, OC: 1 },
        inv: 4,
        keywords: ["Infantry", "Terminator"],
        weapons: {
          ranged: { name: "風暴爆矢槍 Storm Bolter", range: 24, A: 2, skill: 3, S: 4, AP: 0, D: 1, keywords: ["Rapid Fire 2"] },
          melee: { name: "動力拳套 Power Fist", A: 3, skill: 3, S: 8, AP: -2, D: 2 }
        },
        abilities: ["深入打擊", "堅韌: 4+無敵"]
      },
      {
        id: "sm-assault-terminators",
        name: "突擊終結者×5 Assault Terminators",
        points: 185,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/3/30/TerminatorSquad10th.jpg/250px-TerminatorSquad10th.jpg",
        stats: { M: 5, T: 5, Sv: 2, W: 15, Ld: 6, OC: 1 },
        inv: 4,
        keywords: ["Infantry", "Terminator"],
        weapons: {
          ranged: null,
          melee: { name: "雷錘暴風盾", A: 3, skill: 4, S: 8, AP: -2, D: 2 }
        },
        abilities: ["深入打擊", "暴風盾: 4+無敵"]
      },
      {
        id: "sm-assault-marines",
        name: "突擊陸戰隊×5 Assault Marines",
        points: 85,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/5/5e/AssaultMarinesMini.jpg/180px-AssaultMarinesMini.jpg",
        stats: { M: 12, T: 4, Sv: 3, W: 10, Ld: 6, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Fly", "Jump Pack"],
        weapons: {
          ranged: { name: "爆矢手槍 Bolt Pistol", range: 12, A: 1, skill: 3, S: 4, AP: 0, D: 1 },
          melee: { name: "鏈鋸劍 Chainsword", A: 3, skill: 3, S: 4, AP: -1, D: 1 }
        },
        abilities: ["深入打擊", "飛行"]
      },
      {
        id: "sm-vanguard-veterans",
        name: "先鋒老兵×5 Vanguard Veterans",
        points: 110,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/5/5e/AssaultMarinesMini.jpg/180px-AssaultMarinesMini.jpg",
        stats: { M: 12, T: 4, Sv: 3, W: 10, Ld: 6, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Fly", "Jump Pack"],
        weapons: {
          ranged: { name: "爆矢手槍 Bolt Pistol", range: 12, A: 1, skill: 3, S: 4, AP: 0, D: 1 },
          melee: { name: "動力劍", A: 4, skill: 3, S: 5, AP: -2, D: 1 }
        },
        abilities: ["深入打擊", "飛行"]
      },
      {
        id: "sm-devastators",
        name: "毀滅者×5 Devastators",
        points: 110,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/6/6a/DevastatorMini10th.jpg/200px-DevastatorMini10th.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 10, Ld: 6, OC: 2 },
        inv: null,
        keywords: ["Infantry"],
        weapons: {
          ranged: { name: "重武器 Heavy Weapons", range: 48, A: 3, skill: 3, S: 9, AP: -3, D: "D6", keywords: ["Heavy"] },
          melee: { name: "近戰武器", A: 2, skill: 3, S: 4, AP: 0, D: 1 }
        },
        abilities: ["重火力: 未移動時+1命中"]
      },
      {
        id: "sm-eradicators",
        name: "殲滅者×3 Eradicators",
        points: 95,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/4/4c/EradicatorsMini.jpg/200px-EradicatorsMini.jpg",
        stats: { M: 5, T: 6, Sv: 3, W: 9, Ld: 6, OC: 1 },
        inv: null,
        keywords: ["Infantry"],
        weapons: {
          ranged: { name: "熔毀槍 Melta Rifle", range: 18, A: 1, skill: 3, S: 9, AP: -4, D: "D6", keywords: ["Melta 2", "Heavy"] },
          melee: { name: "近戰武器", A: 2, skill: 3, S: 4, AP: 0, D: 1 }
        },
        abilities: ["殲滅協議: 可對同一目標射擊兩次"]
      },
      {
        id: "sm-aggressors",
        name: "侵略者×3 Aggressors",
        points: 110,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/a/af/AggressorModels.jpg/200px-AggressorModels.jpg",
        stats: { M: 5, T: 6, Sv: 3, W: 9, Ld: 6, OC: 2 },
        inv: null,
        keywords: ["Infantry", "Gravis"],
        weapons: {
          ranged: { name: "火焰風暴手套 Flamestorm Gauntlets", range: 12, A: "D6+1", skill: 0, S: 4, AP: 0, D: 1, keywords: ["Torrent", "Twin-linked"] },
          melee: { name: "動力拳套", A: 3, skill: 3, S: 6, AP: -1, D: 1 }
        },
        abilities: ["近距壓制: 未移動時射擊兩次"]
      },
      {
        id: "sm-chaplain",
        name: "牧師 Chaplain",
        points: 65,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/6/60/ChaplainPrimaris.jpg/180px-ChaplainPrimaris.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 4, Ld: 5, OC: 1 },
        inv: 4,
        keywords: ["Infantry", "Character"],
        weapons: {
          ranged: { name: "赦罪者 Absolvor Bolt Pistol", range: 18, A: 1, skill: 2, S: 5, AP: -1, D: 2 },
          melee: { name: "骷髏權杖 Crozius Arcanum", A: 5, skill: 2, S: 6, AP: -1, D: 2 }
        },
        abilities: ["領袖: 領導單位近戰+1命中", "戰鬥禱詞"]
      },
      {
        id: "sm-librarian",
        name: "圖書館長 Librarian",
        points: 75,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/7/70/LibrarianPrimaris10th.jpg/180px-LibrarianPrimaris10th.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 4, Ld: 6, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Character", "Psyker"],
        weapons: {
          ranged: { name: "精神衝擊 Smite", range: 24, A: "D6", skill: 3, S: 5, AP: -2, D: "D3" },
          melee: { name: "力量之杖 Force Stave", A: 4, skill: 3, S: 6, AP: -1, D: "D3" }
        },
        abilities: ["領袖", "靈能護盾: 5+無懼死亡"]
      },
      {
        id: "sm-apothecary",
        name: "藥劑師 Apothecary",
        points: 55,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/6/60/ApothecaryPrimarisModel.jpg/180px-ApothecaryPrimarisModel.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 4, Ld: 6, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Character"],
        weapons: {
          ranged: { name: "赦罪者手槍", range: 18, A: 1, skill: 3, S: 5, AP: -1, D: 2 },
          melee: { name: "近戰武器", A: 4, skill: 3, S: 4, AP: 0, D: 1 }
        },
        abilities: ["領袖: 領導單位獲得5+無懼死亡", "醫療: 每回合恢復D3傷口"]
      },
      {
        id: "sm-rhino",
        name: "犀牛裝甲運兵車 Rhino",
        points: 75,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/4/4f/RhinoMini10th.jpg/200px-RhinoMini10th.jpg",
        stats: { M: 12, T: 9, Sv: 3, W: 10, Ld: 6, OC: 2 },
        inv: null,
        keywords: ["Vehicle", "Transport", "Dedicated Transport"],
        weapons: {
          ranged: { name: "風暴爆矢槍", range: 24, A: 2, skill: 3, S: 4, AP: 0, D: 1, keywords: ["Rapid Fire 2"] },
          melee: { name: "撞擊", A: 3, skill: 4, S: 6, AP: 0, D: 1 }
        },
        abilities: ["運輸: 12步兵", "射擊艙口6"]
      },
      {
        id: "sm-repulsor",
        name: "排斥者坦克 Repulsor",
        points: 195,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/c/ce/RepulsorModel.jpg/220px-RepulsorModel.jpg",
        stats: { M: 10, T: 12, Sv: 3, W: 16, Ld: 6, OC: 5 },
        inv: null,
        keywords: ["Vehicle", "Transport", "Fly"],
        weapons: {
          ranged: { name: "重型砲彈加農砲", range: 48, A: 6, skill: 3, S: 9, AP: -2, D: 3 },
          melee: { name: "撞擊", A: 6, skill: 4, S: 8, AP: -1, D: 2 }
        },
        abilities: ["運輸: 12步兵", "懸浮", "致命末日D6"]
      },
      {
        id: "sm-predator",
        name: "掠奪者坦克 Predator",
        points: 130,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/1/1a/PredatorDestructor10th.jpg/200px-PredatorDestructor10th.jpg",
        stats: { M: 10, T: 10, Sv: 3, W: 11, Ld: 6, OC: 3 },
        inv: null,
        keywords: ["Vehicle"],
        weapons: {
          ranged: { name: "掠奪者自動加農砲", range: 48, A: 4, skill: 3, S: 9, AP: -1, D: 3 },
          melee: { name: "撞擊", A: 3, skill: 4, S: 6, AP: 0, D: 1 }
        },
        abilities: ["致命末日D3"]
      },
      {
        id: "sm-land-raider",
        name: "陸戰傳奇 Land Raider",
        points: 240,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/c/ce/LandRaiderMini10th.jpg/200px-LandRaiderMini10th.jpg",
        stats: { M: 10, T: 12, Sv: 2, W: 16, Ld: 6, OC: 5 },
        inv: null,
        keywords: ["Vehicle", "Transport"],
        weapons: {
          ranged: { name: "雙聯重型爆矢槍×2", range: 36, A: 6, skill: 3, S: 5, AP: -1, D: 2, keywords: ["Twin-linked"] },
          melee: { name: "撞擊", A: 6, skill: 4, S: 8, AP: -1, D: 2 }
        },
        abilities: ["運輸: 12步兵/6終結者", "致命末日D6", "突擊載具"]
      },
      {
        id: "sm-gladiator",
        name: "角鬥士坦克 Gladiator",
        points: 155,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/a/a0/GladiatorLancer10th.jpg/200px-GladiatorLancer10th.jpg",
        stats: { M: 10, T: 10, Sv: 3, W: 12, Ld: 6, OC: 3 },
        inv: null,
        keywords: ["Vehicle"],
        weapons: {
          ranged: { name: "長槍雷射砲", range: 72, A: 2, skill: 3, S: 14, AP: -3, D: "D6+2", keywords: ["Heavy"] },
          melee: { name: "撞擊", A: 4, skill: 4, S: 7, AP: 0, D: 1 }
        },
        abilities: ["致命末日D3", "反載具"]
      }
    ]
  },
  "necrons": {
    name: "死靈",
    color: "#22c55e",
    units: [
      { id: "nc-overlord", name: "霸主 Overlord", points: 85, img: "img/Necron/99070110006_OverlordTachyonArrow1.jpg", stats: { M: 5, T: 5, Sv: 2, W: 6, Ld: 6, OC: 1 }, inv: 4, keywords: ["Infantry", "Character"], weapons: { ranged: { name: "超光速箭", range: 72, A: 1, skill: 2, S: 16, AP: -5, D: "D6+2", oneUse: true }, melee: { name: "虛空之刃", A: 4, skill: 2, S: 8, AP: -3, D: 2 } }, abilities: ["領導光環", "復活協議"] },
      { id: "nc-silentking", name: "沉默之王 Silent King", points: 400, img: "img/Necron/99120110047_NECSzarekhSilentKingLead.jpg", stats: { M: 8, T: 10, Sv: 2, W: 16, Ld: 6, OC: 6 }, inv: 4, keywords: ["Monster", "Character", "Epic Hero"], weapons: { ranged: { name: "殲滅光束", range: 36, A: 6, skill: 2, S: 12, AP: -4, D: 3 }, melee: { name: "永恆權杖", A: 6, skill: 2, S: 10, AP: -4, D: 3 } }, abilities: ["我的意志即法令", "復活協議"] },
      { id: "nc-ctan-nightbringer", name: "夜魘星神 Nightbringer", points: 315, img: "img/Necron/99120110088_NecronsCtanShardOfTheNightbringer01.jpg", stats: { M: 10, T: 11, Sv: 3, W: 16, Ld: 6, OC: 4 }, inv: 4, keywords: ["Monster", "C'tan"], weapons: { ranged: { name: "死亡凝視", range: 18, A: "D3", skill: 2, S: 12, AP: -3, D: "D6+3" }, melee: { name: "收割之鐮", A: 6, skill: 2, S: 14, AP: -4, D: "D6+2" } }, abilities: ["吸取生命: 近戰後敵軍D3致命傷", "不滅金屬: 傷害-1", "復活協議"] },
      { id: "nc-ctan-deceiver", name: "欺詐者星神 Deceiver", points: 285, img: "img/Necron/99810110003_TheDeceiverNEW01.jpg", stats: { M: 8, T: 11, Sv: 3, W: 16, Ld: 6, OC: 4 }, inv: 4, keywords: ["Monster", "C'tan"], weapons: { ranged: { name: "宇宙瘋狂", range: 18, A: 3, skill: 2, S: 10, AP: -3, D: 3 }, melee: { name: "金色爪", A: 6, skill: 2, S: 10, AP: -3, D: 3 } }, abilities: ["欺詐大師", "幻影", "不滅金屬: 傷害-1"] },
      { id: "nc-skorpekh-lord", name: "毀滅者領主 Skorpekh Lord", points: 90, img: "img/Necron/99120110051_SkorpekhDestroyersLead.jpg", stats: { M: 8, T: 7, Sv: 3, W: 7, Ld: 6, OC: 2 }, inv: 4, keywords: ["Infantry", "Character", "Destroyer"], weapons: { ranged: null, melee: { name: "超相位收割器", A: 6, skill: 2, S: 8, AP: -3, D: 2 } }, abilities: ["毀滅狂熱", "復活協議"] },
      { id: "nc-chronomancer", name: "時空術士 Chronomancer", points: 65, img: "img/Necron/99070110003_NECChronomancerLead.jpg", stats: { M: 5, T: 4, Sv: 4, W: 4, Ld: 6, OC: 1 }, inv: 4, keywords: ["Infantry", "Character", "Cryptek"], weapons: { ranged: null, melee: { name: "永恆之杖", A: 3, skill: 3, S: 5, AP: -2, D: 2 } }, abilities: ["時間操控: 5+無視傷害", "復活協議"] },
      { id: "nc-technomancer", name: "技術術士 Technomancer", points: 80, img: "img/Necron/99070110005_NECCryptekLead.jpg", stats: { M: 10, T: 4, Sv: 4, W: 4, Ld: 6, OC: 1 }, inv: null, keywords: ["Infantry", "Character", "Cryptek"], weapons: { ranged: { name: "光杖", range: 18, A: 2, skill: 3, S: 5, AP: -2, D: 1 }, melee: { name: "光杖", A: 2, skill: 3, S: 5, AP: -2, D: 1 } }, abilities: ["修復協議", "復活協議"] },
      { id: "nc-immortals", name: "不朽者×5 Immortals", points: 70, img: "img/Necron/99120110057_NECImmortalsLead.jpg", stats: { M: 5, T: 5, Sv: 3, W: 5, Ld: 7, OC: 2 }, inv: null, keywords: ["Infantry", "Battleline"], weapons: { ranged: { name: "高斯爆能槍", range: 24, A: 2, skill: 3, S: 5, AP: -1, D: 1 }, melee: { name: "機械爪", A: 2, skill: 3, S: 4, AP: 0, D: 1 } }, abilities: ["致命命中", "復活協議"] },
      { id: "nc-warriors", name: "戰士×10 Warriors", points: 90, img: "img/Necron/99120110052_NecronWarriorsLead.jpg", stats: { M: 5, T: 4, Sv: 4, W: 10, Ld: 7, OC: 2 }, inv: null, keywords: ["Infantry", "Battleline"], weapons: { ranged: { name: "高斯長笛", range: 24, A: 1, skill: 4, S: 4, AP: 0, D: 1 }, melee: { name: "機械爪", A: 1, skill: 4, S: 4, AP: 0, D: 1 } }, abilities: ["致命命中", "復活協議"] },
      { id: "nc-lychguard", name: "暗衛×5 Lychguard", points: 85, img: "img/Necron/99120110058_TriarchLychguardLead.jpg", stats: { M: 5, T: 5, Sv: 3, W: 10, Ld: 7, OC: 1 }, inv: 4, keywords: ["Infantry"], weapons: { ranged: null, melee: { name: "戰鐮", A: 2, skill: 3, S: 8, AP: -3, D: 2 } }, abilities: ["護衛協議", "復活協議"] },
      { id: "nc-skorpekh", name: "毀滅者×3 Skorpekh Destroyers", points: 90, img: "img/Necron/99120110051_SkorpekhDestroyersLead.jpg", stats: { M: 8, T: 6, Sv: 3, W: 9, Ld: 7, OC: 2 }, inv: null, keywords: ["Infantry", "Destroyer"], weapons: { ranged: null, melee: { name: "超相位武器", A: 4, skill: 3, S: 7, AP: -2, D: 2 } }, abilities: ["毀滅狂熱", "復活協議"] },
      { id: "nc-deathmarks", name: "死亡標記×5 Deathmarks", points: 60, img: "img/Necron/99120110057_NECImmortalsGroup2.jpg", stats: { M: 5, T: 5, Sv: 3, W: 5, Ld: 7, OC: 1 }, inv: null, keywords: ["Infantry"], weapons: { ranged: { name: "突觸瓦解槍", range: 36, A: 1, skill: 3, S: 5, AP: -2, D: 2 }, melee: { name: "機械爪", A: 1, skill: 4, S: 4, AP: 0, D: 1 } }, abilities: ["狙擊", "深入打擊"] },
      { id: "nc-flayed", name: "剝皮者×5 Flayed Ones", points: 60, img: "img/Necron/99120110056_NECFlayedOnesLead.jpg", stats: { M: 5, T: 4, Sv: 4, W: 5, Ld: 7, OC: 1 }, inv: null, keywords: ["Infantry"], weapons: { ranged: null, melee: { name: "剝皮爪", A: 4, skill: 3, S: 4, AP: -1, D: 1 } }, abilities: ["恐懼", "深入打擊"] },
      { id: "nc-triarch", name: "三皇禁衛×5 Triarch Praetorians", points: 90, img: "img/Necron/99120110058_NecronsTriarchPraetoriansLead.jpg", stats: { M: 10, T: 5, Sv: 3, W: 10, Ld: 7, OC: 1 }, inv: null, keywords: ["Infantry", "Fly"], weapons: { ranged: { name: "聖約之杖", range: 12, A: 2, skill: 3, S: 5, AP: -2, D: 1 }, melee: { name: "聖約之杖", A: 3, skill: 3, S: 5, AP: -2, D: 1 } }, abilities: ["飛行", "復活協議"] },
      { id: "nc-ophydian", name: "蛇形毀滅者×3 Ophydian Destroyers", points: 80, img: "img/Necron/99120110053_NECOphydianDestroyersLead.jpg", stats: { M: 10, T: 5, Sv: 4, W: 9, Ld: 7, OC: 2 }, inv: null, keywords: ["Infantry", "Destroyer"], weapons: { ranged: null, melee: { name: "超相位武器", A: 5, skill: 3, S: 6, AP: -2, D: 2 } }, abilities: ["深入打擊", "復活協議"] },
      { id: "nc-wraiths", name: "幽靈×3 Canoptek Wraiths", points: 110, img: "img/Necron/99120110060_NECCanoptekWraithsLead.jpg", stats: { M: 10, T: 6, Sv: 3, W: 12, Ld: 8, OC: 2 }, inv: 4, keywords: ["Beast", "Fly", "Canoptek"], weapons: { ranged: null, melee: { name: "惡毒爪", A: 4, skill: 3, S: 6, AP: -2, D: 2 } }, abilities: ["相位形態: 穿牆", "復活協議"] },
      { id: "nc-scarabs", name: "甲蟲群×3 Scarab Swarms", points: 40, img: "img/Necron/99120110061_CanoptekSpyderLead.jpg", stats: { M: 10, T: 2, Sv: 6, W: 12, Ld: 8, OC: 0 }, inv: null, keywords: ["Swarm", "Fly", "Canoptek"], weapons: { ranged: null, melee: { name: "餵食顎", A: 6, skill: 5, S: 2, AP: 0, D: 1 } }, abilities: ["自爆攻擊"] },
      { id: "nc-doomstalker", name: "末日行者 Doomstalker", points: 140, img: "img/Necron/99120110045_CanoptekDoomstalkerLead.jpg", stats: { M: 8, T: 8, Sv: 3, W: 12, Ld: 8, OC: 4 }, inv: 4, keywords: ["Vehicle", "Canoptek"], weapons: { ranged: { name: "末日爆能砲", range: 48, A: "D6+1", skill: 4, S: 14, AP: -3, D: 3 }, melee: { name: "機械肢", A: 3, skill: 4, S: 6, AP: 0, D: 1 } }, abilities: ["重火力模式"] },
      { id: "nc-doomsdayark", name: "末日方舟 Doomsday Ark", points: 200, img: "img/Necron/99120110063_NECDoomsdayArkLead.jpg", stats: { M: 10, T: 9, Sv: 3, W: 14, Ld: 7, OC: 5 }, inv: 4, keywords: ["Vehicle"], weapons: { ranged: { name: "末日砲", range: 48, A: "D6+2", skill: 4, S: 15, AP: -4, D: 4 }, melee: { name: "機械肢", A: 3, skill: 4, S: 6, AP: 0, D: 1 } }, abilities: ["重火力平台"] },
      { id: "nc-annihilation", name: "殲滅駁船 Annihilation Barge", points: 105, img: "img/Necron/99120110064_CatacombAnnihilationBargeLead.jpg", stats: { M: 10, T: 8, Sv: 3, W: 9, Ld: 7, OC: 3 }, inv: null, keywords: ["Vehicle"], weapons: { ranged: { name: "雙聯特斯拉毀滅者", range: 24, A: 8, skill: 4, S: 8, AP: 0, D: 2 }, melee: { name: "機械肢", A: 3, skill: 4, S: 6, AP: 0, D: 1 } }, abilities: ["持續命中2"] },
      { id: "nc-ghostark", name: "幽靈方舟 Ghost Ark", points: 115, img: "img/Necron/99120110063_NECGhostArkLead.jpg", stats: { M: 10, T: 9, Sv: 3, W: 14, Ld: 7, OC: 3 }, inv: null, keywords: ["Vehicle"], weapons: { ranged: { name: "高斯長笛陣列", range: 24, A: 20, skill: 4, S: 4, AP: 0, D: 1 }, melee: { name: "機械肢", A: 3, skill: 4, S: 6, AP: 0, D: 1 } }, abilities: ["運輸: 10模型", "修復協議"] },
      { id: "nc-monolith", name: "金字塔 Monolith", points: 400, img: "img/Necron/99120110043_NECMonolithLead.jpg", stats: { M: 8, T: 13, Sv: 2, W: 22, Ld: 7, OC: 8 }, inv: 4, keywords: ["Vehicle", "Titanic"], weapons: { ranged: { name: "粒子鞭", range: 24, A: 6, skill: 3, S: 12, AP: -3, D: 3 }, melee: { name: "巨型機械肢", A: 6, skill: 4, S: 10, AP: -2, D: 2 } }, abilities: ["傳送門", "不可摧毀"] },
      { id: "nc-lokhust", name: "重型毀滅者 Lokhust Heavy Destroyers", points: 55, img: "img/Necron/99120110044_LokhustHeavyDestroyerLead.jpg", stats: { M: 8, T: 6, Sv: 3, W: 4, Ld: 7, OC: 2 }, inv: null, keywords: ["Destroyer", "Mounted"], weapons: { ranged: { name: "高斯毀滅者", range: 36, A: 2, skill: 3, S: 10, AP: -3, D: 4 }, melee: { name: "機械爪", A: 2, skill: 4, S: 5, AP: 0, D: 1 } }, abilities: ["重火力", "復活協議"] },
      { id: "nc-triarchstalker", name: "三皇追獵者 Triarch Stalker", points: 110, img: "img/Necron/99120110058_NecronTriarchStalkerLead.jpg", stats: { M: 8, T: 8, Sv: 3, W: 12, Ld: 7, OC: 4 }, inv: null, keywords: ["Vehicle", "Walker"], weapons: { ranged: { name: "熱能射線", range: 18, A: 2, skill: 3, S: 12, AP: -4, D: "D6" }, melee: { name: "巨爪", A: 4, skill: 4, S: 8, AP: -2, D: 2 } }, abilities: ["目標鎖定", "復活協議"] },
      // ===== Faction Pack 新單位 =====
      { id: "nc-ctan-voiddragon", name: "虛空龍星神 Void Dragon", points: 295, img: "img/Necron/99120110054_CTanShardoftheVoidDragonLead.jpg", stats: { M: 10, T: 11, Sv: 3, W: 16, Ld: 6, OC: 4 }, inv: 4, keywords: ["Monster", "C'tan"], weapons: { ranged: { name: "虛空之矛", range: 12, A: "D3", skill: 2, S: 8, AP: -3, D: "D6+2", keywords: ["Anti-Vehicle 2+"] }, melee: { name: "虛空之矛", A: 5, skill: 2, S: 12, AP: -4, D: "D6+2" } }, abilities: ["物質吸收", "不滅金屬", "復活協議"] },
      { id: "nc-ctan-transcendent", name: "超越星神 Transcendent C'tan", points: 270, img: "img/Necron/99120110026_NecronTesseract01.jpg", stats: { M: 8, T: 11, Sv: 3, W: 16, Ld: 6, OC: 4 }, inv: 4, keywords: ["Monster", "C'tan"], weapons: { ranged: { name: "地震攻擊", range: 12, A: 6, skill: 2, S: 8, AP: -2, D: 2 }, melee: { name: "裂縫觸手", A: 8, skill: 2, S: 10, AP: -3, D: "D6" } }, abilities: ["跨維傳送", "不滅金屬", "復活協議"] },
      { id: "nc-macrocytes", name: "巨細胞群×5 Canoptek Macrocytes", points: 60, img: "img/Necron/99120110061_CanoptekSpyderLead.jpg", stats: { M: 8, T: 3, Sv: 4, W: 5, Ld: 8, OC: 1 }, inv: null, keywords: ["Beast", "Fly", "Canoptek"], weapons: { ranged: { name: "高斯解剖刀", range: 18, A: 1, skill: 4, S: 4, AP: -1, D: 1, keywords: ["Lethal Hits"] }, melee: { name: "爪牙", A: 2, skill: 4, S: 4, AP: -1, D: 1 } }, abilities: ["偵察8\"", "騷擾群: 3\"內敵軍-1命中", "復活協議"] },
      { id: "nc-tombcrawlers", name: "墓穴爬行者×2 Tomb Crawlers", points: 50, img: "img/Necron/99120110061_CanoptekSpyderLead.jpg", stats: { M: 5, T: 4, Sv: 3, W: 6, Ld: 8, OC: 1 }, inv: null, keywords: ["Beast", "Canoptek"], weapons: { ranged: { name: "雙聯高斯收割者", range: 12, A: 2, skill: 4, S: 4, AP: -1, D: 1 }, melee: { name: "爪牙", A: 4, skill: 4, S: 6, AP: -1, D: 1 } }, abilities: ["武器哨兵: 12\"內無視修正", "復活協議"] },
      { id: "nc-geomancer", name: "地術士 Geomancer", points: 70, img: "img/Necron/99070110005_NECCryptekLead.jpg", stats: { M: 8, T: 4, Sv: 4, W: 4, Ld: 6, OC: 1 }, inv: null, keywords: ["Infantry", "Character", "Cryptek"], weapons: { ranged: { name: "震顫戟-射線", range: 18, A: 2, skill: 4, S: 8, AP: -2, D: 2, keywords: ["Melta 2"] }, melee: { name: "震顫戟", A: 2, skill: 4, S: 8, AP: -2, D: 2 } }, abilities: ["地震波動: 敵軍-2移動和衝鋒", "領導者", "復活協議"] },
      { id: "nc-nekrosor", name: "死亡領主 Nekrosor Ammentar", points: 150, img: "img/Necron/99120110089_NecronsNekrosorAmmentar01.jpg", stats: { M: 10, T: 8, Sv: 3, W: 9, Ld: 6, OC: 3 }, inv: 4, keywords: ["Infantry", "Character", "Epic Hero", "Destroyer"], weapons: { ranged: { name: "毀滅瓦解器", range: 18, A: 4, skill: 2, S: 6, AP: -2, D: 1, keywords: ["Pistol", "Ignores Cover", "Sustained Hits 2"] }, melee: { name: "毀滅手套", A: 6, skill: 2, S: 10, AP: -3, D: 3 } }, abilities: ["毀滅狂熱光環: 6\"內持續命中1", "深入打擊", "先攻", "復活協議"] },
      // ===== 更多單位 =====
      { id: "nc-hexmark", name: "六標毀滅者 Hexmark Destroyer", points: 70, img: "img/Necron/99120110048_HexmarkDestroyerLead.jpg", stats: { M: 7, T: 5, Sv: 3, W: 4, Ld: 7, OC: 1 }, inv: null, keywords: ["Infantry", "Character", "Destroyer"], weapons: { ranged: { name: "磁軌手槍×6", range: 18, A: 6, skill: 2, S: 6, AP: -1, D: 1, keywords: ["Pistol", "Precision"] }, melee: { name: "機械爪", A: 3, skill: 3, S: 5, AP: 0, D: 1 } }, abilities: ["多目標協議: 可射擊6個不同目標", "深入打擊", "復活協議"] },
      { id: "nc-royalwarden", name: "皇家監察官 Royal Warden", points: 40, img: "img/Necron/99070110007_RoyalWarden1.jpg", stats: { M: 5, T: 5, Sv: 3, W: 4, Ld: 6, OC: 1 }, inv: null, keywords: ["Infantry", "Character"], weapons: { ranged: { name: "高斯爆能槍", range: 24, A: 2, skill: 3, S: 5, AP: -1, D: 1 }, melee: { name: "機械爪", A: 3, skill: 3, S: 5, AP: 0, D: 1 } }, abilities: ["撤退開火", "領導者", "復活協議"] },
      { id: "nc-psychomancer", name: "靈能術士 Psychomancer", points: 50, img: "img/Necron/99120110073_NECPsychomancerLead.jpg", stats: { M: 5, T: 4, Sv: 4, W: 4, Ld: 6, OC: 1 }, inv: 4, keywords: ["Infantry", "Character", "Cryptek"], weapons: { ranged: { name: "幻相投射器", range: 18, A: "D6", skill: 3, S: 4, AP: -1, D: 1, keywords: ["Torrent"] }, melee: { name: "幻影之刃", A: 3, skill: 3, S: 5, AP: -2, D: 1 } }, abilities: ["恐懼光環: 敵軍-1領導", "領導者", "復活協議"] },
      { id: "nc-tombblades", name: "墓穴刀鋒×3 Tomb Blades", points: 75, img: "img/Necron/99120110059_NECTombBladesLead.jpg", stats: { M: 12, T: 5, Sv: 3, W: 6, Ld: 7, OC: 2 }, inv: null, keywords: ["Mounted", "Fly"], weapons: { ranged: { name: "雙聯高斯爆能槍", range: 24, A: 4, skill: 3, S: 5, AP: -1, D: 1, keywords: ["Twin-linked"] }, melee: { name: "機械肢", A: 2, skill: 4, S: 4, AP: 0, D: 1 } }, abilities: ["偵察12\"", "復活協議"] },
      { id: "nc-doomscythe", name: "末日鐮刀 Doom Scythe", points: 200, img: "img/Necron/99120110065_DoomScytheLead.jpg", stats: { M: 20, T: 9, Sv: 3, W: 12, Ld: 7, OC: 0 }, inv: 4, keywords: ["Vehicle", "Aircraft", "Fly"], weapons: { ranged: { name: "死亡射線", range: 36, A: 1, skill: 3, S: 16, AP: -4, D: "D6+2", keywords: ["Blast"] }, melee: null }, abilities: ["致命末日D6", "懸停"] },
      { id: "nc-commandbarge", name: "指揮駁船 Catacomb Command Barge", points: 130, img: "img/Necron/99120110064_CatacombCommandBargeLead.jpg", stats: { M: 9, T: 8, Sv: 3, W: 9, Ld: 6, OC: 3 }, inv: 4, keywords: ["Vehicle", "Character"], weapons: { ranged: { name: "特斯拉砲", range: 24, A: 4, skill: 3, S: 7, AP: 0, D: 2, keywords: ["Sustained Hits 2"] }, melee: { name: "虛空之刃", A: 4, skill: 2, S: 8, AP: -3, D: 2 } }, abilities: ["我的意志即法令", "復活協議"] },
      { id: "nc-spyder", name: "坎諾匹克蜘蛛 Canoptek Spyder", points: 75, img: "img/Necron/99120110061_CanoptekSpyderLead.jpg", stats: { M: 8, T: 7, Sv: 3, W: 6, Ld: 8, OC: 2 }, inv: null, keywords: ["Monster", "Canoptek"], weapons: { ranged: { name: "粒子投射器", range: 12, A: "D6", skill: 4, S: 6, AP: 0, D: 1, keywords: ["Blast"] }, melee: { name: "自動修復爪", A: 4, skill: 4, S: 8, AP: -2, D: 2 } }, abilities: ["修復協議: 每回合治療D3", "製造甲蟲", "復活協議"] },
      { id: "nc-lokhust-destroyers", name: "洛庫斯特毀滅者×3 Lokhust Destroyers", points: 90, img: "img/Necron/99120110071_NecronDestroyerretoolGroup.jpg", stats: { M: 8, T: 6, Sv: 3, W: 9, Ld: 7, OC: 2 }, inv: null, keywords: ["Mounted", "Fly", "Destroyer"], weapons: { ranged: { name: "高斯加農砲", range: 24, A: 3, skill: 3, S: 6, AP: -1, D: 2 }, melee: { name: "機械爪", A: 2, skill: 4, S: 5, AP: 0, D: 1 } }, abilities: ["毀滅狂熱", "復活協議"] },
      // ===== 傳奇英雄 =====
      { id: "nc-imotekh", name: "伊莫泰克風暴領主 Imotekh", points: 100, img: "img/Necron/99120110078_NECImotekhTheStormlord01.jpg", stats: { M: 5, T: 5, Sv: 2, W: 6, Ld: 5, OC: 1 }, inv: 4, keywords: ["Infantry", "Character", "Epic Hero"], weapons: { ranged: { name: "風暴召喚", range: 24, A: 6, skill: 2, S: 6, AP: -2, D: 2, keywords: ["Devastating Wounds"] }, melee: { name: "戰鐮", A: 4, skill: 2, S: 8, AP: -3, D: 2 } }, abilities: ["風暴領主: 友軍6\"內+1命中", "我的意志即法令", "復活協議"] },
      { id: "nc-trazyn", name: "特拉津無盡者 Trazyn the Infinite", points: 75, img: "img/Necron/99800110009_TrazynTheInfiniteNEW01.jpg", stats: { M: 5, T: 5, Sv: 2, W: 6, Ld: 6, OC: 1 }, inv: 4, keywords: ["Infantry", "Character", "Epic Hero"], weapons: { ranged: null, melee: { name: "時間之矛", A: 4, skill: 2, S: 8, AP: -3, D: 3 } }, abilities: ["收藏家: 擊殺角色獲得1VP", "替身: 可將傷害轉移給友軍", "復活協議"] },
      { id: "nc-orikan", name: "奧里坎占卜者 Orikan the Diviner", points: 80, img: "img/Necron/99120110081_OrikanDiviner1.jpg", stats: { M: 5, T: 4, Sv: 4, W: 4, Ld: 6, OC: 1 }, inv: 4, keywords: ["Infantry", "Character", "Epic Hero", "Cryptek"], weapons: { ranged: { name: "時間刺", range: 18, A: 3, skill: 2, S: 6, AP: -2, D: 2 }, melee: { name: "時間之杖", A: 3, skill: 3, S: 5, AP: -2, D: "D3" } }, abilities: ["預言: 可重擲任何1次擲骰", "星神化身: 回合3+可升級數據", "復活協議"] },
      { id: "nc-szeras", name: "伊魯米諾·塞拉斯 Illuminor Szeras", points: 105, img: "img/Necron/99120110049_IlluminorSzerasLead.jpg", stats: { M: 7, T: 6, Sv: 3, W: 7, Ld: 6, OC: 2 }, inv: 4, keywords: ["Monster", "Character", "Epic Hero", "Cryptek"], weapons: { ranged: { name: "靈能打擊", range: 18, A: 2, skill: 2, S: 9, AP: -3, D: 3 }, melee: { name: "改造爪", A: 5, skill: 3, S: 6, AP: -2, D: 2 } }, abilities: ["機械生物增強: 每回合+1友軍數據", "領導者", "復活協議"] }
    ]
  },
  "tyranids": {
    name: "泰倫蟲族",
    color: "#a855f7",
    units: [
      { id: "ty-swarmlord", name: "蟲群霸主 Swarmlord", points: 220, img: "img/Tyranids/99120106060_SwarmlordLead.jpg", stats: { M: 8, T: 10, Sv: 2, W: 10, Ld: 7, OC: 3 }, inv: 4, keywords: ["Monster", "Character", "Epic Hero", "Synapse"], weapons: { ranged: { name: "突觸脈衝", range: 18, A: 3, skill: 2, S: 8, AP: -2, D: 3 }, melee: { name: "骨劍", A: 8, skill: 2, S: 9, AP: -2, D: 3 } }, abilities: ["蟲巢霸主", "Synapse"] },
      { id: "ty-hivetyrant", name: "蟲巢暴君 Hive Tyrant", points: 195, img: "img/Tyranids/99120106060_HiveTyrantLead.jpg", stats: { M: 8, T: 10, Sv: 2, W: 10, Ld: 7, OC: 3 }, inv: 4, keywords: ["Monster", "Character", "Synapse"], weapons: { ranged: { name: "重毒液砲", range: 36, A: 3, skill: 2, S: 9, AP: -2, D: 3 }, melee: { name: "巨型骨劍", A: 6, skill: 2, S: 9, AP: -2, D: 3 } }, abilities: ["Synapse", "暗影籠罩"] },
      { id: "ty-flyrant", name: "飛翼暴君 Winged Hive Tyrant", points: 170, img: "img/Tyranids/99120106060_WingedHiveTyrantLead.jpg", stats: { M: 12, T: 9, Sv: 2, W: 10, Ld: 7, OC: 3 }, inv: 4, keywords: ["Monster", "Character", "Fly", "Synapse"], weapons: { ranged: { name: "重毒液砲", range: 36, A: 3, skill: 2, S: 9, AP: -2, D: 3 }, melee: { name: "巨型骨劍", A: 6, skill: 2, S: 9, AP: -2, D: 3 } }, abilities: ["Synapse", "飛行"] },
      { id: "ty-broodlord", name: "育母蟲 Broodlord", points: 80, img: "img/Tyranids/99120106059_BroodlordLead.jpg", stats: { M: 8, T: 5, Sv: 4, W: 6, Ld: 7, OC: 1 }, inv: 4, keywords: ["Infantry", "Character", "Synapse"], weapons: { ranged: null, melee: { name: "育母蟲爪牙", A: 6, skill: 2, S: 6, AP: -2, D: 2 } }, abilities: ["Synapse", "催眠凝視"] },
      { id: "ty-neurotyrant", name: "神經暴君 Neurotyrant", points: 105, img: "img/Tyranids/99120106072_Neurolictor1.jpg", stats: { M: 6, T: 8, Sv: 4, W: 9, Ld: 7, OC: 3 }, inv: 4, keywords: ["Monster", "Character", "Synapse", "Fly"], weapons: { ranged: { name: "靈能尖嘯", range: 18, A: "D6", skill: 3, S: 5, AP: -1, D: 2 }, melee: { name: "尾刺", A: 3, skill: 4, S: 5, AP: 0, D: 1 } }, abilities: ["Synapse", "靈能放大"] },
      { id: "ty-tervigon", name: "繁殖獸 Tervigon", points: 160, img: "img/Tyranids/99120106066_Termagaunts2.jpg", stats: { M: 8, T: 11, Sv: 2, W: 16, Ld: 7, OC: 5 }, inv: null, keywords: ["Monster", "Character", "Synapse"], weapons: { ranged: { name: "刺針齊射", range: 24, A: 8, skill: 3, S: 5, AP: 0, D: 1 }, melee: { name: "巨爪", A: 4, skill: 4, S: 10, AP: -2, D: "D6" } }, abilities: ["孵化白蟻", "Synapse"] },
      { id: "ty-termagants", name: "白蟻×10 Termagants", points: 60, img: "img/Tyranids/99120106066_Termagaunts2.jpg", stats: { M: 6, T: 3, Sv: 5, W: 10, Ld: 8, OC: 2 }, inv: null, keywords: ["Infantry", "Battleline", "Endless Multitude"], weapons: { ranged: { name: "肉蟲槍", range: 18, A: 1, skill: 4, S: 5, AP: 0, D: 1 }, melee: { name: "甲殼爪牙", A: 1, skill: 4, S: 3, AP: 0, D: 1 } }, abilities: ["潛行恐懼"] },
      { id: "ty-hormagaunts", name: "刺蟲×10 Hormagaunts", points: 65, img: "img/Tyranids/99120106073_Hormagaunts2.jpg", stats: { M: 10, T: 3, Sv: 5, W: 10, Ld: 8, OC: 2 }, inv: null, keywords: ["Infantry", "Battleline", "Endless Multitude"], weapons: { ranged: null, melee: { name: "刺蟲爪", A: 3, skill: 4, S: 3, AP: -1, D: 1 } }, abilities: ["蜂湧跳躍: Advance後可衝鋒"] },
      { id: "ty-gargoyles", name: "翼蟲×10 Gargoyles", points: 85, img: "img/Tyranids/99120106052_TYRGargoylesLead.jpg", stats: { M: 12, T: 3, Sv: 6, W: 10, Ld: 8, OC: 2 }, inv: null, keywords: ["Infantry", "Fly", "Endless Multitude"], weapons: { ranged: { name: "肉蟲槍", range: 18, A: 1, skill: 4, S: 4, AP: 0, D: 1 }, melee: { name: "爪牙", A: 1, skill: 4, S: 3, AP: 0, D: 1 } }, abilities: ["飛行", "偵察"] },
      { id: "ty-genestealers", name: "基因竊取者×5 Genestealers", points: 75, img: "img/Tyranids/99120106068_Genestealers2.jpg", stats: { M: 8, T: 4, Sv: 5, W: 10, Ld: 7, OC: 1 }, inv: 5, keywords: ["Infantry"], weapons: { ranged: null, melee: { name: "基因竊取者爪牙", A: 4, skill: 2, S: 4, AP: -2, D: 1 } }, abilities: ["偵察8\"", "先鋒獵手"] },
      { id: "ty-warriors", name: "蟲族戰士×3 Warriors", points: 65, img: "img/Tyranids/99120106058_TYRWarriorsLeadPrime.jpg", stats: { M: 6, T: 5, Sv: 4, W: 9, Ld: 7, OC: 2 }, inv: null, keywords: ["Infantry", "Synapse"], weapons: { ranged: { name: "死亡噴射", range: 18, A: 2, skill: 4, S: 5, AP: -1, D: 1 }, melee: { name: "毒牙利爪", A: 4, skill: 3, S: 5, AP: -2, D: 1 } }, abilities: ["Synapse節點"] },
      { id: "ty-zoanthropes", name: "靈能獸×3 Zoanthropes", points: 100, img: "img/Tyranids/99120106057_NeurothropesLead.jpg", stats: { M: 5, T: 5, Sv: 5, W: 9, Ld: 7, OC: 1 }, inv: 4, keywords: ["Infantry", "Fly", "Synapse"], weapons: { ranged: { name: "扭曲爆炸", range: 24, A: "D3", skill: 3, S: 10, AP: -3, D: "D3+1" }, melee: { name: "爪牙", A: 3, skill: 4, S: 4, AP: 0, D: 1 } }, abilities: ["Synapse", "靈能護盾"] },
      { id: "ty-venomthropes", name: "毒氣獸×3 Venomthropes", points: 70, img: "img/Tyranids/99120106057_VenomthropesLead.jpg", stats: { M: 6, T: 5, Sv: 4, W: 9, Ld: 8, OC: 1 }, inv: null, keywords: ["Infantry", "Fly"], weapons: { ranged: null, melee: { name: "毒鞭", A: 6, skill: 3, S: 4, AP: 0, D: 1 } }, abilities: ["毒霧: 6\"內友軍-1被命中"] },
      { id: "ty-raveners", name: "掠奪者×5 Raveners", points: 125, img: "img/Tyranids/60010199057_LeviathanEXTRA15.jpg", stats: { M: 10, T: 5, Sv: 4, W: 15, Ld: 8, OC: 1 }, inv: null, keywords: ["Infantry", "Burrowers"], weapons: { ranged: null, melee: { name: "掠奪者爪牙", A: 3, skill: 3, S: 5, AP: -2, D: 2, keywords: ["Twin-linked"] } }, abilities: ["深入打擊", "地底撤退: 回合結束可返回戰略預備隊"] },
      { id: "ty-lictors", name: "伏擊者 Lictor", points: 60, img: "img/Tyranids/99120106069_Lictor1.jpg", stats: { M: 8, T: 6, Sv: 4, W: 6, Ld: 7, OC: 1 }, inv: null, keywords: ["Infantry"], weapons: { ranged: null, melee: { name: "伏擊者爪牙", A: 6, skill: 2, S: 7, AP: -2, D: 2 } }, abilities: ["深入打擊", "隱匿獵手"] },
      { id: "ty-carnifex", name: "屠殺獸 Carnifex", points: 90, img: "img/Tyranids/99120106031_CarnifexBrood01.jpg", stats: { M: 8, T: 9, Sv: 2, W: 8, Ld: 8, OC: 3 }, inv: null, keywords: ["Monster"], weapons: { ranged: { name: "生化砲", range: 12, A: "D3", skill: 4, S: 8, AP: -3, D: 2 }, melee: { name: "破碎爪", A: 4, skill: 4, S: 12, AP: -3, D: "D6+1" } }, abilities: ["不可阻擋: 衝鋒時+1傷害"] },
      { id: "ty-screamer", name: "尖嘯殺手 Screamer-Killer", points: 125, img: "img/Tyranids/99120106031_ScreamerKillerBrood01.jpg", stats: { M: 8, T: 9, Sv: 2, W: 10, Ld: 8, OC: 3 }, inv: null, keywords: ["Monster"], weapons: { ranged: { name: "生化等離子尖嘯", range: 18, A: "D6+3", skill: 4, S: 8, AP: -2, D: 2 }, melee: { name: "尖嘯殺手爪", A: 6, skill: 4, S: 10, AP: -3, D: 3 } }, abilities: ["恐懼尖嘯"] },
      { id: "ty-exocrine", name: "噴射獸 Exocrine", points: 140, img: "img/Tyranids/99120106056_ExocreneLead.jpg", stats: { M: 8, T: 10, Sv: 3, W: 14, Ld: 8, OC: 4 }, inv: null, keywords: ["Monster"], weapons: { ranged: { name: "生化等離子砲", range: 36, A: 6, skill: 3, S: 10, AP: -3, D: 3 }, melee: { name: "強力爪", A: 3, skill: 4, S: 8, AP: -2, D: 2 } }, abilities: ["重火力模式"] },
      { id: "ty-haruspex", name: "吞噬獸 Haruspex", points: 125, img: "img/Tyranids/99120106026_Haruspex01.jpg", stats: { M: 8, T: 11, Sv: 3, W: 14, Ld: 8, OC: 4 }, inv: null, keywords: ["Monster"], weapons: { ranged: null, melee: { name: "吞噬之顎", A: 8, skill: 3, S: 12, AP: -3, D: 3 } }, abilities: ["吞噬恢復: 造成傷害恢復HP"] },
      { id: "ty-maleceptor", name: "惡意獸 Maleceptor", points: 170, img: "img/Tyranids/99120106033_Maleceptor01.jpg", stats: { M: 8, T: 11, Sv: 3, W: 14, Ld: 7, OC: 4 }, inv: 4, keywords: ["Monster", "Synapse"], weapons: { ranged: { name: "靈能過載", range: 18, A: "D6", skill: 3, S: 9, AP: -2, D: 3 }, melee: { name: "巨爪", A: 4, skill: 4, S: 9, AP: -2, D: 3 } }, abilities: ["Synapse", "靈能壓制"] },
      { id: "ty-trygon", name: "穿地獸 Trygon", points: 140, img: "img/Tyranids/99120106019_TrygonNEW01.jpg", stats: { M: 10, T: 10, Sv: 3, W: 14, Ld: 8, OC: 4 }, inv: null, keywords: ["Monster"], weapons: { ranged: { name: "生電脈衝", range: 12, A: 6, skill: 4, S: 5, AP: 0, D: 1 }, melee: { name: "穿地獸爪", A: 6, skill: 3, S: 10, AP: -2, D: 3 } }, abilities: ["深入打擊", "地底通道"] },
      { id: "ty-mawloc", name: "巨口獸 Mawloc", points: 135, img: "img/Tyranids/99120106019_MawlocNEW01.jpg", stats: { M: 10, T: 10, Sv: 3, W: 14, Ld: 8, OC: 4 }, inv: null, keywords: ["Monster"], weapons: { ranged: null, melee: { name: "巨口之顎", A: 12, skill: 4, S: 6, AP: -1, D: 1 } }, abilities: ["恐怖突現: 深入打擊時造成致命傷害"] },
      { id: "ty-tyrannofex", name: "暴君獸 Tyrannofex", points: 200, img: "img/Tyranids/99120106054_TYRTyrannofexLead.jpg", stats: { M: 9, T: 12, Sv: 2, W: 16, Ld: 8, OC: 5 }, inv: null, keywords: ["Monster"], weapons: { ranged: { name: "破裂砲", range: 48, A: 2, skill: 4, S: 18, AP: -4, D: "2D6" }, melee: { name: "強力爪", A: 4, skill: 4, S: 10, AP: -2, D: 3 } }, abilities: ["重火力平台"] },
      { id: "ty-nornemissary", name: "古老使者 Norn Emissary", points: 260, img: "img/Tyranids/99120106064_NornEmissary1.jpg", stats: { M: 10, T: 11, Sv: 2, W: 16, Ld: 7, OC: 5 }, inv: 4, keywords: ["Monster", "Character", "Synapse"], weapons: { ranged: { name: "靈能觸鬚", range: 18, A: "D6+1", skill: 2, S: 8, AP: -2, D: 2 }, melee: { name: "巨爪", A: 6, skill: 2, S: 12, AP: -3, D: "D6+2" } }, abilities: ["Synapse", "古老智慧"] },
      { id: "ty-hive-guard", name: "蟲巢守衛×3 Hive Guard", points: 90, img: "img/Tyranids/99120106055_TYRHiveGuardLead.jpg", stats: { M: 6, T: 7, Sv: 3, W: 12, Ld: 8, OC: 1 }, inv: null, keywords: ["Infantry"], weapons: { ranged: { name: "穿刺砲", range: 36, A: 2, skill: 3, S: 9, AP: -2, D: 3 }, melee: { name: "爪牙", A: 3, skill: 4, S: 5, AP: 0, D: 1 } }, abilities: ["無需視線"] },
      { id: "ty-tyrantguard", name: "暴君護衛×3 Tyrant Guard", points: 80, img: "img/Tyranids/60010199057_LeviathanEXTRA16.jpg", stats: { M: 6, T: 8, Sv: 3, W: 12, Ld: 8, OC: 1 }, inv: null, keywords: ["Infantry"], weapons: { ranged: null, melee: { name: "裂爪", A: 4, skill: 3, S: 7, AP: -2, D: 2 } }, abilities: ["護衛: 可為暴君承受傷害"] },
      { id: "ty-harpy", name: "鳥妖 Harpy", points: 215, img: "img/Tyranids/99120106024_Harpies01.jpg", stats: { M: 20, T: 9, Sv: 3, W: 12, Ld: 8, OC: 0 }, inv: null, keywords: ["Monster", "Fly", "Aircraft"], weapons: { ranged: { name: "雙聯絞殺砲", range: 36, A: 8, skill: 4, S: 7, AP: -1, D: 2 }, melee: { name: "爪牙", A: 4, skill: 4, S: 6, AP: -1, D: 2 } }, abilities: ["飛行器", "投彈"] },
      // ===== Faction Pack 新單位 =====
      { id: "ty-hyperraveners", name: "超適應掠奪者 Hyperadapted Raveners", points: 165, img: "img/Tyranids/60010199057_LeviathanEXTRA15.jpg", stats: { M: 10, T: 5, Sv: 4, W: 15, Ld: 7, OC: 1 }, inv: null, keywords: ["Infantry", "Burrowers", "Synapse", "Leader"], weapons: { ranged: { name: "毒液彈", range: 12, A: "D6+3", skill: 0, S: 6, AP: -1, D: 1, keywords: ["Assault", "Ignores Cover", "Torrent"] }, melee: { name: "掠奪者重爪", A: 6, skill: 3, S: 5, AP: -2, D: 2, keywords: ["Anti-Monster 5+", "Anti-Vehicle 5+", "Twin-linked"] } }, abilities: ["深入打擊", "領導者", "持續命中1", "超感官"] },
      { id: "ty-harridan", name: "翼魔 Harridan", points: 550, img: "img/Tyranids/99120106024_Harpies01.jpg", stats: { M: 20, T: 10, Sv: 3, W: 30, Ld: 8, OC: 0 }, inv: null, keywords: ["Monster", "Titanic", "Fly", "Aircraft", "Transport"], weapons: { ranged: { name: "恐怖生化砲", range: 48, A: "D6+6", skill: 3, S: 10, AP: -3, D: 3, keywords: ["Blast"] }, melee: { name: "巨型鐮爪", A: 6, skill: 3, S: 14, AP: -2, D: "D6" } }, abilities: ["致命末日2D6", "懸停", "狂暴代謝: +1致傷但受D3傷害", "運輸: 20翼蟲"] },
      { id: "ty-hierophant", name: "祭司獸 Hierophant", points: 700, img: "img/Tyranids/99120106054_TYRTyrannofexLead.jpg", stats: { M: 12, T: 14, Sv: 2, W: 30, Ld: 8, OC: 12 }, inv: 5, keywords: ["Monster", "Titanic", "Towering", "Transport"], weapons: { ranged: { name: "恐怖生化砲×2", range: 48, A: "2D6+12", skill: 3, S: 10, AP: -3, D: 3, keywords: ["Blast"] }, melee: { name: "巨型鐮爪", A: 8, skill: 3, S: 20, AP: -2, D: "D6+1" } }, abilities: ["致命末日2D6", "Synapse", "巨獸: +1命中vs戰慄單位", "踐踏前進: 可越過4\"以下模型"] },
      // ===== 額外可用圖片的單位 =====
      { id: "ty-deathleaper", name: "死亡潛行者 Deathleaper", points: 80, img: "img/Tyranids/99120106067_Deathleaper1.jpg", stats: { M: 8, T: 6, Sv: 4, W: 7, Ld: 7, OC: 1 }, inv: 4, keywords: ["Infantry", "Character", "Epic Hero"], weapons: { ranged: null, melee: { name: "死神爪牙", A: 6, skill: 2, S: 8, AP: -2, D: 3 } }, abilities: ["深入打擊", "隱匿大師", "恐懼之源"] },
      { id: "ty-psychophage", name: "靈噬獸 Psychophage", points: 125, img: "img/Tyranids/99120106074_Psychophage1.jpg", stats: { M: 8, T: 9, Sv: 3, W: 10, Ld: 8, OC: 3 }, inv: null, keywords: ["Monster"], weapons: { ranged: { name: "靈能爆發", range: 12, A: "D6", skill: 4, S: 6, AP: -1, D: 2 }, melee: { name: "啃噬利爪", A: 5, skill: 3, S: 10, AP: -2, D: 3 } }, abilities: ["靈噬: 造成傷害恢復HP"] },
      { id: "ty-biovore", name: "生化投射獸 Biovore", points: 50, img: "img/Tyranids/99120106065_Biovore1.jpg", stats: { M: 5, T: 5, Sv: 4, W: 4, Ld: 8, OC: 1 }, inv: null, keywords: ["Infantry"], weapons: { ranged: { name: "孢子地雷", range: 48, A: 1, skill: 4, S: 5, AP: -1, D: 2, keywords: ["Blast", "Indirect Fire"] }, melee: { name: "爪牙", A: 2, skill: 4, S: 4, AP: 0, D: 1 } }, abilities: ["間接火力"] },
      { id: "ty-pyrovore", name: "熔岩蟲 Pyrovore", points: 35, img: "img/Tyranids/99120106065_Pyrovore1.jpg", stats: { M: 5, T: 6, Sv: 3, W: 5, Ld: 8, OC: 1 }, inv: null, keywords: ["Infantry"], weapons: { ranged: { name: "酸液噴射", range: 12, A: "D6", skill: 0, S: 5, AP: -1, D: 1, keywords: ["Torrent", "Ignores Cover"] }, melee: { name: "爪牙", A: 3, skill: 4, S: 5, AP: 0, D: 1 } }, abilities: ["爆炸死亡"] },
      { id: "ty-prime", name: "蟲族戰士首領 Tyranid Prime", points: 75, img: "img/Tyranids/99120106075_Prime1.jpg", stats: { M: 6, T: 5, Sv: 4, W: 6, Ld: 7, OC: 1 }, inv: null, keywords: ["Infantry", "Character", "Synapse"], weapons: { ranged: { name: "死亡噴射", range: 18, A: 3, skill: 3, S: 5, AP: -1, D: 1 }, melee: { name: "骨劍鞭爪", A: 5, skill: 2, S: 6, AP: -2, D: 2 } }, abilities: ["Synapse", "領導者", "戰士群加成"] },
      { id: "ty-parasite", name: "莫特雷斯寄生蟲 Parasite of Mortrex", points: 90, img: "img/Tyranids/99120106050_TYRParasiteofMortrexLead.jpg", stats: { M: 12, T: 5, Sv: 4, W: 5, Ld: 7, OC: 1 }, inv: null, keywords: ["Infantry", "Character", "Fly", "Epic Hero"], weapons: { ranged: null, melee: { name: "寄生爪牙", A: 6, skill: 2, S: 5, AP: -1, D: 2 } }, abilities: ["飛行", "寄生產卵: 擊殺敵人生成蟲群"] },
      { id: "ty-hivecrone", name: "蟲巢女妖 Hive Crone", points: 200, img: "img/Tyranids/99120106024_HiveCrone01.jpg", stats: { M: 20, T: 9, Sv: 3, W: 12, Ld: 8, OC: 0 }, inv: null, keywords: ["Monster", "Fly", "Aircraft"], weapons: { ranged: { name: "觸手鞭", range: 18, A: 4, skill: 3, S: 7, AP: -2, D: 2 }, melee: { name: "巨爪", A: 5, skill: 3, S: 8, AP: -2, D: 3 } }, abilities: ["飛行器", "酸液噴射"] },
      { id: "ty-nornassimilator", name: "古老同化者 Norn Assimilator", points: 290, img: "img/Tyranids/99120106064_NornAssimilator1.jpg", stats: { M: 10, T: 11, Sv: 2, W: 18, Ld: 7, OC: 5 }, inv: 4, keywords: ["Monster", "Character", "Synapse"], weapons: { ranged: { name: "毒素噴射", range: 12, A: "2D6", skill: 0, S: 7, AP: -2, D: 2, keywords: ["Torrent"] }, melee: { name: "同化巨爪", A: 8, skill: 2, S: 14, AP: -3, D: "D6+2" } }, abilities: ["Synapse", "同化恢復"] }
    ]
  },
  "chaos": {
    name: "混沌戰士",
    color: "#dc2626",
    units: [
      {
        id: "ch-lord",
        name: "混沌領主 Chaos Lord",
        points: 75,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/0/04/ChaosLord8th.jpg/180px-ChaosLord8th.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 5, Ld: 6, OC: 1 },
        inv: 4,
        keywords: ["Infantry", "Character", "Chaos"],
        weapons: {
          ranged: { name: "等離子槍 Plasma Pistol", range: 12, A: 1, skill: 2, S: 7, AP: -2, D: 2 },
          melee: { name: "惡魔之劍 Daemon Blade", A: 6, skill: 2, S: 6, AP: -2, D: 2 }
        },
        abilities: ["黑暗光環: 6\"內重擲致傷1", "Let the Galaxy Burn"]
      },
      {
        id: "ch-legionaries",
        name: "軍團戰士×5 Legionaries",
        points: 90,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/1/1c/ChaosLegionariesMini10th.jpg/250px-ChaosLegionariesMini10th.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 10, Ld: 6, OC: 2 },
        inv: null,
        keywords: ["Infantry", "Battleline", "Chaos"],
        weapons: {
          ranged: { name: "混沌爆矢槍 Boltgun", range: 24, A: 2, skill: 3, S: 4, AP: 0, D: 1 },
          melee: { name: "混沌近戰武器", A: 3, skill: 3, S: 4, AP: 0, D: 1 }
        },
        abilities: ["仇恨誓言: +1命中vs Imperium"]
      },
      {
        id: "ch-havocs",
        name: "浩劫戰士×5 Havocs",
        points: 140,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/e/e9/Havocs8thED.jpg/200px-Havocs8thED.jpg",
        stats: { M: 5, T: 4, Sv: 3, W: 10, Ld: 6, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Chaos"],
        weapons: {
          ranged: { name: "熔岩槍 Lascannon", range: 48, A: 1, skill: 3, S: 12, AP: -3, D: "D6+1" },
          melee: { name: "近戰武器", A: 2, skill: 3, S: 4, AP: 0, D: 1 }
        },
        abilities: ["壓制火力: 目標-2移動"]
      },
      {
        id: "ch-berzerkers",
        name: "乞血狂戰士×5 Khorne Berzerkers",
        points: 90,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/5/5a/Berzerkers8thMini.jpg/220px-Berzerkers8thMini.jpg",
        stats: { M: 6, T: 4, Sv: 3, W: 10, Ld: 6, OC: 2 },
        inv: null,
        keywords: ["Infantry", "Chaos", "Khorne"],
        weapons: {
          ranged: { name: "爆矢手槍", range: 12, A: 1, skill: 3, S: 4, AP: 0, D: 1 },
          melee: { name: "鏈斧 Chainaxe", A: 4, skill: 3, S: 5, AP: -1, D: 1 }
        },
        abilities: ["血之憤怒: Fight階段可攻擊兩次"]
      },
      {
        id: "ch-helbrute",
        name: "地獄蠻兵 Helbrute",
        points: 130,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/0/00/Hellbrute7th.jpg/200px-Hellbrute7th.jpg",
        stats: { M: 6, T: 9, Sv: 2, W: 8, Ld: 6, OC: 3 },
        inv: null,
        keywords: ["Vehicle", "Walker"],
        weapons: {
          ranged: { name: "多熔岩砲 Multi-melta", range: 18, A: 2, skill: 3, S: 9, AP: -4, D: "D6", keywords: ["Melta 2"] },
          melee: { name: "動力鉗 Power Scourge", A: 5, skill: 3, S: 12, AP: -2, D: 3 }
        },
        abilities: ["狂暴: 受傷後+1攻擊", "Helbrute Frenzy"]
      }
    ]
  },
  "orks": {
    name: "歐克蠻人",
    color: "#84cc16",
    units: [
      {
        id: "or-warboss",
        name: "戰爭頭頭 Warboss",
        points: 70,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103105_WarbossinMegaArmourLead.jpg",
        stats: { M: 6, T: 5, Sv: 4, W: 7, Ld: 6, OC: 1 },
        inv: 5,
        keywords: ["Infantry", "Character", "Ork"],
        weapons: {
          ranged: { name: "大爆槍 Kombi-weapon", range: 24, A: 1, skill: 5, S: 4, AP: 0, D: 1 },
          melee: { name: "動力爪 Power Klaw", A: 4, skill: 3, S: 10, AP: -2, D: 2 }
        },
        abilities: ["WAAAGH!: 全軍衝鋒+1", "Might is Right"]
      },
      {
        id: "or-boyz",
        name: "歐克男孩×10 Boyz",
        points: 80,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103106_OrkBoyzLead.jpg",
        stats: { M: 6, T: 5, Sv: 5, W: 11, Ld: 7, OC: 2 },
        inv: null,
        keywords: ["Infantry", "Battleline", "Ork"],
        weapons: {
          ranged: { name: "粗糙槍 Shoota", range: 18, A: 2, skill: 5, S: 4, AP: 0, D: 1 },
          melee: { name: "砍刀 Choppa", A: 3, skill: 3, S: 4, AP: -1, D: 1 }
        },
        abilities: ["人多力量大: 10+模型時+1攻擊"]
      },
      {
        id: "or-nobz",
        name: "頭頭×5 Nobz",
        points: 100,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103055_Nobz01.jpg",
        stats: { M: 6, T: 5, Sv: 4, W: 10, Ld: 7, OC: 2 },
        inv: null,
        keywords: ["Infantry", "Ork"],
        weapons: {
          ranged: { name: "爆槍 Slugga", range: 12, A: 1, skill: 5, S: 4, AP: 0, D: 1 },
          melee: { name: "大砍刀 Big Choppa", A: 3, skill: 3, S: 7, AP: -1, D: 2 }
        },
        abilities: ["Da Boss is Watching"]
      },
      {
        id: "or-meganobz",
        name: "巨甲頭頭×3 Meganobz",
        points: 100,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103089_OrkMeganobzAlt.jpg",
        stats: { M: 5, T: 6, Sv: 2, W: 9, Ld: 7, OC: 2 },
        inv: null,
        keywords: ["Infantry", "Ork", "Mega Armour"],
        weapons: {
          ranged: { name: "雙連爆槍 Kombi-rokkit", range: 24, A: "D3", skill: 5, S: 9, AP: -2, D: 3 },
          melee: { name: "動力爪 Power Klaw", A: 3, skill: 3, S: 9, AP: -2, D: 2 }
        },
        abilities: ["Krumpin' Time"]
      },
      {
        id: "or-deffkoptas",
        name: "死亡直升機×3 Deffkoptas",
        points: 110,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103107_DeffkoptasLead.jpg",
        stats: { M: 14, T: 6, Sv: 4, W: 9, Ld: 7, OC: 2 },
        inv: null,
        keywords: ["Fly", "Vehicle", "Ork"],
        weapons: {
          ranged: { name: "火箭 Rokkits", range: 24, A: 3, skill: 5, S: 9, AP: -2, D: 3 },
          melee: { name: "旋轉刀片 Spinnin' Blades", A: 6, skill: 3, S: 5, AP: -1, D: 1 }
        },
        abilities: ["Deep Strike"]
      },
      // ===== 新增 Orks 單位 =====
      {
        id: "or-ghazghkull",
        name: "加茲古爾 Ghazghkull Thraka",
        points: 235,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103079_ThrakaLead.jpg",
        stats: { M: 5, T: 6, Sv: 2, W: 10, Ld: 6, OC: 4 },
        inv: 4,
        keywords: ["Infantry", "Character", "Epic Hero", "Ork"],
        weapons: {
          ranged: { name: "莫克之吼 Mork's Roar", range: 36, A: 12, skill: 5, S: 5, AP: 0, D: 1, keywords: ["Rapid Fire 4"] },
          melee: { name: "戈克之爪 Gork's Klaw", A: 6, skill: 2, S: 14, AP: -3, D: 4 }
        },
        abilities: ["預言家: 領導單位近戰命中/致傷+1", "WAAAGH旗幟: 12\"內友軍近戰獲得致命命中", "至高統帥"]
      },
      {
        id: "or-bigmek",
        name: "大機師 Big Mek",
        points: 55,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103120_ORKBigMek01.jpg",
        stats: { M: 6, T: 5, Sv: 4, W: 5, Ld: 7, OC: 1 },
        inv: 5,
        keywords: ["Infantry", "Character", "Ork", "Mek"],
        weapons: {
          ranged: { name: "震盪攻擊槍 Shokk Attack Gun", range: 60, A: "D6", skill: 5, S: 9, AP: -4, D: "D6", keywords: ["Blast", "Hazardous"] },
          melee: { name: "動力爪 Power Klaw", A: 3, skill: 4, S: 9, AP: -2, D: 2 }
        },
        abilities: ["領袖", "修復: 每回合恢復D3傷口給載具"]
      },
      {
        id: "or-painboy",
        name: "疼痛男孩 Painboy",
        points: 70,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99070103003_Painboy01.jpg",
        stats: { M: 6, T: 5, Sv: 4, W: 4, Ld: 7, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Character", "Ork"],
        weapons: {
          ranged: null,
          melee: { name: "手術工具 'Urty Syringe", A: 4, skill: 4, S: 4, AP: -1, D: 2 }
        },
        abilities: ["領袖: 領導單位獲得5+無懼死亡", "緊急手術: 恢復D3模型"]
      },
      {
        id: "or-weirdboy",
        name: "怪異男孩 Weirdboy",
        points: 55,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99800103004_WeirdboyNEW01.jpg",
        stats: { M: 6, T: 5, Sv: 5, W: 4, Ld: 7, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Character", "Ork", "Psyker"],
        weapons: {
          ranged: { name: "WAAAGH能量 Da Jump", range: 24, A: "D6", skill: 4, S: 8, AP: -2, D: "D3", keywords: ["Hazardous"] },
          melee: { name: "怪異之杖 Weirdboy Staff", A: 3, skill: 4, S: 8, AP: -1, D: "D3" }
        },
        abilities: ["領袖", "傳送: 可傳送一個單位9\"外"]
      },
      {
        id: "or-kommandos",
        name: "突擊隊×10 Kommandos",
        points: 110,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/8/88/KommandosMini10th.jpg/200px-KommandosMini10th.jpg",
        stats: { M: 6, T: 5, Sv: 5, W: 11, Ld: 7, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Ork"],
        weapons: {
          ranged: { name: "爆槍 Slugga", range: 12, A: 1, skill: 5, S: 4, AP: 0, D: 1 },
          melee: { name: "砍刀 Choppa", A: 3, skill: 3, S: 4, AP: -1, D: 1 }
        },
        abilities: ["滲透者: 可在敵人9\"外部署", "隱匿"]
      },
      {
        id: "or-stormboyz",
        name: "風暴男孩×5 Stormboyz",
        points: 65,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103056_Stormboyz01.jpg",
        stats: { M: 12, T: 5, Sv: 5, W: 6, Ld: 7, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Fly", "Jump Pack", "Ork"],
        weapons: {
          ranged: { name: "爆槍 Slugga", range: 12, A: 1, skill: 5, S: 4, AP: 0, D: 1 },
          melee: { name: "砍刀 Choppa", A: 3, skill: 3, S: 4, AP: -1, D: 1 }
        },
        abilities: ["深入打擊", "飛行"]
      },
      {
        id: "or-tankbustas",
        name: "坦克剋星×5 Tankbustas",
        points: 90,
        img: "https://wh40k.lexicanum.com/mediawiki/images/thumb/5/5f/TankBustas.jpg/200px-TankBustas.jpg",
        stats: { M: 6, T: 5, Sv: 5, W: 6, Ld: 7, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Ork"],
        weapons: {
          ranged: { name: "火箭發射器 Rokkit Launcha", range: 24, A: 1, skill: 5, S: 9, AP: -2, D: 3 },
          melee: { name: "近戰武器", A: 2, skill: 4, S: 4, AP: 0, D: 1 }
        },
        abilities: ["反載具: 對載具命中+1"]
      },
      {
        id: "or-lootas",
        name: "搶劫者×5 Lootas",
        points: 70,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103054_OrkLootas01.jpg",
        stats: { M: 6, T: 5, Sv: 5, W: 6, Ld: 7, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Ork"],
        weapons: {
          ranged: { name: "毀滅槍 Deffgun", range: 48, A: "D3", skill: 5, S: 7, AP: -1, D: 2, keywords: ["Heavy"] },
          melee: { name: "近戰武器", A: 2, skill: 4, S: 4, AP: 0, D: 1 }
        },
        abilities: ["重火力"]
      },
      {
        id: "or-warbikers",
        name: "戰爭摩托車×3 Warbikers",
        points: 65,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103057_WarbikerMob01.jpg",
        stats: { M: 12, T: 6, Sv: 4, W: 9, Ld: 7, OC: 2 },
        inv: 6,
        keywords: ["Mounted", "Ork", "Speed Freeks"],
        weapons: {
          ranged: { name: "雙連粗糙槍 Dakkaguns", range: 18, A: 6, skill: 5, S: 5, AP: 0, D: 1, keywords: ["Rapid Fire 2", "Twin-linked"] },
          melee: { name: "近戰武器", A: 2, skill: 4, S: 5, AP: 0, D: 1 }
        },
        abilities: ["急行射擊"]
      },
      {
        id: "or-battlewagon",
        name: "戰爭卡車 Battlewagon",
        points: 160,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103084_BattlewagonLead.jpg",
        stats: { M: 10, T: 10, Sv: 3, W: 16, Ld: 7, OC: 5 },
        inv: 6,
        keywords: ["Vehicle", "Transport", "Ork"],
        weapons: {
          ranged: { name: "加農砲 Kannon", range: 36, A: "D6+3", skill: 5, S: 6, AP: 0, D: 1 },
          melee: { name: "毀滅滾輪 Deff Rolla", A: 6, skill: 3, S: 9, AP: -1, D: 2 }
        },
        abilities: ["運輸: 22步兵", "射擊艙口11", "致命末日D6"]
      },
      {
        id: "or-trukk",
        name: "卡車 Trukk",
        points: 70,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103012_TrukkNEW01.jpg",
        stats: { M: 12, T: 8, Sv: 4, W: 10, Ld: 7, OC: 2 },
        inv: 6,
        keywords: ["Vehicle", "Transport", "Dedicated Transport", "Ork"],
        weapons: {
          ranged: { name: "大射手 Big Shoota", range: 36, A: 3, skill: 5, S: 5, AP: 0, D: 1, keywords: ["Rapid Fire 2"] },
          melee: { name: "尖刺輪 Spiked Wheels", A: 3, skill: 4, S: 6, AP: 0, D: 1 }
        },
        abilities: ["運輸: 12步兵", "格雷琴修復: 每回合恢復1傷口", "射擊艙口12"]
      },
      {
        id: "or-gorkanaut",
        name: "戈克機甲 Gorkanaut",
        points: 265,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103034_Gorkanaut01.jpg",
        stats: { M: 8, T: 12, Sv: 3, W: 20, Ld: 7, OC: 8 },
        inv: 6,
        keywords: ["Vehicle", "Titanic", "Towering", "Walker", "Transport", "Ork"],
        weapons: {
          ranged: { name: "毀滅巨炮 Deffstorm Mega-shoota", range: 36, A: 20, skill: 5, S: 6, AP: -1, D: 1, keywords: ["Rapid Fire 10"] },
          melee: { name: "戈克之爪 Klaw of Gork", A: 5, skill: 3, S: 18, AP: -3, D: 6 }
        },
        abilities: ["運輸: 12步兵", "致命末日D6", "大而壯: WAAAGH時近戰命中+1"]
      },
      {
        id: "or-morkanaut",
        name: "莫克機甲 Morkanaut",
        points: 280,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103034_Morkanaut01.jpg",
        stats: { M: 8, T: 12, Sv: 3, W: 20, Ld: 7, OC: 8 },
        inv: 5,
        keywords: ["Vehicle", "Titanic", "Towering", "Walker", "Transport", "Ork"],
        weapons: {
          ranged: { name: "超級熔毀加農砲 Kustom Mega-zappa", range: 36, A: "D6+3", skill: 5, S: 10, AP: -2, D: "D6", keywords: ["Blast", "Hazardous"] },
          melee: { name: "莫克之爪 Klaw of Mork", A: 4, skill: 3, S: 18, AP: -3, D: 6 }
        },
        abilities: ["運輸: 12步兵", "致命末日D6", "大而射: WAAAGH時射擊命中+1"]
      },
      {
        id: "or-deffdread",
        name: "毀滅無畏機甲 Deff Dread",
        points: 85,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103023_DeffDreadNEW01.jpg",
        stats: { M: 8, T: 9, Sv: 3, W: 8, Ld: 7, OC: 3 },
        inv: null,
        keywords: ["Vehicle", "Walker", "Ork"],
        weapons: {
          ranged: { name: "大射手×2 Big Shootas", range: 36, A: 6, skill: 5, S: 5, AP: 0, D: 1, keywords: ["Rapid Fire 2"] },
          melee: { name: "毀滅之爪 Dread Klaw", A: 4, skill: 3, S: 10, AP: -2, D: 3 }
        },
        abilities: ["致命末日D3"]
      },
      {
        id: "or-killakans",
        name: "殺戮罐頭×3 Killa Kans",
        points: 120,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103024_KillaKansNEW01.jpg",
        stats: { M: 6, T: 7, Sv: 4, W: 15, Ld: 8, OC: 4 },
        inv: null,
        keywords: ["Vehicle", "Walker", "Ork", "Gretchin"],
        weapons: {
          ranged: { name: "火箭發射器 Rokkit Launcha", range: 24, A: 3, skill: 4, S: 9, AP: -2, D: 3 },
          melee: { name: "殺戮鋸 Kan Klaw", A: 3, skill: 4, S: 8, AP: -2, D: 2 }
        },
        abilities: ["致命末日D3"]
      },
      {
        id: "or-beastsnagga-boyz",
        name: "獸襲男孩×10 Beast Snagga Boyz",
        points: 105,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103073_ORKSnaggaBoyzLead.jpg",
        stats: { M: 6, T: 5, Sv: 5, W: 11, Ld: 7, OC: 2 },
        inv: 6,
        keywords: ["Infantry", "Battleline", "Ork", "Beast Snagga"],
        weapons: {
          ranged: { name: "粗糙槍 Shoota", range: 18, A: 2, skill: 5, S: 4, AP: 0, D: 1 },
          melee: { name: "砍刀 Choppa", A: 3, skill: 3, S: 5, AP: -1, D: 1 }
        },
        abilities: ["獸襲: 對怪獸/載具致傷+1"]
      },
      {
        id: "or-gretchin",
        name: "格雷琴×10 Gretchin",
        points: 40,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103053_OrkGretchin01.jpg",
        stats: { M: 5, T: 2, Sv: 7, W: 10, Ld: 8, OC: 1 },
        inv: null,
        keywords: ["Infantry", "Ork", "Gretchin"],
        weapons: {
          ranged: { name: "格雷琴爆槍 Grot Blasta", range: 12, A: 1, skill: 5, S: 3, AP: 0, D: 1 },
          melee: { name: "近戰武器", A: 1, skill: 5, S: 2, AP: 0, D: 1 }
        },
        abilities: ["OC計為0（在歐克旁邊時除外）"]
      },
      {
        id: "or-squighog",
        name: "松鼠豬騎士×3 Squighog Boyz",
        points: 110,
        img: "https://www.warhammer.com/app/resources/catalog/product/920x950/60010103001_BeastsnaggaHogzGroup2.jpg",
        stats: { M: 10, T: 7, Sv: 4, W: 12, Ld: 7, OC: 2 },
        inv: null,
        keywords: ["Mounted", "Ork", "Beast Snagga"],
        weapons: {
          ranged: { name: "粗糙槍 Shoota", range: 18, A: 2, skill: 5, S: 4, AP: 0, D: 1 },
          melee: { name: "狩獵矛 Stikka", A: 4, skill: 3, S: 7, AP: -1, D: 2, keywords: ["Lance"] }
        },
        abilities: ["獸襲: 對怪獸/載具致傷+1", "衝鋒傷害+1"]
      }
    ]
  }
};
