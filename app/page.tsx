import HeroSection from "../components/HeroSection"
import WelcomeSection from "../components/WelcomeSection"
import FeaturedRooms from "../components/FeaturedRooms"
import AmenitiesPreview from "../components/AmenitiesPreview"
import Testimonials from "../components/Testimonials"
import CTASection from "../components/CTASection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <FeaturedRooms />
      <AmenitiesPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}