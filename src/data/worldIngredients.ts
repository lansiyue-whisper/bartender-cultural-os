export type WorldRegion = {
  id: string;
  regionName: string;
  englishName: string;
  mapArea: 'americas' | 'europe-africa' | 'asia-oceania';
  description: string;
  ingredients: string[];
  flavorProfile: string[];
  localDrinks: string[];
  cocktailDirections: string[];
  pairingLogic: string;
  linkedRegionIds: string[];
  relatedMusicIds: string[];
};

export type IngredientDetail = {
  id: string;
  name: string;
  description: string;
  flavorTags: string[];
  baseSpirits: string[];
  techniques: string[];
  cocktailDirections: string[];
  relatedRegions: string[];
};

export type InspirationItem = {
  id: string;
  title: string;
  category:
    | 'Music'
    | 'Film'
    | 'Photography'
    | 'Architecture'
    | 'Travel'
    | 'Nature'
    | 'Books'
    | 'Record Covers';
  description: string;
  relatedFlavors: string[];
  relatedRegions: string[];
};

export type FieldNote = {
  id: string;
  date: string;
  place: string;
  weather: string;
  ingredients: string[];
  idea: string;
  relatedCocktails: string[];
  relatedMusic: string[];
  note: string;
};

export const worldRegions: WorldRegion[] = [
  {
    id: 'east-asia',
    regionName: '东亚',
    englishName: 'East Asia',
    mapArea: 'asia-oceania',
    description: '茶、米、柑橘、青叶与鲜味构成清爽而细致的调酒语言。',
    ingredients: ['紫苏', '乌龙茶', '柚子', '梅子', '山椒', '米曲'],
    flavorProfile: ['草本', '茶感', '酸感', '鲜味', '清爽'],
    localDrinks: ['清酒', '烧酒', '米酒', '泡盛'],
    cocktailDirections: ['柚子 Highball', '乌龙 Gin Sour', '紫苏 Paloma', '梅子 Spritz'],
    pairingLogic: '适合与金酒、龙舌兰、清酒、伏特加搭配，用来做清爽、草本、茶感和酸感结构。',
    linkedRegionIds: ['southeast-asia', 'nordic', 'oceania'],
    relatedMusicIds: ['ambient-rain-radio', 'minimal-tea-room'],
  },
  {
    id: 'southeast-asia',
    regionName: '东南亚',
    englishName: 'Southeast Asia',
    mapArea: 'asia-oceania',
    description: '热带香草、酸爽水果、椰香与香料让酒体更明亮、更有温度。',
    ingredients: ['斑斓', '香茅', '青柠', '罗望子', '椰子', '姜黄', '咖喱叶'],
    flavorProfile: ['热带', '酸爽', '香料', '椰香', '草本'],
    localDrinks: ['朗姆', '棕榈酒', '米酒', '椰子发酵饮品'],
    cocktailDirections: ['斑斓 Daiquiri', '香茅 Gin Fizz', '罗望子 Margarita', '椰子 Highball'],
    pairingLogic: '适合与朗姆、金酒、龙舌兰和发酵米酒搭配，建立热带酸感、椰香和香料尾韵。',
    linkedRegionIds: ['east-asia', 'south-asia', 'caribbean'],
    relatedMusicIds: ['border-market-dub', 'tropical-night-tape'],
  },
  {
    id: 'south-asia',
    regionName: '南亚',
    englishName: 'South Asia',
    mapArea: 'asia-oceania',
    description: '香料、乳酸、热带水果与茶构成更饱满、更有层次的饮品骨架。',
    ingredients: ['芒果', '豆蔻', '姜', '酸奶', '咖喱叶', '罗望子'],
    flavorProfile: ['香料', '乳酸', '热带', '酸甜', '辛香'],
    localDrinks: ['印度朗姆', '棕榈酒', '拉西', '茶'],
    cocktailDirections: ['芒果 Lassi Sour', '豆蔻 Daiquiri', '姜味 Highball', '罗望子 Rum Sour'],
    pairingLogic: '适合与朗姆、威士忌、金酒和茶类搭配，做乳酸酸甜、香料酸酒和姜味长饮。',
    linkedRegionIds: ['southeast-asia', 'middle-east', 'africa'],
    relatedMusicIds: ['monsoon-trip-hop', 'border-market-dub'],
  },
  {
    id: 'middle-east',
    regionName: '中东',
    englishName: 'Middle East',
    mapArea: 'europe-africa',
    description: '花香、坚果、石榴酸、咖啡和香料适合构建华丽但清晰的酒体。',
    ingredients: ['藏红花', '玫瑰水', '开心果', '椰枣', '小豆蔻', '石榴'],
    flavorProfile: ['花香', '坚果', '香料', '甜感', '果酸'],
    localDrinks: ['阿拉克', '葡萄酒', '石榴饮品', '咖啡'],
    cocktailDirections: ['玫瑰 Martini', '石榴 Negroni', '开心果 Sour', '豆蔻 Old Fashioned'],
    pairingLogic: '适合与金酒、白兰地、威士忌和阿拉克搭配，做花香、坚果和香料型短饮。',
    linkedRegionIds: ['mediterranean', 'south-asia', 'africa'],
    relatedMusicIds: ['desert-ambient', 'coffee-house-minimal'],
  },
  {
    id: 'mediterranean',
    regionName: '地中海',
    englishName: 'Mediterranean',
    mapArea: 'europe-africa',
    description: '草本、柑橘、葡萄、油脂感和矿物感适合 aperitivo 与低酒精结构。',
    ingredients: ['橄榄', '无花果', '迷迭香', '百里香', '葡萄', '柑橘'],
    flavorProfile: ['草本', '果干', '油脂感', '柑橘', '矿物感'],
    localDrinks: ['葡萄酒', '味美思', '阿玛罗', '茴香酒'],
    cocktailDirections: ['无花果 Boulevardier', '迷迭香 Gin Tonic', '橄榄 Martini', '柑橘 Spritz'],
    pairingLogic: '适合与金酒、味美思、阿玛罗、白兰地搭配，用来建立餐前酒、咸感 Martini 和果干苦甜结构。',
    linkedRegionIds: ['middle-east', 'nordic', 'latin-america'],
    relatedMusicIds: ['vinyl-aperitivo', 'coastal-minimal'],
  },
  {
    id: 'nordic',
    regionName: '北欧',
    englishName: 'Nordic',
    mapArea: 'europe-africa',
    description: '冷感浆果、花香、莳萝、云杉和谷物让鸡尾酒更干净、更有森林感。',
    ingredients: ['接骨木花', '云莓', '越橘', '莳萝', '云杉', '黑麦'],
    flavorProfile: ['冷感', '花香', '浆果', '木质', '草本'],
    localDrinks: ['Aquavit', '伏特加', '苹果酒', '蜂蜜酒'],
    cocktailDirections: ['接骨木 Martini', '云莓 Sour', '莳萝 Martini', '黑麦 Highball'],
    pairingLogic: '适合与伏特加、金酒、Aquavit 和苹果酒搭配，做冷感花香、浆果酸酒和草本 Martini。',
    linkedRegionIds: ['mediterranean', 'east-asia', 'oceania'],
    relatedMusicIds: ['glacial-ambient', 'minimal-tea-room'],
  },
  {
    id: 'latin-america',
    regionName: '拉丁美洲',
    englishName: 'Latin America',
    mapArea: 'americas',
    description: '玉米、可可、辣椒、热带水果、烟熏与土地感提供强烈的骨架。',
    ingredients: ['玉米', '可可', '辣椒', '番石榴', '百香果', '龙舌兰', '秘鲁圣木'],
    flavorProfile: ['热带', '辛辣', '酸甜', '泥土感', '烟熏'],
    localDrinks: ['龙舌兰', '梅斯卡尔', '皮斯科', '卡莎萨', '朗姆'],
    cocktailDirections: ['番石榴 Margarita', '可可 Old Fashioned', '百香果 Pisco Sour', '辣椒 Mezcal Paloma'],
    pairingLogic: '适合与龙舌兰、梅斯卡尔、皮斯科、卡莎萨搭配，做热带酸甜、可可苦香和烟熏辛辣结构。',
    linkedRegionIds: ['caribbean', 'mediterranean', 'africa'],
    relatedMusicIds: ['peru-psych-cumbia', 'border-market-dub'],
  },
  {
    id: 'caribbean',
    regionName: '加勒比',
    englishName: 'Caribbean',
    mapArea: 'americas',
    description: '甘蔗、朗姆、热带水果、香料与木质感构成明亮而有律动的酒体。',
    ingredients: ['朗姆', '甘蔗', '椰子', '菠萝', '多香果', '青柠'],
    flavorProfile: ['热带', '香料', '甜感', '酸爽', '木质'],
    localDrinks: ['朗姆', '甘蔗酒', '香料酒'],
    cocktailDirections: ['多香果 Daiquiri', '菠萝 Rum Punch', '椰子 Mai Tai', '甘蔗 Highball'],
    pairingLogic: '适合与朗姆、苦精、青柠和热带水果搭配，做 Daiquiri、Punch、Tiki 和长饮。',
    linkedRegionIds: ['latin-america', 'southeast-asia', 'africa'],
    relatedMusicIds: ['dub-pressure', 'tropical-night-tape'],
  },
  {
    id: 'africa',
    regionName: '非洲',
    englishName: 'Africa',
    mapArea: 'europe-africa',
    description: '洛神花、罗望子、咖啡、可可和生姜带来酸感、果干、泥土和苦香。',
    ingredients: ['洛神花', '罗望子', '咖啡', '可可', '猴面包树果', '生姜'],
    flavorProfile: ['酸感', '果干', '泥土', '香料', '苦感'],
    localDrinks: ['棕榈酒', '蜂蜜酒', '咖啡', '发酵谷物饮品'],
    cocktailDirections: ['洛神花 Spritz', '咖啡 Negroni', '罗望子 Sour', '生姜 Highball'],
    pairingLogic: '适合与朗姆、金酒、威士忌、咖啡和发酵饮品搭配，做酸感 Spritz、咖啡苦甜和姜味长饮。',
    linkedRegionIds: ['middle-east', 'south-asia', 'caribbean'],
    relatedMusicIds: ['desert-ambient', 'afro-dub-archive'],
  },
  {
    id: 'oceania',
    regionName: '大洋洲',
    englishName: 'Oceania',
    mapArea: 'asia-oceania',
    description: '指橙、柠檬桃金娘、尤加利和蜂蜜带来柑橘、树脂、花香与清爽草本感。',
    ingredients: ['指橙', '柠檬桃金娘', '尤加利', '蜂蜜', '热带水果'],
    flavorProfile: ['柑橘', '树脂', '花香', '清爽', '草本'],
    localDrinks: ['葡萄酒', '精酿啤酒', '朗姆', '琴酒'],
    cocktailDirections: ['指橙 Gin Fizz', '柠檬桃金娘 Martini', '尤加利 Highball', '蜂蜜 Sour'],
    pairingLogic: '适合与琴酒、伏特加、朗姆和蜂蜜搭配，做高酸气泡、树脂草本和花香酸酒。',
    linkedRegionIds: ['east-asia', 'nordic', 'southeast-asia'],
    relatedMusicIds: ['field-recording-coast', 'glacial-ambient'],
  },
];

export const ingredientDetails: IngredientDetail[] = [
  {
    id: 'shiso',
    name: '紫苏',
    description: '介于薄荷、罗勒、青梅皮和雨后绿叶之间，适合做清爽、草本和酸感结构。',
    flavorTags: ['草本', '青梅', '清爽', '茶感'],
    baseSpirits: ['金酒', '龙舌兰', '清酒', '伏特加'],
    techniques: ['拍叶增香', '冷萃', '气泡化', '盐边'],
    cocktailDirections: ['紫苏 Paloma', 'Shiso Highball', '紫苏清酒 Collins'],
    relatedRegions: ['east-asia'],
  },
  {
    id: 'oolong-tea',
    name: '乌龙茶',
    description: '带烘焙茶香、矿物感和轻微单宁，可为酸酒和高球增加长度。',
    flavorTags: ['茶感', '烘焙', '矿物', '发酵'],
    baseSpirits: ['金酒', '威士忌', '清酒', '朗姆'],
    techniques: ['冷泡', '茶糖浆', '奶洗', '碳酸化'],
    cocktailDirections: ['乌龙 Gin Sour', 'Oolong Highball', '乌龙 Milk Punch'],
    relatedRegions: ['east-asia'],
  },
  {
    id: 'pandan',
    name: '斑斓',
    description: '带椰奶、糯米、青草和热带甜香，适合让朗姆酸酒更柔和。',
    flavorTags: ['热带', '椰香', '草本', '甜感'],
    baseSpirits: ['朗姆', '金酒', '伏特加', '椰子酒'],
    techniques: ['浸泡', '糖浆', '奶洗', '椰奶澄清'],
    cocktailDirections: ['斑斓 Daiquiri', 'Pandan Colada', '斑斓 Gin Fizz'],
    relatedRegions: ['southeast-asia'],
  },
  {
    id: 'tamarind',
    name: '罗望子',
    description: '酸、果干、咸感和一点棕色糖香，可以替代部分柑橘酸度。',
    flavorTags: ['酸爽', '果干', '咸感', '泥土'],
    baseSpirits: ['龙舌兰', '朗姆', '梅斯卡尔', '威士忌'],
    techniques: ['果泥', '糖浆', '酸甜平衡', '盐水调味'],
    cocktailDirections: ['罗望子 Margarita', 'Tamarind Sour', '罗望子 Rum Sour'],
    relatedRegions: ['southeast-asia', 'south-asia', 'africa'],
  },
  {
    id: 'cardamom',
    name: '豆蔻',
    description: '清凉、辛香、带花感，能把短饮的香气推到更高的位置。',
    flavorTags: ['香料', '花香', '清凉', '甜感'],
    baseSpirits: ['朗姆', '威士忌', '金酒', '白兰地'],
    techniques: ['香料糖浆', '苦精', '脂洗', '热浸泡'],
    cocktailDirections: ['豆蔻 Daiquiri', '豆蔻 Old Fashioned', '豆蔻 Coffee Sour'],
    relatedRegions: ['south-asia', 'middle-east'],
  },
  {
    id: 'rose-water',
    name: '玫瑰水',
    description: '花香直接而敏感，适合小剂量进入 Martini、Sour 或 Spritz。',
    flavorTags: ['花香', '甜感', '香料', '果酸'],
    baseSpirits: ['金酒', '伏特加', '阿拉克', '白兰地'],
    techniques: ['喷雾', '滴加', '糖浆', '香气修饰'],
    cocktailDirections: ['玫瑰 Martini', 'Rose Spritz', '玫瑰 Gin Sour'],
    relatedRegions: ['middle-east'],
  },
  {
    id: 'fig',
    name: '无花果',
    description: '果干、蜂蜜、轻微植物乳香，适合与苦味和木桶感结合。',
    flavorTags: ['果干', '甜感', '草本', '油脂感'],
    baseSpirits: ['波本', '白兰地', '金酒', '味美思'],
    techniques: ['果酱', '烘烤', '浸泡', '澄清'],
    cocktailDirections: ['无花果 Boulevardier', 'Fig Sour', '无花果 Vermouth Spritz'],
    relatedRegions: ['mediterranean'],
  },
  {
    id: 'elderflower',
    name: '接骨木花',
    description: '冷感白花、梨和蜂蜜水感，是北欧花香调酒的轻盈入口。',
    flavorTags: ['冷感', '花香', '浆果', '清爽'],
    baseSpirits: ['金酒', '伏特加', 'Aquavit', '起泡酒'],
    techniques: ['利口酒', '糖浆', '喷雾', '气泡化'],
    cocktailDirections: ['接骨木 Martini', 'Elderflower Collins', '接骨木 Spritz'],
    relatedRegions: ['nordic'],
  },
  {
    id: 'cacao',
    name: '可可',
    description: '苦香、泥土、烘焙和脂肪感，可以连接咖啡、朗姆、梅斯卡尔和威士忌。',
    flavorTags: ['苦感', '泥土', '烘焙', '甜感'],
    baseSpirits: ['朗姆', '梅斯卡尔', '波本', '皮斯科'],
    techniques: ['可可浸泡', '脂洗', '苦精', '热萃'],
    cocktailDirections: ['可可 Old Fashioned', 'Cacao Negroni', '可可 Pisco Sour'],
    relatedRegions: ['latin-america', 'africa'],
  },
  {
    id: 'palo-santo',
    name: '秘鲁圣木',
    description: '树脂、柑橘皮、烟感和神圣木质香，适合与皮斯科和梅斯卡尔建立香气桥。',
    flavorTags: ['树脂', '烟熏', '柑橘', '木质'],
    baseSpirits: ['皮斯科', '梅斯卡尔', '金酒', '白兰地'],
    techniques: ['烟熏杯', '香气喷雾', '浸泡', '木质苦精'],
    cocktailDirections: ['Palo Santo Pisco Sour', '圣木 Martini', '圣木 Mezcal Highball'],
    relatedRegions: ['latin-america'],
  },
  {
    id: 'allspice',
    name: '多香果',
    description: '肉桂、丁香、肉豆蔻与胡椒的复合香料感，是朗姆体系里的结构支点。',
    flavorTags: ['香料', '木质', '甜感', '热带'],
    baseSpirits: ['朗姆', '波本', '梅斯卡尔', '金酒'],
    techniques: ['Pimento Dram', '香料糖浆', '热浸泡', '苦精'],
    cocktailDirections: ['多香果 Daiquiri', 'Allspice Rum Punch', '多香果 Mai Tai'],
    relatedRegions: ['caribbean'],
  },
  {
    id: 'hibiscus',
    name: '洛神花',
    description: '明亮酸感、红色果干和花茶感，适合 Spritz、Sour 和低酒精长饮。',
    flavorTags: ['酸感', '果干', '花香', '苦感'],
    baseSpirits: ['金酒', '朗姆', '伏特加', '起泡酒'],
    techniques: ['冷泡', '糖浆', '发酵茶', '气泡化'],
    cocktailDirections: ['洛神花 Spritz', 'Hibiscus Sour', '洛神花 Highball'],
    relatedRegions: ['africa'],
  },
  {
    id: 'finger-lime',
    name: '指橙',
    description: '像柑橘鱼子一样爆开的酸感，适合让 Gin Fizz 和 Highball 更有触感。',
    flavorTags: ['柑橘', '酸感', '清爽', '质感'],
    baseSpirits: ['琴酒', '伏特加', '朗姆', '起泡酒'],
    techniques: ['鲜果装饰', '酸度校准', '气泡化', '盐水'],
    cocktailDirections: ['指橙 Gin Fizz', 'Finger Lime Highball', '指橙 Spritz'],
    relatedRegions: ['oceania'],
  },
];

export const inspirationArchive: InspirationItem[] = [
  {
    id: 'ambient-rain-radio',
    title: 'Rain Radio at 2AM',
    category: 'Music',
    description: '低照度、雨声、玻璃杯和慢速电子乐，适合茶感、清爽与夜间 Highball。',
    relatedFlavors: ['茶感', '清爽', '冷感'],
    relatedRegions: ['east-asia', 'nordic'],
  },
  {
    id: 'border-market-dub',
    title: 'Border Market Dub',
    category: 'Music',
    description: '边境市场、香料、发酵水果和低频回声，适合热带酸酒与香料长饮。',
    relatedFlavors: ['香料', '热带', '发酵'],
    relatedRegions: ['southeast-asia', 'south-asia', 'latin-america'],
  },
  {
    id: 'monsoon-trip-hop',
    title: 'Monsoon Trip Hop',
    category: 'Music',
    description: '雨季、潮湿鼓点、茶和热带水果，适合芒果、姜、罗望子的酸甜结构。',
    relatedFlavors: ['乳酸', '酸甜', '辛香'],
    relatedRegions: ['south-asia', 'southeast-asia'],
  },
  {
    id: 'desert-ambient',
    title: 'Desert Ambient',
    category: 'Music',
    description: '干燥空气、香料、咖啡与树脂香，适合中东和非洲的花香苦甜饮品。',
    relatedFlavors: ['香料', '花香', '苦感'],
    relatedRegions: ['middle-east', 'africa'],
  },
  {
    id: 'vinyl-aperitivo',
    title: 'Aperitivo Record Sleeve',
    category: 'Record Covers',
    description: '橄榄绿、柑橘橙、葡萄紫和复古唱片封面，可转译为低酒精餐前酒。',
    relatedFlavors: ['柑橘', '草本', '矿物感'],
    relatedRegions: ['mediterranean'],
  },
  {
    id: 'glacial-ambient',
    title: 'Glacial Ambient',
    category: 'Nature',
    description: '冷空气、浆果、云杉与白色花香，适合北欧和大洋洲的冷感 Martini。',
    relatedFlavors: ['冷感', '木质', '花香'],
    relatedRegions: ['nordic', 'oceania'],
  },
  {
    id: 'peru-psych-cumbia',
    title: 'Peruvian Psych Cumbia',
    category: 'Music',
    description: '皮斯科、圣木、热带酸度和迷幻吉他，可以转译成烟感 Pisco Sour。',
    relatedFlavors: ['烟熏', '酸甜', '树脂'],
    relatedRegions: ['latin-america'],
  },
  {
    id: 'dub-pressure',
    title: 'Dub Pressure',
    category: 'Music',
    description: '低频、延迟、甘蔗和木桶感，是朗姆 Punch 与 Daiquiri 的声音结构。',
    relatedFlavors: ['热带', '木质', '甜感'],
    relatedRegions: ['caribbean'],
  },
  {
    id: 'yunnan-rain-market',
    title: 'Yunnan Rain Market',
    category: 'Travel',
    description: '雨季市场、菌子、花、乳制品和香料，可作为未来 Field Notes 的灵感索引。',
    relatedFlavors: ['鲜味', '花香', '奶香'],
    relatedRegions: ['east-asia', 'south-asia'],
  },
  {
    id: 'night-bar-photography',
    title: 'Night Bar Photography',
    category: 'Photography',
    description: '黑色背景、手部动作、冷凝水和边缘光，适合 Highball 与 Martini 的视觉语言。',
    relatedFlavors: ['清爽', '冷感', '矿物感'],
    relatedRegions: ['east-asia', 'nordic', 'oceania'],
  },
  {
    id: 'plant-atlas',
    title: 'Botanical Specimen Pages',
    category: 'Books',
    description: '植物标本、拉丁名、手写注释和产地地图，适合构建食材详情页。',
    relatedFlavors: ['草本', '花香', '木质'],
    relatedRegions: ['mediterranean', 'oceania', 'east-asia'],
  },
  {
    id: 'fermentation-architecture',
    title: 'Fermentation Architecture',
    category: 'Architecture',
    description: '酒窖、陶罐、木桶和温度曲线，帮助理解发酵饮品与鸡尾酒骨架。',
    relatedFlavors: ['发酵', '酸感', '鲜味'],
    relatedRegions: ['east-asia', 'africa', 'mediterranean'],
  },
];

export const fieldNotes: FieldNote[] = [
  {
    id: 'siguniang-mushroom-note',
    date: '2026.06',
    place: '川西 / 四姑娘山',
    weather: '山雾、湿润、低温',
    ingredients: ['野生菌', '牦牛乳', '青稞', '花椒'],
    idea: '菌汤、烟熏威士忌、山野咸鲜',
    relatedCocktails: ['菌汤威士忌 Sour'],
    relatedMusic: ['Ambient Dub', 'Field Recording'],
    note: '我们不是为了带走多少菌子，而是在寻找菌子的过程中重新感受土地、树木、湿度、气味与季节。',
  },
  {
    id: 'peru-palo-santo-pisco',
    date: '2026.07',
    place: '秘鲁 / 安第斯与海岸',
    weather: '干燥、冷雾、强日照',
    ingredients: ['秘鲁圣木', '皮斯科', '青柠', '可可'],
    idea: '圣木烟感、皮斯科酸酒、柑橘树脂',
    relatedCocktails: ['Palo Santo Pisco Sour'],
    relatedMusic: ['Peruvian Psych Cumbia', 'Ambient Guitar'],
    note: '圣木不是为了制造烟雾表演，而是让皮斯科的葡萄香气多一层树脂和土地的回声。',
  },
];

export function slugIngredient(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\u4e00-\u9fa5a-z0-9-]/g, '');
}

export function getRegion(id: string) {
  return worldRegions.find((region) => region.id === id) ?? worldRegions[0];
}

export function getRegionsForIngredient(name: string) {
  return worldRegions.filter((region) => region.ingredients.includes(name));
}

export function getIngredientDetail(name: string): IngredientDetail {
  const explicit = ingredientDetails.find((ingredient) => ingredient.name === name);
  if (explicit) return explicit;

  const relatedRegions = getRegionsForIngredient(name);
  const primaryRegion = relatedRegions[0] ?? worldRegions[0];

  return {
    id: slugIngredient(name),
    name,
    description: `${name} 是 ${primaryRegion.regionName} 风味地图中的代表食材，可作为地区风味进入鸡尾酒创作的入口。`,
    flavorTags: primaryRegion.flavorProfile.slice(0, 5),
    baseSpirits: primaryRegion.localDrinks.slice(0, 4),
    techniques: ['浸泡', '糖浆', '酸甜平衡', '香气修饰'],
    cocktailDirections: primaryRegion.cocktailDirections,
    relatedRegions: relatedRegions.map((region) => region.id),
  };
}

export function getInspirationsForRegion(regionId: string) {
  return inspirationArchive.filter((item) => item.relatedRegions.includes(regionId));
}
