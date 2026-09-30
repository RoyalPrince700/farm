import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { productGroups, products, type ProductGroup } from '../data/products'

export default function Produce() {
  const { hash } = useLocation()
  const [group, setGroup] = useState<ProductGroup | 'all'>('all')

  useEffect(() => {
    const id = hash.replace('#', '')
    if (!id || !products.some((product) => product.id === id)) return
    setGroup('all')
    const scroll = () => document.getElementById(id)?.scrollIntoView({ block: 'start' })
    const frame = requestAnimationFrame(scroll)
    const timer = window.setTimeout(scroll, 60)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [hash])

  const visible = useMemo(
    () => (group === 'all' ? products : products.filter((product) => product.group === group)),
    [group],
  )

  return (
    <>
      <PageBanner
        title="The farm pantry"
        crumb="Produce"
        image="/images/hero-palms.jpg"
      />

      <section className="produce-page">
        <div className="container">
          <Reveal className="produce-intro">
            <p>
              Palm oil, groundnut oil and shea are on the home page. The same yard also presses
              coconut and sesame, jars honey, and keeps roasted groundnuts, cassava flour and
              dried chili.
            </p>
          </Reveal>

          <div className="produce-filters" role="tablist" aria-label="Filter products">
            {productGroups.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={group === item.id}
                className={group === item.id ? 'active' : ''}
                onClick={() => setGroup(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="produce-list">
            {visible.map((product) => {
              const index = products.findIndex((item) => item.id === product.id)
              return (
                <article key={product.id} id={product.id} className="produce-row">
                  <img src={product.image} alt={product.imageAlt} />
                  <div className="produce-copy">
                    <p className="produce-group">
                      {String(index + 1).padStart(2, '0')} · {product.groupLabel}
                    </p>
                    <h2>{product.name}</h2>
                    <p>{product.detail}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
