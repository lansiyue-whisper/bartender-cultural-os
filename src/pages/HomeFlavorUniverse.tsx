import { motion } from 'framer-motion';
import FlavorUniverseCanvas from '../components/FlavorUniverseCanvas';
import IngredientRecipeFinder from '../components/IngredientRecipeFinder';
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
      <div className="absolute inset-0 opacity-90">
        <FlavorUniverseCanvas />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(3,4,5,0.9)_74%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/14" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 py-6 sm:px-8 lg:px-12">
        <div className="grid gap-4 border-b border-white/12 pb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/58 sm:grid-cols-[1fr_auto_1fr]">
          <span>A World Ingredient Map for Bartenders</span>
          <span className="hidden sm:block text-electric/80">調酒師世界食材地圖</span>
          <span className="sm:text-right">Ingredient / Spirit / Technique</span>
        </div>

        <div className="max-w-6xl pb-12 pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-balance text-6xl font-semibold leading-[0.88] tracking-[-0.035em] text-white sm:text-8xl lg:text-[9.8rem]"
          >
            Flavor Atlas for Working Bartenders.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 max-w-3xl border-l border-electric/50 pl-5 text-2xl leading-9 text-white/70 sm:text-4xl sm:leading-tight"
          >
            每一种食材，都带着一个地方。输入一个食材，找到可执行的配方、基酒、技法与替代方向。
          </motion.p>
          <motion.a
            href="#world-map"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.8 }}
            className="mt-10 inline-flex border border-electric/60 px-6 py-3 font-mono text-xs uppercase tracking-[0.24em] text-electric shadow-glow transition hover:bg-electric hover:text-white"
          >
            Enter the archive / 进入档案
          </motion.a>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.8 }}
            className="mt-12 max-w-6xl"
          >
            <IngredientRecipeFinder />
          </motion.div>
        </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 gap-0 border-y border-white/12 sm:grid-cols-3 lg:grid-cols-6"
          >
            {[
              ['Ingredients', atlasStats.ingredients],
              ['Cocktail Ideas', atlasStats.cocktailIdeas],
              ['Pairings', atlasStats.pairings],
              ['Spirits', atlasStats.spirits],
              ['Techniques', atlasStats.techniques],
              ['Preparations', atlasStats.preparations],
            ].map(([label, value]) => (
              <div key={label} className="border-white/10 py-4 sm:border-r sm:px-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/38">{label}</div>
                <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
              </div>
            ))}
          </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="absolute right-5 top-1/2 z-20 hidden w-[min(390px,calc(100%-40px))] -translate-y-1/2 backdrop-blur-md xl:block"
      >
        <NodeDetailPanel node={selectedNode} onSelect={setSelectedNode} eyebrow="Operating node" />
      </motion.div>
    </section>
  );
}

export default HomeFlavorUniverse;
