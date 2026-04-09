'use client'

import styles from './cyber-portrait.module.css'

/**
 * Cyber Portrait — High-Impact Speaker Authority Image
 *
 * Premium cyber-enhanced headshot with:
 * - Grayscale default state, full color on hover
 * - Animated cyan scan line from top to bottom
 * - Glass panel overlays: "SYSTEM ONLINE" + "BIO-METRIC LOCK"
 * - Holographic effects and scale transform on hover
 * - Glowing cyan border with soft blur
 */
export function CyberPortrait() {
  return (
    <div className={styles.portraitContainer}>
      {/* Outer glow effect */}
      <div className={styles.portraitGlow} />

      {/* Main image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/nate-headshot-hq.png"
        alt="Nate Butler — Global Command Authority"
        className={styles.portraitImage}
      />

      {/* Holographic overlay */}
      <div className={styles.holographicOverlay} />

      {/* Animated scan line */}
      <div className={styles.scanLine} />

      {/* Glass Panel: Top Left — System Status */}
      <div className={`${styles.glassPanel} ${styles.panelTopLeft}`}>
        <div className={styles.statusIndicator}>
          <div className={styles.statusDot} />
          <div className={styles.statusText}>System Online</div>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} />
        </div>
      </div>

      {/* Glass Panel: Bottom Right — Security Status */}
      <div className={`${styles.glassPanel} ${styles.panelBottomRight}`}>
        <div className={styles.securityIcon}>
          <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="none">
            <path d="M12 1L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-5zm-2 11l-3-3 1.41-1.41L10 9.17l5.59-5.59L17 5l-7 7z" />
          </svg>
          <div className={styles.biometricText}>Bio-Metric Lock</div>
        </div>
        <div className={styles.encryptedBadge}>Encrypted</div>
      </div>

      {/* Border glow */}
      <div className={styles.portraitBorder} />
    </div>
  )
}

export default CyberPortrait
