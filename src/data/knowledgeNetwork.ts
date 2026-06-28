import { spirits } from './spirits';
import { techniques } from './techniques';
import { ingredientDetails, worldRegions } from './worldIngredients';

export type GraphNodeType = 'ingredient' | 'spirit' | 'technique' | 'flavor' | 'region' | 'cocktail' | 'season';

export type GraphNode = {
  id: string;
  type: GraphNodeType;
  title: string;
  subtitle: string;
  description: string;
};

export type GraphRelation =
  | 'pairs-with'
  | 'belongs-to-region'
  | 'works-with-technique'
  | 'shares-flavor'
  | 'similar-to'
  | 'alternative-to'
  | 'used-in-cocktail'
  | 'best-in-season'
  | 'works-with-spirit';

export type GraphEdge = {
  source: string;
  target: string;
  relation: GraphRelation;
};

const flavorDescriptions: Record<string, string> = {
  Acid: 'Bright pressure: citrus, vinegar, green fruit and structured sourness.',
  Bitter: 'Structure before sweetness: peel, roots, coffee and aperitif tension.',
  Citrus: 'Peel oil, fresh acid, floral lift and clean aromatic brightness.',
  Coffee: 'Roasted bitterness, acidity, depth and dry finish.',
  Fermented: 'Living acidity, funk, umami, tea-like depth and savory movement.',
  Floral: 'High aromatic lift from flowers, perfumed water and delicate fruit skins.',
  Fresh: 'Mineral, cold, green, carbonated and quick on the tongue.',
  Fruit: 'Ripe fruit, skins, pulp, color and seasonal acidity.',
  Herbal: 'Leaf, stem, medicine cabinet, garden herbs and wet green aroma.',
  Nutty: 'Fat, roast, seed, oil and rounded mid-palate.',
  Roasted: 'Toast, grain, coffee, cacao and warm extraction.',
  Savory: 'Salt, umami, fermentation, brine and culinary depth.',
  Smoke: 'Char, resin, wood, peat, toasted fruit and slow finish.',
  Spice: 'Heat, warmth, pepper, seed spice and long aromatic tail.',
  Sweet: 'Honey, syrup, ripe fruit, caramel and rounded texture.',
  Tea: 'Tannin, oxidation, roast, floral lift and dry aftertaste.',
  Tropical: 'Lush fruit, cane, coconut, pulp and warm-climate brightness.',
};

const graphFlavorNames = Object.keys(flavorDescriptions);

const seasonBuckets = ['Spring', 'Summer', 'Autumn', 'Winter', 'All Year'];

const techniqueIdByName = new Map(techniques.map((technique) => [technique.name, technique.id]));
const spiritIdByName = new Map(spirits.map((spirit) => [spirit.name, spirit.id]));
const regionIdByEnglish = new Map(worldRegions.map((region) => [region.englishName, region.id]));

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\//g, ' ')
    .replace(/\s+/g, '-')
    .replace(/[^\u4e00-\u9fa5a-z0-9-]/g, '');
}

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}

function isString(value: string | undefined): value is string {
  return typeof value === 'string';
}

function nodeId(type: GraphNodeType, value: string) {
  return `${type}:${slug(value)}`;
}

function flavorNodeId(flavor: string) {
  return nodeId('flavor', flavor);
}

function cocktailNodeId(cocktail: string) {
  return nodeId('cocktail', cocktail);
}

function seasonNodeId(season: string) {
  return nodeId('season', season);
}

function normalizeSeason(season: string) {
  const lower = season.toLowerCase();
  if (lower.includes('spring')) return 'Spring';
  if (lower.includes('summer')) return 'Summer';
  if (lower.includes('autumn') || lower.includes('fall')) return 'Autumn';
  if (lower.includes('winter')) return 'Winter';
  return 'All Year';
}

function flavorCandidatesForIngredient(ingredientName: string) {
  const ingredient = ingredientDetails.find((item) => item.name === ingredientName);
  if (!ingredient) return ['Fresh', 'Fruit', 'Acid'];

  const wheelFlavors = Object.entries(ingredient.flavorWheel)
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => {
      if (key === 'fresh') return 'Fresh';
      if (key === 'acid') return 'Acid';
      if (key === 'sweet') return 'Sweet';
      if (key === 'floral') return 'Floral';
      if (key === 'herbal') return 'Herbal';
      return 'Savory';
    });

  const categoryFlavors = [
    ingredient.category.includes('Citrus') ? 'Citrus' : null,
    ingredient.category.includes('Tea') ? 'Tea' : null,
    ingredient.category.includes('Coffee') ? 'Coffee' : null,
    ingredient.category.includes('Tropical') ? 'Tropical' : null,
    ingredient.category.includes('Spice') ? 'Spice' : null,
    ingredient.category.includes('Nut') || ingredient.category.includes('Seed') ? 'Nutty' : null,
    ingredient.category.includes('Fermented') ? 'Fermented' : null,
  ].filter(Boolean) as string[];

  return unique([...categoryFlavors, ...wheelFlavors]).slice(0, 5);
}

function getIngredientRegions(ingredientName: string) {
  const directRegions = worldRegions.filter((region) => region.ingredients.includes(ingredientName));
  const fallbackRegions = directRegions.flatMap((region) =>
    region.linkedRegionIds.map((linkedId) => worldRegions.find((item) => item.id === linkedId)).filter(Boolean),
  ) as typeof worldRegions;

  return unique([...directRegions, ...fallbackRegions].map((region) => region.id)).slice(0, 2);
}

function getIngredientTechniques(ingredientName: string) {
  const ingredient = ingredientDetails.find((item) => item.name === ingredientName);
  const direct = ingredient?.techniques.map((name) => techniqueIdByName.get(name)).filter(isString) ?? [];
  const fromTechniqueProfiles = techniques
    .filter((technique) => technique.bestForIngredients.includes(ingredientName))
    .map((technique) => technique.id);

  return unique([...direct, ...fromTechniqueProfiles, 'infusion', 'syrup']).slice(0, 3);
}

function getIngredientSpirits(ingredientName: string) {
  const ingredient = ingredientDetails.find((item) => item.name === ingredientName);
  const direct = ingredient?.suitableSpirits.map((name) => spiritIdByName.get(name)).filter(isString) ?? [];
  const fromSpiritProfiles = spirits
    .filter((spirit) => spirit.bestIngredients.includes(ingredientName))
    .map((spirit) => spirit.id);

  return unique([...direct, ...fromSpiritProfiles, 'gin', 'rum', 'vodka']).slice(0, 4);
}

function getIngredientRelations(ingredientName: string) {
  const ingredient = ingredientDetails.find((item) => item.name === ingredientName);
  const related = ingredient
    ? [
        ...ingredient.relatedIngredients.similar,
        ...ingredient.relatedIngredients.substitutes,
        ...ingredient.relatedIngredients.pairings,
      ]
    : [];

  return unique(related.filter((item) => ingredientDetails.some((ingredientItem) => ingredientItem.name === item))).slice(0, 5);
}

function addNode(nodes: Map<string, GraphNode>, node: GraphNode) {
  if (!nodes.has(node.id)) nodes.set(node.id, node);
}

function addEdge(edges: Map<string, GraphEdge>, source: string, target: string, relation: GraphRelation) {
  if (source === target) return;
  const key = `${source}|${target}|${relation}`;
  if (!edges.has(key)) edges.set(key, { source, target, relation });
}

function buildKnowledgeGraph() {
  const nodes = new Map<string, GraphNode>();
  const edges = new Map<string, GraphEdge>();

  worldRegions.forEach((region) => {
    addNode(nodes, {
      id: nodeId('region', region.id),
      type: 'region',
      title: `${region.englishName} / ${region.regionName}`,
      subtitle: 'Region / 地区',
      description: region.description,
    });
  });

  graphFlavorNames.forEach((flavor) => {
    addNode(nodes, {
      id: flavorNodeId(flavor),
      type: 'flavor',
      title: flavor,
      subtitle: 'Flavor / 风味',
      description: flavorDescriptions[flavor],
    });
  });

  seasonBuckets.forEach((season) => {
    addNode(nodes, {
      id: seasonNodeId(season),
      type: 'season',
      title: season,
      subtitle: 'Season / 季节',
      description: season === 'All Year' ? 'Stable material that can be used across the year.' : `Best explored during ${season.toLowerCase()}.`,
    });
  });

  spirits.forEach((spirit) => {
    const spiritNodeId = nodeId('spirit', spirit.id);
    addNode(nodes, {
      id: spiritNodeId,
      type: 'spirit',
      title: spirit.name,
      subtitle: `${spirit.category} / ${spirit.origin}`,
      description: spirit.description,
    });

    unique(spirit.bestIngredients).slice(0, 6).forEach((ingredient) => {
      addEdge(edges, spiritNodeId, nodeId('ingredient', ingredient), 'pairs-with');
    });

    unique(spirit.bestPairingFlavors).slice(0, 5).forEach((flavor) => {
      addEdge(edges, spiritNodeId, flavorNodeId(flavor), 'shares-flavor');
    });

    unique([
      ...spirit.suitableTechniques.map((name) => techniqueIdByName.get(name)).filter(isString),
      ...techniques.filter((technique) => technique.suitableSpirits.includes(spirit.name)).map((technique) => technique.id),
    ])
      .slice(0, 4)
      .forEach((techniqueId) => addEdge(edges, spiritNodeId, nodeId('technique', techniqueId), 'works-with-technique'));

    spirit.cocktailDirections.slice(0, 4).forEach((cocktail) => {
      addNode(nodes, {
        id: cocktailNodeId(cocktail),
        type: 'cocktail',
        title: cocktail,
        subtitle: 'Cocktail Direction / 鸡尾酒方向',
        description: `A development direction connected to ${spirit.name}.`,
      });
      addEdge(edges, spiritNodeId, cocktailNodeId(cocktail), 'used-in-cocktail');
    });

    spirit.relatedRegions.forEach((regionName) => {
      const regionId = regionIdByEnglish.get(regionName);
      if (regionId) addEdge(edges, spiritNodeId, nodeId('region', regionId), 'belongs-to-region');
    });
  });

  techniques.forEach((technique) => {
    const techniqueNodeId = nodeId('technique', technique.id);
    addNode(nodes, {
      id: techniqueNodeId,
      type: 'technique',
      title: technique.name,
      subtitle: `${technique.difficulty} / ${technique.shelfLife}`,
      description: technique.description,
    });

    technique.bestForIngredients.slice(0, 6).forEach((ingredient) => {
      addEdge(edges, techniqueNodeId, nodeId('ingredient', ingredient), 'works-with-technique');
    });

    technique.bestForFlavors.slice(0, 4).forEach((flavor) => {
      addEdge(edges, techniqueNodeId, flavorNodeId(flavor), 'shares-flavor');
    });

    technique.suitableSpirits.slice(0, 5).forEach((spirit) => {
      const spiritId = spiritIdByName.get(spirit);
      if (spiritId) addEdge(edges, techniqueNodeId, nodeId('spirit', spiritId), 'works-with-spirit');
    });

    technique.cocktailDirections.slice(0, 4).forEach((cocktail) => {
      addNode(nodes, {
        id: cocktailNodeId(cocktail),
        type: 'cocktail',
        title: cocktail,
        subtitle: 'Cocktail Direction / 鸡尾酒方向',
        description: `A development direction that works with ${technique.name}.`,
      });
      addEdge(edges, techniqueNodeId, cocktailNodeId(cocktail), 'used-in-cocktail');
    });
  });

  ingredientDetails.forEach((ingredient) => {
    const ingredientNodeId = nodeId('ingredient', ingredient.name);
    addNode(nodes, {
      id: ingredientNodeId,
      type: 'ingredient',
      title: `${ingredient.englishName} / ${ingredient.name}`,
      subtitle: ingredient.category,
      description: ingredient.story,
    });

    getIngredientRegions(ingredient.name).forEach((regionId) => {
      addEdge(edges, ingredientNodeId, nodeId('region', regionId), 'belongs-to-region');
    });

    flavorCandidatesForIngredient(ingredient.name).slice(0, 5).forEach((flavor) => {
      addEdge(edges, ingredientNodeId, flavorNodeId(flavor), 'shares-flavor');
    });

    getIngredientSpirits(ingredient.name).forEach((spiritId) => {
      addEdge(edges, ingredientNodeId, nodeId('spirit', spiritId), 'works-with-spirit');
    });

    getIngredientTechniques(ingredient.name).forEach((techniqueId) => {
      addEdge(edges, ingredientNodeId, nodeId('technique', techniqueId), 'works-with-technique');
    });

    getIngredientRelations(ingredient.name).forEach((relatedIngredient, index) => {
      addEdge(edges, ingredientNodeId, nodeId('ingredient', relatedIngredient), index === 0 ? 'similar-to' : 'pairs-with');
    });

    ingredient.relatedIngredients.substitutes.slice(0, 2).forEach((alternative) => {
      if (ingredientDetails.some((item) => item.name === alternative)) {
        addEdge(edges, ingredientNodeId, nodeId('ingredient', alternative), 'alternative-to');
      }
    });

    ingredient.cocktailDirections.slice(0, 4).forEach((cocktail) => {
      addNode(nodes, {
        id: cocktailNodeId(cocktail),
        type: 'cocktail',
        title: cocktail,
        subtitle: 'Cocktail Direction / 鸡尾酒方向',
        description: `A cocktail direction that can express ${ingredient.englishName} / ${ingredient.name}.`,
      });
      addEdge(edges, ingredientNodeId, cocktailNodeId(cocktail), 'used-in-cocktail');
    });

    addEdge(edges, ingredientNodeId, seasonNodeId(normalizeSeason(ingredient.season)), 'best-in-season');
  });

  return {
    nodes: Array.from(nodes.values()),
    edges: Array.from(edges.values()).filter((edge) => nodes.has(edge.source) && nodes.has(edge.target)),
  };
}

export const knowledgeGraph = buildKnowledgeGraph();
export const graphNodes = knowledgeGraph.nodes;
export const graphEdges = knowledgeGraph.edges;

export function getGraphNode(id: string) {
  return graphNodes.find((node) => node.id === id) ?? graphNodes[0];
}

export function getGraphEdgesForNode(id: string) {
  return graphEdges.filter((edge) => edge.source === id || edge.target === id);
}

export function getGraphConnectedNodes(id: string) {
  const neighborIds = getGraphEdgesForNode(id).map((edge) => (edge.source === id ? edge.target : edge.source));
  return unique(neighborIds).map(getGraphNode);
}

export function getGraphNeighborhood(id: string) {
  const center = getGraphNode(id);
  const connectedNodes = getGraphConnectedNodes(center.id);
  const nodes = [center, ...connectedNodes];
  const nodeIds = new Set(nodes.map((node) => node.id));
  const edges = graphEdges.filter((edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target));
  return { nodes, edges };
}

export function getDefaultGraphNodeId() {
  return nodeId('ingredient', '柚子');
}
