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
  Star,
  Clock,
  Award,
  Palette,
  Database,
  Settings,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Diseño Web en Barcelona | Desarrollo Web Profesional | Softwans",
  description:
    "Diseño web profesional en Barcelona y Madrid. Creamos páginas web modernas, responsivas y optimizadas para SEO. Diseñador web experto con más de 5 años de experiencia. Desarrollo web a medida para empresas.",
  keywords: [
    "diseño web Barcelona",
    "diseño web Madrid",
    "diseñador web Barcelona",
    "diseñador web Madrid",
    "desarrollo web Barcelona",
    "desarrollo web Madrid",
    "páginas web Barcelona",
    "páginas web Madrid",
    "diseño web profesional",
    "desarrollo web profesional",
    "creación páginas web",
    "diseño web responsive",
    "diseño web moderno",
    "programador web Barcelona",
    "programador web Madrid",
    "agencia diseño web Barcelona",
    "agencia diseño web Madrid",
    "diseño web empresas",
    "desarrollo web empresas",
    "diseño web tiendas online",
    "diseño web ecommerce",
    "diseño web SEO",
    "diseño web optimizado",
    "diseño web barato Barcelona",
    "diseño web barato Madrid",
    "freelance diseño web Barcelona",
    "freelance diseño web Madrid",
    "agencia web en Barcelona",
    "empresas diseño web Barcelona",
    "freelancer web Barcelona"
  ],
  openGraph: {
    title: "Diseño Web Barcelona y Madrid | Desarrollo Web Profesional",
    description:
      "Agencia de diseño web en Barcelona. Creamos páginas web optimizadas para SEO, rápidas y personalizadas para empresas en Barcelona.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://www.softwans.com/barcelona",
  },
  other: {
    "geo.region": "ES-CT",
    "geo.placename": "Barcelona",
    "geo.position": "41.3851;2.1734",
    ICBM: "41.3851, 2.1734",
  },
}

export default function DesarrolloWebPage() {
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
                    <span className="text-white">Diseño Web en </span>
                    <span className="text-gradient bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                      Barcelona
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-xl text-white/80">
                    Creamos páginas web profesionales, modernas y optimizadas para SEO que convierten visitantes en
                    clientes. Diseñador web experto con más de 5 años de experiencia en Barcelona y Madrid.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20el%20diseño%20web%20profesional"
                    target="_blank"
                  >
                    <Button size="lg" className="group w-full sm:w-auto shadow-neon">
                      Solicitar Presupuesto Gratis
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="#portfolio">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white">
                      Ver Portfolio
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-white/70">Webs Creadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-white/70">Años Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-white/70">Clientes Satisfechos</div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative overflow-hidden rounded-3xl border bg-glass shadow-xl backdrop-blur">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Diseño web profesional Barcelona Madrid"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Desarrollo Web */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Globe className="mr-2 h-4 w-4" />
                Nuestros Servicios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Desarrollo Web Completo en Barcelona y Madrid
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Ofrecemos servicios integrales de diseño y desarrollo web para empresas en Barcelona, Madrid y toda
                España.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-primary" />,
                  title: "Diseño Web Responsive",
                  description:
                    "Páginas web que se adaptan perfectamente a todos los dispositivos: móviles, tablets y ordenadores.",
                },
                {
                  icon: <Search className="h-10 w-10 text-primary" />,
                  title: "SEO Optimizado",
                  description:
                    "Desarrollo web optimizado para aparecer en las primeras posiciones de Google y otros buscadores.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-primary" />,
                  title: "Carga Ultra Rápida",
                  description:
                    "Páginas web optimizadas para cargar en menos de 3 segundos, mejorando la experiencia del usuario.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "Seguridad Avanzada",
                  description:
                    "Implementamos las mejores prácticas de seguridad web con certificados SSL y protección contra ataques.",
                },
                {
                  icon: <Palette className="h-10 w-10 text-primary" />,
                  title: "Diseño Personalizado",
                  description:
                    "Diseños únicos y personalizados que reflejan la identidad de tu marca y destacan de la competencia.",
                },
                {
                  icon: <Database className="h-10 w-10 text-primary" />,
                  title: "CMS y Gestión",
                  description:
                    "Sistemas de gestión de contenido fáciles de usar para que puedas actualizar tu web sin conocimientos técnicos.",
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

        {/* Por qué elegirnos */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <Award className="mr-2 h-4 w-4" />
                  ¿Por qué elegirnos?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  El Mejor Diseñador Web en Barcelona y Madrid
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Con más de 5 años de experiencia creando páginas web exitosas para empresas en Barcelona, Madrid y
                  toda España, somos tu mejor opción para el desarrollo web profesional.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Clock className="h-6 w-6 text-primary" />,
                      title: "Entrega Rápida",
                      description: "Tu página web lista en 7-14 días laborables",
                    },
                    {
                      icon: <Users className="h-6 w-6 text-primary" />,
                      title: "Soporte Continuo",
                      description: "Mantenimiento y soporte técnico incluido durante 6 meses",
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6 text-primary" />,
                      title: "Resultados Garantizados",
                      description: "Páginas web que convierten visitantes en clientes reales",
                    },
                    {
                      icon: <Star className="h-6 w-6 text-primary" />,
                      title: "Calidad Premium",
                      description: "Diseños únicos y código limpio siguiendo las mejores prácticas",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
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
                  alt="Diseñador web Barcelona Madrid trabajando"
                  className="rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Trabajo */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Settings className="mr-2 h-4 w-4" />
                Nuestro Proceso
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cómo Creamos tu Página Web
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Un proceso probado que garantiza resultados excepcionales en cada proyecto de desarrollo web.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Consulta Inicial",
                  description: "Analizamos tus necesidades, objetivos y competencia para crear la estrategia perfecta.",
                },
                {
                  step: "02",
                  title: "Diseño y Prototipo",
                  description: "Creamos mockups y prototipos para que visualices cómo será tu página web.",
                },
                {
                  step: "03",
                  title: "Desarrollo",
                  description: "Programamos tu web con las últimas tecnologías, optimizada para velocidad y SEO.",
                },
                {
                  step: "04",
                  title: "Lanzamiento",
                  description: "Publicamos tu web, configuramos analytics y te enseñamos a gestionarla.",
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

        {/* Tecnologías */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Code className="mr-2 h-4 w-4" />
                Tecnologías
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tecnologías Modernas para Desarrollo Web
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Utilizamos las tecnologías más avanzadas para crear páginas web rápidas, seguras y escalables.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "React",
                "Next.js",
                "WordPress",
                "HTML5",
                "CSS3",
                "JavaScript",
                "PHP",
                "MySQL",
                "Node.js",
                "Tailwind CSS",
                "Bootstrap",
                "Figma",
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

        {/* CTA Final */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

              <div className="relative z-10 flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                    ¿Listo para tener la mejor página web?
                  </h2>
                  <p className="text-xl text-white/80">
                    Contacta con nosotros hoy mismo y obtén un presupuesto gratuito para tu proyecto de diseño web en
                    Barcelona o Madrid.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/1234567890?text=Hola,%20quiero%20un%20presupuesto%20para%20diseño%20web"
                    target="_blank"
                  >
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp Gratis
                    </Button>
                  </Link>
                  <Link href="#contacto">
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

        {/* Schema Markup para SEO Local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Softwans - Diseño Web Barcelona",
              description:
                "Diseño web profesional en Barcelona y Madrid. Creamos páginas web modernas, responsivas y optimizadas para SEO.",
              url: "https://softwans.com/desarrollo-web",
              telephone: "+58-424-267-0533",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Calle Principal 123",
                  addressLocality: "Barcelona",
                  addressRegion: "Cataluña",
                  postalCode: "08001",
                  addressCountry: "ES",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Gran Vía 456",
                  addressLocality: "Madrid",
                  addressRegion: "Madrid",
                  postalCode: "28001",
                  addressCountry: "ES",
                },
              ],
              geo: [
                {
                  "@type": "GeoCoordinates",
                  latitude: 41.3851,
                  longitude: 2.1734,
                },
                {
                  "@type": "GeoCoordinates",
                  latitude: 40.4168,
                  longitude: -3.7038,
                },
              ],
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: [
                "https://www.facebook.com/softwans",
                "https://www.instagram.com/softwans",
                "https://www.linkedin.com/companysoftwans",
              ],
              service: {
                "@type": "Service",
                name: "Diseño y Desarrollo Web",
                description:
                  "Servicios profesionales de diseño web, desarrollo web responsive, SEO y mantenimiento web.",
                provider: {
                  "@type": "Organization",
                  name: "Softwans",
                },
                areaServed: ["Barcelona", "España"],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Servicios de Diseño Web",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Diseño Web Responsive",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Desarrollo Web SEO",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Mantenimiento Web",
                      },
                    },
                  ],
                },
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
