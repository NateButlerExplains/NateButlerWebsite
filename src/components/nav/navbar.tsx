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
  const [activeSection, setActiveSection] = useState('home')
  const [mobileBookButtonOpacity, setMobileBookButtonOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'about', sectionId: 'about' },
        { id: 'podcast', sectionId: 'podcast' },
        { id: 'books', sectionId: 'books' },
        { id: 'coaching', sectionId: 'coaching' },
      ]

      // Check which section is currently in viewport
      let found = false
      for (const { id, sectionId } of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          // If section is visible in viewport (top < window.innerHeight and bottom > 80px for navbar)
          if (rect.top < window.innerHeight * 0.7 && rect.bottom > 80) {
            setActiveSection(id)
            found = true
            break
          }
        }
      }

      // If no section found in viewport, we're at home/hero
      if (!found) {
        setActiveSection('home')
      }

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
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'BOOKS', href: '#books', id: 'books' },
    { label: 'HOME', href: '/', id: 'home' },
    { label: 'COACHING', href: '#coaching', id: 'coaching' },
    { label: 'PODCAST', href: '#podcast', id: 'podcast' },
  ]

  const isLinkActive = (linkId: string) => {
    if (linkId === 'home') return activeSection === 'home'
    return activeSection === linkId
  }

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
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between md:justify-between">
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
                className={`font-space-grotesk text-sm uppercase tracking-tight transition-all duration-200 ${
                  isLinkActive(link.id)
                    ? 'text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
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

          {/* Mobile: Sticky Book Now Button (smooth fade in as scrolling past hero CTA) */}
          <motion.button
            onClick={() => {
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="md:hidden px-4 py-2 rounded-xl font-space-grotesk font-bold uppercase tracking-widest text-xs text-slate-900 transition-all duration-300 shadow-neon-glow-strong hover:shadow-[0_0_40px_rgba(0,229,255,0.75),_0_0_12px_rgba(0,229,255,0.4)] hover:-translate-y-[2px] active:scale-95 active:translate-y-0"
            style={{
              background: 'linear-gradient(135deg, #00e5ff 0%, #4D7FFF 100%)',
              opacity: mobileBookButtonOpacity,
              pointerEvents: mobileBookButtonOpacity > 0.1 ? 'auto' : 'none',
            }}
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
