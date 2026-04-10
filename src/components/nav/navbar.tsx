'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

/**
 * Navigation Bar — Premium Cyber Command Authority
 *
 * Fixed navbar with:
 * - Semi-transparent dark background with backdrop blur
 * - Cyan glow shadow
 * - Logo on left (Nate Butler)
 * - Center menu links (HOME, ABOUT, PODCAST, BOOKS, COACHING)
 * - Right-side CTAs (Join Discord, Book Now)
 * - Mobile-responsive hamburger menu
 */
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'HOME', href: '/', active: true },
    { label: 'ABOUT', href: '#about' },
    { label: 'PODCAST', href: '#podcast' },
    { label: 'BOOKS', href: '#books' },
    { label: 'COACHING', href: '#coaching' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        background: 'rgba(19, 19, 24, 0.7)',
        backdropFilter: 'blur(40px)',
        boxShadow: '0 4px 20px rgba(0, 229, 255, 0.1)',
      }}
    >
      <div className="w-full px-6 lg:px-8 py-4">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="text-xl font-black tracking-tighter text-[#00E5FF]"
              style={{
                fontFamily: 'var(--font-havelock)',
                filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.5))',
              }}
            >
              Nate Butler
            </Link>
          </motion.div>

          {/* Center Menu — Desktop Only */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={`font-space-grotesk text-sm uppercase tracking-tight transition-all duration-200 ${
                  link.active
                    ? 'text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Right Side — CTAs */}
          <motion.div
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Join Discord Button */}
            <button
              onClick={() => {
                const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || '#'
                window.open(discordUrl, '_blank')
              }}
              className="font-space-grotesk text-xs uppercase tracking-widest text-white/70 transition-all duration-200 hover:text-[#fface8]"
            >
              Join Discord
            </button>

            {/* Book Now Button */}
            <button
              onClick={() => {
                window.location.href = '/book-me-now'
              }}
              className="font-space-grotesk text-sm font-bold uppercase tracking-wider px-6 py-2 rounded-full bg-[#00E5FF] text-slate-900 transition-all duration-200 hover:scale-105"
              style={{
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)',
              }}
            >
              Book Now
            </button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden p-2 text-[#00E5FF]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <>
                  <path d="M18 6L6 18M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </>
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className={`font-space-grotesk text-sm uppercase tracking-tight transition-all duration-200 ${
                    link.active ? 'text-[#00E5FF]' : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || '#'
                    window.open(discordUrl, '_blank')
                    setMobileMenuOpen(false)
                  }}
                  className="font-space-grotesk text-xs uppercase tracking-widest text-white/70 transition-all duration-200 hover:text-[#fface8] text-left"
                >
                  Join Discord
                </button>

                <button
                  onClick={() => {
                    window.location.href = '/book-me-now'
                    setMobileMenuOpen(false)
                  }}
                  className="font-space-grotesk text-sm font-bold uppercase tracking-wider px-6 py-2 rounded-full bg-[#00E5FF] text-slate-900 transition-all duration-200 w-full"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)',
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
