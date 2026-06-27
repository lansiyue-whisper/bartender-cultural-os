export type TechniqueProfile = {
  id: string;
  name: string;
  description: string;
  bestForIngredients: string[];
  bestForFlavors: string[];
  suitableSpirits: string[];
  cocktailDirections: string[];
  shelfLife: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  notes: string;
};

export const techniques: TechniqueProfile[] = [
  {
    id: 'cordial',
    name: 'Cordial',
    description:
      'A cordial is useful when an ingredient has strong aroma but unstable freshness. It allows citrus, herbs, flowers and fruits to become a consistent cocktail building block.',
    bestForIngredients: ['柚子', '青柠', '玫瑰水', '接骨木花', '香茅', '柠檬桃金娘'],
    bestForFlavors: ['Citrus', 'Floral', 'Herbal', 'Tea'],
    suitableSpirits: ['Gin', 'Vodka', 'Rum', 'Shochu', 'Tequila'],
    cocktailDirections: ['Yuzu Cordial Highball', 'Rose Cordial Martini', 'Lemongrass Gin Fizz', 'Lemon Myrtle Collins'],
    shelfLife: '1-3 weeks depending on sugar and acid balance',
    difficulty: 'Medium',
    notes: 'Keep acid and sugar measurable. Cordial should preserve aroma without turning every drink into lemonade.',
  },
  {
    id: 'shrub',
    name: 'Shrub',
    description:
      'Shrub turns fruit, herbs and spices into an acid-forward mixer with vinegar-like tension. It is ideal when a drink needs acidity, texture and a longer finish without relying only on citrus.',
    bestForIngredients: ['罗望子', '梅子', '石榴', '蔓越莓', '酸樱桃', '猴面包树果'],
    bestForFlavors: ['Acid', 'Fruit', 'Fermented', 'Fresh'],
    suitableSpirits: ['Gin', 'Rum', 'Tequila', 'Vodka', 'Brandy'],
    cocktailDirections: ['Tamarind Shrub Highball', 'Ume Shrub Spritz', 'Pomegranate Shrub Sour', 'Cranberry Shrub Collins'],
    shelfLife: '2-6 weeks refrigerated',
    difficulty: 'Medium',
    notes: 'Use vinegar as structure, not dominance. Taste after dilution, because sharpness changes quickly in a finished drink.',
  },
  {
    id: 'infusion',
    name: 'Infusion',
    description:
      'Infusion transfers aroma, bitterness, color or spice into a liquid base. It is best when the ingredient has clear aromatic identity and the bartender can control contact time.',
    bestForIngredients: ['紫苏', '乌龙茶', '咖啡', '豆蔻', '迷迭香', '尤加利'],
    bestForFlavors: ['Herbal', 'Tea', 'Spice', 'Bitter'],
    suitableSpirits: ['Gin', 'Vodka', 'Whisky', 'Rum', 'Baijiu'],
    cocktailDirections: ['Shiso Gin Sour', 'Oolong Whisky Highball', 'Coffee Rum Old Fashioned', 'Rosemary Vodka Martini'],
    shelfLife: 'Several days to several weeks depending on base, water and solids',
    difficulty: 'Easy',
    notes: 'Short extraction often tastes cleaner than long extraction. Tea, coffee and herbs can become bitter fast.',
  },
  {
    id: 'fat-wash',
    name: 'Fat Wash',
    description:
      'Fat wash adds aroma, roundness and texture by binding fat-soluble flavor into a spirit. It works especially well with nuts, dairy, sesame, oil and roasted ingredients.',
    bestForIngredients: ['黑芝麻', '开心果', '椰子', '味噌', '澳洲坚果', '山核桃'],
    bestForFlavors: ['Nutty', 'Savory', 'Sweet', 'Roasted'],
    suitableSpirits: ['Whisky', 'Rum', 'Brandy', 'Vodka', 'Mezcal'],
    cocktailDirections: ['Sesame Whisky Sour', 'Pistachio Rum Old Fashioned', 'Miso Vodka Martini', 'Macadamia Milk Punch'],
    shelfLife: '1-2 weeks refrigerated after fine straining',
    difficulty: 'Medium',
    notes: 'Freeze completely and filter patiently. Any remaining fat can dull aroma and shorten shelf life.',
  },
  {
    id: 'milk-punch',
    name: 'Milk Punch',
    description:
      'Milk punch clarifies, softens and lengthens a drink. It is useful for ingredients that need polish: tea, tropical fruit, spice, nuts, dairy and roasted flavors.',
    bestForIngredients: ['乌龙茶', '黑芝麻', '芒果', '斑斓', '可可', '酸奶'],
    bestForFlavors: ['Tea', 'Tropical', 'Nutty', 'Spice'],
    suitableSpirits: ['Rum', 'Whisky', 'Brandy', 'Gin', 'Pisco'],
    cocktailDirections: ['Oolong Milk Punch', 'Pandan Milk Punch', 'Cacao Rum Milk Punch', 'Mango Lassi Milk Punch'],
    shelfLife: '2-4 weeks refrigerated when clarified cleanly',
    difficulty: 'Advanced',
    notes: 'Balance before curdling. Milk punch hides rough edges, but it also reduces high notes if the base is too delicate.',
  },
  {
    id: 'clarification',
    name: 'Clarification',
    description:
      'Clarification removes pulp, haze or unstable solids while keeping flavor readable. It is useful when a drink should feel precise, architectural and repeatable.',
    bestForIngredients: ['番石榴', '百香果', '甜菜根', '椰子', '柚子', '石榴'],
    bestForFlavors: ['Fresh', 'Fruit', 'Savory', 'Citrus'],
    suitableSpirits: ['Vodka', 'Gin', 'Pisco', 'Rum', 'Sake'],
    cocktailDirections: ['Clarified Guava Margarita', 'Clarified Coconut Highball', 'Beetroot Martini', 'Pomegranate Collins'],
    shelfLife: '3-10 days depending on acid, sugar and sanitation',
    difficulty: 'Advanced',
    notes: 'Clarity is not the goal by itself. Use it when texture and stability improve the drink.',
  },
  {
    id: 'fermentation',
    name: 'Fermentation',
    description:
      'Fermentation creates acidity, funk, carbon dioxide, umami and living complexity. It is powerful for fruits, grains, roots, tea and savory ingredients.',
    bestForIngredients: ['米曲', '梅子', '姜', '蜂蜜', '甘蔗', '罗望子'],
    bestForFlavors: ['Fermented', 'Acid', 'Savory', 'Fruit'],
    suitableSpirits: ['Sake', 'Shochu', 'Rum', 'Baijiu', 'Vodka'],
    cocktailDirections: ['Koji Highball', 'Fermented Ume Spritz', 'Ginger Ferment Buck', 'Tamarind Ferment Sour'],
    shelfLife: 'Highly variable, from days to months under controlled conditions',
    difficulty: 'Advanced',
    notes: 'Track time, temperature, pH and sanitation. Fermentation is a process, not a garnish.',
  },
  {
    id: 'carbonation',
    name: 'Carbonation',
    description:
      'Carbonation gives aroma lift, speed and texture. It works best with clean acids, tea, florals and mineral or herbal profiles.',
    bestForIngredients: ['柚子', '香茅', '接骨木花', '乌龙茶', '指橙', '桂花'],
    bestForFlavors: ['Fresh', 'Citrus', 'Floral', 'Tea'],
    suitableSpirits: ['Gin', 'Vodka', 'Shochu', 'Sake', 'Tequila'],
    cocktailDirections: ['Yuzu Carbonated Highball', 'Elderflower Gin Fizz', 'Oolong Soda Collins', 'Osmanthus Sake Spritz'],
    shelfLife: 'Best served same day once carbonated',
    difficulty: 'Medium',
    notes: 'Chill everything before charging. Warm liquid absorbs less gas and tastes flatter.',
  },
  {
    id: 'syrup',
    name: 'Syrup',
    description:
      'Syrup is the simplest way to stabilize sweetness and carry flavor. It is best for spices, flowers, roasted notes and ingredients that need a gentle extraction.',
    bestForIngredients: ['蜂蜜', '枫糖', '桂花', '豆蔻', '糖蜜', '藏红花'],
    bestForFlavors: ['Sweet', 'Floral', 'Spice', 'Roasted'],
    suitableSpirits: ['Whisky', 'Rum', 'Brandy', 'Gin', 'Baijiu'],
    cocktailDirections: ['Maple Old Fashioned', 'Osmanthus Gin Fizz', 'Cardamom Daiquiri', 'Saffron Martini'],
    shelfLife: '1-4 weeks depending on sugar ratio and handling',
    difficulty: 'Easy',
    notes: 'A syrup should not only be sweet. It should carry a clear reason to exist in the drink.',
  },
  {
    id: 'oil-extraction',
    name: 'Oil Extraction',
    description:
      'Oil extraction captures aromatic oils from citrus peel, herbs, spices or nuts. It is useful when aroma should hit before the first sip.',
    bestForIngredients: ['柚子', '青柠', '山椒', '迷迭香', '黑芝麻', '香草'],
    bestForFlavors: ['Citrus', 'Herbal', 'Spice', 'Nutty'],
    suitableSpirits: ['Gin', 'Rum', 'Whisky', 'Mezcal', 'Vodka'],
    cocktailDirections: ['Yuzu Oil Martini', 'Sansho Oil Highball', 'Rosemary Gin Tonic', 'Sesame Oil Sour'],
    shelfLife: 'A few days to 2 weeks depending on method and oxidation',
    difficulty: 'Medium',
    notes: 'Aroma oils are intense. Use drops, sprays or measured batches rather than free pouring.',
  },
  {
    id: 'foam',
    name: 'Foam',
    description:
      'Foam separates aroma from body and places it at the nose. It is useful for floral, tea, spice and fruit notes that should sit above the drink.',
    bestForIngredients: ['玫瑰水', '咖啡', '柚子', '百香果', '薰衣草', '酸奶'],
    bestForFlavors: ['Floral', 'Tea', 'Fruit', 'Bitter'],
    suitableSpirits: ['Gin', 'Pisco', 'Vodka', 'Rum', 'Brandy'],
    cocktailDirections: ['Rose Foam Martini', 'Coffee Foam Negroni', 'Passionfruit Pisco Foam', 'Yogurt Gin Fizz'],
    shelfLife: 'Best made and served fresh',
    difficulty: 'Medium',
    notes: 'Foam should add aroma and texture, not hide an unfinished drink.',
  },
  {
    id: 'sous-vide',
    name: 'Sous Vide',
    description:
      'Sous vide gives controlled heat extraction for spices, tea, herbs and fruit. It is useful when a bar needs repeatable batches without harsh over-extraction.',
    bestForIngredients: ['乌龙茶', '豆蔻', '香草', '迷迭香', '无花果', '咖啡'],
    bestForFlavors: ['Tea', 'Spice', 'Herbal', 'Fruit'],
    suitableSpirits: ['Gin', 'Rum', 'Whisky', 'Brandy', 'Vodka'],
    cocktailDirections: ['Sous Vide Oolong Gin Sour', 'Vanilla Rum Sour', 'Fig Brandy Old Fashioned', 'Rosemary Vodka Collins'],
    shelfLife: 'Similar to infused base, usually several days to weeks',
    difficulty: 'Medium',
    notes: 'Controlled heat is still heat. Delicate florals and fresh herbs may need lower temperatures or shorter time.',
  },
  {
    id: 'salt-solution',
    name: 'Salt Solution',
    description:
      'Salt solution sharpens fruit, suppresses bitterness and extends savory depth. It is one of the most useful micro-adjustments for balanced cocktails.',
    bestForIngredients: ['海盐', '昆布', '鱼露', '橄榄', '罗望子', '青柠'],
    bestForFlavors: ['Savory', 'Citrus', 'Tropical', 'Bitter'],
    suitableSpirits: ['Tequila', 'Gin', 'Vodka', 'Rum', 'Sake'],
    cocktailDirections: ['Saline Paloma', 'Kombu Martini', 'Savory Daiquiri', 'Olive Vodka Highball'],
    shelfLife: 'Several weeks if clean and refrigerated',
    difficulty: 'Easy',
    notes: 'Use measured drops. Salt should make the drink clearer, not visibly salty.',
  },
  {
    id: 'acid-adjustment',
    name: 'Acid Adjustment',
    description:
      'Acid adjustment lets low-acid fruit, tea or floral ingredients behave like cocktail acids. It is useful for building sour structures without losing the original aroma.',
    bestForIngredients: ['芒果', '番石榴', '白桃', '乌龙茶', '椰子', '玫瑰水'],
    bestForFlavors: ['Acid', 'Fruit', 'Floral', 'Tea'],
    suitableSpirits: ['Gin', 'Rum', 'Pisco', 'Vodka', 'Tequila'],
    cocktailDirections: ['Acid Adjusted Mango Sour', 'Guava Margarita', 'Tea Acid Collins', 'Rose Vodka Sour'],
    shelfLife: '1-7 days depending on juice and preparation',
    difficulty: 'Advanced',
    notes: 'Taste by dilution, not only by drops. Acid balance changes once sugar, spirit and water are present.',
  },
  {
    id: 'rotovap-distillation',
    name: 'Rotovap / Distillation',
    description:
      'Rotovap or distillation captures volatile aroma while leaving color, bitterness and solids behind. It is best for conceptual drinks where aroma needs to be clean and transparent.',
    bestForIngredients: ['紫苏', '玫瑰水', '香茅', '咖啡', '尤加利', '烟熏木'],
    bestForFlavors: ['Floral', 'Herbal', 'Smoke', 'Coffee'],
    suitableSpirits: ['Gin', 'Vodka', 'Pisco', 'Baijiu', 'Brandy'],
    cocktailDirections: ['Distilled Shiso Martini', 'Clear Rose Pisco Sour', 'Lemongrass Vodka Highball', 'Eucalyptus Gin Tonic'],
    shelfLife: 'Weeks to months for clean distillates',
    difficulty: 'Advanced',
    notes: 'Use proper equipment and food-safe process control. Distillation is a production method, not a shortcut.',
  },
];

export function getTechnique(id: string) {
  return techniques.find((technique) => technique.id === id) ?? techniques[0];
}
