import styles from './footer.module.css'

const SOCIAL_LINKS = {
  tiktok: 'https://tiktok.com',
  linkedin: 'https://linkedin.com',
  youtube: 'https://youtube.com',
  twitch: 'https://twitch.tv',
}

const socialIcons = [
  {
    name: 'TikTok',
    url: SOCIAL_LINKS.tiktok,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: SOCIAL_LINKS.linkedin,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: SOCIAL_LINKS.youtube,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Twitch',
    url: SOCIAL_LINKS.twitch,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 2H2v17h6v3l4-3h5V7a2 2 0 0 0-2-2zm11-7H15v8h-4V2h7v2z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Company */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Nate Butler</h3>
            <ul className={styles.links}>
              <li>
                <a href="#about" className={styles.link}>
                  About
                </a>
              </li>
              <li>
                <a href="#coaching" className={styles.link}>
                  Coaching
                </a>
              </li>
              <li>
                <a href="#booking" className={styles.link}>
                  Speaking Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Resources</h3>
            <ul className={styles.links}>
              <li>
                <a href="#books" className={styles.link}>
                  Books
                </a>
              </li>
              <li>
                <a href="#podcast" className={styles.link}>
                  Podcast
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
            </ul>
          </div>

          {/* Social */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Follow</h3>
            <div className={styles.social}>
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
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
