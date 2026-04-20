import React from 'react'
import { CheckCircle } from 'lucide-react'

const traits = [
  'Exceptional nose work and scent detection ability',
  'Stable, even temperament in all environments',
  'High trainability and eagerness to work',
  'Appropriate size and strength for handler needs',
  'Excellent health clearances and genetics',
  'Strong bond-forming capacity',
]

const breeds = [
  { name: 'Labrador Retriever', note: 'Most common — excellent temperament and scenting ability' },
  { name: 'Golden Retriever', note: 'Highly biddable and gentle — ideal for many alert tasks' },
  { name: 'Standard Poodle', note: 'Hypoallergenic option with exceptional intelligence' },
  { name: 'Goldendoodle / Labradoodle', note: 'Considered case-by-case for low-allergen needs' },
]

export default function OurDogs() {
  return (
    <section id="dogs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">
              Our Dogs
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-700 mt-2 mb-6">
              Carefully Selected. Expertly Trained.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Not every dog is suited for medical alert work. We evaluate each prospective dog
              against a rigorous set of criteria before they enter our program. Animal welfare is
              central to everything we do — our dogs are working partners, not tools.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Dogs are sourced from reputable, health-tested breeders or identified through other
              trusted channels. All dogs receive comprehensive veterinary care, socialization, and
              positive reinforcement-based training throughout their development.
            </p>

            <h3 className="font-heading font-bold text-navy-700 mb-4">What We Look For</h3>
            <ul className="space-y-3">
              {traits.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle className="text-teal-500 shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-600 text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="font-heading font-bold text-navy-700 mb-6 text-lg">
                Breeds We Work With
              </h3>
              <div className="space-y-4">
                {breeds.map((b) => (
                  <div
                    key={b.name}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal-500 shrink-0 mt-2" />
                    <div>
                      <div className="font-semibold text-navy-700">{b.name}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{b.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-navy-600 text-white rounded-2xl p-6">
              <h3 className="font-heading font-bold text-lg mb-3">Animal Welfare First</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                We are committed to the physical and psychological wellbeing of every dog in our
                program. If a dog is not suited for service work at any point during training, they
                are ethically rehomed into a loving environment. The dog's wellbeing is never
                compromised for program outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
