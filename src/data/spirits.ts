export type SpiritProfile = {
  id: string;
  name: string;
  category: string;
  origin: string;
  description: string;
  flavorProfile: string[];
  bestPairingFlavors: string[];
  bestIngredients: string[];
  suitableTechniques: string[];
  cocktailDirections: string[];
  relatedRegions: string[];
};

export const spirits: SpiritProfile[] = [
  {
    id: 'gin',
    name: 'Gin',
    category: 'Botanical Spirit',
    origin: 'Europe / Global',
    description:
      'Gin is highly responsive to citrus, herbs, flowers and tea-based ingredients because its botanical structure can either echo or contrast those aromas. It is one of the most flexible bases for translating a region into a clear, aromatic drink.',
    flavorProfile: ['Botanical', 'Juniper', 'Citrus', 'Floral', 'Herbal'],
    bestPairingFlavors: ['Citrus', 'Herbal', 'Floral', 'Tea', 'Bitter'],
    bestIngredients: ['柚子', '紫苏', '罗勒', '接骨木花', '玫瑰水', '乌龙茶'],
    suitableTechniques: ['Infusion', 'Cordial', 'Highball', 'Sour', 'Martini'],
    cocktailDirections: ['Yuzu Gin Highball', 'Shiso Gin Sour', 'Rose Martini', 'Oolong Collins'],
    relatedRegions: ['East Asia', 'Mediterranean', 'Nordic', 'Oceania'],
  },
  {
    id: 'rum',
    name: 'Rum',
    category: 'Cane Spirit',
    origin: 'Caribbean / Latin America / Global tropics',
    description:
      'Rum carries sugarcane, fruit, molasses, wood and fermentation. It works best when the ingredient can either brighten its sweetness or deepen its tropical bass line.',
    flavorProfile: ['Cane', 'Tropical', 'Molasses', 'Oak', 'Fermented'],
    bestPairingFlavors: ['Tropical', 'Spice', 'Citrus', 'Nutty', 'Sweet'],
    bestIngredients: ['椰子', '菠萝', '青柠', '糖蜜', '多香果', '斑斓'],
    suitableTechniques: ['Daiquiri', 'Punch', 'Milk Punch', 'Fat Wash', 'Syrup'],
    cocktailDirections: ['Pandan Daiquiri', 'Coconut Rum Punch', 'Molasses Flip', 'Allspice Daiquiri'],
    relatedRegions: ['Caribbean', 'Southeast Asia', 'Latin America', 'Africa'],
  },
  {
    id: 'whisky',
    name: 'Whisky',
    category: 'Grain Spirit',
    origin: 'Scotland / Ireland / United States / Japan / Global',
    description:
      'Whisky has grain, oak, spice and heat. It accepts honey, roasted tea, smoke, nuts and fermented umami especially well because those ingredients extend its mid-palate rather than covering it.',
    flavorProfile: ['Grain', 'Oak', 'Spice', 'Smoke', 'Honey'],
    bestPairingFlavors: ['Smoky', 'Sweet', 'Nutty', 'Tea', 'Savory'],
    bestIngredients: ['黑麦', '蜂蜜', '焙茶', '黑芝麻', '味噌', '烟熏木'],
    suitableTechniques: ['Old Fashioned', 'Highball', 'Fat Wash', 'Milk Punch', 'Smoke Rinse'],
    cocktailDirections: ['Hojicha Old Fashioned', 'Miso Whisky Sour', 'Rye Honey Highball', 'Smoked Highball'],
    relatedRegions: ['North America', 'Nordic', 'East Asia', 'Eastern Europe'],
  },
  {
    id: 'tequila',
    name: 'Tequila',
    category: 'Agave Spirit',
    origin: 'Mexico',
    description:
      'Tequila is green, mineral, peppery and bright. It connects beautifully with citrus, salt, herbs and tropical fruit, especially when a drink needs energy without heaviness.',
    flavorProfile: ['Agave', 'Mineral', 'Green', 'Pepper', 'Citrus'],
    bestPairingFlavors: ['Citrus', 'Herbal', 'Tropical', 'Spice', 'Saline'],
    bestIngredients: ['紫苏', '柚子', '青柠', '番石榴', '辣椒', '龙舌兰'],
    suitableTechniques: ['Highball', 'Sour', 'Cordial', 'Shrub', 'Carbonation'],
    cocktailDirections: ['Shiso Paloma', 'Guava Margarita', 'Yuzu Tequila Highball', 'Chile Paloma'],
    relatedRegions: ['Latin America', 'East Asia', 'Southeast Asia', 'Oceania'],
  },
  {
    id: 'mezcal',
    name: 'Mezcal',
    category: 'Agave Spirit',
    origin: 'Mexico',
    description:
      'Mezcal brings smoke, cooked agave, earth and mineral pressure. It pairs best with ingredients that can either cool it with acid or resonate with its charred depth.',
    flavorProfile: ['Smoke', 'Agave', 'Mineral', 'Earth', 'Pepper'],
    bestPairingFlavors: ['Smoky', 'Citrus', 'Spice', 'Tropical', 'Bitter'],
    bestIngredients: ['辣椒', '可可', '罗望子', '青柠', '烟熏木', '塔斯马尼亚胡椒'],
    suitableTechniques: ['Smoke Rinse', 'Sour', 'Paloma', 'Infusion', 'Cordial'],
    cocktailDirections: ['Chile Mezcal Paloma', 'Cacao Mezcal Sour', 'Tamarind Mezcal Highball', 'Smoked Agave Sour'],
    relatedRegions: ['Latin America', 'Caribbean', 'Oceania', 'Africa'],
  },
  {
    id: 'vodka',
    name: 'Vodka',
    category: 'Neutral Spirit',
    origin: 'Eastern Europe / Nordic / Global',
    description:
      'Vodka is a clean carrier. It is useful when the bartender wants the ingredient to speak first: saline, floral, tea, vegetal and berry flavors become especially readable.',
    flavorProfile: ['Clean', 'Mineral', 'Neutral', 'Cold', 'Texture'],
    bestPairingFlavors: ['Fresh', 'Floral', 'Berry', 'Savory', 'Citrus'],
    bestIngredients: ['橄榄', '甜菜根', '蔓越莓', '玫瑰水', '昆布', '柚子'],
    suitableTechniques: ['Martini', 'Infusion', 'Clarification', 'Carbonation', 'Highball'],
    cocktailDirections: ['Beetroot Martini', 'Rose Vodka Sour', 'Kombu Vodka Highball', 'Cranberry Collins'],
    relatedRegions: ['Eastern Europe', 'Nordic', 'Middle East', 'East Asia'],
  },
  {
    id: 'brandy',
    name: 'Brandy',
    category: 'Fruit Spirit',
    origin: 'Mediterranean / France / Spain / Global',
    description:
      'Brandy has fruit skin, dried fruit, oak and warmth. It works well with orchard fruit, flowers, nuts and honey because these flavors extend its grape or fruit base.',
    flavorProfile: ['Fruit', 'Oak', 'Dried Fruit', 'Warm', 'Floral'],
    bestPairingFlavors: ['Fruit', 'Floral', 'Nutty', 'Sweet', 'Spice'],
    bestIngredients: ['无花果', '葡萄', '杏仁', '蜂蜜', '酸樱桃', '橙花水'],
    suitableTechniques: ['Sour', 'Sidecar', 'Milk Punch', 'Old Fashioned', 'Infusion'],
    cocktailDirections: ['Fig Brandy Sour', 'Orange Blossom Sidecar', 'Cherry Brandy Collins', 'Almond Milk Punch'],
    relatedRegions: ['Mediterranean', 'Middle East', 'Eastern Europe', 'North America'],
  },
  {
    id: 'pisco',
    name: 'Pisco',
    category: 'Grape Spirit',
    origin: 'Peru / Chile',
    description:
      'Pisco is aromatic, grape-driven and transparent. It benefits from citrus, tropical fruit, floral water and resinous smoke because these elements lift its perfume without burying it.',
    flavorProfile: ['Grape', 'Floral', 'Citrus', 'Clean', 'Mineral'],
    bestPairingFlavors: ['Citrus', 'Floral', 'Tropical', 'Fresh', 'Smoky'],
    bestIngredients: ['百香果', '柚子', '玫瑰水', '可可', '指橙', '番石榴'],
    suitableTechniques: ['Sour', 'Highball', 'Cordial', 'Clarification', 'Smoke Rinse'],
    cocktailDirections: ['Passionfruit Pisco Sour', 'Yuzu Pisco Highball', 'Rose Pisco Sour', 'Cacao Pisco Sour'],
    relatedRegions: ['Latin America', 'Oceania', 'Middle East', 'East Asia'],
  },
  {
    id: 'cachaca',
    name: 'Cachaça',
    category: 'Cane Spirit',
    origin: 'Brazil',
    description:
      'Cachaça has fresh cane, grass, tropical fruit and sometimes wood. It likes ingredients that keep its green sweetness alive rather than making it heavy.',
    flavorProfile: ['Fresh Cane', 'Grass', 'Tropical', 'Mineral', 'Fruit'],
    bestPairingFlavors: ['Fresh', 'Tropical', 'Citrus', 'Herbal', 'Spice'],
    bestIngredients: ['青柠', '百香果', '甘蔗', '香草', '番石榴', '辣椒'],
    suitableTechniques: ['Caipirinha', 'Highball', 'Sour', 'Cordial', 'Fermentation'],
    cocktailDirections: ['Passionfruit Caipirinha', 'Vanilla Cachaça Sour', 'Guava Cachaça Highball', 'Chile Cane Sour'],
    relatedRegions: ['Latin America', 'Caribbean', 'Southeast Asia'],
  },
  {
    id: 'shochu',
    name: 'Shochu',
    category: 'Japanese Distillate',
    origin: 'Japan',
    description:
      'Shochu can be clean, earthy, rice-driven, sweet potato-like or barley-like. Its strength is subtlety: tea, citrus, herbs and savory ingredients can be expressed without making the drink loud.',
    flavorProfile: ['Rice', 'Barley', 'Earth', 'Clean', 'Umami'],
    bestPairingFlavors: ['Tea', 'Citrus', 'Herbal', 'Savory', 'Fresh'],
    bestIngredients: ['柚子', '紫苏', '昆布', '焙茶', '山椒', '梨'],
    suitableTechniques: ['Highball', 'Infusion', 'Cordial', 'Martini', 'Carbonation'],
    cocktailDirections: ['Yuzu Shochu Highball', 'Shiso Shochu Collins', 'Kombu Shochu Martini', 'Hojicha Shochu Sour'],
    relatedRegions: ['East Asia', 'Nordic', 'Oceania'],
  },
  {
    id: 'sake',
    name: 'Sake',
    category: 'Rice Fermentation',
    origin: 'Japan',
    description:
      'Sake carries rice sweetness, umami, melon, lactic softness and clean acidity. It pairs well with citrus, tea, flowers and saline ingredients when the drink needs quiet depth.',
    flavorProfile: ['Rice', 'Umami', 'Melon', 'Lactic', 'Clean'],
    bestPairingFlavors: ['Fresh', 'Umami', 'Floral', 'Tea', 'Citrus'],
    bestIngredients: ['柚子', '梅子', '樱花', '昆布', '乌龙茶', '白桃'],
    suitableTechniques: ['Spritz', 'Highball', 'Martini', 'Cordial', 'Clarification'],
    cocktailDirections: ['Yuzu Sake Spritz', 'Sakura Sake Fizz', 'Kombu Sake Martini', 'Ume Sake Sour'],
    relatedRegions: ['East Asia', 'Middle East', 'Mediterranean'],
  },
  {
    id: 'baijiu',
    name: 'Baijiu',
    category: 'Chinese Grain Spirit',
    origin: 'China',
    description:
      'Baijiu is intense, aromatic and fermentation-led. It needs ingredients with enough clarity or structure: flowers, tea, citrus, tropical fruit and umami can all create a readable bridge.',
    flavorProfile: ['Fermented', 'Grain', 'Tropical', 'Aromatic', 'Umami'],
    bestPairingFlavors: ['Fermented', 'Floral', 'Tea', 'Tropical', 'Citrus'],
    bestIngredients: ['桂花', '乌龙茶', '柚子', '紫苏', '番石榴', '米曲'],
    suitableTechniques: ['Highball', 'Cordial', 'Infusion', 'Milk Punch', 'Sour'],
    cocktailDirections: ['Osmanthus Baijiu Sour', 'Oolong Baijiu Highball', 'Yuzu Baijiu Collins', 'Guava Baijiu Sour'],
    relatedRegions: ['East Asia', 'Southeast Asia', 'South Asia'],
  },
  {
    id: 'aquavit',
    name: 'Aquavit',
    category: 'Caraway / Dill Spirit',
    origin: 'Nordic',
    description:
      'Aquavit is built around caraway, dill, fennel and cold herbs. It is excellent with berries, citrus, green herbs, brine and forest notes.',
    flavorProfile: ['Caraway', 'Dill', 'Fennel', 'Cold Herb', 'Spice'],
    bestPairingFlavors: ['Herbal', 'Fresh', 'Berry', 'Savory', 'Citrus'],
    bestIngredients: ['莳萝', '接骨木花', '云莓', '黑麦', '柚子', '葛缕子'],
    suitableTechniques: ['Highball', 'Martini', 'Sour', 'Infusion', 'Carbonation'],
    cocktailDirections: ['Cloudberry Aquavit Highball', 'Dill Aquavit Martini', 'Elderflower Aquavit Spritz', 'Caraway Sour'],
    relatedRegions: ['Nordic', 'Eastern Europe', 'East Asia'],
  },
  {
    id: 'arrack',
    name: 'Arrack',
    category: 'Palm / Cane / Rice Spirit',
    origin: 'South Asia / Southeast Asia',
    description:
      'Arrack can be funky, cane-like, coconut-adjacent and fermented. It is especially useful for tropical drinks that need more depth than a clean white rum.',
    flavorProfile: ['Funky', 'Cane', 'Palm', 'Fermented', 'Tropical'],
    bestPairingFlavors: ['Tropical', 'Fermented', 'Spice', 'Coconut', 'Citrus'],
    bestIngredients: ['斑斓', '椰子', '罗望子', '香茅', '椰糖', '青柠'],
    suitableTechniques: ['Punch', 'Daiquiri', 'Highball', 'Milk Punch', 'Fermentation'],
    cocktailDirections: ['Pandan Arrack Punch', 'Tamarind Arrack Sour', 'Coconut Arrack Highball', 'Lemongrass Arrack Collins'],
    relatedRegions: ['Southeast Asia', 'South Asia', 'Caribbean'],
  },
  {
    id: 'amaro',
    name: 'Amaro',
    category: 'Bitter Liqueur',
    origin: 'Italy / Global bitter traditions',
    description:
      'Amaro brings bitter herbs, roots, citrus peel and sweetness. It is a bridge between cocktail and food, useful when a drink needs structure before sweetness.',
    flavorProfile: ['Bitter', 'Herbal', 'Root', 'Citrus Peel', 'Sweet'],
    bestPairingFlavors: ['Bitter', 'Herbal', 'Citrus', 'Spice', 'Coffee'],
    bestIngredients: ['咖啡', '柑橘', '迷迭香', '无花果', '可可', '石榴'],
    suitableTechniques: ['Spritz', 'Negroni', 'Highball', 'Stirred', 'Sour'],
    cocktailDirections: ['Coffee Amaro Highball', 'Fig Amaro Spritz', 'Cacao Negroni', 'Rosemary Amaro Sour'],
    relatedRegions: ['Mediterranean', 'Middle East', 'Latin America'],
  },
  {
    id: 'vermouth',
    name: 'Vermouth',
    category: 'Aromatized Wine',
    origin: 'Mediterranean / Europe',
    description:
      'Vermouth connects wine, herbs, bitterness and sweetness. It is ideal for low-ABV drinks and for making ingredients feel more culinary.',
    flavorProfile: ['Wine', 'Herbal', 'Bitter', 'Citrus', 'Spice'],
    bestPairingFlavors: ['Herbal', 'Bitter', 'Fruit', 'Savory', 'Floral'],
    bestIngredients: ['橄榄', '迷迭香', '柑橘', '无花果', '番茄', '薰衣草'],
    suitableTechniques: ['Spritz', 'Martini', 'Highball', 'Stirred', 'Infusion'],
    cocktailDirections: ['Olive Vermouth Spritz', 'Fig Vermouth Highball', 'Tomato Vermouth Tonic', 'Lavender Vermouth Collins'],
    relatedRegions: ['Mediterranean', 'Nordic', 'Middle East'],
  },
];

export function getSpirit(id: string) {
  return spirits.find((spirit) => spirit.id === id) ?? spirits[0];
}
