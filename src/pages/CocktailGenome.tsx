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
          Cocktail Genome / 鸡尾酒基因图谱
        </p>
        <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-none sm:text-7xl">
          Classics are mutation engines.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          从经典鸡尾酒进入，观察基酒替换、苦甜结构、地区原料、音乐氛围与技法之间的连接。
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
