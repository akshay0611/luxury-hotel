import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.webp"
          alt="Luxury Hotel"
          fill
          priority
          className="object-cover transform scale-105 transition-transform duration-1000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70" />
      </div>
      <div className="relative z-10 text-center text-white w-full max-w-6xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-down">
          Experience Luxury & Comfort
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up">
          Welcome to Luxury Hotel, where exceptional service meets unparalleled comfort. Your perfect getaway awaits.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-white text-black font-semibold px-10 py-4 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in-up animation-delay-200"
        >
          <Link href="/booking">Book Now</Link>
        </Button>
      </div>
    </section>
  )
}