// ========== 地圖場景設定 ==========

const MAP_SCENARIOS = {
  "standard": {
    name: "標準戰場",
    desc: "均衡配置的標準地形",
    generate: (w, h) => ({
      terrain: [
        { type: "ruins", x: w * 0.35, y: h * 0.3, width: 80, height: 60 },
        { type: "ruins", x: w * 0.65, y: h * 0.7, width: 80, height: 60 },
        { type: "woods", x: w * 0.2, y: h * 0.6, width: 70, height: 70 },
        { type: "woods", x: w * 0.8, y: h * 0.4, width: 70, height: 70 },
        { type: "crater", x: w * 0.5, y: h * 0.5, width: 50, height: 50 },
        { type: "barricade", x: w * 0.4, y: h * 0.15, width: 60, height: 20 },
        { type: "barricade", x: w * 0.6, y: h * 0.85, width: 60, height: 20 }
      ],
      objectives: [
        { id: 1, x: w * 0.5, y: h * 0.5 },
        { id: 2, x: w * 0.25, y: h * 0.3 },
        { id: 3, x: w * 0.25, y: h * 0.7 },
        { id: 4, x: w * 0.75, y: h * 0.3 },
        { id: 5, x: w * 0.75, y: h * 0.7 }
      ]
    })
  },
  "city": {
    name: "城市廢墟",
    desc: "密集建築和掩體，適合步兵戰",
    generate: (w, h) => ({
      terrain: [
        { type: "ruins", x: w * 0.2, y: h * 0.25, width: 90, height: 70 },
        { type: "ruins", x: w * 0.5, y: h * 0.2, width: 80, height: 60 },
        { type: "ruins", x: w * 0.8, y: h * 0.25, width: 90, height: 70 },
        { type: "ruins", x: w * 0.35, y: h * 0.5, width: 70, height: 50 },
        { type: "ruins", x: w * 0.65, y: h * 0.5, width: 70, height: 50 },
        { type: "ruins", x: w * 0.2, y: h * 0.75, width: 90, height: 70 },
        { type: "ruins", x: w * 0.5, y: h * 0.8, width: 80, height: 60 },
        { type: "ruins", x: w * 0.8, y: h * 0.75, width: 90, height: 70 },
        { type: "barricade", x: w * 0.3, y: h * 0.35, width: 40, height: 15 },
        { type: "barricade", x: w * 0.7, y: h * 0.65, width: 40, height: 15 }
      ],
      objectives: [
        { id: 1, x: w * 0.5, y: h * 0.5 },
        { id: 2, x: w * 0.3, y: h * 0.25 },
        { id: 3, x: w * 0.3, y: h * 0.75 },
        { id: 4, x: w * 0.7, y: h * 0.25 },
        { id: 5, x: w * 0.7, y: h * 0.75 }
      ]
    })
  },
  "forest": {
    name: "密林地帶",
    desc: "大片森林，限制視線和移動",
    generate: (w, h) => ({
      terrain: [
        { type: "woods", x: w * 0.15, y: h * 0.3, width: 100, height: 90 },
        { type: "woods", x: w * 0.15, y: h * 0.7, width: 100, height: 90 },
        { type: "woods", x: w * 0.4, y: h * 0.5, width: 80, height: 80 },
        { type: "woods", x: w * 0.6, y: h * 0.5, width: 80, height: 80 },
        { type: "woods", x: w * 0.85, y: h * 0.3, width: 100, height: 90 },
        { type: "woods", x: w * 0.85, y: h * 0.7, width: 100, height: 90 },
        { type: "crater", x: w * 0.5, y: h * 0.25, width: 50, height: 50 },
        { type: "crater", x: w * 0.5, y: h * 0.75, width: 50, height: 50 }
      ],
      objectives: [
        { id: 1, x: w * 0.5, y: h * 0.5 },
        { id: 2, x: w * 0.2, y: h * 0.5 },
        { id: 3, x: w * 0.8, y: h * 0.5 },
        { id: 4, x: w * 0.5, y: h * 0.2 },
        { id: 5, x: w * 0.5, y: h * 0.8 }
      ]
    })
  },
  "wasteland": {
    name: "荒野戰場",
    desc: "開闘平原，少量掩體，適合載具",
    generate: (w, h) => ({
      terrain: [
        { type: "crater", x: w * 0.25, y: h * 0.3, width: 60, height: 60 },
        { type: "crater", x: w * 0.75, y: h * 0.7, width: 60, height: 60 },
        { type: "crater", x: w * 0.5, y: h * 0.5, width: 70, height: 70 },
        { type: "barricade", x: w * 0.35, y: h * 0.6, width: 50, height: 20 },
        { type: "barricade", x: w * 0.65, y: h * 0.4, width: 50, height: 20 },
        { type: "ruins", x: w * 0.15, y: h * 0.5, width: 60, height: 50 },
        { type: "ruins", x: w * 0.85, y: h * 0.5, width: 60, height: 50 }
      ],
      objectives: [
        { id: 1, x: w * 0.5, y: h * 0.5 },
        { id: 2, x: w * 0.25, y: h * 0.25 },
        { id: 3, x: w * 0.25, y: h * 0.75 },
        { id: 4, x: w * 0.75, y: h * 0.25 },
        { id: 5, x: w * 0.75, y: h * 0.75 }
      ]
    })
  },
  "fortress": {
    name: "要塞攻防",
    desc: "一側有大型防禦工事，攻防不對稱",
    generate: (w, h) => ({
      terrain: [
        { type: "building", x: w * 0.85, y: h * 0.5, width: 100, height: 150 },
        { type: "barricade", x: w * 0.7, y: h * 0.3, width: 80, height: 25 },
        { type: "barricade", x: w * 0.7, y: h * 0.7, width: 80, height: 25 },
        { type: "barricade", x: w * 0.7, y: h * 0.5, width: 80, height: 25 },
        { type: "crater", x: w * 0.3, y: h * 0.3, width: 60, height: 60 },
        { type: "crater", x: w * 0.3, y: h * 0.7, width: 60, height: 60 },
        { type: "crater", x: w * 0.45, y: h * 0.5, width: 50, height: 50 },
        { type: "ruins", x: w * 0.15, y: h * 0.5, width: 70, height: 60 }
      ],
      objectives: [
        { id: 1, x: w * 0.85, y: h * 0.5 },
        { id: 2, x: w * 0.6, y: h * 0.3 },
        { id: 3, x: w * 0.6, y: h * 0.7 },
        { id: 4, x: w * 0.3, y: h * 0.5 },
        { id: 5, x: w * 0.15, y: h * 0.5 }
      ]
    })
  },
  "random": {
    name: "隨機生成",
    desc: "隨機配置地形和目標點",
    generate: (w, h) => {
      const terrainTypes = ["ruins", "woods", "crater", "barricade", "building"];
      const terrain = [];
      const numTerrain = 5 + Math.floor(Math.random() * 5);

      for (let i = 0; i < numTerrain; i++) {
        const type = terrainTypes[Math.floor(Math.random() * terrainTypes.length)];
        terrain.push({
          type,
          x: w * (0.2 + Math.random() * 0.6),
          y: h * (0.15 + Math.random() * 0.7),
          width: 40 + Math.random() * 60,
          height: type === "barricade" ? 15 + Math.random() * 15 : 40 + Math.random() * 50
        });
      }

      const objectives = [{ id: 1, x: w * 0.5, y: h * 0.5 }];
      for (let i = 0; i < 4; i++) {
        objectives.push({
          id: i + 2,
          x: w * (0.2 + Math.random() * 0.6),
          y: h * (0.2 + Math.random() * 0.6)
        });
      }

      return { terrain, objectives };
    }
  }
};

// 地形類型
const TERRAIN_TYPES = {
  "ruins": { name: "廢墟", color: "#4a4a4a", cover: true, dense: false, difficult: false },
  "woods": { name: "樹林", color: "#2d5a27", cover: true, dense: true, difficult: true },
  "crater": { name: "彈坑", color: "#3d3d3d", cover: true, dense: false, difficult: true },
  "barricade": { name: "路障", color: "#6b6b6b", cover: true, dense: false, difficult: false },
  "building": { name: "建築物", color: "#5a5a5a", cover: true, dense: false, difficult: false, obscuring: true }
};

// 地形規則
const TERRAIN_RULES = {
  cover: { saveBonus: 1, description: "掩護：+1豁免" },
  dense: { hitPenalty: -1, description: "茂密：穿過時命中-1" },
  difficult: { movePenalty: 0.5, description: "困難：移動距離減半" },
  hazardous: { mortalWounds: "D3", description: "危險：進入時受D3致命傷" },
  obscuring: { blocksLOS: true, description: "遮蔽：阻擋視線" }
};
