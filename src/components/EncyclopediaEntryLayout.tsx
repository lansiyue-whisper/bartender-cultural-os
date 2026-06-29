import type { ReactNode } from 'react';
import type { EncyclopediaEntry, EntryFlavorWheel } from '../data/encyclopediaEntries';

const wheelItems: Array<[keyof EntryFlavorWheel, string]> = [
  ['fresh', 'Fresh / 清爽'],
  ['acidity', 'Acidity / 酸度'],
  ['sweetness', 'Sweetness / 甜度'],
  ['bitterness', 'Bitterness / 苦度'],
  ['floral', 'Floral / 花香'],
  ['herbal', 'Herbal / 草本'],
  ['savory', 'Umami / Savory'],
  ['intensity', 'Intensity / 强度'],
  ['persistence', 'Persistence / 留香'],
];

const fieldLabelZh: Record<string, string> = {
  Fresh: '新鲜使用',
  Cordial: '风味酸甜液',
  Shrub: '醋酸果饮',
  Infusion: '浸泡萃取',
  Syrup: '糖浆',
  Fermentation: '发酵',
  Clarification: '澄清',
  'Milk Punch': '牛奶澄清潘趣',
  Foam: '泡沫',
  Salt: '盐',
  Powder: '粉末',
  Oil: '油脂香气',
  Taste: '味觉',
  Aroma: '香气',
  Texture: '质感',
  Intensity: '强度',
  Acidity: '酸度',
  Sweetness: '甜度',
  Bitterness: '苦度',
  Persistence: '留香',
  'How Bartenders Use It': '调酒师如何使用',
  'Classic Uses': '经典用法',
  'Modern Uses': '现代用法',
  'Typical Cocktail Structures': '典型鸡尾酒结构',
  'Best Ingredients': '最佳食材',
  'Best Spirits': '最佳烈酒',
  'Best Techniques': '最佳技法',
  'Best Flavor Families': '最佳风味家族',
  'Best Cocktail Structures': '最佳鸡尾酒结构',
  'Avoid Pairings': '避免搭配',
  'Similar Ingredients': '相似食材',
  Alternatives: '替代食材',
  'Seasonal Alternatives': '季节替代',
  'Where It Is Used': '使用地区',
  'Traditional Cuisine': '传统饮食语境',
  'Cocktail Culture': '鸡尾酒文化语境',
  Books: '书籍',
  Research: '研究与测试',
  'Industry Notes': '行业笔记',
};

function bilingualLabel(label: string) {
  return fieldLabelZh[label] ? `${label} / ${fieldLabelZh[label]}` : label;
}

function EntrySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-white/10 pt-6">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">{title}</div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function TextList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <p key={item} className="border border-white/10 bg-black/30 px-4 py-3 text-sm leading-7 text-white/68">
          {item}
        </p>
      ))}
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70">
          {item}
        </span>
      ))}
    </div>
  );
}

function FieldGrid({ fields }: { fields: Array<[string, string | string[]]> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {fields.map(([label, value]) => (
        <div key={label} className="border border-white/10 bg-black/30 p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
            {bilingualLabel(label)}
          </div>
          {Array.isArray(value) ? (
            <div className="mt-3">
              <TagList items={value} />
            </div>
          ) : (
            <p className="mt-3 text-sm leading-7 text-white/68">{value}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function EntryFlavorWheel({ wheel }: { wheel: EntryFlavorWheel }) {
  return (
    <div className="grid gap-3">
      {wheelItems.map(([key, label]) => (
        <div key={key} className="grid grid-cols-[7rem_1fr_2rem] items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">{label}</span>
          <div className="h-2 overflow-hidden bg-white/10">
            <div className="h-full bg-electric shadow-glow" style={{ width: `${wheel[key] * 20}%` }} />
          </div>
          <span className="font-mono text-xs text-white/55">{wheel[key]}/5</span>
        </div>
      ))}
    </div>
  );
}

function PreparationGrid({ entry }: { entry: EncyclopediaEntry }) {
  return (
    <FieldGrid
      fields={[
        ['Fresh', entry.preparation.fresh],
        ['Cordial', entry.preparation.cordial],
        ['Shrub', entry.preparation.shrub],
        ['Infusion', entry.preparation.infusion],
        ['Syrup', entry.preparation.syrup],
        ['Fermentation', entry.preparation.fermentation],
        ['Clarification', entry.preparation.clarification],
        ['Milk Punch', entry.preparation.milkPunch],
        ['Foam', entry.preparation.foam],
        ['Salt', entry.preparation.salt],
        ['Powder', entry.preparation.powder],
        ['Oil', entry.preparation.oil],
      ]}
    />
  );
}

function EncyclopediaEntryLayout({ entry }: { entry: EncyclopediaEntry }) {
  return (
    <article className="space-y-8">
      <div className="grid gap-6 xl:grid-cols-[1fr_14rem]">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.28em] text-electric">
            Encyclopedia Entry / 百科条目
          </div>
          <h3 className="mt-4 text-4xl font-semibold leading-none">{entry.hero.name}</h3>
          <div className="mt-3 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
            <span className="border border-white/10 px-2 py-1">{entry.hero.englishName}</span>
            <span className="border border-white/10 px-2 py-1">{entry.hero.category}</span>
            <span className="border border-white/10 px-2 py-1">{entry.type}</span>
          </div>
          <p className="mt-5 text-base leading-7 text-white/72">{entry.hero.summary}</p>
        </div>

        <div
          aria-label={entry.hero.imageAlt}
          className="min-h-48 border border-white/10 bg-black/40 p-4"
          style={{
            background:
              `radial-gradient(circle at 50% 42%, ${entry.hero.imageTone}55, transparent 4.4rem), ` +
              `linear-gradient(145deg, ${entry.hero.imageTone}22, transparent 58%), rgba(0,0,0,0.4)`,
          }}
        >
          <div className="h-full min-h-40 border border-white/10">
            <div className="mx-auto mt-8 h-24 w-px" style={{ backgroundColor: entry.hero.imageTone }} />
            <div
              className="mx-auto -mt-10 h-16 w-16 rounded-full border"
              style={{ borderColor: entry.hero.imageTone }}
            />
            <div className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/38">
              specimen image / 标本图像
            </div>
          </div>
        </div>
      </div>

      <EntrySection title="Overview / 概览">
        <TextList items={[entry.overview.what, entry.overview.importance, entry.overview.bartenderUse]} />
      </EntrySection>

      <EntrySection title="Flavor Profile / 风味档案">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <EntryFlavorWheel wheel={entry.flavorProfile.wheel} />
          <FieldGrid
            fields={[
              ['Taste', entry.flavorProfile.taste],
              ['Aroma', entry.flavorProfile.aroma],
              ['Texture', entry.flavorProfile.texture],
              ['Intensity', entry.flavorProfile.intensity],
              ['Acidity', entry.flavorProfile.acidity],
              ['Sweetness', entry.flavorProfile.sweetness],
              ['Bitterness', entry.flavorProfile.bitterness],
              ['Persistence', entry.flavorProfile.persistence],
            ]}
          />
        </div>
      </EntrySection>

      <EntrySection title="Applications / 调酒应用">
        <FieldGrid
          fields={[
            ['How Bartenders Use It', entry.applications.howBartendersUseIt],
            ['Classic Uses', entry.applications.classicUses],
            ['Modern Uses', entry.applications.modernUses],
            ['Typical Cocktail Structures', entry.applications.typicalCocktailStructures],
          ]}
        />
      </EntrySection>

      <EntrySection title="Pairings / 搭配">
        <FieldGrid
          fields={[
            ['Best Ingredients', entry.pairings.bestIngredients],
            ['Best Spirits', entry.pairings.bestSpirits],
            ['Best Techniques', entry.pairings.bestTechniques],
            ['Best Flavor Families', entry.pairings.bestFlavorFamilies],
            ['Best Cocktail Structures', entry.pairings.bestCocktailStructures],
            ['Avoid Pairings', entry.pairings.avoidPairings],
          ]}
        />
      </EntrySection>

      <EntrySection title="Preparation / 处理方式">
        <PreparationGrid entry={entry} />
      </EntrySection>

      <EntrySection title="Similar / 相似与替代">
        <FieldGrid
          fields={[
            ['Similar Ingredients', entry.similar.similarIngredients],
            ['Alternatives', entry.similar.alternatives],
            ['Seasonal Alternatives', entry.similar.seasonalAlternatives],
          ]}
        />
      </EntrySection>

      <EntrySection title="Regions / 地域语境">
        <FieldGrid
          fields={[
            ['Where It Is Used', entry.regions.whereUsed],
            ['Traditional Cuisine', entry.regions.traditionalCuisine],
            ['Cocktail Culture', entry.regions.cocktailCulture],
          ]}
        />
      </EntrySection>

      <EntrySection title="References / 参考">
        <FieldGrid
          fields={[
            ['Books', entry.references.books],
            ['Research', entry.references.research],
            ['Industry Notes', entry.references.industryNotes],
          ]}
        />
      </EntrySection>
    </article>
  );
}

export default EncyclopediaEntryLayout;
