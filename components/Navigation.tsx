'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Private Home Care Services
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Services
            </Link>
            <Link
              href="#about"
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              Contact
            </Link>
            <a
              href="tel:4163034390"
              className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="font-semibold">416-303-4390</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4 space-y-3">
            <Link
              href="#services"
              className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:4163034390"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>416-303-4390</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

