"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Apple, SmartphoneIcon as Android, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Download() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const openWhatsApp = () => {
    window.open("https://wa.me/message/Y5IO4FCCEMICH1", "_blank")
    setIsDialogOpen(false)
  }

  return (
    <section id="download" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          ref={ref}
        >
          <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
            Disponible pronto
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-[#020818]">
            Descarga{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Hypatia
            </span>{" "}
            en tu dispositivo
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl max-w-[700px] mx-auto">
            Lleva el poder de Hypatia contigo a donde vayas. Gestiona tu negocio desde cualquier lugar con nuestra
            aplicación móvil.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-3xl mx-auto">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/images/hypatia.webp?height=500&width=250&text=Hypatia+App"
                  alt="Hypatia App"
                  width={250}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#020818]">Descarga la app</h3>
              <p className="text-gray-600">
                Accede a todas las funcionalidades de Hypatia desde tu dispositivo móvil. Disponible para Android e iOS.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-black text-white hover:bg-gray-800 flex items-center gap-2 h-14 px-6"
                  size="lg"
                >
                  <Apple className="h-6 w-6" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Descargar en</span>
                    <span className="text-sm font-bold">App Store</span>
                  </div>
                </Button>

                <Button
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-black text-white hover:bg-gray-800 flex items-center gap-2 h-14 px-6"
                  size="lg"
                >
                  <Android className="h-6 w-6" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Descargar en</span>
                    <span className="text-sm font-bold">Google Play</span>
                  </div>
                </Button>
              </div>
            </div>

            <div className="space-y-4 border-t pt-6">
              <h4 className="font-medium">Características de la app:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white mt-0.5 flex-shrink-0">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Gestión de recordatorios en tiempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white mt-0.5 flex-shrink-0">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Envío de correos desde cualquier lugar</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white mt-0.5 flex-shrink-0">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Análisis de negocio en tu bolsillo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white mt-0.5 flex-shrink-0">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">Sincronización con todos tus dispositivos</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Beta Testers */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Programa de Beta Testers</DialogTitle>
            <DialogDescription>
              Hypatia aún no está disponible para el público general, pero puedes unirte a nuestro programa exclusivo de
              beta testers.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-4">
              <p className="text-sm text-purple-800">
                Para participar en el programa de beta testers y ser de los primeros en probar Hypatia, contacta con
                nosotros a través de WhatsApp para conocer los requisitos y el proceso de selección.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Las plazas son limitadas. ¡No pierdas tu oportunidad!</span>
            </div>
          </div>

          <DialogFooter className="sm:justify-center">
            <Button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto flex items-center gap-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactar por WhatsApp
              <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

