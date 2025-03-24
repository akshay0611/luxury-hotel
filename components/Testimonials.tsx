import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "/assets/testimonial_1.jpeg",
    rating: 5,
    text: "Our stay was absolutely perfect. The staff went above and beyond to make us feel welcome. The room was immaculate and the amenities were top-notch.",
  },
  {
    id: 2,
    name: "David Chen",
    location: "London, UK",
    avatar: "/assets/testimonial_2.jpeg",
    rating: 4,
    text: "Excellent service and beautiful rooms. The restaurant offered delicious food and the spa was very relaxing. Would definitely recommend.",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    location: "Madrid, Spain",
    avatar: "/assets/testimonial_3.jpeg",
    rating: 5,
    text: "We had a wonderful anniversary stay. The attention to detail was impressive and the staff made our celebration truly special.",
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-down">
            What Our Guests Say
          </h2>
          <p className="paragraph max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            Discover the experiences of guests who have enjoyed our exceptional hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-primary fill-current" : "text-gray-300"} transition-transform duration-300 hover:scale-110`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-base md:text-lg leading-relaxed font-light">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}