import { useState } from 'react'
import { Link } from 'react-router-dom'

const BOKADIREKT_URL =
  'https://www.bokadirekt.se/places/eriksbergs-halsoklinik-12294?sr=78B17C5C_B4CD_4DBB_A79C_FA29F1EECB05'

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple mailto fallback — can be wired to a backend later
    const subject = encodeURIComponent(`Meddelande från ${formData.name}`)
    const body = encodeURIComponent(
      `Namn: ${formData.name}\nE-post: ${formData.email}\nMobilnummer: ${formData.phone}\n\nMeddelande:\n${formData.message}`
    )
    window.location.href = `mailto:fei.tian.akp@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <footer className="bg-forest text-footer-text">
      {/* Contact section heading */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-4">
        <div className="flex items-center gap-3 mb-8">
          <img src="/assets/yin-yang.svg" alt="" className="w-8 h-8 opacity-60 invert" />
          <h3 className="font-serif text-2xl text-white">
            Välkommen att kontakta mig vid frågor om din hälsa
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Address */}
          <div className="space-y-3 text-sm font-sans">
            <p className="font-semibold text-white text-base mb-3">Besöksadress:</p>
            <Link to="/" className="block text-amber hover:underline font-medium">
              Dr. Tian Akupunktur
            </Link>
            <p>Sjöporten 4, Eriksberg</p>
            <p>417 64 Göteborg</p>
            <a href="mailto:fei.tian.akp@gmail.com" className="block hover:text-amber transition-colors">
              fei.tian.akp@gmail.com
            </a>
            <a href="tel:0707136805" className="block hover:text-amber transition-colors">
              070-7136805
            </a>
            <a
              href={BOKADIREKT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber inline-block mt-3"
            >
              Boka tid
            </a>
          </div>

          {/* Column 2: Contact form */}
          <div className="md:col-span-1">
            {submitted ? (
              <p className="text-sm font-sans text-white/80 pt-4">Tack för ditt meddelande!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Namn"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-b border-white/40 text-sm py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-amber transition-colors"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-post"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-b border-white/40 text-sm py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-amber transition-colors"
                    required
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Mobilnummer"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-white/40 text-sm py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-amber transition-colors"
                />
                <textarea
                  placeholder="Meddelande"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full bg-transparent border-b border-white/40 text-sm py-2 px-1 text-white placeholder-white/50 focus:outline-none focus:border-amber transition-colors resize-none"
                  required
                />
                <button type="submit" className="text-sm text-white/70 hover:text-amber transition-colors font-sans">
                  Skicka →
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Google Maps */}
          <div>
            <iframe
              title="Dr. Tian Akupunktur location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.8!2d11.905!3d57.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff37e5a5df8db%3A0x6c76c6e2b53b3c9f!2sSj%C3%B6porten%204%2C%20417%2064%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1699000000000!5m2!1ssv!2sse"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-sm opacity-80"
            />
          </div>
        </div>

        {/* Payment icons row */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center gap-4">
          <img src="/assets/Google-Reviews-transparent20171117-26841-1flz4vu_960x.png" alt="Google Reviews" className="h-6 brightness-0 invert opacity-70" />
          <span className="text-white/30 text-xl font-thin">|</span>
          <span className="text-xs font-sans text-white/50 tracking-widest uppercase">Betalning</span>
          <span className="text-xs font-sans text-white/60 border border-white/30 px-2 py-0.5 rounded">Epassi</span>
          <span className="text-xs font-sans text-white/60 border border-white/30 px-2 py-0.5 rounded">VISA</span>
          <span className="text-xs font-sans text-white/60 border border-white/30 px-2 py-0.5 rounded">Mastercard</span>
          <span className="text-xs font-sans text-white/60 border border-white/30 px-2 py-0.5 rounded">Swish</span>
        </div>

        <p className="text-xs text-white/30 font-sans mt-4 pb-6">
          © {new Date().getFullYear()} Dr. Tian Akupunktur, Göteborg
        </p>
      </div>
    </footer>
  )
}
