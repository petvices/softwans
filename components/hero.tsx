"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-10 w-60 h-60 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
                ✨ La IA que revoluciona tu productividad
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">
                Conoce a Hypatia
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
                Tu asistente IA personal que gestiona recordatorios, envía correos y optimiza la gestión de tu negocio
                con inteligencia artificial avanzada.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button
                className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg px-6 py-6 h-auto"
                size="lg"
              >
                <span>Comenzar ahora</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-purple-200 hover:border-purple-600 transition-colors text-lg px-6 py-6 h-auto"
              >
                <Play className="mr-2 h-4 w-4 text-purple-600" />
                <span>Ver demostración</span>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`/placeholder.svg?height=32&width=32&text=${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span>+2,500 usuarios activos</span>
            </motion.div>
          </div>

          <motion.div
            className="mx-auto lg:ml-auto flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Animated glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 animate-pulse"></div>

              {/* Main image with floating animation */}
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
              >
                <img
                  src="/placeholder.svg?height=500&width=500&text=Hypatia+AI"
                  alt="Hypatia AI Assistant"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover"
                />

                {/* Floating UI elements */}
                <motion.div
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: 1, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">Recordatorio completado</p>
                      <p className="text-gray-500">Reunión con el equipo</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">Email enviado</p>
                      <p className="text-gray-500">Propuesta de proyecto</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

