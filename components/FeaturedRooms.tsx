import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Users } from "lucide-react"

const featuredRooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    image: "/assets/featuredroom_1.jpeg",
    rating: 4.8,
    capacity: 2,
    description: "Spacious room with king-sized bed, modern amenities, and city view.",
    price: 199,
  },
  {
    id: 2,
    name: "Premium Suite",
    image: "/assets/featuredroom_2.jpeg",
    rating: 4.9,
    capacity: 3,
    description: "Luxurious suite with separate living area and panoramic views.",
    price: 349,
  },
  {
    id: 3,
    name: "Family Room",
    image: "/assets/featuredroom_3.jpeg",
    rating: 4.7,
    capacity: 4,
    description: "Perfect for families with two queen beds and extra space.",
    price: 279,
  },
]

export default function FeaturedRooms() {
  return (
    <section className="section-padding bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in-down">
            Our Featured Rooms & Suites
          </h2>
          <p className="paragraph max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            Indulge in our elegantly designed accommodations, crafted for maximum comfort and luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-gray-100"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-72">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{room.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-primary fill-current mr-1" />
                    <span className="text-base font-medium text-gray-700">{room.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="text-base">{room.capacity} Guests</span>
                </div>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">{room.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold text-gray-900">
                    ${room.price}{" "}
                    <span className="text-base font-normal text-gray-500">/night</span>
                  </div>
                  <Button
                    variant="outline"
                    asChild
                    className="border-primary text-primary font-semibold px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Link href={`/rooms/${room.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300"
          >
            <Link href="/rooms">View All Rooms</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}