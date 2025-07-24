"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">G</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">GolfBook</h1>
              <p className="text-xs text-gray-500 -mt-1">Pro</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { href: "#courses", label: "Courses" },
              { href: "#booking", label: "Book" },
              { href: "#pricing", label: "Pricing" },
              { href: "#testimonials", label: "Reviews" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-3">
            {session ? (
              <div className="flex items-center space-x-3">
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl"
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-xl">
                  <div className="w-7 h-7 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white font-bold">
                      {(session.user?.name || session.user?.email || "").charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm text-gray-700 max-w-24 truncate">
                    {session.user?.name || session.user?.email}
                  </span>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-sm font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-700 shadow-lg"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-xl hover:bg-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-gray-600 rounded ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 rounded ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div
                className={`w-full h-0.5 bg-gray-600 rounded ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-1">
              {[
                { href: "#courses", label: "Courses" },
                { href: "#booking", label: "Book" },
                { href: "#pricing", label: "Pricing" },
                { href: "#testimonials", label: "Reviews" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl"
                >
                  {item.label}
                </a>
              ))}
              {!session && (
                <div className="pt-3 border-t border-gray-100 mt-3 space-y-2">
                  <Link
                    href="/login"
                    className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-sm font-semibold rounded-xl text-center"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
