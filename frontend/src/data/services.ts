export interface Service {
  id: string
  title: string
  short: string
  description: string
  points: string[]
  image: string
  imageAlt?: string
}

export const services: Service[] = [
  {
    id: 'grain-oilseeds',
    title: 'Grain & Oilseed Production',
    short:
      'Wheat, maize, barley, sorghum and oilseeds grown on managed farmland and with contracted growers.',
    description:
      'Meridian Agriculture runs a sample grain and oilseed platform. The story on this page is commercial production of wheat, maize, barley, sorghum and oilseeds, with harvest planned against storage, milling and export demand.',
    points: [
      'Row crops and oilseeds across sample growing regions',
      'Season plans tied to storage and offtake',
      'Identity-preserved and commodity lots',
      'Field records from planting through harvest',
    ],
    image: '/images/wheat.jpg',
    imageAlt: 'Harvested wheat grain',
  },
  {
    id: 'livestock',
    title: 'Livestock & Protein',
    short:
      'Cattle, dairy and poultry kept as part of the same farm system as feed and crop land.',
    description:
      'The livestock line covers sample cattle, dairy and poultry operations. Feed, animal care and processing sit with the crop business so protein and grain are planned together, not as separate companies.',
    points: [
      'Cattle, dairy and poultry on the sample platform',
      'Feed linked to the grain and milling business',
      'Animal health and housing standards',
      'Protein sold into food and ingredient markets',
    ],
    image: '/images/cattle.jpg',
    imageAlt: 'Cattle grazing on open pasture',
  },
  {
    id: 'crop-inputs',
    title: 'Seed, Nutrition & Crop Protection',
    short:
      'Seed, fertiliser and crop protection, with advice matched to the field and the season.',
    description:
      'Growers on this demonstration site buy a full input set: seed, plant nutrition and crop protection, plus a written recommendation for the crop, the soil and the weather window. The aim is yield the farm can actually harvest and sell.',
    points: [
      'Seed for the crop and the region',
      'Nitrogen, phosphate, potash and specialty nutrition',
      'Crop protection used to a label and a plan',
      'Recommendations written before the season starts',
    ],
    image: '/images/crops.jpg',
    imageAlt: 'Fresh produce from a market garden',
  },
  {
    id: 'origination',
    title: 'Origination, Storage & Processing',
    short:
      'Grain bought from farms, held in storage, then moved to mills, crushers and food customers.',
    description:
      'Origination connects a harvest to a buyer. Sample elevators and warehouses take grain in, hold quality, and release it to milling, oilseed crushing and food manufacturers. The same desk covers domestic supply and export parcels.',
    points: [
      'Farm-gate purchase and contracted offtake',
      'Storage that protects grade and moisture',
      'Milling, crushing and food-ingredient supply',
      'Logistics from the bin to the customer',
    ],
    image: '/images/silo.jpg',
    imageAlt: 'Open farmland ready for harvest',
  },
  {
    id: 'agronomy',
    title: 'Agronomy & Precision Farming',
    short:
      'Field advice, soil tests and maps so inputs go where the crop can use them.',
    description:
      'Agronomists on the sample network work from soil tests, yield maps and the grower’s margin. Variable-rate nutrition, scouting and in-season checks are part of the same file as the seed and fertiliser order.',
    points: [
      'Soil tests and field history',
      'Variable-rate nutrition and seeding',
      'In-season scouting and recommendations',
      'Records a buyer or auditor can read',
    ],
    image: '/images/harvest.jpg',
    imageAlt: 'Young maize growing in rows',
  },
  {
    id: 'regenerative',
    title: 'Regenerative Agriculture',
    short:
      'Cover crops, reduced tillage and water care, with a payment path for measured practice.',
    description:
      'The regenerative programme is a sample offer for growers who want healthier soil without giving up a commercial crop. Cover crops, reduced tillage and better water use are recorded, then shared with food customers who pay for that practice.',
    points: [
      'Cover crops and reduced tillage',
      'Soil health and water stewardship',
      'Practice recorded at field level',
      'A route to customers who buy regeneratively grown crops',
    ],
    image: '/images/soil.jpg',
    imageAlt: 'Soil prepared for planting',
  },
]

export const companyInfo = {
  name: 'Meridian Agriculture',
  fullName: 'Meridian Agriculture',
  tagline: 'Farms, crop inputs and food supply',
  phones: [{ display: '+1 (555) 014-2080', href: 'tel:+15550142080' }],
  email: 'hello@meridianagriculture.example',
  emailHref: 'mailto:hello@meridianagriculture.example',
  emails: [
    {
      display: 'hello@meridianagriculture.example',
      href: 'mailto:hello@meridianagriculture.example',
    },
  ],
  website: 'meridianagriculture.example',
  address: 'Sample headquarters — demonstration website',
  regions: [
    { name: 'North America', city: 'Des Moines' },
    { name: 'Latin America', city: 'São Paulo' },
    { name: 'Europe', city: 'Rotterdam' },
    { name: 'Africa', city: 'Nairobi' },
    { name: 'Asia-Pacific', city: 'Singapore' },
  ],
}
