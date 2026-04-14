import { HeroSection } from '@/components/hero/hero-section'
import { SpecialGuestSection } from '@/components/sections/special-guest-section'
import { FeaturedOn } from '@/components/sections/featured-on'
import MobileSpecialGuest from '@/components/sections/mobile-special-guest'
import AboutSection from '@/components/sections/about-section'
import BookMeNow from '@/components/sections/book-me-now'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <>
      <main className="relative z-[1] overflow-x-hidden bg-surface pb-16 md:pb-0">
        <HeroSection />
        <FeaturedOn />
        <AboutSection />
        <MobileSpecialGuest />
        <SpecialGuestSection />
        <BookMeNow />
      </main>
      <Footer />
    </>
  )
}
