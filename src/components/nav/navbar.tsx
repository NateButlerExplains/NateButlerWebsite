'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

/**
 * Navigation Bar — Premium Cyber Command Authority
 *
 * Fixed navbar with:
 * - Semi-transparent dark background with backdrop blur
 * - Cyan glow shadow
 * - Logo on left (Nate Butler)
 * - Center menu links (HOME, ABOUT, PODCAST, BOOKS, COACHING) — desktop only
 * - Right-side CTAs (Join Discord, Book Now) — desktop only
 * - Mobile: bell icon only (navigation via bottom nav bar)
 */
export function Navbar() {
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
              className="font-space-grotesk text-xs uppercase tracking-widest text-white/70 transition-all duration-200 hover:text-[#fface8]"
            >
              Join Discord
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
