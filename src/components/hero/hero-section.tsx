'use client'

import { motion, easeOut } from 'framer-motion'
import { CyberPortrait } from './cyber-portrait'

/**
 * Hero Section — Premium Cyber Command Authority
 *
 * Premium hero with:
 * - Left-aligned layout matching navbar
 * - Large, impactful headline with cyan gradient
 * - Glassmorphic badge with verified icon
 * - High-impact CTAs with neon glows
 * - Social proof stats with accent colors
 * - Cyber portrait on right with holographic effects
 * - Generous breathing room and spacing
 */
export function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easeOut },
  }

  return (
    <section className="relative w-full hero-section overflow-hidden flex items-center pt-28 pb-20">
      {/* Content Container — Aligned with navbar (max-w-screen-2xl, px-8) */}
      <motion.div
        className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* LEFT COLUMN: Content (7 columns) — Left-aligned */}
          <div className="w-full lg:col-span-7">
            {/* Badge */}
            <motion.div {...fadeInUp} className="mb-16">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-lg bg-purple-950/40 border border-purple-500/50">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-purple-300"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 11l-3-3 1.41-1.41L10 9.17l5.59-5.59L17 5l-7 7z" />
                </svg>
                <span className="text-xs uppercase tracking-widest font-semibold text-purple-300">
                  Global Command Authority
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
              className="mb-10"
            >
              <h1 className="font-black leading-none lg:leading-tight tracking-tighter space-y-0">
                <span className="block text-8xl lg:text-9xl text-white font-space-grotesk">
                  Unlock Your
                </span>
                <span
                  className="block text-8xl lg:text-9xl font-space-grotesk"
                  style={{
                    background: 'linear-gradient(to right, #00C9FF, #D1BCFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 12px rgba(0, 201, 255, 0.15)',
                    filter: 'drop-shadow(0 0 3px rgba(0, 201, 255, 0.2))',
                  }}
                >
                  Cyber Future
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="mb-12"
            >
              <p className="text-lg leading-relaxed text-slate-300 max-w-xl font-manrope">
                High-impact GRC, AI, Cyber & Tech speaker delivering elite strategic
                intelligence for the next generation of digital defense and resilience.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col md:flex-row gap-5 mb-16"
              {...fadeInUp}
              transition={{ delay: 0.45, duration: 0.8, ease: 'easeOut' }}
            >
              {/* Primary: BOOK ME NOW */}
              <button
                onClick={() => {
                  window.location.href = '/book-me-now'
                }}
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-space-grotesk font-bold uppercase tracking-widest text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-1 active:scale-95"
                style={{
                  boxShadow: '0 0 30px rgba(0, 229, 255, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 0 40px rgba(0, 229, 255, 0.7)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(0, 229, 255, 0.5)'
                }}
              >
                Book Me Now
              </button>

              {/* Secondary: JOIN MY DISCORD */}
              <button
                onClick={() => {
                  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || '#'
                  window.open(discordUrl, '_blank')
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-slate-600 text-slate-100 font-space-grotesk font-bold uppercase tracking-widest text-base transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400 active:scale-95"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Join My Discord
              </button>
            </motion.div>

            {/* Stats Bar with border */}
            <motion.div
              className="flex flex-col md:flex-row gap-8 md:gap-12 pt-12 border-t border-white/10"
              {...fadeInUp}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            >
              {/* Stat 1: Keynotes — Cyan */}
              <div className="flex flex-col">
                <div className="text-6xl md:text-7xl font-black font-space-grotesk text-cyan-400">
                  500+
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-3 font-semibold">
                  Keynotes
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-white/5" />

              {/* Stat 2: Fortune 100s — Purple */}
              <div className="flex flex-col">
                <div
                  className="text-6xl md:text-7xl font-black font-space-grotesk"
                  style={{
                    background: 'linear-gradient(to right, #B78FFF, #D1BCFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  40+
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-3 font-semibold">
                  Fortune 100s
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-white/5" />

              {/* Stat 3: Reach — Magenta */}
              <div className="flex flex-col">
                <div
                  className="text-6xl md:text-7xl font-black font-space-grotesk"
                  style={{
                    background: 'linear-gradient(to right, #D1BCFF, #FF88DD)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  15M
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-3 font-semibold">
                  Reach
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Cyber Portrait (5 columns) */}
          <motion.div
            className="w-full lg:col-span-5 flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="w-full max-w-lg lg:max-w-2xl">
              <CyberPortrait />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
