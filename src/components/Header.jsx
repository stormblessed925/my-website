import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Brand bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a href="#" className="inline-block">
            <img
              src="/Pacific Medical Alert Dogs Logo.png"
              alt="Pacific Medical Alert Dogs"
              className="h-28 w-auto"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </a>
        </div>
      </div>

      {/* Nav bar */}
      <div className="bg-navy-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="text-sm font-semibold text-teal-300 hover:text-teal-200 transition"
              >
                Get In Touch →
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-white hover:bg-white/10 rounded transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-navy-800 border-t border-white/10">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
