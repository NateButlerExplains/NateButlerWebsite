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
        <div className={`${styles.leftColumn} col-span-7`}>
          <h2 className={styles.headline}>About Nate</h2>

          <p className={styles.bio}>
            Nate Butler spent 10 years in enterprise cybersecurity across Fortune 100 banks, Big 4 consulting, MSPs, and MSSPs, ranging from network security controls to risk architecture. A chance elevator meeting with a mentor in Charlotte unlocked a new vision: transforming how professionals see their own expertise. Today he helps security practitioners break into leadership roles and advance their impact by owning their value before they ever walk into a room.
          </p>

          {/* Trust signals */}
          <div className={styles.trustSignals}>
            <div className={styles.signal}>
              <span className={styles.signalNumber}>10</span>
              <span className={styles.signalLabel}>Years in Enterprise<br />Cybersecurity</span>
            </div>
            <div className={styles.signal}>
              <span className={styles.signalNumber}>85%</span>
              <span className={styles.signalLabel}>Job<br />Placement Rate</span>
            </div>
            <div className={styles.signal}>
              <span className={styles.signalNumber}>$45K</span>
              <span className={styles.signalLabel}>Avg Salary Increase<br />Per Learner</span>
            </div>
          </div>
        </div>

        {/* Right column - About image with fading edges */}
        <div className={`${styles.rightColumn} col-span-5`}>
          <div className={styles.imageContainer}>
            {/* Outer glow effect */}
            <div className={styles.imageGlow} />

            {/* Main image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/AboutNate.jpeg"
              alt="Nate Butler"
              className={styles.portraitImage}
            />

            {/* Fade overlay — blends image edges into background */}
            <div className={styles.imageFade} />

            {/* Border */}
            <div className={styles.imageBorder} />
          </div>
        </div>
      </div>
    </section>
  )
}
