import { motion } from 'framer-motion';
import AmbientToggle from './components/AmbientToggle';
import CocktailGenome from './pages/CocktailGenome';
import ExploreGraph from './pages/ExploreGraph';
import FlavorMap from './pages/FlavorMap';
import HomeFlavorUniverse from './pages/HomeFlavorUniverse';
import IngredientAtlas from './pages/IngredientAtlas';
import Laboratory from './pages/Laboratory';
import SpiritsLibrary from './pages/SpiritsLibrary';
import TechniqueLibrary from './pages/TechniqueLibrary';
import WorldIngredientMap, { FieldNotesPreview, InspirationArchive } from './pages/WorldIngredientMap';

const sections = [
  ['01', 'Place', '地域', '先从一个地区进入，理解当地食材和风味语法。'],
  ['02', 'Ingredient', '食材', '选择一个代表食材，阅读它在杯中的结构角色。'],
  ['03', 'Direction', '酒型方向', '把食材转成 Highball、Sour、Spritz 或 Martini 的研发方向。'],
  ['04', 'Spirits', '烈酒', '用基酒反向寻找适合连接的食材与风味。'],
  ['05', 'Techniques', '技法', '用 Cordial、Shrub、Infusion 等方式稳定表达食材。'],
  ['06', 'Graph', '知识网络', '查看食材、烈酒、技法、地区与鸡尾酒方向的关系。'],
];

function App() {
  return (
    <main className="min-h-screen bg-archive text-ink selection:bg-white selection:text-black">
      <HomeFlavorUniverse />

      <section className="mx-auto grid max-w-[1600px] gap-20 px-5 py-24 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="editorial-index grid gap-0 border-y border-white/18 md:grid-cols-3 xl:grid-cols-6"
        >
          {sections.map(([number, label, cn, description]) => (
            <div key={number} className="min-h-40 border-white/14 py-6 md:border-r md:px-5">
              <div className="hidden font-mono text-xs text-white/44">{number}</div>
              <div className="mt-3 text-xl uppercase tracking-[-0.02em] text-ink">{label}</div>
              <div className="mt-2 text-sm text-white/40">{cn}</div>
              <div className="mt-3 text-xs leading-5 text-white/32">{description}</div>
            </div>
          ))}
        </motion.div>

        <WorldIngredientMap />
        <SpiritsLibrary />
        <TechniqueLibrary />
        <ExploreGraph />
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
          className="grid min-h-[70vh] place-items-center border-t border-white/18 py-24 text-center"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.36em] text-white/44">
              Preserved Recipe Archive
            </p>
            <h2 className="mt-6 text-balance text-5xl font-medium uppercase leading-none tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              231 cocktail records remain available.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              旧配方库保留为资料入口。当前主线是从世界食材、地域风味和文化关联出发，找到一杯酒的方向。
            </p>
            <a
              href="./archive-recipes.html"
              className="mt-10 inline-flex border border-white/50 px-6 py-3 font-mono text-xs uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-black"
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
