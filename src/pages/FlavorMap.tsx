import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import ForceGraph2D from '../components/ForceGraph2D';
import NodeDetailPanel from '../components/NodeDetailPanel';
import {
  getKnowledgeNode,
  getNeighborhood,
  knowledgeEdges,
  knowledgeNodes,
  KnowledgeNode,
} from '../data/knowledgeGraph';
import { useArchiveStore } from '../store/useArchiveStore';

const flavorNodeIds = ['fresh', 'acid', 'herbal', 'smoky', 'fermented', 'bitter'];

function FlavorMap() {
  const globalSelectedId = useArchiveStore((state) => state.selectedKnowledgeNodeId);
  const setGlobalSelectedId = useArchiveStore((state) => state.setSelectedKnowledgeNodeId);
  const [activeFlavorId, setActiveFlavorId] = useState('fresh');
  const selectedNode = getKnowledgeNode(globalSelectedId ?? activeFlavorId);
  const activeFlavor = getKnowledgeNode(activeFlavorId);

  const graph = useMemo(() => getNeighborhood(activeFlavorId, 2), [activeFlavorId]);
  const flavorNodes = knowledgeNodes.filter((node) => flavorNodeIds.includes(node.id));
  const visibleEdges = knowledgeEdges.filter((edge) =>
    graph.nodes.some((node) => node.id === edge.source || node.id === edge.target),
  );

  const handleFlavorSelect = (node: KnowledgeNode) => {
    setActiveFlavorId(node.id);
    setGlobalSelectedId(node.id);
  };

  return (
    <section className="grid min-h-screen gap-10 border-t border-white/10 py-24 lg:grid-cols-[0.82fr_1.18fr]">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
          Flavor Map / Exploratory Universe
        </p>
        <h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-none sm:text-7xl">
          Enter through taste, then keep moving.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          Flavor is now the entry point into the whole archive. Each category opens a living
          neighborhood of ingredients, drinks, regions, techniques, music, and writing.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {flavorNodes.map((node) => (
            <button
              key={node.id}
              onClick={() => handleFlavorSelect(node)}
              className={`min-h-24 border p-4 text-left transition ${
                activeFlavorId === node.id
                  ? 'border-electric bg-electric/20 text-white shadow-glow'
                  : 'border-white/10 bg-white/[0.03] text-white/70 hover:border-electric/60'
              }`}
            >
              <span className="text-2xl font-semibold">{node.name}</span>
              <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {node.tags.join(' / ')}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFlavor.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="mt-8 border-l border-electric/50 pl-5 text-white/62"
          >
            <div className="font-mono text-xs uppercase tracking-[0.24em] text-electric">
              Active flavor field
            </div>
            <p className="mt-3 text-lg leading-8">{activeFlavor.summary}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid gap-5">
        <ForceGraph2D
          nodes={graph.nodes}
          edges={visibleEdges.filter((edge) =>
            graph.nodes.some((node) => node.id === edge.source) &&
            graph.nodes.some((node) => node.id === edge.target),
          )}
          selectedId={selectedNode.id}
          onSelect={setGlobalSelectedId}
          height={560}
          compact
        />
        <NodeDetailPanel node={selectedNode} onSelect={setGlobalSelectedId} eyebrow="Flavor path" />
      </div>
    </section>
  );
}

export default FlavorMap;
