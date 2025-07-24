"use client"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Golf Enthusiast",
      location: "Pebble Beach, CA",
      content:
        "GolfBook Pro has completely transformed my golf experience. The booking process is seamless and I've gained access to courses I never thought possible. The Championship membership is worth every penny!",
      rating: 5,
      avatar: "SJ",
      handicap: "12",
    },
    {
      name: "Michael Chen",
      title: "PGA Professional",
      location: "Augusta, GA",
      content:
        "As a golf professional, I need reliable access to quality courses. GolfBook delivers consistently with flexible booking and excellent course variety. My students love the guest privileges too.",
      rating: 5,
      avatar: "MC",
      handicap: "+2",
    },
    {
      name: "Emily Rodriguez",
      title: "Weekend Golfer",
      location: "Scottsdale, AZ",
      content:
        "The mobile app makes booking last-minute rounds so easy. As a busy mom, having flexible tee times has rekindled my love for golf. The customer service is outstanding too!",
      rating: 5,
      avatar: "ER",
      handicap: "18",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6 shadow-lg">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <span className="text-sm font-medium text-teal-700">Member Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Golf Enthusiasts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how GolfBook Pro has elevated the golf experience for players worldwide
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              {/* Rating */}
              <div className="flex mb-6">{renderStars(testimonial.rating)}</div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</blockquote>

              {/* Profile */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
                <div className="text-center">
                  <div className="text-teal-600 font-bold">{testimonial.handicap}</div>
                  <div className="text-gray-500 text-xs">Handicap</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted Worldwide</h3>
            <p className="text-gray-600">Join thousands of satisfied golfers</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "50K+", label: "Active Members" },
              { number: "500+", label: "Partner Courses" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "1M+", label: "Rounds Booked" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold text-lg rounded-2xl hover:from-teal-600 hover:to-cyan-700 shadow-xl"
            >
              Start Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
