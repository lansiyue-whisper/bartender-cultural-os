export type GenomeNode = {
  id: string;
  name: string;
  structure: string;
  base: string;
  flavor: string;
  x: number;
  y: number;
};

export const genomeNodes: GenomeNode[] = [
  { id: 'negroni', name: 'Negroni', structure: 'Gin + Campari + Sweet Vermouth', base: 'Gin', flavor: 'bitter / herbal / red', x: 50, y: 48 },
  { id: 'white-negroni', name: 'White Negroni', structure: 'Gin + Suze + Blanc Vermouth', base: 'Gin', flavor: 'bitter / pale / floral', x: 24, y: 24 },
  { id: 'boulevardier', name: 'Boulevardier', structure: 'Whiskey + Campari + Sweet Vermouth', base: 'Bourbon or Rye', flavor: 'warm / bitter / woody', x: 78, y: 25 },
  { id: 'old-pal', name: 'Old Pal', structure: 'Rye + Campari + Dry Vermouth', base: 'Rye Whiskey', flavor: 'dry / bitter / angular', x: 25, y: 76 },
  { id: 'kingston-negroni', name: 'Kingston Negroni', structure: 'Jamaican Rum + Campari + Sweet Vermouth', base: 'Jamaican Rum', flavor: 'funky / bitter / tropical', x: 78, y: 74 },
];

export const genomeEdges = [
  ['negroni', 'white-negroni'],
  ['negroni', 'boulevardier'],
  ['negroni', 'old-pal'],
  ['negroni', 'kingston-negroni'],
];
