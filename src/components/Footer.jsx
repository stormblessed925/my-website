import React from 'react'
import { Heart } from 'lucide-react'

const links = {
  Organization: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Dogs', href: '#dogs' },
    { label: 'The Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ],
  Support: [
    { label: 'Contact', href: '#contact' },
    { label: 'Get Notified', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/Pacific Medical Alert Dogs Logo.png"
              alt="Pacific Medical Alert Dogs"
              className="h-16 w-auto mb-4 brightness-0 invert"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Highly specialized medical alert service dog training for individuals with unique medical
              needs. Based in British Columbia, Canada.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                Not Currently Accepting New Requests
              </span>
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Pacific Medical Alert Dogs. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-teal-400" /> in British Columbia, Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
