"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

export function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <Link
        href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20cotizar%20sus%20servicios"
        target="_blank"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      >
        <MessageSquare className="h-8 w-8" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Link>
    </motion.div>
  )
}

