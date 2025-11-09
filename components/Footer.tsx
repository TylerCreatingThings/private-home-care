'use client'

import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
              Private Home Care Services
            </h3>
            <p className="text-gray-400 mb-4">
              Professional private nursing care by Sigal Farkas, RN, BScN for post-surgical plastic surgery recovery in the Greater Toronto Area.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="#testimonials" className="text-gray-400 hover:text-primary-400 transition-colors">Testimonials</Link></li>
              <li><Link href="#booking" className="text-gray-400 hover:text-primary-400 transition-colors">Book Now</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Post-Surgical Care</li>
              <li>24/7 Nursing Support</li>
              <li>In-Home Recovery</li>
              <li>Wound Management</li>
              <li>Medication Management</li>
              <li>Emergency Response</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:4163034390" className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                  <span>416-303-4390</span>
                </a>
              </li>
              <li>
                <a href="mailto:sigal888@hotmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span className="break-all">sigal888@hotmail.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                <span>Serving Greater Toronto Area</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Private Home Care Services - Sigal Farkas, RN, BScN. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">HIPAA Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

