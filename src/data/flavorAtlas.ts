export type AtlasIngredient = {
  id: string;
  name: string;
  englishName: string;
  category: string;
  description: string;
  flavorProfile: string[];
  pairings: string[];
  spirits: string[];
  techniques: string[];
  cocktailIdeas: string[];
  preparations: string[];
  alternatives: string[];
  similarIngredients: string[];
  regions: string[];
  season: string;
};

export type AtlasPairing = {
  source: string;
  target: string;
  relation:
    | 'pairs-with'
    | 'works-with-spirit'
    | 'works-with-technique'
    | 'used-in-cocktail'
    | 'shares-flavor'
    | 'similar-to'
    | 'alternative-to'
    | 'belongs-to-region'
    | 'best-in-season';
};

const categories: Record<string, string[]> = {
  Citrus: [
    'Yuzu', 'Lime', 'Lemon', 'Grapefruit', 'Bergamot', 'Calamansi', 'Finger Lime', 'Kumquat', 'Mandarin', 'Orange',
    'Blood Orange', 'Pomelo', 'Sudachi', 'Kabosu', 'Meyer Lemon', 'Key Lime',
  ],
  Berry: [
    'Raspberry', 'Blackberry', 'Blueberry', 'Cranberry', 'Lingonberry', 'Cloudberry', 'Blackcurrant', 'Redcurrant',
    'Strawberry', 'Mulberry', 'Gooseberry', 'Huckleberry', 'Elderberry', 'Açai', 'Sea Buckthorn', 'Waxberry',
  ],
  'Stone Fruit': [
    'Ume', 'Plum', 'Apricot', 'Peach', 'White Peach', 'Nectarine', 'Cherry', 'Sour Cherry', 'Mango Plum', 'Greengage',
    'Loquat', 'Date Plum', 'Damson', 'Yellow Peach', 'Prune', 'Mirabelle',
  ],
  'Tropical Fruit': [
    'Mango', 'Passionfruit', 'Guava', 'Pineapple', 'Papaya', 'Coconut', 'Mangosteen', 'Rambutan', 'Jackfruit', 'Banana',
    'Lychee', 'Longan', 'Dragon Fruit', 'Tamarind', 'Soursop', 'Starfruit',
  ],
  Herbs: [
    'Shiso', 'Basil', 'Thai Basil', 'Mint', 'Dill', 'Tarragon', 'Sage', 'Rosemary', 'Thyme', 'Cilantro',
    'Lemongrass', 'Lemon Balm', 'Lovage', 'Marjoram', 'Oregano', 'Parsley',
  ],
  Flowers: [
    'Rose', 'Elderflower', 'Osmanthus', 'Sakura', 'Orange Blossom', 'Lavender', 'Hibiscus', 'Chamomile', 'Jasmine',
    'Chrysanthemum', 'Violet', 'Honeysuckle', 'Linden Flower', 'Pea Flower', 'Calendula', 'Magnolia',
  ],
  Spices: [
    'Cardamom', 'Saffron', 'Cinnamon', 'Clove', 'Nutmeg', 'Allspice', 'Black Pepper', 'Sansho', 'Sichuan Pepper',
    'Tasmanian Pepper', 'Cumin', 'Coriander Seed', 'Fennel Seed', 'Star Anise', 'Vanilla', 'Chile',
  ],
  Roots: [
    'Ginger', 'Turmeric', 'Galangal', 'Beetroot', 'Carrot', 'Horseradish', 'Wasabi', 'Licorice Root', 'Sarsaparilla',
    'Angelica Root', 'Gentian Root', 'Orris Root', 'Lotus Root', 'Burdock', 'Sweet Potato', 'Cassava',
  ],
  Leaves: [
    'Pandan', 'Curry Leaf', 'Makrut Lime Leaf', 'Fig Leaf', 'Grape Leaf', 'Eucalyptus', 'Lemon Myrtle', 'Bay Leaf',
    'Nettle', 'Hoja Santa', 'Banana Leaf', 'Perilla Leaf', 'Olive Leaf', 'Pine Needle', 'Spruce Tip', 'Birch Leaf',
  ],
  Tea: [
    'Oolong Tea', 'Hojicha', 'Genmaicha', 'Sencha', 'Matcha', 'Jasmine Tea', 'Black Tea', 'Earl Grey', 'Pu-erh',
    'Lapsang Souchong', 'Masala Chai', 'Rooibos', 'Yerba Mate', 'White Tea', 'Green Tea', 'Barley Tea',
  ],
  Coffee: [
    'Cold Brew Coffee', 'Espresso', 'Cascara', 'Coffee Cherry', 'Ethiopian Coffee', 'Brazil Coffee', 'Vietnamese Coffee',
    'Chicory Coffee', 'Coffee Blossom', 'Coffee Husk', 'Robusta Coffee', 'Arabica Coffee', 'Mocha Coffee', 'Dark Roast Coffee',
    'Light Roast Coffee', 'Coffee Liqueur Base',
  ],
  Chocolate: [
    'Cacao Nib', 'Cocoa Powder', 'Dark Chocolate', 'White Chocolate', 'Cacao Husk', 'Cacao Pulp', 'Milk Chocolate',
    'Ruby Chocolate', 'Cacao Butter', 'Chocolate Bitters', 'Roasted Cacao', 'Cacao Tea', 'Mole Chocolate', 'Spiced Chocolate',
    'Salted Chocolate', 'Smoked Chocolate',
  ],
  Nuts: [
    'Almond', 'Pistachio', 'Black Sesame', 'White Sesame', 'Macadamia', 'Peanut', 'Pecan', 'Walnut', 'Hazelnut',
    'Cashew', 'Pine Nut', 'Chestnut', 'Brazil Nut', 'Coconut Meat', 'Pumpkin Seed', 'Sunflower Seed',
  ],
  Vegetables: [
    'Tomato', 'Olive', 'Cucumber', 'Celery', 'Fennel Bulb', 'Pumpkin', 'Bitter Melon', 'Nopal', 'Corn', 'Sweet Corn',
    'Red Bell Pepper', 'Green Bell Pepper', 'Artichoke', 'Asparagus', 'Rhubarb', 'Daikon',
  ],
  Mushrooms: [
    'Shiitake', 'Porcini', 'Matsutake', 'Morel', 'Chanterelle', 'Black Trumpet', 'Enoki', 'Oyster Mushroom', 'King Oyster',
    'Lion’s Mane', 'Wood Ear', 'Truffle', 'Nameko', 'Maitake', 'Button Mushroom', 'Cordyceps',
  ],
  Seaweed: [
    'Kombu', 'Nori', 'Wakame', 'Dulse', 'Sea Lettuce', 'Hijiki', 'Irish Moss', 'Aonori', 'Kelp', 'Sea Grapes',
    'Bladderwrack', 'Arame', 'Mozuku', 'Agar', 'Samphire', 'Sea Beans',
  ],
  Fermented: [
    'Miso', 'Koji', 'Soy Sauce', 'Fish Sauce', 'Kimchi', 'Sauerkraut', 'Kombucha', 'Kefir', 'Rice Vinegar',
    'Black Vinegar', 'Umeboshi', 'Natto', 'Tempeh', 'Fermented Honey', 'Fermented Pineapple', 'Fermented Tea',
  ],
  Dairy: [
    'Yogurt', 'Cream', 'Milk', 'Goat Milk', 'Yak Milk', 'Buttermilk', 'Sour Cream', 'Condensed Milk', 'Mascarpone',
    'Ricotta', 'Kefir Milk', 'Milk Whey', 'Brown Butter', 'Cultured Butter', 'Cheese Rind', 'Milk Foam',
  ],
  Grains: [
    'Rye', 'Corn', 'Barley', 'Rice', 'Black Rice', 'Buckwheat', 'Millet', 'Oat', 'Wheat', 'Quinoa',
    'Sorghum', 'Job’s Tears', 'Spelt', 'Farro', 'Toasted Rice', 'Malted Barley',
  ],
  Sweeteners: [
    'Honey', 'Maple Syrup', 'Molasses', 'Palm Sugar', 'Coconut Sugar', 'Date Syrup', 'Agave Syrup', 'Cane Syrup',
    'Brown Sugar', 'Rock Sugar', 'Jaggery', 'Muscovado', 'Sorghum Syrup', 'Birch Syrup', 'Fig Syrup', 'Grape Molasses',
  ],
};

const categoryFlavorProfiles: Record<string, string[]> = {
  Citrus: ['Citrus', 'Acid', 'Fresh', 'Floral', 'Bitter'],
  Berry: ['Fruit', 'Acid', 'Fresh', 'Floral', 'Sweet'],
  'Stone Fruit': ['Fruit', 'Sweet', 'Floral', 'Acid', 'Nutty'],
  'Tropical Fruit': ['Tropical', 'Sweet', 'Acid', 'Fresh', 'Floral'],
  Herbs: ['Herbal', 'Fresh', 'Floral', 'Bitter', 'Savory'],
  Flowers: ['Floral', 'Fresh', 'Sweet', 'Tea', 'Herbal'],
  Spices: ['Spice', 'Bitter', 'Sweet', 'Smoke', 'Savory'],
  Roots: ['Spice', 'Savory', 'Earthy', 'Sweet', 'Bitter'],
  Leaves: ['Herbal', 'Fresh', 'Citrus', 'Savory', 'Smoke'],
  Tea: ['Tea', 'Bitter', 'Floral', 'Roasted', 'Fresh'],
  Coffee: ['Coffee', 'Bitter', 'Roasted', 'Acid', 'Sweet'],
  Chocolate: ['Chocolate', 'Bitter', 'Roasted', 'Nutty', 'Sweet'],
  Nuts: ['Nutty', 'Roasted', 'Sweet', 'Savory', 'Bitter'],
  Vegetables: ['Savory', 'Fresh', 'Herbal', 'Earthy', 'Acid'],
  Mushrooms: ['Umami', 'Earthy', 'Savory', 'Smoke', 'Roasted'],
  Seaweed: ['Umami', 'Saline', 'Savory', 'Fresh', 'Mineral'],
  Fermented: ['Fermented', 'Umami', 'Acid', 'Savory', 'Funky'],
  Dairy: ['Creamy', 'Sweet', 'Lactic', 'Savory', 'Soft'],
  Grains: ['Grain', 'Roasted', 'Sweet', 'Nutty', 'Savory'],
  Sweeteners: ['Sweet', 'Floral', 'Roasted', 'Spice', 'Fruit'],
};

const categorySpirits: Record<string, string[]> = {
  Citrus: ['Gin', 'Vodka', 'Tequila', 'Shochu', 'Sake'],
  Berry: ['Gin', 'Vodka', 'Brandy', 'Whisky', 'Sparkling Wine'],
  'Stone Fruit': ['Brandy', 'Gin', 'Sake', 'Whisky', 'Vodka'],
  'Tropical Fruit': ['Rum', 'Tequila', 'Pisco', 'Cachaça', 'Arrack'],
  Herbs: ['Gin', 'Tequila', 'Vodka', 'Aquavit', 'Shochu'],
  Flowers: ['Gin', 'Vodka', 'Brandy', 'Sake', 'Pisco'],
  Spices: ['Rum', 'Whisky', 'Mezcal', 'Gin', 'Baijiu'],
  Roots: ['Whisky', 'Vodka', 'Gin', 'Mezcal', 'Baijiu'],
  Leaves: ['Gin', 'Shochu', 'Tequila', 'Vodka', 'Sake'],
  Tea: ['Gin', 'Whisky', 'Rum', 'Sake', 'Baijiu'],
  Coffee: ['Rum', 'Whisky', 'Mezcal', 'Vodka', 'Brandy'],
  Chocolate: ['Rum', 'Whisky', 'Mezcal', 'Pisco', 'Brandy'],
  Nuts: ['Rum', 'Whisky', 'Brandy', 'Amaro', 'Vodka'],
  Vegetables: ['Gin', 'Vodka', 'Mezcal', 'Vermouth', 'Tequila'],
  Mushrooms: ['Whisky', 'Vodka', 'Sake', 'Gin', 'Mezcal'],
  Seaweed: ['Vodka', 'Gin', 'Sake', 'Shochu', 'Tequila'],
  Fermented: ['Sake', 'Shochu', 'Baijiu', 'Vodka', 'Rum'],
  Dairy: ['Rum', 'Whisky', 'Brandy', 'Gin', 'Pisco'],
  Grains: ['Whisky', 'Vodka', 'Rum', 'Baijiu', 'Shochu'],
  Sweeteners: ['Whisky', 'Rum', 'Brandy', 'Gin', 'Tequila'],
};

const categoryTechniques: Record<string, string[]> = {
  Citrus: ['Cordial', 'Shrub', 'Oil Extraction', 'Acid Adjustment', 'Carbonation'],
  Berry: ['Shrub', 'Syrup', 'Clarification', 'Fermentation', 'Foam'],
  'Stone Fruit': ['Shrub', 'Syrup', 'Fermentation', 'Clarification', 'Infusion'],
  'Tropical Fruit': ['Syrup', 'Shrub', 'Clarification', 'Milk Punch', 'Fermentation'],
  Herbs: ['Infusion', 'Cordial', 'Oil Extraction', 'Sous Vide', 'Carbonation'],
  Flowers: ['Cordial', 'Syrup', 'Foam', 'Infusion', 'Rotovap / Distillation'],
  Spices: ['Infusion', 'Syrup', 'Oil Extraction', 'Sous Vide', 'Fat Wash'],
  Roots: ['Syrup', 'Infusion', 'Fermentation', 'Sous Vide', 'Shrub'],
  Leaves: ['Infusion', 'Cordial', 'Oil Extraction', 'Carbonation', 'Rotovap / Distillation'],
  Tea: ['Infusion', 'Milk Punch', 'Carbonation', 'Sous Vide', 'Clarification'],
  Coffee: ['Infusion', 'Syrup', 'Foam', 'Fat Wash', 'Clarification'],
  Chocolate: ['Infusion', 'Fat Wash', 'Milk Punch', 'Syrup', 'Sous Vide'],
  Nuts: ['Fat Wash', 'Milk Punch', 'Syrup', 'Oil Extraction', 'Infusion'],
  Vegetables: ['Clarification', 'Shrub', 'Salt Solution', 'Fermentation', 'Infusion'],
  Mushrooms: ['Infusion', 'Salt Solution', 'Clarification', 'Fermentation', 'Sous Vide'],
  Seaweed: ['Infusion', 'Salt Solution', 'Clarification', 'Fermentation', 'Cordial'],
  Fermented: ['Fermentation', 'Salt Solution', 'Clarification', 'Infusion', 'Milk Punch'],
  Dairy: ['Milk Punch', 'Foam', 'Clarification', 'Fat Wash', 'Fermentation'],
  Grains: ['Infusion', 'Milk Punch', 'Fermentation', 'Syrup', 'Sous Vide'],
  Sweeteners: ['Syrup', 'Fermentation', 'Milk Punch', 'Fat Wash', 'Infusion'],
};

const cocktailFamilies = [
  'Highball', 'Sour', 'Fizz', 'Collins', 'Spritz', 'Martini', 'Negroni', 'Old Fashioned', 'Daiquiri', 'Margarita',
  'Paloma', 'Milk Punch', 'Clarified', 'Frozen', 'Punch', 'Swizzle', 'Tiki', 'Tea Cocktail', 'Coffee Cocktail', 'Low ABV', 'No ABV',
];

const regions = ['East Asia', 'Southeast Asia', 'South Asia', 'Middle East', 'Mediterranean', 'Nordic', 'Latin America', 'Caribbean', 'Africa', 'Oceania', 'Eastern Europe', 'North America'];
const seasons = ['Spring', 'Summer', 'Autumn', 'Winter', 'All Year'];
const preparations = ['Cordial', 'Shrub', 'Syrup', 'Infusion', 'Salt', 'Oil', 'Foam', 'Ferment', 'Milk Punch', 'Clarification'];

function slug(value: string) {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function rotatePick<T>(items: T[], start: number, count: number) {
  return Array.from({ length: count }, (_, index) => items[(start + index) % items.length]);
}

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}

const allIngredientNames = Object.values(categories).flat();

export const atlasIngredients: AtlasIngredient[] = Object.entries(categories).flatMap(([category, names], categoryIndex) =>
  names.map((name, ingredientIndex) => {
    const absoluteIndex = categoryIndex * 31 + ingredientIndex * 7;
    const flavorProfile = categoryFlavorProfiles[category];
    const spirits = categorySpirits[category];
    const techniques = categoryTechniques[category];
    const pairings = rotatePick(allIngredientNames, absoluteIndex + 3, 10).filter((item) => item !== name).slice(0, 8);
    const alternatives = rotatePick(names, ingredientIndex + 1, 4).filter((item) => item !== name).slice(0, 3);
    const similarIngredients = rotatePick(names, ingredientIndex + 4, 5).filter((item) => item !== name).slice(0, 4);
    const cocktailIdeas = rotatePick(cocktailFamilies, absoluteIndex, 7).map((family) => `${name} ${family}`);

    return {
      id: slug(name),
      name,
      englishName: name,
      category,
      description: `${name} is a ${category.toLowerCase()} ingredient used as a flavor anchor for ${flavorProfile.slice(0, 3).join(', ')} structures. It can be explored through ${techniques.slice(0, 3).join(', ')} and paired with ${spirits.slice(0, 3).join(', ')}.`,
      flavorProfile,
      pairings,
      spirits,
      techniques: techniques.slice(0, 4),
      cocktailIdeas,
      preparations: rotatePick(preparations, absoluteIndex, 5),
      alternatives,
      similarIngredients,
      regions: rotatePick(regions, absoluteIndex, 3),
      season: seasons[absoluteIndex % seasons.length],
    };
  }),
);

export const atlasCocktailIdeas = unique(atlasIngredients.flatMap((ingredient) => ingredient.cocktailIdeas));

export const atlasPairings: AtlasPairing[] = atlasIngredients.flatMap((ingredient) => {
  const source = ingredient.id;
  return [
    ...ingredient.pairings.map((target) => ({ source, target: slug(target), relation: 'pairs-with' as const })),
    ...ingredient.similarIngredients.map((target) => ({ source, target: slug(target), relation: 'similar-to' as const })),
    ...ingredient.alternatives.map((target) => ({ source, target: slug(target), relation: 'alternative-to' as const })),
    ...ingredient.spirits.map((target) => ({ source, target: slug(target), relation: 'works-with-spirit' as const })),
    ...ingredient.techniques.map((target) => ({ source, target: slug(target), relation: 'works-with-technique' as const })),
    ...ingredient.cocktailIdeas.slice(0, 5).map((target) => ({ source, target: slug(target), relation: 'used-in-cocktail' as const })),
    ...ingredient.flavorProfile.map((target) => ({ source, target: slug(target), relation: 'shares-flavor' as const })),
    ...ingredient.regions.map((target) => ({ source, target: slug(target), relation: 'belongs-to-region' as const })),
    { source, target: slug(ingredient.season), relation: 'best-in-season' as const },
  ];
});

export const atlasStats = {
  ingredients: atlasIngredients.length,
  cocktailIdeas: atlasCocktailIdeas.length,
  pairings: atlasPairings.length,
  spirits: 16,
  techniques: 15,
  preparations: preparations.length,
};

export function getAtlasIngredientByName(name: string) {
  return atlasIngredients.find((ingredient) => ingredient.name === name || ingredient.englishName === name);
}

export function getAtlasIngredientById(id: string) {
  return atlasIngredients.find((ingredient) => ingredient.id === id);
}

export function getAtlasIngredientNamesByCategory(category: string) {
  return categories[category] ?? [];
}
