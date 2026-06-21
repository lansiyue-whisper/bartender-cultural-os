export type IngredientProfile = {
  name: string;
  english: string;
  description: string;
  pairings: string[];
  spirits: string[];
  cocktails: string[];
};

export const ingredientProfiles: IngredientProfile[] = [
  {
    name: '紫苏',
    english: 'Shiso',
    description: '像雨后石阶边的绿色影子，带着薄荷、罗勒和一点青梅的方向。',
    pairings: ['梅子', '桃子', '龙舌兰', '乌龙茶'],
    spirits: ['Gin', 'Shochu', 'Tequila'],
    cocktails: ['Lychee Oolong', 'Shiso Highball', 'Gin Journey'],
  },
  {
    name: '龙蒿',
    english: 'Tarragon',
    description: '生长在干燥的风里，带着甘草与青草之间的气味。',
    pairings: ['黄瓜', '柠檬', '白葡萄酒', '梨'],
    spirits: ['Gin', 'Vodka', 'Fino Sherry'],
    cocktails: ['Eastside', 'London Calling', 'French 75 riff'],
  },
  {
    name: '鼠尾草',
    english: 'Sage',
    description: '像旧书页和壁炉旁的叶子，温热、微苦、带一点松脂感。',
    pairings: ['蜂蜜', '苹果', '波本', '柠檬'],
    spirits: ['Bourbon', 'Calvados', 'Rum'],
    cocktails: ['Gold Rush riff', 'Applejack Rabbit', 'Sage Sour'],
  },
  {
    name: '折耳根',
    english: 'Houttuynia',
    description: '潮湿、锋利、根茎感强，适合被酸、盐和气泡驯服。',
    pairings: ['青柠', '盐', '番茄', '梅斯卡尔'],
    spirits: ['Mezcal', 'Tequila', 'Shochu'],
    cocktails: ['Bloody Mary riff', 'Paloma riff', 'Root Highball'],
  },
  {
    name: '杨梅',
    english: 'Waxberry',
    description: '酸像电流，甜像深红色的雨，适合把夏夜压进一杯酒。',
    pairings: ['金酒', '清酒', '梅斯卡尔', '苏打水'],
    spirits: ['Gin', 'Sake', 'Vodka'],
    cocktails: ['Rose Berry Icetea', 'Waxberry Collins', 'Siesta riff'],
  },
  {
    name: '白玉苦瓜',
    english: 'White Bitter Melon',
    description: '不是粗暴的苦，而是水感、矿物感和一点冷白色的植物结构。',
    pairings: ['葡萄柚', '金巴利', '盐', '清酒'],
    spirits: ['Gin', 'Sake', 'White Rum'],
    cocktails: ['Bitter Melon Highball', 'White Negroni riff', 'Sake Collins'],
  },
];
