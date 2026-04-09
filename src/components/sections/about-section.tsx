'use client'

import styles from './about-section.module.css'

export default function AboutSection() {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        {/* Left column */}
        <div className={styles.leftColumn}>
          <h2 className={styles.headline}>About Nate</h2>

          <p className={styles.bio}>
            Nate Butler is a cybersecurity strategist and speaker with 15+ years of experience in enterprise risk management, AI governance, and digital resilience. He&apos;s trained 500+ industry leaders and delivered keynotes at 40+ major conferences, positioning organizations for success in an AI-driven threat landscape.
          </p>

          {/* Trust signals */}
          <div className={styles.trustSignals}>
            <div className={styles.signal}>
              <span className={styles.signalNumber}>15+</span>
              <span className={styles.signalLabel}>Years in Cybersecurity</span>
            </div>
            <div className={styles.signal}>
              <span className={styles.signalNumber}>500+</span>
              <span className={styles.signalLabel}>Industry Leaders Trained</span>
            </div>
            <div className={styles.signal}>
              <span className={styles.signalNumber}>40+</span>
              <span className={styles.signalLabel}>Keynote Speaking Events</span>
            </div>
          </div>
        </div>

        {/* Right column - empty for asymmetry */}
        <div className={styles.rightColumn}></div>
      </div>
    </section>
  )
}
