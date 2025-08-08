import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/softwans/header"
import { Footer } from "@/components/softwans/footer"
import { WhatsAppButton } from "@/components/softwans/whatsapp-button"
import {
  ArrowRight,
  Users,
  Heart,
  Share2,
  MessageSquare,
  Camera,
  TrendingUp,
  Target,
  Zap,
  Award,
  Settings,
  Smartphone,
  Monitor,
  Eye,
  BarChart3,
  Calendar,
  Edit3,
  Video,
  ImageIcon,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Gestión de Redes Sociales Profesional | Social Media Marketing | Softwans",
  description:
    "Gestión profesional de redes sociales para empresas. Community management, creación de contenido, estrategias de social media marketing que aumentan engagement y ventas. Presupuesto gratuito.",
  keywords: [
    "gestión redes sociales",
    "social media marketing",
    "community management",
    "gestión redes sociales empresas",
    "social media manager",
    "redes sociales profesional",
    "marketing redes sociales",
    "gestión Facebook",
    "gestión Instagram",
    "gestión LinkedIn",
    "gestión Twitter",
    "gestión TikTok",
    "gestión YouTube",
    "contenido redes sociales",
    "creación contenido social",
    "estrategia redes sociales",
    "publicidad redes sociales",
    "Facebook Ads",
    "Instagram Ads",
    "LinkedIn Ads",
    "Twitter Ads",
    "TikTok Ads",
    "community manager",
    "social media strategy",
    "engagement redes sociales",
    "followers redes sociales",
    "crecimiento redes sociales",
    "analítica redes sociales",
    "métricas redes sociales",
    "ROI redes sociales",
    "influencer marketing",
    "marketing viral",
    "contenido viral",
    "storytelling redes sociales",
    "branding redes sociales",
    "reputación online",
    "crisis comunicación",
    "social listening",
    "monitoreo redes sociales",
    "programación contenido",
    "calendario editorial",
    "hashtags estratégicos",
    "social commerce",
    "venta redes sociales",
  ],
  openGraph: {
    title: "Gestión de Redes Sociales Profesional | Social Media Marketing",
    description:
      "Gestión profesional de redes sociales. Community management, contenido y estrategias que aumentan engagement.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://www.softwans.com/gestión-redes-sociales",
  },
}

export default function GestionRedesSocialesPage() {
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
                  <Users className="mr-2 h-4 w-4" />
                  Gestión de Redes Sociales
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="text-white">Gestión de Redes Sociales </span>
                    <span className="text-gradient bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                      Profesional
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-xl text-white/80">
                    Community management profesional que hace crecer tu comunidad online. Creamos contenido viral,
                    gestionamos tus redes sociales y aumentamos tu engagement y ventas.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/message/Y5IO4FCCEMICH1"
                    target="_blank"
                  >
                    <Button size="lg" className="group w-full sm:w-auto shadow-neon">
                      Solicitar Análisis Gratis
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
                    <div className="text-2xl font-bold text-primary">500%</div>
                    <div className="text-sm text-white/70">Crecimiento Promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-sm text-white/70">Cuentas Gestionadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-white/70">Engagement Rate</div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative overflow-hidden rounded-3xl border bg-glass shadow-xl backdrop-blur">
                  <Image
                    src="https://cdn.pixabay.com/photo/2020/02/08/14/28/camera-4830248_1280.jpg"
                    width={600}
                    height={600}
                    alt="Gestión profesional de redes sociales y community management"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Gestión de Redes Sociales */}
        <section id="servicios" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Share2 className="mr-2 h-4 w-4" />
                Servicios de Social Media
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Community Management Completo para tu Empresa
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Ofrecemos servicios integrales de gestión de redes sociales, desde la creación de contenido hasta la
                gestión de comunidades online.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Edit3 className="h-10 w-10 text-primary" />,
                  title: "Creación de Contenido",
                  description:
                    "Contenido original, atractivo y optimizado para cada plataforma que conecta con tu audiencia.",
                },
                {
                  icon: <Calendar className="h-10 w-10 text-primary" />,
                  title: "Programación y Publicación",
                  description:
                    "Calendario editorial estratégico con publicaciones programadas en los mejores horarios.",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Community Management",
                  description:
                    "Gestión activa de tu comunidad, respuesta a comentarios y construcción de relaciones sólidas.",
                },
                {
                  icon: <Target className="h-10 w-10 text-primary" />,
                  title: "Publicidad en Redes Sociales",
                  description:
                    "Campañas publicitarias optimizadas en Facebook, Instagram, LinkedIn y otras plataformas.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-primary" />,
                  title: "Analítica y Reportes",
                  description: "Análisis detallado de métricas, engagement y ROI con reportes mensuales completos.",
                },
                {
                  icon: <Eye className="h-10 w-10 text-primary" />,
                  title: "Monitoreo de Marca",
                  description:
                    "Social listening para monitorear menciones de tu marca y gestionar tu reputación online.",
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

        {/* Plataformas de Redes Sociales */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Smartphone className="mr-2 h-4 w-4" />
                Plataformas que Gestionamos
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Gestión Especializada en Todas las Redes Sociales
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Dominamos todas las plataformas sociales principales con estrategias específicas para cada una.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Facebook",
                  description: "Gestión completa de páginas empresariales y campañas publicitarias",
                },
                {
                  icon: <Camera className="h-8 w-8 text-primary" />,
                  title: "Instagram",
                  description: "Contenido visual atractivo, stories, reels y gestión de influencers",
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "LinkedIn",
                  description: "Estrategias B2B, networking profesional y thought leadership",
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-primary" />,
                  title: "Twitter",
                  description: "Engagement en tiempo real, trending topics y customer service",
                },
                {
                  icon: <Video className="h-8 w-8 text-primary" />,
                  title: "TikTok",
                  description: "Contenido viral, tendencias y alcance de audiencia joven",
                },
                {
                  icon: <Video className="h-8 w-8 text-primary" />,
                  title: "YouTube",
                  description: "Estrategia de video marketing y optimización de canal",
                },
                {
                  icon: <ImageIcon className="h-8 w-8 text-primary" />,
                  title: "Pinterest",
                  description: "Marketing visual para e-commerce y generación de tráfico",
                },
                {
                  icon: <Share2 className="h-8 w-8 text-primary" />,
                  title: "Otras Plataformas",
                  description: "Snapchat, WhatsApp Business, Telegram y redes emergentes",
                },
              ].map((platform, index) => (
                <div
                  key={index}
                  className="text-center rounded-xl border bg-background/50 p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    {platform.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{platform.title}</h3>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ventajas de la Gestión Profesional */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <Award className="mr-2 h-4 w-4" />
                  Ventajas del Community Management
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  ¿Por qué Contratar Gestión Profesional de Redes Sociales?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  La gestión profesional de redes sociales es clave para construir una comunidad sólida, aumentar el
                  engagement y convertir seguidores en clientes.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <TrendingUp className="h-6 w-6 text-primary" />,
                      title: "Crecimiento Orgánico",
                      description: "Estrategias que aumentan seguidores reales y engagement auténtico",
                    },
                    {
                      icon: <Heart className="h-6 w-6 text-primary" />,
                      title: "Mayor Engagement",
                      description: "Contenido que genera interacción, comentarios y shares genuinos",
                    },
                    {
                      icon: <Target className="h-6 w-6 text-primary" />,
                      title: "Conversión de Ventas",
                      description: "Estrategias que convierten seguidores en leads y clientes reales",
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-primary" />,
                      title: "Ahorro de Tiempo",
                      description: "Gestión completa mientras tú te enfocas en tu negocio principal",
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
                  alt="Community management y gestión de redes sociales en acción"
                  className="rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Gestión */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Settings className="mr-2 h-4 w-4" />
                Nuestro Proceso
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cómo Gestionamos tus Redes Sociales
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Un proceso estructurado que garantiza el crecimiento constante y el engagement de tu comunidad online.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Auditoría Social",
                  description: "Analizamos tu presencia actual, competencia y oportunidades en cada plataforma social.",
                },
                {
                  step: "02",
                  title: "Estrategia Personalizada",
                  description: "Creamos un plan de contenido y engagement específico para tu marca y audiencia.",
                },
                {
                  step: "03",
                  title: "Creación y Publicación",
                  description:
                    "Producimos contenido de calidad y lo publicamos siguiendo el calendario editorial optimizado.",
                },
                {
                  step: "04",
                  title: "Gestión y Optimización",
                  description: "Gestionamos la comunidad activamente y optimizamos basándonos en métricas reales.",
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

        {/* Herramientas de Gestión */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Monitor className="mr-2 h-4 w-4" />
                Herramientas Profesionales
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Herramientas de Social Media que Utilizamos
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Trabajamos con las mejores herramientas de gestión de redes sociales para maximizar resultados.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Hootsuite",
                "Buffer",
                "Sprout Social",
                "Later",
                "Canva",
                "Adobe Creative Suite",
                "Meta Business Suite",
                "Creator Studio",
                "LinkedIn Campaign Manager",
                "Twitter Ads Manager",
                "TikTok Ads Manager",
                "YouTube Studio",
                "Pinterest Business",
                "Snapchat Ads",
                "Google Analytics",
                "Facebook Analytics",
                "Brandwatch",
                "Mention",
                "BuzzSumo",
                "Socialbakers",
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
                Preguntas Frecuentes sobre Gestión de Redes Sociales
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Resolvemos las dudas más comunes sobre nuestros servicios de community management profesional.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  question: "¿Cuántas publicaciones incluye el servicio?",
                  answer:
                    "Depende del plan elegido. Nuestros paquetes van desde 15 publicaciones mensuales hasta 60+ publicaciones, incluyendo posts, stories, reels y contenido interactivo personalizado.",
                },
                {
                  question: "¿Responden a comentarios y mensajes?",
                  answer:
                    "Sí, incluimos community management activo. Respondemos comentarios, mensajes directos y gestionamos la interacción con tu audiencia en horario comercial.",
                },
                {
                  question: "¿Crean el contenido desde cero?",
                  answer:
                    "Absolutamente. Nuestro equipo creativo produce contenido original: textos, diseños, videos, stories y reels adaptados a tu marca y cada plataforma específica.",
                },
                {
                  question: "¿Incluyen publicidad en redes sociales?",
                  answer:
                    "La gestión orgánica y la publicidad son servicios separados. Podemos gestionar tus campañas publicitarias con presupuesto adicional para maximizar el alcance y conversiones.",
                },
                {
                  question: "¿Qué métricas reportan mensualmente?",
                  answer:
                    "Reportamos alcance, engagement, crecimiento de seguidores, interacciones, tráfico web generado, leads obtenidos y ROI de las acciones realizadas.",
                },
                {
                  question: "¿Trabajan con todas las redes sociales?",
                  answer:
                    "Sí, gestionamos Facebook, Instagram, LinkedIn, Twitter, TikTok, YouTube, Pinterest y otras plataformas según las necesidades de tu negocio y audiencia objetivo.",
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
                    ¿Listo para hacer crecer tu comunidad online?
                  </h2>
                  <p className="text-xl text-white/80">
                    Contacta con nosotros hoy mismo y obtén un análisis gratuito de tus redes sociales. Sin compromiso.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/message/Y5IO4FCCEMICH1"
                    target="_blank"
                  >
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Análisis Gratis
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
              name: "Gestión de Redes Sociales Profesional - Softwans",
              description:
                "Servicios profesionales de gestión de redes sociales, community management, creación de contenido y social media marketing.",
              provider: {
                "@type": "Organization",
                name: "Softwans",
                url: "https://www.softwans.com",
                logo: "https://www.softwans.comlogo.webp",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+58-424-267-0533",
                  contactType: "customer service",
                  availableLanguage: "Spanish",
                },
              },
              serviceType: "Gestión de Redes Sociales",
              category: "Marketing y Comunicación",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Gestión de Redes Sociales",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Community Management",
                      description: "Gestión activa de comunidades online y engagement con audiencia",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Creación de Contenido",
                      description: "Producción de contenido original para redes sociales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Publicidad en Redes Sociales",
                      description: "Campañas publicitarias optimizadas en plataformas sociales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Analítica Social",
                      description: "Análisis de métricas y reportes de rendimiento en redes sociales",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "156",
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
