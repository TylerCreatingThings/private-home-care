'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our services? Our care coordinators are available 24/7 to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Sigal</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach out anytime to discuss your care needs. Sigal is here to answer your questions and help you plan 
                the perfect care package for your recovery.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:4163034390"
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Phone</div>
                  <div className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    416-303-4390
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Call or text anytime</div>
                </div>
              </a>

              <a
                href="mailto:sigal888@hotmail.com"
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <div className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors break-all">
                    sigal888@hotmail.com
                  </div>
                  <div className="text-sm text-gray-600 mt-1">We'll respond within 2 hours</div>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Service Area</div>
                  <div className="text-lg font-bold text-gray-900">Greater Toronto Area</div>
                  <div className="text-sm text-gray-600 mt-1">Toronto, Mississauga, Vaughan, Oakville & more</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Availability</div>
                  <div className="text-lg font-bold text-gray-900">24/7 Support</div>
                  <div className="text-sm text-gray-600 mt-1">Available every day of the year</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Inquiry</h3>
            <ContactForm />
          </motion.div>
        </div>

        {/* Emergency Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-6"
        >
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Medical Emergency?</h4>
              <p className="text-gray-700">
                If you're experiencing a medical emergency, please call 911 immediately or go to your nearest emergency room.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

