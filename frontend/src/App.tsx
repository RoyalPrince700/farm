import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { WhatsAppIcon, whatsappLink } from './data/whatsapp'
import Home from './pages/Home'
import Produce from './pages/Produce'
import About from './pages/About'
import Services from './pages/Services'
import News from './pages/News'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="demo-strip">
        Demonstration website — Meridian Agriculture is a fictional company. Phone, email and offices are sample details.
      </div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produce" element={<Produce />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <a
        href={whatsappLink()}
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        <span>Get this website</span>
      </a>
    </>
  )
}
