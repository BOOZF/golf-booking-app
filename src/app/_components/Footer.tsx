"use client"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">GolfBook</h3>
                <p className="text-sm text-gray-400 -mt-1">Pro</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your premier destination for exclusive golf course bookings and championship tee time reservations.
            </p>

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-2xl p-4">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { href: "#courses", label: "Courses" },
                { href: "#booking", label: "Book Tee Time" },
                { href: "#pricing", label: "Memberships" },
                { href: "#testimonials", label: "Reviews" },
                { href: "/dashboard", label: "Dashboard" },
              ].map((link, index) => (
                <a key={index} href={link.href} className="block text-gray-400 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-semibold text-white">Address</p>
                <p className="text-sm">123 Fairway Boulevard</p>
                <p className="text-sm">Augusta Springs, GA 30309</p>
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-sm">(555) 123-GOLF</p>
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-sm">hello@golfbookpro.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-6">Hours</h4>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-semibold text-white">Tee Times</p>
                <p className="text-sm">Daily: 6:00 AM - 8:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Support</p>
                <p className="text-sm">Daily: 7:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Pro Shop</p>
                <p className="text-sm">Mon-Sun: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Awards */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { platform: "Instagram", icon: "📸" },
                  { platform: "Twitter", icon: "🐦" },
                  { platform: "Facebook", icon: "📘" },
                  { platform: "YouTube", icon: "📺" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center"
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4">Recognition</h4>
              <div className="flex flex-wrap justify-center md:justify-end gap-3">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">⭐ Best Golf App 2024</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">🏌️ PGA Partner</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">🎯 4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 GolfBook Pro. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-2xl flex items-center justify-center shadow-xl hover:from-teal-600 hover:to-cyan-700"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}
