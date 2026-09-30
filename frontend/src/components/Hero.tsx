import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/images/field.jpg',
    title: 'Farming that feeds customers around the world',
    href: '/about',
    cta: 'Our company',
  },
  {
    image: '/images/wheat.jpg',
    title: 'Grain, oilseeds and livestock from one farm system',
    href: '/services',
    cta: 'Our operations',
  },
  {
    image: '/images/harvest.jpg',
    title: 'Seed, nutrition and advice for the season ahead',
    href: '/services#crop-inputs',
    cta: 'Grower services',
  },
]

const SLIDE_MS = 7000

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[index]

  return (
    <section className="hero" aria-label="Introduction">
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`hero-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-shapes" aria-hidden="true">
        <span className="blob blob-right" />
        <span className="blob blob-corner" />
      </div>

      <div className="hero-content" key={index}>
        <h1>{slide.title}</h1>
        <div className="hero-actions">
          <Link to={slide.href} className="btn btn-light">
            {slide.cta}
          </Link>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.image}
            className={i === index ? 'active' : ''}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
