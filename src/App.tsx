import { motion } from 'framer-motion';
import AmbientToggle from './components/AmbientToggle';
import CocktailGenome from './pages/CocktailGenome';
import FlavorMap from './pages/FlavorMap';
import HomeFlavorUniverse from './pages/HomeFlavorUniverse';
import IngredientAtlas from './pages/IngredientAtlas';
import Laboratory from './pages/Laboratory';

const sections = [
  ['01', 'Flavor Universe'],
  ['02', 'Flavor Map'],
  ['03', 'Ingredient Atlas'],
  ['04', 'Cocktail Genome'],
  ['05', 'Laboratory'],
  ['06', 'Recipe Archive'],
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
          {sections.map(([number, label]) => (
            <div key={number} className="min-h-24 border-white/10 md:border-r md:pr-4">
              <div className="font-mono text-xs text-electric">{number}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.2em] text-white/70">{label}</div>
            </div>
          ))}
        </motion.div>

        <FlavorMap />
        <IngredientAtlas />
        <CocktailGenome />
        <Laboratory />

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
              231 cocktail records are still here.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              The original static recipe database has been preserved as a local archive while this
              prototype explores a cultural interface for discovery.
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
