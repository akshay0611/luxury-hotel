"use client"

import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Hotel Exterior",
    title: "Hotel Exterior",
    description: "Front view of our luxury hotel",
    category: "exterior",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Deluxe Room",
    title: "Deluxe King Room",
    description: "Spacious room with modern amenities",
    category: "rooms",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Restaurant",
    title: "Gourmet Restaurant",
    description: "Fine dining experience",
    category: "dining",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Swimming Pool",
    title: "Infinity Pool",
    description: "Relax and enjoy the view",
    category: "amenities",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Presidential Suite",
    title: "Presidential Suite",
    description: "Our most luxurious accommodation",
    category: "rooms",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Spa Treatment Room",
    title: "Spa Treatment Room",
    description: "Rejuvenate your body and mind",
    category: "amenities",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Hotel Lobby",
    title: "Grand Lobby",
    description: "Elegant entrance and reception area",
    category: "interior",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Breakfast Buffet",
    title: "Breakfast Buffet",
    description: "Start your day with our gourmet breakfast",
    category: "dining",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Hotel Gardens",
    title: "Lush Gardens",
    description: "Beautiful landscaped gardens",
    category: "exterior",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Fitness Center",
    title: "Fitness Center",
    description: "State-of-the-art equipment",
    category: "amenities",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Executive Suite",
    title: "Executive Suite",
    description: "Perfect for business travelers",
    category: "rooms",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Bar Lounge",
    title: "Bar & Lounge",
    description: "Enjoy cocktails and conversation",
    category: "dining",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Explore our beautiful hotel through our collection of photos showcasing rooms, amenities, and surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-white border-y border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {["all", "rooms", "dining", "amenities", "exterior"].map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category === "all"
                  ? "All Photos"
                  : category === "rooms"
                  ? "Rooms & Suites"
                  : category === "dining"
                  ? "Dining"
                  : category === "amenities"
                  ? "Amenities"
                  : "Exterior"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
            Take a Virtual Tour
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            Can’t visit in person? Explore our hotel with our immersive virtual tour and experience our luxurious accommodations and facilities.
          </p>
          <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-white text-base font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Start Virtual Tour
          </button>
        </div>
      </section>
    </>
  )
}