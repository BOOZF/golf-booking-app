"use client"

export default function Features() {
  const courses = [
    {
      name: "Oakwood Championship",
      description: "Championship-level course with pristine fairways and challenging water hazards.",
      features: ["18 Holes", "Par 72", "Championship Tees"],
      price: 120,
      rating: 4.8,
      difficulty: "Expert",
      image: "/placeholder.svg?height=300&width=400&text=Oakwood+Championship+Course",
    },
    {
      name: "Pine Valley Resort",
      description: "Scenic mountain course featuring elevated tees and panoramic valley views.",
      features: ["Mountain Views", "Resort Spa", "Pro Shop"],
      price: 95,
      rating: 4.6,
      difficulty: "Intermediate",
      image: "/placeholder.svg?height=300&width=400&text=Pine+Valley+Resort+Course",
    },
    {
      name: "Sunset Links",
      description: "Coastal links-style course with ocean breezes and stunning sunset views.",
      features: ["Ocean Views", "Links Style", "Sunset Tees"],
      price: 140,
      rating: 4.9,
      difficulty: "Championship",
      image: "/placeholder.svg?height=300&width=400&text=Sunset+Links+Course",
    },
  ]

  const features = [
    {
      title: "Instant Booking",
      description: "Reserve your tee time in seconds with our streamlined booking system.",
      icon: "⚡",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Premium Access",
      description: "Exclusive access to championship courses and member-only facilities.",
      icon: "🏆",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Expert Caddies",
      description: "Professional caddies available to enhance your golf experience.",
      icon: "👨‍🏫",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Concierge Service",
      description: "Full-service support for dining, transportation, and accommodations.",
      icon: "🎯",
      color: "from-blue-400 to-cyan-500",
    },
  ]

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <span className="text-sm font-medium text-teal-700">Featured Courses</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class Golf
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Destinations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Play at meticulously maintained courses designed by legendary architects
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {course.difficulty}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="text-xs font-semibold text-gray-700">{course.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    <span className="text-gray-500 text-sm ml-1">per round</span>
                  </div>
                  <button className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 shadow-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GolfBook Pro?</h3>
            <p className="text-gray-600">Experience golf like never before with our premium features</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
