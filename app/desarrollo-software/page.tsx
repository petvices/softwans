import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/softwans/header"
import { Footer } from "@/components/softwans/footer"
import { WhatsAppButton } from "@/components/softwans/whatsapp-button"
import {
  ArrowRight,
  Code,
  Database,
  Server,
  Smartphone,
  Monitor,
  Cloud,
  Shield,
  Zap,
  Award,
  Settings,
  Users,
  BarChart3,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Package,
  Workflow,
  CheckCircle,
  Target,
  MessageSquare,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Desarrollo de Software Personalizado | Programación a Medida | Softwans",
  description:
    "Desarrollo de software personalizado para empresas. Aplicaciones web, software de gestión, sistemas ERP, CRM y soluciones tecnológicas a medida. Programación profesional con las mejores tecnologías.",
  keywords: [
    "desarrollo software",
    "desarrollo software personalizado",
    "programación software",
    "software a medida",
    "desarrollo aplicaciones",
    "software empresarial",
    "desarrollo software empresas",
    "programación a medida",
    "software personalizado",
    "desarrollo sistemas",
    "aplicaciones empresariales",
    "software de gestión",
    "sistema ERP",
    "sistema CRM",
    "software contable",
    "software facturación",
    "software inventario",
    "aplicaciones web",
    "aplicaciones escritorio",
    "desarrollo backend",
    "desarrollo frontend",
    "API development",
    "microservicios",
    "arquitectura software",
    "base de datos",
    "desarrollo full stack",
    "programador software",
    "empresa desarrollo software",
    "consultoría software",
    "mantenimiento software",
    "migración software",
    "integración sistemas",
    "automatización procesos",
    "software cloud",
    "software seguro",
    "desarrollo ágil",
    "metodología scrum",
    "testing software",
    "calidad software",
    "documentación software",
    "soporte técnico software",
  ],
  openGraph: {
    title: "Desarrollo de Software Personalizado | Programación a Medida",
    description:
      "Desarrollo de software personalizado para empresas. Aplicaciones web, sistemas de gestión y soluciones a medida.",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://www.softwans.com/desarrollo-software",
  },
}

export default function DesarrolloSoftwarePage() {
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
                  Desarrollo de Software
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="text-white">Desarrollo de Software </span>
                    <span className="text-gradient bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                      Personalizado
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-xl text-white/80">
                    Creamos software a medida que automatiza procesos, optimiza operaciones y impulsa el crecimiento de
                    tu empresa. Soluciones tecnológicas personalizadas con las mejores prácticas de desarrollo.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/message/Y5IO4FCCEMICH1"
                    target="_blank"
                  >
                    <Button size="lg" className="group w-full sm:w-auto shadow-neon">
                      Solicitar Consultoría Gratis
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
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-white/70">Proyectos Software</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">8+</div>
                    <div className="text-sm text-white/70">Años Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">99%</div>
                    <div className="text-sm text-white/70">Proyectos Exitosos</div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative overflow-hidden rounded-3xl border bg-glass shadow-xl backdrop-blur">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Desarrollo de software personalizado y programación a medida"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Desarrollo de Software */}
        <section id="servicios" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Terminal className="mr-2 h-4 w-4" />
                Servicios de Desarrollo
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Soluciones de Software Completas para tu Empresa
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Ofrecemos servicios integrales de desarrollo de software, desde aplicaciones web hasta sistemas
                empresariales complejos.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Monitor className="h-10 w-10 text-primary" />,
                  title: "Aplicaciones Web",
                  description:
                    "Desarrollo de aplicaciones web modernas, escalables y seguras con interfaces intuitivas y funcionalidades avanzadas.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-primary" />,
                  title: "Aplicaciones Móviles",
                  description:
                    "Apps nativas y multiplataforma para iOS y Android que conectan tu negocio con clientes en cualquier lugar.",
                },
                {
                  icon: <Database className="h-10 w-10 text-primary" />,
                  title: "Sistemas de Gestión",
                  description:
                    "ERP, CRM y sistemas de gestión empresarial personalizados que optimizan procesos y aumentan productividad.",
                },
                {
                  icon: <Server className="h-10 w-10 text-primary" />,
                  title: "APIs y Microservicios",
                  description:
                    "Desarrollo de APIs robustas y arquitecturas de microservicios para integración y escalabilidad óptima.",
                },
                {
                  icon: <Cloud className="h-10 w-10 text-primary" />,
                  title: "Software en la Nube",
                  description:
                    "Soluciones cloud-native que aprovechan la escalabilidad y flexibilidad de la computación en la nube.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "Software Seguro",
                  description:
                    "Desarrollo con las mejores prácticas de seguridad, cifrado de datos y protección contra vulnerabilidades.",
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

        {/* Tipos de Software */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Package className="mr-2 h-4 w-4" />
                Tipos de Software
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Desarrollamos Todo Tipo de Software Empresarial
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Desde sistemas de gestión hasta aplicaciones especializadas, tenemos la experiencia para crear cualquier
                solución de software.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <BarChart3 className="h-8 w-8 text-primary" />,
                  title: "Software ERP",
                  description: "Sistemas de planificación de recursos empresariales integrados",
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Software CRM",
                  description: "Gestión de relaciones con clientes y automatización de ventas",
                },
                {
                  icon: <Cog className="h-8 w-8 text-primary" />,
                  title: "Software de Gestión",
                  description: "Sistemas personalizados para gestión de procesos específicos",
                },
                {
                  icon: <Workflow className="h-8 w-8 text-primary" />,
                  title: "Automatización",
                  description: "Software para automatizar procesos y workflows empresariales",
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

        {/* Ventajas del Desarrollo Personalizado */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <Award className="mr-2 h-4 w-4" />
                  Ventajas del Software Personalizado
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  ¿Por qué Elegir Desarrollo de Software a Medida?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  El software personalizado se adapta exactamente a tus necesidades empresariales, optimizando procesos
                  y generando ventajas competitivas únicas.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <CheckCircle className="h-6 w-6 text-primary" />,
                      title: "Adaptación Total",
                      description: "Software diseñado específicamente para tus procesos y necesidades únicas",
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-primary" />,
                      title: "Mayor Eficiencia",
                      description: "Automatización de procesos que reduce tiempo y costos operativos",
                    },
                    {
                      icon: <Shield className="h-6 w-6 text-primary" />,
                      title: "Seguridad Avanzada",
                      description: "Control total sobre la seguridad y protección de datos empresariales",
                    },
                    {
                      icon: <Target className="h-6 w-6 text-primary" />,
                      title: "Escalabilidad",
                      description: "Software que crece con tu empresa y se adapta a nuevos requerimientos",
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
                  src="images/web-creation.webp?height=600&width=500"
                  width={500}
                  height={600}
                  alt="Desarrollo de software personalizado en acción"
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
                <Settings className="mr-2 h-4 w-4" />
                Proceso de Desarrollo
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nuestro Proceso de Desarrollo de Software
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Metodología ágil y probada que garantiza la entrega exitosa de software de alta calidad.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Análisis y Diseño",
                  description:
                    "Analizamos tus necesidades, definimos requerimientos y diseñamos la arquitectura del software.",
                },
                {
                  step: "02",
                  title: "Desarrollo Ágil",
                  description: "Programamos usando metodologías ágiles con entregas incrementales y feedback continuo.",
                },
                {
                  step: "03",
                  title: "Testing y QA",
                  description: "Realizamos pruebas exhaustivas de funcionalidad, rendimiento y seguridad del software.",
                },
                {
                  step: "04",
                  title: "Despliegue y Soporte",
                  description: "Implementamos el software y proporcionamos soporte técnico y mantenimiento continuo.",
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

        {/* Tecnologías de Desarrollo */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <GitBranch className="mr-2 h-4 w-4" />
                Tecnologías de Desarrollo
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tecnologías Modernas para Desarrollo de Software
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Utilizamos las tecnologías más avanzadas y frameworks modernos para crear software robusto y escalable.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Python",
                "Java",
                "C#",
                "JavaScript",
                "TypeScript",
                "React",
                "Angular",
                "Vue.js",
                "Node.js",
                "Django",
                "Spring Boot",
                ".NET Core",
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "Redis",
                "Docker",
                "Kubernetes",
                "AWS",
                "Azure",
                "Google Cloud",
                "Git",
                "Jenkins",
                "Terraform",
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

        {/* Metodologías de Desarrollo */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Layers className="mr-2 h-4 w-4" />
                Metodologías
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Metodologías de Desarrollo Ágil
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Aplicamos las mejores prácticas de desarrollo ágil para garantizar entregas exitosas y de calidad.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Workflow className="h-10 w-10 text-primary" />,
                  title: "Metodología Scrum",
                  description: "Desarrollo iterativo con sprints cortos y entregas frecuentes de valor",
                },
                {
                  icon: <GitBranch className="h-10 w-10 text-primary" />,
                  title: "DevOps",
                  description: "Integración continua y despliegue automatizado para mayor eficiencia",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-primary" />,
                  title: "Test-Driven Development",
                  description: "Desarrollo guiado por pruebas para garantizar calidad y robustez",
                },
              ].map((methodology, index) => (
                <div
                  key={index}
                  className="text-center rounded-xl border bg-background/50 p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    {methodology.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{methodology.title}</h3>
                  <p className="text-muted-foreground">{methodology.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Preguntas Frecuentes sobre Desarrollo de Software
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Resolvemos las dudas más comunes sobre nuestros servicios de desarrollo de software personalizado.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  question: "¿Cuánto tiempo tarda el desarrollo de software personalizado?",
                  answer:
                    "El tiempo varía según la complejidad del proyecto. Un software básico puede tomar 2-4 meses, mientras que sistemas complejos pueden requerir 6-12 meses. Proporcionamos cronogramas detallados en la fase de planificación.",
                },
                {
                  question: "¿Incluyen mantenimiento y soporte técnico?",
                  answer:
                    "Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones, corrección de errores, soporte técnico y mejoras continuas. El primer año de soporte está incluido en el desarrollo.",
                },
                {
                  question: "¿El software es escalable para futuras necesidades?",
                  answer:
                    "Absolutamente. Diseñamos arquitecturas escalables que permiten agregar nuevas funcionalidades, usuarios y módulos según crezcan las necesidades de tu empresa.",
                },
                {
                  question: "¿Qué metodología de desarrollo utilizan?",
                  answer:
                    "Utilizamos metodologías ágiles como Scrum, con entregas incrementales cada 2-4 semanas. Esto permite feedback continuo y ajustes durante el desarrollo para garantizar el resultado esperado.",
                },
                {
                  question: "¿Proporcionan documentación y capacitación?",
                  answer:
                    "Sí, entregamos documentación técnica completa, manuales de usuario y proporcionamos capacitación al equipo que utilizará el software. También incluimos videos tutoriales cuando es necesario.",
                },
                {
                  question: "¿Pueden integrar el software con sistemas existentes?",
                  answer:
                    "Por supuesto. Tenemos experiencia integrando software personalizado con sistemas ERP, CRM, bases de datos existentes y APIs de terceros para garantizar un ecosistema tecnológico cohesivo.",
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
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

              <div className="relative z-10 flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                    ¿Listo para crear tu software personalizado?
                  </h2>
                  <p className="text-xl text-white/80">
                    Contacta con nosotros hoy mismo y obtén una consultoría gratuita para tu proyecto de desarrollo de
                    software. Sin compromiso.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/message/Y5IO4FCCEMICH1"
                    target="_blank"
                  >
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Consultoría Gratis
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
              name: "Desarrollo de Software Personalizado - Softwans",
              description:
                "Servicios profesionales de desarrollo de software a medida, aplicaciones web, sistemas de gestión y soluciones tecnológicas personalizadas.",
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
              serviceType: "Desarrollo de Software",
              category: "Tecnología y Programación",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Desarrollo de Software",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aplicaciones Web",
                      description: "Desarrollo de aplicaciones web modernas y escalables",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sistemas de Gestión",
                      description: "ERP, CRM y sistemas empresariales personalizados",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "APIs y Microservicios",
                      description: "Desarrollo de APIs robustas y arquitecturas de microservicios",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Software en la Nube",
                      description: "Soluciones cloud-native escalables y flexibles",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "78",
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
