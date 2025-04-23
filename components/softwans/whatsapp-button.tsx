"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  const messages = [
    "¡Pregunta sin compromiso!",
    "¿Necesitas ayuda? ¡Escríbenos!",
    "Habla con un agente especializado",
    "Respuesta inmediata por acá",
    "¿Dudas sobre nuestros servicios?",
    "¿Listo para tu próximo proyecto?",
    "¡Hacemos crecer tú marca!",
    "¡Un 15% de descuento si nos contactas ahora!",
  ]

  // Función para trackear el evento de WhatsApp
  const trackWhatsAppClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      fbq('track', 'Contact'); // Evento estándar de Meta para contactos
      // O evento personalizado:
      fbq('track', 'WhatsAppClick', {
        message: messages[messageIndex], // Opcional: enviar el mensaje que se mostraba
        location: window.location.href
      });
    }
  }

  // Mostrar el botón después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Mostrar mensajes periódicamente
  useEffect(() => {
    if (!isVisible) return

    // Mostrar el primer mensaje 3 segundos después de que aparezca el botón
    const initialDelay = setTimeout(() => {
      setShowMessage(true)

      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => {
        setShowMessage(false)
      }, 5000)
    }, 3000)

    // Configurar intervalo para mostrar mensajes periódicamente
    const interval = setInterval(() => {
      // Cambiar al siguiente mensaje
      setMessageIndex((prev) => (prev + 1) % messages.length)

      // Mostrar el mensaje
      setShowMessage(true)

      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => {
        setShowMessage(false)
      }, 5000)
    }, 15000) // Mostrar un nuevo mensaje cada 15 segundos

    return () => {
      clearTimeout(initialDelay)
      clearInterval(interval)
    }
  }, [isVisible, messages.length])

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 20 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      }}
    >
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="absolute -top-16 right-0 w-56 rounded-lg bg-white p-3 text-center text-sm font-medium text-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{
              duration: 0.3,
            }}
          >
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              {messages[messageIndex]}
            </motion.span>
            <motion.div
              className="absolute -bottom-2 right-6 h-3 w-3 rotate-45 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href="https://wa.me/message/Y5IO4FCCEMICH1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform relative"
          onClick={trackWhatsAppClick} // 👈 Añade el evento aquí
        >
          <motion.span
            className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 3, duration: 0.3 }}
          >
            1
          </motion.span>

          {/* Efecto de pulso alrededor del botón cuando aparece un mensaje */}
          <AnimatePresence>
            {showMessage && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: [0, 0.5, 0], scale: [1, 1.3, 1.5] }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: 2,
                  repeatType: "loop",
                }}
              />
            )}
          </AnimatePresence>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            }}
          >
            {/* Icono de WhatsApp SVG */}
            <svg 
              className="h-8 w-8" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.div>
          <span className="sr-only">Contactar por WhatsApp</span>
        </Link>
      </motion.div>
    </motion.div>
  )
}