'use client'

import styles from './cyber-portrait.module.css'

/**
 * Cyber Portrait — Speaker Authority Image
 *
 * Clean, professional headshot with:
 * - No interactive hover effects
 * - Simple glowing cyan border with soft blur
 * - Minimalist design focused on the speaker
 */
export function CyberPortrait() {
  return (
    <div className={styles.portraitContainer}>
      {/* Outer glow effect */}
      <div className={styles.portraitGlow} />

      {/* Main image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Nate Hero - Main.jpeg"
        alt="Nate Butler — Cyber Speaker"
        className={styles.portraitImage}
      />

      {/* Fade overlay — blends portrait edges into background */}
      <div className={styles.portraitFade} />

      {/* Border */}
      <div className={styles.portraitBorder} />
    </div>
  )
}

export default CyberPortrait
