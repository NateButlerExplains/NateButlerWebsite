import styles from './footer.module.css'

const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/yourserver'
const LINKEDIN_URL = 'https://linkedin.com'
const TWITTER_URL = 'https://twitter.com'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Resources */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Resources</h3>
            <ul className={styles.links}>
              <li>
                <a href="#blog" className={styles.link}>
                  Blog & Insights
                </a>
              </li>
              <li>
                <a href="#podcast" className={styles.link}>
                  Podcast: CyberTalks
                </a>
              </li>
              <li>
                <a href="#books" className={styles.link}>
                  Books
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.links}>
              <li>
                <a href="#about" className={styles.link}>
                  About
                </a>
              </li>
              <li>
                <a href="#speaking" className={styles.link}>
                  Speaking History
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <ul className={styles.links}>
              <li>
                <a href="#privacy" className={styles.link}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className={styles.link}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="mailto:hello@natebutlertalks.com" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Follow</h3>
            <div className={styles.social}>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4.5 2C3.12 2 2 3.12 2 4.5V15.5C2 16.88 3.12 18 4.5 18H15.5C16.88 18 18 16.88 18 15.5V4.5C18 3.12 16.88 2 15.5 2H4.5ZM4.5 4H15.5C15.78 4 16 4.22 16 4.5V15.5C16 15.78 15.78 16 15.5 16H4.5C4.22 16 4 15.78 4 15.5V4.5C4 4.22 4.22 4 4.5 4ZM5.5 6C5.22 6 5 6.22 5 6.5C5 6.78 5.22 7 5.5 7C5.78 7 6 6.78 6 6.5C6 6.22 5.78 6 5.5 6ZM5 8H6V14H5V8ZM7 8H8V14H7V8ZM9 8H10V14H9V8ZM9 6C8.72 6 8.5 6.22 8.5 6.5C8.5 6.78 8.72 7 9 7C9.28 7 9.5 6.78 9.5 6.5C9.5 6.22 9.28 6 9 6Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Twitter">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18.244 2.756c.682.482 1.279 1.04 1.789 1.659-.685-.305-1.42-.508-2.191-.606.787.47 1.392 1.215 1.697 2.117-.738-.443-1.556-.743-2.427-.915.666-.736 1.066-1.701 1.066-2.78 0-2.198-1.79-4-3.995-4-2.206 0-4 1.802-4 4 0 .313.036.62.106.916-3.328-.166-6.283-1.758-8.27-4.167-.346.597-.545 1.29-.545 2.033 0 1.388.707 2.612 1.78 3.329-.657-.021-1.276-.201-1.815-.503v.05c0 1.94 1.382 3.56 3.21 3.926-.336.092-.691.142-1.057.142-.259 0-.511-.025-.758-.074.512 1.59 1.992 2.748 3.749 2.78-1.371 1.075-3.099 1.717-4.977 1.717-.324 0-.644-.02-.955-.055 1.791 1.145 3.917 1.813 6.19 1.813 7.429 0 11.487-6.144 11.487-11.487 0-.175-.004-.349-.012-.521.789-.569 1.474-1.281 2.016-2.093z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Discord">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M14.69 1.79C13.07.9 11.27.2 9.3.05c-.09 0-.16.04-.19.12-.2.39-.42.9-.58 1.3-.2-.03-.41-.05-.62-.05-2.08 0-4.1.6-5.8 1.73-1.27.8-2.29 1.88-2.96 3.16-.8 1.6-1.25 3.42-1.25 5.29 0 1.6.32 3.18.94 4.68.3.73.67 1.42 1.08 2.07-.15.45-.46 1.36-.56 1.66-.15.48.24.93.73.78 3.42-1.35 5.7-3.34 6.9-5.17 1.28.38 2.66.58 4.06.58 2.08 0 4.1-.6 5.8-1.73 1.27-.8 2.29-1.88 2.96-3.16.8-1.6 1.25-3.42 1.25-5.29 0-1.6-.32-3.18-.94-4.68-.3-.73-.67-1.42-1.08-2.07.15-.45.46-1.36.56-1.66.15-.48-.24-.93-.73-.78-3.42 1.35-5.7 3.34-6.9 5.17zm-4.59 10.62c-.73 0-1.32-.6-1.32-1.34 0-.74.59-1.34 1.32-1.34.73 0 1.32.6 1.32 1.34 0 .74-.59 1.34-1.32 1.34zm3.78-3.54c-.73 0-1.32-.6-1.32-1.34 0-.74.59-1.34 1.32-1.34.73 0 1.32.6 1.32 1.34 0 .74-.59 1.34-1.32 1.34z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Ready?</h3>
            <div className={styles.ctaButtons}>
              <a href="#book-me-now" className={styles.ctaButton}>
                Book Me Now
              </a>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaButtonSecondary}>
                Join Discord
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.divider}></div>
        <div className={styles.copyright}>
          <p>&copy; {year} Nate Butler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
