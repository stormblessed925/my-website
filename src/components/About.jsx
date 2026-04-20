import React from 'react'

const alertTypes = [
  'Diabetic Alert (hypo & hyperglycaemia)',
  'Seizure Alert & Response',
  'Allergen Detection (peanut, tree nut, gluten & more)',
  'PTSD & Psychiatric Support',
  'Cardiac Alert',
  'Custom medical alerts — assessed individually',
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: About */}
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-700 mt-2 mb-1">
              Who We Are
            </h2>
            <p className="text-sm text-gray-400 mb-5">Established 2021 &mdash; British Columbia, Canada</p>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pacific Medical Alert Dogs is a British Columbia–based organization that trains highly
                specialized medical alert service dogs for individuals with unique and complex medical needs.
              </p>
              <p>
                We work directly with each client — not through a general waitlist — to develop a
                training program built entirely around that person's specific condition, lifestyle, and
                environment. We are a small, dedicated team, and we believe that doing this work well
                means doing it one team at a time.
              </p>
              <p>
                Our dogs are trained to recognized Canadian service dog standards and align with
                international best practices set out by Assistance Dogs International (ADI). All teams
                receive comprehensive training documentation, and clients are supported in understanding
                their rights under BC and federal legislation regarding public access.
              </p>
              <p>
                Animal welfare is central to everything we do. All dogs in our program are selected,
                trained, and cared for to the highest standard.
              </p>
            </div>
          </div>

          {/* Right: What We Do */}
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-700 mt-2 mb-5">
              Areas We Work In
            </h2>
            <ul className="space-y-3">
              {alertTypes.map((type) => (
                <li key={type} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                  <span className="text-gray-600">{type}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-400">
              Not seeing your situation? Reach out — we assess every case individually.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
