'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface overflow-hidden">
      {/* Placeholder Hero */}
      <div className="relative h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="display-lg mb-4 text-primary">
            Nate Butler
          </h1>
          <p className="body-lg text-on-surface/80 mb-8">
            Global Command Authority in GRC, AI & Cybersecurity
          </p>
          <p className="text-sm text-on-surface/50">
            Building premium experience — Hero section with commanding animation coming soon
          </p>
        </motion.div>

        {/* Background gradient effect (placeholder) */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute inset-0 scanlines" />
        </div>
      </div>
    </main>
  )
}
