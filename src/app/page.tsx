import { HeroSection } from '@/components/hero/hero-section'
import AboutSection from '@/components/sections/about-section'
import BookMeNow from '@/components/sections/book-me-now'
import DiscordCommunity from '@/components/sections/discord-community'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden bg-surface pb-16 md:pb-0">
        <HeroSection />
        <AboutSection />
        <BookMeNow />
        <DiscordCommunity />
      </main>
      <Footer />
    </>
  )
}
