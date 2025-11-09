'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  SparklesIcon,
  HomeIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: SparklesIcon,
    title: 'Post-Surgical Care',
    description: 'Specialized care for plastic surgery recovery including wound care, medication management, and monitoring for complications.',
    features: ['Wound management', 'Pain management', 'Drainage care', 'Suture removal']
  },
  {
    icon: HeartIcon,
    title: 'Personalized Care Plans',
    description: 'Customized care tailored to your specific procedure and recovery needs, ensuring optimal healing and comfort.',
    features: ['Assessment', 'Custom protocols', 'Progress tracking', 'Physician coordination']
  },
  {
    icon: ClockIcon,
    title: '24/7 Availability',
    description: 'Round-the-clock access to professional nursing care, providing peace of mind during your recovery journey.',
    features: ['On-call support', 'Emergency response', 'Flexible scheduling', 'Night care available']
  },
  {
    icon: HomeIcon,
    title: 'In-Home Privacy',
    description: 'Recover in the comfort and privacy of your own home with discreet, professional care that respects your confidentiality.',
    features: ['Private service', 'Comfortable setting', 'Family support', 'No hospital visits']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Licensed Professionals',
    description: 'All our nurses are fully licensed, insured, and have extensive experience in post-surgical plastic surgery care.',
    features: ['RN certified', 'Background checked', 'Ongoing training', 'Fully insured']
  },
  {
    icon: UserGroupIcon,
    title: 'Companion Care',
    description: 'Beyond medical care, we provide emotional support and companionship during your recovery period.',
    features: ['Emotional support', 'Daily assistance', 'Mobility help', 'Meal preparation']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Comprehensive Care <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our elite nursing services are designed to ensure your complete comfort, 
            safety, and successful recovery from plastic surgery procedures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

