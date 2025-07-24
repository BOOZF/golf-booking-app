"use client"

export default function Pricing() {
  const plans = [
    {
      name: "Fairway",
      subtitle: "Perfect for Weekend Golfers",
      price: 99,
      period: "month",
      popular: false,
      features: [
        "Access to 3 premium courses",
        "Weekend tee time reservations",
        "Basic club amenities",
        "Mobile app access",
        "Monthly scorecard tracking",
      ],
    },
    {
      name: "Championship",
      subtitle: "Most Popular Choice",
      price: 189,
      period: "month",
      popular: true,
      features: [
        "Unlimited course access",
        "Priority tee time booking",
        "Premium clubhouse amenities",
        "Guest privileges (2 per month)",
        "Professional lessons included",
        "Tournament access",
        "Equipment rental discounts",
      ],
    },
    {
      name: "Masters",
      subtitle: "Ultimate Golf Experience",
      price: 299,
      period: "month",
      popular: false,
      features: [
        "Unlimited VIP course access",
        "Anytime booking privileges",
        "Luxury amenities & spa access",
        "Unlimited guest privileges",
        "Personal golf instructor",
        "Private tournament hosting",
        "Full concierge services",
        "Equipment allowance",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <span className="text-sm font-medium text-teal-700">Membership Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Golf Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From casual rounds to championship experiences, find the perfect membership for your lifestyle
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl border-2 overflow-hidden ${
                plan.popular ? "border-teal-500 scale-105" : "border-gray-200"
              }`}
            >
              

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.subtitle}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500">Billed monthly, cancel anytime</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-2xl font-bold text-lg ${
                    plan.popular
                      ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700 shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Every Membership Includes</h3>
            <p className="text-gray-600">Premium benefits across all membership tiers</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "📱", title: "Mobile App", desc: "Book and manage tee times on-the-go" },
              { icon: "🏌️", title: "Pro Shop", desc: "Exclusive member discounts on equipment" },
              { icon: "🍽️", title: "Dining", desc: "Priority reservations at clubhouse restaurants" },
              { icon: "📊", title: "Analytics", desc: "Advanced performance tracking and insights" },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm font-medium text-teal-700">30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
