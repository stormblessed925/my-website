import React from 'react'
import { ClipboardList, MessageSquare, Dog, GraduationCap, Users, RefreshCw } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Initial Inquiry',
    description:
      'Potential clients reach out to us to describe their situation. We review each request carefully to determine if our program is a good fit.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Assessment & Consultation',
    description:
      'We conduct a thorough needs assessment, reviewing medical documentation and speaking in depth with the client and their support network.',
  },
  {
    icon: Dog,
    step: '03',
    title: 'Dog Selection',
    description:
      'We carefully select a dog with the temperament, drive, and suitability for the specific tasks required. Not every dog is a fit — we never compromise on this.',
  },
  {
    icon: GraduationCap,
    step: '04',
    title: 'Specialized Training',
    description:
      "The dog undergoes an extensive training program, with tasks and behaviours customized to the individual client's needs, lifestyle, and environment.",
  },
  {
    icon: Users,
    step: '05',
    title: 'Team Training & Placement',
    description:
      'The client and dog come together for team training to build communication, trust, and reliability. Placement only happens when both are fully ready.',
  },
  {
    icon: RefreshCw,
    step: '06',
    title: 'Ongoing Support',
    description:
      "Our relationship doesn't end at placement. We provide follow-up support, check-ins, and ongoing guidance to ensure every team thrives.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-700 mt-2 mb-4">
            Our Process
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Developing a medical alert service dog team is a thorough, multi-step process. We take the
            time to get it right — for both the dog and the client.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-navy-600 flex items-center justify-center shadow-md">
                    <Icon className="text-white" size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-1">
                      Step {s.step}
                    </div>
                    <h3 className="font-heading font-bold text-navy-700 text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Timeline note */}
        <div className="mt-16 bg-navy-50 border border-navy-100 rounded-2xl p-6 max-w-3xl mx-auto text-center">
          <p className="text-navy-700 font-medium">
            ⏱ The full process typically takes{' '}
            <span className="font-bold">18 to 24 months</span> from initial assessment to placement.
            This timeline reflects the depth and quality of training required for specialized medical alert work.
          </p>
        </div>
      </div>
    </section>
  )
}
