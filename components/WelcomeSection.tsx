import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WelcomeSection() {
  return (
    <section className="section-padding bg-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <h2 className="heading-lg text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Welcome to Luxury Hotel & Resort
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Nestled in a prime location, our hotel offers a perfect blend of elegance, comfort, and world-class
              service. Whether you’re traveling for business or pleasure, we provide an unforgettable experience with
              our luxurious accommodations and exceptional amenities.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Our dedicated staff is committed to ensuring your stay exceeds expectations. From the moment you arrive
              until your departure, we strive to create memorable moments and personalized experiences for each guest.
            </p>
            <Button
              asChild
              className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md"
            >
              <Link href="/about">Discover More</Link>
            </Button>
          </div>
          <div className="relative h-[400px] md:h-[550px] animate-fade-in-right">
            <Image
              src="/assets/welcome.jpeg"
              alt="Hotel Interior"
              fill
              className="object-cover rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}