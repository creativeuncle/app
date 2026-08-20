import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AppsSection from "./components/AppsSection"
import FeaturesSection from "./components/FeaturesSection"
import PricingSection from "./components/PricingSection"
import SocialProof from "./components/SocialProof"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <AppsSection />
        <FeaturesSection />
        <PricingSection />
        <SocialProof />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
