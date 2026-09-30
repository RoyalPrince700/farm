import { Link } from 'react-router-dom'
import { Check, Rocket, Target } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { companyInfo } from '../data/services'

export default function About() {
  return (
    <>
      <PageBanner
        title="About Meridian Agriculture"
        crumb="Our company"
        image="/images/field.jpg"
      />

      <section>
        <div className="container split">
          <Reveal>
            <span className="kicker">Who we are</span>
            <h2 className="section-title">
              One platform from the field to the food customer
            </h2>
            <p className="section-lede">
              Meridian Agriculture is a fictional company shown on this demonstration website.
              The story it tells is a global farm business: crops and livestock on managed land,
              inputs and agronomy for growers, and origination that moves harvests to mills and
              food companies.
            </p>
            <p className="section-lede">
              The pages follow the shape of an international agriculture site. Production,
              grower services and supply sit together, with soil, water and field records treated
              as part of the commercial work.
            </p>
            <Link to="/services" className="btn btn-green" style={{ marginTop: 30 }}>
              See the operations <span className="arrow">→</span>
            </Link>
          </Reveal>

          <Reveal delay={120} className="split-media">
            <img
              className="main-img"
              src="/images/wheat.jpg"
              alt="Harvested wheat grain"
              loading="lazy"
            />
            <img
              className="float-img"
              src="/images/cattle.jpg"
              alt="Cattle on pasture"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <Reveal className="center">
            <span className="kicker">Where we operate</span>
            <h2 className="section-title">Five regions, one farm standard</h2>
            <p className="section-lede">
              Sample regional desks. These cities illustrate a global footprint. They are not
              real offices, and no one at these locations is affiliated with this demo.
            </p>
          </Reveal>

          <div className="region-grid">
            {companyInfo.regions.map((region, i) => (
              <Reveal key={region.name} delay={i * 80}>
                <article className="region-card">
                  <p>{region.name}</p>
                  <h3>{region.city}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">Our direction</span>
            <h2 className="section-title">Vision &amp; mission</h2>
          </Reveal>

          <div className="vm-grid">
            <Reveal>
              <div className="vm-card vision">
                <div className="glyph" aria-hidden="true"><Target size={28} /></div>
                <h3>Our vision</h3>
                <p>
                  To be the farm partner growers and food companies use when a crop has to be
                  grown, stored and delivered to a known standard.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="vm-card mission">
                <div className="glyph" aria-hidden="true"><Rocket size={28} /></div>
                <h3>Our mission</h3>
                <p>
                  Produce food, supply the inputs and advice that make the season work, and
                  move the harvest to a customer without losing grade, traceability or soil.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <Reveal className="split-media">
            <img
              className="main-img"
              src="/images/agronomy.jpg"
              alt="Seedlings in nursery trays"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="kicker">Why this model</span>
            <h2 className="section-title">Built the way global farm companies work</h2>
            <p className="section-lede">
              Three jobs, kept on one account: grow the crop, equip the farmer, and originate
              the harvest for a buyer.
            </p>
            <ul className="check-list">
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Grain, oilseeds and livestock on managed and contracted land</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Seed, nutrition and crop protection with a written field plan</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Storage, milling and supply that protect grade</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> Regenerative practice recorded where customers will pay for it</li>
              <li><span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> One operating standard across every sample region</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
