"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Premium Golf Experiences",
      subtitle: "Book exclusive tee times at world-class courses",
      highlight: "Premium",
    },
    {
      title: "Elite Course Access",
      subtitle: "Play where champions play with priority booking",
      highlight: "Elite",
    },
    {
      title: "Seamless Reservations",
      subtitle: "Effortless booking for the perfect golf experience",
      highlight: "Seamless",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-teal-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8 shadow-lg">
          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700">Trusted by 50,000+ golfers worldwide</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            {slides[currentSlide].highlight}
          </span>
          <br />
          <span className="text-gray-900">
            {slides[currentSlide].title.replace(slides[currentSlide].highlight, "").trim()}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {slides[currentSlide].subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#booking"
            className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-700"
          >
            <span className="flex items-center">
              Book Your Round
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#courses"
            className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-white hover:shadow-lg"
          >
            Explore Courses
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { number: "500+", label: "Premium Courses", icon: "🏌️" },
            { number: "50K+", label: "Happy Members", icon: "⭐" },
            { number: "4.9", label: "Average Rating", icon: "🏆" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-teal-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
