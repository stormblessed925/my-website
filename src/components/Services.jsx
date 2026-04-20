import React from 'react'
import { Activity, Zap, Wind, Brain, AlertTriangle, Thermometer } from 'lucide-react'

const services = [
  {
    icon: Activity,
    title: 'Diabetic Alert',
    description:
      'Dogs trained to detect the scent of hypoglycaemia (low blood sugar) and hyperglycaemia (high blood sugar), alerting their handler before symptoms become dangerous.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: Zap,
    title: 'Seizure Alert & Response',
    description:
      'Highly specialized dogs that can alert before the onset of a seizure, provide protective response during an event, and summon help when needed.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Wind,
    title: 'Allergen Detection',
    description:
      'Dogs trained to detect specific allergens such as peanuts, tree nuts, gluten, or other substances, providing a vital layer of safety for those with life-threatening allergies.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    icon: Brain,
    title: 'PTSD & Psychiatric Support',
    description:
      'Dogs trained for specific psychiatric alert and interruption tasks, grounding behaviours, and safe space creation for individuals managing PTSD and related conditions.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: AlertTriangle,
    title: 'Cardiac Alert',
    description:
      'Dogs that can detect changes in heart rate or blood pressure and alert their handler, providing critical time to take preventive action.',
    color: 'text-navy-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Thermometer,
    title: 'Custom Medical Alerts',
    description:
      "We assess each individual's unique medical profile and work collaboratively to develop a tailored training program for conditions not listed above.",
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-700 mt-2 mb-4">
            Specialized Alert Training
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Each dog is trained for a specific individual's needs. Our programs are not off-the-shelf —
            they are developed in close collaboration with the client, their family, and where appropriate,
            their medical team.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`rounded-2xl border ${s.border} ${s.bg} p-7 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5">
                  <Icon className={s.color} size={22} />
                </div>
                <h3 className="font-heading font-bold text-navy-700 text-lg mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Not seeing your specific need? We encourage you to reach out — we assess each situation
            individually and may be able to help or point you in the right direction.
          </p>
        </div>
      </div>
    </section>
  )
}
