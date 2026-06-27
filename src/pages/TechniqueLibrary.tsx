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

const techniqueNameZh: Record<string, string> = {
  Cordial: '风味酸甜液',
  Shrub: '醋酸果饮基底',
  Infusion: '浸泡萃取',
  'Fat Wash': '脂洗',
  'Milk Punch': '牛奶澄清潘趣',
  Clarification: '澄清',
  Fermentation: '发酵',
  Carbonation: '气泡化',
  Syrup: '糖浆',
  'Oil Extraction': '油脂香气萃取',
  Foam: '泡沫',
  'Sous Vide': '低温慢煮萃取',
  'Salt Solution': '盐溶液',
  'Acid Adjustment': '酸度校准',
  'Rotovap / Distillation': '旋转蒸发 / 蒸馏',
};

const techniqueDescriptionZh: Record<string, string> = {
  cordial:
    'Cordial 适合处理香气强但新鲜度不稳定的食材，让柑橘、草本、花香与水果变成稳定、可复现的鸡尾酒构件。',
  shrub:
    'Shrub 把水果、草本和香料转化成带醋酸张力的酸味基底，适合在不完全依赖柑橘的情况下增加酸度、质感和尾韵。',
  infusion:
    '浸泡萃取用于把香气、苦味、颜色或辛香转移到液体基底中，适合个性清晰且接触时间可控的食材。',
  'fat-wash':
    '脂洗通过脂溶性风味给烈酒加入香气、圆润度和质感，尤其适合坚果、乳制品、芝麻、油脂和烘焙类食材。',
  'milk-punch':
    'Milk Punch 能澄清、柔化并拉长酒体，适合茶、热带水果、香料、坚果、乳制品和烘焙风味。',
  clarification:
    '澄清用于去除果肉、浑浊物或不稳定固形物，同时保留可读的风味，适合追求精确、稳定和结构感的酒谱。',
  fermentation:
    '发酵能创造酸度、野性、二氧化碳、鲜味和活性的复杂度，适合水果、谷物、根茎、茶和咸鲜食材。',
  carbonation:
    '气泡化能提升香气、速度和口感，适合干净酸度、茶感、花香、矿物感和草本结构。',
  syrup:
    '糖浆是稳定甜度和承载风味的基础技法，适合香料、花香、烘焙风味和需要温和萃取的食材。',
  'oil-extraction':
    '油脂香气萃取用于捕捉柑橘皮、草本、香料或坚果中的芳香油，适合让香气在第一口之前先出现。',
  foam:
    '泡沫把香气从酒体中分离出来放到鼻腔前端，适合需要漂浮在酒体上方的花香、茶感、香料和水果香气。',
  'sous-vide':
    '低温慢煮萃取通过可控热度处理香料、茶、草本和水果，适合需要稳定批量生产且避免过度萃取的酒吧。',
  'salt-solution':
    '盐溶液能提亮水果、压低苦味并延长咸鲜深度，是调酒中非常实用的微调工具。',
  'acid-adjustment':
    '酸度校准能让低酸水果、茶或花香食材具备鸡尾酒酸度结构，适合在保留原有香气的同时建立 Sour 框架。',
  'rotovap-distillation':
    '旋转蒸发或蒸馏用于捕捉挥发性香气，同时去掉颜色、苦味和固形物，适合需要透明、干净香气的概念型酒谱。',
};

const shelfLifeZh: Record<string, string> = {
  cordial: '根据糖酸平衡，冷藏约 1-3 周',
  shrub: '冷藏约 2-6 周',
  infusion: '根据基底、水分和固形物，数天到数周',
  'fat-wash': '细滤后冷藏约 1-2 周',
  'milk-punch': '澄清干净后冷藏约 2-4 周',
  clarification: '根据酸度、糖度和卫生条件，约 3-10 天',
  fermentation: '变化很大，受时间、温度和控制条件影响，可从数天到数月',
  carbonation: '气泡化后最好当天使用',
  syrup: '根据糖度和操作方式，约 1-4 周',
  'oil-extraction': '根据方法和氧化情况，数天到 2 周',
  foam: '最好现做现用',
  'sous-vide': '类似浸泡基底，通常为数天到数周',
  'salt-solution': '干净冷藏可保存数周',
  'acid-adjustment': '根据果汁和处理方式，约 1-7 天',
  'rotovap-distillation': '干净蒸馏液可保存数周到数月',
};

const notesZh: Record<string, string> = {
  cordial: '糖和酸要可测量。Cordial 应该保存香气，而不是把所有饮品都变成柠檬水。',
  shrub: '醋酸是结构，不是主体。一定要在稀释后品尝，因为尖锐感会在成品里快速变化。',
  infusion: '短时间萃取往往更干净。茶、咖啡和草本很容易变苦。',
  'fat-wash': '要完全冷冻并耐心过滤。残留脂肪会压暗香气，也会缩短保存时间。',
  'milk-punch': '凝乳前先完成平衡。Milk Punch 会修饰粗糙感，但也可能削弱太纤细的高音香气。',
  clarification: '澄清不是目的本身，只有当它改善质感和稳定性时才值得使用。',
  fermentation: '记录时间、温度、pH 和卫生条件。发酵是过程，不是装饰。',
  carbonation: '所有液体先冷却再充气。温热液体吸收气体差，口感也会更扁。',
  syrup: '糖浆不应该只是甜，它必须在酒里有明确的风味理由。',
  'oil-extraction': '芳香油强度很高，适合用滴数、喷雾或标准批量控制，而不是随手倒。',
  foam: '泡沫应该增加香气和质感，而不是遮住一个没完成的酒体。',
  'sous-vide': '可控热度依然是热度。细腻花香和新鲜草本需要更低温或更短时间。',
  'salt-solution': '用滴数控制。盐应该让酒更清晰，而不是让人明显喝到咸。',
  'acid-adjustment': '不要只尝原液，要在稀释后的鸡尾酒结构中判断酸度。',
  'rotovap-distillation': '需要合适设备和食品安全流程。蒸馏是制作方法，不是捷径。',
};

const difficultyZh: Record<string, string> = {
  Easy: '基础',
  Medium: '中等',
  Advanced: '进阶',
};

const flavorZh: Record<string, string> = {
  Acid: '酸感',
  Bitter: '苦感',
  Citrus: '柑橘',
  Coffee: '咖啡',
  Fermented: '发酵',
  Floral: '花香',
  Fresh: '清爽',
  Fruit: '果香',
  Herbal: '草本',
  Nutty: '坚果',
  Roasted: '烘焙',
  Savory: '咸鲜',
  Smoke: '烟熏',
  Spice: '香料',
  Sweet: '甜感',
  Tea: '茶感',
  Tropical: '热带',
};

const spiritZh: Record<string, string> = {
  Gin: '金酒',
  Vodka: '伏特加',
  Rum: '朗姆',
  Shochu: '烧酒',
  Tequila: '龙舌兰',
  Brandy: '白兰地',
  Whisky: '威士忌',
  Mezcal: '梅斯卡尔',
  Pisco: '皮斯科',
  Sake: '清酒',
  Baijiu: '白酒',
};

const directionTermsZh: Record<string, string> = {
  Yuzu: '柚子',
  Rose: '玫瑰',
  Lemongrass: '香茅',
  Lemon: '柠檬',
  Myrtle: '桃金娘',
  Tamarind: '罗望子',
  Ume: '梅子',
  Pomegranate: '石榴',
  Cranberry: '蔓越莓',
  Shiso: '紫苏',
  Oolong: '乌龙茶',
  Coffee: '咖啡',
  Rosemary: '迷迭香',
  Sesame: '芝麻',
  Pistachio: '开心果',
  Miso: '味噌',
  Macadamia: '澳洲坚果',
  Pandan: '斑斓',
  Cacao: '可可',
  Mango: '芒果',
  Lassi: '拉西',
  Clarified: '澄清',
  Guava: '番石榴',
  Coconut: '椰子',
  Beetroot: '甜菜根',
  Koji: '米曲',
  Fermented: '发酵',
  Ginger: '姜',
  Elderflower: '接骨木花',
  Soda: '苏打',
  Osmanthus: '桂花',
  Maple: '枫糖',
  Cardamom: '豆蔻',
  Saffron: '藏红花',
  Oil: '油脂香气',
  Sansho: '山椒',
  Foam: '泡沫',
  Passionfruit: '百香果',
  Yogurt: '酸奶',
  Vanilla: '香草',
  Fig: '无花果',
  Saline: '盐水',
  Kombu: '昆布',
  Savory: '咸鲜',
  Daiquiri: 'Daiquiri',
  Martini: 'Martini',
  Highball: 'Highball',
  Fizz: 'Fizz',
  Collins: 'Collins',
  Spritz: 'Spritz',
  Sour: 'Sour',
  Margarita: 'Margarita',
  Tonic: 'Tonic',
  Negroni: 'Negroni',
  Paloma: 'Paloma',
  Distilled: '蒸馏',
  Clear: '透明',
  Eucalyptus: '尤加利',
};

function openIngredient(name: string) {
  window.dispatchEvent(new CustomEvent('archive:select-ingredient', { detail: { name } }));
  document.getElementById('world-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openFlavor(flavor: string) {
  const flavorKey = flavor.split('/')[0].trim();
  const flavorId = flavorTargetMap[flavorKey] ?? flavorKey.toLowerCase();
  window.dispatchEvent(new CustomEvent('archive:select-flavor', { detail: { id: flavorId } }));
  document.getElementById('flavor-map')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openSpirit(spirit: string) {
  const spiritKey = spirit.split('/')[0].trim();
  const spiritId = spiritTargetMap[spiritKey] ?? spiritKey.toLowerCase();
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

function bilingualFlavor(flavor: string) {
  return flavorZh[flavor] ? `${flavor} / ${flavorZh[flavor]}` : flavor;
}

function bilingualSpirit(spirit: string) {
  return spiritZh[spirit] ? `${spirit} / ${spiritZh[spirit]}` : spirit;
}

function bilingualDirection(direction: string) {
  const zh = direction
    .split(' ')
    .map((part) => directionTermsZh[part] ?? part)
    .join(' ');
  return zh === direction ? direction : `${direction} / ${zh}`;
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
                  {technique.difficulty} / {difficultyZh[technique.difficulty]}
                </div>
                <div className="mt-3 text-3xl font-semibold leading-none">{technique.name}</div>
                <div className="mt-2 text-sm text-white/45">{techniqueNameZh[technique.name]}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {technique.bestForFlavors.slice(0, 3).map((flavor) => (
                    <span key={flavor} className="border border-white/10 px-2 py-1 text-xs text-white/55">
                      {bilingualFlavor(flavor)}
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
                <div className="mt-3 text-2xl text-white/45">{techniqueNameZh[activeTechnique.name]}</div>
              </div>
              <span className="border border-electric/50 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-electric">
                {activeTechnique.difficulty} / {difficultyZh[activeTechnique.difficulty]}
              </span>
            </div>

            <div className="mt-6 max-w-3xl space-y-3 text-lg leading-8 text-white/68">
              <p>{activeTechnique.description}</p>
              <p className="text-white/55">{techniqueDescriptionZh[activeTechnique.id]}</p>
            </div>

            <div className="mt-8 grid gap-8 xl:grid-cols-2">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Shelf Life / 保存时间
                </div>
                <p className="mt-3 border border-white/10 bg-black/30 px-3 py-2 text-sm leading-6 text-white/70">
                  {activeTechnique.shelfLife}
                  <span className="mt-1 block text-white/45">{shelfLifeZh[activeTechnique.id]}</span>
                </p>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Difficulty / 难度
                </div>
                <p className="mt-3 border border-white/10 bg-black/30 px-3 py-2 text-sm leading-6 text-white/70">
                  {activeTechnique.difficulty}
                  <span className="ml-2 text-white/45">/ {difficultyZh[activeTechnique.difficulty]}</span>
                </p>
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Best For Ingredients / 适合食材
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeTechnique.bestForIngredients.map((ingredient) => {
                    const detail = getIngredientDetail(ingredient);
                    return (
                      <TagButton key={ingredient} onClick={() => openIngredient(ingredient)}>
                        {detail.englishName} / {detail.name}
                      </TagButton>
                    );
                  })}
                </div>
              </div>

              <DetailTags
                title="Best For Flavors / 适合风味"
                items={activeTechnique.bestForFlavors.map(bilingualFlavor)}
                onSelect={(flavor) => openFlavor(flavor)}
              />

              <DetailTags
                title="Suitable Spirits / 适合烈酒"
                items={activeTechnique.suitableSpirits.map(bilingualSpirit)}
                onSelect={(spirit) => openSpirit(spirit)}
              />

              <DetailTags
                title="Cocktail Directions / 可延伸鸡尾酒方向"
                items={activeTechnique.cocktailDirections.map(bilingualDirection)}
              />

              <div className="xl:col-span-2">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-electric">
                  Notes / 注意事项
                </div>
                <p className="mt-3 border border-white/10 bg-black/30 px-4 py-3 text-sm leading-7 text-white/68">
                  {activeTechnique.notes}
                  <span className="mt-2 block text-white/48">{notesZh[activeTechnique.id]}</span>
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
