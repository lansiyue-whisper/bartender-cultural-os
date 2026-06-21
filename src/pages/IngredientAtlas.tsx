import { motion } from 'framer-motion';
import NodeDetailPanel from '../components/NodeDetailPanel';
import { ingredientProfiles } from '../data/ingredients';
import { getKnowledgeNode, knowledgeNodes } from '../data/knowledgeGraph';
import { useArchiveStore } from '../store/useArchiveStore';

const specimenNodeIds: Record<string, string> = {
  Shiso: 'shiso',
  Tarragon: 'tarragon',
  Sage: 'sage',
  Houttuynia: 'houttuynia',
  Waxberry: 'waxberry',
  'White Bitter Melon': 'white-bitter-melon',
};

function IngredientAtlas() {
  const selectedId = useArchiveStore((state) => state.selectedKnowledgeNodeId) ?? 'shiso';
  const setSelectedId = useArchiveStore((state) => state.setSelectedKnowledgeNodeId);
  const selectedNode = knowledgeNodes.some((node) => node.id === selectedId)
    ? getKnowledgeNode(selectedId)
    : getKnowledgeNode('shiso');

  return (
    <section className="min-h-screen border-t border-white/10 py-24">
      <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
            Ingredient Atlas / Herbarium
          </p>
          <h2 className="mt-6 text-5xl font-semibold leading-none sm:text-7xl">
            A botanical archive for drink memory.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          The atlas now behaves like a specimen room. Each ingredient keeps its sensory writing,
          pairing logic, cocktail cases, and graph relationships in one place.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {ingredientProfiles.map((ingredient, index) => {
            const nodeId = specimenNodeIds[ingredient.english] ?? 'shiso';
            const active = selectedNode.id === nodeId;

            return (
              <motion.button
                key={ingredient.name}
                onClick={() => setSelectedId(nodeId)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.04, duration: 0.55 }}
                className={`relative min-h-[460px] overflow-hidden border p-6 text-left transition ${
                  active
                    ? 'border-electric bg-electric/10 shadow-glow'
                    : 'border-white/10 bg-white/[0.025] hover:border-electric/50'
                }`}
              >
                <div className="absolute right-6 top-6 h-28 w-16 border border-white/10">
                  <div className="mx-auto mt-5 h-20 w-px bg-herb/70" />
                  <div className="absolute left-5 top-11 h-8 w-5 -rotate-45 rounded-[100%] border border-herb/70" />
                  <div className="absolute right-4 top-16 h-7 w-5 rotate-45 rounded-[100%] border border-herb/60" />
                </div>

                <div className="font-mono text-xs uppercase tracking-[0.24em] text-herb">
                  specimen / {ingredient.english}
                </div>
                <h3 className="mt-5 max-w-[70%] text-4xl font-semibold">{ingredient.name}</h3>
                <p className="mt-8 min-h-28 text-lg leading-8 text-white/72">{ingredient.description}</p>

                <div className="my-7 h-px bg-gradient-to-r from-electric via-herb to-transparent" />

                <div className="grid gap-5 text-sm text-muted">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-electric">
                      Pairings
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {ingredient.pairings.map((pairing) => (
                        <span key={pairing} className="border border-white/10 px-2 py-1">
                          {pairing}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-electric">
                      Spirits
                    </span>
                    <p className="mt-2">{ingredient.spirits.join(' / ')}</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-electric">
                      Cocktail cases
                    </span>
                    <p className="mt-2">{ingredient.cocktails.join(' / ')}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="sticky top-8 self-start">
          <NodeDetailPanel node={selectedNode} onSelect={setSelectedId} eyebrow="Specimen graph" />
        </div>
      </div>
    </section>
  );
}

export default IngredientAtlas;
