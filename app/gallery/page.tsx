"use client"

import { useState } from "react"
import Image from "next/image"

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our beautiful hotel through our collection of photos showcasing our rooms, amenities, and
              surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-white border-y">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "all" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setActiveCategory("rooms")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "rooms" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Rooms & Suites
            </button>
            <button
              onClick={() => setActiveCategory("dining")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "dining" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Dining
            </button>
            <button
              onClick={() => setActiveCategory("amenities")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "amenities" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Amenities
            </button>
            <button
              onClick={() => setActiveCategory("exterior")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "exterior" ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Exterior
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-medium">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
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
          <h2 className="text-3xl font-bold mb-4">Take a Virtual Tour</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Can't visit in person? Explore our hotel with our immersive virtual tour and get a feel for our luxurious
            accommodations and facilities.
          </p>
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition-colors">
            Start Virtual Tour
          </button>
        </div>
      </section>
    </>
  )
}

// Sample Data
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

