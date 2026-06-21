export const builderOptions = {
  base: ['Gin', 'Mezcal', 'Shochu', 'Aged Rum', 'Sake', 'Bourbon'],
  acid: ['Yuzu', 'Lime', 'Waxberry', 'Green mango', 'Grapefruit', 'Tomato water'],
  sweet: ['Honey', 'Cane syrup', 'Palm sugar', 'Lychee', 'Pineapple', 'Caramel'],
  aroma: ['Shiso', 'Tarragon', 'Sage', 'Agarwood smoke', 'Oolong', 'Sichuan pepper'],
  texture: ['Carbonated', 'Silky', 'Creamy', 'Crushed ice', 'Still', 'Foamy'],
};

export const directionTags: Record<string, string[]> = {
  Gin: ['清爽', '草本'],
  Mezcal: ['烟熏', '矿物'],
  Shochu: ['干净', '茶感'],
  'Aged Rum': ['厚重', '焦糖'],
  Sake: ['米香', '柔和'],
  Bourbon: ['木质', '甜感'],
  Yuzu: ['酸感', '清亮'],
  Lime: ['酸咸', '锋利'],
  Waxberry: ['红果', '酸甜'],
  'Green mango': ['尖锐', '热带'],
  Grapefruit: ['苦感', '柑橘'],
  'Tomato water': ['鲜味', '透明'],
  Honey: ['圆润'],
  Shiso: ['草本'],
  Oolong: ['茶感'],
  Carbonated: ['清爽'],
  Silky: ['柔滑'],
  Creamy: ['奶香'],
};
