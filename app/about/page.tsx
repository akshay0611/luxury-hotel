import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const values = [
  {
    id: 1,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, from the quality of our accommodations to the attentiveness of our staff.",
  },
  {
    id: 2,
    title: "Personalization",
    description:
      "We believe in creating personalized experiences that cater to the unique preferences and needs of each guest.",
  },
  {
    id: 3,
    title: "Innovation",
    description:
      "We continuously seek innovative ways to enhance our services and facilities to exceed guest expectations.",
  },
  {
    id: 4,
    title: "Sustainability",
    description:
      "We are committed to sustainable practices that minimize our environmental impact while maintaining luxury standards.",
  },
]

const team = [
  {
    id: 1,
    name: "Alexandra Reynolds",
    position: "General Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 20 years of experience in luxury hospitality, Alexandra leads our team with passion and dedication to excellence.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Executive Chef",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Award-winning chef Michael brings culinary innovation and excellence to our dining experiences with his international expertise.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Director of Guest Services",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah ensures that every guest receives personalized attention and exceptional service throughout their stay.",
  },
]

const awards = [
  {
    id: 1,
    title: "Five-Star Excellence Award",
    organization: "International Hospitality Association",
    year: "2023",
  },
  {
    id: 2,
    title: "Best Luxury Hotel",
    organization: "Travel & Leisure Awards",
    year: "2022",
  },
  {
    id: 3,
    title: "Sustainable Luxury Certification",
    organization: "Green Hospitality Council",
    year: "2023",
  },
  {
    id: 4,
    title: "Culinary Excellence Award",
    organization: "Gourmet Dining Association",
    year: "2022",
  },
  {
    id: 5,
    title: "Best Spa & Wellness Experience",
    organization: "Wellness Travel Awards",
    year: "2023",
  },
  {
    id: 6,
    title: "Employer of Excellence",
    organization: "Hospitality Industry Network",
    year: "2022",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Learn about our story, our mission, and the team behind our luxury hotel experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative h-[350px] md:h-[550px] animate-fade-in-left">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Hotel History"
                fill
                className="object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>
            <div className="space-y-6 animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">Our Story</h2>
              <div className="space-y-5 text-lg md:text-xl text-gray-600 leading-relaxed">
                <p>
                  Founded in 1995, Luxury Hotel began with a vision to create an exceptional hospitality experience that combines elegant accommodations with personalized service. What started as a boutique hotel with just 20 rooms has grown into a renowned luxury destination.
                </p>
                <p>
                  Over the years, we have expanded our facilities while maintaining our commitment to excellence. Our hotel has been recognized with numerous awards for outstanding service, innovative design, and environmental sustainability.
                </p>
                <p>
                  Today, we continue to uphold the traditions that have made us successful while embracing innovation to meet the evolving needs of our guests. Our dedication to creating memorable experiences remains at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Our Mission & Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              We are guided by a clear mission and strong values that shape every aspect of our service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                To provide exceptional hospitality experiences that exceed expectations, create lasting memories, and inspire guests to return. We strive to be the benchmark for luxury accommodation and personalized service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                To be recognized globally as a leader in luxury hospitality, known for our commitment to excellence, innovation, and creating extraordinary guest experiences in every location we serve.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Our experienced leadership team is dedicated to maintaining the highest standards of hospitality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.id}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-72 w-72 mx-auto mb-6 overflow-hidden rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary font-medium mb-3 text-base md:text-lg">{member.position}</p>
                <p className="text-gray-600 text-base leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Awards & Recognition
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              We’re proud to be recognized for our commitment to excellence in hospitality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{award.title}</h3>
                </div>
                <p className="text-gray-600 mb-2 text-base">{award.organization}</p>
                <p className="text-sm text-gray-500">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
            Experience Our Hospitality
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            We invite you to experience our exceptional service and luxurious accommodations for yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Button
              size="lg"
              asChild
              className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Link href="/booking">Book Your Stay</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}