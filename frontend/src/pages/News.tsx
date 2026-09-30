import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { news } from '../data/news'

export default function News() {
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
        title="News"
        crumb="News"
        image="/images/harvest.jpg"
      />

      <section style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">Sample updates</span>
            <h2 className="section-title">What is happening</h2>
            <p className="section-lede">
              Demonstration stories for a global farm company: harvest, grower programmes and
              community work. None of these items describe a real business.
            </p>
          </Reveal>

          {news.map((item) => (
            <article className="news-story" id={item.id} key={item.id}>
              <Reveal className="media">
                <img src={item.image} alt="" loading="lazy" />
              </Reveal>
              <Reveal delay={80}>
                <p className="news-meta">
                  <time>{item.dateLabel}</time>
                  <span aria-hidden="true">·</span>
                  <span>{item.source}</span>
                </p>
                <h2>{item.title}</h2>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
