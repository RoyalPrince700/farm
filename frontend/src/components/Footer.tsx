import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import BrandMark from './BrandMark'
import { services, companyInfo } from '../data/services'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <BrandMark />
            </div>
            <p>
              A demonstration website for a working farm. The pages follow the palms, the
              groundnut, and the other crops pressed and prepared in the yard.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/produce">Produce</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/services">Operations</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/blog">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Operations</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <span className="ico" aria-hidden="true"><MapPin size={16} /></span>
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><Phone size={16} /></span>
                <span>
                  {companyInfo.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && <br />}
                      <a href={p.href}>{p.display}</a>
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <span className="ico" aria-hidden="true"><Mail size={16} /></span>
                <a href={companyInfo.emailHref}>{companyInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {companyInfo.fullName}. Demonstration website.</span>
          <span>Fictional company · Sample contact details only</span>
        </div>
      </div>
    </footer>
  )
}
