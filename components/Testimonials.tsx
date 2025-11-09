'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: 'Sarah M.',
    procedure: 'Mommy Makeover',
    rating: 5,
    text: 'Sigal provided absolutely exceptional care during my recovery. She was knowledgeable, compassionate, and made the entire process so much easier. I felt completely taken care of in the privacy of my home.',
    location: 'Toronto, ON'
  },
  {
    name: 'Jennifer L.',
    procedure: 'Facelift',
    rating: 5,
    text: 'I cannot recommend Sigal enough. Her professionalism and discretion were exactly what I needed. She anticipated my needs and provided expert care throughout my recovery. Truly exceptional!',
    location: 'Oakville, ON'
  },
  {
    name: 'Amanda K.',
    procedure: 'Breast Augmentation',
    rating: 5,
    text: 'Having Sigal as my private nurse made all the difference in my recovery. Her 24/7 availability gave me peace of mind, and the quality of care exceeded my expectations. Worth every penny!',
    location: 'Mississauga, ON'
  },
  {
    name: 'Lisa R.',
    procedure: 'Rhinoplasty',
    rating: 5,
    text: 'Sigal\'s level of care and attention to detail was remarkable. She worked seamlessly with my surgeon and ensured my recovery was smooth and comfortable. Highly professional and caring.',
    location: 'Vaughan, ON'
  },
  {
    name: 'Michelle T.',
    procedure: 'Tummy Tuck',
    rating: 5,
    text: 'Sigal provided me with the support I needed during a vulnerable time. She is a true professional who genuinely cares about her patients. I felt safe and well-cared for throughout my recovery.',
    location: 'Toronto, ON'
  },
  {
    name: 'Rachel B.',
    procedure: 'BBL',
    rating: 5,
    text: 'From start to finish, the experience was first-class. Sigal was incredibly skilled and made my recovery process so much easier than I anticipated. I am so grateful for her exceptional care.',
    location: 'Richmond Hill, ON'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their recovery experience with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/90 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-white/20 pt-4">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-accent-300 text-sm">{testimonial.procedure}</div>
                <div className="text-white/60 text-sm">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm"
        >
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>CNO Licensed</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Fully Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Background Checked</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>HIPAA Compliant</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

