import Image from "next/image"
import { Wifi, Coffee, Dumbbell, Utensils, Car, Tv } from "lucide-react"

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

export default function AmenitiesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Amenities & Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Discover the exceptional amenities and services that make your stay truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Main Amenities */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Featured Amenity: Restaurant */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                Fine Dining Experience
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Our gourmet restaurant offers an exquisite dining experience with a menu crafted by award-winning chefs. Enjoy international cuisine made with locally sourced ingredients in an elegant atmosphere.
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                {["Breakfast: 6:30 AM - 10:30 AM", "Lunch: 12:00 PM - 2:30 PM", "Dinner: 6:00 PM - 10:30 PM", "Room service available 24/7"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[350px] md:h-[450px] order-1 md:order-2 animate-fade-in-right">
              <Image
                src="/assets/amenities_1.jpeg"
                alt="Restaurant"
                fill
                className="object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenity: Spa */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative h-[350px] md:h-[450px] animate-fade-in-left">
              <Image
                src="/assets/amenities_2.jpeg"
                alt="Spa"
                fill
                className="object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>
            <div className="space-y-6 animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                Spa & Wellness Center
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Rejuvenate your body and mind at our luxurious spa and wellness center. Our skilled therapists offer a range of treatments designed to relax, refresh, and revitalize.
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                {["Massage therapy", "Facial treatments", "Body scrubs and wraps", "Sauna and steam room", "Yoga and meditation classes"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenity: Pool */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                Swimming Pool & Lounge
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Take a refreshing dip in our temperature-controlled swimming pool or relax on the comfortable loungers while enjoying poolside service. The perfect way to unwind during your stay.
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                {["Indoor and outdoor pools", "Poolside bar service", "Towel service", "Children's pool area"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[350px] md:h-[450px] order-1 md:order-2 animate-fade-in-right">
              <Image
                src="/assets/amenities_3.jpeg"
                alt="Swimming Pool"
                fill
                className="object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Additional Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              We offer a range of additional services to make your stay more comfortable and convenient.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">{service.description}</p>
                {service.details && (
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
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