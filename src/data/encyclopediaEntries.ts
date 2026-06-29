import { atlasIngredients, type AtlasIngredient } from './flavorAtlas';

export type EntryType = 'ingredient' | 'spirit' | 'technique' | 'flavor' | 'structure';

export type EntryFlavorWheel = {
  fresh: number;
  acidity: number;
  sweetness: number;
  bitterness: number;
  floral: number;
  herbal: number;
  savory: number;
  intensity: number;
  persistence: number;
};

export type EncyclopediaEntry = {
  id: string;
  type: EntryType;
  hero: {
    name: string;
    englishName: string;
    category: string;
    summary: string;
    imageAlt: string;
    imageTone: string;
  };
  overview: {
    what: string;
    importance: string;
    bartenderUse: string;
  };
  flavorProfile: {
    wheel: EntryFlavorWheel;
    taste: string[];
    aroma: string[];
    texture: string[];
    intensity: string;
    acidity: string;
    sweetness: string;
    bitterness: string;
    persistence: string;
  };
  applications: {
    howBartendersUseIt: string[];
    classicUses: string[];
    modernUses: string[];
    typicalCocktailStructures: string[];
  };
  pairings: {
    bestIngredients: string[];
    bestSpirits: string[];
    bestTechniques: string[];
    bestFlavorFamilies: string[];
    bestCocktailStructures: string[];
    avoidPairings: string[];
  };
  preparation: {
    fresh: string;
    cordial: string;
    shrub: string;
    infusion: string;
    syrup: string;
    fermentation: string;
    clarification: string;
    milkPunch: string;
    foam: string;
    salt: string;
    powder: string;
    oil: string;
  };
  similar: {
    similarIngredients: string[];
    alternatives: string[];
    seasonalAlternatives: string[];
  };
  regions: {
    whereUsed: string[];
    traditionalCuisine: string[];
    cocktailCulture: string[];
  };
  references: {
    books: string[];
    research: string[];
    industryNotes: string[];
  };
};

const categoryTraits: Record<
  string,
  {
    role: string;
    taste: string[];
    aroma: string[];
    texture: string[];
    classicUses: string[];
    modernUses: string[];
    avoid: string[];
    cuisine: string[];
    culture: string[];
    wheel: Partial<EntryFlavorWheel>;
    tone: string;
  }
> = {
  Citrus: {
    role: 'a bright acid and aroma driver that gives a drink lift before sweetness becomes heavy',
    taste: ['bright acid', 'zest bitterness', 'clean freshness'],
    aroma: ['volatile citrus oil', 'white flower lift', 'peel sparkle'],
    texture: ['lean', 'fast', 'mouthwatering'],
    classicUses: ['sours', 'collins', 'daisies', 'highballs'],
    modernUses: ['acid-adjusted cordials', 'carbonated highballs', 'clear citrus stocks'],
    avoid: ['heavy cream without acid balance', 'over-oaked spirits without dilution', 'muddy herb infusions'],
    cuisine: ['preserved citrus', 'fresh garnish', 'acid seasoning'],
    culture: ['highball programs', 'martini modifiers', 'low-sugar sour builds'],
    wheel: { fresh: 5, acidity: 5, sweetness: 2, bitterness: 3, floral: 3, persistence: 4 },
    tone: '#2f7dff',
  },
  Berry: {
    role: 'a fruit-acid bridge that brings color, perfume and a soft tart center',
    taste: ['red fruit acidity', 'jammy sweetness', 'skin tannin'],
    aroma: ['fresh berries', 'floral skins', 'cool fruit pulp'],
    texture: ['juicy', 'soft', 'slightly pulpy'],
    classicUses: ['cobblers', 'fizzes', 'brandy sours', 'spritzes'],
    modernUses: ['shrubs', 'clarified berry punches', 'fermented berry sodas'],
    avoid: ['excess vanilla sweetness', 'flat warm dilution', 'very bitter amaro without fruit support'],
    cuisine: ['preserves', 'summer fruit desserts', 'cold sauces'],
    culture: ['seasonal spritzes', 'clear punches', 'aperitif berry drinks'],
    wheel: { fresh: 4, acidity: 4, sweetness: 4, bitterness: 2, floral: 3, persistence: 3 },
    tone: '#6e4dff',
  },
  'Stone Fruit': {
    role: 'a rounded fruit note that can soften strong spirits while keeping a fragrant core',
    taste: ['ripe fruit', 'kernel warmth', 'gentle acidity'],
    aroma: ['orchard fruit', 'blossom', 'almond-like pit note'],
    texture: ['round', 'silky', 'fleshy'],
    classicUses: ['brandy sours', 'cobblers', 'smashes', 'spritzes'],
    modernUses: ['lacto fruit cordials', 'clarified stone-fruit highballs', 'pit-kernel infusions'],
    avoid: ['too much smoke', 'thin soda without aroma support', 'sharp vinegar levels'],
    cuisine: ['poached fruit', 'pickles', 'stone-fruit preserves'],
    culture: ['brandy cocktails', 'sake highballs', 'summer aperitif drinks'],
    wheel: { fresh: 3, acidity: 3, sweetness: 4, bitterness: 2, floral: 4, persistence: 3 },
    tone: '#ff6f91',
  },
  'Tropical Fruit': {
    role: 'a high-aroma fruit source that can make rum, agave and pisco structures feel immediate',
    taste: ['ripe sweetness', 'tropical acid', 'lush fruit'],
    aroma: ['ripe pulp', 'green peel', 'sun-warmed fruit'],
    texture: ['lush', 'pulpy', 'generous'],
    classicUses: ['daiquiris', 'punches', 'tiki drinks', 'pisco sours'],
    modernUses: ['clarified tropical milk punches', 'fermented fruit sodas', 'frozen low-waste builds'],
    avoid: ['excess syrup', 'uncontrolled puree thickness', 'delicate vermouth as the only backbone'],
    cuisine: ['fresh fruit', 'chutneys', 'street juices'],
    culture: ['rum punches', 'agave sours', 'high-acid tropical aperitifs'],
    wheel: { fresh: 4, acidity: 4, sweetness: 5, bitterness: 1, floral: 3, persistence: 4 },
    tone: '#00a878',
  },
  Herbs: {
    role: 'a green aromatic layer that can sharpen a drink without adding more acid or sugar',
    taste: ['green bitterness', 'cool freshness', 'savory edge'],
    aroma: ['cut stem', 'leaf oil', 'garden spice'],
    texture: ['dry', 'lifted', 'slender'],
    classicUses: ['smashes', 'martinis', 'juleps', 'gin fizzes'],
    modernUses: ['rapid infusions', 'herbal oils', 'carbonated herb highballs'],
    avoid: ['long warm maceration', 'muddy sugar-heavy builds', 'over-shaking tender leaves'],
    cuisine: ['fresh garnish', 'herb sauces', 'aromatic seasoning'],
    culture: ['botanical gin drinks', 'agave herb sours', 'savory martinis'],
    wheel: { fresh: 5, acidity: 2, sweetness: 1, bitterness: 3, herbal: 5, savory: 3, persistence: 4 },
    tone: '#56d364',
  },
  Flowers: {
    role: 'a perfume layer that can make a drink feel expansive when sweetness and dilution are restrained',
    taste: ['delicate sweetness', 'soft bitterness', 'petal-like lift'],
    aroma: ['fresh petals', 'honeyed perfume', 'tea-like florality'],
    texture: ['soft', 'airy', 'silky'],
    classicUses: ['champagne cocktails', 'martinis', 'collins', 'spritzes'],
    modernUses: ['flower cordials', 'aromatic foams', 'clear floral distillates'],
    avoid: ['heavy spice loads', 'excess sugar', 'hot extraction that turns soapy'],
    cuisine: ['flower syrups', 'tea service', 'dessert aromatics'],
    culture: ['aperitif drinks', 'martini riffs', 'low-abv floral highballs'],
    wheel: { fresh: 3, acidity: 2, sweetness: 3, bitterness: 2, floral: 5, herbal: 2, persistence: 4 },
    tone: '#b66dff',
  },
  Spices: {
    role: 'a structural accent that adds heat, depth and aromatic punctuation in very small doses',
    taste: ['warming spice', 'dry bitterness', 'sweet heat'],
    aroma: ['volatile spice oil', 'bark and seed', 'warm kitchen air'],
    texture: ['drying', 'warming', 'persistent'],
    classicUses: ['old fashioneds', 'punches', 'tiki drinks', 'mulled serves'],
    modernUses: ['controlled sous-vide extraction', 'spice tinctures', 'salted spice syrups'],
    avoid: ['unmeasured long infusions', 'delicate flowers', 'low-acid fruit without contrast'],
    cuisine: ['spice blends', 'marinades', 'warm desserts'],
    culture: ['rum drinks', 'whisky cocktails', 'agave spice sours'],
    wheel: { fresh: 1, acidity: 1, sweetness: 3, bitterness: 3, herbal: 2, savory: 4, intensity: 5, persistence: 5 },
    tone: '#ff8a3d',
  },
};

const defaultTrait = {
  role: 'a flexible flavor material that helps bartenders connect place, technique and structure',
  taste: ['balanced flavor', 'clear identity', 'structural detail'],
  aroma: ['recognizable aroma', 'gentle lift', 'layered finish'],
  texture: ['balanced', 'readable', 'stable'],
  classicUses: ['highballs', 'sours', 'spritzes', 'punches'],
  modernUses: ['cordials', 'infusions', 'clarified builds'],
  avoid: ['flat sweetness', 'unclear dilution', 'overly busy pairings'],
  cuisine: ['regional cooking', 'preserved preparations', 'seasonal service'],
  culture: ['ingredient-led menus', 'regional cocktail mapping', 'development tastings'],
  wheel: { fresh: 3, acidity: 3, sweetness: 3, bitterness: 2, floral: 2, herbal: 2, savory: 2, intensity: 3, persistence: 3 },
  tone: '#2f7dff',
};

const categoryAliases: Record<string, keyof typeof categoryTraits> = {
  Tea: 'Herbs',
  Coffee: 'Spices',
  Chocolate: 'Spices',
  Nuts: 'Spices',
};

const structureFallbacks = ['Highball', 'Sour', 'Fizz', 'Collins', 'Spritz'];
const flavorFamilies = ['Fresh', 'Acid', 'Sweet', 'Floral', 'Herbal', 'Umami / Savory'];
const referenceBooks = [
  'The Flavor Bible',
  'Liquid Intelligence',
  'The Oxford Companion to Spirits and Cocktails',
  'The Drunken Botanist',
  'The Art of Fermentation',
];

const categoryRoleZh: Record<string, string> = {
  Citrus: '明亮的酸度与香气驱动器，在甜感变重之前先把酒体提亮',
  Berry: '连接果酸、颜色与柔软浆果香气的桥梁',
  'Stone Fruit': '圆润的果香核心，能柔化烈酒同时保留香气辨识度',
  'Tropical Fruit': '高香气水果材料，能让朗姆、龙舌兰与皮斯科结构更直接',
  Herbs: '绿色芳香层，不增加糖酸也能让酒体变得更锐利',
  Flowers: '香气扩散层，在甜度和稀释受控时能让酒变得更开阔',
  Spices: '少量即可提供温度、深度与香气标点的结构型材料',
};

const termZh: Record<string, string> = {
  Acid: '酸感',
  'acid seasoning': '酸味调味',
  'acid-adjusted cordials': '酸度校准 Cordial',
  'agave herb sours': '龙舌兰草本 Sour',
  'agave spice sours': '龙舌兰香料 Sour',
  'aperitif berry drinks': '浆果餐前酒',
  'aperitif drinks': '餐前酒',
  'aromatic foams': '芳香泡沫',
  'aromatic seasoning': '芳香调味',
  'balanced flavor': '平衡风味',
  Bitter: '苦感',
  Botanical: '植物香',
  'botanical gin drinks': '植物香金酒饮品',
  'brandy cocktails': '白兰地鸡尾酒',
  'brandy sours': '白兰地 Sour',
  'bark and seed': '树皮与种子香',
  'carbonated herb highballs': '气泡草本 Highball',
  'carbonated highballs': '气泡 Highball',
  'champagne cocktails': '香槟鸡尾酒',
  'clear citrus stocks': '透明柑橘基底',
  'clear floral distillates': '透明花香蒸馏液',
  'clear identity': '清晰辨识度',
  'clear punches': '澄清 Punch',
  'cobblers': 'Cobbler',
  'cold sauces': '冷酱与果酱',
  'collins': 'Collins',
  'controlled sous-vide extraction': '可控低温萃取',
  'cool fruit pulp': '冷感果肉香',
  'cool freshness': '清凉新鲜感',
  'cordials': 'Cordial 风味酸甜液',
  'daisies': 'Daisy',
  'dark dilution': '深色稀释感',
  'delicate sweetness': '细腻甜感',
  'development tastings': '研发试饮',
  'dry bitterness': '干燥苦感',
  'drying': '收敛干感',
  'fast': '快速展开',
  Fermented: '发酵感',
  Fizz: 'Fizz',
  Floral: '花香',
  'flower cordials': '花香 Cordial',
  'flower syrups': '花香糖浆',
  'food-like finish': '带餐食感的尾韵',
  Fresh: '清爽',
  'fresh berries': '新鲜浆果',
  'fresh fruit': '新鲜水果',
  'fresh garnish': '新鲜装饰',
  'fresh petals': '新鲜花瓣',
  Fruit: '果香',
  'garden spice': '花园香料感',
  'gentle acidity': '柔和酸度',
  'gentle lift': '轻柔上扬感',
  'green bitterness': '绿色苦感',
  'green peel': '青皮香',
  'high-acid tropical aperitifs': '高酸热带餐前酒',
  Herbal: '草本',
  'herb sauces': '草本酱汁',
  'herbal oils': '草本油',
  'highballs': 'Highball',
  'highball programs': 'Highball 酒单',
  'honeyed perfume': '蜂蜜般花香',
  'ingredient-led menus': '食材主导酒单',
  'infusions': '浸泡萃取',
  'jammy sweetness': '果酱甜感',
  'juleps': 'Julep',
  'kernel warmth': '果核温暖感',
  'layered finish': '层次尾韵',
  'leaf oil': '叶片芳香油',
  'lean': '轻盈瘦长',
  'lacto fruit cordials': '乳酸水果 Cordial',
  'long warm maceration': '长时间温热浸泡',
  'low-abv floral highballs': '低酒精花香 Highball',
  'low-sugar sour builds': '低糖 Sour 结构',
  'martini modifiers': 'Martini 调整元素',
  'martini riffs': 'Martini 变奏',
  'martinis': 'Martini',
  'mouthwatering': '生津感',
  'mulled serves': '热香料酒型',
  'orchard fruit': '果园水果香',
  'petal-like lift': '花瓣般上扬感',
  'pit-kernel infusions': '果核浸泡',
  'poached fruit': '炖煮水果',
  'preserved citrus': '腌渍柑橘',
  'preserved preparations': '保存型处理',
  'regional cocktail mapping': '地域鸡尾酒映射',
  'regional cooking': '地域料理',
  'ripe fruit': '成熟水果',
  'ripe pulp': '成熟果肉香',
  'ripe sweetness': '成熟甜感',
  'rum drinks': '朗姆饮品',
  'rum punches': '朗姆 Punch',
  'sake highballs': '清酒 Highball',
  'savory edge': '咸鲜边缘',
  Savory: '咸鲜',
  'seasonal aperitif drinks': '季节性餐前酒',
  'seasonal service': '季节服务',
  'seasonal spritzes': '季节 Spritz',
  'sharp vinegar levels': '过尖锐醋酸',
  'skin tannin': '果皮单宁',
  'smashes': 'Smash',
  'soft': '柔软',
  'soft bitterness': '柔和苦感',
  'spice blends': '复合香料',
  'spice tinctures': '香料酊剂',
  Spice: '香料',
  'spritzes': 'Spritz',
  'stone-fruit preserves': '核果果酱',
  'structural detail': '结构细节',
  Sweet: '甜感',
  'sweet heat': '甜暖辛香',
  'tea service': '茶饮服务',
  Tea: '茶感',
  'tea-like florality': '茶感花香',
  'thin soda without aroma support': '缺少香气支撑的单薄苏打',
  'tiki drinks': 'Tiki 饮品',
  Tropical: '热带',
  'volatile citrus oil': '挥发性柑橘油',
  'volatile spice oil': '挥发性香料油',
  'warm desserts': '温热甜点',
  'warm kitchen air': '温热厨房香气',
  'warming': '温暖',
  'warming spice': '温暖香料',
  'white flower lift': '白花上扬感',
  'whisky cocktails': '威士忌鸡尾酒',
  'zest bitterness': '果皮苦感',
  Highball: '海波',
  Sour: '酸酒',
  Collins: '柯林斯',
  Spritz: '气泡餐前酒',
  Martini: '马天尼',
  Negroni: '尼格罗尼',
  'Old Fashioned': '古典',
  Daiquiri: '代基里',
  Margarita: '玛格丽特',
  Paloma: '帕洛玛',
  Punch: '潘趣',
  Swizzle: '碎冰搅拌酒',
  'Milk Punch': '牛奶澄清潘趣',
  Clarified: '澄清酒型',
  Frozen: '冰沙酒型',
  Tiki: 'Tiki',
  'Tea Cocktail': '茶鸡尾酒',
  'Coffee Cocktail': '咖啡鸡尾酒',
  'Low ABV': '低酒精',
  'No ABV': '无酒精',
  Gin: '金酒',
  Vodka: '伏特加',
  Tequila: '龙舌兰',
  Shochu: '烧酒',
  Sake: '清酒',
  Rum: '朗姆',
  Whisky: '威士忌',
  Brandy: '白兰地',
  'Sparkling Wine': '起泡酒',
  Pisco: '皮斯科',
  'Cachaça': '卡莎萨',
  Arrack: '阿拉克',
  Aquavit: '阿夸维特',
  Mezcal: '梅斯卡尔',
  Baijiu: '白酒',
  Vermouth: '味美思',
  Amaro: '阿玛罗',
  Cordial: '风味酸甜液',
  Shrub: '醋酸果饮',
  'Oil Extraction': '油脂香气萃取',
  'Acid Adjustment': '酸度校准',
  Carbonation: '气泡化',
  Syrup: '糖浆',
  Clarification: '澄清',
  Fermentation: '发酵',
  Foam: '泡沫',
  Infusion: '浸泡萃取',
  'Sous Vide': '低温慢煮',
  'Fat Wash': '脂洗',
  'Salt Solution': '盐溶液',
  'Rotovap / Distillation': '旋转蒸发 / 蒸馏',
  'East Asia': '东亚',
  'Southeast Asia': '东南亚',
  'South Asia': '南亚',
  'Middle East': '中东',
  Mediterranean: '地中海',
  Nordic: '北欧',
  'Latin America': '拉丁美洲',
  Caribbean: '加勒比',
  Africa: '非洲',
  Oceania: '大洋洲',
  'Eastern Europe': '东欧',
  'North America': '北美',
  Spring: '春季',
  Summer: '夏季',
  Autumn: '秋季',
  Winter: '冬季',
  'All Year': '全年',
};

function valueFromProfile(profile: string[], terms: string[], fallback: number) {
  return profile.some((item) => terms.includes(item)) ? Math.min(5, fallback + 1) : fallback;
}

function buildWheel(ingredient: AtlasIngredient): EntryFlavorWheel {
  const trait = categoryTraits[categoryAliases[ingredient.category] ?? ingredient.category] ?? defaultTrait;
  return {
    fresh: valueFromProfile(ingredient.flavorProfile, ['Fresh', 'Citrus', 'Tea'], trait.wheel.fresh ?? 3),
    acidity: valueFromProfile(ingredient.flavorProfile, ['Acid', 'Citrus', 'Fermented'], trait.wheel.acidity ?? 3),
    sweetness: valueFromProfile(ingredient.flavorProfile, ['Sweet', 'Fruit', 'Tropical'], trait.wheel.sweetness ?? 3),
    bitterness: valueFromProfile(ingredient.flavorProfile, ['Bitter', 'Coffee', 'Roasted'], trait.wheel.bitterness ?? 2),
    floral: valueFromProfile(ingredient.flavorProfile, ['Floral'], trait.wheel.floral ?? 2),
    herbal: valueFromProfile(ingredient.flavorProfile, ['Herbal', 'Tea'], trait.wheel.herbal ?? 2),
    savory: valueFromProfile(ingredient.flavorProfile, ['Savory', 'Umami', 'Saline', 'Fermented'], trait.wheel.savory ?? 2),
    intensity: trait.wheel.intensity ?? 3,
    persistence: trait.wheel.persistence ?? 3,
  };
}

function readableList(items: string[]) {
  return items.slice(0, 3).join(', ');
}

function zhTerm(term: string) {
  return termZh[term] ?? term;
}

function bilingualTerm(term: string) {
  const zh = zhTerm(term);
  return zh === term ? term : `${term} / ${zh}`;
}

function bilingualItems(items: string[]) {
  return items.map(bilingualTerm);
}

function bilingualReadableList(items: string[]) {
  return items.slice(0, 3).map(bilingualTerm).join(', ');
}

function buildIngredientEntry(ingredient: AtlasIngredient): EncyclopediaEntry {
  const trait = categoryTraits[categoryAliases[ingredient.category] ?? ingredient.category] ?? defaultTrait;
  const wheel = buildWheel(ingredient);
  const structures = ingredient.cocktailIdeas
    .map((idea) => idea.replace(`${ingredient.name} `, ''))
    .filter(Boolean)
    .slice(0, 5);
  const bestCocktailStructures = structures.length ? structures : structureFallbacks;

  return {
    id: `ingredient-${ingredient.id}`,
    type: 'ingredient',
    hero: {
      name: ingredient.name,
      englishName: ingredient.englishName,
      category: ingredient.category,
      summary: `${ingredient.name} works as ${trait.role}, especially in ${readableList(bestCocktailStructures)} structures. / ${ingredient.name} 可以作为${categoryRoleZh[categoryAliases[ingredient.category] ?? ingredient.category] ?? '连接风味、技法与结构的调酒材料'}，尤其适合 ${bilingualReadableList(bestCocktailStructures)} 结构。`,
      imageAlt: `${ingredient.name} specimen plate for bartender flavor study`,
      imageTone: trait.tone,
    },
    overview: {
      what: `${ingredient.name} is treated here as a working bar ingredient rather than a pantry definition: a source of ${ingredient.flavorProfile.slice(0, 4).join(', ').toLowerCase()} that can be measured, diluted and repeated. / 这里把 ${ingredient.name} 当作吧台里的工作食材，而不是百科词条：它提供 ${bilingualReadableList(ingredient.flavorProfile.slice(0, 4))}，可以被测量、稀释并稳定复现。`,
      importance: `It matters because it gives a bartender a clear direction. In a drink, ${ingredient.name} can mark the first aroma, shape the mid-palate, or leave a recognizable finish without needing a complicated recipe. / 它重要是因为能给调酒师一个清晰方向：在酒里，它可以成为第一层香气、支撑中段口感，或留下有辨识度的尾韵，而不必依赖复杂配方。`,
      bartenderUse: `Bartenders use it when they need ${trait.role}. After dilution, its best qualities become easier to read if the drink is supported by ${readableList(ingredient.spirits)} and handled through ${readableList(ingredient.techniques)}. / 当调酒师需要${categoryRoleZh[categoryAliases[ingredient.category] ?? ingredient.category] ?? '清晰的风味锚点'}时会使用它。稀释后，如果用 ${bilingualReadableList(ingredient.spirits)} 支撑，并通过 ${bilingualReadableList(ingredient.techniques)} 处理，它最好的部分会更容易被读出来。`,
    },
    flavorProfile: {
      wheel,
      taste: bilingualItems([...trait.taste, ...ingredient.flavorProfile.slice(0, 2)].slice(0, 6)),
      aroma: bilingualItems(trait.aroma),
      texture: bilingualItems(trait.texture),
      intensity: wheel.intensity >= 4 ? 'High: dose carefully and test after dilution. / 高强度：需要谨慎用量，并在稀释后再次试饮。' : 'Medium: clear enough to lead, flexible enough to support. / 中等强度：足够作为主线，也能作为支撑层。',
      acidity: wheel.acidity >= 4 ? 'Bright acidity or acid-friendly structure. / 酸度明亮，或非常适合进入酸度结构。' : 'Low to medium acidity; often needs a defined acid frame. / 酸度低到中等，通常需要清晰的酸度框架支撑。',
      sweetness: wheel.sweetness >= 4 ? 'Naturally reads sweet or ripe. / 天然呈现甜感或成熟果感。' : 'Sweetness should be added with restraint. / 甜度需要克制添加，避免压住原本香气。',
      bitterness: wheel.bitterness >= 4 ? 'Noticeable bitterness can help lengthen the finish. / 苦感明显，可用于拉长尾韵。' : 'Bitterness is secondary and should not dominate. / 苦感是辅助层，不应成为主体。',
      persistence: wheel.persistence >= 4 ? 'Long finish; useful in minimalist builds. / 尾韵较长，适合极简结构。' : 'Moderate finish; benefits from a supportive structure. / 尾韵中等，需要合适结构托住。',
    },
    applications: {
      howBartendersUseIt: [
        `Use ${ingredient.name} to set a ${ingredient.flavorProfile[0].toLowerCase()} direction before choosing the base spirit. / 在选择基酒之前，可以先用 ${ingredient.name} 确定 ${bilingualTerm(ingredient.flavorProfile[0])} 的风味方向。`,
        `Taste it diluted, chilled and sweetened; the useful cocktail version is often different from the raw ingredient. / 请在稀释、冷却和加甜之后再判断它，真正适合鸡尾酒的版本通常不同于原始食材。`,
        `Build around ${readableList(ingredient.techniques)} when consistency matters across service. / 如果需要稳定出品，可以围绕 ${bilingualReadableList(ingredient.techniques)} 来建立处理方式。`,
      ],
      classicUses: bilingualItems(trait.classicUses),
      modernUses: bilingualItems(trait.modernUses),
      typicalCocktailStructures: bilingualItems(bestCocktailStructures),
    },
    pairings: {
      bestIngredients: ingredient.pairings.slice(0, 8),
      bestSpirits: bilingualItems(ingredient.spirits.slice(0, 6)),
      bestTechniques: bilingualItems(ingredient.techniques.slice(0, 6)),
      bestFlavorFamilies: bilingualItems(ingredient.flavorProfile.slice(0, 6)),
      bestCocktailStructures: bilingualItems(bestCocktailStructures),
      avoidPairings: bilingualItems(trait.avoid),
    },
    preparation: {
      fresh: `Use fresh ${ingredient.name} when the top note is the reason for the drink; cut, press or express close to service. / 当这杯酒需要新鲜高音香气时使用新鲜 ${ingredient.name}，切割、压榨或表达香气都尽量靠近出品时间。`,
      cordial: `Turn ${ingredient.name} into a cordial when aroma needs to survive batching, speed and controlled acidity. / 当香气需要经受批量制作、快速出品和稳定酸度时，可以把 ${ingredient.name} 做成 Cordial。`,
      shrub: `Use a shrub when ${ingredient.name} needs sharper tension and a longer, food-like finish. / 当 ${ingredient.name} 需要更锐利的酸度张力和更像餐食的尾韵时，可以做成 Shrub。`,
      infusion: `Infuse gently and taste often; stop before the extraction becomes muddy or bitter. / 浸泡萃取要轻，且频繁试味；在风味变浑浊或苦涩前停止。`,
      syrup: `Syrup works when the ingredient needs a soft carrier, especially for ${ingredient.flavorProfile.slice(0, 2).join(' and ').toLowerCase()} notes. / 当食材需要柔和载体时适合做糖浆，尤其适合承载 ${bilingualReadableList(ingredient.flavorProfile.slice(0, 2))}。`,
      fermentation: `Fermentation can deepen ${ingredient.name}, but it should be tracked by time, temperature and acidity rather than intuition alone. / 发酵可以加深 ${ingredient.name} 的层次，但需要记录时间、温度与酸度，而不是只凭直觉。`,
      clarification: `Clarify when texture, color or pulp distract from the core aroma. / 当质感、颜色或果肉干扰核心香气时，可以使用澄清。`,
      milkPunch: `Milk punch is useful when ${ingredient.name} needs softness, length and a polished finish. / 当 ${ingredient.name} 需要柔化、拉长尾韵和更干净的完成度时，Milk Punch 很有用。`,
      foam: `Foam works when the aroma should arrive before the first sip. / 当香气需要在第一口之前先抵达鼻腔时，泡沫很适合。`,
      salt: `A small salt solution can make ${ingredient.name} feel brighter and more three-dimensional. / 少量盐溶液能让 ${ingredient.name} 更明亮，也更有立体感。`,
      powder: `Powder is best for rims, dusting and controlled aromatic garnish rather than the main body. / 粉末更适合杯口、撒粉和可控香气装饰，而不是作为酒体主体。`,
      oil: `Oil extraction is useful when peel, leaf, seed or roasted aroma needs to sit on the surface of the drink. / 当果皮、叶片、种子或烘焙香气需要停留在酒面时，可以使用油脂香气萃取。`,
    },
    similar: {
      similarIngredients: ingredient.similarIngredients.slice(0, 6),
      alternatives: ingredient.alternatives.slice(0, 5),
      seasonalAlternatives: [...ingredient.alternatives, ...ingredient.similarIngredients].slice(1, 6),
    },
    regions: {
      whereUsed: bilingualItems(ingredient.regions),
      traditionalCuisine: bilingualItems(trait.cuisine),
      cocktailCulture: bilingualItems(trait.culture),
    },
    references: {
      books: referenceBooks.slice(0, 3),
      research: [
        'Dilution tasting notes across 1:1, 1:2 and finished cocktail strength / 记录 1:1、1:2 以及成品鸡尾酒强度下的稀释试饮笔记',
        'Aroma stability checks in syrup, cordial and infusion formats / 检查糖浆、Cordial 和浸泡萃取格式中的香气稳定性',
      ],
      industryNotes: [
        `Record supplier, season and processing method for ${ingredient.name}. / 记录 ${ingredient.name} 的供应商、季节和处理方式。`,
        `Test with ${readableList(ingredient.spirits)} before locking a menu build. / 在确定酒单结构前，先用 ${bilingualReadableList(ingredient.spirits)} 做搭配测试。`,
      ],
    },
  };
}

export const ingredientEntries: EncyclopediaEntry[] = atlasIngredients.slice(0, 100).map(buildIngredientEntry);

export const encyclopediaEntries: EncyclopediaEntry[] = ingredientEntries;

export function getIngredientEntryByName(name: string) {
  return ingredientEntries.find((entry) => entry.hero.name === name || entry.hero.englishName === name);
}

export function getEncyclopediaEntry(id: string) {
  return encyclopediaEntries.find((entry) => entry.id === id);
}
