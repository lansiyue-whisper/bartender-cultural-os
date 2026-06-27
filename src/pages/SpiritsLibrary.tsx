import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { getIngredientDetail } from '../data/worldIngredients';
import { getSpirit, spirits } from '../data/spirits';

const flavorTargetMap: Record<string, string> = {
  Fresh: 'fresh',
  Citrus: 'acid',
  Tropical: 'acid',
  Berry: 'acid',
  Fruit: 'acid',
  Herbal: 'herbal',
  Tea: 'herbal',
  Floral: 'fresh',
  Botanical: 'herbal',
  Smoky: 'smoky',
  Smoke: 'smoky',
  Spice: 'smoky',
  Bitter: 'bitter',
  Coffee: 'bitter',
  Savory: 'fermented',
  Umami: 'fermented',
  Fermented: 'fermented',
  Saline: 'fermented',
  Nutty: 'bitter',
  Sweet: 'fresh',
  Coconut: 'fresh',
};

function openIngredient(name: string) {
  window.dispatchEvent(new CustomEvent('archive:select-ingredient', { detail: { name } }));
  document.getElementById('world-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openFlavor(flavor: string) {
  const flavorId = flavorTargetMap[flavor] ?? flavor.toLowerCase();
  window.dispatchEvent(new CustomEvent('archive:select-flavor', { detail: { id: flavorId } }));
  document.getElementById('flavor-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function TagButton({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="border border-white/10 bg-black/30 px-3 py-2 text-left text-sm text-white/70 transition hover:border-electric/70 hover:text-white"
    >
      {children}
    </button>
  );
}

function SpiritsLibrary() {
  const [activeSpiritId, setActiveSpiritId] = useState('gin');
  const activeSpirit = getSpirit(activeSpiritId);

  return (
    <section id="spirits-library" className="min-h-screen border-t border-white/10 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
            Spirits Library / 烈酒图书馆
          </p>
          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-none sm:text-7xl">
            Start from a spirit, then find its flavor field.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            从 Gin、Rum、Whisky、Tequila、Mezcal、Shochu、Pisco、Baijiu 等烈酒出发，找到适合的食材、风味与鸡尾酒方向。
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {spirits.map((spirit) => (
              <button
                key={spirit.id}
                onClick={() => setActiveSpiritId(spirit.id)}
                className={`min-h-28 border p-4 text-left transition ${
                  activeSpiritId === spirit.id
                    ? 'border-electric bg-electric/20 text-white shadow-glow'
                    : 'border-white/10 bg-white/[0.025] text-white/70 hover:border-electric/60 hover:bg-electric/10'
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/42">
                  {spirit.category}
                </div>
                <div className="mt-3 text-3xl font-semibold leading-none">{spirit.name}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {spirit.flavorProfile.slice(0, 3).map((flavor) => (
                    <span key={flavor} className="border border-white/10 px-2 py-1 text-xs text-white/55">
                      {flavor}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeSpirit.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="glow-card p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.28em] text-electric">
                  Spirit Profile / 烈酒档案
                </div>
                <h3 className="mt-4 text-5xl font-semibold leading-none">{activeSpirit.name}</h3>
                <div className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-white/42">
                  {activeSpirit.category} / {activeSpirit.origin}
                </div>
              </div>
              <span className="border border-electric/50 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-electric">
                {activeSpirit.relatedRegions.length} regions
              </span>
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{activeSpirit.description}</p>

            <div className="mt-8 grid gap-8 xl:grid-cols-2">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Flavor Profile / 风味结构
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSpirit.flavorProfile.map((flavor) => (
                    <span key={flavor} className="border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70">
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Best Pairing Flavors / 适配风味
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSpirit.bestPairingFlavors.map((flavor) => (
                    <TagButton key={flavor} onClick={() => openFlavor(flavor)}>
                      {flavor}
                    </TagButton>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Best Ingredients / 适配食材
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSpirit.bestIngredients.map((ingredient) => {
                    const detail = getIngredientDetail(ingredient);
                    return (
                      <TagButton key={ingredient} onClick={() => openIngredient(ingredient)}>
                        {detail.name} / {detail.englishName}
                      </TagButton>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Suitable Techniques / 适合技法
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSpirit.suitableTechniques.map((technique) => (
                    <span key={technique} className="border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70">
                      {technique}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Cocktail Directions / 鸡尾酒方向
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSpirit.cocktailDirections.map((direction) => (
                    <span key={direction} className="border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70">
                      {direction}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Related Regions / 关联地区
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSpirit.relatedRegions.map((region) => (
                    <span key={region} className="border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default SpiritsLibrary;
