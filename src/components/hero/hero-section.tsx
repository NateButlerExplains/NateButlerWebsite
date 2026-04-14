'use client'

import { motion, easeOut } from 'framer-motion'
import { CyberPortrait } from './cyber-portrait'

/**
 * Hero Section — Premium Cyber Command Authority
 *
 * Mobile: Full-height portrait with overlaid headline at bottom
 * Desktop: Two-column layout with content left, portrait right
 */
export function HeroSection() {

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
            src="/images/Hero.png"
            alt="Nate Butler"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(13,13,18,0.7) 0%, rgba(13,13,18,0.3) 40%, transparent 70%)',
            }}
          />
        </motion.div>

        {/* Overlay: Headline + Buttons positioned on bottom of portrait */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pt-2 pb-24 z-10">
          {/* Headline overlaid on bottom portion */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            className="mb-6"
          >
            <h1 className="font-black leading-tight tracking-tighter space-y-0">
              <span className="block text-[9vw] sm:text-5xl text-white font-space-grotesk">
                Help the
              </span>
              <span
                className="block text-[9vw] sm:text-5xl font-space-grotesk"
                style={{
                  background: 'linear-gradient(to right, #00E5FF, #4D7FFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Next Generation
              </span>
              <span className="block text-[9vw] sm:text-5xl text-white font-space-grotesk">
                Break Into
              </span>
              <span className="block text-[9vw] sm:text-5xl text-white font-space-grotesk">
                Cybersecurity
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
            className="mb-6"
          >
            <p className="text-base leading-relaxed text-slate-300 font-manrope">
              Designed for audiences ready to move from exploring cybersecurity to actually entering the field.
            </p>
          </motion.div>

          {/* Button below headline */}
          <motion.div
            className="flex flex-col"
            {...fadeInUp}
            transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
          >
            <button
              data-hero-cta
              onClick={() => {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl text-slate-900 font-space-grotesk font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:-translate-y-[2px] active:scale-95 active:translate-y-0"
              style={{
                background: 'linear-gradient(135deg, #00e5ff 0%, #4D7FFF 100%)',
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.4), 0 0 4px rgba(0, 229, 255, 0.2), 0 4px 12px rgba(0, 100, 120, 0.25)',
              }}
            >
              Check Speaking Availability
            </button>
          </motion.div>

          {/* Trust Signals / Metrics — Mobile */}
          <motion.div
            className="grid grid-cols-3 gap-3 mt-8"
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.8, ease: easeOut }}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold font-space-grotesk text-[#00E5FF]" style={{ textShadow: '0 0 10px rgba(0, 229, 255, 0.4)' }}>
                10
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 text-center leading-tight">
                Years in<br />Enterprise<br />Cyber
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold font-space-grotesk text-[#00E5FF]" style={{ textShadow: '0 0 10px rgba(0, 229, 255, 0.4)' }}>
                85%
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 text-center leading-tight">
                Job<br />Placement<br />Rate
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold font-space-grotesk text-[#00E5FF]" style={{ textShadow: '0 0 10px rgba(0, 229, 255, 0.4)' }}>
                $45K
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 text-center leading-tight">
                Avg Salary<br />Increase<br />Per Learner
              </span>
            </div>
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
            {/* LEFT COLUMN: Content (9 columns) */}
            <div className="w-full col-span-8">
              {/* Headline */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
                className="mb-10"
              >
                <h1 className="font-black leading-tight tracking-tighter space-y-0">
                  <span className="block text-7xl lg:text-8xl text-white font-space-grotesk">
                    Help the
                  </span>
                  <span
                    className="block text-7xl lg:text-8xl font-space-grotesk"
                    style={{
                      background: 'linear-gradient(to right, #00E5FF, #4D7FFF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Next Generation
                  </span>
                  <span className="block text-7xl lg:text-8xl text-white font-space-grotesk">
                    Break Into
                  </span>
                  <span className="block text-7xl lg:text-8xl text-white font-space-grotesk">
                    Cybersecurity
                  </span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
                className="mb-12"
              >
                <p className="text-lg leading-relaxed text-slate-300 max-w-xl font-manrope">
                  Practical talks for career changers, students, and early professionals entering cyber.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-row gap-5 mb-16"
                {...fadeInUp}
                transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
              >
                {/* Primary CTA: CHECK SPEAKING AVAILABILITY */}
                <button
                  onClick={() => {
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-slate-900 font-space-grotesk font-bold uppercase tracking-widest text-base transition-all duration-300 hover:-translate-y-[2px] active:scale-95 active:translate-y-0 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #00e5ff 0%, #4D7FFF 100%)',
                    boxShadow: '0 0 24px rgba(0, 229, 255, 0.35), 0 0 6px rgba(0, 229, 255, 0.2), 0 6px 16px rgba(0, 100, 120, 0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 32px rgba(0, 229, 255, 0.45), 0 0 8px rgba(0, 229, 255, 0.25), 0 8px 20px rgba(0, 100, 120, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(0, 229, 255, 0.35), 0 0 6px rgba(0, 229, 255, 0.2), 0 6px 16px rgba(0, 100, 120, 0.25)'
                  }}
                >
                  Check Speaking Availability
                </button>
              </motion.div>

              {/* Trust Signals / Metrics */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-12"
                {...fadeInUp}
                transition={{ delay: 0.6, duration: 0.8, ease: easeOut }}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl font-bold font-space-grotesk text-[#00E5FF]" style={{ textShadow: '0 0 10px rgba(0, 229, 255, 0.4)' }}>
                    10
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center">
                    Years in Enterprise<br />Cybersecurity
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl font-bold font-space-grotesk text-[#00E5FF]" style={{ textShadow: '0 0 10px rgba(0, 229, 255, 0.4)' }}>
                    85%
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center">
                    Job<br />Placement Rate
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl font-bold font-space-grotesk text-[#00E5FF]" style={{ textShadow: '0 0 10px rgba(0, 229, 255, 0.4)' }}>
                    $45K
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center">
                    Avg Salary Increase<br />Per Learner
                  </span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Cyber Portrait (3 columns) */}
            <motion.div
              className="w-full col-span-4 flex justify-center items-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            >
              <div className="w-full">
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
