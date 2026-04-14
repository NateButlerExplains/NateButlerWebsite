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
 * - Center menu links (CORPORATE EVENTS, EXECUTIVE OFFSITES, CONFERENCES, CYBER EVENTS, PODCASTS) — desktop only
 * - More dropdown (desktop) with extended links
 * - Right-side CTA (Book Now) — desktop only
 * - Mobile: "More" button (text + chevron) with dropdown (My Books, Coaching, CyberTalks, LinkedIn)
 */
export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isPastFold, setIsPastFold] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      // Above/below-fold navbar state transition (desktop and mobile)
      setIsPastFold(window.scrollY >= window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Call once on mount to set initial state
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'CORPORATE EVENTS', href: '/speaker/corporate', id: 'corporate' },
    { label: 'EXECUTIVE OFFSITES', href: '/speaker/executive-offsite', id: 'executive-offsite' },
    { label: 'CYBER CONFERENCES', href: '/speaker/conference', id: 'conference' },
    { label: 'VIRTUAL EVENTS', href: '/speaker/cyber-event', id: 'cyber-event' },
  ]

  const moreLinks = [
    { label: 'For Event Planners', href: '/book-me-now', id: 'event-planners', external: false },
    { label: 'My Books', href: '/books', id: 'books', external: false },
    { label: 'Coaching', href: 'https://nate.kashboxcoaching.com/', id: 'coaching', external: true },
    { label: 'CyberTalks (Podcast Host)', href: 'https://www.tiktok.com/@natebutlerexplains', id: 'podcast-host', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/natebutlerexplains', id: 'linkedin', external: true },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        background: isPastFold ? 'rgba(19, 19, 24, 0.9)' : 'rgba(19, 19, 24, 0.7)',
        backdropFilter: isPastFold ? 'blur(40px)' : 'blur(20px)',
        boxShadow: isPastFold ? '0 4px 20px rgba(0, 229, 255, 0.1)' : 'none',
        pointerEvents: isPastFold ? 'auto' : 'none',
        transition: 'all 0.35s ease',
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
        <div className={`max-w-screen-2xl mx-auto relative flex items-center ${isPastFold ? 'justify-start' : 'justify-center'}`}>
          {/* Logo — sole flex-flow child; centered above fold, shifts left below fold */}
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
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

          {/* Center Menu — Desktop Only — absolutely positioned so it doesn't affect logo centering */}
          <motion.div
            className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isPastFold ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ pointerEvents: isPastFold ? 'auto' : 'none' }}
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
                <span className="text-base leading-none tracking-widest">···</span>
              </button>
              <div className="absolute right-0 mt-0 w-52 bg-[#131318] border border-[#00e5ff]/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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

          {/* Right Side CTAs — Desktop Only — absolutely positioned */}
          <motion.div
            className="hidden md:flex items-center gap-6 absolute right-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isPastFold ? 1 : 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ pointerEvents: isPastFold ? 'auto' : 'none' }}
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

          {/* Mobile: "More" Button with Dropdown — only rendered after fold */}
          {isPastFold && (
            <motion.div
              className="md:hidden absolute right-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* More Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="flex items-center gap-2 p-2 text-white/70 hover:text-white transition-colors font-space-grotesk text-sm uppercase tracking-widest font-semibold"
              >
                More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showMobileMenu ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Mobile More Menu - fixed dropdown position */}
              {showMobileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 w-52 bg-[#131318] border border-[#00e5ff]/20 rounded-lg shadow-lg z-40 mt-2"
                >
                  {moreLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      onClick={() => !link.external && setShowMobileMenu(false)}
                      className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all border-b border-white/10 first:rounded-t-lg last:border-b-0 last:rounded-b-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </div>

      </div>

      {/* Mobile: Bottom Navigation Bar (appears after fold) */}
      {isPastFold && (
        <motion.div
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full border-t border-[#00e5ff]/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: 'rgba(19, 19, 24, 0.95)',
            backdropFilter: 'blur(40px)',
            boxShadow: '0 -4px 20px rgba(0, 229, 255, 0.1)',
          }}
        >
          <div className="w-full px-6 py-3 flex items-center justify-center">
            <button
              onClick={() => {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-space-grotesk font-bold uppercase tracking-widest text-xs text-slate-900 transition-all duration-300 shadow-neon-glow-strong hover:shadow-[0_0_40px_rgba(0,229,255,0.75),_0_0_12px_rgba(0,229,255,0.4)] hover:-translate-y-[2px] active:scale-95 active:translate-y-0"
              style={{
                background: 'linear-gradient(135deg, #00e5ff 0%, #4D7FFF 100%)',
              }}
            >
              Check Speaking Availability
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
