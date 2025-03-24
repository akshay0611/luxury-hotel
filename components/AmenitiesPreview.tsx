import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Wifi, Dumbbell, Utensils } from "lucide-react"

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

export default function AmenitiesPreview() {
  return (
    <section className="section-padding py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in-down">
            Hotel Amenities & Services
          </h2>
          <p className="paragraph max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            Explore our premium amenities crafted to ensure your stay is both comfortable and unforgettable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 text-center transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 transform transition-transform duration-300 hover:scale-110">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{amenity.name}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            asChild
            className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Link href="/amenities">Explore All Amenities</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}