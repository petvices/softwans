import { HeroSection } from "@/components/softwans/hero-section"
import { Header } from "@/components/softwans/header"
import { Footer } from "@/components/softwans/footer"
import { ServicesSection } from "@/components/softwans/services-section"
import { PricingCards } from "@/components/softwans/pricing-cards"
import { TestimonialSection } from "@/components/softwans/testimonial-section"
import { ContactSection } from "@/components/softwans/contact-section"
import { WhyChooseUs } from "@/components/softwans/why-choose-us"
import { WhatsAppButton } from "@/components/softwans/whatsapp-button"
import { CtaBanner } from "@/components/softwans/cta-banner"
import FacebookPixel from "@/components/FacebookPixel"
import { BrandsSection } from "@/components/softwans/brands-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <FacebookPixel />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BrandsSection />
        <WhyChooseUs />
        <PricingCards />
        <CtaBanner />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}