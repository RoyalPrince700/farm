import { useState, type FormEvent } from 'react'
import { Globe, Mail, Phone } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { companyInfo, services } from '../data/services'

type FormStatus = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')
  const [demoNote, setDemoNote] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (String(data.get('website') || '').trim()) {
      setStatus('sent')
      form.reset()
      return
    }

    setStatus('sending')
    setError('')
    setDemoNote(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          service: data.get('service'),
          message: data.get('message'),
          website: data.get('website'),
        }),
      })
      if (response.status === 404) {
        setDemoNote(true)
        setStatus('sent')
        form.reset()
        return
      }
      const result = (await response.json()) as { success?: boolean; demo?: boolean; message?: string }
      if (!response.ok || !result.success) {
        setStatus('idle')
        setError(result.message || 'The message was not sent. Please use the sample phone or email.')
        return
      }
      setDemoNote(Boolean(result.demo))
      setStatus('sent')
      form.reset()
    } catch {
      setDemoNote(true)
      setStatus('sent')
      form.reset()
    }
  }

  return (
    <>
      <PageBanner
        title="Contact us"
        crumb="Contact"
        image="/images/field.jpg"
      />

      <section>
        <div className="container">
          <Reveal className="center">
            <span className="kicker">Get in touch</span>
            <h2 className="section-title contact-heading">
              Talk to the farm team
            </h2>
          </Reveal>

          <div className="contact-grid">
            <Reveal>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><Globe size={26} /></div>
                <h3>Global coverage</h3>
                <p>
                  {companyInfo.regions.map((region) => region.city).join(' · ')}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><Phone size={26} /></div>
                <h3>Call</h3>
                <p>
                  {companyInfo.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && <br />}
                      <a href={p.href}>{p.display}</a>
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="contact-card">
                <div className="icon" aria-hidden="true"><Mail size={26} /></div>
                <h3>Email</h3>
                <p>
                  {companyInfo.emails.map((mail, i) => (
                    <span key={mail.href}>
                      {i > 0 && <br />}
                      <a href={mail.href}>{mail.display}</a>
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="contact-split">
            <Reveal>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send a message</h2>
                <p>Ask about crops, livestock, inputs or supply. This form is part of the demonstration site.</p>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+1 555 010 0000" />
                  </div>
                  <div className="field">
                    <label htmlFor="service">Enquiry</label>
                    <select id="service" name="service" defaultValue="">
                      <option value="">General enquiry</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What do you need from the farm business?"
                    required
                  />
                </div>

                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button type="submit" className="btn btn-gold" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : (
                    <>Send Message <span className="arrow">→</span></>
                  )}
                </button>
                {status === 'sent' && !demoNote && (
                  <p className="form-status">
                    Received. The team will reply by email.
                  </p>
                )}
                {status === 'sent' && demoNote && (
                  <p className="form-status">
                    Received. This is a demonstration form, so the message stays on this sample
                    site and is not delivered to a real inbox.
                  </p>
                )}
                {error && <p className="form-status form-status-error">{error}</p>}
              </form>
            </Reveal>

            <Reveal delay={120}>
              <div className="presence-panel">
                <p className="kicker">Sample details</p>
                <h2>Demonstration contact</h2>
                <p>
                  Meridian Agriculture is not a real company. The phone number, email and
                  cities on this page are placeholders for a global farm website.
                </p>
                <ul className="visit-list">
                  {companyInfo.regions.map((region) => (
                    <li key={region.name}>
                      <strong>{region.name}</strong>
                      <span>{region.city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
