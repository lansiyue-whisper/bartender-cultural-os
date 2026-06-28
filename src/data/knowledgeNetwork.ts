import { atlasIngredients, atlasCocktailIdeas } from './flavorAtlas';
import { spirits } from './spirits';
import { techniques } from './techniques';

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
  Chocolate: 'Cacao, roast, fat, bitterness and dessert-adjacent depth.',
  Citrus: 'Peel oil, fresh acid, floral lift and clean aromatic brightness.',
  Coffee: 'Roasted bitterness, acidity, depth and dry finish.',
  Creamy: 'Milk texture, lactic softness and rounded body.',
  Earthy: 'Roots, soil, mushroom, grain and grounded savory depth.',
  Fermented: 'Living acidity, funk, umami, tea-like depth and savory movement.',
  Floral: 'High aromatic lift from flowers, perfumed water and delicate fruit skins.',
  Fresh: 'Mineral, cold, green, carbonated and quick on the tongue.',
  Fruit: 'Ripe fruit, skins, pulp, color and seasonal acidity.',
  Funky: 'Wild fermentation, tropical overtones and unruly aromatic lift.',
  Grain: 'Cereal, malt, bread, roast and structural sweetness.',
  Herbal: 'Leaf, stem, medicine cabinet, garden herbs and wet green aroma.',
  Lactic: 'Yogurt, whey, dairy acid and soft fermented texture.',
  Mineral: 'Salt, stone, clean edges and restrained dryness.',
  Nutty: 'Fat, roast, seed, oil and rounded mid-palate.',
  Roasted: 'Toast, grain, coffee, cacao and warm extraction.',
  Saline: 'Sea salt, brine, seaweed and savory lift.',
  Savory: 'Salt, umami, fermentation, brine and culinary depth.',
  Smoke: 'Char, resin, wood, peat, toasted fruit and slow finish.',
  Soft: 'Low pressure texture, roundness and gentle sweetness.',
  Spice: 'Heat, warmth, pepper, seed spice and long aromatic tail.',
  Sweet: 'Honey, syrup, ripe fruit, caramel and rounded texture.',
  Tea: 'Tannin, oxidation, roast, floral lift and dry aftertaste.',
  Tropical: 'Lush fruit, cane, coconut, pulp and warm-climate brightness.',
  Umami: 'Glutamate depth, broth, fermentation and long savory finish.',
};

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[’']/g, '')
    .replace(/[^\u4e00-\u9fa5a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}

function nodeId(type: GraphNodeType, value: string) {
  return `${type}:${slug(value)}`;
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

  atlasIngredients.forEach((ingredient) => {
    addNode(nodes, {
      id: nodeId('ingredient', ingredient.id),
      type: 'ingredient',
      title: ingredient.name,
      subtitle: `${ingredient.category} / ${ingredient.season}`,
      description: ingredient.description,
    });
  });

  unique(atlasIngredients.flatMap((ingredient) => ingredient.regions)).forEach((region) => {
    addNode(nodes, {
      id: nodeId('region', region),
      type: 'region',
      title: region,
      subtitle: 'Region / 地区',
      description: `A regional flavor field connected to ingredients, spirits and cocktail directions from ${region}.`,
    });
  });

  unique(atlasIngredients.flatMap((ingredient) => ingredient.flavorProfile)).forEach((flavor) => {
    addNode(nodes, {
      id: nodeId('flavor', flavor),
      type: 'flavor',
      title: flavor,
      subtitle: 'Flavor / 风味',
      description: flavorDescriptions[flavor] ?? `${flavor} as a searchable flavor field in The Flavor Atlas.`,
    });
  });

  unique(atlasIngredients.map((ingredient) => ingredient.season)).forEach((season) => {
    addNode(nodes, {
      id: nodeId('season', season),
      type: 'season',
      title: season,
      subtitle: 'Season / 季节',
      description: season === 'All Year' ? 'Stable ingredients that can be used across the year.' : `Ingredients that peak or read especially well during ${season}.`,
    });
  });

  spirits.forEach((spirit) => {
    addNode(nodes, {
      id: nodeId('spirit', spirit.name),
      type: 'spirit',
      title: spirit.name,
      subtitle: `${spirit.category} / ${spirit.origin}`,
      description: spirit.description,
    });
  });

  techniques.forEach((technique) => {
    addNode(nodes, {
      id: nodeId('technique', technique.name),
      type: 'technique',
      title: technique.name,
      subtitle: `${technique.difficulty} / ${technique.shelfLife}`,
      description: technique.description,
    });
  });

  atlasCocktailIdeas.forEach((cocktail) => {
    addNode(nodes, {
      id: nodeId('cocktail', cocktail),
      type: 'cocktail',
      title: cocktail,
      subtitle: 'Cocktail Idea / 鸡尾酒方向',
      description: `${cocktail} is a development direction generated from The Flavor Atlas ingredient database.`,
    });
  });

  atlasIngredients.forEach((ingredient) => {
    const ingredientId = nodeId('ingredient', ingredient.id);

    ingredient.regions.forEach((region) => addEdge(edges, ingredientId, nodeId('region', region), 'belongs-to-region'));
    ingredient.flavorProfile.forEach((flavor) => addEdge(edges, ingredientId, nodeId('flavor', flavor), 'shares-flavor'));
    ingredient.spirits.forEach((spirit) => addEdge(edges, ingredientId, nodeId('spirit', spirit), 'works-with-spirit'));
    ingredient.techniques.forEach((technique) => addEdge(edges, ingredientId, nodeId('technique', technique), 'works-with-technique'));
    ingredient.cocktailIdeas.forEach((cocktail) => addEdge(edges, ingredientId, nodeId('cocktail', cocktail), 'used-in-cocktail'));
    ingredient.pairings.forEach((pairing) => addEdge(edges, ingredientId, nodeId('ingredient', slug(pairing)), 'pairs-with'));
    ingredient.similarIngredients.forEach((similar) => addEdge(edges, ingredientId, nodeId('ingredient', slug(similar)), 'similar-to'));
    ingredient.alternatives.forEach((alternative) => addEdge(edges, ingredientId, nodeId('ingredient', slug(alternative)), 'alternative-to'));
    addEdge(edges, ingredientId, nodeId('season', ingredient.season), 'best-in-season');
  });

  spirits.forEach((spirit) => {
    const spiritId = nodeId('spirit', spirit.name);
    spirit.bestIngredients.forEach((ingredient) => addEdge(edges, spiritId, nodeId('ingredient', slug(ingredient)), 'pairs-with'));
    spirit.bestPairingFlavors.forEach((flavor) => addEdge(edges, spiritId, nodeId('flavor', flavor), 'shares-flavor'));
    spirit.suitableTechniques.forEach((technique) => addEdge(edges, spiritId, nodeId('technique', technique), 'works-with-technique'));
    spirit.cocktailDirections.forEach((cocktail) => {
      addNode(nodes, {
        id: nodeId('cocktail', cocktail),
        type: 'cocktail',
        title: cocktail,
        subtitle: 'Cocktail Idea / 鸡尾酒方向',
        description: `A cocktail direction connected to ${spirit.name}.`,
      });
      addEdge(edges, spiritId, nodeId('cocktail', cocktail), 'used-in-cocktail');
    });
  });

  techniques.forEach((technique) => {
    const techniqueId = nodeId('technique', technique.name);
    technique.bestForIngredients.forEach((ingredient) => addEdge(edges, techniqueId, nodeId('ingredient', slug(ingredient)), 'works-with-technique'));
    technique.bestForFlavors.forEach((flavor) => addEdge(edges, techniqueId, nodeId('flavor', flavor), 'shares-flavor'));
    technique.suitableSpirits.forEach((spirit) => addEdge(edges, techniqueId, nodeId('spirit', spirit), 'works-with-spirit'));
    technique.cocktailDirections.forEach((cocktail) => {
      addNode(nodes, {
        id: nodeId('cocktail', cocktail),
        type: 'cocktail',
        title: cocktail,
        subtitle: 'Cocktail Idea / 鸡尾酒方向',
        description: `A cocktail direction connected to ${technique.name}.`,
      });
      addEdge(edges, techniqueId, nodeId('cocktail', cocktail), 'used-in-cocktail');
    });
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
  return nodeId('ingredient', 'yuzu');
}
