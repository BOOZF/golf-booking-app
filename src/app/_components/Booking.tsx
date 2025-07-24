"use client"

import type React from "react"

import { useState } from "react"

export default function Booking() {
  const [bookingForm, setBookingForm] = useState({
    course: "",
    date: "",
    time: "",
    players: "1",
    name: "",
    email: "",
    phone: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", bookingForm)
    alert("Booking request submitted! We'll contact you shortly.")
  }

  const courses = [
    { value: "oakwood", label: "Oakwood Championship", price: "$120", difficulty: "Expert" },
    { value: "pine-valley", label: "Pine Valley Resort", price: "$95", difficulty: "Intermediate" },
    { value: "sunset-links", label: "Sunset Links", price: "$140", difficulty: "Championship" },
  ]

  const timeSlots = [
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ]

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6 shadow-lg">
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            <span className="text-sm font-medium text-teal-700">Book Your Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Reserve Your
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Perfect Round
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure your tee time at world-class courses with our seamless booking experience
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Complete Your Reservation</h3>
            <p className="text-teal-100">Fill out the details below to secure your booking</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Course Selection */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Your Course</h4>
              <div className="grid gap-3">
                {courses.map((course) => (
                  <label key={course.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="course"
                      value={course.value}
                      checked={bookingForm.course === course.value}
                      onChange={handleInputChange}
                      className="sr-only"
                      required
                    />
                    <div
                      className={`p-4 rounded-2xl border-2 ${
                        bookingForm.course === course.value
                          ? "border-teal-500 bg-teal-50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-semibold text-gray-900">{course.label}</h5>
                          <p className="text-sm text-gray-600">{course.difficulty} Level</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-teal-600">{course.price}</div>
                          <div className="text-xs text-gray-500">per round</div>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Select Date</label>
                <input
                  type="date"
                  name="date"
                  value={bookingForm.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Preferred Time</label>
                <select
                  name="time"
                  value={bookingForm.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                >
                  <option value="">Choose time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Players */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Number of Players</h4>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((num) => (
                  <label key={num} className="cursor-pointer">
                    <input
                      type="radio"
                      name="players"
                      value={num.toString()}
                      checked={bookingForm.players === num.toString()}
                      onChange={handleInputChange}
                      className="sr-only"
                      required
                    />
                    <div
                      className={`p-4 text-center rounded-2xl border-2 ${
                        bookingForm.players === num.toString()
                          ? "border-teal-500 bg-teal-50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="text-2xl mb-2">
                        {num === 1 ? "👤" : num === 2 ? "👥" : num === 3 ? "👥👤" : "👥👥"}
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {num} Player{num > 1 ? "s" : ""}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold text-lg rounded-2xl hover:from-teal-600 hover:to-cyan-700 shadow-xl hover:shadow-2xl"
              >
                Complete Reservation
              </button>
              <p className="text-sm text-gray-600 mt-4">We&apos;ll confirm your booking within 24 hours</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
