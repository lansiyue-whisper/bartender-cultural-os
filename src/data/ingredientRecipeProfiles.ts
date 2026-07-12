export type PracticalRecipe = {
  id: string;
  ingredient: string;
  name: string;
  style: string;
  confidence: 'Service-ready' | 'R&D starting point';
  bases: string[];
  ingredients: string[];
  flavorTags: string[];
  method: string;
  recipe: Array<{ name: string; amount: string }>;
  steps: string[];
};

export type IngredientRecipeProfile = {
  ingredient: string;
  aliases: string[];
  bestSpirits: string[];
  techniques: string[];
  pairings: string[];
  preparations: string[];
  firstTestRatio: string;
  avoidPairings: string[];
  bartenderNote: string;
  recipes: PracticalRecipe[];
};

type ProfileSeed = {
  ingredient: string;
  aliases: string[];
  cordial: string;
  syrup: string;
  acid: string;
  primarySpirit: string;
  secondarySpirit: string;
  bubbles: string;
  garnish: string;
  pairings: string[];
  tags: string[];
  avoidPairings?: string[];
};

function slug(value: string) {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[’']/g, '').replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-').replace(/^-|-$/g, '');
}

function buildProfile(seed: ProfileSeed): IngredientRecipeProfile {
  const highballName = `${seed.ingredient} Highball`;
  const sourName = `${seed.ingredient} Sour`;
  const spritzName = `${seed.ingredient} Spritz`;

  return {
    ingredient: seed.ingredient,
    aliases: seed.aliases,
    bestSpirits: [seed.primarySpirit, seed.secondarySpirit, 'Gin', 'Vodka'].filter((item, index, arr) => arr.indexOf(item) === index),
    techniques: ['Cordial', 'Syrup', 'Infusion', 'Carbonation'],
    pairings: seed.pairings,
    preparations: [seed.cordial, seed.syrup, `${seed.ingredient} Infusion`, `${seed.ingredient} Salt / Acid Adjust`],
    firstTestRatio: `${seed.primarySpirit} 45 ml + ${seed.cordial} 15 ml + ${seed.bubbles} 90 ml`,
    avoidPairings: seed.avoidPairings ?? ['过量糖浆 / Too much syrup', '重奶油 / Heavy cream', '低酸度长饮 / Flat low-acid builds'],
    bartenderNote: `${seed.ingredient} works best when treated as a ${seed.tags.join(' / ')} accent: test it first in a Highball for aroma, then in a Sour for balance.`,
    recipes: [
      {
        id: `${slug(seed.ingredient)}-highball`,
        ingredient: seed.ingredient,
        name: highballName,
        style: 'Highball / 长饮',
        confidence: 'Service-ready',
        bases: [seed.primarySpirit],
        ingredients: [seed.primarySpirit, seed.cordial, seed.bubbles, seed.garnish],
        flavorTags: ['清爽', ...seed.tags].slice(0, 4),
        method: '兑和 / Build',
        recipe: [
          { name: seed.primarySpirit, amount: '45 ml' },
          { name: seed.cordial, amount: '15 ml' },
          { name: seed.bubbles, amount: '90-120 ml' },
          { name: seed.garnish, amount: '1 份' },
        ],
        steps: ['高球杯加满冰块。', '加入基酒和食材 Cordial，轻轻搅拌。', '补满气泡材料，再轻提一次。', `用${seed.garnish}装饰。`],
      },
      {
        id: `${slug(seed.ingredient)}-sour`,
        ingredient: seed.ingredient,
        name: sourName,
        style: 'Sour / 酸酒',
        confidence: 'Service-ready',
        bases: [seed.secondarySpirit],
        ingredients: [seed.secondarySpirit, seed.acid, seed.syrup, seed.garnish],
        flavorTags: ['酸甜', ...seed.tags].slice(0, 4),
        method: '摇合 / Shake',
        recipe: [
          { name: seed.secondarySpirit, amount: '45 ml' },
          { name: seed.acid, amount: '22.5 ml' },
          { name: seed.syrup, amount: '15 ml' },
          { name: seed.garnish, amount: '1 份' },
        ],
        steps: ['所有液体原料加入摇壶。', '加冰充分摇合至冰冷。', '双重过滤入冰镇杯。', `用${seed.garnish}完成香气。`],
      },
      {
        id: `${slug(seed.ingredient)}-spritz`,
        ingredient: seed.ingredient,
        name: spritzName,
        style: 'Spritz / 低酒精气泡',
        confidence: 'R&D starting point',
        bases: ['Vermouth / Sake / Sparkling Wine'],
        ingredients: ['Vermouth 或 Sake', seed.cordial, seed.bubbles, seed.garnish],
        flavorTags: ['低酒精', '气泡', ...seed.tags].slice(0, 4),
        method: '兑和 / Build',
        recipe: [
          { name: '干味美思 / 清酒 / 起泡酒', amount: '60 ml' },
          { name: seed.cordial, amount: '20 ml' },
          { name: seed.bubbles, amount: '60-90 ml' },
          { name: seed.garnish, amount: '1 份' },
        ],
        steps: ['酒杯加冰。', '加入低酒精基底和食材 Cordial。', '补气泡材料并轻轻提拉。', '试饮后用酸度或盐水微调。'],
      },
    ],
  };
}

const seeds: ProfileSeed[] = [
  { ingredient: '柚子', aliases: ['Yuzu'], cordial: '柚子 Cordial', syrup: '柚子糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Sake', bubbles: '苏打水', garnish: '柚子皮', pairings: ['紫苏', '乌龙茶', '蜂蜜'], tags: ['柑橘', '花香'] },
  { ingredient: '紫苏', aliases: ['Shiso', 'Perilla'], cordial: '紫苏 Cordial', syrup: '紫苏糖浆', acid: '青柠汁', primarySpirit: 'Tequila', secondarySpirit: 'Gin', bubbles: '葡萄柚苏打', garnish: '紫苏叶', pairings: ['柚子', '梅子', '龙舌兰'], tags: ['草本', '清爽'] },
  { ingredient: '乌龙茶', aliases: ['Oolong Tea', 'Oolong'], cordial: '乌龙茶 Cordial', syrup: '乌龙茶糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '柠檬皮', pairings: ['柚子', '蜂蜜', '白桃'], tags: ['茶感', '微苦'] },
  { ingredient: '梅子', aliases: ['Ume', 'Plum'], cordial: '梅子 Cordial', syrup: '梅子糖浆', acid: '柠檬汁', primarySpirit: 'Sake', secondarySpirit: 'Whisky', bubbles: '起泡水', garnish: '盐渍梅', pairings: ['紫苏', '焙茶', '蜂蜜'], tags: ['酸感', '果核'] },
  { ingredient: '山椒', aliases: ['Sansho'], cordial: '山椒柑橘 Cordial', syrup: '山椒糖浆', acid: '柚子汁', primarySpirit: 'Shochu', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '山椒粉', pairings: ['柚子', '清酒', '海盐'], tags: ['辛香', '麻感'] },
  { ingredient: '味噌', aliases: ['Miso'], cordial: '味噌蜂蜜 Cordial', syrup: '味噌糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '芝麻', pairings: ['黑芝麻', '柚子', '昆布'], tags: ['鲜味', '咸感'] },
  { ingredient: '昆布', aliases: ['Kombu'], cordial: '昆布盐味 Cordial', syrup: '昆布糖浆', acid: '柠檬汁', primarySpirit: 'Vodka', secondarySpirit: 'Sake', bubbles: '苏打水', garnish: '海盐', pairings: ['柚子', '味噌', '黄瓜'], tags: ['鲜味', '海盐'] },
  { ingredient: '焙茶', aliases: ['Hojicha'], cordial: '焙茶 Cordial', syrup: '焙茶糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '橙皮', pairings: ['黑芝麻', '蜂蜜', '白桃'], tags: ['烘焙', '茶感'] },
  { ingredient: '黑芝麻', aliases: ['Black Sesame'], cordial: '黑芝麻乳清 Cordial', syrup: '黑芝麻糖浆', acid: '柠檬汁', primarySpirit: 'Rum', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '芝麻盐', pairings: ['咖啡', '蜂蜜', '椰子'], tags: ['坚果', '烘焙'] },
  { ingredient: '桂花', aliases: ['Osmanthus'], cordial: '桂花 Cordial', syrup: '桂花糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Sake', bubbles: '气泡酒', garnish: '桂花', pairings: ['柚子', '梨', '蜂蜜'], tags: ['花香', '清甜'] },
  { ingredient: '斑斓', aliases: ['Pandan'], cordial: '斑斓 Cordial', syrup: '斑斓糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Gin', bubbles: '椰子水苏打', garnish: '斑斓叶', pairings: ['椰子', '芒果', '咖啡'], tags: ['热带', '香草'] },
  { ingredient: '香茅', aliases: ['Lemongrass'], cordial: '香茅 Cordial', syrup: '香茅糖浆', acid: '青柠汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '香茅茎', pairings: ['罗望子', '姜', '椰子'], tags: ['草本', '柑橘'] },
  { ingredient: '罗望子', aliases: ['Tamarind'], cordial: '罗望子 Shrub', syrup: '罗望子糖浆', acid: '青柠汁', primarySpirit: 'Tequila', secondarySpirit: 'Rum', bubbles: '姜汁啤酒', garnish: '辣椒盐', pairings: ['辣椒', '姜', '菠萝'], tags: ['酸感', '热带'] },
  { ingredient: '椰子', aliases: ['Coconut'], cordial: '椰子 Cordial', syrup: '椰子糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Cachaça', bubbles: '椰子水苏打', garnish: '烤椰片', pairings: ['菠萝', '斑斓', '咖啡'], tags: ['椰香', '热带'] },
  { ingredient: '姜', aliases: ['Ginger'], cordial: '姜味 Cordial', syrup: '姜糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Rum', bubbles: '姜汁啤酒', garnish: '姜片', pairings: ['蜂蜜', '罗望子', '柠檬'], tags: ['辛香', '温暖'] },
  { ingredient: '芒果', aliases: ['Mango'], cordial: '芒果酸奶 Cordial', syrup: '芒果糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Pisco', bubbles: '苏打水', garnish: '芒果片', pairings: ['豆蔻', '酸奶', '辣椒'], tags: ['热带', '甜感'] },
  { ingredient: '豆蔻', aliases: ['Cardamom'], cordial: '豆蔻 Cordial', syrup: '豆蔻糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '豆蔻粉', pairings: ['咖啡', '芒果', '玫瑰'], tags: ['香料', '花香'] },
  { ingredient: '酸奶', aliases: ['Yogurt'], cordial: '酸奶乳清 Cordial', syrup: '酸奶糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '柠檬皮', pairings: ['芒果', '蜂蜜', '豆蔻'], tags: ['乳酸', '柔滑'] },
  { ingredient: '玫瑰水', aliases: ['Rose Water', 'Rose'], cordial: '玫瑰 Cordial', syrup: '玫瑰糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '气泡酒', garnish: '玫瑰花瓣', pairings: ['石榴', '开心果', '荔枝'], tags: ['花香', '甜感'] },
  { ingredient: '开心果', aliases: ['Pistachio'], cordial: '开心果 Orgeat', syrup: '开心果糖浆', acid: '柠檬汁', primarySpirit: 'Brandy', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '开心果碎', pairings: ['玫瑰', '咖啡', '无花果'], tags: ['坚果', '奶香'] },
  { ingredient: '石榴', aliases: ['Pomegranate'], cordial: '石榴 Cordial', syrup: '石榴糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Mezcal', bubbles: '气泡酒', garnish: '石榴籽', pairings: ['玫瑰', '薄荷', '咖啡'], tags: ['果酸', '红果'] },
  { ingredient: '无花果', aliases: ['Fig'], cordial: '无花果 Cordial', syrup: '无花果糖浆', acid: '柠檬汁', primarySpirit: 'Brandy', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '无花果干', pairings: ['迷迭香', '杏仁', '味美思'], tags: ['果干', '圆润'] },
  { ingredient: '橙花水', aliases: ['Orange Blossom'], cordial: '橙花 Cordial', syrup: '橙花糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Brandy', bubbles: '气泡酒', garnish: '橙皮', pairings: ['杏仁', '柑橘', '蜂蜜'], tags: ['花香', '柑橘'] },
  { ingredient: '薄荷', aliases: ['Mint'], cordial: '薄荷 Cordial', syrup: '薄荷糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '薄荷枝', pairings: ['青柠', '黄瓜', '菠萝'], tags: ['清凉', '草本'] },
  { ingredient: '橄榄', aliases: ['Olive'], cordial: '橄榄盐水 Cordial', syrup: '橄榄糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '橄榄', pairings: ['迷迭香', '海盐', '番茄'], tags: ['咸感', '油脂'] },
  { ingredient: '迷迭香', aliases: ['Rosemary'], cordial: '迷迭香 Cordial', syrup: '迷迭香糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Whisky', bubbles: '汤力水', garnish: '迷迭香枝', pairings: ['柑橘', '无花果', '蜂蜜'], tags: ['草本', '木质'] },
  { ingredient: '百里香', aliases: ['Thyme'], cordial: '百里香 Cordial', syrup: '百里香糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Brandy', bubbles: '苏打水', garnish: '百里香枝', pairings: ['葡萄', '柠檬', '蜂蜜'], tags: ['草本', '干香'] },
  { ingredient: '葡萄', aliases: ['Grape'], cordial: '葡萄 Cordial', syrup: '葡萄糖浆', acid: '柠檬汁', primarySpirit: 'Brandy', secondarySpirit: 'Gin', bubbles: '气泡酒', garnish: '葡萄', pairings: ['百里香', '橙花', '味美思'], tags: ['果香', '酒感'] },
  { ingredient: '接骨木花', aliases: ['Elderflower'], cordial: '接骨木花 Cordial', syrup: '接骨木花糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '气泡酒', garnish: '柠檬皮', pairings: ['黄瓜', '苹果', '云莓'], tags: ['花香', '清爽'] },
  { ingredient: '云莓', aliases: ['Cloudberry'], cordial: '云莓 Cordial', syrup: '云莓糖浆', acid: '柠檬汁', primarySpirit: 'Vodka', secondarySpirit: 'Aquavit', bubbles: '苏打水', garnish: '莓果', pairings: ['接骨木花', '莳萝', '蜂蜜'], tags: ['浆果', '冷感'] },
  { ingredient: '莳萝', aliases: ['Dill'], cordial: '莳萝 Cordial', syrup: '莳萝糖浆', acid: '柠檬汁', primarySpirit: 'Aquavit', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '莳萝', pairings: ['黄瓜', '柠檬', '伏特加'], tags: ['草本', '冷感'] },
  { ingredient: '云杉', aliases: ['Spruce'], cordial: '云杉 Cordial', syrup: '云杉糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '云杉芽', pairings: ['蜂蜜', '苹果', '杜松'], tags: ['树脂', '森林'] },
  { ingredient: '黑麦', aliases: ['Rye'], cordial: '黑麦麦芽 Cordial', syrup: '黑麦糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '橙皮', pairings: ['蜂蜜', '苹果', '咖啡'], tags: ['谷物', '烘焙'] },
  { ingredient: '可可', aliases: ['Cacao', 'Cocoa', 'Chocolate'], cordial: '可可 Cordial', syrup: '可可糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Mezcal', bubbles: '苏打水', garnish: '可可碎', pairings: ['咖啡', '香草', '樱桃'], tags: ['可可', '苦香'] },
  { ingredient: '咖啡', aliases: ['Coffee', 'Espresso'], cordial: '咖啡 Cordial', syrup: '咖啡糖浆', acid: '柠檬汁', primarySpirit: 'Rum', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '咖啡豆', pairings: ['可可', '橙花', '蜂蜜'], tags: ['咖啡', '苦感'] },
  { ingredient: '辣椒', aliases: ['Chile', 'Chili'], cordial: '辣椒 Cordial', syrup: '辣椒糖浆', acid: '青柠汁', primarySpirit: 'Mezcal', secondarySpirit: 'Tequila', bubbles: '葡萄柚苏打', garnish: '辣椒盐', pairings: ['可可', '菠萝', '青柠'], tags: ['辛辣', '烟熏'] },
  { ingredient: '番石榴', aliases: ['Guava'], cordial: '番石榴 Cordial', syrup: '番石榴糖浆', acid: '青柠汁', primarySpirit: 'Tequila', secondarySpirit: 'Pisco', bubbles: '苏打水', garnish: '青柠皮', pairings: ['辣椒', '百香果', '椰子'], tags: ['热带', '果香'] },
  { ingredient: '百香果', aliases: ['Passionfruit'], cordial: '百香果 Cordial', syrup: '百香果糖浆', acid: '青柠汁', primarySpirit: 'Pisco', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '百香果籽', pairings: ['香草', '椰子', '芒果'], tags: ['热带', '酸甜'] },
  { ingredient: '菠萝', aliases: ['Pineapple'], cordial: '菠萝 Cordial', syrup: '菠萝糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Mezcal', bubbles: '苏打水', garnish: '菠萝片', pairings: ['椰子', '辣椒', '多香果'], tags: ['热带', '酸甜'] },
  { ingredient: '香蕉', aliases: ['Banana'], cordial: '香蕉 Cordial', syrup: '香蕉糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '香蕉片', pairings: ['咖啡', '可可', '肉豆蔻'], tags: ['热带', '熟果'] },
  { ingredient: '洛神花', aliases: ['Hibiscus'], cordial: '洛神花 Cordial', syrup: '洛神花糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Rum', bubbles: '气泡酒', garnish: '洛神花', pairings: ['姜', '石榴', '蜂蜜'], tags: ['花酸', '红果'] },
  { ingredient: '猴面包树果', aliases: ['Baobab'], cordial: '猴面包树果 Cordial', syrup: '猴面包树果糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '柠檬皮', pairings: ['姜', '蜂蜜', '罗望子'], tags: ['酸感', '果干'] },
  { ingredient: '花生', aliases: ['Peanut'], cordial: '花生乳清 Cordial', syrup: '花生糖浆', acid: '柠檬汁', primarySpirit: 'Rum', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '花生碎', pairings: ['可可', '香蕉', '蜂蜜'], tags: ['坚果', '浓郁'] },
  { ingredient: '指橙', aliases: ['Finger Lime'], cordial: '指橙 Cordial', syrup: '指橙糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '指橙果粒', pairings: ['柠檬桃金娘', '海盐', '蜂蜜'], tags: ['柑橘', '清爽'] },
  { ingredient: '柠檬桃金娘', aliases: ['Lemon Myrtle'], cordial: '柠檬桃金娘 Cordial', syrup: '柠檬桃金娘糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '汤力水', garnish: '柠檬皮', pairings: ['指橙', '蜂蜜', '尤加利'], tags: ['柑橘', '草本'] },
  { ingredient: '尤加利', aliases: ['Eucalyptus'], cordial: '尤加利 Cordial', syrup: '尤加利糖浆', acid: '柠檬汁', primarySpirit: 'Vodka', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '柠檬皮', pairings: ['蜂蜜', '柠檬桃金娘', '海盐'], tags: ['树脂', '清凉'] },
  { ingredient: '澳洲坚果', aliases: ['Macadamia'], cordial: '澳洲坚果 Orgeat', syrup: '澳洲坚果糖浆', acid: '柠檬汁', primarySpirit: 'Rum', secondarySpirit: 'Brandy', bubbles: '苏打水', garnish: '澳洲坚果碎', pairings: ['椰子', '蜂蜜', '咖啡'], tags: ['坚果', '奶油'] },
  { ingredient: '枫糖', aliases: ['Maple Syrup', 'Maple'], cordial: '枫糖 Cordial', syrup: '枫糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '橙皮', pairings: ['苹果', '黑麦', '咖啡'], tags: ['甜感', '木质'] },
  { ingredient: '蔓越莓', aliases: ['Cranberry'], cordial: '蔓越莓 Cordial', syrup: '蔓越莓糖浆', acid: '青柠汁', primarySpirit: 'Vodka', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '橙皮', pairings: ['苹果', '迷迭香', '蜂蜜'], tags: ['浆果', '酸感'] },
  { ingredient: '蓝莓', aliases: ['Blueberry'], cordial: '蓝莓 Cordial', syrup: '蓝莓糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Bourbon', bubbles: '苏打水', garnish: '蓝莓', pairings: ['柠檬', '薰衣草', '蜂蜜'], tags: ['浆果', '柔和'] },
  { ingredient: '苹果', aliases: ['Apple'], cordial: '苹果 Cordial', syrup: '苹果糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Calvados', bubbles: '苏打水', garnish: '苹果片', pairings: ['黑麦', '肉桂', '蜂蜜'], tags: ['果香', '清脆'] },
  { ingredient: '南瓜', aliases: ['Pumpkin'], cordial: '南瓜香料 Cordial', syrup: '南瓜糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '肉桂粉', pairings: ['枫糖', '肉桂', '咖啡'], tags: ['甜感', '香料'] },
  { ingredient: '青柠', aliases: ['Lime'], cordial: '青柠 Cordial', syrup: '青柠糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Tequila', bubbles: '苏打水', garnish: '青柠角', pairings: ['薄荷', '椰子', '辣椒'], tags: ['柑橘', '酸感'] },
  { ingredient: '柠檬', aliases: ['Lemon'], cordial: '柠檬 Cordial', syrup: '柠檬糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '柠檬皮', pairings: ['蜂蜜', '百里香', '姜'], tags: ['柑橘', '明亮'] },
  { ingredient: '葡萄柚', aliases: ['Grapefruit'], cordial: '葡萄柚 Cordial', syrup: '葡萄柚糖浆', acid: '青柠汁', primarySpirit: 'Tequila', secondarySpirit: 'Gin', bubbles: '葡萄柚苏打', garnish: '葡萄柚皮', pairings: ['紫苏', '迷迭香', '海盐'], tags: ['柑橘', '微苦'] },
  { ingredient: '橙子', aliases: ['Orange'], cordial: '橙子 Cordial', syrup: '橙子糖浆', acid: '柠檬汁', primarySpirit: 'Brandy', secondarySpirit: 'Gin', bubbles: '气泡酒', garnish: '橙皮', pairings: ['咖啡', '肉桂', '可可'], tags: ['柑橘', '甜感'] },
  { ingredient: '白桃', aliases: ['White Peach', 'Peach'], cordial: '白桃 Cordial', syrup: '白桃糖浆', acid: '柠檬汁', primarySpirit: 'Sake', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '白桃片', pairings: ['乌龙茶', '桂花', '蜂蜜'], tags: ['果香', '柔和'] },
  { ingredient: '梨', aliases: ['Pear'], cordial: '梨 Cordial', syrup: '梨糖浆', acid: '柠檬汁', primarySpirit: 'Brandy', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '梨片', pairings: ['桂花', '百里香', '姜'], tags: ['清甜', '果香'] },
  { ingredient: '荔枝', aliases: ['Lychee'], cordial: '荔枝 Cordial', syrup: '荔枝糖浆', acid: '柠檬汁', primarySpirit: 'Vodka', secondarySpirit: 'Gin', bubbles: '气泡酒', garnish: '荔枝', pairings: ['玫瑰水', '柚子', '乌龙茶'], tags: ['花香', '甜感'] },
  { ingredient: '山竹', aliases: ['Mangosteen'], cordial: '山竹 Cordial', syrup: '山竹糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Pisco', bubbles: '苏打水', garnish: '青柠皮', pairings: ['斑斓', '椰子', '百香果'], tags: ['热带', '酸甜'] },
  { ingredient: '樱桃', aliases: ['Cherry'], cordial: '樱桃 Cordial', syrup: '樱桃糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Brandy', bubbles: '苏打水', garnish: '樱桃', pairings: ['可可', '橙子', '香草'], tags: ['红果', '果核'] },
  { ingredient: '草莓', aliases: ['Strawberry'], cordial: '草莓 Cordial', syrup: '草莓糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Rum', bubbles: '气泡酒', garnish: '草莓片', pairings: ['罗勒', '黑胡椒', '香草'], tags: ['浆果', '甜感'] },
  { ingredient: '覆盆子', aliases: ['Raspberry'], cordial: '覆盆子 Cordial', syrup: '覆盆子糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '覆盆子', pairings: ['玫瑰水', '可可', '柠檬'], tags: ['浆果', '酸感'] },
  { ingredient: '黄瓜', aliases: ['Cucumber'], cordial: '黄瓜 Cordial', syrup: '黄瓜糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '黄瓜片', pairings: ['薄荷', '莳萝', '接骨木花'], tags: ['清爽', '水感'] },
  { ingredient: '罗勒', aliases: ['Basil'], cordial: '罗勒 Cordial', syrup: '罗勒糖浆', acid: '青柠汁', primarySpirit: 'Gin', secondarySpirit: 'Tequila', bubbles: '苏打水', garnish: '罗勒叶', pairings: ['草莓', '番茄', '柠檬'], tags: ['草本', '青感'] },
  { ingredient: '鼠尾草', aliases: ['Sage'], cordial: '鼠尾草 Cordial', syrup: '鼠尾草糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '鼠尾草叶', pairings: ['苹果', '蜂蜜', '柑橘'], tags: ['草本', '木质'] },
  { ingredient: '薰衣草', aliases: ['Lavender'], cordial: '薰衣草 Cordial', syrup: '薰衣草糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '气泡酒', garnish: '薰衣草', pairings: ['蓝莓', '蜂蜜', '柠檬'], tags: ['花香', '干香'] },
  { ingredient: '香草', aliases: ['Vanilla'], cordial: '香草 Cordial', syrup: '香草糖浆', acid: '柠檬汁', primarySpirit: 'Rum', secondarySpirit: 'Brandy', bubbles: '苏打水', garnish: '香草荚', pairings: ['可可', '咖啡', '百香果'], tags: ['甜香', '圆润'] },
  { ingredient: '肉桂', aliases: ['Cinnamon'], cordial: '肉桂 Cordial', syrup: '肉桂糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Rum', bubbles: '姜汁啤酒', garnish: '肉桂棒', pairings: ['苹果', '橙子', '南瓜'], tags: ['香料', '温暖'] },
  { ingredient: '肉豆蔻', aliases: ['Nutmeg'], cordial: '肉豆蔻 Cordial', syrup: '肉豆蔻糖浆', acid: '柠檬汁', primarySpirit: 'Brandy', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '肉豆蔻粉', pairings: ['香蕉', '咖啡', '奶油'], tags: ['香料', '奶香'] },
  { ingredient: '多香果', aliases: ['Allspice'], cordial: '多香果 Dram', syrup: '多香果糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '橙皮', pairings: ['菠萝', '糖蜜', '青柠'], tags: ['香料', '热带'] },
  { ingredient: '茉莉花茶', aliases: ['Jasmine Tea'], cordial: '茉莉花茶 Cordial', syrup: '茉莉花茶糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Sake', bubbles: '苏打水', garnish: '柠檬皮', pairings: ['荔枝', '柚子', '蜂蜜'], tags: ['茶感', '花香'] },
  { ingredient: '抹茶', aliases: ['Matcha'], cordial: '抹茶 Cordial', syrup: '抹茶糖浆', acid: '柠檬汁', primarySpirit: 'Sake', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '抹茶粉', pairings: ['黑芝麻', '白桃', '椰子'], tags: ['茶感', '鲜味'] },
  { ingredient: '杏仁', aliases: ['Almond'], cordial: '杏仁 Orgeat', syrup: '杏仁糖浆', acid: '柠檬汁', primarySpirit: 'Rum', secondarySpirit: 'Brandy', bubbles: '苏打水', garnish: '杏仁片', pairings: ['橙花水', '樱桃', '无花果'], tags: ['坚果', '圆润'] },
  { ingredient: '核桃', aliases: ['Walnut'], cordial: '核桃 Cordial', syrup: '核桃糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Brandy', bubbles: '苏打水', garnish: '核桃碎', pairings: ['咖啡', '枫糖', '苹果'], tags: ['坚果', '木质'] },
  { ingredient: '番茄', aliases: ['Tomato'], cordial: '番茄盐味 Cordial', syrup: '番茄糖浆', acid: '柠檬汁', primarySpirit: 'Vodka', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '番茄干', pairings: ['罗勒', '橄榄', '海盐'], tags: ['鲜味', '酸感'] },
  { ingredient: '甜菜根', aliases: ['Beetroot'], cordial: '甜菜根 Shrub', syrup: '甜菜根糖浆', acid: '苹果醋', primarySpirit: 'Vodka', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '甜菜片', pairings: ['莳萝', '苹果', '蜂蜜'], tags: ['泥土', '甜感'] },
  { ingredient: '蘑菇', aliases: ['Mushroom'], cordial: '蘑菇鲜味 Cordial', syrup: '蘑菇糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '脱水蘑菇', pairings: ['味噌', '黑麦', '海盐'], tags: ['鲜味', '泥土'] },
  { ingredient: '海盐', aliases: ['Sea Salt'], cordial: '海盐 Cordial', syrup: '盐味糖浆', acid: '柠檬汁', primarySpirit: 'Tequila', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '盐边', pairings: ['葡萄柚', '橄榄', '昆布'], tags: ['咸感', '清爽'] },
  { ingredient: '蜂蜜', aliases: ['Honey'], cordial: '蜂蜜 Cordial', syrup: '蜂蜜糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '柠檬皮', pairings: ['姜', '柠檬', '薰衣草'], tags: ['甜感', '花香'] },
  { ingredient: '棕榈糖', aliases: ['Palm Sugar'], cordial: '棕榈糖 Cordial', syrup: '棕榈糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Arrack', bubbles: '椰子水苏打', garnish: '青柠皮', pairings: ['斑斓', '椰子', '咖啡'], tags: ['焦糖', '热带'] },
  { ingredient: '糖蜜', aliases: ['Molasses'], cordial: '糖蜜 Cordial', syrup: '糖蜜糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Whisky', bubbles: '姜汁啤酒', garnish: '橙皮', pairings: ['多香果', '咖啡', '香蕉'], tags: ['焦糖', '浓郁'] },
  { ingredient: '佛手柑', aliases: ['Bergamot'], cordial: '佛手柑 Cordial', syrup: '佛手柑糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '汤力水', garnish: '佛手柑皮', pairings: ['伯爵茶', '蜂蜜', '玫瑰水'], tags: ['柑橘', '花香'], avoidPairings: ['泥煤威士忌', '厚重奶油', '过量苦精'] },
  { ingredient: '四季橘', aliases: ['Calamansi'], cordial: '四季橘 Cordial', syrup: '四季橘糖浆', acid: '四季橘汁', primarySpirit: 'Rum', secondarySpirit: 'Tequila', bubbles: '苏打水', garnish: '四季橘皮', pairings: ['椰子', '香茅', '蜂蜜'], tags: ['柑橘', '酸感'] },
  { ingredient: '金桔', aliases: ['Kumquat'], cordial: '金桔 Cordial', syrup: '金桔糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Brandy', bubbles: '气泡酒', garnish: '金桔片', pairings: ['桂花', '乌龙茶', '蜂蜜'], tags: ['柑橘', '果皮'] },
  { ingredient: '血橙', aliases: ['Blood Orange'], cordial: '血橙 Cordial', syrup: '血橙糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Mezcal', bubbles: '气泡酒', garnish: '血橙片', pairings: ['迷迭香', '可可', '石榴'], tags: ['红果', '柑橘'] },
  { ingredient: '黑莓', aliases: ['Blackberry'], cordial: '黑莓 Cordial', syrup: '黑莓糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '黑莓', pairings: ['鼠尾草', '柠檬', '蜂蜜'], tags: ['浆果', '深色果香'] },
  { ingredient: '黑加仑', aliases: ['Blackcurrant'], cordial: '黑加仑 Cordial', syrup: '黑加仑糖浆', acid: '柠檬汁', primarySpirit: 'Vodka', secondarySpirit: 'Gin', bubbles: '气泡酒', garnish: '黑加仑', pairings: ['越橘', '玫瑰水', '黑麦'], tags: ['浆果', '酸感'] },
  { ingredient: '红醋栗', aliases: ['Redcurrant'], cordial: '红醋栗 Cordial', syrup: '红醋栗糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Brandy', bubbles: '苏打水', garnish: '红醋栗', pairings: ['接骨木花', '柠檬', '蜂蜜'], tags: ['浆果', '明亮'] },
  { ingredient: '杏子', aliases: ['Apricot'], cordial: '杏子 Cordial', syrup: '杏子糖浆', acid: '柠檬汁', primarySpirit: 'Brandy', secondarySpirit: 'Gin', bubbles: '气泡酒', garnish: '杏干', pairings: ['橙花水', '杏仁', '蜂蜜'], tags: ['果核', '花香'] },
  { ingredient: '油桃', aliases: ['Nectarine'], cordial: '油桃 Cordial', syrup: '油桃糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Pisco', bubbles: '苏打水', garnish: '油桃片', pairings: ['茉莉花茶', '蜂蜜', '百里香'], tags: ['果香', '清甜'] },
  { ingredient: '枇杷', aliases: ['Loquat'], cordial: '枇杷 Cordial', syrup: '枇杷糖浆', acid: '柠檬汁', primarySpirit: 'Sake', secondarySpirit: 'Gin', bubbles: '苏打水', garnish: '枇杷片', pairings: ['乌龙茶', '桂花', '蜂蜜'], tags: ['果香', '柔和'] },
  { ingredient: '木瓜', aliases: ['Papaya'], cordial: '木瓜 Cordial', syrup: '木瓜糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Pisco', bubbles: '椰子水苏打', garnish: '木瓜片', pairings: ['青柠', '香草', '椰子'], tags: ['热带', '柔滑'] },
  { ingredient: '龙眼', aliases: ['Longan'], cordial: '龙眼 Cordial', syrup: '龙眼糖浆', acid: '柠檬汁', primarySpirit: 'Baijiu', secondarySpirit: 'Vodka', bubbles: '气泡酒', garnish: '龙眼干', pairings: ['桂花', '乌龙茶', '蜂蜜'], tags: ['花香', '蜜感'] },
  { ingredient: '火龙果', aliases: ['Dragon Fruit'], cordial: '火龙果 Cordial', syrup: '火龙果糖浆', acid: '青柠汁', primarySpirit: 'Vodka', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '火龙果片', pairings: ['百香果', '青柠', '椰子'], tags: ['热带', '清爽'] },
  { ingredient: '菠萝蜜', aliases: ['Jackfruit'], cordial: '菠萝蜜 Cordial', syrup: '菠萝蜜糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Arrack', bubbles: '椰子水苏打', garnish: '菠萝蜜干', pairings: ['斑斓', '椰子', '青柠'], tags: ['热带', '熟果'] },
  { ingredient: '龙蒿', aliases: ['Tarragon'], cordial: '龙蒿 Cordial', syrup: '龙蒿糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '龙蒿叶', pairings: ['葡萄柚', '黄瓜', '白桃'], tags: ['草本', '茴香感'], avoidPairings: ['强烟熏', '重咖啡', '厚重糖蜜'] },
  { ingredient: '香菜', aliases: ['Cilantro'], cordial: '香菜 Cordial', syrup: '香菜糖浆', acid: '青柠汁', primarySpirit: 'Tequila', secondarySpirit: 'Gin', bubbles: '葡萄柚苏打', garnish: '香菜叶', pairings: ['青柠', '辣椒', '黄瓜'], tags: ['草本', '青感'] },
  { ingredient: '柠檬香蜂草', aliases: ['Lemon Balm'], cordial: '柠檬香蜂草 Cordial', syrup: '柠檬香蜂草糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '香蜂草叶', pairings: ['柠檬', '蜂蜜', '黄瓜'], tags: ['草本', '柑橘'] },
  { ingredient: '咖喱叶', aliases: ['Curry Leaf'], cordial: '咖喱叶 Cordial', syrup: '咖喱叶糖浆', acid: '青柠汁', primarySpirit: 'Gin', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '咖喱叶', pairings: ['椰子', '罗望子', '姜'], tags: ['草本', '香料'], avoidPairings: ['玫瑰水', '过量奶油', '轻花香 Spritz'] },
  { ingredient: '柠檬叶', aliases: ['Makrut Lime Leaf', 'Kaffir Lime Leaf'], cordial: '柠檬叶 Cordial', syrup: '柠檬叶糖浆', acid: '青柠汁', primarySpirit: 'Gin', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '柠檬叶', pairings: ['香茅', '椰子', '青柠'], tags: ['柑橘', '草本'] },
  { ingredient: '无花果叶', aliases: ['Fig Leaf'], cordial: '无花果叶 Cordial', syrup: '无花果叶糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Brandy', bubbles: '苏打水', garnish: '无花果叶香气', pairings: ['无花果', '椰子', '蜂蜜'], tags: ['绿叶', '椰香'] },
  { ingredient: '玄米茶', aliases: ['Genmaicha'], cordial: '玄米茶 Cordial', syrup: '玄米茶糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Sake', bubbles: '苏打水', garnish: '柠檬皮', pairings: ['黑芝麻', '蜂蜜', '白桃'], tags: ['茶感', '谷物'] },
  { ingredient: '伯爵茶', aliases: ['Earl Grey'], cordial: '伯爵茶 Cordial', syrup: '伯爵茶糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '汤力水', garnish: '柠檬皮', pairings: ['佛手柑', '薰衣草', '蜂蜜'], tags: ['茶感', '柑橘'] },
  { ingredient: '普洱茶', aliases: ['Pu-erh', 'Puerh'], cordial: '普洱茶 Cordial', syrup: '普洱茶糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '橙皮', pairings: ['可可', '糖蜜', '黑芝麻'], tags: ['茶感', '泥土'] },
  { ingredient: '正山小种', aliases: ['Lapsang Souchong'], cordial: '正山小种 Cordial', syrup: '正山小种糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Mezcal', bubbles: '苏打水', garnish: '橙皮', pairings: ['蜂蜜', '苹果', '可可'], tags: ['烟熏', '茶感'] },
  { ingredient: '冷萃咖啡', aliases: ['Cold Brew Coffee'], cordial: '冷萃咖啡 Cordial', syrup: '冷萃咖啡糖浆', acid: '柠檬汁', primarySpirit: 'Rum', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '咖啡豆', pairings: ['橙子', '可可', '糖蜜'], tags: ['咖啡', '清爽'] },
  { ingredient: '可可碎', aliases: ['Cacao Nib'], cordial: '可可碎 Cordial', syrup: '可可碎糖浆', acid: '青柠汁', primarySpirit: 'Rum', secondarySpirit: 'Whisky', bubbles: '苏打水', garnish: '可可碎', pairings: ['咖啡', '樱桃', '香草'], tags: ['可可', '烘焙'] },
  { ingredient: '白巧克力', aliases: ['White Chocolate'], cordial: '白巧克力 Cordial', syrup: '白巧克力糖浆', acid: '柠檬汁', primarySpirit: 'Brandy', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '白巧克力碎', pairings: ['草莓', '玫瑰水', '开心果'], tags: ['奶香', '甜感'], avoidPairings: ['强酸 Highball', '海盐过量', '烟熏木'] },
  { ingredient: '山核桃', aliases: ['Pecan'], cordial: '山核桃 Orgeat', syrup: '山核桃糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '山核桃碎', pairings: ['枫糖', '苹果', '咖啡'], tags: ['坚果', '木质'] },
  { ingredient: '榛子', aliases: ['Hazelnut'], cordial: '榛子 Orgeat', syrup: '榛子糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Brandy', bubbles: '苏打水', garnish: '榛子碎', pairings: ['可可', '咖啡', '橙子'], tags: ['坚果', '烘焙'] },
  { ingredient: '芹菜', aliases: ['Celery'], cordial: '芹菜盐味 Cordial', syrup: '芹菜糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '芹菜叶', pairings: ['番茄', '海盐', '青柠'], tags: ['清爽', '咸感'] },
  { ingredient: '茴香头', aliases: ['Fennel Bulb'], cordial: '茴香头 Cordial', syrup: '茴香头糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Aquavit', bubbles: '苏打水', garnish: '茴香叶', pairings: ['葡萄柚', '橄榄', '柠檬'], tags: ['草本', '茴香感'] },
  { ingredient: '仙人掌', aliases: ['Nopal'], cordial: '仙人掌 Cordial', syrup: '仙人掌糖浆', acid: '青柠汁', primarySpirit: 'Tequila', secondarySpirit: 'Mezcal', bubbles: '苏打水', garnish: '青柠皮', pairings: ['青柠', '辣椒', '海盐'], tags: ['绿色', '矿物'] },
  { ingredient: '香菇', aliases: ['Shiitake'], cordial: '香菇鲜味 Cordial', syrup: '香菇糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Sake', bubbles: '苏打水', garnish: '脱水香菇', pairings: ['味噌', '昆布', '黑麦'], tags: ['鲜味', '泥土'] },
  { ingredient: '牛肝菌', aliases: ['Porcini'], cordial: '牛肝菌鲜味 Cordial', syrup: '牛肝菌糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Brandy', bubbles: '苏打水', garnish: '牛肝菌粉', pairings: ['黑麦', '迷迭香', '海盐'], tags: ['蘑菇', '泥土'] },
  { ingredient: '海苔', aliases: ['Nori'], cordial: '海苔盐味 Cordial', syrup: '海苔糖浆', acid: '柠檬汁', primarySpirit: 'Vodka', secondarySpirit: 'Sake', bubbles: '苏打水', garnish: '海苔片', pairings: ['柚子', '昆布', '海盐'], tags: ['鲜味', '海风'] },
  { ingredient: '酱油', aliases: ['Soy Sauce'], cordial: '酱油蜂蜜 Cordial', syrup: '酱油糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Vodka', bubbles: '苏打水', garnish: '橙皮', pairings: ['味噌', '黑芝麻', '姜'], tags: ['鲜味', '咸感'], avoidPairings: ['花香 Spritz', '低酸甜饮', '过量盐水'] },
  { ingredient: '康普茶', aliases: ['Kombucha'], cordial: '康普茶 Cordial', syrup: '康普茶糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Vodka', bubbles: '康普茶', garnish: '柠檬皮', pairings: ['姜', '乌龙茶', '蜂蜜'], tags: ['发酵', '酸感'] },
  { ingredient: '开菲尔', aliases: ['Kefir'], cordial: '开菲尔乳清 Cordial', syrup: '开菲尔糖浆', acid: '柠檬汁', primarySpirit: 'Gin', secondarySpirit: 'Rum', bubbles: '苏打水', garnish: '柠檬皮', pairings: ['芒果', '蜂蜜', '豆蔻'], tags: ['乳酸', '发酵'] },
  { ingredient: '米', aliases: ['Rice'], cordial: '米香 Cordial', syrup: '米香糖浆', acid: '柠檬汁', primarySpirit: 'Sake', secondarySpirit: 'Shochu', bubbles: '苏打水', garnish: '米香脆片', pairings: ['米曲', '柚子', '黑芝麻'], tags: ['谷物', '清甜'] },
  { ingredient: '大麦', aliases: ['Barley'], cordial: '大麦 Cordial', syrup: '大麦糖浆', acid: '柠檬汁', primarySpirit: 'Whisky', secondarySpirit: 'Shochu', bubbles: '苏打水', garnish: '橙皮', pairings: ['蜂蜜', '苹果', '咖啡'], tags: ['谷物', '烘焙'] },
];

export const ingredientRecipeProfiles = seeds.map(buildProfile);

export function getIngredientRecipeProfile(query: string) {
  const normalized = query.trim().toLowerCase();
  return ingredientRecipeProfiles.find((profile) =>
    [profile.ingredient, ...profile.aliases].some((alias) => alias.toLowerCase() === normalized),
  );
}

export function getIngredientRecipeAliases() {
  return ingredientRecipeProfiles.reduce<Record<string, string[]>>((acc, profile) => {
    acc[profile.ingredient] = [profile.ingredient, ...profile.aliases];
    return acc;
  }, {});
}
