import { knowledgeEdges, knowledgeNodes, KnowledgeNode, KnowledgeNodeType } from './knowledgeGraph';

export type UniverseNodeType = KnowledgeNodeType;

export type UniverseNode = KnowledgeNode & {
  connections: string[];
};

export const universeNodes: UniverseNode[] = knowledgeNodes.map((node) => ({
  ...node,
  connections: knowledgeEdges
    .filter((edge) => edge.source === node.id || edge.target === node.id)
    .map((edge) => (edge.source === node.id ? edge.target : edge.source)),
}));
