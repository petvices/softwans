"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, MessageSquare, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20 md:py-32">
      {/* Fondo con efecto de partículas */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/images/background.webp" alt="Background Pattern" fill className="object-cover" priority />
      </div>

      {/* Círculos decorativos */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="mr-1">✨</span> Potencia tu presencia digital
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Software & Marketing <span className="text-primary">Digital</span>
              </h1>
              <p className="max-w-[600px] text-xl text-muted-foreground">
                Transformamos tu negocio con soluciones tecnológicas y estrategias de marketing que generan resultados
                reales.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#contacto">
                <Button size="lg" className="group w-full sm:w-auto">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link
                href="https://wa.me/message/Y5IO4FCCEMICH1"
                target="_blank"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contactar por WhatsApp
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center rounded-lg border bg-background/50 p-3 backdrop-blur">
                <Code className="mb-2 h-6 w-6 text-primary" />
                <p className="text-center text-sm font-medium">Desarrollo</p>
              </div>
              <div className="flex flex-col items-center rounded-lg border bg-background/50 p-3 backdrop-blur">
                <TrendingUp className="mb-2 h-6 w-6 text-primary" />
                <p className="text-center text-sm font-medium">Marketing Digital</p>
              </div>
              <div className="flex flex-col items-center rounded-lg border bg-background/50 p-3 backdrop-blur">
                <MessageSquare className="mb-2 h-6 w-6 text-primary" />
                <p className="text-center text-sm font-medium">Redes Sociales</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 z-0 translate-x-10 translate-y-10 rounded-3xl bg-primary/20 blur-xl"></div>
            <div className="relative z-10 overflow-hidden rounded-3xl border bg-background/80 shadow-xl backdrop-blur">
              <Image
                src="/images/index.webp"
                width={600}
                height={600}
                alt="Digital Marketing"
                className="w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
