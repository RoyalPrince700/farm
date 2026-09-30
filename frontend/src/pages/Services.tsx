import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { services } from '../data/services'

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
    }
  }, [hash])

  return (
    <>
      <PageBanner
        title="Our operations"
        crumb="Operations"
        image="/images/wheat.jpg"
      />

      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">What we do</span>
            <h2 className="section-title">
              Crops, livestock, inputs and supply
            </h2>
            <p className="section-lede">
              From the field to storage and on to a food customer. Each line below is sample
              copy for a global farm website. Replace it with the crops and services you actually run.
            </p>
          </Reveal>

          {services.map((s, i) => (
            <div className={`service-row ${i % 2 === 1 ? 'flip' : ''}`} id={s.id} key={s.id}>
              <Reveal className="media">
                <img src={s.image} alt={s.imageAlt ?? s.title} loading="lazy" />
              </Reveal>
              <Reveal delay={100}>
                <span className="badge">0{i + 1}</span>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                <ul className="check-list">
                  {s.points.map((p) => (
                    <li key={p}>
                      <span className="tick" aria-hidden="true"><Check size={14} strokeWidth={3} /></span> {p}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-green" style={{ marginTop: 28 }}>
                  Talk to us <span className="arrow">→</span>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
