'use client'

import { useState, useEffect } from 'react'
import { motion, easeOut } from 'framer-motion'
import { CyberPortrait } from './cyber-portrait'

/**
 * Hero Section — Premium Cyber Command Authority
 *
 * Mobile: Full-height portrait with overlaid headline at bottom
 * Desktop: Two-column layout with content left, portrait right
 */
export function HeroSection() {
  // Topics that rotate below "A Speaker on"
  const SPEAKER_TOPICS = [
    'Breaking Into Cyber',
    'GRC',
    'AI',
  ]

  const [topicIndex, setTopicIndex] = useState(0)

  // Rotate topics every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTopicIndex((prev) => (prev + 1) % SPEAKER_TOPICS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [SPEAKER_TOPICS.length])

  const currentTopic = SPEAKER_TOPICS[topicIndex]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easeOut },
  }

  return (
    <section className="relative w-full hero-section overflow-x-hidden md:flex md:items-center md:pt-28 pb-0 md:pb-20 md:min-h-auto">
      {/* MOBILE: Full-height portrait with overlay layout */}
      <div className="md:hidden relative w-full h-screen -mt-[48px]">
        {/* Mobile headshot image fills screen */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Nate - headshot - Mobile.png"
            alt="Nate Butler"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(13,13,18,0.95) 0%, rgba(13,13,18,0.6) 40%, transparent 70%)',
            }}
          />
        </motion.div>

        {/* Overlay: Headline + Buttons positioned on bottom of portrait */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pt-2 pb-12 z-10">
          {/* Headline overlaid on bottom portion */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            className="mb-6"
          >
            <h1 className="font-black leading-tight tracking-tighter space-y-0">
              <span className="block text-6xl sm:text-7xl text-white font-space-grotesk">
                A Speaker on
              </span>
              <motion.span
                key={topicIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="block text-6xl sm:text-7xl font-space-grotesk"
                style={{
                  background: 'linear-gradient(to right, #00E5FF, #4D7FFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {currentTopic}
              </motion.span>
            </h1>
          </motion.div>

          {/* Buttons below headline */}
          <motion.div
            className="flex flex-col gap-3"
            {...fadeInUp}
            transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
          >
            <button
              onClick={() => {
                const kitSection = document.querySelector('[id*="kit"]') || document.querySelector('[id*="speaker"]')
                if (kitSection) {
                  kitSection.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.open('#', '_self')
                }
              }}
              className="w-full inline-flex items-center justify-center px-8 py-3 rounded-xl text-slate-100 font-space-grotesk font-semibold uppercase tracking-widest text-xs transition-all duration-300 hover:text-[#00e5ff] hover:-translate-y-[2px] active:scale-95 active:translate-y-0"
              style={{
                background: 'linear-gradient(rgba(19,19,24,1), rgba(19,19,24,1)) padding-box, linear-gradient(135deg, rgba(0,229,255,0.7), rgba(77,127,255,0.7)) border-box',
                border: '2px solid transparent',
              }}
            >
              <span>Download Speaker Kit</span>
            </button>

            <button
              onClick={() => {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl text-slate-900 font-space-grotesk font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:-translate-y-[2px] active:scale-95 active:translate-y-0"
              style={{
                background: 'linear-gradient(135deg, #00e5ff 0%, #4D7FFF 100%)',
                boxShadow: '0 0 32px rgba(0, 229, 255, 0.55), 0 0 8px rgba(0, 229, 255, 0.3), 0 8px 16px rgba(0, 100, 120, 0.4), 0 4px 8px rgba(0, 200, 220, 0.2)',
              }}
            >
              Book Nate Butler
            </button>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP: Original two-column layout */}
      <div className="hidden md:block w-full">
        <motion.div
          className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          <div className="grid grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT COLUMN: Content (7 columns) */}
            <div className="w-full col-span-7">
              {/* Badge */}
              <motion.div {...fadeInUp} className="mb-10">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-lg bg-purple-950/40 border border-purple-500/50">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-300"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-xs uppercase tracking-widest font-semibold text-purple-300">
                    Helping People Break Into Cyber
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
                className="mb-10"
              >
                <h1 className="font-black leading-tight tracking-tighter space-y-0">
                  <span className="block text-7xl lg:text-8xl font-space-grotesk">
                    <span className="text-white">A Speaker on </span>
                  </span>
                  <motion.span
                    key={topicIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: easeOut }}
                    className="block text-7xl lg:text-8xl font-space-grotesk"
                    style={{
                      background: 'linear-gradient(to right, #00E5FF, #4D7FFF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {currentTopic}
                  </motion.span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
                className="mb-12"
              >
                <p className="text-lg leading-relaxed text-slate-300 max-w-xl font-manrope">
                  Keynotes and talks built to inspire, educate, and guide the next generation of cyber talent.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-row gap-5 mb-16"
                {...fadeInUp}
                transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
              >
                {/* Primary: DOWNLOAD SPEAKER KIT */}
                <button
                  onClick={() => {
                    const bookSection = document.getElementById('books')
                    if (bookSection) {
                      bookSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-slate-100 font-space-grotesk font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:text-[#00e5ff] hover:-translate-y-[2px] active:scale-95 active:translate-y-0"
                  style={{
                    background: 'linear-gradient(rgba(19,19,24,1), rgba(19,19,24,1)) padding-box, linear-gradient(135deg, rgba(0,229,255,0.7), rgba(77,127,255,0.7)) border-box',
                    border: '2px solid transparent',
                  }}
                >
                  Download Speaker Kit
                </button>

                {/* Secondary: BOOK NATE BUTLER */}
                <button
                  onClick={() => {
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-slate-900 font-space-grotesk font-bold uppercase tracking-widest text-base transition-all duration-300 hover:-translate-y-[2px] active:scale-95 active:translate-y-0 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #00e5ff 0%, #4D7FFF 100%)',
                    boxShadow: '0 0 40px rgba(0, 229, 255, 0.6), 0 0 12px rgba(0, 229, 255, 0.4), 0 12px 24px rgba(0, 100, 120, 0.5), 0 6px 12px rgba(0, 200, 220, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 229, 255, 0.75), 0 0 16px rgba(0, 229, 255, 0.5), 0 16px 32px rgba(0, 100, 120, 0.6), 0 8px 16px rgba(0, 200, 220, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 229, 255, 0.6), 0 0 12px rgba(0, 229, 255, 0.4), 0 12px 24px rgba(0, 100, 120, 0.5), 0 6px 12px rgba(0, 200, 220, 0.3)'
                  }}
                >
                  Book Nate Butler
                </button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Cyber Portrait (5 columns) */}
            <motion.div
              className="w-full col-span-5 flex justify-center items-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            >
              <div className="w-full max-w-lg lg:max-w-xl">
                <CyberPortrait />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
