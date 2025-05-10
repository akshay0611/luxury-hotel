"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Amenities", href: "/amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname() // Get current path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md"
          : "bg-gradient-to-b from-black/70 to-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className={cn(
              "text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
              isScrolled ? "text-gray-900" : "text-white",
              "hover:text-primary"
            )}
          >
            LUXURY<span className="text-primary">HOTEL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-all duration-300 ease-in-out relative",
                  isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-primary/90",
                  pathname === link.href ? "text-primary font-semibold after:w-full" : "after:w-0",
                  "after:content-[''] after:absolute after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              size="lg"
              asChild
              className="bg-primary text-white font-semibold px-6 py-2 rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200/50 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-gray-900" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-900" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-medium py-3 transition-colors duration-300 border-b border-gray-100 last:border-b-0",
                  pathname === link.href ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300"
              size="lg"
              asChild
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}