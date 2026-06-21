import { motion } from 'framer-motion';
import FlavorUniverseCanvas from '../components/FlavorUniverseCanvas';
import NodeDetailPanel from '../components/NodeDetailPanel';
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
          <span>A Cultural Archive for Bartenders</span>
          <span className="hidden sm:block">Flavor Universe / Prototype 01</span>
        </div>

        <div className="max-w-5xl pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-balance text-6xl font-semibold leading-[0.9] text-white sm:text-8xl lg:text-[9.5rem]"
          >
            Tonight, what are you looking for?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-2xl text-white/70 sm:text-4xl"
          >
            今晚你想寻找什么味道？
          </motion.p>
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
