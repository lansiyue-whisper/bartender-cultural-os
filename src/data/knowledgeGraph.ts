export type KnowledgeNodeType =
  | 'Flavor'
  | 'Ingredient'
  | 'Cocktail'
  | 'Region'
  | 'Music'
  | 'Article'
  | 'Technique';

export type KnowledgeNode = {
  id: string;
  name: string;
  english?: string;
  type: KnowledgeNodeType;
  summary: string;
  color: string;
  position: [number, number, number];
  tags: string[];
  notes?: string[];
};

export type KnowledgeEdge = {
  source: string;
  target: string;
  relation: string;
};

export const knowledgeNodes: KnowledgeNode[] = [
  {
    id: 'fresh',
    name: '清爽 / Fresh',
    type: 'Flavor',
    summary: 'Mineral, carbonated, green, quick on the tongue.',
    color: '#8fb2ff',
    position: [-3.4, 1.6, -0.4],
    tags: ['mineral', 'carbonated', 'green'],
  },
  {
    id: 'acid',
    name: '酸感 / Acid',
    type: 'Flavor',
    summary: 'Bright pressure: citrus, waxberry, green mango, vinegar, saline fruit.',
    color: '#f4f7ff',
    position: [-2.2, -1.9, 1.2],
    tags: ['sharp', 'electric', 'citrus'],
  },
  {
    id: 'herbal',
    name: '草本 / Herbal',
    type: 'Flavor',
    summary: 'Leaf, stem, medicine cabinet, tea garden, wet stone.',
    color: '#42b7a9',
    position: [-1.2, 2.5, 0.8],
    tags: ['leaf', 'aromatic', 'tea'],
  },
  {
    id: 'smoky',
    name: '烟熏 / Smoky',
    type: 'Flavor',
    summary: 'Char, resin, peat, toasted fruit, slow service tempo.',
    color: '#9aa8c7',
    position: [2.8, -1.2, -1],
    tags: ['charred', 'resin', 'slow'],
  },
  {
    id: 'bitter',
    name: '苦感 / Bitter',
    type: 'Flavor',
    summary: 'Structure before sweetness. A frame that keeps the drink standing.',
    color: '#2f7dff',
    position: [1.8, 1.5, 1.4],
    tags: ['structural', 'aperitif', 'adult'],
  },
  {
    id: 'fermented',
    name: '发酵 / Fermented',
    type: 'Flavor',
    summary: 'Alive, layered, savory, tea-like, sometimes slightly wild.',
    color: '#c8d3ff',
    position: [3.4, 0.8, -0.4],
    tags: ['funky', 'tea', 'savory'],
  },
  {
    id: 'shiso',
    name: '紫苏 / Shiso',
    english: 'Shiso',
    type: 'Ingredient',
    summary: 'A green frequency between mint, basil, plum skin, and rain.',
    color: '#42b7a9',
    position: [-2.6, 0.8, -0.6],
    tags: ['leaf', 'plum', 'rain'],
    notes: ['Pair with plum, peach, tequila, oolong tea.'],
  },
  {
    id: 'tarragon',
    name: '龙蒿 / Tarragon',
    english: 'Tarragon',
    type: 'Ingredient',
    summary: 'Dry wind, licorice, cucumber skin, and a faint green sweetness.',
    color: '#42b7a9',
    position: [-3.1, 2.4, 1.3],
    tags: ['licorice', 'cucumber', 'green'],
  },
  {
    id: 'sage',
    name: '鼠尾草 / Sage',
    english: 'Sage',
    type: 'Ingredient',
    summary: 'Old pages, warm leaves, pine resin, honey, and apple skin.',
    color: '#42b7a9',
    position: [-0.5, 2.7, -1.5],
    tags: ['resin', 'apple', 'warm'],
  },
  {
    id: 'houttuynia',
    name: '折耳根 / Houttuynia',
    english: 'Houttuynia',
    type: 'Ingredient',
    summary: 'Wet root, metallic green, saline acid. Demands confidence.',
    color: '#42b7a9',
    position: [-3.5, -0.7, 1.7],
    tags: ['root', 'saline', 'wild'],
  },
  {
    id: 'waxberry',
    name: '杨梅 / Waxberry',
    english: 'Waxberry',
    type: 'Ingredient',
    summary: 'Deep red summer rain: tart, sweet, electric, almost fermented.',
    color: '#f4f7ff',
    position: [-1.4, -2.4, 1],
    tags: ['red fruit', 'acid', 'summer'],
  },
  {
    id: 'white-bitter-melon',
    name: '白玉苦瓜 / White Bitter Melon',
    english: 'White Bitter Melon',
    type: 'Ingredient',
    summary: 'Bitter, watery, mineral, almost architectural.',
    color: '#42b7a9',
    position: [2.9, 1.2, 1.4],
    tags: ['bitter', 'mineral', 'white'],
  },
  {
    id: 'oolong',
    name: '乌龙茶 / Oolong',
    english: 'Oolong Tea',
    type: 'Ingredient',
    summary: 'Roasted leaf, mineral steam, tannin, orchard air.',
    color: '#c8d3ff',
    position: [2.3, 2.2, -0.8],
    tags: ['tea', 'tannin', 'roasted'],
  },
  {
    id: 'agarwood',
    name: '沉香木 / Agarwood',
    english: 'Agarwood',
    type: 'Ingredient',
    summary: 'Smoke as time, not decoration. Best with aged rum, Cognac, bitters.',
    color: '#9aa8c7',
    position: [2.2, -0.3, -1.3],
    tags: ['resin', 'smoke', 'memory'],
  },
  {
    id: 'negroni',
    name: 'Negroni',
    type: 'Cocktail',
    summary: 'Gin, bitter, vermouth: a genetic triangle for endless mutation.',
    color: '#2f7dff',
    position: [0, 0.1, 0],
    tags: ['gin', 'bitter', 'vermouth'],
    notes: ['Structure: equal parts gin, bitter aperitivo, sweet vermouth.'],
  },
  {
    id: 'white-negroni',
    name: 'White Negroni',
    type: 'Cocktail',
    summary: 'The Negroni skeleton rendered pale, bitter, herbal, and mineral.',
    color: '#2f7dff',
    position: [1.3, 1.8, 0.9],
    tags: ['gin', 'gentian', 'dry'],
  },
  {
    id: 'boulevardier',
    name: 'Boulevardier',
    type: 'Cocktail',
    summary: 'The Negroni gene moved from gin into whiskey: warmer, heavier, slower.',
    color: '#2f7dff',
    position: [1.6, 1.5, 0.9],
    tags: ['whiskey', 'bitter', 'warm'],
  },
  {
    id: 'old-pal',
    name: 'Old Pal',
    type: 'Cocktail',
    summary: 'Rye, dry vermouth, Campari. Leaner and more angular than Boulevardier.',
    color: '#2f7dff',
    position: [1.1, -1.8, 1.4],
    tags: ['rye', 'dry', 'bitter'],
  },
  {
    id: 'kingston-negroni',
    name: 'Kingston Negroni',
    type: 'Cocktail',
    summary: 'Jamaican rum turns the bitter triangle tropical and kinetic.',
    color: '#2f7dff',
    position: [-1.2, -1.5, 1.1],
    tags: ['rum', 'tropical', 'bitter'],
  },
  {
    id: 'shiso-highball',
    name: 'Shiso Highball',
    type: 'Cocktail',
    summary: 'A light vertical drink: shiso, citrus, carbonated length, cold glass.',
    color: '#2f7dff',
    position: [-2.9, 0.1, 0.5],
    tags: ['highball', 'fresh', 'herbal'],
  },
  {
    id: 'waxberry-collins',
    name: 'Waxberry Collins',
    type: 'Cocktail',
    summary: 'A Collins structure stained with waxberry acid and summer fruit.',
    color: '#2f7dff',
    position: [-1.8, -2.9, -0.4],
    tags: ['collins', 'acid', 'summer'],
  },
  {
    id: 'taiwan',
    name: 'Taiwan Seasonal Shelf',
    type: 'Region',
    summary: 'Waxberry, lychee, oolong, white bitter melon, guava, shiso.',
    color: '#ffffff',
    position: [-3.2, -1.2, 1.8],
    tags: ['island', 'tea', 'fruit'],
  },
  {
    id: 'southwest-china',
    name: 'Southwest China Wet Market',
    type: 'Region',
    summary: 'Houttuynia, herbs, salt, lime, smoke, mountain fruit, fermentation.',
    color: '#ffffff',
    position: [-3.2, -2.2, -1.3],
    tags: ['wet market', 'saline', 'roots'],
  },
  {
    id: 'jamaica',
    name: 'Jamaica Rum Memory',
    type: 'Region',
    summary: 'Overripe fruit, molasses, funk, bass pressure, and heat.',
    color: '#ffffff',
    position: [0.6, -2.8, 1.8],
    tags: ['rum', 'funk', 'bass'],
  },
  {
    id: 'warp',
    name: 'Warp Records',
    type: 'Music',
    summary: 'Cold geometry, synthetic pressure, midnight label culture.',
    color: '#ffffff',
    position: [0.5, 2.6, -1.7],
    tags: ['electronic', 'geometry', 'night'],
  },
  {
    id: 'nts',
    name: 'NTS late night',
    type: 'Music',
    summary: 'A field recording for rain, glass, low light, and slow service.',
    color: '#ffffff',
    position: [-2, 2.2, 1.6],
    tags: ['radio', 'ambient', 'rain'],
  },
  {
    id: 'dub',
    name: 'Dub pressure',
    type: 'Music',
    summary: 'Space, bass, delay, sugarcane, and long echoes.',
    color: '#ffffff',
    position: [1.2, -2.6, -1.5],
    tags: ['bass', 'delay', 'rum'],
  },
  {
    id: 'article-smoke',
    name: 'On smoke and memory',
    type: 'Article',
    summary: 'Smoke is not a flavor note. It is a pacing device.',
    color: '#8fb2ff',
    position: [3.1, -1.5, 0.4],
    tags: ['smoke', 'memory', 'tempo'],
  },
  {
    id: 'article-bitter',
    name: 'The architecture of bitterness',
    type: 'Article',
    summary: 'Bitter ingredients give structure before they give taste.',
    color: '#8fb2ff',
    position: [-0.6, -2.6, -1.9],
    tags: ['bitter', 'structure', 'aperitif'],
  },
  {
    id: 'milk-wash',
    name: 'Milk Wash',
    type: 'Technique',
    summary: 'Clarifies rough edges and turns texture into atmosphere.',
    color: '#c8d3ff',
    position: [3.5, -0.8, 1.5],
    tags: ['texture', 'clarified', 'soft'],
  },
  {
    id: 'carbonation',
    name: 'Carbonation',
    type: 'Technique',
    summary: 'Makes aroma travel faster and gives fresh drinks vertical lift.',
    color: '#c8d3ff',
    position: [-2.7, 1.2, 1.8],
    tags: ['texture', 'fresh', 'lift'],
  },
];

export const knowledgeEdges: KnowledgeEdge[] = [
  { source: 'fresh', target: 'shiso', relation: 'flavor note' },
  { source: 'fresh', target: 'carbonation', relation: 'texture lift' },
  { source: 'fresh', target: 'shiso-highball', relation: 'drink direction' },
  { source: 'acid', target: 'waxberry', relation: 'seasonal acid' },
  { source: 'acid', target: 'waxberry-collins', relation: 'drink direction' },
  { source: 'herbal', target: 'shiso', relation: 'leaf profile' },
  { source: 'herbal', target: 'tarragon', relation: 'leaf profile' },
  { source: 'herbal', target: 'sage', relation: 'warm herb' },
  { source: 'smoky', target: 'agarwood', relation: 'resin smoke' },
  { source: 'smoky', target: 'article-smoke', relation: 'reading' },
  { source: 'bitter', target: 'negroni', relation: 'cocktail structure' },
  { source: 'bitter', target: 'white-bitter-melon', relation: 'ingredient structure' },
  { source: 'bitter', target: 'article-bitter', relation: 'reading' },
  { source: 'fermented', target: 'oolong', relation: 'tea layer' },
  { source: 'fermented', target: 'jamaica', relation: 'funk memory' },
  { source: 'shiso', target: 'shiso-highball', relation: 'ingredient to cocktail' },
  { source: 'shiso', target: 'taiwan', relation: 'regional shelf' },
  { source: 'shiso', target: 'nts', relation: 'listening mood' },
  { source: 'tarragon', target: 'white-negroni', relation: 'botanical bridge' },
  { source: 'sage', target: 'boulevardier', relation: 'warm mutation' },
  { source: 'houttuynia', target: 'southwest-china', relation: 'market memory' },
  { source: 'houttuynia', target: 'shiso-highball', relation: 'saline highball riff' },
  { source: 'waxberry', target: 'waxberry-collins', relation: 'ingredient to cocktail' },
  { source: 'waxberry', target: 'taiwan', relation: 'seasonal shelf' },
  { source: 'white-bitter-melon', target: 'white-negroni', relation: 'bitter mutation' },
  { source: 'white-bitter-melon', target: 'taiwan', relation: 'regional shelf' },
  { source: 'oolong', target: 'shiso-highball', relation: 'tea length' },
  { source: 'oolong', target: 'taiwan', relation: 'regional shelf' },
  { source: 'agarwood', target: 'negroni', relation: 'smoked aperitif riff' },
  { source: 'agarwood', target: 'article-smoke', relation: 'reading' },
  { source: 'negroni', target: 'white-negroni', relation: 'genetic mutation' },
  { source: 'negroni', target: 'boulevardier', relation: 'base swap' },
  { source: 'negroni', target: 'old-pal', relation: 'dry mutation' },
  { source: 'negroni', target: 'kingston-negroni', relation: 'rum mutation' },
  { source: 'negroni', target: 'article-bitter', relation: 'structure study' },
  { source: 'white-negroni', target: 'warp', relation: 'cold geometry' },
  { source: 'boulevardier', target: 'sage', relation: 'warm herb pairing' },
  { source: 'kingston-negroni', target: 'jamaica', relation: 'regional memory' },
  { source: 'kingston-negroni', target: 'dub', relation: 'listening mood' },
  { source: 'waxberry-collins', target: 'taiwan', relation: 'seasonal drink' },
  { source: 'shiso-highball', target: 'carbonation', relation: 'technique' },
  { source: 'taiwan', target: 'nts', relation: 'ambient shelf' },
  { source: 'jamaica', target: 'dub', relation: 'music region' },
  { source: 'warp', target: 'nts', relation: 'label/radio culture' },
  { source: 'milk-wash', target: 'white-negroni', relation: 'texture mutation' },
  { source: 'milk-wash', target: 'bitter', relation: 'soften structure' },
];

export function getKnowledgeNode(id: string | null | undefined) {
  return knowledgeNodes.find((node) => node.id === id) ?? knowledgeNodes[0];
}

export function getConnectedNodes(id: string) {
  const connectedIds = knowledgeEdges
    .filter((edge) => edge.source === id || edge.target === id)
    .map((edge) => (edge.source === id ? edge.target : edge.source));

  return connectedIds
    .map((connectedId) => knowledgeNodes.find((node) => node.id === connectedId))
    .filter((node): node is KnowledgeNode => Boolean(node));
}

export function getEdgesForNode(id: string) {
  return knowledgeEdges.filter((edge) => edge.source === id || edge.target === id);
}

export function getNeighborhood(seedId: string, depth = 1) {
  const visited = new Set([seedId]);
  let frontier = [seedId];

  for (let level = 0; level < depth; level += 1) {
    const next: string[] = [];
    frontier.forEach((id) => {
      getConnectedNodes(id).forEach((node) => {
        if (!visited.has(node.id)) {
          visited.add(node.id);
          next.push(node.id);
        }
      });
    });
    frontier = next;
  }

  const nodes = knowledgeNodes.filter((node) => visited.has(node.id));
  const edges = knowledgeEdges.filter((edge) => visited.has(edge.source) && visited.has(edge.target));
  return { nodes, edges };
}
