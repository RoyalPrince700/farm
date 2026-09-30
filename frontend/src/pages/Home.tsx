import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'

const stories = [
  {
    id: 'palm-oil',
    kicker: 'From the palms',
    title: 'Red palm oil',
    image: '/images/palm-oil.jpg',
    alt: 'A bowl of red palm oil beside a bunch of oil palm fruit',
    text: [
      'The fruit bunches on the palms turn orange-red, and that is when they are cut. In the yard the fruit is cooked and pressed. The oil that runs off is the deep red in the bowl, and it is left that way.',
      'Nothing is blended in from another farm. Kitchens use it for stew. The same palms also give the kernel, which is pressed on its own into a paler oil.',
    ],
  },
  {
    id: 'groundnut-oil',
    kicker: 'From the sandy plots',
    title: 'Groundnut oil',
    image: '/images/groundnut-oil.jpg',
    alt: 'Pale groundnut oil in a clear bottle, with groundnuts on a wooden table',
    text: [
      'Groundnut grows on the sandy ground beside the palm rows. After harvest the nuts are dried in the yard, then pressed. The oil is pale gold and still tastes of the nut.',
      'It is not refined. A share of the same harvest is roasted and kept as nuts, so the crop leaves the farm in two forms: oil, and the nut itself.',
    ],
  },
  {
    id: 'shea-butter',
    kicker: 'From the same yard',
    title: 'Shea butter',
    image: '/images/shea-butter.jpg',
    alt: 'Ivory shea butter in a wooden bowl, with shea nuts beside it',
    text: [
      'Shea nuts are gathered in season and worked into butter here. The butter in the bowl is what comes off the nuts, jarred without scent or colour added.',
      'It is used in cooking and on the skin. It sits with the oils because it is made in the same yard, from a crop the farm handles itself.',
    ],
  },
]

const steps = [
  {
    name: 'Grown here',
    text: 'Palm, groundnut, coconut, sesame, cassava and chili are crops on this land. The hives and the shea store sit with them.',
  },
  {
    name: 'Taken in season',
    text: 'Fruit, nuts, roots and comb come in when they are ready, then wait for the press or the pantry.',
  },
  {
    name: 'Pressed in the yard',
    text: 'Palm fruit and groundnut are pressed here. Honey, shea, flour and chili are prepared in the same yard.',
  },
  {
    name: 'Left as it comes',
    text: 'The oil is not refined and the honey is not blended. What leaves the yard is the crop, in a bottle, a jar or a bag.',
  },
]

const team = [
  {
    role: 'Farm lead',
    text: 'Sets the season: which plots grow groundnut, palm, coconut, sesame, cassava and chili, and when each one comes in.',
  },
  {
    role: 'Press house',
    text: 'Runs the press, writes the batch note, and bottles oil only from lots grown on the farm.',
  },
  {
    role: 'Pantry',
    text: 'Jars the honey and shea, roasts the groundnuts, and packs the flour and chili.',
  },
  {
    role: 'Trade desk',
    text: 'Keeps the record of each lot and speaks with the kitchens and shops that take the oil.',
  },
]

export default function Home() {
  return (
    <>
      <section className="farm-hero">
        <div className="farm-hero-copy">
          <span className="kicker">The east plots</span>
          <h1>The palms that give the red oil.</h1>
          <p>
            These are the rows. The red fruit under the fronds is cut when it colours, then
            pressed in the yard. Groundnut grows on the sandy ground beside these palms, and
            that crop is pressed here too.
          </p>
          <div className="hero-actions">
            <a href="#palm-oil" className="btn btn-green">
              The palm oil <span className="arrow">→</span>
            </a>
            <a href="#groundnut-oil" className="btn btn-line">
              The groundnut oil
            </a>
          </div>
        </div>

        <div className="farm-hero-media">
          <img
            src="/images/palm-oil.jpg"
            alt="A bowl of red palm oil beside a bunch of oil palm fruit"
          />
        </div>
      </section>

      {stories.map((story, i) => (
        <section
          key={story.id}
          id={story.id}
          className={`product-story ${i % 2 === 1 ? 'flip' : ''}`}
        >
          <div className="container product-story-grid">
            <Reveal className="product-story-media">
              <img src={story.image} alt={story.alt} />
            </Reveal>
            <Reveal delay={120}>
              <span className="kicker">{story.kicker}</span>
              <h2 className="section-title">{story.title}</h2>
              {story.text.map((paragraph) => (
                <p key={paragraph} className="section-lede">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="farm-story" id="farm">
        <div className="container farm-story-grid">
          <Reveal>
            <span className="kicker">The farm</span>
            <h2 className="section-title">The press sits in the yard, not in another town.</h2>
            <p className="section-lede">
              Palm fruit, groundnut, coconut and sesame are pressed where they are grown. Honey
              is taken from hives on the farm. Shea, cassava flour and chili are prepared in the
              same yard.
            </p>
            <p className="section-lede">
              The farm keeps to that list. Coconut oil, sesame oil, honey, roasted groundnuts,
              cassava flour and dried chili are part of the same work, written up with the three
              above.
            </p>
            <Link to="/produce" className="text-cta">
              The rest of the yard <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={120} className="farm-photos">
            <img src="/images/harvest.jpg" alt="Young crop rows on the farm" />
            <img src="/images/soil.jpg" alt="Soil prepared for planting" />
            <img src="/images/crops.jpg" alt="Produce from the farm" />
          </Reveal>
        </div>
      </section>

      <section className="farm-steps">
        <div className="container">
          <Reveal>
            <span className="kicker">How a lot moves</span>
            <h2 className="section-title">From the plot to a bottle in the yard.</h2>
          </Reveal>
          <div className="step-list">
            {steps.map((step, i) => (
              <Reveal key={step.name} delay={i * 80}>
                <article>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.name}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="farm-team" id="team">
        <div className="container">
          <Reveal className="farm-team-head">
            <span className="kicker">The people</span>
            <h2 className="section-title">Four desks. Put your own names on them.</h2>
            <p className="section-lede">
              A buyer is trusting a person, not a logo. These roles are the sample team for the
              template. Replace them with the people who actually farm, press, pack and sell.
            </p>
          </Reveal>
          <div className="team-grid">
            {team.map((member, i) => (
              <Reveal key={member.role} delay={i * 80}>
                <article>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{member.role}</h3>
                  <p>{member.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
