'use client'

import { useRef, useEffect, useState } from 'react'
import styles from './about-section.module.css'

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`${styles.container}${inView ? ` ${styles.inView}` : ''}`}
      id="about"
    >
      <div className={styles.content}>
        {/* Left column */}
        <div className={styles.leftColumn}>
          <h2 className={styles.headline}>About Nate</h2>

          <p className={styles.bio}>
            From a military family and a Fort Carson upbringing to Senior Security Architect at Bank of America — Nate Butler&apos;s path through cybersecurity was anything but straight. After 8+ years climbing the corporate ladder at Microsoft, CloudWyze, and Bank of America, a chance elevator meeting with a mentor changed everything. Today he channels that hard-won expertise into one mission: helping professionals break into and advance in cybersecurity through his CLEAR framework — so they can own their value before they ever walk into a room.
          </p>

          {/* Trust signals */}
          <div className={styles.trustSignals}>
            <div className={styles.signal}>
              <span className={styles.signalNumber}>8+</span>
              <span className={styles.signalLabel}>Years in Corporate Cybersecurity</span>
            </div>
            <div className={styles.signal}>
              <span className={styles.signalNumber}>85%</span>
              <span className={styles.signalLabel}>Student Job Placement Rate</span>
            </div>
            <div className={styles.signal}>
              <span className={styles.signalNumber}>$45K</span>
              <span className={styles.signalLabel}>Avg Salary Increase Per Graduate</span>
            </div>
          </div>
        </div>

        {/* Right column - empty for asymmetry */}
        <div className={styles.rightColumn}></div>
      </div>
    </section>
  )
}
