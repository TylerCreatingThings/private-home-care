'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, UserIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const procedures = [
  'Facelift',
  'Rhinoplasty',
  'Breast Augmentation',
  'Liposuction',
  'Tummy Tuck',
  'Blepharoplasty',
  'Breast Lift',
  'BBL (Brazilian Butt Lift)',
  'Mommy Makeover',
  'Other'
]

const careTypes = [
  '24-Hour Care',
  '12-Hour Shift',
  '8-Hour Shift',
  'Hourly Visits',
  'On-Call Support'
]

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    procedure: '',
    surgeryDate: '',
    careType: '',
    duration: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert(`Error: ${data.error || 'Failed to submit booking'}`)
      }
    } catch (error) {
      console.error('Booking submission error:', error)
      alert('Failed to submit booking. Please try calling us directly at 416-303-4390')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Book Your <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">Care with Sigal</span>
            </h2>
            <p className="text-xl text-white/80">
              Complete the form below and Sigal will contact you within 24 hours to discuss your personalized care plan.
            </p>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 text-lg mb-8">
                Your booking request has been received. Sigal will contact you shortly to discuss your personalized care plan.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    procedure: '',
                    surgeryDate: '',
                    careType: '',
                    duration: '',
                    message: ''
                  })
                }}
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
              >
                Book Another Service
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="Jane Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="(416) 555-0123"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Procedure Type *
                  </label>
                  <select
                    name="procedure"
                    required
                    value={formData.procedure}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none appearance-none bg-white"
                  >
                    <option value="">Select procedure</option>
                    {procedures.map((proc) => (
                      <option key={proc} value={proc}>{proc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Surgery Date *
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="surgeryDate"
                      required
                      value={formData.surgeryDate}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type of Care *
                  </label>
                  <select
                    name="careType"
                    required
                    value={formData.careType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none appearance-none bg-white"
                  >
                    <option value="">Select care type</option>
                    {careTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Duration (days) *
                  </label>
                  <div className="relative">
                    <ClockIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="duration"
                      required
                      min="1"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="7"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                  placeholder="Please share any specific care requirements or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>

              <p className="text-center text-sm text-gray-500">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

