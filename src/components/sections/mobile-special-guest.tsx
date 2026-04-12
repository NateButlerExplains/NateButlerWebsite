'use client'

import { motion, easeOut } from 'framer-motion'

export function MobileSpecialGuest() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easeOut },
  }

  return (
    <section className="md:hidden relative w-full bg-surface px-6 py-8">
      <motion.div
        {...fadeInUp}
        className="w-full max-w-screen-2xl mx-auto"
      >
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6 text-center">
          Special Guest Appearance On
        </p>

        {/* Scrolling ticker for mobile */}
        <div className="relative" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', overflow: 'visible' }}>
          <motion.div
            className="flex gap-8 items-center justify-center"
            animate={{ x: [0, -2040] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            style={{ width: 'max-content' }}
          >
            {/* Logo images duplicated for seamless loop */}
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-8 items-center">
                {/* Featured logos */}
                {[
                  { src: '/images/Logos/Human in the Loop.png', alt: 'Human-in-the-Loop Podcast', upcoming: false },
                  { src: '/images/Logos/Tech2.png', alt: 'Techniche Tips Podcast', upcoming: false },
                  { src: '/images/Logos/Architecture.png', alt: 'Art and Architecture', upcoming: false },
                  { src: '/images/Logos/Crime Junkies.png', alt: 'Cyber Crime Junkies', upcoming: false },
                  { src: '/images/Logos/Spark.png', alt: 'Neurodivergent Podcast', upcoming: false },
                  { src: '/images/Logos/ByteSize Balance.png', alt: 'ByteSize Balance', upcoming: false },
                  { src: '/images/Logos/Code Switch.png', alt: 'CodeSwitch Podcast', upcoming: true },
                  { src: '/images/Logos/T2Cyber.png', alt: 'Transition to Cyber Panel', upcoming: true },
                ].map((item) => (
                  <div key={item.alt} className="flex items-center justify-center flex-shrink-0 relative">
                    {/* Logo image */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-12 object-contain"
                    />
                    {/* Upcoming badge */}
                    {item.upcoming && (
                      <span
                        className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest font-extrabold px-1.5 py-0.5 rounded flex-shrink-0 whitespace-nowrap"
                        style={{
                          background: 'rgba(112, 0, 255, 0.5)',
                          color: '#00e5ff',
                          border: '1px solid rgba(0, 229, 255, 0.6)',
                          boxShadow: '0 0 12px rgba(0, 229, 255, 0.3)',
                        }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default MobileSpecialGuest
