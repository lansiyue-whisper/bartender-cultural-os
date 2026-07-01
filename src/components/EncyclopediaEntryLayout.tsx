import type { ReactNode } from 'react';
import type { EncyclopediaEntry, EntryFlavorWheel } from '../data/encyclopediaEntries';

const wheelItems: Array<[keyof EntryFlavorWheel, string]> = [
  ['fresh', 'Fresh / 清爽'],
  ['acidity', 'Acidity / 酸度'],
  ['sweetness', 'Sweetness / 甜度'],
  ['bitterness', 'Bitterness / 苦度'],
  ['floral', 'Floral / 花香'],
  ['herbal', 'Herbal / 草本'],
  ['savory', 'Umami / Savory / 鲜味'],
  ['intensity', 'Intensity / 强度'],
  ['persistence', 'Persistence / 留香'],
];

const preparationLabels: Array<[keyof EncyclopediaEntry['preparation'], string]> = [
  ['fresh', 'Fresh / 新鲜使用'],
  ['cordial', 'Cordial / 风味酸甜液'],
  ['shrub', 'Shrub / 醋酸果饮'],
  ['infusion', 'Infusion / 浸泡萃取'],
  ['syrup', 'Syrup / 糖浆'],
  ['fermentation', 'Fermentation / 发酵'],
  ['clarification', 'Clarification / 澄清'],
  ['milkPunch', 'Milk Punch / 牛奶澄清潘趣'],
  ['foam', 'Foam / 泡沫'],
  ['salt', 'Salt / 盐'],
  ['powder', 'Powder / 粉末'],
  ['oil', 'Oil / 油脂香气'],
];

function splitBilingual(text: string) {
  const [english, chinese] = text.split(' / ');
  return { english: english.trim(), chinese: chinese?.trim() };
}

function Kicker({ children }: { children: string }) {
  return <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-electric">{children}</div>;
}

function ProseBlock({ text, large = false }: { text: string; large?: boolean }) {
  const { english, chinese } = splitBilingual(text);
  return (
    <div className="max-w-3xl">
      <p className={large ? 'text-2xl leading-10 text-white/84' : 'text-lg leading-8 text-white/74'}>{english}</p>
      {chinese ? <p className="mt-3 text-base leading-8 text-white/52">{chinese}</p> : null}
    </div>
  );
}

function TagCloud({ items, quiet = false }: { items: string[]; quiet?: boolean }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      {items.map((item) => (
        <span
          key={item}
          className={
            quiet
              ? 'border-b border-white/18 pb-1 text-sm leading-6 text-white/55'
              : 'border border-white/10 bg-black/20 px-3 py-2 text-sm leading-6 text-white/70'
          }
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function EditorialSection({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-8 border-t border-white/10 py-14 lg:grid-cols-[10rem_1fr]">
      <div className="lg:sticky lg:top-8 lg:self-start">
        <div className="font-mono text-xs uppercase tracking-[0.28em] text-white/32">{number}</div>
        <h4 className="mt-4 text-3xl font-semibold leading-none text-white">{title}</h4>
        <p className="mt-3 text-sm leading-6 text-white/42">{subtitle}</p>
      </div>
      <div>{children}</div>
    </section>
  );
}

function EntryImage({ entry }: { entry: EncyclopediaEntry }) {
  return (
    <figure
      aria-label={entry.hero.imageAlt}
      className="relative min-h-[24rem] overflow-hidden border-y border-white/10"
      style={{
        background:
          `radial-gradient(circle at 24% 34%, ${entry.hero.imageTone}77, transparent 10rem), ` +
          `radial-gradient(circle at 72% 48%, ${entry.hero.imageTone}30, transparent 18rem), ` +
          `linear-gradient(120deg, rgba(255,255,255,0.08), transparent 38%), rgba(0,0,0,0.58)`,
      }}
    >
      <div className="absolute inset-0 opacity-35 archive-grid" />
      <div className="absolute left-[14%] top-[18%] h-64 w-px" style={{ backgroundColor: entry.hero.imageTone }} />
      <div
        className="absolute left-[calc(14%-3rem)] top-[34%] h-24 w-24 rounded-full border"
        style={{ borderColor: entry.hero.imageTone }}
      />
      <div
        className="absolute bottom-10 right-8 h-28 w-28 rounded-full border opacity-60"
        style={{ borderColor: entry.hero.imageTone }}
      />
      <figcaption className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.28em] text-white/42">
        specimen study / 标本研究
      </figcaption>
    </figure>
  );
}

function EntryFlavorWheel({ wheel }: { wheel: EntryFlavorWheel }) {
  return (
    <div className="grid gap-4">
      {wheelItems.map(([key, label]) => (
        <div key={key} className="grid grid-cols-[7.5rem_1fr_2rem] items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">{label}</span>
          <div className="h-px bg-white/12">
            <div className="h-px bg-electric shadow-glow" style={{ width: `${wheel[key] * 20}%` }} />
          </div>
          <span className="font-mono text-xs text-white/52">{wheel[key]}/5</span>
        </div>
      ))}
    </div>
  );
}

function PullQuote({ text }: { text: string }) {
  const { english, chinese } = splitBilingual(text);
  return (
    <aside className="my-12 border-l border-electric pl-6">
      <p className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{english}</p>
      {chinese ? <p className="mt-4 text-xl leading-8 text-white/48">{chinese}</p> : null}
    </aside>
  );
}

function EncyclopediaEntryLayout({ entry }: { entry: EncyclopediaEntry }) {
  const leadTags = [entry.hero.category, entry.type, ...entry.pairings.bestFlavorFamilies.slice(0, 3)];
  const story = [entry.overview.what, entry.overview.importance, entry.overview.bartenderUse];
  const tastingNotes: Array<[string, string[]]> = [
    ['Taste / 味觉', entry.flavorProfile.taste],
    ['Aroma / 香气', entry.flavorProfile.aroma],
    ['Texture / 质感', entry.flavorProfile.texture],
  ];
  const structureLine = entry.applications.typicalCocktailStructures.slice(0, 4).join('  ·  ');

  return (
    <article className="overflow-hidden bg-black/10 text-white">
      <header className="px-0 pb-10">
        <Kicker>Encyclopedia Entry / 百科条目</Kicker>
        <h3 className="mt-6 max-w-4xl text-6xl font-semibold leading-[0.92] tracking-normal sm:text-8xl">
          {entry.hero.name}
        </h3>
        <div className="mt-5 text-2xl text-white/45">{entry.hero.englishName}</div>
        <div className="mt-8 max-w-2xl">
          <ProseBlock text={entry.hero.summary} large />
        </div>
        <div className="mt-8">
          <TagCloud items={leadTags} quiet />
        </div>
      </header>

      <EntryImage entry={entry} />

      <EditorialSection number="01" title="Story" subtitle="What it does in a glass / 它在杯中负责什么">
        <div className="space-y-10">
          <ProseBlock text={story[0]} large />
          <div className="grid gap-8 xl:grid-cols-[1fr_0.86fr]">
            <div className="space-y-8">
              <ProseBlock text={story[1]} />
              <ProseBlock text={story[2]} />
            </div>
            <PullQuote text={entry.overview.importance} />
          </div>
        </div>
      </EditorialSection>

      <EditorialSection number="02" title="Flavor" subtitle="Read the ingredient before mixing / 先读懂风味">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <EntryFlavorWheel wheel={entry.flavorProfile.wheel} />
            <div className="mt-10 grid gap-5 border-t border-white/10 pt-8">
              {[entry.flavorProfile.intensity, entry.flavorProfile.acidity, entry.flavorProfile.persistence].map((item) => (
                <ProseBlock key={item} text={item} />
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {tastingNotes.map(([label, items]) => (
              <div key={label}>
                <Kicker>{label}</Kicker>
                <div className="mt-4">
                  <TagCloud items={items} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection number="03" title="Application" subtitle="From idea to cocktail structure / 从想法到酒型">
        <div className="space-y-10">
          <div className="border-y border-white/10 py-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-electric">
              Typical cocktail structures / 典型鸡尾酒结构
            </div>
            <p className="mt-5 text-4xl font-semibold leading-tight text-white/90">{structureLine}</p>
          </div>
          <div className="grid gap-8 xl:grid-cols-3">
            {entry.applications.howBartendersUseIt.map((item) => (
              <ProseBlock key={item} text={item} />
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Kicker>Classic Uses / 经典用法</Kicker>
              <div className="mt-4">
                <TagCloud items={entry.applications.classicUses} quiet />
              </div>
            </div>
            <div>
              <Kicker>Modern Uses / 现代用法</Kicker>
              <div className="mt-4">
                <TagCloud items={entry.applications.modernUses} quiet />
              </div>
            </div>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection number="04" title="Preparation" subtitle="Choose a format, not a gimmick / 选择处理格式">
        <div className="divide-y divide-white/10 border-y border-white/10">
          {preparationLabels.map(([key, label], index) => (
            <div key={key} className="grid gap-5 py-6 md:grid-cols-[3rem_12rem_1fr]">
              <div className="font-mono text-xs text-white/28">{String(index + 1).padStart(2, '0')}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">{label}</div>
              <ProseBlock text={entry.preparation[key]} />
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection number="05" title="Pairings" subtitle="What it wants beside it / 它适合和谁站在一起">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Kicker>Best Ingredients / 最佳食材</Kicker>
            <div className="mt-5">
              <TagCloud items={entry.pairings.bestIngredients} />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <Kicker>Best Spirits / 最佳烈酒</Kicker>
              <div className="mt-4">
                <TagCloud items={entry.pairings.bestSpirits} quiet />
              </div>
            </div>
            <div>
              <Kicker>Best Techniques / 最佳技法</Kicker>
              <div className="mt-4">
                <TagCloud items={entry.pairings.bestTechniques} quiet />
              </div>
            </div>
            <div>
              <Kicker>Avoid Pairings / 避免搭配</Kicker>
              <div className="mt-4">
                <TagCloud items={entry.pairings.avoidPairings} quiet />
              </div>
            </div>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection number="06" title="Related Entries" subtitle="Where to continue reading / 继续探索">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Kicker>Similar / 相似</Kicker>
            <div className="mt-4">
              <TagCloud items={entry.similar.similarIngredients} />
            </div>
          </div>
          <div>
            <Kicker>Alternatives / 替代</Kicker>
            <div className="mt-4">
              <TagCloud items={entry.similar.alternatives} />
            </div>
          </div>
          <div>
            <Kicker>Regions / 地域</Kicker>
            <div className="mt-4">
              <TagCloud items={entry.regions.whereUsed} />
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <Kicker>Traditional Cuisine / 传统饮食</Kicker>
            <div className="mt-4">
              <TagCloud items={entry.regions.traditionalCuisine} quiet />
            </div>
          </div>
          <div>
            <Kicker>Cocktail Culture / 鸡尾酒文化</Kicker>
            <div className="mt-4">
              <TagCloud items={entry.regions.cocktailCulture} quiet />
            </div>
          </div>
          <div>
            <Kicker>References / 参考</Kicker>
            <div className="mt-4">
              <TagCloud items={[...entry.references.books, ...entry.references.industryNotes.slice(0, 1)]} quiet />
            </div>
          </div>
        </div>
      </EditorialSection>
    </article>
  );
}

export default EncyclopediaEntryLayout;
