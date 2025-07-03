"use client"

import { motion } from "framer-motion"
import {
  Code,
  Database,
  Globe,
  LineChart,
  MessageSquare,
  Search,
  ShoppingBag,
  Smartphone,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Desarrollo Web",
      description:
        "Sitios web profesionales, responsivos y optimizados para SEO que representan perfectamente tu marca.",
      link: "https://wa.me/message/Y5IO4FCCEMICH1",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Marketing Digital",
      description: "Estrategias personalizadas para aumentar tu visibilidad online y generar leads cualificados.",
      link: "https://wa.me/message/Y5IO4FCCEMICH1",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Gestión de Redes Sociales",
      description: "Creación de contenido, programación y análisis para aumentar tu comunidad y engagement.",
      link: "https://wa.me/message/Y5IO4FCCEMICH1",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "SEO",
      description: "Optimización para motores de búsqueda que mejora tu posicionamiento y aumenta el tráfico orgánico.",
      link: "https://wa.me/message/Y5IO4FCCEMICH1",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Desarrollo de Software",
      description: "Soluciones personalizadas para automatizar procesos y mejorar la eficiencia de tu negocio.",
      link: "https://wa.me/message/Y5IO4FCCEMICH1",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      title: "E-Commerce",
      description: "Tiendas online optimizadas para convertir visitantes en clientes y aumentar tus ventas.",
      link: "https://wa.me/message/Y5IO4FCCEMICH1",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Aplicaciones Móviles",
      description: "Apps nativas y multiplataforma que conectan tu negocio con clientes en cualquier lugar.",
      link: "https://wa.me/message/Y5IO4FCCEMICH1",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Analítica de Datos",
      description: "Análisis de métricas para tomar decisiones basadas en datos y optimizar tus estrategias.",
      link: "https://wa.me/message/Y5IO4FCCEMICH1",
    },
  ]

  return (
    <section id="servicios" className="relative overflow-hidden py-20 md:py-32">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>

      {/* Círculos decorativos */}
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="mr-1">🚀</span> Nuestros Servicios
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Soluciones Digitales Completas
          </h2>
          <p className="max-w-[800px] text-xl text-muted-foreground">
            Ofrecemos servicios integrales de software y marketing para impulsar tu negocio en el mundo digital.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"></div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-muted-foreground">{service.description}</p>
              <Link href={service.link} className="inline-block">
                <Button variant="link" className="p-0 text-primary">
                  Cotizar ahora
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="https://wa.me/message/Y5IO4FCCEMICH1">
            <Button size="lg" className="group">
              Solicitar Cotización Personalizada
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

