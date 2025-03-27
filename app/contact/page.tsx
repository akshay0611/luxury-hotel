"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ChevronDown, Facebook, Instagram, Twitter } from "lucide-react";
import { submitContactForm } from "@/utils/supabase/contact"; // Import the new function

const faqs = [
  {
    id: 1,
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    id: 2,
    question: "Is breakfast included in the room rate?",
    answer:
      "Breakfast is included in some room rates. Please check the details of your specific booking or contact our reservations team for more information.",
  },
  {
    id: 3,
    question: "Do you offer airport transfers?",
    answer:
      "Yes, we offer airport transfer services for an additional fee. Please contact us at least 24 hours in advance to arrange transportation.",
  },
  {
    id: 4,
    question: "Is there a cancellation fee?",
    answer:
      "Our cancellation policy varies depending on the type of booking. Generally, cancellations made 48 hours or more before check-in are free of charge.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      return "Please enter a valid email address.";
    }
    if (["name", "subject", "message"].includes(name) && !value.trim()) {
      return "This field is required.";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };
    setFormErrors(errors);
    if (Object.values(errors).some((error) => error)) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await submitContactForm(formData); // Use the separated function
      console.log("Form submitted successfully");
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
    } catch (err: unknown) { // Type err as unknown initially
      // Assert err as an Error object to safely access .message
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      console.error("Error submitting form:", errorMessage);
      setError(errorMessage || "Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              We’re here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 tracking-tight">Send Us a Message</h2>
              {success && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Thank you for your message! We’ll get back to you soon.
                </div>
              )}
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                      aria-describedby={formErrors.name ? "name-error" : undefined}
                      className={`rounded-lg border-gray-300 focus:ring-primary focus:border-primary transition-all duration-300 ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.name && (
                      <p id="name-error" className="text-red-500 text-sm">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                      className={`rounded-lg border-gray-300 focus:ring-primary focus:border-primary transition-all duration-300 ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="text-red-500 text-sm">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      disabled={isSubmitting}
                      className="rounded-lg border-gray-300 focus:ring-primary focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Your subject"
                      required
                      disabled={isSubmitting}
                      aria-describedby={formErrors.subject ? "subject-error" : undefined}
                      className={`rounded-lg border-gray-300 focus:ring-primary focus:border-primary transition-all duration-300 ${
                        formErrors.subject ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.subject && (
                      <p id="subject-error" className="text-red-500 text-sm">
                        {formErrors.subject}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                    aria-describedby={formErrors.message ? "message-error" : undefined}
                    className={`rounded-lg border-gray-300 focus:ring-primary focus:border-primary transition-all duration-300 ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                  />
                  {formErrors.message && (
                    <p id="message-error" className="text-red-500 text-sm">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 tracking-tight">Contact Information</h2>
              {[
                { icon: MapPin, title: "Address", content: "123 Luxury Avenue, Resort City\nCountry, 12345" },
                {
                  icon: Phone,
                  title: "Phone",
                  content: (
                    <>
                      Reservations:{" "}
                      <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                        +1 (555) 123-4567
                      </a>
                      <br />
                      Front Desk:{" "}
                      <a href="tel:+15557654321" className="hover:text-primary transition-colors">
                        +1 (555) 765-4321
                      </a>
                    </>
                  ),
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: (
                    <>
                      Reservations:{" "}
                      <a href="mailto:reservations@luxuryhotel.com" className="hover:text-primary transition-colors">
                        reservations@luxuryhotel.com
                      </a>
                      <br />
                      General Inquiries:{" "}
                      <a href="mailto:info@luxuryhotel.com" className="hover:text-primary transition-colors">
                        info@luxuryhotel.com
                      </a>
                    </>
                  ),
                },
                { icon: Clock, title: "Hours", content: "Check-in: 3:00 PM\nCheck-out: 12:00 PM\nFront Desk: 24/7" },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <item.icon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Facebook className="h-6 w-6" />, href: "#" },
                    { icon: <Instagram className="h-6 w-6" />, href: "#" },
                    { icon: <Twitter className="h-6 w-6" />, href: "#" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Find Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Located in a prime location with easy access to major attractions and transportation.
            </p>
          </div>
          <div
            className="relative h-[450px] rounded-xl overflow-hidden shadow-lg animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509354!2d144.95373531531647!3d-37.81627997975146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9c9a7e9e9c7!2sLuxury%20Hotel!5e0!3m2!1sen!2sus!4v1637309850935!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-md border border-gray-100 pointer-events-auto">
                <p className="text-lg font-semibold text-gray-900">Luxury Hotel</p>
                <p className="text-base text-gray-600">123 Luxury Avenue, Resort City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-in-down">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Find answers to common questions about our hotel and services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                      expandedFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFaq === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-base leading-relaxed px-6 pb-6">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}