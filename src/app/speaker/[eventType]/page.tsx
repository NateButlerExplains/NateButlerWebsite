'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { motion, easeOut } from 'framer-motion'
import { KernoteHero } from '@/components/sections/keynote-hero'
import { SeeNateInAction } from '@/components/sections/see-nate-in-action'

const eventTypeContent: Record<string, { headline: string; subheadline: string }> = {
  corporate: {
    headline: 'Keynote Speaker for Corporate Events',
    subheadline: 'Executive leadership talks on GRC, AI, and cybersecurity strategy for Fortune 1000 companies.',
  },
  'executive-offsite': {
    headline: 'Keynote Speaker for Executive Offsites',
    subheadline: 'Custom keynotes for C-suite retreats focused on digital transformation and cyber resilience.',
  },
  conference: {
    headline: 'Keynote Speaker for Conferences',
    subheadline: 'Captivating keynotes for industry conferences on cybersecurity trends and risk management.',
  },
  'cyber-event': {
    headline: 'Keynote Speaker for Cyber Events',
    subheadline: 'Expert talks on emerging cybersecurity threats and strategies for security professionals.',
  },
}

const topicsData = [
  {
    title: 'GRC & Governance',
    description: 'Enterprise risk management, compliance frameworks, and digital governance strategies.',
  },
  {
    title: 'AI Security',
    description: 'Emerging AI threats, secure AI implementation, and responsible AI governance.',
  },
  {
    title: 'Cybersecurity Strategy',
    description: 'Zero-trust architecture, incident response, and building resilient security programs.',
  },
]

export default function SpeakerPage() {
  const params = useParams()
  const eventType = params.eventType as string

  // Validate eventType
  if (!eventTypeContent[eventType]) {
    notFound()
  }

  const content = eventTypeContent[eventType]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easeOut },
  }

  return (
    <>
      <KernoteHero headline={content.headline} subheadline={content.subheadline} />

      {/* Topics Section */}
      <section className="py-20 px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-white mb-4">
            Core Topics
          </h2>
          <p className="text-white/70 mb-12">
            Key themes Nate covers in every keynote engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topicsData.map((topic, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (idx + 1), duration: 0.8, ease: easeOut }}
                className="group backdrop-filter backdrop-blur-lg bg-[rgba(19,19,24,0.6)] border border-[rgba(0,229,255,0.2)] hover:border-[rgba(0,229,255,0.4)] rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(0,229,255,0.1)]"
              >
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors duration-300">
                  {topic.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <SeeNateInAction />

      {/* Calendly Embed Section */}
      <section id="booking" className="py-20 px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-white mb-4">
            Book Your Event
          </h2>
          <p className="text-white/70 mb-12">
            Schedule a consultation to discuss your event and keynote needs.
          </p>

          <div className="backdrop-filter backdrop-blur-lg bg-[rgba(19,19,24,0.6)] border border-[rgba(0,229,255,0.2)] rounded-xl p-8 lg:p-12">
            <iframe
              src="https://calendly.com/natebutler/discovery"
              width="100%"
              height="700"
              frameBorder="0"
              title="Book Nate for Your Event"
              style={{ borderRadius: '0.75rem' }}
            ></iframe>
          </div>
        </motion.div>
      </section>
    </>
  )
}
