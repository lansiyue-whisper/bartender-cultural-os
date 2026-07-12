import { useMemo, useState } from 'react';
import { cocktails } from '../data/cocktails';
import { atlasIngredients, getAtlasIngredientByName } from '../data/flavorAtlas';
import { getIngredientDetail, ingredientDetails } from '../data/worldIngredients';

const ingredientAliases: Record<string, string[]> = {
  柚子: ['Yuzu', '柚子'],
  紫苏: ['Shiso', 'Perilla', '紫苏'],
  乌龙茶: ['Oolong Tea', 'Oolong', '乌龙茶'],
  梅子: ['Ume', 'Plum', '梅子'],
  山椒: ['Sansho', '山椒'],
  米曲: ['Koji', '米曲'],
  味噌: ['Miso', '味噌'],
  昆布: ['Kombu', '昆布'],
  樱花: ['Sakura', '樱花'],
  焙茶: ['Hojicha', '焙茶'],
  白桃: ['White Peach', 'Peach', '白桃'],
  黑芝麻: ['Black Sesame', 'Sesame', '黑芝麻'],
  桂花: ['Osmanthus', '桂花'],
  斑斓: ['Pandan', '斑斓', '班兰'],
  香茅: ['Lemongrass', '香茅'],
  青柠: ['Lime', '青柠', '青柠汁'],
  罗望子: ['Tamarind', '罗望子'],
  椰子: ['Coconut', '椰子', '椰奶', '椰子水'],
  姜: ['Ginger', '姜', '生姜'],
  芒果: ['Mango', '芒果'],
  玫瑰水: ['Rose', 'Rose Water', '玫瑰水'],
  石榴: ['Pomegranate', '石榴'],
  咖啡: ['Coffee', 'Espresso', '咖啡', '浓缩咖啡'],
  可可: ['Cacao', 'Cocoa', 'Chocolate', '可可'],
  蜂蜜: ['Honey', '蜂蜜', '蜂蜜糖浆'],
  薄荷: ['Mint', '薄荷'],
  菠萝: ['Pineapple', '菠萝', '凤梨'],
  百香果: ['Passionfruit', '百香果'],
  番石榴: ['Guava', '番石榴'],
  接骨木花: ['Elderflower', '接骨木花'],
  迷迭香: ['Rosemary', '迷迭香'],
  橄榄: ['Olive', '橄榄'],
};

const structureTemplates: Record<string, { method: string; ratio: string; note: string }> = {
  Highball: {
    method: '兑和 / Build',
    ratio: '45 ml base spirit + 15 ml ingredient cordial/syrup + soda top',
    note: '适合先测试香气清晰度，酸甜不要太重。',
  },
  Sour: {
    method: '摇合 / Shake',
    ratio: '45 ml base spirit + 25 ml acid + 15 ml sweetener + ingredient modifier',
    note: '适合测试酸甜平衡和中段风味。',
  },
  Fizz: {
    method: '摇合后补气泡 / Shake + Top',
    ratio: '45 ml base spirit + 20 ml acid + 15 ml syrup + soda top',
    note: '适合花香、草本、柑橘和轻盈水果。',
  },
  Collins: {
    method: '摇合后补气泡 / Shake + Top',
    ratio: '45 ml base spirit + 25 ml citrus + 15 ml ingredient syrup + soda top',
    note: '适合做成长饮，服务速度快。',
  },
  Spritz: {
    method: '兑和 / Build',
    ratio: '45 ml wine/vermouth/sake + 20 ml ingredient cordial + bubbles',
    note: '适合低酒精和餐前酒方向。',
  },
  Martini: {
    method: '搅拌 / Stir',
    ratio: '50 ml spirit + 10-15 ml vermouth/sake + ingredient infusion or brine',
    note: '适合咸感、草本、茶感、花香。',
  },
  Daiquiri: {
    method: '摇合 / Shake',
    ratio: '50 ml rum + 20 ml lime/acid + 15 ml ingredient syrup',
    note: '适合热带水果、香料、糖类食材。',
  },
  Margarita: {
    method: '摇合 / Shake',
    ratio: '50 ml tequila/mezcal + 20 ml citrus + 15 ml ingredient syrup/cordial',
    note: '适合柑橘、热带水果、辣椒和罗望子。',
  },
  Paloma: {
    method: '兑和 / Build',
    ratio: '45 ml tequila + 15 ml ingredient cordial + grapefruit soda',
    note: '适合草本、柑橘、盐感和清爽水果。',
  },
  Negroni: {
    method: '搅拌 / Stir',
    ratio: '30 ml spirit + 30 ml bitter + 30 ml vermouth + ingredient accent',
    note: '适合咖啡、可可、石榴、茶和香料。',
  },
  'Old Fashioned': {
    method: '搅拌 / Stir',
    ratio: '50 ml aged spirit + 5-10 ml ingredient syrup + bitters',
    note: '适合坚果、香料、糖类、烘焙和烟熏风味。',
  },
};

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function expandQuery(query: string) {
  const normalized = normalize(query);
  const aliasHit = Object.entries(ingredientAliases).find(([name, aliases]) =>
    [name, ...aliases].some((alias) => normalize(alias) === normalized),
  );
  if (aliasHit) return Array.from(new Set([aliasHit[0], ...aliasHit[1]])).map(normalize);
  return [normalized];
}

function itemMatches(item: string, terms: string[]) {
  const normalized = normalize(item);
  return terms.some((term) => normalized.includes(term) || term.includes(normalized));
}

function getStructure(direction: string) {
  return Object.keys(structureTemplates).find((structure) => direction.includes(structure)) ?? 'Highball';
}

function IngredientRecipeFinder() {
  const [query, setQuery] = useState('紫苏');
  const searchTerms = useMemo(() => expandQuery(query), [query]);

  const matchedIngredient = useMemo(() => {
    const cleanedQuery = query.trim();
    const worldHit = ingredientDetails.find((ingredient) =>
      [ingredient.name, ingredient.englishName].some((name) => itemMatches(name, searchTerms)),
    );
    const atlasHit = atlasIngredients.find((ingredient) =>
      [ingredient.name, ingredient.englishName].some((name) => itemMatches(name, searchTerms)),
    );
    return {
      world: worldHit ?? (cleanedQuery && !atlasHit ? getIngredientDetail(cleanedQuery) : undefined),
      atlas: atlasHit ?? (worldHit ? getAtlasIngredientByName(worldHit.englishName) : undefined),
    };
  }, [query, searchTerms]);

  const matchedCocktails = useMemo(
    () =>
      cocktails.filter((cocktail) =>
        [...cocktail.ingredients, ...cocktail.bases, ...cocktail.flavorTags].some((item) => itemMatches(item, searchTerms)),
      ),
    [searchTerms],
  );

  const directions = useMemo(() => {
    const worldDirections = matchedIngredient.world?.cocktailDirections ?? [];
    const atlasDirections = matchedIngredient.atlas?.cocktailIdeas ?? [];
    return Array.from(new Set([...worldDirections, ...atlasDirections])).slice(0, 8);
  }, [matchedIngredient]);

  const spirits = matchedIngredient.atlas?.spirits ?? matchedIngredient.world?.suitableSpirits ?? [];
  const techniques = matchedIngredient.atlas?.techniques ?? matchedIngredient.world?.techniques ?? [];
  const pairings = matchedIngredient.atlas?.pairings ?? matchedIngredient.world?.relatedIngredients.pairings ?? [];

  return (
    <section className="mt-10 max-w-6xl border-y border-white/10 py-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.32em] text-electric">
            Ingredient to Recipe / 食材找配方
          </div>
          <h2 className="mt-4 text-4xl font-semibold leading-none text-white sm:text-5xl">
            输入一个食材，马上得到可做的酒。
          </h2>
          <p className="mt-5 text-base leading-7 text-white/58">
            适合吧台研发和服务前快速判断：先看完整配方，再看可执行的研发方向。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['紫苏', '柚子', '咖啡', '椰子', '青柠', '蜂蜜'].map((item) => (
              <button
                key={item}
                onClick={() => setQuery(item)}
                className="border border-white/10 px-3 py-2 text-sm text-white/55 transition hover:border-electric/60 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/38">
              Search ingredient / 输入食材
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="例如：紫苏 / Yuzu / 咖啡 / Coconut"
              className="mt-3 w-full border border-electric/40 bg-black/50 px-5 py-4 text-2xl text-white outline-none transition placeholder:text-white/24 focus:border-electric focus:shadow-glow"
            />
          </label>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="border border-white/10 bg-black/30 p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">Best Spirits / 适合基酒</div>
              <p className="mt-3 text-sm leading-6 text-white/68">{spirits.slice(0, 5).join(' / ') || '输入食材后显示'}</p>
            </div>
            <div className="border border-white/10 bg-black/30 p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">Techniques / 适合技法</div>
              <p className="mt-3 text-sm leading-6 text-white/68">{techniques.slice(0, 5).join(' / ') || '输入食材后显示'}</p>
            </div>
            <div className="border border-white/10 bg-black/30 p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">Pair With / 可搭配</div>
              <p className="mt-3 text-sm leading-6 text-white/68">{pairings.slice(0, 5).join(' / ') || '输入食材后显示'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_1fr]">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.24em] text-electric">
            Full recipe matches / 完整配方匹配
          </div>
          <div className="mt-4 grid gap-3">
            {matchedCocktails.length ? (
              matchedCocktails.slice(0, 4).map((cocktail) => (
                <article key={cocktail.id} className="border border-white/10 bg-white/[0.025] p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold">{cocktail.name}</h3>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">
                        {cocktail.category} / {cocktail.method}
                      </p>
                    </div>
                    <div className="text-sm text-white/48">{cocktail.flavorTags.join(' / ')}</div>
                  </div>
                  <div className="mt-4 grid gap-2">
                    {cocktail.recipe.map((item) => (
                      <div key={`${cocktail.id}-${item.name}`} className="flex justify-between border-b border-white/10 py-2 text-sm">
                        <span className="text-white/68">{item.name}</span>
                        <span className="text-white/42">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                  <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm leading-6 text-white/55">
                    {cocktail.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </article>
              ))
            ) : (
              <div className="border border-white/10 bg-black/30 p-5 text-sm leading-7 text-white/52">
                没有找到完整经典配方。下面给出可执行的研发方向。
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-[0.24em] text-electric">
            Development directions / 研发配方方向
          </div>
          <div className="mt-4 grid gap-3">
            {directions.slice(0, 5).map((direction, index) => {
              const structure = getStructure(direction);
              const template = structureTemplates[structure];
              return (
                <article key={direction} className="border border-white/10 bg-black/30 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/36">
                    {index === 0 ? 'Best first test / 首轮测试' : 'R&D direction / 研发方向'}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold">{direction}</h3>
                  <div className="mt-4 grid gap-3 text-sm leading-6">
                    <p className="text-white/62">
                      <span className="text-electric">Method / 方法：</span>
                      {template.method}
                    </p>
                    <p className="text-white/62">
                      <span className="text-electric">Starter ratio / 起始比例：</span>
                      {template.ratio}
                    </p>
                    <p className="text-white/45">{template.note}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IngredientRecipeFinder;
