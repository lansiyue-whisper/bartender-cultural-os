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
      summary: `${ingredient.name} works as ${trait.role}, especially in ${readableList(bestCocktailStructures)} structures.`,
      imageAlt: `${ingredient.name} specimen plate for bartender flavor study`,
      imageTone: trait.tone,
    },
    overview: {
      what: `${ingredient.name} is treated here as a working bar ingredient rather than a pantry definition: a source of ${ingredient.flavorProfile.slice(0, 4).join(', ').toLowerCase()} that can be measured, diluted and repeated.`,
      importance: `It matters because it gives a bartender a clear direction. In a drink, ${ingredient.name} can mark the first aroma, shape the mid-palate, or leave a recognizable finish without needing a complicated recipe.`,
      bartenderUse: `Bartenders use it when they need ${trait.role}. After dilution, its best qualities become easier to read if the drink is supported by ${readableList(ingredient.spirits)} and handled through ${readableList(ingredient.techniques)}.`,
    },
    flavorProfile: {
      wheel,
      taste: [...trait.taste, ...ingredient.flavorProfile.slice(0, 2)].slice(0, 6),
      aroma: trait.aroma,
      texture: trait.texture,
      intensity: wheel.intensity >= 4 ? 'High: dose carefully and test after dilution.' : 'Medium: clear enough to lead, flexible enough to support.',
      acidity: wheel.acidity >= 4 ? 'Bright acidity or acid-friendly structure.' : 'Low to medium acidity; often needs a defined acid frame.',
      sweetness: wheel.sweetness >= 4 ? 'Naturally reads sweet or ripe.' : 'Sweetness should be added with restraint.',
      bitterness: wheel.bitterness >= 4 ? 'Noticeable bitterness can help lengthen the finish.' : 'Bitterness is secondary and should not dominate.',
      persistence: wheel.persistence >= 4 ? 'Long finish; useful in minimalist builds.' : 'Moderate finish; benefits from a supportive structure.',
    },
    applications: {
      howBartendersUseIt: [
        `Use ${ingredient.name} to set a ${ingredient.flavorProfile[0].toLowerCase()} direction before choosing the base spirit.`,
        `Taste it diluted, chilled and sweetened; the useful cocktail version is often different from the raw ingredient.`,
        `Build around ${readableList(ingredient.techniques)} when consistency matters across service.`,
      ],
      classicUses: trait.classicUses,
      modernUses: trait.modernUses,
      typicalCocktailStructures: bestCocktailStructures,
    },
    pairings: {
      bestIngredients: ingredient.pairings.slice(0, 8),
      bestSpirits: ingredient.spirits.slice(0, 6),
      bestTechniques: ingredient.techniques.slice(0, 6),
      bestFlavorFamilies: ingredient.flavorProfile.slice(0, 6),
      bestCocktailStructures,
      avoidPairings: trait.avoid,
    },
    preparation: {
      fresh: `Use fresh ${ingredient.name} when the top note is the reason for the drink; cut, press or express close to service.`,
      cordial: `Turn ${ingredient.name} into a cordial when aroma needs to survive batching, speed and controlled acidity.`,
      shrub: `Use a shrub when ${ingredient.name} needs sharper tension and a longer, food-like finish.`,
      infusion: `Infuse gently and taste often; stop before the extraction becomes muddy or bitter.`,
      syrup: `Syrup works when the ingredient needs a soft carrier, especially for ${ingredient.flavorProfile.slice(0, 2).join(' and ').toLowerCase()} notes.`,
      fermentation: `Fermentation can deepen ${ingredient.name}, but it should be tracked by time, temperature and acidity rather than intuition alone.`,
      clarification: `Clarify when texture, color or pulp distract from the core aroma.`,
      milkPunch: `Milk punch is useful when ${ingredient.name} needs softness, length and a polished finish.`,
      foam: `Foam works when the aroma should arrive before the first sip.`,
      salt: `A small salt solution can make ${ingredient.name} feel brighter and more three-dimensional.`,
      powder: `Powder is best for rims, dusting and controlled aromatic garnish rather than the main body.`,
      oil: `Oil extraction is useful when peel, leaf, seed or roasted aroma needs to sit on the surface of the drink.`,
    },
    similar: {
      similarIngredients: ingredient.similarIngredients.slice(0, 6),
      alternatives: ingredient.alternatives.slice(0, 5),
      seasonalAlternatives: [...ingredient.alternatives, ...ingredient.similarIngredients].slice(1, 6),
    },
    regions: {
      whereUsed: ingredient.regions,
      traditionalCuisine: trait.cuisine,
      cocktailCulture: trait.culture,
    },
    references: {
      books: referenceBooks.slice(0, 3),
      research: [
        'Dilution tasting notes across 1:1, 1:2 and finished cocktail strength',
        'Aroma stability checks in syrup, cordial and infusion formats',
      ],
      industryNotes: [
        `Record supplier, season and processing method for ${ingredient.name}.`,
        `Test with ${readableList(ingredient.spirits)} before locking a menu build.`,
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
