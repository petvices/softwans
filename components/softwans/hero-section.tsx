"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageSquare, TrendingUp, DollarSign, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-blue py-20 md:py-32">
      {/* Partículas animadas */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.6 + 0.2,
            }}
            animate={{
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
            }}
          />
        ))}
      </div>

      {/* Círculos decorativos */}
      <motion.div
        className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1.5 text-sm font-medium text-green-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.span
                className="mr-2"
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              >
                💰
              </motion.span>
              Ayudamos a negocios a VENDER MÁS digitalmente
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-white">¿Tu negocio necesita</span>{" "}
                <motion.span
                  className="text-gradient block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% auto",
                  }}
                >
                  MÁS CLIENTES?
                </motion.span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-gray-300 font-medium">
                  Te ayudamos a conseguir más ventas online sin complicaciones.
                </p>

                {/* Beneficios claros */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                  <motion.div
                    className="flex items-center gap-3 text-green-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <DollarSign className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm font-medium">+300% aumentos de ventas</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-green-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Users className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm font-medium">Miles de seguidores reales</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-green-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Zap className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm font-medium">Resultados en 60 días</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-green-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <TrendingUp className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm font-medium">Sin estrés técnico</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* CTAs mejorados con urgencia */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="https://wa.me/message/Y5IO4FCCEMICH1" target="_blank" className="flex-1">
                <Button
                  size="lg"
                  className="group cta-button w-full shadow-neon bg-green-600 hover:bg-green-700 text-white font-bold"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  ¡QUIERO VENDER MÁS! (GRATIS)
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Button>
              </Link>

              <Link href="/trabajos">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-gradient text-white border-white/30 hover:bg-white/10 bg-transparent"
                >
                  Ver Casos de Éxito
                </Button>
              </Link>
            </div>
            
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 z-0 translate-x-10 translate-y-10 rounded-3xl bg-primary/20 blur-xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <div className="relative z-10 overflow-hidden rounded-3xl border bg-glass shadow-xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-60" />
              <div className="animate-shimmer absolute inset-0" />
              <Image
                src="/images/index.webp"
                width={600}
                height={600}
                alt="Crecimiento de ventas online"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
