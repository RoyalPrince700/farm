export interface BlogPost {
  slug: string
  title: string
  dateLabel: string
  author: string
  excerpt: string
  image: string
  imageAlt: string
  paragraphs: string[]
}

export const posts: BlogPost[] = [
  {
    slug: 'regenerative-practice-on-a-grain-farm',
    title: 'What changes when a grain farm adopts regenerative practice',
    dateLabel: '12 September 2026',
    author: 'Meridian Agriculture',
    excerpt:
      'Cover crops and less tillage are only useful if the farm can still plant, harvest and sell. A practical look at the first season.',
    image: '/images/soil.jpg',
    imageAlt: 'Soil prepared for planting',
    paragraphs: [
      'Meridian Agriculture is a demonstration company. This note explains regenerative practice the way a global grain business would explain it to a grower: what changes in the field, and what has to stay the same in the market.',
      'A cover crop is planted so the soil is not bare between cash crops. Roots hold the surface, take up leftover nutrients and add organic matter. Reduced tillage leaves more of that structure in place. Neither practice is a slogan. Both need a drill that can plant into residue, and a plan for the weed flush that residue can hide.',
      'The first season is usually about timing. The cover has to be terminated before it steals moisture from the cash crop, and the planter has to place seed at the right depth through the residue. Farms that skip that step often blame the practice for a stand that was really a machine setting.',
      'Buyers who want regeneratively grown grain ask for a field record: what was planted, what tillage was used, and which acres are in the programme. The grain still has to meet grade and moisture. Practice does not replace a specification. It sits beside it.',
    ],
  },
  {
    slug: 'from-field-to-mill',
    title: 'How a harvest moves from the field to a mill',
    dateLabel: '28 August 2026',
    author: 'Meridian Agriculture',
    excerpt:
      'Origination is the unglamorous middle of a farm business: grade, moisture, storage and a customer who will take the grain.',
    image: '/images/silo.jpg',
    imageAlt: 'Farmland at the edge of harvest',
    paragraphs: [
      'A global agriculture company earns its place between the grower and the food plant. This sample post walks through that path so the template has a clear origination story.',
      'At intake, grain is checked for moisture, test weight and damage. A load that is too wet will heat in storage. A load that misses grade is still grain, but it is a different product, and it should be binned that way. Mixing grades to “make a pile” is how a later customer rejects a shipment.',
      'Storage is a crop-protection decision as much as a building. Aeration, temperature and how long the grain will sit decide whether the farm sells now or waits. The origination desk then matches a bin to a mill, a crusher or an export parcel, with a loading window the customer can actually receive.',
      'On a live site, replace this with the farm’s own crops, bins and buyers. The structure — intake, storage, then a named offtake — is what customers expect from a serious farm business.',
    ],
  },
  {
    slug: 'planning-seed-and-nutrition',
    title: 'Plan seed and nutrition before the seed is in the ground',
    dateLabel: '4 August 2026',
    author: 'Meridian Agriculture',
    excerpt:
      'Seed, fertiliser and crop protection work when they are one plan. Buying them as three separate errands is how a season gets expensive.',
    image: '/images/crops.jpg',
    imageAlt: 'Vegetables harvested from a crop field',
    paragraphs: [
      'Crop-input companies and farm retailers make their money by being present before planting, not only when a jug or a bag is needed. This demonstration post is that conversation, written for a template.',
      'Start with the crop and the soil test. A maize field and a wheat field do not want the same nitrogen timing. Phosphate and potash move slowly, so a shortage shows up in the plant after the cheap moment to fix it has passed. Seed choice follows the same file: maturity, disease package and what the buyer will accept.',
      'Crop protection belongs on that page too. A product without a weed, insect or disease target is a cost. Scouting tells the farm whether the target is actually in the field. Precision tools then put the rate on the zone that needs it, instead of one rate for the whole farm.',
      'The useful record is short. Crop, soil test, product, rate, date, and who checked the field. That is what an agronomist, a lender and a sustainability buyer can all read.',
    ],
  },
  {
    slug: 'livestock-and-crops-together',
    title: 'Why livestock and crops belong on the same farm plan',
    dateLabel: '16 July 2026',
    author: 'Meridian Agriculture',
    excerpt:
      'Feed is a crop with a customer already on the farm. Manure is a nutrient with a field already next door. The plan should say so.',
    image: '/images/cattle.jpg',
    imageAlt: 'Cattle on pasture beside crop land',
    paragraphs: [
      'Integrated farm businesses keep animals and crops in one account because each one supplies the other. This sample article is for a template that needs to explain poultry, dairy or cattle without sounding like a single-species yard.',
      'Grain and forage grown on the farm can be the ration, if the mill or the mixer is specified for that herd or flock. A broiler, a dairy cow and a beef animal do not eat the same diet. Writing “we mill our own feed” is not enough. The page should say which animals, and that the ration changes with age and production.',
      'Manure and slurry go back to crop land as a nutrient source when they are tested and spread at a rate the crop can use. Over-application is a water problem, not a soil victory. A simple nutrient plan keeps the livestock enterprise from becoming the crop enterprise’s liability.',
      'On this demonstration site the livestock line sits beside grain, inputs and origination on purpose. A farm replacing the demo copy can keep all four, or delete the ones it does not run.',
    ],
  },
]
