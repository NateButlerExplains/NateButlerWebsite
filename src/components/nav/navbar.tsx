'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

/**
 * Navigation Bar — Premium Cyber Command Authority
 *
 * Fixed navbar with:
 * - Semi-transparent dark background with backdrop blur
 * - Cyan glow shadow
 * - Logo on left (Nate Butler)
 * - Center menu links (HOME, ABOUT, PODCAST, BOOKS, COACHING) — desktop only with scroll-spy active state
 * - Right-side CTAs (Join Discord, Book Now) — desktop only
 * - Mobile: bell icon only (navigation via bottom nav bar)
 */
export function Navbar() {
  const [mobileBookButtonOpacity, setMobileBookButtonOpacity] = useState(0)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mobile: smooth fade in as user scrolls past hero CTA button
      const heroCtaButton = document.querySelector('[data-hero-cta]')
      if (heroCtaButton) {
        const rect = heroCtaButton.getBoundingClientRect()
        // Calculate opacity based on scroll position relative to hero CTA
        // When CTA is fully visible (rect.top > 0), opacity = 0
        // When CTA is scrolled off screen (rect.top < -50), opacity = 1
        const opacity = Math.max(0, Math.min(1, -rect.top / 50))
        setMobileBookButtonOpacity(opacity)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Call once on mount to set initial state
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'CORPORATE EVENTS', href: '/speaker/corporate', id: 'corporate' },
    { label: 'EXECUTIVE OFFSITES', href: '/speaker/executive-offsite', id: 'executive-offsite' },
    { label: 'CONFERENCES', href: '/speaker/conference', id: 'conference' },
    { label: 'CYBER EVENTS', href: '/speaker/cyber-event', id: 'cyber-event' },
    { label: 'PODCASTS', href: '/podcast', id: 'podcast' },
  ]

  const moreLinks = [
    { label: 'Coaching', href: 'https://nate.kashboxcoaching.com/', id: 'coaching', external: true },
    { label: 'Books', href: '/books', id: 'books', external: false },
    { label: 'Podcast', href: '/podcast', id: 'podcast-more', external: false },
  ]


  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        background: 'rgba(19, 19, 24, 0.9)',
        backdropFilter: 'blur(40px)',
        boxShadow: '0 4px 20px rgba(0, 229, 255, 0.1)',
      }}
    >
      {/* Feathered bottom edge — blends navbar into hero image on mobile */}
      <div
        className="md:hidden absolute left-0 right-0 pointer-events-none"
        style={{
          top: '100%',
          height: '72px',
          background: 'linear-gradient(to bottom, rgba(19, 19, 24, 0.7) 0%, transparent 100%)',
        }}
      />
      <div className="w-full px-6 lg:px-8 py-2 md:py-4">
        <div className="max-w-screen-2xl mx-auto relative flex items-center justify-between md:justify-between">
          {/* Logo — mobile centered, desktop left */}
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
                className="font-space-grotesk text-sm uppercase tracking-tight transition-all duration-200 text-white/70 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="font-space-grotesk text-sm uppercase tracking-tight transition-all duration-200 text-white/70 hover:text-white flex items-center gap-2">
                More
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute right-0 mt-0 w-48 bg-[#131318] border border-[#00e5ff]/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {moreLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side CTAs — Desktop Only */}
          <motion.div
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => {
                window.location.href = '/book-me-now'
              }}
              className="inline-flex items-center justify-center px-6 py-2 rounded-xl font-space-grotesk font-bold uppercase tracking-wider text-xs text-slate-900 transition-all duration-300 shadow-neon-glow-strong hover:shadow-[0_0_40px_rgba(0,229,255,0.75),_0_0_12px_rgba(0,229,255,0.4)] hover:-translate-y-[2px] active:scale-95 active:translate-y-0"
              style={{
                background: 'linear-gradient(135deg, #00e5ff 0%, #4D7FFF 100%)',
              }}
            >
              Book Now
            </button>
          </motion.div>

          {/* Mobile: Hamburger Menu */}
          <div className="md:hidden absolute right-6 lg:right-8">
            {/* Hamburger Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showMobileMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Mobile Menu */}
            {showMobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 bg-[#131318] border-b border-[#00e5ff]/20 z-40"
              >
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setShowMobileMenu(false)}
                    className="block px-6 py-4 text-sm font-space-grotesk uppercase text-white/70 hover:text-white hover:bg-white/5 transition-all border-b border-white/10 last:border-b-0"
                  >
                    {link.label}
                  </Link>
                ))}
                {moreLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={() => !link.external && setShowMobileMenu(false)}
                    className="block px-6 py-4 text-sm font-space-grotesk uppercase text-white/70 hover:text-white hover:bg-white/5 transition-all border-b border-white/10 last:border-b-0"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile: Sticky Book Now Button (smooth fade in as scrolling past hero CTA) */}
        <motion.button
          onClick={() => {
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="md:hidden absolute right-6 lg:right-8 px-4 py-2 rounded-xl font-space-grotesk font-bold uppercase tracking-widest text-xs text-slate-900 transition-all duration-300 shadow-neon-glow-strong hover:shadow-[0_0_40px_rgba(0,229,255,0.75),_0_0_12px_rgba(0,229,255,0.4)] hover:-translate-y-[2px] active:scale-95 active:translate-y-0"
          style={{
            background: 'linear-gradient(135deg, #00e5ff 0%, #4D7FFF 100%)',
            opacity: mobileBookButtonOpacity,
            pointerEvents: mobileBookButtonOpacity > 0.1 ? 'auto' : 'none',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          Book Now
        </motion.button>
      </div>
    </nav>
  )
}

export default Navbar
