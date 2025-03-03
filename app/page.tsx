import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Users, Coffee, Wifi, Dumbbell, Utensils } from "lucide-react"

export default function Home() {
  return (
    <>
     {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center w-full">
  <div className="absolute inset-0 z-0">
    <Image
        src="/assets/hero_section.avif" // Ensure the image is inside the "public/assets" directory
      alt="Luxury Hotel"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>
  <div className="relative z-10 text-center text-white w-full max-w-5xl mx-auto px-4 md:px-6">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Experience Luxury & Comfort</h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
      Welcome to Luxury Hotel, where exceptional service meets unparalleled comfort. Your perfect getaway awaits.
    </p>
    <Button size="lg" asChild>
      <Link href="/booking">Book Now</Link>
    </Button>
  </div>
</section>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Welcome to Luxury Hotel & Resort</h2>
              <p className="paragraph mb-6">
                Nestled in a prime location, our hotel offers a perfect blend of elegance, comfort, and world-class
                service. Whether you're traveling for business or pleasure, we provide an unforgettable experience with
                our luxurious accommodations and exceptional amenities.
              </p>
              <p className="paragraph mb-8">
                Our dedicated staff is committed to ensuring your stay exceeds expectations. From the moment you arrive
                until your departure, we strive to create memorable moments and personalized experiences for each guest.
              </p>
              <Button asChild>
                <Link href="/about">Discover More</Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
            <Image
  src="/assets/welcome_section.jpg" // Ensure the image is inside the "public/assets" directory
  alt="Hotel Interior"
  fill
  className="object-cover rounded-lg"
/>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Featured Rooms & Suites</h2>
            <p className="paragraph max-w-3xl mx-auto">
              Indulge in our spacious and elegantly designed accommodations, each crafted to provide maximum comfort and
              luxury.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-64">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
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
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">
                      ${room.price} <span className="text-sm font-normal text-gray-500">/night</span>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href={`/rooms/${room.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Hotel Amenities & Services</h2>
            <p className="paragraph max-w-3xl mx-auto">
              Enjoy our wide range of premium amenities designed to make your stay comfortable and memorable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{amenity.name}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/amenities">Explore All Amenities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">What Our Guests Say</h2>
            <p className="paragraph max-w-3xl mx-auto">
              Read testimonials from guests who have experienced our hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-primary fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Book your stay" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for an Unforgettable Experience?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Book your stay now and enjoy exclusive offers and amenities. We look forward to welcoming you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

// Sample Data
const featuredRooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.8,
    capacity: 2,
    description: "Spacious room with king-sized bed, modern amenities, and city view.",
    price: 199,
  },
  {
    id: 2,
    name: "Premium Suite",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.9,
    capacity: 3,
    description: "Luxurious suite with separate living area and panoramic views.",
    price: 349,
  },
  {
    id: 3,
    name: "Family Room",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.7,
    capacity: 4,
    description: "Perfect for families with two queen beds and extra space.",
    price: 279,
  },
]

const amenities = [
  {
    id: 1,
    name: "Gourmet Restaurant",
    description: "Fine dining experience with international cuisine prepared by award-winning chefs.",
    icon: <Utensils className="h-6 w-6" />,
  },
  {
    id: 2,
    name: "Spa & Wellness",
    description: "Rejuvenate with our range of spa treatments and wellness programs.",
    icon: <Coffee className="h-6 w-6" />,
  },
  {
    id: 3,
    name: "Fitness Center",
    description: "State-of-the-art equipment and personal trainers available.",
    icon: <Dumbbell className="h-6 w-6" />,
  },
  {
    id: 4,
    name: "High-Speed WiFi",
    description: "Complimentary high-speed internet access throughout the property.",
    icon: <Wifi className="h-6 w-6" />,
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Our stay was absolutely perfect. The staff went above and beyond to make us feel welcome. The room was immaculate and the amenities were top-notch.",
  },
  {
    id: 2,
    name: "David Chen",
    location: "London, UK",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "Excellent service and beautiful rooms. The restaurant offered delicious food and the spa was very relaxing. Would definitely recommend.",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    location: "Madrid, Spain",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "We had a wonderful anniversary stay. The attention to detail was impressive and the staff made our celebration truly special.",
  },
]