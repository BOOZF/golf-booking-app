import Header from "./_components/Header"
import Hero from "./_components/Hero"
import Features from "./_components/Features"
import Booking from "./_components/Booking"
import Pricing from "./_components/Pricing"
import Testimonials from "./_components/Testimonials"
import Footer from "./_components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Booking />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}
