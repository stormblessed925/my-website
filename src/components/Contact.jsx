import React, { useState } from 'react'
import { Mail, MapPin, Clock, AlertCircle, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    notifyMe: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-700 mt-2 mb-6">
              Contact Us
            </h2>

            {/* Not accepting banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 mb-8">
              <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Not Currently Accepting Requests</p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  We are not accepting new client applications at this time. You may still contact us
                  with general questions, or request to be notified when we reopen intake.
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you have questions about our program, want to learn more about service dogs, or
              would like to be added to our notification list for when we reopen — we welcome your
              message and will respond as promptly as we are able.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-navy-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Email</div>
                  <a
                    href="mailto:info@pacificmedicalalertdogs.org"
                    className="text-navy-700 font-medium hover:text-teal-600 transition"
                  >
                    info@pacificmedicalalertdogs.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-navy-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Location</div>
                  <span className="text-navy-700 font-medium">British Columbia, Canada</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-navy-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Response Time</div>
                  <span className="text-navy-700 font-medium">Within 3–5 business days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-teal-600" size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy-700 mb-2">Message Received</h3>
                <p className="text-gray-600 text-sm max-w-xs mx-auto">
                  Thank you for reaching out. We'll be in touch within 3–5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent transition"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent transition"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent transition"
                    placeholder="General inquiry, notification request, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent transition resize-none"
                    placeholder="Tell us a bit about yourself and how we can help..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="notifyMe"
                    name="notifyMe"
                    checked={formData.notifyMe}
                    onChange={handleChange}
                    className="mt-0.5 accent-teal-600"
                  />
                  <label htmlFor="notifyMe" className="text-sm text-gray-600 cursor-pointer">
                    Notify me when Pacific Medical Alert Dogs reopens intake for new clients
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-600 hover:bg-navy-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
