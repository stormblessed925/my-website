import React from 'react'
import { MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-navy-700 via-navy-600 to-navy-800 py-28 md:py-40">
      {/* Soft glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 opacity-10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400 opacity-10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L360 40C720 0 1080 40 1440 20V80H0Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-teal-300 border border-teal-400/30 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <MapPin size={13} />
          British Columbia, Canada
        </div>

        <h1 className="font-heading font-bold text-white leading-tight mb-6 text-5xl md:text-6xl lg:text-7xl">
          Specialized<br />
          <span className="text-teal-300">Medical Alert</span><br />
          Service Dogs
        </h1>

        <p className="text-lg md:text-xl text-white/75 max-w-xl mx-auto mb-10 leading-relaxed">
          We work directly with individuals to train highly specialized, custom medical alert service dogs
          — built around each person's unique needs.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg text-base"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}
