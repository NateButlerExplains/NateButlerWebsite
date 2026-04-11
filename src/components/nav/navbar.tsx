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
        background: 'rgba(19, 19, 24, 0.7)',
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
                const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || '#'
                window.open(discordUrl, '_blank')
              }}
              className="transition-all duration-200 hover:text-cyan-400 text-white/70"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.3671a19.8062 19.8062 0 0 0-4.8383-1.4922.074.074 0 0 0-.0787.0369c-.210.3932-.441.9055-.603 1.309a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.309.077.077 0 0 0-.0787-.036 19.7896 19.7896 0 0 0-4.8383 1.4922.07.07 0 0 0-.0327.0277C1.618 8.4959 1.146 12.5899 2.0779 16.5681a.08.08 0 0 0 .0312.0479 19.9297 19.9297 0 0 0 6.0023 3.0294.078.078 0 0 0 .0852-.0286 14.175 14.175 0 0 0 1.232-2.00.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.873-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.077.077 0 0 0 .032-.479c.955-3.999.287-7.981-.956-11.980a.071.071 0 0 0-.031-.035zM8.02 15.3312c-1.039 0-1.895-.952-1.895-2.126 0-1.173.84-2.126 1.895-2.126 1.062 0 1.902.953 1.895 2.126 0 1.173-.84 2.126-1.895 2.126zm7.973 0c-1.039 0-1.895-.952-1.895-2.126 0-1.173.84-2.126 1.895-2.126 1.062 0 1.902.953 1.895 2.126 0 1.173-.833 2.126-1.895 2.126z" />
              </svg>
            </button>

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

          {/* Mobile: Bell Icon Only */}
          <motion.button
            className="md:hidden p-2 text-[#00E5FF]"
            whileTap={{ scale: 0.95 }}
            style={{
              filter: 'drop-shadow(0 0 6px rgba(0, 229, 255, 0.4))',
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </motion.button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
