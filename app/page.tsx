import { MessageSquare, Users } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { PricingCards } from "@/components/pricing-cards"
import { TestimonialSection } from "@/components/testimonial-section"
import { FeatureSection } from "@/components/feature-section"
import { HeroSection } from "@/components/hero-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <PricingCards />
        <TestimonialSection />
        <section id="contacto" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contacto</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hablanos sobre tu proyecto
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Estamos listos para ayudarte a llevar tu negocio al siguiente nivel. Contáctanos hoy mismo para una
                consulta gratuita.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>info@softwans.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>+58 424-2670533</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

