'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  const benefits = [
    'Licensed & Experienced RN',
    '24/7 Availability',
    'Personalized Care Plans',
    'Discreet & Professional'
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary-100 rounded-full">
              <span className="text-primary-700 font-semibold text-sm">Expert Post-Surgical Care</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight"
          >
            Private Home Care
            <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-700 mb-8 leading-relaxed"
          >
            Expert private nursing care for your plastic surgery recovery with{' '}
            <span className="font-bold text-primary-700">Sigal Farkas, RN, BScN</span>.
            Compassionate, personalized support in the comfort and privacy of your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-4 mb-10"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircleIcon className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              Book Care Now
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 border-2 border-primary-200"
            >
              Meet Your Nurse
            </a>
          </motion.div>
        </div>

        {/* Right Column - Nurse Profile */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl transform rotate-3"></div>
            
            {/* Profile card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/nurse.png"
                  alt="Sigal Farkas, RN, BScN - Private Home Care Nurse"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Nurse Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Sigal Farkas</h3>
                <p className="text-accent-300 font-semibold mb-3">RN, BScN</p>
                <p className="text-white/90 text-sm">
                  Registered Nurse specializing in post-surgical plastic surgery care
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-600 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

