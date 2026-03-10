import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const BOKADIREKT_URL =
  'https://www.bokadirekt.se/places/eriksbergs-halsoklinik-12294?sr=78B17C5C_B4CD_4DBB_A79C_FA29F1EECB05'

const navLinks = [
  { label: 'Hem', to: '/' },
  { label: 'Om Dr. Tian', to: '/om-dr-tian' },
  { label: 'Patientomdömen', to: '/#omdomen' },
  { label: 'Behandlingar & Priser', to: '/behandlingar-och-priser' },
  { label: 'Boka', to: '/boka' },
  { label: 'Vanliga frågor', to: '/vanliga-fragor' },
  { label: 'Kontakt', to: '/boka' },
  { label: 'Vad är TCM?', to: '/vad-ar-kinesisk-medicin' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-forest text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/assets/White on Transparent.png"
            alt="Dr. Tian Akupunktur"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 text-sm font-sans font-medium">
          {navLinks.slice(0, 7).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-amber transition-colors duration-150 whitespace-nowrap ${
                location.pathname === link.to ? 'text-amber' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href={BOKADIREKT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block btn-amber ml-4 whitespace-nowrap"
        >
          Boka tid
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-forest border-t border-forest-light px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-2.5 text-sm text-white/90 hover:text-amber border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOKADIREKT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber inline-block mt-4"
          >
            Boka tid
          </a>
        </div>
      )}
    </nav>
  )
}
