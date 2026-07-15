import { motion } from 'framer-motion';
import FlavorUniverseCanvas from '../components/FlavorUniverseCanvas';
import IngredientRecipeFinder from '../components/IngredientRecipeFinder';
import NodeDetailPanel from '../components/NodeDetailPanel';
import { atlasStats } from '../data/flavorAtlas';
import { getKnowledgeNode } from '../data/knowledgeGraph';
import { useArchiveStore } from '../store/useArchiveStore';

const orbitLabels = ['Citrus', 'Tea', 'Herbal', 'Smoke', 'Ferment', 'Mineral'];
const floatingSignals = ['Yuzu Highball', 'Shiso Paloma', 'Pandan Daiquiri', 'Oolong Sour', 'Kombu Martini'];
const tickerItems = ['柚子 Yuzu', '紫苏 Shiso', '斑斓 Pandan', '罗望子 Tamarind', '乌龙茶 Oolong', '烟熏木 Smoke Wood', '洛神花 Hibiscus', '味噌 Miso'];

function HomeFlavorUniverse() {
  const selectedNodeId = useArchiveStore((state) => state.selectedKnowledgeNodeId);
  const setSelectedNode = useArchiveStore((state) => state.setSelectedKnowledgeNodeId);
  const selectedNode = getKnowledgeNode(selectedNodeId);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <FlavorUniverseCanvas />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(3,4,5,0.9)_74%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/14" />
      <div className="hero-scan pointer-events-none absolute inset-0" />
      <div className="hero-orbit pointer-events-none absolute right-[8vw] top-[18vh] hidden h-[22rem] w-[22rem] xl:block">
        <div className="absolute inset-0 rounded-full border border-electric/12" />
        <div className="absolute inset-8 rounded-full border border-white/8" />
        <div className="absolute inset-16 rounded-full border border-electric/10" />
        <div className="orbit-sweep absolute inset-0 rounded-full" />
        <div className="orbit-node orbit-node-a absolute h-2 w-2 rounded-full bg-electric shadow-glow" />
        <div className="orbit-node orbit-node-b absolute h-1.5 w-1.5 rounded-full bg-white/80" />
        <div className="orbit-node orbit-node-c absolute h-1.5 w-1.5 rounded-full bg-herb/90" />
        {orbitLabels.map((label, index) => (
          <span
            key={label}
            className="absolute font-mono text-[9px] uppercase tracking-[0.18em] text-white/34"
            style={{
              left: `${50 + Math.cos((index / orbitLabels.length) * Math.PI * 2) * 42}%`,
              top: `${50 + Math.sin((index / orbitLabels.length) * Math.PI * 2) * 42}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute right-8 top-[30rem] hidden w-64 xl:block">
        {floatingSignals.map((signal, index) => (
          <motion.div
            key={signal}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: [0.2, 0.72, 0.32], x: [18, 0, 8] }}
            transition={{ duration: 5.5, repeat: Infinity, delay: index * 0.55, ease: 'easeInOut' }}
            className="mb-2 border border-white/10 bg-black/22 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/42 backdrop-blur-sm"
          >
            {signal}
          </motion.div>
        ))}
      </div>

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
            className="mt-7 max-w-2xl border-l border-electric/45 pl-4 text-base leading-7 text-white/58 sm:text-xl sm:leading-8"
          >
            每一种食材，都带着一个地方。输入一个食材，找到可执行的配方、基酒、技法与替代方向。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.8 }}
            className="mt-7 grid max-w-3xl gap-3 sm:grid-cols-3"
          >
            {[
              ['Input', '一个食材', '得到可执行配方'],
              ['Connect', '基酒 / 技法', '判断研发路径'],
              ['Replace', '替代 / 避免', '减少试错成本'],
            ].map(([title, cn, desc]) => (
              <div key={title} className="border-t border-white/12 py-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-electric/72">{title}</div>
                <div className="mt-2 text-sm text-white/72">{cn}</div>
                <div className="mt-1 text-xs leading-5 text-white/34">{desc}</div>
              </div>
            ))}
          </motion.div>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.62, duration: 0.8 }}
            className="mb-4 overflow-hidden border-y border-white/10 py-3"
          >
            <div className="ingredient-ticker flex w-max gap-8 font-mono text-[10px] uppercase tracking-[0.28em] text-white/38">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </motion.div>
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

      <div className="pointer-events-none absolute bottom-8 right-8 hidden items-end gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/38 lg:flex">
        <span>Scroll to enter map</span>
        <span className="scroll-pulse h-14 w-px bg-electric/70" />
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
