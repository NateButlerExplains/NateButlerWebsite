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
        <div className="absolute inset-0 flex flex-col justify-end px-6 pt-2 pb-24 z-10">
          {/* Headline overlaid on bottom portion */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
            className="mb-6"
          >
            <h1 className="font-black leading-tight tracking-tighter space-y-0">
              <span className="block text-6xl sm:text-7xl text-white font-space-grotesk">
                Unlock Your
              </span>
              <span
                className="block text-6xl sm:text-7xl font-space-grotesk"
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

          {/* Buttons below headline */}
          <motion.div
            className="flex flex-col gap-2"
            {...fadeInUp}
            transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
          >
            <button
              onClick={() => {
                window.location.href = '/book-me-now'
              }}
              className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-space-grotesk font-bold uppercase tracking-widest text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1 active:scale-95"
              style={{
                boxShadow: '0 0 30px rgba(0, 229, 255, 0.5)',
              }}
            >
              Book Me Now
            </button>

            <button
              onClick={() => {
                const discordUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || '#'
                window.open(discordUrl, '_blank')
              }}
              className="w-full inline-flex items-center justify-center px-8 py-3 rounded-full bg-transparent border border-slate-400 text-slate-100 font-space-grotesk font-semibold uppercase tracking-widest text-xs transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400 active:scale-95"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.3671a19.8062 19.8062 0 0 0-4.8383-1.4922.074.074 0 0 0-.0787.0369c-.210.3932-.441.9055-.603 1.309a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.309.077.077 0 0 0-.0787-.036 19.7896 19.7896 0 0 0-4.8383 1.4922.07.07 0 0 0-.0327.0277C1.618 8.4959 1.146 12.5899 2.0779 16.5681a.08.08 0 0 0 .0312.0479 19.9297 19.9297 0 0 0 6.0023 3.0294.078.078 0 0 0 .0852-.0286 14.175 14.175 0 0 0 1.232-2.00.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.873-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.077.077 0 0 0 .032-.479c.955-3.999.287-7.981-.956-11.980a.071.071 0 0 0-.031-.035zM8.02 15.3312c-1.039 0-1.895-.952-1.895-2.126 0-1.173.84-2.126 1.895-2.126 1.062 0 1.902.953 1.895 2.126 0 1.173-.84 2.126-1.895 2.126zm7.973 0c-1.039 0-1.895-.952-1.895-2.126 0-1.173.84-2.126 1.895-2.126 1.062 0 1.902.953 1.895 2.126 0 1.173-.833 2.126-1.895 2.126z" />
              </svg>
              Join Discord
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
          <div className="grid grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT COLUMN: Content (7 columns) */}
            <div className="w-full col-span-7">
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
                transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
                className="mb-10"
              >
                <h1 className="font-black leading-tight tracking-tighter space-y-0">
                  <span className="block text-6xl lg:text-9xl text-white font-space-grotesk">
                    Unlock Your
                  </span>
                  <span
                    className="block text-6xl lg:text-9xl font-space-grotesk"
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
                transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
                className="mb-12"
              >
                <p className="text-lg leading-relaxed text-slate-300 max-w-xl font-manrope">
                  High-impact GRC, AI, Cyber & Tech speaker delivering elite strategic
                  intelligence for the next generation of digital defense and resilience.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-row gap-5 mb-16"
                {...fadeInUp}
                transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
              >
                {/* Primary: BOOK ME NOW */}
                <button
                  onClick={() => {
                    window.location.href = '/book-me-now'
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-space-grotesk font-bold uppercase tracking-widest text-base transition-all duration-200 hover:shadow-lg hover:-translate-y-1 active:scale-95"
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border border-slate-400 text-slate-100 font-space-grotesk font-bold uppercase tracking-widest text-base transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400 active:scale-95"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.3671a19.8062 19.8062 0 0 0-4.8383-1.4922.074.074 0 0 0-.0787.0369c-.210.3932-.441.9055-.603 1.309a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.309.077.077 0 0 0-.0787-.036 19.7896 19.7896 0 0 0-4.8383 1.4922.07.07 0 0 0-.0327.0277C1.618 8.4959 1.146 12.5899 2.0779 16.5681a.08.08 0 0 0 .0312.0479 19.9297 19.9297 0 0 0 6.0023 3.0294.078.078 0 0 0 .0852-.0286 14.175 14.175 0 0 0 1.232-2.00.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.873-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.077.077 0 0 0 .032-.479c.955-3.999.287-7.981-.956-11.980a.071.071 0 0 0-.031-.035zM8.02 15.3312c-1.039 0-1.895-.952-1.895-2.126 0-1.173.84-2.126 1.895-2.126 1.062 0 1.902.953 1.895 2.126 0 1.173-.84 2.126-1.895 2.126zm7.973 0c-1.039 0-1.895-.952-1.895-2.126 0-1.173.84-2.126 1.895-2.126 1.062 0 1.902.953 1.895 2.126 0 1.173-.833 2.126-1.895 2.126z" />
                  </svg>
                  Join Discord
                </button>
              </motion.div>

              {/* Featured Appearances Ticker */}
              <motion.div
                className="pt-12 border-t border-white/10"
                {...fadeInUp}
                transition={{ delay: 0.6, duration: 0.8, ease: easeOut }}
              >
                <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">
                  Featured On
                </p>

                {/* Scrolling ticker — constrained to left column width, no overflow */}
                <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
                  <motion.div
                    className="flex gap-10 items-center"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{ width: 'max-content' }}
                  >
                    {/* Logos duplicated for seamless loop */}
                    {[...Array(2)].map((_, setIdx) => (
                      <div key={setIdx} className="flex gap-10 items-center">
                        {/* Appearances with upcoming badge */}
                        {[
                          { label: 'Human-in-the-Loop Podcast', width: 140, upcoming: false },
                          { label: 'Techniche Tips Podcast', width: 130, upcoming: false },
                          { label: 'Art and Architecture', width: 120, upcoming: false },
                          { label: 'Cyber Crime Junkies', width: 125, upcoming: false },
                          { label: 'Neurodivergent Podcast', width: 130, upcoming: false },
                          { label: 'CodeSwitch Podcast', width: 120, upcoming: true },
                          { label: 'Transition to Cyber Panel', width: 135, upcoming: true },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center justify-center flex-shrink-0 relative">
                            <div
                              className="flex items-center justify-center px-3 py-2 rounded relative"
                              style={{
                                width: item.width,
                                background: item.upcoming ? 'rgba(112, 0, 255, 0.08)' : 'rgba(255,255,255,0.04)',
                                border: item.upcoming ? '1px solid rgba(112, 0, 255, 0.2)' : '1px solid rgba(255,255,255,0.08)',
                              }}
                            >
                              <span
                                className="font-space-grotesk font-bold text-xs uppercase tracking-wider whitespace-nowrap"
                                style={{ color: item.upcoming ? 'rgba(176, 127, 255, 0.7)' : 'rgba(255,255,255,0.35)' }}
                              >
                                {item.label}
                              </span>
                            </div>
                            {/* Upcoming badge */}
                            {item.upcoming && (
                              <span
                                className="absolute -top-2 -right-2 text-[9px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded"
                                style={{
                                  background: 'rgba(112, 0, 255, 0.3)',
                                  color: '#D1BCFF',
                                  border: '1px solid rgba(112, 0, 255, 0.4)',
                                }}
                              >
                                Soon
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Cyber Portrait (5 columns) */}
            <motion.div
              className="w-full col-span-5 flex justify-center lg:justify-end items-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            >
              <div className="w-full max-w-lg lg:max-w-2xl">
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
