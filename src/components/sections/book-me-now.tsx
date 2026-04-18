'use client'

import { useEffect } from 'react'
import styles from './book-me-now.module.css'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/natebutlerexplains/30min'

// Dark mode theme parameters for Calendly
const CALENDLY_PARAMS = new URLSearchParams({
  hide_event_type_details: '1',
  hide_gdpr_banner: '0',
  background_color: '0d0d12',
  text_color: 'ffffff',
  primary_color: '00e5ff',
  secondary_color: '00e5ff',
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

        {/* Calendly inline widget — dark mode customized, responsive */}
        <div
          className={`calendly-inline-widget ${styles.calendlyContainer}`}
          data-url={`${CALENDLY_URL}?${CALENDLY_PARAMS}`}
        />
        <style>{`
          /* Calendly widget container */
          .calendly-inline-widget {
            width: 100% !important;
            height: auto !important;
            padding: 0 !important;
            margin: 0 !important;
            background: transparent !important;
            background-color: transparent !important;
            overflow: hidden !important;
            border: none !important;
            display: block !important;
          }

          .calendly-inline-widget > * {
            width: 100% !important;
            height: auto !important;
            padding: 0 !important;
            margin: 0 !important;
            background: transparent !important;
            background-color: transparent !important;
            border: none !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }

          .calendly-inline-widget > div {
            display: block !important;
            width: 100% !important;
            overflow: hidden !important;
          }

          .calendly-inline-widget > div > * {
            width: 100% !important;
            height: auto !important;
            padding: 0 !important;
            margin: 0 !important;
            background: transparent !important;
            background-color: transparent !important;
            border: none !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }

          /* Calendly iframe — responsive, no scroll */
          .calendly-inline-widget iframe {
            width: 100% !important;
            height: auto !important;
            min-height: 630px !important;
            padding: 0 !important;
            margin: 0 !important;
            background-color: #0d0d12 !important;
            border: none !important;
            display: block !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }

          @media (min-width: 768px) {
            .calendly-inline-widget iframe {
              min-height: 700px !important;
            }
          }

          /* Desktop: center and constrain calendar width */
          @media (min-width: 1024px) {
            .calendly-inline-widget {
              max-width: 650px !important;
              margin: 0 auto !important;
            }

            .calendly-inline-widget > * {
              max-width: 650px !important;
              margin: 0 auto !important;
            }

            .calendly-inline-widget > div {
              max-width: 650px !important;
              margin: 0 auto !important;
            }

            .calendly-inline-widget > div > * {
              max-width: 650px !important;
              margin: 0 auto !important;
            }

            .calendly-inline-widget iframe {
              min-height: 820px !important;
              max-width: 650px !important;
              margin: 0 auto !important;
            }
          }

          /* Mobile: remove white sliver at bottom */
          @media (max-width: 767px) {
            .calendly-inline-widget iframe {
              margin-bottom: -2px !important;
            }
          }

          /* Dark mode styling for GDPR/cookie banner */
          iframe[src*="calendly"] {
            color-scheme: dark !important;
          }
          .calendly-gdpr-banner {
            background-color: #0d0d12 !important;
            color: #ffffff !important;
            border-top: 1px solid rgba(0, 229, 255, 0.2) !important;
          }
          .calendly-gdpr-banner button {
            background-color: #00e5ff !important;
            color: #0d0d12 !important;
          }

        `}</style>
      </div>
    </section>
  )
}
