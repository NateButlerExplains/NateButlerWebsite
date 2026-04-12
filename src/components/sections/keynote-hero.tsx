'use client'

import { motion, easeOut } from 'framer-motion'

interface KernoteHeroProps {
  headline: string
  subheadline: string
  eventType?: string
}

export function KernoteHero({ headline, subheadline }: KernoteHeroProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easeOut },
  }

  return (
    <section className="relative w-full pt-32 pb-20 px-6 lg:px-8 overflow-x-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0, 229, 255, 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto">
        {/* Keynote badge */}
        <motion.div {...fadeInUp} className="mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-lg bg-purple-950/40 border border-purple-500/50 w-fit">
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
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-semibold text-purple-300">
              Keynote Speaker
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
          className="mb-8"
        >
          <h1 className="font-black leading-tight tracking-tighter space-y-0">
            <span className="block text-5xl lg:text-7xl font-space-grotesk text-white">
              {headline}
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
        >
          <p className="text-lg leading-relaxed text-slate-300 max-w-2xl font-manrope">
            {subheadline}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
