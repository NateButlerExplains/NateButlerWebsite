'use client'

import { useEffect } from 'react'
import styles from './book-me-now.module.css'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/natebutlerexplains/30min'

// Dark mode theme parameters for Calendly
const CALENDLY_PARAMS = new URLSearchParams({
  hide_event_type_details: '1',
  background_color: '0d0d12',
  text_color: 'ffffff',
  primary_color: '00e5ff',
}).toString()

export default function BookMeNow() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section className={styles.container} id="booking">
      <div className={styles.wrapper}>
        <h2 className={styles.headline}>Book Discovery Call</h2>
        <p className={styles.subheadline}>
          Pick a time that works for you. Your booking syncs directly with my calendar.
        </p>

        {/* Calendly inline widget — dark mode customized */}
        <div
          className="calendly-inline-widget"
          data-url={`${CALENDLY_URL}?${CALENDLY_PARAMS}`}
          style={{
            minWidth: '320px',
            height: '1000px',
            marginTop: '2rem',
          }}
        />
      </div>
    </section>
  )
}
