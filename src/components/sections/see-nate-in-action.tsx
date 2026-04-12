'use client'

import { motion, easeOut } from 'framer-motion'

export function SeeNateInAction() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easeOut },
  }

  return (
    <section className="py-20 px-6 lg:px-8 max-w-screen-2xl mx-auto">
      <motion.div {...fadeInUp} className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-white mb-4">
          See Nate in Action
        </h2>
        <p className="text-white/70 mb-12">
          Professional speaking engagement highlights and keynote samples.
        </p>

        {/* Placeholder card for demo reel */}
        <div className="backdrop-filter backdrop-blur-lg bg-[rgba(19,19,24,0.6)] border border-[rgba(0,229,255,0.2)] rounded-xl p-12 lg:p-16 min-h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-6">
              <svg
                className="w-24 h-24 mx-auto text-[#00e5ff]/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-space-grotesk font-bold text-white mb-3">
              Modern Demo Reel
            </h3>
            <p className="text-white/70 max-w-md">
              Full speaking engagements and keynote samples coming soon. A premium video showcase of
              Nate&apos;s talks on cybersecurity, strategy, and leadership.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
