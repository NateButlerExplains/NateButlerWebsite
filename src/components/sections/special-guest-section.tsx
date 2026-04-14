'use client'

import { motion } from 'framer-motion'

export function SpecialGuestSection() {
  return (
    <div className="hidden md:block w-full border-t border-[#00e5ff]/10 py-12">
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-8 text-center">
          Special Guest Appearance On
        </p>

        {/* Scrolling ticker — full width */}
        <div className="relative" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', overflow: 'visible' }}>
          <motion.div
            className="flex gap-10 items-center justify-center"
            animate={{ x: [0, -2040] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            style={{ width: 'max-content' }}
          >
            {/* Logo images duplicated for seamless loop */}
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-12 items-center">
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
                      className="h-16 object-contain"
                    />
                    {/* Upcoming badge */}
                    {item.upcoming && (
                      <span
                        className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-extrabold px-2 py-1 rounded flex-shrink-0 whitespace-nowrap"
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
      </div>
    </div>
  )
}

export default SpecialGuestSection
