import styles from './discord-community.module.css'

const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/yourserver'

export default function DiscordCommunity() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.headline}>Join Our Community</h2>
        <p className={styles.subheadline}>
          Connect with 500+ cybersecurity leaders, get exclusive insights, and network in real-time with industry peers.
        </p>
        <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className={styles.button}>
          Join Discord Server
        </a>
      </div>
    </section>
  )
}
