'use client'

import { motion, easeOut } from 'framer-motion'
import styles from './mobile-special-guest.module.css'

export function MobileSpecialGuest() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easeOut },
  }

  return (
    <section className={styles.container}>
      <motion.div
        {...fadeInUp}
        className={styles.content}
      >
        <p className={styles.label}>
          Special Guest Appearance On
        </p>

        {/* Scrolling ticker for mobile */}
        <div className={styles.tickerContainer}>
          <motion.div
            className={styles.tickerTrack}
            animate={{ x: [0, -2040] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            style={{ width: 'max-content' }}
          >
            {/* Logo images duplicated for seamless loop */}
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className={styles.logoSet}>
                {/* Featured logos */}
                {[
                  { src: '/images/JAG.png', alt: 'JAG', upcoming: false },
                  { src: '/images/Logos/Human in the Loop.png', alt: 'Human-in-the-Loop Podcast', upcoming: false },
                  { src: '/images/Logos/Tech2.png', alt: 'Techniche Tips Podcast', upcoming: false },
                  { src: '/images/Logos/Architecture.png', alt: 'Art and Architecture', upcoming: false },
                  { src: '/images/Logos/Crime Junkies.png', alt: 'Cyber Crime Junkies', upcoming: false },
                  { src: '/images/Logos/Spark.png', alt: 'Neurodivergent Podcast', upcoming: false },
                  { src: '/images/Logos/ByteSize Balance.png', alt: 'ByteSize Balance', upcoming: false },
                  { src: '/images/Logos/Code Switch.png', alt: 'CodeSwitch Podcast', upcoming: true },
                  { src: '/images/Logos/T2Cyber.png', alt: 'Transition to Cyber Panel', upcoming: true },
                ].map((item) => (
                  <div key={item.alt} className={styles.logoWrapper}>
                    {/* Logo image */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={styles.logo}
                    />
                    {/* Upcoming badge */}
                    {item.upcoming && (
                      <span className={styles.badge}>
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
