import { motion } from 'framer-motion';
import FlavorUniverseCanvas from '../components/FlavorUniverseCanvas';
import NodeDetailPanel from '../components/NodeDetailPanel';
import { atlasStats } from '../data/flavorAtlas';
import { getKnowledgeNode } from '../data/knowledgeGraph';
import { useArchiveStore } from '../store/useArchiveStore';

function HomeFlavorUniverse() {
  const selectedNodeId = useArchiveStore((state) => state.selectedKnowledgeNodeId);
  const setSelectedNode = useArchiveStore((state) => state.setSelectedKnowledgeNodeId);
  const selectedNode = getKnowledgeNode(selectedNodeId);

  return (
    <section className="relative min-h-screen overflow-hidden bg-archive">
      <div className="absolute inset-0">
        <FlavorUniverseCanvas />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(3,4,5,0.92)_72%)]" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex items-start justify-between gap-6 font-mono text-xs uppercase tracking-[0.28em] text-white/55">
          <span>A World Ingredient Map for Bartenders</span>
          <span className="hidden sm:block">Ingredients / Spirits / Regions / Cocktail Direction</span>
        </div>

        <div className="max-w-5xl pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-balance text-6xl font-semibold leading-[0.9] text-white sm:text-8xl lg:text-[9.5rem]"
          >
            Every ingredient carries a place.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-2xl text-white/70 sm:text-4xl"
          >
            每一种食材，都带着一个地方。
          </motion.p>
          <motion.a
            href="#world-map"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.8 }}
            className="mt-10 inline-flex border border-electric/60 px-6 py-3 font-mono text-xs uppercase tracking-[0.24em] text-electric shadow-glow transition hover:bg-electric hover:text-white"
          >
            World Ingredient Map / 世界食材地图
          </motion.a>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.8 }}
            className="mt-10 grid max-w-4xl grid-cols-2 gap-3 border-y border-white/10 py-5 sm:grid-cols-3 lg:grid-cols-6"
          >
            {[
              ['Ingredients', atlasStats.ingredients],
              ['Cocktail Ideas', atlasStats.cocktailIdeas],
              ['Pairings', atlasStats.pairings],
              ['Spirits', atlasStats.spirits],
              ['Techniques', atlasStats.techniques],
              ['Preparations', atlasStats.preparations],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/38">{label}</div>
                <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="absolute right-5 top-1/2 z-20 hidden w-[min(390px,calc(100%-40px))] -translate-y-1/2 backdrop-blur-md lg:block"
      >
        <NodeDetailPanel node={selectedNode} onSelect={setSelectedNode} eyebrow="Operating node" />
      </motion.div>
    </section>
  );
}

export default HomeFlavorUniverse;
