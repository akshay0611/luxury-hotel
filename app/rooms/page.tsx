import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Users, Wifi, Coffee, Tv, Bath } from "lucide-react"

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    image: "/assets/room_1.jpeg",
    tag: null,
    rating: 4.5,
    capacity: 2,
    size: 28,
    description: "Comfortable room with all essential amenities for a pleasant stay.",
    price: 149,
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="h-3 w-3 mr-1" /> },
      { name: "TV", icon: <Tv className="h-3 w-3 mr-1" /> },
      { name: "Coffee Maker", icon: <Coffee className="h-3 w-3 mr-1" /> },
    ],
  },
  {
    id: 2,
    name: "Deluxe King Room",
    image: "/assets/room_2.jpeg",
    tag: "Popular",
    rating: 4.8,
    capacity: 2,
    size: 35,
    description: "Spacious room with king-sized bed, modern amenities, and city view.",
    price: 199,
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="h-3 w-3 mr-1" /> },
      { name: "TV", icon: <Tv className="h-3 w-3 mr-1" /> },
      { name: "Coffee Maker", icon: <Coffee className="h-3 w-3 mr-1" /> },
      { name: "Bathtub", icon: <Bath className="h-3 w-3 mr-1" /> },
    ],
  },
  {
    id: 3,
    name: "Premium Suite",
    image: "/assets/room_3.jpeg",
    tag: "Luxury",
    rating: 4.9,
    capacity: 3,
    size: 55,
    description: "Luxurious suite with separate living area and panoramic views.",
    price: 349,
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="h-3 w-3 mr-1" /> },
      { name: "TV", icon: <Tv className="h-3 w-3 mr-1" /> },
      { name: "Coffee Maker", icon: <Coffee className="h-3 w-3 mr-1" /> },
      { name: "Bathtub", icon: <Bath className="h-3 w-3 mr-1" /> },
    ],
  },
  {
    id: 4,
    name: "Family Room",
    image: "/assets/room_4.jpeg",
    tag: null,
    rating: 4.7,
    capacity: 4,
    size: 45,
    description: "Perfect for families with two queen beds and extra space.",
    price: 279,
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="h-3 w-3 mr-1" /> },
      { name: "TV", icon: <Tv className="h-3 w-3 mr-1" /> },
      { name: "Coffee Maker", icon: <Coffee className="h-3 w-3 mr-1" /> },
    ],
  },
  {
    id: 5,
    name: "Executive Suite",
    image: "/assets/room_5.jpeg",
    tag: "Business",
    rating: 4.8,
    capacity: 2,
    size: 50,
    description: "Elegant suite with workspace and premium amenities for business travelers.",
    price: 299,
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="h-3 w-3 mr-1" /> },
      { name: "TV", icon: <Tv className="h-3 w-3 mr-1" /> },
      { name: "Coffee Maker", icon: <Coffee className="h-3 w-3 mr-1" /> },
      { name: "Bathtub", icon: <Bath className="h-3 w-3 mr-1" /> },
    ],
  },
  {
    id: 6,
    name: "Presidential Suite",
    image: "/assets/room_6.jpeg",
    tag: "Luxury",
    rating: 5.0,
    capacity: 4,
    size: 90,
    description: "Our most luxurious accommodation with exceptional amenities and service.",
    price: 599,
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="h-3 w-3 mr-1" /> },
      { name: "TV", icon: <Tv className="h-3 w-3 mr-1" /> },
      { name: "Coffee Maker", icon: <Coffee className="h-3 w-3 mr-1" /> },
      { name: "Bathtub", icon: <Bath className="h-3 w-3 mr-1" /> },
    ],
  },
]

export default function RoomsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Rooms & Suites
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Discover our collection of luxurious accommodations designed for comfort and relaxation.
            </p>
          </div>
        </div>
      </section>

      {/* Room Filters */}
      <section className="py-8 bg-white border-y border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All Rooms", "Standard Rooms", "Deluxe Rooms", "Suites", "Family Rooms"].map((filter, index) => (
              <Button
                key={index}
                variant="outline"
                className="rounded-full px-6 py-2 text-base font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
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
                  {room.tag && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                      {room.tag}
                    </div>
                  )}
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
                    <span className="mx-2">•</span>
                    <span className="text-base">{room.size} m²</span>
                  </div>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">{room.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        {amenity.icon}
                        <span className="ml-1">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-gray-900">
                      ${room.price}{" "}
                      <span className="text-base font-normal text-gray-500">/night</span>
                    </div>
                    <Button
                      asChild
                      className="bg-primary text-white font-semibold px-5 py-2 rounded-full hover:bg-primary/90 transition-all duration-300"
                    >
                      <Link href={`/booking?room=${room.id}`}>Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Need Help Choosing?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up">
              Our team is ready to assist you in finding the perfect accommodation for your needs. Contact us for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Button
                asChild
                className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Link href="/booking">Check Availability</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}