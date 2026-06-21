import { motion } from 'framer-motion';
import { useMemo } from 'react';
import ForceGraph2D from '../components/ForceGraph2D';
import NodeDetailPanel from '../components/NodeDetailPanel';
import { getKnowledgeNode, getNeighborhood } from '../data/knowledgeGraph';
import { useArchiveStore } from '../store/useArchiveStore';

function CocktailGenome() {
  const selectedId = useArchiveStore((state) => state.selectedKnowledgeNodeId) ?? 'negroni';
  const setSelectedId = useArchiveStore((state) => state.setSelectedKnowledgeNodeId);
  const selectedNode = getKnowledgeNode(selectedId);
  const graph = useMemo(
    () => getNeighborhood(selectedId === 'negroni' ? 'negroni' : selectedId, selectedId === 'negroni' ? 2 : 1),
    [selectedId],
  );

  return (
    <section className="grid min-h-screen gap-10 border-t border-white/10 py-24 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
          Cocktail Genome / Force Graph
        </p>
        <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-none sm:text-7xl">
          Every classic is a mutation engine.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          The graph now behaves as a living network. Start from Negroni, then jump into
          ingredients, regions, music, articles, and techniques through real relationships.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-10"
        >
          <ForceGraph2D
            nodes={graph.nodes}
            edges={graph.edges}
            selectedId={selectedNode.id}
            onSelect={setSelectedId}
            height={640}
          />
        </motion.div>
      </div>

      <div className="self-end">
        <NodeDetailPanel node={selectedNode} onSelect={setSelectedId} eyebrow="Genome node" />
      </div>
    </section>
  );
}

export default CocktailGenome;
