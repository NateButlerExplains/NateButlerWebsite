import styles from './about-cinematic-section.module.css'

export default function AboutCinematicSection() {
  return (
    <section className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 className={styles.headline}>Commanding the Intersection of Risk, AI, and Defense</h2>
        <p className={styles.lead}>
          With decades of experience protecting Fortune 500 companies and global enterprises, I translate complex cyber, GRC,
          and artificial intelligence challenges into clear, actionable strategies that executives and boards can understand and act
          upon.
        </p>
        <a href="#book-me-now" className={styles.ctaButton}>
          Book Nate Butler for Your Next Event
        </a>
      </div>
    </section>
  )
}
