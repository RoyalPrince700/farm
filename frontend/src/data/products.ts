export type ProductGroup = 'oils' | 'jars' | 'dry'

export interface Product {
  id: string
  name: string
  group: ProductGroup
  groupLabel: string
  pack: string
  /** Sample retail price in naira. Replace with the farm's own price. */
  price: number
  summary: string
  detail: string
  image: string
  imageAlt: string
  swatch: string
}

export const productGroups: { id: ProductGroup | 'all'; label: string }[] = [
  { id: 'all', label: 'All ten' },
  { id: 'oils', label: 'Pressed oils' },
  { id: 'jars', label: 'Jars' },
  { id: 'dry', label: 'Dry goods' },
]

export const products: Product[] = [
  {
    id: 'groundnut-oil',
    name: 'Cold-pressed groundnut oil',
    group: 'oils',
    groupLabel: 'Pressed oils',
    pack: '1 litre',
    price: 4800,
    summary: 'Unrefined oil pressed from the farm’s groundnut crop.',
    detail:
      'Groundnuts are lifted, dried and pressed on the farm. The oil is left unrefined and bottled for cooking. The same crop is also sold roasted.',
    image: '/images/groundnut-oil.jpg',
    imageAlt: 'Pale groundnut oil in a clear bottle, with groundnuts on a wooden table',
    swatch: '#c4a15a',
  },
  {
    id: 'palm-oil',
    name: 'Red palm oil',
    group: 'oils',
    groupLabel: 'Pressed oils',
    pack: '1 litre',
    price: 3900,
    summary: 'Unrefined oil from the farm’s oil palms, for the pot.',
    detail:
      'Fruit from the farm’s palms is processed into red cooking oil. It is sold by the bottle for a kitchen and in larger packs for shops.',
    image: '/images/palm-oil.jpg',
    imageAlt: 'A bowl of red palm oil beside a bunch of oil palm fruit',
    swatch: '#c45c26',
  },
  {
    id: 'palm-kernel-oil',
    name: 'Palm kernel oil',
    group: 'oils',
    groupLabel: 'Pressed oils',
    pack: '500 ml',
    price: 3200,
    summary: 'Pressed from the kernel, for cooking and for soap makers.',
    detail:
      'After the fruit is pressed, the kernel is pressed separately. Kitchens use it for cooking. Makers buy it for soap.',
    image: '/images/palm-kernel-oil.jpg',
    imageAlt: 'Pale palm kernel oil in a glass jar beside cracked kernels',
    swatch: '#e4d2a8',
  },
  {
    id: 'coconut-oil',
    name: 'Virgin coconut oil',
    group: 'oils',
    groupLabel: 'Pressed oils',
    pack: '500 ml',
    price: 3600,
    summary: 'Pressed from mature coconuts and left unrefined.',
    detail:
      'Mature coconuts from the farm are pressed for a clear oil. It is bottled in small runs and sold for cooking.',
    image: '/images/coconut-oil.jpg',
    imageAlt: 'Clear coconut oil in a glass jar beside a split coconut',
    swatch: '#f3eee4',
  },
  {
    id: 'sesame-oil',
    name: 'Sesame oil',
    group: 'oils',
    groupLabel: 'Pressed oils',
    pack: '500 ml',
    price: 4200,
    summary: 'Pressed from beniseed grown on the farm.',
    detail:
      'Sesame is a small plot crop here. The seed is pressed into a cooking oil and bottled when the lot is ready.',
    image: '/images/sesame-oil.jpg',
    imageAlt: 'Amber sesame oil in a glass bottle beside a pile of sesame seeds',
    swatch: '#8a6a32',
  },
  {
    id: 'shea-butter',
    name: 'Shea butter',
    group: 'jars',
    groupLabel: 'Jars',
    pack: '250 g',
    price: 2800,
    summary: 'Shea from nuts gathered in season and worked on the farm.',
    detail:
      'Nuts are gathered in season, then worked into butter and jarred. Sold for the kitchen and for skin.',
    image: '/images/shea-butter.jpg',
    imageAlt: 'Ivory shea butter in a wooden bowl, with shea nuts beside it',
    swatch: '#e7d7b1',
  },
  {
    id: 'honey',
    name: 'Pure honey',
    group: 'jars',
    groupLabel: 'Jars',
    pack: '500 g',
    price: 3100,
    summary: 'From hives kept on the farm, strained and jarred.',
    detail:
      'Hives sit on the farm among the crops. Honey is strained, jarred and sold as it comes — nothing added.',
    image: '/images/honey.jpg',
    imageAlt: 'Golden honey in an open jar with a wooden dipper and honeycomb',
    swatch: '#e0a106',
  },
  {
    id: 'roasted-groundnuts',
    name: 'Roasted groundnuts',
    group: 'dry',
    groupLabel: 'Dry goods',
    pack: '500 g',
    price: 1800,
    summary: 'The same groundnut crop, roasted and packed.',
    detail:
      'A share of the groundnut harvest is roasted instead of pressed. Packed in 500 g bags for the pantry.',
    image: '/images/roasted-groundnuts.jpg',
    imageAlt: 'Roasted groundnuts piled in a cloth-lined basket',
    swatch: '#a86b3c',
  },
  {
    id: 'cassava-flour',
    name: 'Cassava flour',
    group: 'dry',
    groupLabel: 'Dry goods',
    pack: '2 kg',
    price: 2200,
    summary: 'Dried and milled from cassava grown on the farm.',
    detail:
      'Cassava is harvested, dried and milled on the farm, then packed in 2 kg bags. It is a staple of the shop, not a side line of everything else the land could grow.',
    image: '/images/cassava-flour.jpg',
    imageAlt: 'Cassava flour in a wooden bowl with a scoop and a piece of cassava root',
    swatch: '#efe6d6',
  },
  {
    id: 'dried-chili',
    name: 'Dried chili',
    group: 'dry',
    groupLabel: 'Dry goods',
    pack: '200 g',
    price: 1500,
    summary: 'Sun-dried chili, packed for the kitchen.',
    detail:
      'Chili is dried in the sun and packed in small bags. It sits with the oils so a cook can buy the pot and the heat together.',
    image: '/images/dried-chili.jpg',
    imageAlt: 'Dried red chili peppers in a shallow clay dish',
    swatch: '#9c2f2f',
  },
]
