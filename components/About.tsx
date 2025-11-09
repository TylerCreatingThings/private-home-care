'use client'

import { motion } from 'framer-motion'
import { CheckBadgeIcon, AcademicCapIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

const stats = [
  { value: '500+', label: 'Successful Recoveries' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Care Available' }
]

const values = [
  {
    icon: HeartIcon,
    title: 'Compassionate Care',
    description: 'We treat every client with empathy, respect, and the highest level of professional care.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Safety First',
    description: 'Your safety and wellbeing are our top priorities, with rigorous protocols and monitoring.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Expert Excellence',
    description: 'Our nurses are highly trained specialists in post-surgical plastic surgery care.'
  },
  {
    icon: CheckBadgeIcon,
    title: 'Discretion Guaranteed',
    description: 'We understand the importance of privacy and maintain complete confidentiality.'
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Meet <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Sigal Farkas</span>
            </h2>
            <div className="mb-6">
              <p className="text-2xl font-bold text-primary-700 mb-2">RN, BScN</p>
              <p className="text-lg text-gray-600">Registered Nurse, Bachelor of Science in Nursing</p>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With extensive experience in post-surgical care, Sigal specializes in providing compassionate, 
              professional nursing services for patients recovering from plastic surgery procedures. Her expertise 
              ensures you receive the highest quality care in the comfort and privacy of your own home.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sigal partners with the Greater Toronto Area's leading plastic surgeons to provide seamless, 
              coordinated care throughout your recovery journey. Her personalized approach focuses on your 
              comfort, safety, and successful healing.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-primary-50/50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

