import { WhatsAppIcon, whatsappLink } from '../data/whatsapp'

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Want this website for your farm?</h2>
          <p>
            This farm site is a demo. Message on WhatsApp and it can be customised with your
            farm name, the products you sell, your team and your contact details.
          </p>
        </div>
        <a href={whatsappLink()} className="btn btn-wa" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> Customise it on WhatsApp
        </a>
      </div>
    </section>
  )
}
