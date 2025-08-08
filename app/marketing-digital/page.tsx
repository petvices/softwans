import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/softwans/header"
import { Footer } from "@/components/softwans/footer"
import { WhatsAppButton } from "@/components/softwans/whatsapp-button"
import {
  ArrowRight,
  TrendingUp,
  Search,
  Users,
  MessageSquare,
  Mail,
  BarChart3,
  Target,
  Zap,
  Award,
  Settings,
  Smartphone,
  Monitor,
  Rocket,
  Eye,
  Heart,
  Share2,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Marketing Digital Profesional | Agencia de Marketing Online | Softwans",
  description:
    "Agencia de marketing digital profesional. Servicios de SEO, SEM, redes sociales, email marketing y publicidad online. Estrategias digitales que generan resultados reales. Presupuesto gratuito.",
  keywords: [
    "marketing digital",
    "marketing online",
    "agencia marketing digital",
    "publicidad digital",
    "marketing digital profesional",
    "servicios marketing digital",
    "estrategias marketing digital",
    "marketing digital empresas",
    "SEO",
    "posicionamiento web",
    "SEM",
    "Google Ads",
    "publicidad Google",
    "redes sociales",
    "social media marketing",
    "gestión redes sociales",
    "Facebook Ads",
    "Instagram marketing",
    "email marketing",
    "marketing por correo",
    "content marketing",
    "marketing de contenidos",
    "inbound marketing",
    "marketing automation",
    "analítica web",
    "Google Analytics",
    "conversión web",
    "lead generation",
    "generación leads",
    "ROI marketing",
    "marketing performance",
    "publicidad online",
    "advertising digital",
    "campañas publicitarias",
    "marketing strategy",
    "consultoría marketing",
    "agencia publicidad",
    "marketing consultant",
    "digital advertising",
    "online marketing",
    "internet marketing",
  ],
  openGraph: {
    title: "Marketing Digital Profesional | Agencia de Marketing Online",
    description:
      "Agencia de marketing digital profesional. SEO, SEM, redes sociales y estrategias digitales que generan resultados.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://www.softwans.com/marketing-digital",
  },
}

export default function MarketingDigitalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-blue py-20 md:py-32">
          <div className="absolute inset-0 opacity-20">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/30"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                }}
              />
            ))}
          </div>

          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-8">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary w-fit">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Marketing Digital Profesional
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="text-white">Marketing Digital que </span>
                    <span className="text-gradient bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                      Genera Resultados
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-xl text-white/80">
                    Agencia de marketing digital especializada en SEO, SEM, redes sociales y estrategias online que
                    impulsan tu negocio. Aumentamos tus ventas con marketing digital profesional.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/message/Y5IO4FCCEMICH1"
                    target="_blank"
                  >
                    <Button size="lg" className="group w-full sm:w-auto shadow-neon">
                      Solicitar Auditoría Gratis
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="#servicios">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white">
                      Ver Servicios
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">300%</div>
                    <div className="text-sm text-white/70">ROI Promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-white/70">Campañas Exitosas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-white/70">Clientes Satisfechos</div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative overflow-hidden rounded-3xl border bg-glass shadow-xl backdrop-blur">
                  <Image
                    src="https://cdn.pixabay.com/photo/2020/02/08/14/28/camera-4830248_1280.jpg"
                    width={600}
                    height={600}
                    alt="Marketing digital profesional y estrategias online"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Marketing Digital */}
        <section id="servicios" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Target className="mr-2 h-4 w-4" />
                Servicios de Marketing Digital
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Estrategias Digitales Completas para tu Empresa
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Ofrecemos servicios integrales de marketing digital profesional, desde SEO hasta publicidad online que
                generan resultados medibles.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Search className="h-10 w-10 text-primary" />,
                  title: "SEO y Posicionamiento Web",
                  description:
                    "Posicionamiento orgánico en Google para aparecer en las primeras posiciones y aumentar el tráfico web.",
                },
                {
                  icon: <Target className="h-10 w-10 text-primary" />,
                  title: "SEM y Google Ads",
                  description:
                    "Campañas de publicidad en Google Ads optimizadas para generar leads y ventas con el mejor ROI.",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Gestión de Redes Sociales",
                  description:
                    "Estrategias de social media marketing para aumentar tu comunidad y engagement en todas las plataformas.",
                },
                {
                  icon: <Mail className="h-10 w-10 text-primary" />,
                  title: "Email Marketing",
                  description:
                    "Campañas de email marketing automatizadas que nutren leads y convierten suscriptores en clientes.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-primary" />,
                  title: "Marketing de Contenidos",
                  description:
                    "Creación de contenido valioso que atrae, educa y convierte a tu audiencia objetivo en clientes fieles.",
                },
                {
                  icon: <Eye className="h-10 w-10 text-primary" />,
                  title: "Analítica y Reporting",
                  description:
                    "Análisis detallado de métricas y KPIs para optimizar continuamente tus estrategias de marketing digital.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border bg-background/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos de Marketing Digital */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Rocket className="mr-2 h-4 w-4" />
                Especialidades en Marketing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Estrategias de Marketing Digital Especializadas
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Desde marketing B2B hasta e-commerce, tenemos la experiencia para crear estrategias digitales exitosas
                para cualquier sector.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <DollarSign className="h-8 w-8 text-primary" />,
                  title: "Marketing B2B",
                  description: "Estrategias especializadas para empresas que venden a otras empresas",
                },
                {
                  icon: <Heart className="h-8 w-8 text-primary" />,
                  title: "Marketing B2C",
                  description: "Campañas dirigidas al consumidor final con alto impacto emocional",
                },
                {
                  icon: <Smartphone className="h-8 w-8 text-primary" />,
                  title: "Marketing E-commerce",
                  description: "Estrategias específicas para tiendas online y marketplaces",
                },
                {
                  icon: <Share2 className="h-8 w-8 text-primary" />,
                  title: "Marketing Local",
                  description: "Posicionamiento local y estrategias para negocios físicos",
                },
              ].map((type, index) => (
                <div
                  key={index}
                  className="text-center rounded-xl border bg-background/50 p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    {type.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas del Marketing Digital Profesional */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <Award className="mr-2 h-4 w-4" />
                  Ventajas del Marketing Digital
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  ¿Por qué Invertir en Marketing Digital Profesional?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  El marketing digital profesional es la clave para hacer crecer tu negocio en la era digital. Te
                  ayudamos a llegar a más clientes y aumentar tus ventas.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <TrendingUp className="h-6 w-6 text-primary" />,
                      title: "Aumento de Ventas",
                      description: "Estrategias probadas que generan más leads y convierten más clientes",
                    },
                    {
                      icon: <Target className="h-6 w-6 text-primary" />,
                      title: "Segmentación Precisa",
                      description: "Llegamos exactamente a tu audiencia objetivo con mensajes personalizados",
                    },
                    {
                      icon: <BarChart3 className="h-6 w-6 text-primary" />,
                      title: "Resultados Medibles",
                      description: "Tracking completo de ROI y métricas para optimizar continuamente",
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-primary" />,
                      title: "Resultados Rápidos",
                      description: "Campañas optimizadas que generan resultados visibles en semanas",
                    },
                  ].map((advantage, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        {advantage.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{advantage.title}</h3>
                        <p className="text-muted-foreground">{advantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Image
                  src="images/marketing-creation.webp?height=600&width=500"
                  width={500}
                  height={600}
                  alt="Estrategias de marketing digital en acción"
                  className="rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Marketing Digital */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Settings className="mr-2 h-4 w-4" />
                Nuestro Proceso
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cómo Desarrollamos tu Estrategia de Marketing Digital
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Un proceso estructurado y probado que garantiza el éxito de cada campaña de marketing digital.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Auditoría y Análisis",
                  description:
                    "Analizamos tu situación actual, competencia y oportunidades de mercado para definir la estrategia.",
                },
                {
                  step: "02",
                  title: "Estrategia Personalizada",
                  description: "Creamos un plan de marketing digital a medida con objetivos claros y KPIs específicos.",
                },
                {
                  step: "03",
                  title: "Implementación",
                  description:
                    "Ejecutamos las campañas y estrategias con las mejores herramientas y técnicas del mercado.",
                },
                {
                  step: "04",
                  title: "Optimización Continua",
                  description: "Monitoreamos, analizamos y optimizamos constantemente para maximizar resultados.",
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Herramientas de Marketing Digital */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Monitor className="mr-2 h-4 w-4" />
                Herramientas Profesionales
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Herramientas de Marketing Digital que Utilizamos
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Trabajamos con las mejores herramientas y plataformas del mercado para garantizar resultados
                excepcionales.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Google Ads",
                "Google Analytics",
                "Facebook Ads",
                "Instagram Ads",
                "LinkedIn Ads",
                "Mailchimp",
                "HubSpot",
                "Hootsuite",
                "Buffer",
                "Canva",
                "Semrush",
                "Ahrefs",
                "Moz",
                "Screaming Frog",
                "Google Search Console",
                "Hotjar",
                "Zapier",
                "Klaviyo",
                "ActiveCampaign",
                "ConvertKit",
              ].map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg border bg-background/50 p-4 text-center font-medium transition-all hover:bg-primary/10 hover:border-primary/20"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Preguntas Frecuentes sobre Marketing Digital
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Resolvemos las dudas más comunes sobre nuestros servicios de marketing digital profesional.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  question: "¿Cuánto tiempo tardan en verse los resultados?",
                  answer:
                    "Los resultados varían según la estrategia. SEO puede tomar 3-6 meses, mientras que SEM y redes sociales pueden generar resultados en 2-4 semanas. Te proporcionamos reportes mensuales detallados.",
                },
                {
                  question: "¿Qué incluyen los servicios de marketing digital?",
                  answer:
                    "Incluimos estrategia personalizada, implementación de campañas, creación de contenido, gestión de anuncios, reportes mensuales y optimización continua según tus objetivos.",
                },
                {
                  question: "¿Trabajan con empresas de todos los tamaños?",
                  answer:
                    "Sí, trabajamos desde startups hasta grandes empresas. Adaptamos nuestras estrategias y presupuestos a las necesidades específicas de cada cliente.",
                },
                {
                  question: "¿Cómo miden el ROI de las campañas?",
                  answer:
                    "Utilizamos herramientas avanzadas de analítica para trackear conversiones, leads, ventas y otros KPIs relevantes. Proporcionamos reportes detallados del retorno de inversión.",
                },
                {
                  question: "¿Ofrecen servicios de marketing digital local?",
                  answer:
                    "Absolutamente. Tenemos experiencia en marketing local con Google My Business, SEO local, anuncios geográficos y estrategias específicas para negocios locales.",
                },
                {
                  question: "¿Qué diferencia su agencia de otras?",
                  answer:
                    "Nos enfocamos en resultados medibles, transparencia total, comunicación constante y estrategias personalizadas. Cada cliente tiene un account manager dedicado.",
                },
              ].map((faq, index) => (
                <div key={index} className="rounded-xl border bg-background/50 p-6 shadow-lg">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

              <div className="relative z-10 flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                    ¿Listo para hacer crecer tu negocio con marketing digital?
                  </h2>
                  <p className="text-xl text-white/80">
                    Contacta con nosotros hoy mismo y obtén una auditoría gratuita de tu presencia digital. Sin
                    compromiso.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/message/Y5IO4FCCEMICH1"
                    target="_blank"
                  >
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Auditoría Gratis
                    </Button>
                  </Link>
                  <Link href="/#contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
                    >
                      Solicitar Propuesta
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schema Markup para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Marketing Digital Profesional - Softwans",
              description:
                "Servicios profesionales de marketing digital, SEO, SEM, redes sociales, email marketing y estrategias online.",
              provider: {
                "@type": "Organization",
                name: "Softwans",
                url: "https://www.softwans.com",
                logo: "https://www.softwans.com/logo.webp",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+58-424-267-0533",
                  contactType: "customer service",
                  availableLanguage: "Spanish",
                },
              },
              serviceType: "Marketing Digital",
              category: "Marketing y Publicidad",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Marketing Digital",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO y Posicionamiento Web",
                      description: "Optimización para motores de búsqueda y posicionamiento orgánico",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEM y Google Ads",
                      description: "Campañas de publicidad en Google y otros buscadores",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gestión de Redes Sociales",
                      description: "Social media marketing y gestión de comunidades online",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Email Marketing",
                      description: "Campañas de email marketing y marketing automation",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "89",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
