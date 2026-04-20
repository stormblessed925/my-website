import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What makes Pacific Medical Alert Dogs different from other service dog programs?',
    a: 'We specialize exclusively in highly individualized medical alert tasks. Our small size means every client receives deep, personal attention. We do not run volume programs — we run the right program for each person.',
  },
  {
    q: 'How long does the process take?',
    a: 'The typical timeline from initial assessment to team placement is 18 to 24 months. This accounts for dog selection, specialized training development, and thorough team training. We do not rush this process.',
  },
  {
    q: 'Is there a cost involved?',
    a: 'Yes, there are costs associated with our program. We are transparent about this during the assessment process. We work with clients to explore all available options, including potential funding sources and grant programs available in BC and Canada.',
  },
  {
    q: 'Are your dogs certified?',
    a: 'We adhere to recognized Canadian service dog standards. Our dogs are trained to a professional level, and we provide comprehensive documentation of their training. Clients are educated on their rights under BC and federal law regarding public access.',
  },
  {
    q: 'Do I need a medical referral?',
    a: 'A medical referral is not always required to begin the inquiry process, but medical documentation is a key part of the assessment stage. We review each case individually.',
  },
  {
    q: 'Are you currently accepting applications?',
    a: 'At this time, we are not accepting new client requests. We encourage interested individuals to check back for updates. You are welcome to contact us to be added to a notification list.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We are based in British Columbia, Canada, and primarily serve clients within BC. Depending on circumstances, we may be able to work with clients in other parts of Canada on a case-by-case basis.',
  },
  {
    q: 'Can I donate to or support the organization?',
    a: 'We appreciate expressions of support. Please reach out through our contact form and we will be happy to share how you can help support our mission.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-navy-700 text-sm md:text-base">{q}</span>
        <ChevronDown
          size={20}
          className={`text-teal-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          <div className="pt-4">{a}</div>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-700 mt-2 mb-4">
            Common Questions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Answers to questions we frequently receive about our program, our dogs, and how we work.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
