import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Users, Wifi, Coffee, Tv, Bath } from "lucide-react"

export default function RoomsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Rooms & Suites</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our collection of luxurious accommodations designed for comfort and relaxation.
            </p>
          </div>
        </div>
      </section>

      {/* Room Filters */}
      <section className="py-8 bg-white border-y">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="rounded-full">
              All Rooms
            </Button>
            <Button variant="outline" className="rounded-full">
              Standard Rooms
            </Button>
            <Button variant="outline" className="rounded-full">
              Deluxe Rooms
            </Button>
            <Button variant="outline" className="rounded-full">
              Suites
            </Button>
            <Button variant="outline" className="rounded-full">
              Family Rooms
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-64">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                  {room.tag && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded">
                      {room.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{room.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary fill-current" />
                      <span className="ml-1 text-sm font-medium">{room.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{room.capacity} Guests</span>
                    <span className="mx-2">•</span>
                    <span>{room.size} m²</span>
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-500">
                        {amenity.icon}
                        <span className="ml-1">{amenity.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">
                      ${room.price} <span className="text-sm font-normal text-gray-500">/night</span>
                    </div>
                    <Button asChild>
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
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-muted-foreground mb-8">
              Our team is ready to assist you in finding the perfect accommodation for your needs. Contact us for
              personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/booking">Check Availability</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Sample Data
const rooms = [
  {
    id: 1,
    name: "Standard Room",
    image: "/placeholder.svg?height=300&width=500",
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
    image: "/placeholder.svg?height=300&width=500",
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
    image: "/placeholder.svg?height=300&width=500",
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
    image: "/placeholder.svg?height=300&width=500",
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
    image: "/placeholder.svg?height=300&width=500",
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
    image: "/placeholder.svg?height=300&width=500",
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

