import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/cta.jpeg"
          alt="Book your stay"
          fill
          className="object-cover transform scale-105 transition-transform duration-1000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-down">
          Ready for an Unforgettable Experience?
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up">
          Book your stay now and enjoy exclusive offers and world-class amenities. We can’t wait to welcome you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-200">
          <Button
            size="lg"
            asChild
            className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Link href="/booking">Book Now</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}