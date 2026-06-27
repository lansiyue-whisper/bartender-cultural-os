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
  englishName: string;
  category: string;
  regions: string[];
  story: string;
  flavorWheel: {
    fresh: number;
    acid: number;
    sweet: number;
    floral: number;
    herbal: number;
    savory: number;
  };
  season: string;
  suitableSpirits: string[];
  techniques: string[];
  cocktailDirections: string[];
  relatedIngredients: {
    similar: string[];
    substitutes: string[];
    pairings: string[];
  };
};

export type IngredientConnection = {
  ingredient: string;
  similarFlavors: string[];
  substitutions: string[];
  pairWith: string[];
};

type IngredientProfileData = Omit<IngredientDetail, 'id' | 'name' | 'englishName' | 'regions'>;

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
    description: '茶、米、柑橘、青叶、发酵与鲜味构成清爽而细致的调酒语言。',
    ingredients: ['紫苏', '柚子', '乌龙茶', '梅子', '山椒', '米曲', '味噌', '昆布', '樱花', '焙茶', '玄米茶', '白桃', '梨', '黑芝麻', '桂花'],
    flavorProfile: ['草本', '茶感', '酸感', '鲜味', '清爽', '发酵'],
    localDrinks: ['清酒', '烧酒', '米酒', '泡盛', '梅酒', '黄酒'],
    cocktailDirections: ['Yuzu Highball', 'Oolong Gin Sour', 'Shiso Paloma', 'Hojicha Old Fashioned', 'Miso Martini', 'Ume Spritz', 'Sesame Milk Punch', 'Sakura Collins'],
    pairingLogic: '适合与 Gin、Tequila、Sake、Vodka 搭配，用来建立清爽、草本、茶感、酸感和鲜味结构。',
    linkedRegionIds: ['southeast-asia', 'nordic', 'oceania', 'eastern-europe'],
    relatedMusicIds: ['ambient-rain-radio', 'minimal-tea-room'],
  },
  {
    id: 'southeast-asia',
    regionName: '东南亚',
    englishName: 'Southeast Asia',
    mapArea: 'asia-oceania',
    description: '热带香草、酸爽水果、椰香、香料和发酵咸感让酒体更明亮、更有温度。',
    ingredients: ['斑斓', '香茅', '青柠', '罗望子', '椰子', '姜黄', '咖喱叶', '椰糖', '班兰叶', '泰国罗勒', '红毛丹', '山竹', '菠萝蜜', '芭蕉', '鱼露'],
    flavorProfile: ['热带', '酸爽', '香料', '椰香', '草本', '咸鲜'],
    localDrinks: ['朗姆', '棕榈酒', '米酒', '椰子发酵饮品', 'Arrack', '甘蔗酒'],
    cocktailDirections: ['Pandan Daiquiri', 'Lemongrass Gin Fizz', 'Tamarind Margarita', 'Coconut Highball', 'Thai Basil Smash', 'Mangosteen Sour', 'Curry Leaf Gimlet', 'Palm Sugar Old Fashioned'],
    pairingLogic: '适合与 Rum、Gin、Tequila 和发酵米酒搭配，建立热带酸感、椰香、香料尾韵和轻微咸鲜。',
    linkedRegionIds: ['east-asia', 'south-asia', 'caribbean', 'oceania'],
    relatedMusicIds: ['border-market-dub', 'tropical-night-tape'],
  },
  {
    id: 'south-asia',
    regionName: '南亚',
    englishName: 'South Asia',
    mapArea: 'asia-oceania',
    description: '香料、乳酸、热带水果、茶和棕榈糖构成更饱满、更有层次的饮品骨架。',
    ingredients: ['芒果', '豆蔻', '姜', '酸奶', '咖喱叶', '罗望子', '藏红花', '玫瑰水', '椰奶', '黑胡椒', '孜然', '香菜籽', '肉桂', '印度茶', '棕榈糖'],
    flavorProfile: ['香料', '乳酸', '热带', '酸甜', '辛香', '茶感'],
    localDrinks: ['印度朗姆', '棕榈酒', '拉西', '茶', 'Feni', 'Toddy'],
    cocktailDirections: ['Mango Lassi Sour', 'Cardamom Daiquiri', 'Ginger Highball', 'Tamarind Rum Sour', 'Chai Milk Punch', 'Curry Leaf Gimlet', 'Saffron Martini', 'Palm Sugar Flip'],
    pairingLogic: '适合与 Rum、Whisky、Gin、Brandy 和茶类搭配，做乳酸酸甜、香料酸酒和姜味长饮。',
    linkedRegionIds: ['southeast-asia', 'middle-east', 'africa', 'east-asia'],
    relatedMusicIds: ['monsoon-trip-hop', 'border-market-dub'],
  },
  {
    id: 'middle-east',
    regionName: '中东',
    englishName: 'Middle East',
    mapArea: 'europe-africa',
    description: '花香、坚果、石榴酸、咖啡、蜂蜜和香料适合构建华丽但清晰的酒体。',
    ingredients: ['玫瑰水', '开心果', '椰枣', '小豆蔻', '石榴', '无花果', '芝麻', '橙花水', '薄荷', '藏红花', '杏仁', '葡萄', '咖啡', '蜂蜜', '茴香'],
    flavorProfile: ['花香', '坚果', '香料', '甜感', '果酸', '咖啡'],
    localDrinks: ['阿拉克', '葡萄酒', '石榴饮品', '咖啡', '薄荷茶', '蜂蜜酒'],
    cocktailDirections: ['Rose Martini', 'Pomegranate Negroni', 'Pistachio Sour', 'Cardamom Old Fashioned', 'Orange Blossom Collins', 'Date Rum Flip', 'Arak Spritz', 'Saffron Gimlet'],
    pairingLogic: '适合与 Gin、Brandy、Whisky、Arak 和 Rum 搭配，做花香、坚果、咖啡和香料型短饮。',
    linkedRegionIds: ['mediterranean', 'south-asia', 'africa', 'eastern-europe'],
    relatedMusicIds: ['desert-ambient', 'coffee-house-minimal'],
  },
  {
    id: 'mediterranean',
    regionName: '地中海',
    englishName: 'Mediterranean',
    mapArea: 'europe-africa',
    description: '草本、柑橘、葡萄、油脂感、海盐和矿物感适合 aperitivo 与低酒精结构。',
    ingredients: ['橄榄', '无花果', '迷迭香', '百里香', '葡萄', '柑橘', '番茄', '罗勒', '茴香', '杏仁', '开心果', '鼠尾草', '海盐', '薰衣草', '石榴'],
    flavorProfile: ['草本', '果干', '油脂感', '柑橘', '矿物感', '咸感'],
    localDrinks: ['葡萄酒', '味美思', '阿玛罗', '茴香酒', 'Grappa', 'Aperitivo'],
    cocktailDirections: ['Fig Boulevardier', 'Rosemary Gin Tonic', 'Olive Martini', 'Citrus Spritz', 'Tomato Vermouth Highball', 'Basil Gimlet', 'Lavender Collins', 'Sea Salt Negroni'],
    pairingLogic: '适合与 Gin、Vermouth、Amaro、Brandy 和 Anise Spirit 搭配，建立餐前酒、咸感 Martini 和果干苦甜结构。',
    linkedRegionIds: ['middle-east', 'nordic', 'latin-america', 'eastern-europe'],
    relatedMusicIds: ['vinyl-aperitivo', 'coastal-minimal'],
  },
  {
    id: 'nordic',
    regionName: '北欧',
    englishName: 'Nordic',
    mapArea: 'europe-africa',
    description: '冷感浆果、白色花香、莳萝、云杉、谷物和树汁让鸡尾酒更干净、更有森林感。',
    ingredients: ['接骨木花', '云莓', '越橘', '黑醋栗', '莳萝', '云杉', '黑麦', '苹果', '蜂蜜', '杜松子', '桦树汁', '海棠果', '酸奶油', '荨麻', '甘草'],
    flavorProfile: ['冷感', '花香', '浆果', '木质', '草本', '谷物'],
    localDrinks: ['Aquavit', '伏特加', '苹果酒', '蜂蜜酒', '黑麦蒸馏酒', '浆果利口酒'],
    cocktailDirections: ['Elderflower Martini', 'Cloudberry Sour', 'Dill Martini', 'Rye Highball', 'Spruce Collins', 'Lingonberry Spritz', 'Birch Vodka Tonic', 'Juniper Aquavit Gimlet'],
    pairingLogic: '适合与 Vodka、Gin、Aquavit、Cider 和 Rye 搭配，做冷感花香、浆果酸酒和草本 Martini。',
    linkedRegionIds: ['mediterranean', 'east-asia', 'oceania', 'eastern-europe'],
    relatedMusicIds: ['glacial-ambient', 'minimal-tea-room'],
  },
  {
    id: 'latin-america',
    regionName: '拉丁美洲',
    englishName: 'Latin America',
    mapArea: 'americas',
    description: '玉米、可可、辣椒、热带水果、咖啡、香草、龙舌兰和烟熏感提供强烈骨架。',
    ingredients: ['玉米', '可可', '辣椒', '番石榴', '百香果', '龙舌兰', '菠萝', '青柠', '木瓜', '咖啡', '香草', '仙人掌', '罗望子', '椰子', '阿萨伊'],
    flavorProfile: ['热带', '辛辣', '酸甜', '泥土感', '烟熏', '可可'],
    localDrinks: ['龙舌兰', '梅斯卡尔', '皮斯科', '卡莎萨', '朗姆', 'Pulque'],
    cocktailDirections: ['Guava Margarita', 'Cacao Old Fashioned', 'Passionfruit Pisco Sour', 'Chile Mezcal Paloma', 'Corn Milk Punch', 'Açai Daiquiri', 'Vanilla Cachaça Sour', 'Nopal Highball'],
    pairingLogic: '适合与 Tequila、Mezcal、Pisco、Cachaça 和 Rum 搭配，做热带酸甜、可可苦香和烟熏辛辣结构。',
    linkedRegionIds: ['caribbean', 'mediterranean', 'africa', 'north-america'],
    relatedMusicIds: ['peru-psych-cumbia', 'border-market-dub'],
  },
  {
    id: 'caribbean',
    regionName: '加勒比',
    englishName: 'Caribbean',
    mapArea: 'americas',
    description: '甘蔗、朗姆、热带水果、木桶、香料和糖蜜构成明亮而有律动的酒体。',
    ingredients: ['甘蔗', '朗姆', '椰子', '菠萝', '多香果', '青柠', '肉豆蔻', '香蕉', '芒果', '木槿', '咖啡', '可可', '姜', '糖蜜', '香草'],
    flavorProfile: ['热带', '香料', '甜感', '酸爽', '木质', '糖蜜'],
    localDrinks: ['朗姆', '甘蔗酒', '香料酒', 'Falernum', 'Ting', 'Rum Cream'],
    cocktailDirections: ['Allspice Daiquiri', 'Pineapple Rum Punch', 'Coconut Mai Tai', 'Cane Highball', 'Banana Rum Old Fashioned', 'Molasses Flip', 'Hibiscus Planter Punch', 'Nutmeg Swizzle'],
    pairingLogic: '适合与 Rum、Falernum、Bitters、青柠和热带水果搭配，做 Daiquiri、Punch、Tiki 和长饮。',
    linkedRegionIds: ['latin-america', 'southeast-asia', 'africa', 'north-america'],
    relatedMusicIds: ['dub-pressure', 'tropical-night-tape'],
  },
  {
    id: 'africa',
    regionName: '非洲',
    englishName: 'Africa',
    mapArea: 'europe-africa',
    description: '洛神花、罗望子、咖啡、可可、猴面包树果、生姜和谷物发酵带来酸感、果干、泥土和苦香。',
    ingredients: ['洛神花', '罗望子', '咖啡', '可可', '猴面包树果', '生姜', '芝麻', '椰枣', '芒果', '木槿', '蜂蜜', '小米', '棕榈果', '花生', '香料茶'],
    flavorProfile: ['酸感', '果干', '泥土', '香料', '苦感', '谷物'],
    localDrinks: ['棕榈酒', '蜂蜜酒', '咖啡', '发酵谷物饮品', '姜汁饮品', '香料茶'],
    cocktailDirections: ['Hibiscus Spritz', 'Coffee Negroni', 'Tamarind Sour', 'Ginger Highball', 'Baobab Collins', 'Sesame Rum Sour', 'Palm Wine Spritz', 'Peanut Milk Punch'],
    pairingLogic: '适合与 Rum、Gin、Whisky、Coffee 和发酵饮品搭配，做酸感 Spritz、咖啡苦甜和姜味长饮。',
    linkedRegionIds: ['middle-east', 'south-asia', 'caribbean', 'latin-america'],
    relatedMusicIds: ['desert-ambient', 'afro-dub-archive'],
  },
  {
    id: 'oceania',
    regionName: '大洋洲',
    englishName: 'Oceania',
    mapArea: 'asia-oceania',
    description: '指橙、柠檬桃金娘、尤加利、蜂蜜、海盐和原生香料带来柑橘、树脂、花香与清爽草本感。',
    ingredients: ['指橙', '柠檬桃金娘', '尤加利', '蜂蜜', '热带水果', '澳洲坚果', '百香果', '金合欢籽', '塔斯马尼亚胡椒', '海盐', '葡萄', '苹果', '薄荷', '姜', '椰子'],
    flavorProfile: ['柑橘', '树脂', '花香', '清爽', '草本', '海盐'],
    localDrinks: ['葡萄酒', '精酿啤酒', '朗姆', '琴酒', '苹果酒', '蜂蜜酒'],
    cocktailDirections: ['Finger Lime Gin Fizz', 'Lemon Myrtle Martini', 'Eucalyptus Highball', 'Honey Sour', 'Macadamia Milk Punch', 'Wattleseed Old Fashioned', 'Tasmanian Pepper Gimlet', 'Sea Salt Collins'],
    pairingLogic: '适合与 Gin、Vodka、Rum、Wine 和 Honey 搭配，做高酸气泡、树脂草本和花香酸酒。',
    linkedRegionIds: ['east-asia', 'nordic', 'southeast-asia', 'north-america'],
    relatedMusicIds: ['field-recording-coast', 'glacial-ambient'],
  },
  {
    id: 'eastern-europe',
    regionName: '东欧',
    englishName: 'Eastern Europe',
    mapArea: 'europe-africa',
    description: '黑麦、酸樱桃、甜菜根、蜂蜜、发酵乳和香草籽让酒体带有酸感、谷物和深色浆果结构。',
    ingredients: ['黑麦', '甜菜根', '酸樱桃', '莳萝', '蜂蜜', '李子', '苹果', '酸奶油', '葛缕子', '黑加仑', '越橘', '荞麦', '核桃', '接骨木', '伏特加'],
    flavorProfile: ['谷物', '酸果', '泥土', '蜂蜜', '草本', '乳酸'],
    localDrinks: ['伏特加', '黑麦酒', '蜂蜜酒', '水果白兰地', 'Kvass', '草本利口酒'],
    cocktailDirections: ['Rye Honey Highball', 'Beetroot Martini', 'Sour Cherry Vodka Sour', 'Dill Gimlet', 'Plum Brandy Old Fashioned', 'Buckwheat Milk Punch', 'Blackcurrant Collins', 'Caraway Aquavit Sour'],
    pairingLogic: '适合与 Vodka、Rye、Fruit Brandy、Honey 和酸果搭配，做谷物长饮、酸樱桃 Sour 和泥土感 Martini。',
    linkedRegionIds: ['nordic', 'mediterranean', 'middle-east', 'east-asia'],
    relatedMusicIds: ['glacial-ambient', 'vinyl-aperitivo'],
  },
  {
    id: 'north-america',
    regionName: '北美',
    englishName: 'North America',
    mapArea: 'americas',
    description: '枫糖、玉米、浆果、坚果、烟熏木和黑麦构成甜香、木质、谷物和果酸结构。',
    ingredients: ['枫糖', '玉米', '苹果', '蔓越莓', '蓝莓', '山核桃', '花生', '黑莓', '南瓜', '薄荷', '烟熏木', '咖啡', '樱桃', '蜂蜜', '黑麦'],
    flavorProfile: ['木质', '谷物', '浆果', '甜香', '烟熏', '坚果'],
    localDrinks: ['波本', '黑麦威士忌', '苹果酒', '精酿啤酒', '枫糖酒', '咖啡'],
    cocktailDirections: ['Maple Old Fashioned', 'Corn Whiskey Sour', 'Apple Rye Highball', 'Cranberry Collins', 'Blueberry Bourbon Smash', 'Pecan Milk Punch', 'Smoked Wood Manhattan', 'Pumpkin Flip'],
    pairingLogic: '适合与 Bourbon、Rye、Apple Brandy、Rum 和 Coffee 搭配，做木桶感短饮、浆果酸酒和烟熏长饮。',
    linkedRegionIds: ['latin-america', 'caribbean', 'nordic', 'oceania'],
    relatedMusicIds: ['dub-pressure', 'night-bar-photography'],
  },
];

const englishNames: Record<string, string> = {
  紫苏: 'Shiso',
  柚子: 'Yuzu',
  乌龙茶: 'Oolong Tea',
  梅子: 'Ume Plum',
  山椒: 'Sansho Pepper',
  米曲: 'Koji',
  味噌: 'Miso',
  昆布: 'Kombu',
  樱花: 'Sakura',
  焙茶: 'Hojicha',
  玄米茶: 'Genmaicha',
  白桃: 'White Peach',
  梨: 'Pear',
  黑芝麻: 'Black Sesame',
  桂花: 'Osmanthus',
  斑斓: 'Pandan',
  香茅: 'Lemongrass',
  青柠: 'Lime',
  罗望子: 'Tamarind',
  椰子: 'Coconut',
  姜黄: 'Turmeric',
  咖喱叶: 'Curry Leaf',
  椰糖: 'Coconut Sugar',
  班兰叶: 'Pandan Leaf',
  泰国罗勒: 'Thai Basil',
  红毛丹: 'Rambutan',
  山竹: 'Mangosteen',
  菠萝蜜: 'Jackfruit',
  芭蕉: 'Banana Leaf',
  鱼露: 'Fish Sauce',
  芒果: 'Mango',
  豆蔻: 'Cardamom',
  姜: 'Ginger',
  酸奶: 'Yogurt',
  藏红花: 'Saffron',
  玫瑰水: 'Rose Water',
  椰奶: 'Coconut Milk',
  黑胡椒: 'Black Pepper',
  孜然: 'Cumin',
  香菜籽: 'Coriander Seed',
  肉桂: 'Cinnamon',
  印度茶: 'Chai',
  棕榈糖: 'Palm Sugar',
  开心果: 'Pistachio',
  椰枣: 'Date',
  小豆蔻: 'Green Cardamom',
  石榴: 'Pomegranate',
  无花果: 'Fig',
  芝麻: 'Sesame',
  橙花水: 'Orange Blossom Water',
  薄荷: 'Mint',
  杏仁: 'Almond',
  葡萄: 'Grape',
  咖啡: 'Coffee',
  蜂蜜: 'Honey',
  茴香: 'Anise',
  橄榄: 'Olive',
  迷迭香: 'Rosemary',
  百里香: 'Thyme',
  柑橘: 'Citrus',
  番茄: 'Tomato',
  罗勒: 'Basil',
  鼠尾草: 'Sage',
  海盐: 'Sea Salt',
  薰衣草: 'Lavender',
  接骨木花: 'Elderflower',
  云莓: 'Cloudberry',
  越橘: 'Lingonberry',
  黑醋栗: 'Blackcurrant',
  莳萝: 'Dill',
  云杉: 'Spruce',
  黑麦: 'Rye',
  苹果: 'Apple',
  杜松子: 'Juniper',
  桦树汁: 'Birch Sap',
  海棠果: 'Crabapple',
  酸奶油: 'Sour Cream',
  荨麻: 'Nettle',
  甘草: 'Licorice',
  玉米: 'Corn',
  可可: 'Cacao',
  辣椒: 'Chile',
  番石榴: 'Guava',
  百香果: 'Passionfruit',
  龙舌兰: 'Agave',
  菠萝: 'Pineapple',
  木瓜: 'Papaya',
  香草: 'Vanilla',
  仙人掌: 'Nopal',
  阿萨伊: 'Açai',
  甘蔗: 'Sugarcane',
  朗姆: 'Rum',
  多香果: 'Allspice',
  肉豆蔻: 'Nutmeg',
  香蕉: 'Banana',
  木槿: 'Hibiscus',
  糖蜜: 'Molasses',
  洛神花: 'Roselle',
  猴面包树果: 'Baobab',
  生姜: 'Ginger',
  小米: 'Millet',
  棕榈果: 'Palm Fruit',
  花生: 'Peanut',
  香料茶: 'Spiced Tea',
  指橙: 'Finger Lime',
  柠檬桃金娘: 'Lemon Myrtle',
  尤加利: 'Eucalyptus',
  热带水果: 'Tropical Fruit',
  澳洲坚果: 'Macadamia',
  金合欢籽: 'Wattleseed',
  塔斯马尼亚胡椒: 'Tasmanian Pepper',
  甜菜根: 'Beetroot',
  酸樱桃: 'Sour Cherry',
  李子: 'Plum',
  葛缕子: 'Caraway',
  黑加仑: 'Blackcurrant',
  荞麦: 'Buckwheat',
  核桃: 'Walnut',
  接骨木: 'Elder',
  伏特加: 'Vodka',
  枫糖: 'Maple Syrup',
  蔓越莓: 'Cranberry',
  蓝莓: 'Blueberry',
  山核桃: 'Pecan',
  黑莓: 'Blackberry',
  南瓜: 'Pumpkin',
  烟熏木: 'Smoking Wood',
  樱桃: 'Cherry',
};

function profile(
  category: string,
  story: string,
  flavorWheel: IngredientDetail['flavorWheel'],
  season: string,
  suitableSpirits: string[],
  techniques: string[],
  cocktailDirections: string[],
  relatedIngredients: IngredientDetail['relatedIngredients'],
): IngredientProfileData {
  return { category, story, flavorWheel, season, suitableSpirits, techniques, cocktailDirections, relatedIngredients };
}

const curatedIngredientProfiles: Record<string, IngredientProfileData> = {
  柚子: profile('Citrus', '柚子的酸不像青柠那样直线冲上来，而是带着葡萄柚皮、橙花和一点白色苦感。稀释后香气不会塌，反而会变得透明，适合把 Highball、Sour 和 Martini 做得更有轮廓。', { fresh: 5, acid: 5, sweet: 2, floral: 4, herbal: 1, savory: 1 }, 'Winter to early spring / 11-2月', ['Gin', 'Vodka', 'Sake', 'Shochu', 'Tequila'], ['Cordial', 'Shrub', 'Carbonation', 'Syrup'], ['Yuzu Highball', 'Yuzu Martini', 'Yuzu Gin Sour', 'Yuzu Sake Spritz'], { similar: ['指橙', '青柠', '柑橘'], substitutes: ['柠檬桃金娘', '葡萄柚', '橙花水'], pairings: ['紫苏', '乌龙茶', '蜂蜜'] }),
  紫苏: profile('Herb', '紫苏有薄荷的凉、罗勒的绿色和青梅皮一样的微酸香。它很适合调酒，因为少量就能让酒体变得有方向；稀释后草本感会变柔，不会像薄荷那样压住基酒。', { fresh: 5, acid: 2, sweet: 1, floral: 2, herbal: 5, savory: 2 }, 'Late spring to summer / 5-8月', ['Gin', 'Tequila', 'Sake', 'Shochu', 'Vodka'], ['Infusion', 'Cordial', 'Carbonation', 'Oil Extraction'], ['Shiso Paloma', 'Shiso Highball', 'Shiso Sake Collins', 'Shiso Gimlet'], { similar: ['罗勒', '薄荷', '泰国罗勒'], substitutes: ['莳萝', '香菜籽', '鼠尾草'], pairings: ['柚子', '梅子', '龙舌兰'] }),
  乌龙茶: profile('Tea', '乌龙茶的价值在于氧化香、单宁和回甘，它能给鸡尾酒加入类似葡萄酒的骨架。稀释后茶香会从焙火转向花果，适合做低糖 Sour、Highball 和 Milk Punch。', { fresh: 3, acid: 1, sweet: 2, floral: 3, herbal: 3, savory: 2 }, 'All year / 全年', ['Gin', 'Whisky', 'Rum', 'Sake', 'Baijiu'], ['Infusion', 'Milk Punch', 'Carbonation', 'Syrup'], ['Oolong Gin Sour', 'Oolong Highball', 'Oolong Milk Punch', 'Oolong Whisky Collins'], { similar: ['焙茶', '玄米茶', '印度茶'], substitutes: ['红茶', '茉莉茶', '咖啡'], pairings: ['柚子', '梨', '蜂蜜'] }),
  梅子: profile('Stone Fruit', '梅子的酸带果核感和盐渍感，能让清爽型酒不只是酸甜。稀释后果香变得更圆，适合连接 Sake、Shochu、Gin 和起泡酒。', { fresh: 4, acid: 4, sweet: 3, floral: 2, herbal: 1, savory: 2 }, 'Early summer / 5-6月', ['Sake', 'Shochu', 'Gin', 'Vodka', 'Brandy'], ['Shrub', 'Fermentation', 'Syrup', 'Clarification'], ['Ume Spritz', 'Ume Sake Sour', 'Ume Collins', 'Ume Highball'], { similar: ['酸樱桃', '李子', '石榴'], substitutes: ['蔓越莓', '越橘', '罗望子'], pairings: ['紫苏', '乌龙茶', '蜂蜜'] }),
  山椒: profile('Spice', '山椒不是单纯辣，而是柑橘皮、麻感和绿色香气。它适合用在极少量香气修饰里；稀释后麻感会变轻，留下类似柚子皮的尾韵。', { fresh: 4, acid: 2, sweet: 1, floral: 1, herbal: 4, savory: 2 }, 'Late summer to autumn / 8-10月', ['Gin', 'Sake', 'Shochu', 'Tequila', 'Baijiu'], ['Infusion', 'Syrup', 'Oil Extraction', 'Cordial'], ['Sansho Gin Tonic', 'Sansho Sake Highball', 'Sansho Paloma', 'Sansho Martini'], { similar: ['塔斯马尼亚胡椒', '黑胡椒', '辣椒'], substitutes: ['花椒', '青胡椒', '姜'], pairings: ['柚子', '昆布', '清酒'] }),
  味噌: profile('Fermented', '味噌能给鸡尾酒提供盐、坚果、发酵和鲜味，不适合大量出现，却很适合做结构的暗线。稀释后咸鲜感会拉长尾韵，尤其适合 Martini、Milk Punch 和威士忌酸。', { fresh: 1, acid: 1, sweet: 2, floral: 1, herbal: 1, savory: 5 }, 'All year / 全年', ['Whisky', 'Vodka', 'Sake', 'Gin', 'Rum'], ['Fat Wash', 'Milk Punch', 'Clarification', 'Syrup'], ['Miso Martini', 'Miso Whisky Sour', 'Miso Milk Punch', 'Miso Highball'], { similar: ['米曲', '昆布', '鱼露'], substitutes: ['酱油', '海盐', '芝麻'], pairings: ['黑芝麻', '蜂蜜', '苹果'] }),
  昆布: profile('Sea Vegetable', '昆布是鲜味和海风感的来源，能让清澈的酒体出现更深的底部。稀释后咸鲜不会消失，会像盐水一样托住酸和甜。', { fresh: 2, acid: 1, sweet: 1, floral: 1, herbal: 2, savory: 5 }, 'All year / 全年', ['Vodka', 'Gin', 'Sake', 'Shochu', 'Tequila'], ['Infusion', 'Clarification', 'Fermentation', 'Syrup'], ['Kombu Martini', 'Kombu Highball', 'Seaweed Gibson', 'Kombu Sake Tonic'], { similar: ['味噌', '海盐', '鱼露'], substitutes: ['海苔', '盐水', '橄榄'], pairings: ['柚子', '山椒', 'Vodka'] }),
  樱花: profile('Floral', '樱花的香气轻，不适合用力表达；它更像酒体表面的粉色空气。稀释后花香会变得更柔，适合 Spritz、Collins 和低酒精长饮。', { fresh: 3, acid: 1, sweet: 3, floral: 5, herbal: 1, savory: 1 }, 'Spring / 3-4月', ['Gin', 'Vodka', 'Sake', 'Sparkling Wine', 'Shochu'], ['Syrup', 'Cordial', 'Carbonation', 'Infusion'], ['Sakura Collins', 'Sakura Spritz', 'Sakura Sake Fizz', 'Sakura Martini'], { similar: ['桂花', '玫瑰水', '接骨木花'], substitutes: ['橙花水', '薰衣草', '桃花'], pairings: ['白桃', '柚子', '清酒'] }),
  焙茶: profile('Roasted Tea', '焙茶有烤谷物、焦糖和低咖啡因的温暖感，适合把烈酒做得更松弛。稀释后烟焙感变轻，留下干净的烘烤尾韵。', { fresh: 2, acid: 1, sweet: 2, floral: 1, herbal: 2, savory: 3 }, 'Autumn to winter / 9-2月', ['Whisky', 'Rum', 'Gin', 'Sake', 'Brandy'], ['Infusion', 'Milk Punch', 'Syrup', 'Carbonation'], ['Hojicha Old Fashioned', 'Hojicha Milk Punch', 'Hojicha Highball', 'Hojicha Rum Sour'], { similar: ['乌龙茶', '玄米茶', '咖啡'], substitutes: ['烤麦茶', '红茶', '可可'], pairings: ['黑芝麻', '蜂蜜', '梨'] }),
  黑芝麻: profile('Seed', '黑芝麻带坚果、油脂、轻微苦香和东方甜品感，能让酸酒变得更有质地。稀释后油脂感会被拉开，适合 Milk Punch、Fat Wash 和低甜度 Sour。', { fresh: 1, acid: 1, sweet: 2, floral: 1, herbal: 1, savory: 3 }, 'All year / 全年', ['Rum', 'Whisky', 'Sake', 'Brandy', 'Vodka'], ['Fat Wash', 'Milk Punch', 'Syrup', 'Oil Extraction'], ['Sesame Milk Punch', 'Black Sesame Sour', 'Sesame Old Fashioned', 'Sesame Sake Flip'], { similar: ['芝麻', '可可', '咖啡'], substitutes: ['杏仁', '花生', '山核桃'], pairings: ['焙茶', '味噌', '蜂蜜'] }),
  桂花: profile('Floral', '桂花是带果酱感的花香，介于杏、蜂蜜和干花之间。稀释后甜香会变得明亮，适合给 Gin、Baijiu 和茶感鸡尾酒增加上扬香气。', { fresh: 3, acid: 1, sweet: 4, floral: 5, herbal: 1, savory: 1 }, 'Autumn / 9-10月', ['Gin', 'Baijiu', 'Vodka', 'Sake', 'Sparkling Wine'], ['Syrup', 'Cordial', 'Carbonation', 'Infusion'], ['Osmanthus Gin Fizz', 'Osmanthus Baijiu Sour', 'Osmanthus Spritz', 'Osmanthus Tea Highball'], { similar: ['玫瑰水', '橙花水', '接骨木花'], substitutes: ['樱花', '薰衣草', '蜂蜜'], pairings: ['乌龙茶', '白桃', '梨'] }),
  斑斓: profile('Leaf', '斑斓有椰奶、香草、青草和米香的复合感，是热带鸡尾酒里非常稳定的香气锚点。稀释后甜香会浮出来，适合 Daiquiri、Highball 和 Milk Punch。', { fresh: 3, acid: 1, sweet: 4, floral: 2, herbal: 4, savory: 1 }, 'All year / 全年', ['Rum', 'Gin', 'Vodka', 'Arrack', 'Baijiu'], ['Infusion', 'Syrup', 'Milk Punch', 'Oil Extraction'], ['Pandan Daiquiri', 'Pandan Milk Punch', 'Pandan Highball', 'Pandan Rum Sour'], { similar: ['班兰叶', '椰子', '香草'], substitutes: ['椰奶', '澳洲坚果', '玄米茶'], pairings: ['青柠', '朗姆', '椰糖'] }),
  香茅: profile('Herb', '香茅的柠檬感比柑橘更干、更草本，能把热带酒做得清醒。稀释后纤维感会减弱，留下干净的柠檬草香。', { fresh: 5, acid: 2, sweet: 1, floral: 2, herbal: 5, savory: 1 }, 'Summer / 6-9月', ['Gin', 'Vodka', 'Rum', 'Tequila', 'Shochu'], ['Cordial', 'Infusion', 'Carbonation', 'Syrup'], ['Lemongrass Gin Fizz', 'Lemongrass Collins', 'Lemongrass Daiquiri', 'Lemongrass Highball'], { similar: ['柠檬桃金娘', '青柠', '紫苏'], substitutes: ['香菜籽', '薄荷', '罗勒'], pairings: ['罗望子', '姜', '椰子'] }),
  青柠: profile('Citrus', '青柠是酒吧里的酸度标尺，直接、明亮、带青皮油香。稀释后酸会变得更线性，适合让 Rum、Tequila 和 Gin 的结构变清楚。', { fresh: 5, acid: 5, sweet: 1, floral: 1, herbal: 2, savory: 1 }, 'All year / 全年', ['Rum', 'Tequila', 'Gin', 'Vodka', 'Mezcal'], ['Cordial', 'Shrub', 'Clarification', 'Oil Extraction'], ['Lime Daiquiri', 'Lime Margarita', 'Lime Gimlet', 'Lime Highball'], { similar: ['柚子', '指橙', '柑橘'], substitutes: ['罗望子', '百香果', '柠檬桃金娘'], pairings: ['椰子', '薄荷', '甘蔗'] }),
  罗望子: profile('Acid Fruit', '罗望子带棕色水果酸、果干、轻微咸感和糖蜜尾韵，可以替代一部分柑橘酸度。稀释后酸感变得宽，不尖，能让 Margarita、Sour 和 Punch 更有厚度。', { fresh: 3, acid: 5, sweet: 3, floral: 1, herbal: 1, savory: 2 }, 'Dry season / 12-4月', ['Tequila', 'Rum', 'Mezcal', 'Whisky', 'Pisco'], ['Shrub', 'Syrup', 'Fermentation', 'Clarification'], ['Tamarind Margarita', 'Tamarind Rum Sour', 'Tamarind Highball', 'Tamarind Mezcal Paloma'], { similar: ['石榴', '洛神花', '酸樱桃'], substitutes: ['青柠', '百香果', '猴面包树果'], pairings: ['辣椒', '姜', '椰糖'] }),
  椰子: profile('Tropical Nut', '椰子的香气圆、白、带脂肪感，可以让酸酒变得柔软。稀释后椰香会扩散成背景，不适合过甜，适合用盐和酸把它收紧。', { fresh: 2, acid: 1, sweet: 4, floral: 2, herbal: 1, savory: 1 }, 'All year / 全年', ['Rum', 'Tequila', 'Gin', 'Vodka', 'Arrack'], ['Milk Punch', 'Fat Wash', 'Syrup', 'Clarification'], ['Coconut Highball', 'Coconut Mai Tai', 'Coconut Daiquiri', 'Coconut Milk Punch'], { similar: ['椰奶', '斑斓', '澳洲坚果'], substitutes: ['杏仁', '山核桃', '香草'], pairings: ['青柠', '菠萝', '朗姆'] }),
  泰国罗勒: profile('Herb', '泰国罗勒比普通罗勒更有茴香和辛香，能把热带水果从甜腻里拉出来。稀释后香料感会留在尾段，适合 Smash、Fizz 和 Gimlet。', { fresh: 4, acid: 1, sweet: 2, floral: 2, herbal: 5, savory: 1 }, 'Summer / 6-9月', ['Gin', 'Rum', 'Tequila', 'Vodka', 'Shochu'], ['Infusion', 'Cordial', 'Syrup', 'Carbonation'], ['Thai Basil Smash', 'Thai Basil Gimlet', 'Thai Basil Daiquiri', 'Thai Basil Highball'], { similar: ['罗勒', '紫苏', '薄荷'], substitutes: ['香茅', '咖喱叶', '莳萝'], pairings: ['山竹', '青柠', '椰糖'] }),
  鱼露: profile('Fermented', '鱼露是咸鲜和发酵深度，不是为了让酒有鱼味，而是像盐水一样把酸甜托起来。稀释后鲜味会变柔，适合极小剂量用于 Dirty Martini 和热带 Sour。', { fresh: 1, acid: 1, sweet: 1, floral: 1, herbal: 1, savory: 5 }, 'All year / 全年', ['Vodka', 'Gin', 'Tequila', 'Rum', 'Sake'], ['Clarification', 'Fermentation', 'Syrup', 'Cordial'], ['Fish Sauce Martini', 'Umami Daiquiri', 'Savory Paloma', 'Fermented Highball'], { similar: ['昆布', '味噌', '海盐'], substitutes: ['盐水', '酱油', '橄榄'], pairings: ['青柠', '罗望子', '香茅'] }),
  芒果: profile('Tropical Fruit', '芒果提供成熟热带水果、果肉质感和温暖甜香。稀释后香气仍然饱满，但酸度不足，需要青柠、罗望子或乳酸来拉出线条。', { fresh: 3, acid: 2, sweet: 5, floral: 2, herbal: 1, savory: 1 }, 'Summer / 5-8月', ['Rum', 'Tequila', 'Vodka', 'Pisco', 'Whisky'], ['Syrup', 'Clarification', 'Fermentation', 'Milk Punch'], ['Mango Lassi Sour', 'Mango Daiquiri', 'Mango Pisco Sour', 'Mango Highball'], { similar: ['木瓜', '番石榴', '百香果'], substitutes: ['菠萝', '山竹', '阿萨伊'], pairings: ['酸奶', '豆蔻', '青柠'] }),
  豆蔻: profile('Spice', '豆蔻有凉感、桉树、柑橘皮和甜香料的气质，适合给简单酸酒增加高音。稀释后辛香会变得干净，不像肉桂那样厚重。', { fresh: 3, acid: 1, sweet: 2, floral: 3, herbal: 3, savory: 1 }, 'All year / 全年', ['Gin', 'Rum', 'Whisky', 'Brandy', 'Vodka'], ['Infusion', 'Syrup', 'Cordial', 'Oil Extraction'], ['Cardamom Daiquiri', 'Cardamom Old Fashioned', 'Cardamom Gin Sour', 'Cardamom Highball'], { similar: ['小豆蔻', '肉桂', '藏红花'], substitutes: ['黑胡椒', '茴香', '香菜籽'], pairings: ['芒果', '玫瑰水', '咖啡'] }),
  姜: profile('Rhizome', '姜的热度来得快，能让长饮变得有节奏。稀释后辛辣会拉长，甜感会变少，适合与蜂蜜、罗望子和威士忌形成稳定结构。', { fresh: 3, acid: 1, sweet: 1, floral: 1, herbal: 3, savory: 2 }, 'All year / 全年', ['Whisky', 'Rum', 'Gin', 'Vodka', 'Baijiu'], ['Syrup', 'Fermentation', 'Carbonation', 'Cordial'], ['Ginger Highball', 'Ginger Rum Sour', 'Ginger Whisky Buck', 'Ginger Baijiu Collins'], { similar: ['生姜', '姜黄', '山椒'], substitutes: ['黑胡椒', '辣椒', '塔斯马尼亚胡椒'], pairings: ['蜂蜜', '罗望子', '青柠'] }),
  酸奶: profile('Dairy', '酸奶带乳酸、柔软质感和轻微发酵感，适合让热带水果变得更有身体。稀释后乳感会变薄，需要清晰的酸或气泡来保持干净。', { fresh: 2, acid: 3, sweet: 2, floral: 1, herbal: 1, savory: 2 }, 'All year / 全年', ['Rum', 'Vodka', 'Gin', 'Brandy', 'Whisky'], ['Milk Punch', 'Clarification', 'Fermentation', 'Syrup'], ['Lassi Sour', 'Yogurt Gin Fizz', 'Clarified Mango Lassi', 'Yogurt Rum Punch'], { similar: ['酸奶油', '椰奶', '乳扇'], substitutes: ['Milk Punch', '椰奶', '奶油'], pairings: ['芒果', '豆蔻', '蜂蜜'] }),
  藏红花: profile('Spice', '藏红花带金属感、蜂蜜、干花和药草感，适合极小剂量创造奢华的中段香气。稀释后颜色和香气都会变柔，适合 Martini 与 Sour。', { fresh: 1, acid: 1, sweet: 2, floral: 4, herbal: 2, savory: 2 }, 'Autumn / 9-11月', ['Gin', 'Vodka', 'Brandy', 'Rum', 'Sake'], ['Infusion', 'Syrup', 'Cordial', 'Clarification'], ['Saffron Martini', 'Saffron Gimlet', 'Saffron Spritz', 'Saffron Milk Punch'], { similar: ['玫瑰水', '小豆蔻', '蜂蜜'], substitutes: ['姜黄', '桂花', '橙花水'], pairings: ['开心果', '石榴', '杏仁'] }),
  玫瑰水: profile('Floral Water', '玫瑰水的花香直接而敏感，适合用滴数控制，而不是用量取胜。稀释后它会贴在酒体上方，给 Martini、Sour 和 Spritz 增加柔软的上扬香气。', { fresh: 2, acid: 1, sweet: 3, floral: 5, herbal: 1, savory: 1 }, 'Spring to summer / 4-7月', ['Gin', 'Vodka', 'Arak', 'Brandy', 'Rum'], ['Syrup', 'Cordial', 'Infusion', 'Carbonation'], ['Rose Martini', 'Rose Spritz', 'Rose Gin Sour', 'Rose Arak Highball'], { similar: ['橙花水', '桂花', '薰衣草'], substitutes: ['接骨木花', '樱花', '藏红花'], pairings: ['石榴', '开心果', 'Gin'] }),
  石榴: profile('Fruit', '石榴有红色果酸、单宁和轻微涩感，比普通浆果更适合做苦甜结构。稀释后果酸会变亮，适合连接 Gin、Brandy、Tequila 和 Amaro。', { fresh: 4, acid: 4, sweet: 3, floral: 2, herbal: 1, savory: 1 }, 'Autumn to winter / 9-1月', ['Gin', 'Brandy', 'Tequila', 'Vodka', 'Rum'], ['Shrub', 'Syrup', 'Clarification', 'Carbonation'], ['Pomegranate Negroni', 'Pomegranate Sour', 'Pomegranate Spritz', 'Pomegranate Paloma'], { similar: ['罗望子', '洛神花', '酸樱桃'], substitutes: ['蔓越莓', '黑加仑', '番石榴'], pairings: ['玫瑰水', '开心果', '咖啡'] }),
  开心果: profile('Nut', '开心果的绿色坚果香比杏仁更柔，也更有甜品感。稀释后脂肪感会降低，适合 Orgeat、Milk Punch 或 Sour 里的圆润底色。', { fresh: 1, acid: 1, sweet: 3, floral: 2, herbal: 1, savory: 2 }, 'All year / 全年', ['Rum', 'Brandy', 'Whisky', 'Gin', 'Vodka'], ['Milk Punch', 'Fat Wash', 'Syrup', 'Oil Extraction'], ['Pistachio Sour', 'Pistachio Milk Punch', 'Pistachio Old Fashioned', 'Pistachio Rose Fizz'], { similar: ['杏仁', '澳洲坚果', '黑芝麻'], substitutes: ['山核桃', '花生', '芝麻'], pairings: ['玫瑰水', '石榴', '蜂蜜'] }),
  橙花水: profile('Floral Water', '橙花水比玫瑰更明亮，带柑橘花、肥皂感和白色甜香。稀释后容易变得优雅，但过量会发粉，适合 Spritz 和 Collins。', { fresh: 3, acid: 1, sweet: 3, floral: 5, herbal: 1, savory: 1 }, 'Spring / 3-5月', ['Gin', 'Vodka', 'Rum', 'Brandy', 'Arak'], ['Syrup', 'Cordial', 'Carbonation', 'Infusion'], ['Orange Blossom Collins', 'Orange Blossom Martini', 'Orange Blossom Daiquiri', 'Orange Blossom Spritz'], { similar: ['玫瑰水', '桂花', '接骨木花'], substitutes: ['柚子', '樱花', '薰衣草'], pairings: ['杏仁', '柑橘', '蜂蜜'] }),
  咖啡: profile('Roasted Seed', '咖啡给酒体带苦、烘焙、酸和香气深度，可以把甜酒变干。稀释后焦苦会变柔，冷萃更适合长饮，浓缩更适合短饮。', { fresh: 1, acid: 2, sweet: 1, floral: 1, herbal: 1, savory: 3 }, 'All year / 全年', ['Rum', 'Whisky', 'Mezcal', 'Brandy', 'Vodka'], ['Infusion', 'Syrup', 'Fat Wash', 'Clarification'], ['Coffee Negroni', 'Coffee Old Fashioned', 'Cold Brew Highball', 'Coffee Rum Sour'], { similar: ['可可', '焙茶', '糖蜜'], substitutes: ['黑芝麻', '香料茶', '可可'], pairings: ['橙花水', '蜂蜜', '朗姆'] }),
  橄榄: profile('Fruit', '橄榄提供盐、油脂和青绿色苦感，是 Martini 体系里的结构食材。稀释后咸感会被拉长，适合干型酒和低甜度 aperitivo。', { fresh: 2, acid: 1, sweet: 1, floral: 1, herbal: 3, savory: 5 }, 'Autumn / 9-11月', ['Gin', 'Vodka', 'Vermouth', 'Tequila', 'Sake'], ['Clarification', 'Fat Wash', 'Infusion', 'Oil Extraction'], ['Olive Martini', 'Olive Highball', 'Olive Vermouth Spritz', 'Dirty Tequila Martini'], { similar: ['海盐', '昆布', '番茄'], substitutes: ['盐水', '酸豆', '味噌'], pairings: ['迷迭香', '柑橘', 'Gin'] }),
  无花果: profile('Fruit', '无花果带果干、蜂蜜、籽感和柔软甜香，适合把苦甜酒做得更温暖。稀释后甜感会变轻，果干和皮革感会留下。', { fresh: 2, acid: 1, sweet: 4, floral: 2, herbal: 1, savory: 1 }, 'Late summer to autumn / 8-10月', ['Brandy', 'Whisky', 'Rum', 'Gin', 'Amaro'], ['Syrup', 'Infusion', 'Milk Punch', 'Fermentation'], ['Fig Boulevardier', 'Fig Old Fashioned', 'Fig Brandy Sour', 'Fig Spritz'], { similar: ['椰枣', '李子', '葡萄'], substitutes: ['蜂蜜', '枫糖', '石榴'], pairings: ['百里香', '咖啡', '杏仁'] }),
  迷迭香: profile('Herb', '迷迭香有松针、树脂和干草本气息，能把 Gin Tonic 和 Spritz 做得更有地中海感。稀释后树脂感会更清楚，适合气泡和高酸结构。', { fresh: 3, acid: 1, sweet: 1, floral: 1, herbal: 5, savory: 2 }, 'All year / 全年', ['Gin', 'Vodka', 'Tequila', 'Whisky', 'Vermouth'], ['Infusion', 'Cordial', 'Smoke Rinse', 'Syrup'], ['Rosemary Gin Tonic', 'Rosemary Collins', 'Rosemary Paloma', 'Rosemary Vermouth Highball'], { similar: ['百里香', '鼠尾草', '云杉'], substitutes: ['杜松子', '尤加利', '薰衣草'], pairings: ['柑橘', '海盐', '橄榄'] }),
  罗勒: profile('Herb', '罗勒带甜草本、茴香和番茄叶一样的绿感，能让柑橘酸酒更鲜活。稀释后青味会变柔，适合 Gimlet、Smash 和低酒精 Spritz。', { fresh: 4, acid: 1, sweet: 2, floral: 2, herbal: 5, savory: 1 }, 'Summer / 6-9月', ['Gin', 'Vodka', 'Tequila', 'Vermouth', 'Rum'], ['Infusion', 'Cordial', 'Syrup', 'Carbonation'], ['Basil Gimlet', 'Basil Smash', 'Basil Spritz', 'Basil Martini'], { similar: ['泰国罗勒', '紫苏', '薄荷'], substitutes: ['迷迭香', '莳萝', '香茅'], pairings: ['番茄', '柑橘', 'Gin'] }),
  薰衣草: profile('Floral Herb', '薰衣草带干花、蜂蜜和一点药草感，适合做香气边缘，不适合做主体。稀释后花香会扩散，过量会有皂感。', { fresh: 2, acid: 1, sweet: 2, floral: 5, herbal: 3, savory: 1 }, 'Summer / 6-8月', ['Gin', 'Vodka', 'Brandy', 'Sparkling Wine', 'Whisky'], ['Syrup', 'Infusion', 'Cordial', 'Carbonation'], ['Lavender Collins', 'Lavender Martini', 'Lavender Spritz', 'Lavender Whisky Sour'], { similar: ['玫瑰水', '桂花', '接骨木花'], substitutes: ['橙花水', '樱花', '百里香'], pairings: ['柑橘', '蜂蜜', '云莓'] }),
  接骨木花: profile('Floral', '接骨木花有白花、梨、蜂蜜和清冷果香，适合给冷感鸡尾酒增加空气感。稀释后香气非常稳定，尤其适合 Gin、Vodka 和起泡酒。', { fresh: 4, acid: 1, sweet: 3, floral: 5, herbal: 1, savory: 1 }, 'Late spring / 5-6月', ['Gin', 'Vodka', 'Aquavit', 'Sparkling Wine', 'Sake'], ['Cordial', 'Syrup', 'Carbonation', 'Infusion'], ['Elderflower Martini', 'Elderflower Spritz', 'Elderflower Collins', 'Elderflower Sake Fizz'], { similar: ['桂花', '橙花水', '玫瑰水'], substitutes: ['樱花', '薰衣草', '白桃'], pairings: ['苹果', '云莓', 'Gin'] }),
  云莓: profile('Berry', '云莓有冷感浆果、蜂蜜和轻微发酵酸，能让北欧风味不只是清冷。稀释后果香会变得透明，适合 Sour、Spritz 和 Aquavit 长饮。', { fresh: 4, acid: 3, sweet: 3, floral: 2, herbal: 1, savory: 1 }, 'Late summer / 7-8月', ['Aquavit', 'Vodka', 'Gin', 'Brandy', 'Whisky'], ['Shrub', 'Syrup', 'Clarification', 'Fermentation'], ['Cloudberry Sour', 'Cloudberry Spritz', 'Cloudberry Aquavit Highball', 'Cloudberry Collins'], { similar: ['越橘', '黑醋栗', '蔓越莓'], substitutes: ['蓝莓', '黑莓', '石榴'], pairings: ['接骨木花', '蜂蜜', '云杉'] }),
  云杉: profile('Wood', '云杉像冷空气里的松针和树脂，适合给 Highball、Collins 和 Martini 加入森林感。稀释后木质会变清亮，不会像烟熏那样厚。', { fresh: 4, acid: 1, sweet: 1, floral: 1, herbal: 4, savory: 2 }, 'Spring tips or winter needles / 春芽或冬季针叶', ['Gin', 'Aquavit', 'Vodka', 'Whisky', 'Mezcal'], ['Infusion', 'Cordial', 'Carbonation', 'Syrup'], ['Spruce Collins', 'Spruce Gin Fizz', 'Spruce Aquavit Highball', 'Spruce Martini'], { similar: ['迷迭香', '杜松子', '尤加利'], substitutes: ['烟熏木', '柠檬桃金娘', '塔斯马尼亚胡椒'], pairings: ['云莓', '苹果', '蜂蜜'] }),
  黑麦: profile('Grain', '黑麦带谷物、香料、干面包和木质感，能让长饮有清晰骨架。稀释后辛香和谷物甜会更明显，适合 Highball、Old Fashioned 和 Milk Punch。', { fresh: 1, acid: 1, sweet: 2, floral: 1, herbal: 1, savory: 3 }, 'Autumn harvest / 8-10月', ['Whisky', 'Vodka', 'Aquavit', 'Rum', 'Brandy'], ['Infusion', 'Milk Punch', 'Fermentation', 'Syrup'], ['Rye Highball', 'Rye Honey Sour', 'Rye Old Fashioned', 'Rye Milk Punch'], { similar: ['玉米', '荞麦', '小米'], substitutes: ['黑麦酒', '伏特加', '青稞'], pairings: ['蜂蜜', '苹果', '咖啡'] }),
  玉米: profile('Grain', '玉米有奶油甜、谷物香和轻微烘烤感，适合连接 Bourbon、Mezcal 和 Milk Punch。稀释后甜香会变宽，最好用酸或烟熏收边。', { fresh: 1, acid: 1, sweet: 4, floral: 1, herbal: 1, savory: 2 }, 'Late summer to autumn / 8-10月', ['Whisky', 'Mezcal', 'Rum', 'Vodka', 'Tequila'], ['Milk Punch', 'Fermentation', 'Syrup', 'Fat Wash'], ['Corn Milk Punch', 'Corn Old Fashioned', 'Corn Mezcal Sour', 'Corn Highball'], { similar: ['黑麦', '荞麦', '小米'], substitutes: ['南瓜', '枫糖', '椰糖'], pairings: ['可可', '辣椒', '烟熏木'] }),
  可可: profile('Seed', '可可带苦香、泥土、烘焙和脂肪感，能连接咖啡、朗姆、梅斯卡尔和威士忌。稀释后苦味会变成结构，不会只是甜点方向。', { fresh: 1, acid: 1, sweet: 2, floral: 1, herbal: 1, savory: 3 }, 'All year / 全年', ['Rum', 'Mezcal', 'Whisky', 'Pisco', 'Brandy'], ['Infusion', 'Fat Wash', 'Milk Punch', 'Syrup'], ['Cacao Old Fashioned', 'Cacao Negroni', 'Cacao Pisco Sour', 'Cacao Rum Flip'], { similar: ['咖啡', '糖蜜', '黑芝麻'], substitutes: ['香草', '山核桃', '焙茶'], pairings: ['朗姆', '辣椒', '樱桃'] }),
  辣椒: profile('Spice', '辣椒给酒体的是热度、果皮和一点绿色香气。稀释后辣感会被酸和糖放大，所以适合小剂量，让 Mezcal、Tequila 和 Rum 更有张力。', { fresh: 2, acid: 1, sweet: 1, floral: 1, herbal: 2, savory: 2 }, 'Summer to autumn / 7-10月', ['Tequila', 'Mezcal', 'Rum', 'Gin', 'Vodka'], ['Infusion', 'Syrup', 'Cordial', 'Oil Extraction'], ['Chile Mezcal Paloma', 'Chile Margarita', 'Spiced Daiquiri', 'Chile Highball'], { similar: ['山椒', '黑胡椒', '塔斯马尼亚胡椒'], substitutes: ['姜', '多香果', '肉豆蔻'], pairings: ['番石榴', '可可', '青柠'] }),
  番石榴: profile('Tropical Fruit', '番石榴有粉色果肉、热带甜香和轻微麝香感，适合给 Margarita 和 Sour 增加温暖果香。稀释后香气依然明显，需要青柠或石榴提供线条。', { fresh: 3, acid: 2, sweet: 4, floral: 3, herbal: 1, savory: 1 }, 'Summer to autumn / 6-10月', ['Tequila', 'Rum', 'Pisco', 'Vodka', 'Mezcal'], ['Syrup', 'Shrub', 'Clarification', 'Fermentation'], ['Guava Margarita', 'Guava Pisco Sour', 'Guava Paloma', 'Guava Rum Punch'], { similar: ['芒果', '木瓜', '百香果'], substitutes: ['石榴', '菠萝', '白桃'], pairings: ['辣椒', '青柠', '龙舌兰'] }),
  百香果: profile('Tropical Fruit', '百香果的酸香强、籽感明显，能迅速让酒体出现热带方向。稀释后酸会变锋利，适合和 Rum、Pisco、Tequila 做高能量 Sour。', { fresh: 4, acid: 5, sweet: 3, floral: 3, herbal: 1, savory: 1 }, 'Summer to autumn / 6-10月', ['Rum', 'Pisco', 'Tequila', 'Vodka', 'Gin'], ['Syrup', 'Shrub', 'Clarification', 'Fermentation'], ['Passionfruit Pisco Sour', 'Passionfruit Daiquiri', 'Passionfruit Spritz', 'Passionfruit Highball'], { similar: ['番石榴', '菠萝', '芒果'], substitutes: ['罗望子', '青柠', '阿萨伊'], pairings: ['椰子', '香草', '朗姆'] }),
  龙舌兰: profile('Agave', '龙舌兰作为食材时带烤菠萝、草本、泥土和植物甜感，不只是基酒来源。稀释后绿色和矿物感会更明显，适合和酸果、辣椒、盐形成结构。', { fresh: 2, acid: 1, sweet: 3, floral: 1, herbal: 3, savory: 2 }, 'Dry season / 11-4月', ['Tequila', 'Mezcal', 'Gin', 'Rum', 'Pisco'], ['Syrup', 'Fermentation', 'Infusion', 'Cordial'], ['Agave Highball', 'Agave Paloma', 'Agave Sour', 'Agave Spritz'], { similar: ['仙人掌', '甘蔗', '玉米'], substitutes: ['蜂蜜', '枫糖', '椰糖'], pairings: ['柚子', '辣椒', '青柠'] }),
  香草: profile('Pod', '香草提供奶油、木质和甜香，可以让烈酒显得更圆，但需要酸或苦来防止甜腻。稀释后香气会扩散，很适合 Rum、Whisky 和 Brandy。', { fresh: 1, acid: 1, sweet: 4, floral: 2, herbal: 1, savory: 1 }, 'All year / 全年', ['Rum', 'Whisky', 'Brandy', 'Vodka', 'Pisco'], ['Infusion', 'Syrup', 'Fat Wash', 'Milk Punch'], ['Vanilla Cachaça Sour', 'Vanilla Old Fashioned', 'Vanilla Milk Punch', 'Vanilla Daiquiri'], { similar: ['斑斓', '糖蜜', '椰子'], substitutes: ['可可', '肉桂', '枫糖'], pairings: ['咖啡', '菠萝', '朗姆'] }),
  甘蔗: profile('Cane', '甘蔗的甜不是白糖的甜，它带青草、水分和淡淡矿物感。稀释后清爽感会浮出来，适合做 Highball、Daiquiri 和低度长饮。', { fresh: 3, acid: 1, sweet: 4, floral: 1, herbal: 2, savory: 1 }, 'Harvest season / 10-3月', ['Rum', 'Cachaça', 'Vodka', 'Gin', 'Tequila'], ['Syrup', 'Fermentation', 'Carbonation', 'Clarification'], ['Cane Highball', 'Cane Daiquiri', 'Cane Spritz', 'Cane Rum Collins'], { similar: ['糖蜜', '枫糖', '椰糖'], substitutes: ['蜂蜜', '棕榈糖', '龙舌兰'], pairings: ['青柠', '薄荷', '朗姆'] }),
  多香果: profile('Spice', '多香果像肉桂、丁香、肉豆蔻和胡椒的合体，是朗姆体系里的香料支点。稀释后温暖感会变得圆，适合 Punch、Daiquiri 和热带 Old Fashioned。', { fresh: 1, acid: 1, sweet: 2, floral: 1, herbal: 2, savory: 2 }, 'All year / 全年', ['Rum', 'Whisky', 'Brandy', 'Mezcal', 'Gin'], ['Infusion', 'Syrup', 'Cordial', 'Oil Extraction'], ['Allspice Daiquiri', 'Allspice Rum Punch', 'Allspice Old Fashioned', 'Allspice Swizzle'], { similar: ['肉豆蔻', '肉桂', '豆蔻'], substitutes: ['丁香', '黑胡椒', '葛缕子'], pairings: ['菠萝', '糖蜜', '朗姆'] }),
  糖蜜: profile('Cane Syrup', '糖蜜有焦糖、矿物、烟草和深色甜感，比糖浆更有重量。稀释后焦苦会留下，适合把 Rum、Whisky 和咖啡做得更深。', { fresh: 1, acid: 1, sweet: 5, floral: 1, herbal: 1, savory: 2 }, 'All year / 全年', ['Rum', 'Whisky', 'Brandy', 'Mezcal', 'Vodka'], ['Syrup', 'Fermentation', 'Fat Wash', 'Milk Punch'], ['Molasses Flip', 'Molasses Old Fashioned', 'Molasses Rum Sour', 'Molasses Coffee Highball'], { similar: ['甘蔗', '枫糖', '椰糖'], substitutes: ['蜂蜜', '椰枣', '可可'], pairings: ['咖啡', '多香果', '香蕉'] }),
  洛神花: profile('Flower', '洛神花有红色酸感、果干、花茶和轻微苦味，适合给 Spritz 和 Sour 做颜色与酸度。稀释后酸会变干净，果干感会拉长。', { fresh: 4, acid: 5, sweet: 2, floral: 4, herbal: 2, savory: 1 }, 'Warm season / 5-10月', ['Gin', 'Rum', 'Vodka', 'Tequila', 'Sparkling Wine'], ['Syrup', 'Shrub', 'Fermentation', 'Carbonation'], ['Hibiscus Spritz', 'Hibiscus Sour', 'Hibiscus Highball', 'Hibiscus Rum Punch'], { similar: ['木槿', '石榴', '罗望子'], substitutes: ['蔓越莓', '黑加仑', '酸樱桃'], pairings: ['姜', '蜂蜜', '咖啡'] }),
  猴面包树果: profile('Fruit Pulp', '猴面包树果带干燥酸感、粉质果肉和轻微乳酸感，适合做非柑橘酸度来源。稀释后酸会变得柔和，适合 Collins 和低酒精长饮。', { fresh: 3, acid: 4, sweet: 2, floral: 1, herbal: 1, savory: 1 }, 'Dry season / 11-4月', ['Gin', 'Vodka', 'Rum', 'Brandy', 'Pisco'], ['Shrub', 'Syrup', 'Clarification', 'Fermentation'], ['Baobab Collins', 'Baobab Sour', 'Baobab Spritz', 'Baobab Highball'], { similar: ['罗望子', '洛神花', '青柠'], substitutes: ['百香果', '石榴', '酸奶'], pairings: ['蜂蜜', '姜', '朗姆'] }),
  指橙: profile('Citrus', '指橙的酸像细小气泡在舌面爆开，它的价值不只是味道，还有触感。稀释后香气轻，最好作为完成度和质感使用。', { fresh: 5, acid: 5, sweet: 1, floral: 2, herbal: 1, savory: 1 }, 'Autumn to winter / 5-8月 southern hemisphere', ['Gin', 'Vodka', 'Sake', 'Tequila', 'Pisco'], ['Cordial', 'Carbonation', 'Oil Extraction', 'Clarification'], ['Finger Lime Gin Fizz', 'Finger Lime Highball', 'Finger Lime Martini', 'Finger Lime Spritz'], { similar: ['柚子', '青柠', '柠檬桃金娘'], substitutes: ['柑橘', '百香果', '罗望子'], pairings: ['尤加利', 'Gin', '海盐'] }),
  柠檬桃金娘: profile('Native Herb', '柠檬桃金娘比柠檬更香、更干，带桉树、柠檬皮和绿色花香。稀释后柠檬调会很稳定，适合无鲜果酸的 Highball 和 Martini。', { fresh: 5, acid: 2, sweet: 1, floral: 3, herbal: 4, savory: 1 }, 'All year / 全年', ['Gin', 'Vodka', 'Rum', 'Sake', 'Tequila'], ['Infusion', 'Cordial', 'Carbonation', 'Syrup'], ['Lemon Myrtle Martini', 'Lemon Myrtle Highball', 'Lemon Myrtle Collins', 'Lemon Myrtle Daiquiri'], { similar: ['香茅', '柚子', '指橙'], substitutes: ['青柠', '尤加利', '接骨木花'], pairings: ['蜂蜜', 'Gin', '海盐'] }),
  尤加利: profile('Leaf', '尤加利带冷感、树脂和药草气息，适合给酒体制造空间感。稀释后凉感更明显，必须小剂量使用，适合 Highball 和香气喷雾。', { fresh: 4, acid: 1, sweet: 1, floral: 1, herbal: 5, savory: 1 }, 'All year / 全年', ['Gin', 'Vodka', 'Whisky', 'Mezcal', 'Brandy'], ['Infusion', 'Oil Extraction', 'Cordial', 'Carbonation'], ['Eucalyptus Highball', 'Eucalyptus Martini', 'Eucalyptus Gin Fizz', 'Eucalyptus Whisky Soda'], { similar: ['云杉', '迷迭香', '柠檬桃金娘'], substitutes: ['杜松子', '薄荷', '塔斯马尼亚胡椒'], pairings: ['指橙', '蜂蜜', 'Gin'] }),
  塔斯马尼亚胡椒: profile('Spice', '塔斯马尼亚胡椒有浆果、木质和后段辛辣，不只是辣味。稀释后果香会浮出，适合让 Gin、Mezcal 和 Whisky 多一层野性。', { fresh: 2, acid: 1, sweet: 1, floral: 1, herbal: 3, savory: 2 }, 'Autumn / 3-5月 southern hemisphere', ['Gin', 'Mezcal', 'Whisky', 'Vodka', 'Brandy'], ['Infusion', 'Syrup', 'Cordial', 'Oil Extraction'], ['Tasmanian Pepper Gimlet', 'Pepperberry Highball', 'Pepper Whisky Sour', 'Pepper Martini'], { similar: ['山椒', '黑胡椒', '辣椒'], substitutes: ['葛缕子', '多香果', '姜'], pairings: ['指橙', '蜂蜜', '云杉'] }),
  甜菜根: profile('Root', '甜菜根带泥土、甜菜糖、红色果感和轻微铁质感，适合给 Martini 或 Sour 加入深色结构。稀释后泥土感会变柔，需要酸或草本提亮。', { fresh: 2, acid: 1, sweet: 3, floral: 1, herbal: 2, savory: 3 }, 'Autumn to winter / 9-2月', ['Vodka', 'Gin', 'Whisky', 'Aquavit', 'Brandy'], ['Clarification', 'Shrub', 'Fermentation', 'Syrup'], ['Beetroot Martini', 'Beetroot Vodka Sour', 'Beetroot Highball', 'Beetroot Spritz'], { similar: ['番茄', '仙人掌', '南瓜'], substitutes: ['石榴', '酸樱桃', '胡萝卜'], pairings: ['莳萝', '蜂蜜', '黑麦'] }),
  酸樱桃: profile('Berry', '酸樱桃带红果酸、果核、轻微杏仁和深色甜香，适合替代部分柠檬酸。稀释后果核感会留下，特别适合 Brandy、Whisky 和 Vodka。', { fresh: 3, acid: 4, sweet: 3, floral: 2, herbal: 1, savory: 1 }, 'Early summer / 5-7月', ['Vodka', 'Brandy', 'Whisky', 'Gin', 'Rum'], ['Shrub', 'Syrup', 'Fermentation', 'Clarification'], ['Sour Cherry Vodka Sour', 'Cherry Brandy Collins', 'Sour Cherry Spritz', 'Cherry Rye Sour'], { similar: ['梅子', '石榴', '蔓越莓'], substitutes: ['黑加仑', '越橘', '洛神花'], pairings: ['黑麦', '蜂蜜', '可可'] }),
  枫糖: profile('Tree Syrup', '枫糖带木质、焦糖、烤坚果和冷空气里的甜香，比普通糖浆更有方向。稀释后木质会留下，适合 Whisky、Rum 和咖啡。', { fresh: 1, acid: 1, sweet: 5, floral: 1, herbal: 1, savory: 1 }, 'Late winter to early spring / 2-4月', ['Whisky', 'Rum', 'Brandy', 'Mezcal', 'Vodka'], ['Syrup', 'Milk Punch', 'Fat Wash', 'Fermentation'], ['Maple Old Fashioned', 'Maple Whisky Sour', 'Maple Rum Flip', 'Maple Coffee Highball'], { similar: ['蜂蜜', '糖蜜', '椰糖'], substitutes: ['棕榈糖', '椰枣', '甘蔗'], pairings: ['咖啡', '山核桃', '苹果'] }),
  蔓越莓: profile('Berry', '蔓越莓酸度干净、颜色稳定、带轻微苦涩，适合做季节型 Spritz 和 Sour。稀释后甜味退后，果酸和涩感会提供结构。', { fresh: 4, acid: 4, sweet: 2, floral: 1, herbal: 1, savory: 1 }, 'Autumn to winter / 9-12月', ['Vodka', 'Gin', 'Whisky', 'Brandy', 'Sparkling Wine'], ['Shrub', 'Syrup', 'Clarification', 'Carbonation'], ['Cranberry Collins', 'Cranberry Vodka Sour', 'Cranberry Spritz', 'Cranberry Rye Highball'], { similar: ['越橘', '酸樱桃', '石榴'], substitutes: ['洛神花', '黑加仑', '梅子'], pairings: ['枫糖', '黑麦', '橙花水'] }),
  烟熏木: profile('Wood Smoke', '烟熏木不是为了制造烟雾，而是给酒体增加时间感、木质和干燥边缘。稀释后烟会退到背景，适合修饰 Whisky、Mezcal 和 Brandy。', { fresh: 1, acid: 1, sweet: 1, floral: 1, herbal: 2, savory: 4 }, 'All year / 全年', ['Whisky', 'Mezcal', 'Brandy', 'Rum', 'Gin'], ['Smoke Rinse', 'Infusion', 'Bitters', 'Oil Extraction'], ['Smoked Old Fashioned', 'Smoke Rinse Martini', 'Smoked Highball', 'Smoked Mezcal Sour'], { similar: ['秘鲁圣木', '云杉', '尤加利'], substitutes: ['焙茶', '可可', '塔斯马尼亚胡椒'], pairings: ['枫糖', '黑麦', '樱桃'] }),
};

const categoryKeywords: Array<[string, string]> = [
  ['柚子 青柠 柑橘 指橙 柠檬桃金娘 橙花水 葡萄柚', 'Citrus'],
  ['紫苏 香茅 咖喱叶 泰国罗勒 罗勒 薄荷 迷迭香 百里香 鼠尾草 莳萝 荨麻', 'Herb'],
  ['乌龙茶 焙茶 玄米茶 印度茶 香料茶 咖啡', 'Tea & Coffee'],
  ['米曲 味噌 昆布 鱼露 酸奶 酸奶油', 'Fermented'],
  ['玫瑰水 樱花 桂花 薰衣草 接骨木花', 'Floral'],
  ['黑芝麻 芝麻 杏仁 开心果 澳洲坚果 花生 山核桃 核桃', 'Nut & Seed'],
  ['蜂蜜 枫糖 椰糖 棕榈糖 糖蜜 椰枣', 'Sweetener'],
  ['黑麦 玉米 小米 荞麦 伏特加 朗姆 龙舌兰', 'Grain & Spirit'],
  ['辣椒 山椒 姜黄 姜 生姜 黑胡椒 孜然 香菜籽 肉桂 小豆蔻 豆蔻 多香果 肉豆蔻 葛缕子 塔斯马尼亚胡椒 茴香 甘草', 'Spice'],
  ['椰子 椰奶 菠萝 芒果 木瓜 百香果 番石榴 山竹 红毛丹 菠萝蜜 香蕉 热带水果 阿萨伊 猴面包树果', 'Tropical Fruit'],
  ['梅子 白桃 梨 苹果 葡萄 无花果 石榴 云莓 越橘 黑醋栗 黑加仑 蔓越莓 蓝莓 黑莓 樱桃 酸樱桃 李子 海棠果 洛神花 木槿', 'Fruit & Berry'],
  ['橄榄 番茄 仙人掌 甜菜根 南瓜 棕榈果', 'Vegetal'],
  ['云杉 杜松子 桦树汁 尤加利 金合欢籽 烟熏木 海盐', 'Mineral & Wood'],
];

const categoryDefaults: Record<string, IngredientProfileData> = {
  Citrus: {
    category: 'Citrus',
    story: '这类柑橘食材适合为鸡尾酒提供清晰酸线、果皮油香和明亮入口。稀释后酸感会变得更透明，适合 Highball、Sour 和 Martini 的骨架调整。',
    flavorWheel: { fresh: 5, acid: 5, sweet: 1, floral: 2, herbal: 1, savory: 1 },
    season: 'Seasonal citrus window / 依产地季节',
    suitableSpirits: ['Gin', 'Vodka', 'Tequila', 'Sake'],
    techniques: ['Cordial', 'Shrub', 'Carbonation', 'Oil Extraction'],
    cocktailDirections: ['Citrus Highball', 'Citrus Martini', 'Citrus Gin Sour'],
    relatedIngredients: { similar: ['柚子', '青柠', '指橙'], substitutes: ['罗望子', '百香果', '柠檬桃金娘'], pairings: ['蜂蜜', '紫苏', '海盐'] },
  },
  Herb: {
    category: 'Herb',
    story: '草本食材适合把酒体从甜和酸里拉出来，提供绿色香气和更长的尾韵。稀释后青味通常会变柔，适合用浸泡、糖浆或气泡化控制强度。',
    flavorWheel: { fresh: 4, acid: 1, sweet: 1, floral: 2, herbal: 5, savory: 1 },
    season: 'Fresh growing season / 新鲜生长期',
    suitableSpirits: ['Gin', 'Tequila', 'Vodka', 'Aquavit'],
    techniques: ['Infusion', 'Cordial', 'Syrup', 'Carbonation'],
    cocktailDirections: ['Herbal Gimlet', 'Herbal Highball', 'Herbal Paloma'],
    relatedIngredients: { similar: ['紫苏', '罗勒', '薄荷'], substitutes: ['迷迭香', '莳萝', '香茅'], pairings: ['柚子', '青柠', 'Gin'] },
  },
  'Tea & Coffee': {
    category: 'Tea & Coffee',
    story: '茶和咖啡可以提供单宁、烘焙和苦味骨架，让鸡尾酒更像有结构的饮品而不是单纯甜酸。稀释后香气会展开，适合冷泡和澄清。',
    flavorWheel: { fresh: 2, acid: 1, sweet: 1, floral: 2, herbal: 3, savory: 2 },
    season: 'All year / 全年',
    suitableSpirits: ['Gin', 'Whisky', 'Rum', 'Sake'],
    techniques: ['Infusion', 'Syrup', 'Milk Punch', 'Carbonation'],
    cocktailDirections: ['Tea Gin Sour', 'Coffee Negroni', 'Roasted Highball'],
    relatedIngredients: { similar: ['乌龙茶', '焙茶', '咖啡'], substitutes: ['可可', '香料茶', '黑芝麻'], pairings: ['柚子', '蜂蜜', 'Rum'] },
  },
  Fermented: {
    category: 'Fermented',
    story: '发酵食材适合增加鲜味、盐感和中段厚度。稀释后它们通常不会消失，而是像底噪一样托住酸甜，适合小剂量进入清澈酒体。',
    flavorWheel: { fresh: 1, acid: 2, sweet: 1, floral: 1, herbal: 1, savory: 5 },
    season: 'All year / 全年',
    suitableSpirits: ['Vodka', 'Gin', 'Sake', 'Whisky'],
    techniques: ['Fermentation', 'Clarification', 'Fat Wash', 'Syrup'],
    cocktailDirections: ['Umami Martini', 'Fermented Highball', 'Savory Sour'],
    relatedIngredients: { similar: ['味噌', '昆布', '鱼露'], substitutes: ['海盐', '酸奶', '米曲'], pairings: ['柚子', '黑芝麻', 'Vodka'] },
  },
  Floral: {
    category: 'Floral',
    story: '花香食材适合作为鸡尾酒的上层香气，不能用力过猛。稀释后花香会扩散，适合 Spritz、Collins 和低酒精结构。',
    flavorWheel: { fresh: 3, acid: 1, sweet: 3, floral: 5, herbal: 1, savory: 1 },
    season: 'Flowering season / 花期',
    suitableSpirits: ['Gin', 'Vodka', 'Sparkling Wine', 'Brandy'],
    techniques: ['Cordial', 'Syrup', 'Carbonation', 'Infusion'],
    cocktailDirections: ['Floral Martini', 'Floral Spritz', 'Floral Collins'],
    relatedIngredients: { similar: ['玫瑰水', '桂花', '接骨木花'], substitutes: ['橙花水', '樱花', '薰衣草'], pairings: ['柑橘', '蜂蜜', 'Gin'] },
  },
  'Nut & Seed': {
    category: 'Nut & Seed',
    story: '坚果和种子提供油脂、烘焙和圆润感，适合让酸酒更有质地。稀释后厚度会变轻，但香气会留在尾段。',
    flavorWheel: { fresh: 1, acid: 1, sweet: 3, floral: 1, herbal: 1, savory: 3 },
    season: 'All year / 全年',
    suitableSpirits: ['Rum', 'Whisky', 'Brandy', 'Amaro'],
    techniques: ['Fat Wash', 'Milk Punch', 'Syrup', 'Oil Extraction'],
    cocktailDirections: ['Nut Sour', 'Seed Milk Punch', 'Nut Old Fashioned'],
    relatedIngredients: { similar: ['黑芝麻', '杏仁', '开心果'], substitutes: ['花生', '澳洲坚果', '山核桃'], pairings: ['咖啡', '蜂蜜', 'Rum'] },
  },
  Sweetener: {
    category: 'Sweetener',
    story: '天然甜味食材不只是加糖，它们会带来花香、焦糖、木质或果干感。稀释后甜感会退后，来源风味会决定尾韵。',
    flavorWheel: { fresh: 1, acid: 1, sweet: 5, floral: 2, herbal: 1, savory: 1 },
    season: 'All year / 全年',
    suitableSpirits: ['Rum', 'Bourbon', 'Brandy', 'Whisky'],
    techniques: ['Syrup', 'Fermentation', 'Milk Punch', 'Fat Wash'],
    cocktailDirections: ['Honey Sour', 'Maple Old Fashioned', 'Date Flip'],
    relatedIngredients: { similar: ['蜂蜜', '枫糖', '糖蜜'], substitutes: ['椰糖', '棕榈糖', '椰枣'], pairings: ['姜', '柚子', 'Whisky'] },
  },
  'Grain & Spirit': {
    category: 'Grain & Spirit',
    story: '谷物和蒸馏酒类食材提供酒体、谷物甜和木质骨架。稀释后它们会显出面包、坚果或香料尾韵，适合长饮和 Old Fashioned 方向。',
    flavorWheel: { fresh: 1, acid: 1, sweet: 2, floral: 1, herbal: 1, savory: 3 },
    season: 'Harvest season / 收获季',
    suitableSpirits: ['Whisky', 'Vodka', 'Rum', 'Mezcal'],
    techniques: ['Infusion', 'Milk Punch', 'Fermentation', 'Syrup'],
    cocktailDirections: ['Grain Highball', 'Corn Milk Punch', 'Rye Old Fashioned'],
    relatedIngredients: { similar: ['黑麦', '玉米', '荞麦'], substitutes: ['小米', '伏特加', '朗姆'], pairings: ['蜂蜜', '咖啡', '苹果'] },
  },
  Spice: {
    category: 'Spice',
    story: '香料适合构建尾韵和方向感，通常不应该抢走主体。稀释后辛香会变得更长，适合用糖浆、浸泡或油脂萃取控制。',
    flavorWheel: { fresh: 2, acid: 1, sweet: 1, floral: 2, herbal: 3, savory: 2 },
    season: 'All year / 全年',
    suitableSpirits: ['Rum', 'Whisky', 'Gin', 'Mezcal'],
    techniques: ['Infusion', 'Syrup', 'Cordial', 'Oil Extraction'],
    cocktailDirections: ['Spiced Daiquiri', 'Spice Old Fashioned', 'Spice Highball'],
    relatedIngredients: { similar: ['豆蔻', '辣椒', '多香果'], substitutes: ['黑胡椒', '肉桂', '姜'], pairings: ['芒果', '咖啡', 'Rum'] },
  },
  'Tropical Fruit': {
    category: 'Tropical Fruit',
    story: '热带水果能快速给鸡尾酒建立地域感和香气记忆。稀释后甜香会变宽，通常需要酸、盐或香料来让结构更清楚。',
    flavorWheel: { fresh: 3, acid: 3, sweet: 5, floral: 2, herbal: 1, savory: 1 },
    season: 'Warm season / 温暖季节',
    suitableSpirits: ['Rum', 'Tequila', 'Pisco', 'Cachaça'],
    techniques: ['Syrup', 'Shrub', 'Clarification', 'Fermentation'],
    cocktailDirections: ['Tropical Sour', 'Fruit Daiquiri', 'Tropical Punch'],
    relatedIngredients: { similar: ['芒果', '百香果', '番石榴'], substitutes: ['菠萝', '木瓜', '山竹'], pairings: ['青柠', '椰子', 'Rum'] },
  },
  'Fruit & Berry': {
    category: 'Fruit & Berry',
    story: '水果和浆果提供酸、颜色、果皮和果核感，是把鸡尾酒做出季节感的最直接入口。稀释后果香会变轻，酸和单宁决定结构。',
    flavorWheel: { fresh: 4, acid: 3, sweet: 3, floral: 2, herbal: 1, savory: 1 },
    season: 'Peak fruit season / 成熟季',
    suitableSpirits: ['Gin', 'Vodka', 'Brandy', 'Sparkling Wine'],
    techniques: ['Shrub', 'Syrup', 'Clarification', 'Fermentation'],
    cocktailDirections: ['Berry Collins', 'Fruit Spritz', 'Stone Fruit Sour'],
    relatedIngredients: { similar: ['梅子', '石榴', '蔓越莓'], substitutes: ['酸樱桃', '黑加仑', '白桃'], pairings: ['蜂蜜', '茶', 'Brandy'] },
  },
  Vegetal: {
    category: 'Vegetal',
    story: '蔬果型食材适合提供泥土、咸感、青味或鲜味，让鸡尾酒进入更餐饮化的方向。稀释后植物感会变轻，需要酸或盐支撑。',
    flavorWheel: { fresh: 2, acid: 1, sweet: 2, floral: 1, herbal: 3, savory: 4 },
    season: 'Harvest season / 收获季',
    suitableSpirits: ['Gin', 'Vodka', 'Mezcal', 'Vermouth'],
    techniques: ['Clarification', 'Shrub', 'Fermentation', 'Syrup'],
    cocktailDirections: ['Vegetal Martini', 'Savory Highball', 'Garden Sour'],
    relatedIngredients: { similar: ['橄榄', '番茄', '甜菜根'], substitutes: ['仙人掌', '南瓜', '海盐'], pairings: ['迷迭香', 'Gin', '柑橘'] },
  },
  'Mineral & Wood': {
    category: 'Mineral & Wood',
    story: '木质、树脂和矿物类食材适合做香气边缘和空间感。稀释后它们会退到背景，留下干燥、冷感或烟感尾韵。',
    flavorWheel: { fresh: 2, acid: 1, sweet: 1, floral: 1, herbal: 3, savory: 4 },
    season: 'All year / 全年',
    suitableSpirits: ['Gin', 'Whisky', 'Mezcal', 'Brandy'],
    techniques: ['Infusion', 'Oil Extraction', 'Cordial', 'Carbonation'],
    cocktailDirections: ['Wood Highball', 'Mineral Martini', 'Smoked Sour'],
    relatedIngredients: { similar: ['云杉', '尤加利', '烟熏木'], substitutes: ['迷迭香', '塔斯马尼亚胡椒', '海盐'], pairings: ['蜂蜜', '柑橘', 'Whisky'] },
  },
};

function detectCategory(name: string) {
  return categoryKeywords.find(([keywords]) => keywords.split(' ').includes(name))?.[1] ?? 'Fruit & Berry';
}

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}

export function slugIngredient(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\u4e00-\u9fa5a-z0-9-]/g, '');
}

function buildIngredientDetail(name: string): IngredientDetail {
  const relatedRegionObjects = worldRegions.filter((region) => region.ingredients.includes(name));
  const primaryRegion = relatedRegionObjects[0] ?? worldRegions[0];
  const curated = curatedIngredientProfiles[name];
  const category = curated?.category ?? detectCategory(name);
  const defaults = categoryDefaults[category] ?? categoryDefaults['Fruit & Berry'];
  const baseProfile = curated ?? defaults;
  const relatedIngredients = curated?.relatedIngredients ?? defaults.relatedIngredients;

  return {
    id: slugIngredient(name),
    name,
    englishName: englishNames[name] ?? name,
    category,
    regions: relatedRegionObjects.map((region) => region.id),
    story:
      curated?.story ??
      `${name} 在 ${primaryRegion.regionName} 的风味语境里可以作为调酒师的风味锚点。它的优势不是百科意义上的产地知识，而是能把 ${baseProfile.suitableSpirits.slice(0, 3).join('、')} 拉向${primaryRegion.flavorProfile.slice(0, 3).join('、')}的方向；稀释后香气会变得更可读，适合进入研发型酒谱。`,
    flavorWheel: baseProfile.flavorWheel,
    season: baseProfile.season,
    suitableSpirits: unique(baseProfile.suitableSpirits).slice(0, 6),
    techniques: unique(baseProfile.techniques).slice(0, 6),
    cocktailDirections: unique([...baseProfile.cocktailDirections, ...primaryRegion.cocktailDirections]).slice(0, 6),
    relatedIngredients: {
      similar: unique(relatedIngredients.similar).filter((item) => item !== name).slice(0, 4),
      substitutes: unique(relatedIngredients.substitutes).filter((item) => item !== name).slice(0, 4),
      pairings: unique(relatedIngredients.pairings).filter((item) => item !== name).slice(0, 4),
    },
  };
}

export const ingredientDetails: IngredientDetail[] = unique(worldRegions.flatMap((region) => region.ingredients)).map(buildIngredientDetail);

export const ingredientConnections: IngredientConnection[] = [
  { ingredient: '柚子', similarFlavors: ['指橙', '青柠', '柑橘'], substitutions: ['青柠', '柠檬桃金娘', '橙花水'], pairWith: ['乌龙茶', '紫苏', '蜂蜜'] },
  { ingredient: '紫苏', similarFlavors: ['罗勒', '薄荷', '泰国罗勒'], substitutions: ['薄荷', '香菜籽', '莳萝'], pairWith: ['柚子', '梅子', '龙舌兰'] },
  { ingredient: '罗望子', similarFlavors: ['石榴', '洛神花', '青柠'], substitutions: ['酸樱桃', '百香果', '猴面包树果'], pairWith: ['辣椒', '姜', '朗姆'] },
  { ingredient: '可可', similarFlavors: ['咖啡', '糖蜜', '黑芝麻'], substitutions: ['咖啡', '香草', '山核桃'], pairWith: ['朗姆', '梅斯卡尔', '樱桃'] },
  { ingredient: '咖啡', similarFlavors: ['可可', '焙茶', '糖蜜'], substitutions: ['焙茶', '黑芝麻', '香料茶'], pairWith: ['朗姆', '橙花水', '蜂蜜'] },
  { ingredient: '玫瑰水', similarFlavors: ['橙花水', '桂花', '薰衣草'], substitutions: ['接骨木花', '樱花', '藏红花'], pairWith: ['石榴', '开心果', 'Gin'] },
  { ingredient: '黑麦', similarFlavors: ['玉米', '荞麦', '黑麦'], substitutions: ['玉米', '荞麦', '小米'], pairWith: ['蜂蜜', '苹果', '咖啡'] },
  { ingredient: '椰子', similarFlavors: ['椰奶', '斑斓', '澳洲坚果'], substitutions: ['椰奶', '澳洲坚果', '蜂蜜'], pairWith: ['朗姆', '菠萝', '青柠'] },
  { ingredient: '姜', similarFlavors: ['生姜', '山椒', '黑胡椒'], substitutions: ['生姜', '姜黄', '辣椒'], pairWith: ['罗望子', '蜂蜜', '威士忌'] },
  { ingredient: '蜂蜜', similarFlavors: ['枫糖', '棕榈糖', '椰枣'], substitutions: ['枫糖', '椰糖', '棕榈糖'], pairWith: ['柚子', '姜', '黑麦'] },
  { ingredient: '山椒', similarFlavors: ['塔斯马尼亚胡椒', '黑胡椒', '辣椒'], substitutions: ['黑胡椒', '塔斯马尼亚胡椒', '姜'], pairWith: ['柚子', '清酒', 'Gin'] },
  { ingredient: '接骨木花', similarFlavors: ['桂花', '玫瑰水', '薰衣草'], substitutions: ['橙花水', '樱花', '柠檬桃金娘'], pairWith: ['Gin', '苹果', '云莓'] },
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

export function getRegion(id: string) {
  return worldRegions.find((region) => region.id === id) ?? worldRegions[0];
}

export function getRegionsForIngredient(name: string) {
  return worldRegions.filter((region) => region.ingredients.includes(name));
}

export function getIngredientDetail(name: string): IngredientDetail {
  return ingredientDetails.find((ingredient) => ingredient.name === name) ?? buildIngredientDetail(name);
}

export function getIngredientConnection(name: string): IngredientConnection {
  const explicit = ingredientConnections.find((connection) => connection.ingredient === name);
  if (explicit) return explicit;

  const detail = getIngredientDetail(name);

  return {
    ingredient: name,
    similarFlavors: detail.relatedIngredients.similar,
    substitutions: detail.relatedIngredients.substitutes,
    pairWith: detail.relatedIngredients.pairings,
  };
}

export function getInspirationsForRegion(regionId: string) {
  return inspirationArchive.filter((item) => item.relatedRegions.includes(regionId));
}
