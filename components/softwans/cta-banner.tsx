"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Elementos decorativos */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                ¿Listo para impulsar tu negocio?
              </h2>
              <p className="text-xl text-white/80">
                Contáctanos hoy mismo y obtén una consultoría gratuita para tu proyecto digital.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#contacto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Solicitar Cotización
                </Button>
              </Link>
              <Link
                href="https://wa.me/message/Y5IO4FCCEMICH1"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contactar por WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

