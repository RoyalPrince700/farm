import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { posts } from '../data/blog'

export default function Blog() {
  return (
    <>
      <PageBanner title="Insights" crumb="Insights" image="/images/soil.jpg" />

      <section>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">From the field</span>
            <h2 className="section-title">Notes on farming and supply</h2>
            <p className="section-lede">
              Sample writing on soil, origination, crop inputs and livestock for a global farm website.
            </p>
          </Reveal>

          <div className="news-grid">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <Link to={`/blog/${post.slug}`} className="news-card">
                  <div className="thumb">
                    <img src={post.image} alt={post.imageAlt} loading="lazy" />
                  </div>
                  <div className="body">
                    <time>{post.dateLabel}</time>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="more">
                      Read post <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
