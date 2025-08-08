import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/softwans/header"
import { Footer } from "@/components/softwans/footer"
import { WhatsAppButton } from "@/components/softwans/whatsapp-button"
import {
  ArrowRight,
  Smartphone,
  Tablet,
  Monitor,
  Code,
  Zap,
  Shield,
  Users,
  Star,
  Cpu,
  Database,
  Lock,
  Award,
  Settings,
  Target,
  Lightbulb,
  Activity,
  MessageSquare,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Desarrollo de Aplicaciones Móviles | Apps iOS y Android Profesionales | Softwans",
  description:
    "Desarrollo de aplicaciones móviles nativas y multiplataforma. Apps iOS, Android, React Native, Flutter. Diseño UX/UI, backend, publicación App Store y Google Play.",
  keywords: [
    "desarrollo aplicaciones móviles",
    "apps iOS",
    "apps Android",
    "aplicaciones nativas",
    "React Native",
    "Flutter",
    "desarrollo app móvil",
    "programación móvil",
    "diseño app",
    "UX UI móvil",
    "App Store",
    "Google Play",
    "aplicaciones multiplataforma",
    "desarrollo iOS",
    "desarrollo Android",
    "programador app",
    "empresa desarrollo móvil",
    "crear aplicación móvil",
    "app nativa",
    "aplicación híbrida",
    "Swift",
    "Kotlin",
    "backend móvil",
    "API REST",
    "push notifications",
    "testing móvil",
    "seguridad móvil",
    "performance móvil",
  ],
  openGraph: {
    title: "Desarrollo de Aplicaciones Móviles Profesionales | iOS y Android",
    description:
      "Creamos aplicaciones móviles nativas y multiplataforma. Especialistas en iOS, Android, React Native y Flutter.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://www.softwans.com/aplicaciones-móviles",
  },
}

export default function DesarrolloAplicacionesMoviles() {
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
                  <Smartphone className="mr-2 h-4 w-4" />
                  Desarrollo de Apps Móviles
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="text-white">Desarrollo de </span>
                    <span className="text-gradient bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                      Aplicaciones Móviles
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-xl text-white/80">
                    Creamos aplicaciones móviles nativas y multiplataforma para iOS y Android. Desde la
                    conceptualización hasta la publicación en App Store y Google Play, desarrollamos apps que destacan
                    por su rendimiento, diseño y experiencia de usuario.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/message/Y5IO4FCCEMICH1"
                    target="_blank"
                  >
                    <Button size="lg" className="group w-full sm:w-auto shadow-neon">
                      Consulta Gratuita
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="#servicios">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white">
                      Ver Portfolio Apps
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-white/70">Apps Desarrolladas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-white/70">Tasa de Éxito</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.9★</div>
                    <div className="text-sm text-white/70">Rating Apps</div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative overflow-hidden rounded-3xl border bg-glass shadow-xl backdrop-blur">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Desarrollo de aplicaciones móviles iOS y Android"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Desarrollo Móvil */}
        <section id="servicios" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Target className="mr-2 h-4 w-4" />
                Servicios de Desarrollo Móvil
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Servicios Completos de Desarrollo de Apps
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Ofrecemos soluciones integrales de desarrollo móvil adaptadas a las necesidades específicas de tu
                negocio
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Smartphone className="h-10 w-10 text-primary" />,
                  title: "Desarrollo iOS Nativo",
                  description:
                    "Apps nativas para iPhone y iPad con Swift y Objective-C, optimizadas para el ecosistema Apple.",
                },
                {
                  icon: <Monitor className="h-10 w-10 text-primary" />,
                  title: "Desarrollo Android Nativo",
                  description:
                    "Aplicaciones nativas para Android con Kotlin y Java, siguiendo Material Design Guidelines.",
                },
                {
                  icon: <Tablet className="h-10 w-10 text-primary" />,
                  title: "Apps Multiplataforma",
                  description:
                    "Desarrollo híbrido con React Native y Flutter para máxima eficiencia y alcance de mercado.",
                },
                {
                  icon: <Code className="h-10 w-10 text-primary" />,
                  title: "Diseño UX/UI Móvil",
                  description:
                    "Interfaces intuitivas y experiencias de usuario optimizadas específicamente para dispositivos móviles.",
                },
                {
                  icon: <Database className="h-10 w-10 text-primary" />,
                  title: "Backend y APIs",
                  description:
                    "Desarrollo de backend robusto y APIs REST/GraphQL para alimentar tus aplicaciones móviles.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "Testing y QA Móvil",
                  description:
                    "Pruebas exhaustivas en dispositivos reales y simuladores para garantizar máxima calidad.",
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

        {/* Tipos de Aplicaciones */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Lightbulb className="mr-2 h-4 w-4" />
                Tipos de Aplicaciones
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Aplicaciones Móviles Especializadas
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Desarrollamos diferentes tipos de aplicaciones móviles según las necesidades de cada sector
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Apps E-commerce",
                  description: "Tiendas online móviles con carrito, pagos y gestión de inventario",
                },
                {
                  icon: <Zap className="h-8 w-8 text-primary" />,
                  title: "Apps Empresariales",
                  description: "Soluciones corporativas para gestión interna y productividad",
                },
                {
                  icon: <Star className="h-8 w-8 text-primary" />,
                  title: "Apps Sociales",
                  description: "Redes sociales, chat, comunidades y plataformas de interacción",
                },
                {
                  icon: <Lock className="h-8 w-8 text-primary" />,
                  title: "Apps Fintech",
                  description: "Aplicaciones financieras, wallets digitales y pagos móviles",
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

        {/* Por qué elegirnos */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <Award className="mr-2 h-4 w-4" />
                  Ventajas del Desarrollo Móvil
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  ¿Por qué Elegir Nuestro Desarrollo de Apps?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Combinamos experiencia técnica, diseño innovador y metodologías ágiles para crear aplicaciones móviles
                  excepcionales que destacan en el mercado.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Cpu className="h-6 w-6 text-primary" />,
                      title: "Tecnología Avanzada",
                      description: "Utilizamos las últimas tecnologías y frameworks para desarrollo móvil moderno",
                    },
                    {
                      icon: <Shield className="h-6 w-6 text-primary" />,
                      title: "Seguridad Garantizada",
                      description: "Implementamos las mejores prácticas de seguridad móvil y cifrado de datos",
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-primary" />,
                      title: "Alto Rendimiento",
                      description: "Optimizamos cada aspecto para máximo rendimiento y eficiencia energética",
                    },
                    {
                      icon: <Star className="h-6 w-6 text-primary" />,
                      title: "UX Excepcional",
                      description: "Diseñamos interfaces intuitivas que deleitan y fidelizan usuarios",
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
                  src="images/aplication-creation.webp?height=600&width=500"
                  width={500}
                  height={600}
                  alt="Desarrollo de aplicaciones móviles profesionales"
                  className="rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Desarrollo */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Activity className="mr-2 h-4 w-4" />
                Proceso de Desarrollo
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nuestro Proceso de Desarrollo de Apps
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Metodología ágil y probada que garantiza el éxito de tu proyecto de aplicación móvil
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Análisis y Planificación",
                  description:
                    "Definimos objetivos, audiencia target, funcionalidades clave y arquitectura técnica de la aplicación.",
                },
                {
                  step: "02",
                  title: "Diseño UX/UI",
                  description:
                    "Creamos wireframes, prototipos interactivos y diseños finales optimizados para móviles.",
                },
                {
                  step: "03",
                  title: "Desarrollo y Testing",
                  description:
                    "Programación ágil con sprints, testing continuo e integración de funcionalidades avanzadas.",
                },
                {
                  step: "04",
                  title: "Lanzamiento y Soporte",
                  description: "Publicación en tiendas, monitoreo post-lanzamiento y actualizaciones continuas.",
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
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Settings className="mr-2 h-4 w-4" />
                Tecnologías Móviles
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Stack Tecnológico para Desarrollo Móvil
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Utilizamos las mejores tecnologías y herramientas para desarrollo de aplicaciones móviles modernas
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Swift",
                "Objective-C",
                "Kotlin",
                "Java",
                "React Native",
                "Flutter",
                "Dart",
                "Xamarin",
                "Ionic",
                "Cordova",
                "Node.js",
                "Express",
                "Firebase",
                "AWS Mobile",
                "GraphQL",
                "REST APIs",
                "SQLite",
                "Realm",
                "Core Data",
                "MongoDB",
                "PostgreSQL",
                "Redis",
                "Xcode",
                "Android Studio",
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
                Preguntas Frecuentes sobre Desarrollo de Apps
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Resolvemos las dudas más comunes sobre desarrollo de aplicaciones móviles
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  question: "¿Cuánto tiempo tarda en desarrollarse una app móvil?",
                  answer:
                    "El tiempo varía según complejidad: apps simples (2-3 meses), medianas (4-6 meses), complejas (6-12 meses). Incluye diseño, desarrollo, testing y lanzamiento en tiendas.",
                },
                {
                  question: "¿Es mejor desarrollar nativo o multiplataforma?",
                  answer:
                    "Nativo ofrece máximo rendimiento y acceso completo a funcionalidades, mientras multiplataforma es más eficiente en costos y tiempo para llegar a ambas plataformas simultáneamente.",
                },
                {
                  question: "¿Incluyen la publicación en App Store y Google Play?",
                  answer:
                    "Sí, incluimos preparación de assets, descripción optimizada ASO, cumplimiento guidelines, gestión del proceso de aprobación y configuración de analytics.",
                },
                {
                  question: "¿Ofrecen mantenimiento posterior al lanzamiento?",
                  answer:
                    "Ofrecemos planes de mantenimiento con actualizaciones de seguridad, compatibilidad con nuevas versiones OS, corrección bugs y soporte técnico 24/7.",
                },
                {
                  question: "¿Cómo garantizan la seguridad de los datos?",
                  answer:
                    "Implementamos cifrado end-to-end, autenticación multifactor, almacenamiento seguro, comunicaciones HTTPS/TLS y cumplimiento de normativas como GDPR.",
                },
                {
                  question: "¿Pueden integrar con sistemas existentes?",
                  answer:
                    "Desarrollamos APIs personalizadas y conectores para integrar con CRM, ERP, bases de datos, servicios de pago y cualquier plataforma empresarial existente.",
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
                    ¿Listo para Crear tu Aplicación Móvil?
                  </h2>
                  <p className="text-xl text-white/80">
                    Convierte tu idea en una app exitosa. Consulta gratuita y presupuesto sin compromiso.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/message/Y5IO4FCCEMICH1"
                    target="_blank"
                  >
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Consulta Gratuita
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

        {/* Schema Markup para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Desarrollo de Aplicaciones Móviles - Softwans",
              description:
                "Servicios profesionales de desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android.",
              provider: {
                "@type": "Organization",
                name: "Softwans",
                url: "https://www.softwans.com",
                logo: "https://www.softwans.com/logo.webp",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+34-123-456-789",
                  contactType: "customer service",
                  availableLanguage: "Spanish",
                },
              },
              serviceType: "Desarrollo de Software Móvil",
              category: "Desarrollo de Aplicaciones",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Desarrollo Móvil",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Desarrollo iOS Nativo",
                      description: "Aplicaciones nativas para iPhone y iPad con Swift y Objective-C",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Desarrollo Android Nativo",
                      description: "Apps nativas para Android con Kotlin y Java",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Apps Multiplataforma",
                      description: "Aplicaciones híbridas con React Native y Flutter",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Diseño UX/UI Móvil",
                      description: "Interfaces optimizadas para dispositivos móviles",
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
