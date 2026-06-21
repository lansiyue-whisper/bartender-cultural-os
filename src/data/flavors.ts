export type FlavorCategory = {
  name: string;
  tone: string;
  ingredients: string[];
};

export const flavorCategories: FlavorCategory[] = [
  { name: '清爽', tone: 'fresh / mineral / carbonated', ingredients: ['黄瓜', '苏打水', '柚子', '绿茶', '青柠'] },
  { name: '酸感', tone: 'sharp / bright / electric', ingredients: ['柠檬', '青柠', '青芒果', '葡萄柚', '杨梅'] },
  { name: '果香', tone: 'ripe / tropical / vivid', ingredients: ['百香果', '凤梨', '荔枝', '桃子', '番石榴'] },
  { name: '草本', tone: 'green / medicinal / aromatic', ingredients: ['紫苏', '龙蒿', '鼠尾草', 'Benedictine', 'Chartreuse'] },
  { name: '烟熏', tone: 'charred / mineral / slow', ingredients: ['梅斯卡尔', '泥煤威士忌', '沉香木', '烘烤凤梨'] },
  { name: '发酵', tone: 'funky / alive / layered', ingredients: ['乌龙茶', '雪莉酒', '康普茶', '发酵青芒果'] },
  { name: '奶香', tone: 'soft / round / dessert-like', ingredients: ['奶油', '椰奶', '鲜奶', '抹茶奶', '蛋清'] },
  { name: '苦感', tone: 'bitter / structural / adult', ingredients: ['金巴利', '白玉苦瓜', 'Fernet', '葡萄柚皮', '苦精'] },
];
