'use client'

import { motion, easeOut } from 'framer-motion'
import Footer from '@/components/footer/footer'

const books = [
  {
    title: 'Breaking Into Cybersecurity',
    subtitle: 'Your Path to a High-Impact Career',
    description: 'A comprehensive guide for aspiring security professionals looking to break into the field and accelerate their career growth.',
    image: '/images/book1.jpg',
    cta: 'Learn More',
    link: '#',
  },
  {
    title: 'Leading Through Digital Transformation',
    subtitle: 'Enterprise Risk & Resilience',
    description: 'Strategic insights for executives navigating digital transformation, risk management, and building resilient organizations.',
    image: '/images/book2.jpg',
    cta: 'Learn More',
    link: '#',
  },
  {
    title: 'The AI Security Handbook',
    subtitle: 'Governance, Risk & Compliance',
    description: 'Essential guidance on implementing secure AI systems, managing emerging threats, and ensuring responsible AI governance.',
    image: '/images/book3.jpg',
    cta: 'Learn More',
    link: '#',
  },
]

export default function BooksPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: easeOut },
  }

  return (
    <>
      <main className="relative z-[1] overflow-x-hidden bg-surface">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-6 lg:px-8 py-20">
          <motion.div {...fadeInUp} className="max-w-screen-2xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold text-white mb-6">
              Nate's Books
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Strategic insights and practical guidance for cybersecurity professionals, leaders, and organizations navigating digital transformation.
            </p>
          </motion.div>
        </section>

        {/* Books Grid */}
        <section className="py-20 px-6 lg:px-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (idx + 1), duration: 0.8, ease: easeOut }}
                className="group flex flex-col"
              >
                {/* Book Cover */}
                <div className="mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-[rgba(0,229,255,0.2)] aspect-[3/4] flex items-center justify-center group-hover:border-[rgba(0,229,255,0.4)] transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-[#700000ff] to-[#4D7FFF] flex items-center justify-center">
                    <div className="text-center text-white/80">
                      <p className="font-space-grotesk font-bold text-sm">BOOK COVER</p>
                      <p className="text-xs text-white/60 mt-2">Coming Soon</p>
                    </div>
                  </div>
                </div>

                {/* Book Info */}
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="text-sm text-[#00e5ff] mb-3 font-semibold">
                  {book.subtitle}
                </p>
                <p className="text-white/70 mb-6 flex-grow">
                  {book.description}
                </p>

                {/* CTA Button */}
                <a
                  href={book.link}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg font-space-grotesk font-bold uppercase tracking-wider text-xs text-slate-900 transition-all duration-300 bg-gradient-to-r from-[#00e5ff] to-[#4D7FFF] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:-translate-y-1"
                >
                  {book.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-6 lg:px-8 max-w-screen-2xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="backdrop-filter backdrop-blur-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-[rgba(0,229,255,0.2)] rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold text-white mb-4">
              Ready to Level Up?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Get personalized coaching and accelerate your cybersecurity career with expert guidance tailored to your goals.
            </p>
            <a
              href="https://nate.kashboxcoaching.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-space-grotesk font-bold uppercase tracking-widest text-sm text-slate-900 transition-all duration-300 bg-gradient-to-r from-[#00e5ff] to-[#4D7FFF] hover:shadow-[0_0_40px_rgba(0,229,255,0.75)] hover:-translate-y-1"
            >
              Learn About Coaching
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
