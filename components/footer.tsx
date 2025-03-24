import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-bold tracking-tight">
              LUXURY<span className="text-primary">HOTEL</span>
            </h3>
            <p className="text-gray-300 text-base leading-relaxed max-w-xs">
              Experience luxury and comfort at our premium hotel and resort, perfect for both business and leisure travelers.
            </p>
            <div className="flex space-x-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="h-7 w-7" />
                  <span className="sr-only">{Icon.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h4 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-3 text-gray-100">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Rooms & Suites", href: "/rooms" },
                { name: "Amenities", href: "/amenities" },
                { name: "Gallery", href: "/gallery" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-all duration-300 text-base hover:pl-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h4 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-3 text-gray-100">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-base leading-relaxed">123 Luxury Avenue, Resort City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <Link
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-primary transition-all duration-300 text-base"
                >
                  +1 (555) 123-4567
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <Link
                  href="mailto:info@luxuryhotel.com"
                  className="text-gray-300 hover:text-primary transition-all duration-300 text-base"
                >
                  info@luxuryhotel.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <h4 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-3 text-gray-100">Newsletter</h4>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Subscribe for exclusive deals and updates.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-3 rounded-full bg-gray-800 border border-gray-700 text-white text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <p>© {new Date().getFullYear()} Luxury Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}