import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import {
  ArrowRight,
  Code,
  Globe,
  Zap,
  Search,
  Shield,
  Users,
  TrendingUp,
  MessageSquare,
  Award,
  Palette,
  Database,
  Settings,
  CheckCircle,
  Smartphone,
  Monitor,
  Rocket,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Desarrollo Web Profesional | Páginas Web Modernas y Responsivas | Softwans",
  description:
    "Desarrollo web profesional con tecnologías modernas. Creamos páginas web responsivas, rápidas y optimizadas para SEO. Diseño web personalizado para empresas. Presupuesto gratuito.",
  keywords: [
    "desarrollo web",
    "desarrollo web profesional",
    "páginas web",
    "diseño web",
    "diseño web profesional",
    "creación páginas web",
    "desarrollo web moderno",
    "páginas web responsivas",
    "diseño web responsive",
    "desarrollo frontend",
    "desarrollo backend",
    "programación web",
    "desarrollo web empresas",
    "páginas web empresariales",
    "desarrollo web personalizado",
    "diseño web personalizado",
    "desarrollo web SEO",
    "páginas web optimizadas",
    "desarrollo web rápido",
    "páginas web rápidas",
    "desarrollo web seguro",
    "páginas web seguras",
    "desarrollo web ecommerce",
    "tiendas online",
    "desarrollo web CMS",
    "páginas web WordPress",
    "desarrollo web React",
    "desarrollo web Next.js",
    "agencia desarrollo web",
    "empresa desarrollo web",
    "freelance desarrollo web",
    "programador web",
    "desarrollador web",
    "diseñador web",
    "desarrollo web barato",
    "páginas web baratas",
    "presupuesto desarrollo web",
    "cotización páginas web",
  ],
  openGraph: {
    title: "Desarrollo Web Profesional | Páginas Web Modernas y Responsivas",
    description:
      "Desarrollo web profesional con tecnologías modernas. Páginas web responsivas, rápidas y optimizadas para SEO.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://www.softwans.com/desarrollo-web",
  },
}

export default function DesarrolloWeb2Page() {
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
                  <Code className="mr-2 h-4 w-4" />
                  Desarrollo Web Profesional
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="text-white">Desarrollo Web </span>
                    <span className="text-gradient bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                      Moderno y Profesional
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-xl text-white/80">
                    Creamos páginas web profesionales, responsivas y optimizadas que impulsan tu negocio. Desarrollo web
                    personalizado con las últimas tecnologías y mejores prácticas del sector.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/message/Y5IO4FCCEMICH1"
                    target="_blank"
                  >
                    <Button size="lg" className="group w-full sm:w-auto shadow-neon">
                      Solicitar Presupuesto Gratis
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
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-sm text-white/70">Proyectos Web</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-white/70">Años Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">99%</div>
                    <div className="text-sm text-white/70">Satisfacción</div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative overflow-hidden rounded-3xl border bg-glass shadow-xl backdrop-blur">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Desarrollo web profesional moderno"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Desarrollo Web */}
        <section id="servicios" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Globe className="mr-2 h-4 w-4" />
                Servicios de Desarrollo Web
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Soluciones Web Completas para tu Empresa
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Ofrecemos servicios integrales de desarrollo web profesional, desde el diseño hasta el lanzamiento y
                mantenimiento de tu página web.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Monitor className="h-10 w-10 text-primary" />,
                  title: "Páginas Web Responsivas",
                  description:
                    "Desarrollo web responsive que se adapta perfectamente a todos los dispositivos y tamaños de pantalla.",
                },
                {
                  icon: <Search className="h-10 w-10 text-primary" />,
                  title: "SEO Optimizado",
                  description:
                    "Páginas web optimizadas para motores de búsqueda desde el desarrollo, mejorando tu posicionamiento web.",
                },
                {
                  icon: <Rocket className="h-10 w-10 text-primary" />,
                  title: "Rendimiento Superior",
                  description:
                    "Desarrollo web optimizado para velocidad de carga ultra rápida y mejor experiencia de usuario.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "Seguridad Web Avanzada",
                  description:
                    "Implementamos las mejores prácticas de seguridad web con certificados SSL y protección completa.",
                },
                {
                  icon: <Palette className="h-10 w-10 text-primary" />,
                  title: "Diseño Web Personalizado",
                  description:
                    "Diseños únicos y personalizados que reflejan la identidad de tu marca y destacan de la competencia.",
                },
                {
                  icon: <Database className="h-10 w-10 text-primary" />,
                  title: "CMS y Administración",
                  description:
                    "Sistemas de gestión de contenido intuitivos para que gestiones tu web fácilmente sin conocimientos técnicos.",
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

        {/* Tipos de Páginas Web */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Code className="mr-2 h-4 w-4" />
                Tipos de Desarrollo Web
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Desarrollamos Todo Tipo de Páginas Web
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Desde páginas web corporativas hasta tiendas online complejas, tenemos la experiencia para crear
                cualquier tipo de proyecto web.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Globe className="h-8 w-8 text-primary" />,
                  title: "Páginas Web Corporativas",
                  description: "Sitios web profesionales para empresas y organizaciones",
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-primary" />,
                  title: "Tiendas Online",
                  description: "E-commerce completo con pasarelas de pago integradas",
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Portales Web",
                  description: "Plataformas web complejas con múltiples funcionalidades",
                },
                {
                  icon: <Smartphone className="h-8 w-8 text-primary" />,
                  title: "Landing Pages",
                  description: "Páginas de aterrizaje optimizadas para conversión",
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

        {/* Ventajas del Desarrollo Web Profesional */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <Award className="mr-2 h-4 w-4" />
                  Ventajas del Desarrollo Web Profesional
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  ¿Por qué Elegir Desarrollo Web Profesional?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  El desarrollo web profesional marca la diferencia entre una página web que funciona y una que
                  realmente impulsa tu negocio hacia el éxito.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <CheckCircle className="h-6 w-6 text-primary" />,
                      title: "Mayor Conversión",
                      description: "Páginas web optimizadas que convierten visitantes en clientes reales",
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6 text-primary" />,
                      title: "Mejor Posicionamiento",
                      description: "SEO técnico avanzado para aparecer en las primeras posiciones de Google",
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-primary" />,
                      title: "Velocidad Optimizada",
                      description: "Carga ultra rápida que mejora la experiencia del usuario y el SEO",
                    },
                    {
                      icon: <Shield className="h-6 w-6 text-primary" />,
                      title: "Seguridad Garantizada",
                      description: "Protección completa contra ataques y vulnerabilidades web",
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
                  src="/placeholder.svg?height=600&width=500"
                  width={500}
                  height={600}
                  alt="Desarrollo web profesional en acción"
                  className="rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Desarrollo Web */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Settings className="mr-2 h-4 w-4" />
                Proceso de Desarrollo
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nuestro Proceso de Desarrollo Web
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Un proceso estructurado y probado que garantiza el éxito de cada proyecto de desarrollo web.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Análisis y Planificación",
                  description:
                    "Analizamos tus necesidades, objetivos de negocio y definimos la estrategia de desarrollo web.",
                },
                {
                  step: "02",
                  title: "Diseño y Prototipado",
                  description:
                    "Creamos wireframes y prototipos interactivos para visualizar la estructura de tu página web.",
                },
                {
                  step: "03",
                  title: "Desarrollo y Programación",
                  description:
                    "Programamos tu página web con código limpio, optimizado y siguiendo las mejores prácticas.",
                },
                {
                  step: "04",
                  title: "Testing y Lanzamiento",
                  description: "Realizamos pruebas exhaustivas y lanzamos tu página web con configuración completa.",
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

        {/* Tecnologías de Desarrollo Web */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Code className="mr-2 h-4 w-4" />
                Tecnologías de Desarrollo
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tecnologías Modernas de Desarrollo Web
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Utilizamos las tecnologías más avanzadas y actuales para crear páginas web rápidas, seguras y
                escalables.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Next.js",
                "Vue.js",
                "Angular",
                "Node.js",
                "PHP",
                "Python",
                "WordPress",
                "Shopify",
                "MySQL",
                "MongoDB",
                "PostgreSQL",
                "Tailwind CSS",
                "Bootstrap",
                "Sass",
                "TypeScript",
                "GraphQL",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg border bg-background/50 p-4 text-center font-medium transition-all hover:bg-primary/10 hover:border-primary/20"
                >
                  {tech}
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
                Preguntas Frecuentes sobre Desarrollo Web
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Resolvemos las dudas más comunes sobre nuestros servicios de desarrollo web profesional.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  question: "¿Cuánto tiempo tarda el desarrollo de una página web?",
                  answer:
                    "El tiempo de desarrollo varía según la complejidad del proyecto. Una página web básica puede estar lista en 1-2 semanas, mientras que proyectos más complejos pueden tomar 4-8 semanas.",
                },
                {
                  question: "¿Las páginas web son responsive?",
                  answer:
                    "Sí, todas nuestras páginas web son completamente responsive y se adaptan perfectamente a móviles, tablets y ordenadores.",
                },
                {
                  question: "¿Incluyen optimización SEO?",
                  answer:
                    "Absolutamente. Todas nuestras páginas web incluyen optimización SEO básica: meta tags, estructura semántica, velocidad optimizada y más.",
                },
                {
                  question: "¿Ofrecen mantenimiento web?",
                  answer:
                    "Sí, ofrecemos servicios de mantenimiento web que incluyen actualizaciones, copias de seguridad, monitoreo de seguridad y soporte técnico.",
                },
                {
                  question: "¿Puedo gestionar el contenido yo mismo?",
                  answer:
                    "Por supuesto. Implementamos sistemas de gestión de contenido (CMS) fáciles de usar para que puedas actualizar tu web sin conocimientos técnicos.",
                },
                {
                  question: "¿Qué incluye el presupuesto?",
                  answer:
                    "Nuestros presupuestos incluyen diseño, desarrollo, optimización SEO básica, configuración de hosting, certificado SSL y capacitación para gestionar la web.",
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
                    ¿Listo para crear tu página web profesional?
                  </h2>
                  <p className="text-xl text-white/80">
                    Contacta con nosotros hoy mismo y obtén un presupuesto gratuito para tu proyecto de desarrollo web.
                    Sin compromiso.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/message/Y5IO4FCCEMICH1"
                    target="_blank"
                  >
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp Gratis
                    </Button>
                  </Link>
                  <Link href="/#contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
                    >
                      Solicitar Presupuesto
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schema Markup para SEO General */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Desarrollo Web Profesional",
              description:
                "Servicios profesionales de desarrollo web, diseño web responsive, programación web y optimización SEO.",
              provider: {
                "@type": "Organization",
                name: "Softwans",
                url: "https://www.softwans.com",
                logo: "https://www.softwans.com/images/logo.webp",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+58-424-267-0533",
                  contactType: "customer service",
                  availableLanguage: "Spanish",
                },
              },
              serviceType: "Desarrollo Web",
              category: "Tecnología",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Desarrollo Web",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Páginas Web Responsivas",
                      description: "Desarrollo de páginas web que se adaptan a todos los dispositivos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Desarrollo Web SEO",
                      description: "Páginas web optimizadas para motores de búsqueda",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-commerce",
                      description: "Desarrollo de tiendas online profesionales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CMS Personalizado",
                      description: "Sistemas de gestión de contenido a medida",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
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
