import { HeroSection } from '@/components/hero/hero-section'
import AboutSection from '@/components/sections/about-section'
import AboutCinematicSection from '@/components/sections/about-cinematic-section'
import BookMeNow from '@/components/sections/book-me-now'
import DiscordCommunity from '@/components/sections/discord-community'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <>
      <main className="overflow-hidden bg-surface">
        <HeroSection />
        <AboutSection />
        <AboutCinematicSection />
        <BookMeNow />
        <DiscordCommunity />
      </main>
      <Footer />
    </>
  )
}
