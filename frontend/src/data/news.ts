export interface NewsItem {
  id: string
  title: string
  dateLabel: string
  source: string
  summary: string
  paragraphs: string[]
  image: string
}

export const news: NewsItem[] = [
  {
    id: 'regenerative-programme',
    title: 'Sample regenerative grain programme opens for the new season',
    dateLabel: '18 September 2026',
    source: 'Meridian Agriculture',
    summary:
      'A demonstration offer pays growers to record cover crops and reduced tillage on wheat and oilseed acres, then sells that grain to food customers.',
    paragraphs: [
      'Meridian Agriculture is a fictional company. This note is sample news for the demonstration website, written in the style of a global farm business announcing a grower programme.',
      'The sample programme covers wheat and oilseed acres in the five illustrated regions. Growers who plant a cover crop or cut tillage record the practice at field level. The grain stays in the normal origination stream, with a premium attached when the record is complete.',
      'Food customers on the sample site use that record when they want a regeneratively grown ingredient. The farm keeps the yield. The buyer gets a crop they can describe. Neither the acres nor the premium figures on this page are from a real company.',
    ],
    image: '/images/field.jpg',
  },
  {
    id: 'agronomy-desks',
    title: 'Agronomy desks added in Nairobi and São Paulo',
    dateLabel: '2 September 2026',
    source: 'Meridian Agriculture',
    summary:
      'Two sample grower desks now pair seed and fertiliser orders with a local agronomist before the season starts.',
    paragraphs: [
      'This is demonstration copy. Nairobi and São Paulo are illustrated regional cities on the template. They are not offices, and nobody at those addresses is part of this site.',
      'Each sample desk takes a soil test, a crop plan and an input order in one conversation. The point of the page is to show how a global agriculture company talks about local advice: the product and the recommendation travel together.',
      'A farm business using this template would replace the cities, the crops and the contact line with its own network.',
    ],
    image: '/images/agronomy.jpg',
  },
  {
    id: 'harvest-update',
    title: 'Harvest note: wheat and oilseeds moving into storage',
    dateLabel: '21 August 2026',
    source: 'Meridian Agriculture',
    summary:
      'A sample harvest update on grade, moisture and how grain moves from the field into storage and milling.',
    paragraphs: [
      'Global grain companies publish short harvest notes so customers know what is coming into store. This article is a fictional version of that note for the template.',
      'The sample story says wheat and oilseed deliveries are meeting grade, moisture is inside the storage spec, and milling customers have been given a two-week loading window. No real cargo, port or buyer is described.',
      'Use the layout for a weekly harvest bulletin, a cooperative update, or a mill’s intake report. Swap the crops for whatever the farm actually grows.',
    ],
    image: '/images/wheat.jpg',
  },
  {
    id: 'community-water',
    title: 'Sample community fund backs rural water points',
    dateLabel: '9 July 2026',
    source: 'Meridian Agriculture',
    summary:
      'A demonstration community item: water points near grower communities, funded beside the operating business.',
    paragraphs: [
      'Large agriculture companies report what they put back into the places where crops are grown. This item shows that kind of story without using a real foundation or a real donation total.',
      'In the sample, the company funds water points near contracted farms and reports the number of points, not a marketing slogan. The figure is illustrative. A live site should publish only what the business can document.',
      'The page is here so a farm or agribusiness template has a news format for community, harvest and grower-programme announcements.',
    ],
    image: '/images/crops.jpg',
  },
]
