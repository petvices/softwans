"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Clock, MessageSquare, X } from 'lucide-react'
import { useEffect, useState } from "react"

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
      const difference = endOfMonth.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-2 md:py-3 px-3 md:px-4 shadow-lg">
      {/* Animación de fondo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        animate={{ x: ["0%", "0%"] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="container mx-auto relative">
        {/* Layout móvil */}
        <div className="flex flex-col md:hidden gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Clock className="h-4 w-4 text-yellow-300" />
              </motion.div>
              <div className="text-xs font-bold">
                <span>🔥 AUDITORÍA GRATIS</span>
              </div>
            </div>
            <button 
              onClick={() => setIsVisible(false)} 
              className="text-white/80 hover:text-white p-2 -m-2 touch-manipulation"
              style={{ zIndex: 9999 }}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <span>Solo quedan</span>
              <motion.span
                className="bg-white text-red-600 px-2 py-1 rounded font-black text-xs"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                3 CUPOS
              </motion.span>
            </div>
            <a
              href="https://wa.me/1234567890?text=¡Hola!%20Quiero%20mi%20AUDITORÍA%20GRATIS%20antes%20de%20que%20se%20acaben%20los%20cupos"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-manipulation"
              style={{ zIndex: 9999 }}
            >
              <Button 
                size="sm" 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold text-xs px-3 py-2 touch-manipulation"
              >
                <MessageSquare className="h-3 w-3 mr-1" />
                ¡RESERVAR!
              </Button>
            </a>
          </div>
        </div>

        {/* Layout desktop */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Clock className="h-5 w-5 text-yellow-300" />
            </motion.div>

            <div className="flex items-center gap-2 text-sm lg:text-base font-bold">
              <span>🔥 PRIMERA AUDITORÍA GRATIS - Solo quedan</span>
              <motion.span
                className="bg-white text-red-600 px-2 py-1 rounded font-black"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                3 CUPOS
              </motion.span>
              <span>este mes</span>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-sm">
              <span>Termina en:</span>
              <div className="flex gap-1">
                <span className="bg-black/20 px-2 py-1 rounded text-xs font-mono">
                  {String(timeLeft.days).padStart(2, "0")}d
                </span>
                <span className="bg-black/20 px-2 py-1 rounded text-xs font-mono">
                  {String(timeLeft.hours).padStart(2, "0")}h
                </span>
                <span className="bg-black/20 px-2 py-1 rounded text-xs font-mono">
                  {String(timeLeft.minutes).padStart(2, "0")}m
                </span>
                <span className="bg-black/20 px-2 py-1 rounded text-xs font-mono">
                  {String(timeLeft.seconds).padStart(2, "0")}s
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/1234567890?text=¡Hola!%20Quiero%20mi%20AUDITORÍA%20GRATIS%20antes%20de%20que%20se%20acaben%20los%20cupos"
              target="_blank"
              rel="noopener noreferrer"
              style={{ zIndex: 9999 }}
            >
              <Button
                size="sm"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold shadow-lg cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 mr-1" />
                ¡RESERVAR AHORA!
              </Button>
            </a>
            <button 
              onClick={() => setIsVisible(false)} 
              className="text-white/80 hover:text-white p-2 -m-2 cursor-pointer"
              style={{ zIndex: 9999 }}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
