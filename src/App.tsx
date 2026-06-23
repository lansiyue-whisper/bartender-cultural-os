import { motion } from 'framer-motion';
import AmbientToggle from './components/AmbientToggle';
import CocktailGenome from './pages/CocktailGenome';
import FlavorMap from './pages/FlavorMap';
import HomeFlavorUniverse from './pages/HomeFlavorUniverse';
import IngredientAtlas from './pages/IngredientAtlas';
import Laboratory from './pages/Laboratory';
import WorldIngredientMap, { FieldNotesPreview, InspirationArchive } from './pages/WorldIngredientMap';

const sections = [
  ['01', 'World Ingredient Map', '世界食材地图'],
  ['02', 'Explore by Flavor', '从风味开始探索'],
  ['03', 'Ingredient Atlas', '食材图鉴'],
  ['04', 'Cocktail Genome', '鸡尾酒基因图谱'],
  ['05', 'Inspiration Archive', '灵感档案'],
  ['06', 'Recipe Archive', '配方资料库'],
];

function App() {
  return (
    <main className="min-h-screen bg-archive text-ink selection:bg-electric/40 selection:text-white">
      <HomeFlavorUniverse />

      <section className="mx-auto grid max-w-[1500px] gap-16 px-5 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-4 border-y border-white/10 py-8 md:grid-cols-6"
        >
          {sections.map(([number, label, cn]) => (
            <div key={number} className="min-h-24 border-white/10 md:border-r md:pr-4">
              <div className="font-mono text-xs text-electric">{number}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.2em] text-white/70">{label}</div>
              <div className="mt-2 text-sm text-white/40">{cn}</div>
            </div>
          ))}
        </motion.div>

        <WorldIngredientMap />
        <FlavorMap />
        <IngredientAtlas />
        <CocktailGenome />
        <Laboratory />
        <InspirationArchive />
        <FieldNotesPreview />

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="grid min-h-[70vh] place-items-center border-t border-white/10 py-24 text-center"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
              Preserved Recipe Archive
            </p>
            <h2 className="mt-6 text-balance text-5xl font-semibold leading-none sm:text-7xl lg:text-8xl">
              231 cocktail records remain available.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              旧配方库保留为资料入口。当前主线是从世界食材、地域风味和文化关联出发，找到一杯酒的方向。
            </p>
            <a
              href="./archive-recipes.html"
              className="mt-10 inline-flex border border-electric/60 px-6 py-3 font-mono text-xs uppercase tracking-[0.24em] text-electric shadow-glow transition hover:bg-electric hover:text-white"
            >
              Open recipe archive
            </a>
          </div>
        </motion.section>
      </section>

      <AmbientToggle />
    </main>
  );
}

export default App;
