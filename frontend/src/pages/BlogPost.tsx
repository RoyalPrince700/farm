import { Link, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { posts } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <>
        <PageBanner title="Post not found" crumb="Insights" image="/images/field.jpg" />
        <section>
          <div className="container blog-article">
            <p>That post is not on the insights page.</p>
            <Link to="/blog" className="btn btn-green">
              Back to the blog <span className="arrow">→</span>
            </Link>
          </div>
        </section>
      </>
    )
  }

  const others = posts.filter((item) => item.slug !== post.slug).slice(0, 3)

  return (
    <>
      <PageBanner title="Insights" crumb="Insights" image={post.image} />

      <section>
        <div className="container">
          <article className="blog-article">
            <Reveal>
              <p className="news-meta">
                <time>{post.dateLabel}</time>
                <span aria-hidden="true">·</span>
                <span>{post.author}</span>
              </p>
              <h2>{post.title}</h2>
              <img src={post.image} alt={post.imageAlt} />
              {post.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link to="/blog" className="text-cta">
                All posts <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </article>

          <div className="blog-more">
            <h2 className="section-title">More from the blog</h2>
            <div className="news-grid">
              {others.map((item) => (
                <Link key={item.slug} to={`/blog/${item.slug}`} className="news-card">
                  <div className="thumb">
                    <img src={item.image} alt={item.imageAlt} loading="lazy" />
                  </div>
                  <div className="body">
                    <time>{item.dateLabel}</time>
                    <h3>{item.title}</h3>
                    <span className="more">
                      Read post <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
