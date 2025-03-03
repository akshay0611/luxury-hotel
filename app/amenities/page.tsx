import Image from "next/image"
import { Wifi, Coffee, Dumbbell, Utensils, Car, Tv } from "lucide-react"

export default function AmenitiesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Amenities & Services</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the exceptional amenities and services that make your stay with us truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Main Amenities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Amenity: Restaurant */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Fine Dining Experience</h2>
              <p className="text-muted-foreground mb-6">
                Our gourmet restaurant offers an exquisite dining experience with a menu crafted by award-winning chefs.
                Enjoy international cuisine made with locally sourced ingredients in an elegant atmosphere.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Breakfast: 6:30 AM - 10:30 AM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Lunch: 12:00 PM - 2:30 PM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Dinner: 6:00 PM - 10:30 PM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Room service available 24/7</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] md:h-[400px] order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Restaurant"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenity: Spa */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image src="/placeholder.svg?height=400&width=600" alt="Spa" fill className="object-cover rounded-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Spa & Wellness Center</h2>
              <p className="text-muted-foreground mb-6">
                Rejuvenate your body and mind at our luxurious spa and wellness center. Our skilled therapists offer a
                range of treatments designed to relax, refresh, and revitalize.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Massage therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Facial treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Body scrubs and wraps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sauna and steam room</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Yoga and meditation classes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenity: Pool */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Swimming Pool & Lounge</h2>
              <p className="text-muted-foreground mb-6">
                Take a refreshing dip in our temperature-controlled swimming pool or relax on the comfortable loungers
                while enjoying poolside service. The perfect way to unwind during your stay.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Indoor and outdoor pools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Poolside bar service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Towel service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Children's pool area</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] md:h-[400px] order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Swimming Pool"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We offer a range of additional services to make your stay more comfortable and convenient.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.details && (
                  <ul className="text-sm text-gray-600">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start mb-1">
                        <span className="text-primary mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Sample Data
const amenities = [
  {
    id: 1,
    name: "High-Speed WiFi",
    description: "Complimentary high-speed internet access throughout the property for all guests.",
    icon: <Wifi className="h-8 w-8" />,
  },
  {
    id: 2,
    name: "Gourmet Restaurant",
    description: "Fine dining experience with international cuisine prepared by award-winning chefs.",
    icon: <Utensils className="h-8 w-8" />,
  },
  {
    id: 3,
    name: "Spa & Wellness",
    description: "Rejuvenate with our range of spa treatments and wellness programs.",
    icon: <Coffee className="h-8 w-8" />,
  },
  {
    id: 4,
    name: "Fitness Center",
    description: "State-of-the-art equipment and personal trainers available 24/7.",
    icon: <Dumbbell className="h-8 w-8" />,
  },
  {
    id: 5,
    name: "Room Service",
    description: "24-hour in-room dining with a wide selection of food and beverages.",
    icon: <Utensils className="h-8 w-8" />,
  },
  {
    id: 6,
    name: "Business Center",
    description: "Fully equipped business center with meeting rooms and services.",
    icon: <Tv className="h-8 w-8" />,
  },
  {
    id: 7,
    name: "Concierge Service",
    description: "Personalized assistance for all your needs during your stay.",
    icon: <Coffee className="h-8 w-8" />,
  },
  {
    id: 8,
    name: "Valet Parking",
    description: "Convenient valet parking service for all hotel guests.",
    icon: <Car className="h-8 w-8" />,
  },
]

const additionalServices = [
  {
    id: 1,
    name: "Airport Transfer",
    description: "Comfortable and convenient transportation between the hotel and airport.",
    details: ["Available 24/7", "Luxury vehicles", "Professional drivers", "Advance booking required"],
  },
  {
    id: 2,
    name: "Laundry & Dry Cleaning",
    description: "Professional laundry and dry cleaning services for guests.",
    details: ["Same-day service available", "Express service option", "Eco-friendly cleaning products"],
  },
  {
    id: 3,
    name: "Childcare Services",
    description: "Professional childcare services for families traveling with children.",
    details: [
      "Qualified childcare professionals",
      "Fun activities for different age groups",
      "Advance booking required",
    ],
  },
  {
    id: 4,
    name: "Currency Exchange",
    description: "Convenient currency exchange service for international guests.",
    details: ["Competitive exchange rates", "Multiple currencies available", "Available at the front desk"],
  },
  {
    id: 5,
    name: "Tour & Excursion Planning",
    description: "Customized tour planning to explore local attractions and experiences.",
    details: ["Local expert guides", "Private and group tours available", "Transportation arrangements"],
  },
  {
    id: 6,
    name: "Special Occasions",
    description: "Special arrangements for birthdays, anniversaries, and other celebrations.",
    details: ["Custom cake orders", "Room decorations", "Special dining arrangements", "Photography services"],
  },
]

