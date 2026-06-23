import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import {
  fieldNotes,
  getIngredientDetail,
  getInspirationsForRegion,
  getRegion,
  getRegionsForIngredient,
  inspirationArchive,
  WorldRegion,
  worldRegions,
} from '../data/worldIngredients';

const mapColumns = [
  { id: 'americas', label: 'Americas / 美洲' },
  { id: 'europe-africa', label: 'Europe, Africa, Middle East / 欧非中东' },
  { id: 'asia-oceania', label: 'Asia & Oceania / 亚洲与大洋洲' },
] as const;

function RegionButton({
  region,
  active,
  onSelect,
}: {
  region: WorldRegion;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect(region.id)}
      className={`group min-h-28 border p-4 text-left transition ${
        active
          ? 'border-electric bg-electric/20 text-white shadow-glow'
          : 'border-white/10 bg-white/[0.025] text-white/70 hover:border-electric/60 hover:bg-electric/10'
      }`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/42">
        {region.englishName}
      </div>
      <div className="mt-3 text-3xl font-semibold leading-none">{region.regionName}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {region.flavorProfile.slice(0, 3).map((flavor) => (
          <span key={flavor} className="border border-white/10 px-2 py-1 text-xs text-white/55">
            {flavor}
          </span>
        ))}
      </div>
    </button>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorldIngredientMap() {
  const [activeRegionId, setActiveRegionId] = useState('east-asia');
  const [activeIngredientName, setActiveIngredientName] = useState('紫苏');
  const activeRegion = getRegion(activeRegionId);
  const activeIngredient = getIngredientDetail(activeIngredientName);

  const relatedRegions = useMemo(
    () => activeRegion.linkedRegionIds.map(getRegion),
    [activeRegion.linkedRegionIds],
  );
  const ingredientRegions = getRegionsForIngredient(activeIngredient.name);
  const regionInspirations = getInspirationsForRegion(activeRegion.id);

  const handleRegionSelect = (id: string) => {
    const nextRegion = getRegion(id);
    setActiveRegionId(id);
    setActiveIngredientName(nextRegion.ingredients[0]);
  };

  return (
    <section id="world-map" className="min-h-screen border-t border-white/10 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
            World Ingredient Map / 世界食材地图
          </p>
          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-none sm:text-7xl">
            A world map for cocktail ingredients.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            从世界不同地区的食材、香料、酒类与风味结构中寻找鸡尾酒灵感。选择地区，
            再从食材、风味、当地饮品和跨地域关联继续探索。
          </p>

          <div className="mt-10 grid gap-3">
            {mapColumns.map((column) => (
              <div key={column.id} className="border border-white/10 bg-black/20 p-3">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/38">
                  {column.label}
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {worldRegions
                    .filter((region) => region.mapArea === column.id)
                    .map((region) => (
                      <RegionButton
                        key={region.id}
                        region={region}
                        active={region.id === activeRegion.id}
                        onSelect={handleRegionSelect}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeRegion.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28 }}
              className="glow-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.28em] text-electric">
                    Region archive
                  </div>
                  <h3 className="mt-4 text-5xl font-semibold leading-none">
                    {activeRegion.regionName}
                    <span className="mt-2 block text-2xl text-white/45">{activeRegion.englishName}</span>
                  </h3>
                </div>
                <div className="border border-white/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white/48">
                  {activeRegion.mapArea}
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">{activeRegion.description}</p>

              <div className="mt-8 grid gap-8 xl:grid-cols-2">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                    Representative ingredients / 代表食材
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeRegion.ingredients.map((ingredient) => (
                      <button
                        key={ingredient}
                        onClick={() => setActiveIngredientName(ingredient)}
                        className={`border px-3 py-2 text-sm transition ${
                          activeIngredientName === ingredient
                            ? 'border-electric bg-electric/20 text-white'
                            : 'border-white/10 bg-black/30 text-white/65 hover:border-electric/60'
                        }`}
                      >
                        {ingredient}
                      </button>
                    ))}
                  </div>
                </div>

                <DetailBlock title="Flavor keywords / 风味关键词" items={activeRegion.flavorProfile} />
                <DetailBlock title="Local drinks / 当地酒类与发酵饮品" items={activeRegion.localDrinks} />
                <DetailBlock title="Cocktail directions / 鸡尾酒方向" items={activeRegion.cocktailDirections} />
              </div>

              <div className="mt-8 border-l border-electric/50 pl-5 text-base leading-8 text-white/68">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Pairing logic / 推荐搭配逻辑
                </div>
                <p className="mt-3">{activeRegion.pairingLogic}</p>
              </div>

              <div className="mt-8">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Cross-region links / 跨地区风味关联
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {relatedRegions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => handleRegionSelect(region.id)}
                      className="border border-white/10 bg-black/30 p-4 text-left transition hover:border-electric/60 hover:bg-electric/10"
                    >
                      <div className="text-xl font-semibold">{region.regionName}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.16em] text-white/42">
                        {region.flavorProfile.slice(0, 3).join(' / ')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <AnimatePresence mode="wait">
              <motion.aside
                key={activeIngredient.name}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 18 }}
                transition={{ duration: 0.25 }}
                className="glow-card p-6"
              >
                <div className="font-mono text-xs uppercase tracking-[0.28em] text-electric">
                  Ingredient detail / 食材详情
                </div>
                <h3 className="mt-4 text-4xl font-semibold leading-none">{activeIngredient.name}</h3>
                <p className="mt-5 text-base leading-7 text-white/70">{activeIngredient.description}</p>
                <div className="mt-6 grid gap-5">
                  <DetailBlock title="Flavor tags / 风味标签" items={activeIngredient.flavorTags} />
                  <DetailBlock title="Base spirits / 适合基酒" items={activeIngredient.baseSpirits} />
                  <DetailBlock title="Techniques / 适合技法" items={activeIngredient.techniques} />
                  <DetailBlock title="Drink directions / 可做方向" items={activeIngredient.cocktailDirections} />
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                      Related regions / 关联地区
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ingredientRegions.map((region) => (
                        <button
                          key={region.id}
                          onClick={() => handleRegionSelect(region.id)}
                          className="border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/65 transition hover:border-electric/60"
                        >
                          {region.regionName}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.aside>
            </AnimatePresence>

            <aside className="glow-card p-6">
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-electric">
                Inspiration links / 灵感关联
              </div>
              <div className="mt-5 grid gap-3">
                {regionInspirations.slice(0, 4).map((item) => (
                  <article key={item.id} className="border border-white/10 bg-black/30 p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/42">
                      {item.category}
                    </div>
                    <h4 className="mt-2 text-xl font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-white/60">{item.description}</p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InspirationArchive() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
            Inspiration Archive / 灵感档案
          </p>
          <h2 className="mt-6 text-5xl font-semibold leading-none sm:text-7xl">
            A drink can start outside the glass.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            从音乐、摄影、旅行、植物、唱片封面和建筑进入，找到与地区、风味和鸡尾酒方向的连接。
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {inspirationArchive.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.025, duration: 0.45 }}
              className="border border-white/10 bg-white/[0.025] p-5"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-electric">
                {item.category}
              </div>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[...item.relatedFlavors, ...item.relatedRegions].slice(0, 5).map((tag) => (
                  <span key={tag} className="border border-white/10 px-2 py-1 text-xs text-white/45">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FieldNotesPreview() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.36em] text-electric">
          Field Notes / 田野笔记
        </p>
        <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-none sm:text-7xl">
          Future notes, not the main frame.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          田野笔记保留为未来模块，用来记录旅行、季节和原料观察；当前 MVP 的主入口仍然是世界食材地图。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {fieldNotes.map((note) => (
          <article key={note.id} className="glow-card p-6">
            <div className="flex flex-wrap justify-between gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/42">
              <span>{note.date}</span>
              <span>{note.weather}</span>
            </div>
            <h3 className="mt-4 text-3xl font-semibold">{note.place}</h3>
            <p className="mt-4 text-lg leading-8 text-white/70">{note.idea}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {note.ingredients.map((ingredient) => (
                <span key={ingredient} className="border border-white/10 px-2 py-1 text-sm text-white/55">
                  {ingredient}
                </span>
              ))}
            </div>
            <p className="mt-5 border-l border-electric/50 pl-4 text-sm leading-7 text-white/58">{note.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WorldIngredientMap;
