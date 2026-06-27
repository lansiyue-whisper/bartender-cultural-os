import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { techniques, getTechnique } from '../data/techniques';
import { getIngredientDetail } from '../data/worldIngredients';

const flavorTargetMap: Record<string, string> = {
  Fresh: 'fresh',
  Citrus: 'acid',
  Acid: 'acid',
  Tropical: 'acid',
  Fruit: 'acid',
  Herbal: 'herbal',
  Tea: 'herbal',
  Floral: 'fresh',
  Smoke: 'smoky',
  Smoky: 'smoky',
  Spice: 'smoky',
  Roasted: 'bitter',
  Bitter: 'bitter',
  Coffee: 'bitter',
  Nutty: 'bitter',
  Sweet: 'fresh',
  Savory: 'fermented',
  Umami: 'fermented',
  Fermented: 'fermented',
};

const spiritTargetMap: Record<string, string> = {
  Gin: 'gin',
  Rum: 'rum',
  Whisky: 'whisky',
  Tequila: 'tequila',
  Mezcal: 'mezcal',
  Vodka: 'vodka',
  Brandy: 'brandy',
  Pisco: 'pisco',
  'Cachaça': 'cachaca',
  Shochu: 'shochu',
  Sake: 'sake',
  Baijiu: 'baijiu',
  Aquavit: 'aquavit',
  Arrack: 'arrack',
  Amaro: 'amaro',
  Vermouth: 'vermouth',
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

function openSpirit(spirit: string) {
  const spiritId = spiritTargetMap[spirit] ?? spirit.toLowerCase();
  window.dispatchEvent(new CustomEvent('archive:select-spirit', { detail: { id: spiritId } }));
  document.getElementById('spirits-library')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

function DetailTags({
  title,
  items,
  onSelect,
}: {
  title: string;
  items: string[];
  onSelect?: (item: string) => void;
}) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <TagButton key={item} onClick={onSelect ? () => onSelect(item) : undefined}>
            {item}
          </TagButton>
        ))}
      </div>
    </div>
  );
}

function TechniqueLibrary() {
  const [activeTechniqueId, setActiveTechniqueId] = useState('cordial');
  const activeTechnique = getTechnique(activeTechniqueId);

  return (
    <section id="technique-library" className="min-h-screen border-t border-white/10 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
            Technique Library / 调酒技法图书馆
          </p>
          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-none sm:text-7xl">
            Start from a technique, then decide what to transform.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            从 Cordial、Shrub、Infusion、Clarification、Milk Punch 等技法出发，找到适合处理的食材和鸡尾酒方向。
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {techniques.map((technique) => (
              <button
                key={technique.id}
                onClick={() => setActiveTechniqueId(technique.id)}
                className={`min-h-28 border p-4 text-left transition ${
                  activeTechniqueId === technique.id
                    ? 'border-electric bg-electric/20 text-white shadow-glow'
                    : 'border-white/10 bg-white/[0.025] text-white/70 hover:border-electric/60 hover:bg-electric/10'
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/42">
                  {technique.difficulty} / {technique.shelfLife.split(' ')[0]}
                </div>
                <div className="mt-3 text-3xl font-semibold leading-none">{technique.name}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {technique.bestForFlavors.slice(0, 3).map((flavor) => (
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
            key={activeTechnique.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="glow-card p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.28em] text-electric">
                  Technique Profile / 技法档案
                </div>
                <h3 className="mt-4 text-5xl font-semibold leading-none">{activeTechnique.name}</h3>
              </div>
              <span className="border border-electric/50 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-electric">
                {activeTechnique.difficulty}
              </span>
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{activeTechnique.description}</p>

            <div className="mt-8 grid gap-8 xl:grid-cols-2">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Shelf Life / 保存时间
                </div>
                <p className="mt-3 border border-white/10 bg-black/30 px-3 py-2 text-sm leading-6 text-white/70">
                  {activeTechnique.shelfLife}
                </p>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Difficulty / 难度
                </div>
                <p className="mt-3 border border-white/10 bg-black/30 px-3 py-2 text-sm leading-6 text-white/70">
                  {activeTechnique.difficulty}
                </p>
              </div>

              <DetailTags
                title="Best For Ingredients / 适合食材"
                items={activeTechnique.bestForIngredients}
                onSelect={(ingredient) => openIngredient(ingredient)}
              />

              <DetailTags
                title="Best For Flavors / 适合风味"
                items={activeTechnique.bestForFlavors}
                onSelect={(flavor) => openFlavor(flavor)}
              />

              <DetailTags
                title="Suitable Spirits / 适合烈酒"
                items={activeTechnique.suitableSpirits}
                onSelect={(spirit) => openSpirit(spirit)}
              />

              <DetailTags title="Cocktail Directions / 可延伸鸡尾酒方向" items={activeTechnique.cocktailDirections} />

              <div className="xl:col-span-2">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Notes / 注意事项
                </div>
                <p className="mt-3 border border-white/10 bg-black/30 px-4 py-3 text-sm leading-7 text-white/68">
                  {activeTechnique.notes}
                </p>
              </div>

              <div className="xl:col-span-2">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Ingredient Preview / 食材预览
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {activeTechnique.bestForIngredients.slice(0, 3).map((ingredient) => {
                    const detail = getIngredientDetail(ingredient);
                    return (
                      <button
                        key={ingredient}
                        onClick={() => openIngredient(ingredient)}
                        className="border border-white/10 bg-black/30 p-4 text-left transition hover:border-electric/60"
                      >
                        <div className="text-xl font-semibold">{detail.name}</div>
                        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                          {detail.englishName} / {detail.category}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default TechniqueLibrary;
