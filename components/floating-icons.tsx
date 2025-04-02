"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CalendarDays, Mail, BarChart3, Clock, Users, Zap } from "lucide-react"

export function FloatingIcons() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const calculateMovement = (index: number) => {
    const baseX = mousePosition.x * 0.01
    const baseY = mousePosition.y * 0.01

    // Different movement patterns for each icon
    switch (index) {
      case 0:
        return { x: baseX, y: baseY }
      case 1:
        return { x: -baseX, y: baseY }
      case 2:
        return { x: baseX, y: -baseY }
      case 3:
        return { x: -baseX, y: -baseY }
      case 4:
        return { x: baseY, y: baseX }
      case 5:
        return { x: -baseY, y: -baseX }
      default:
        return { x: 0, y: 0 }
    }
  }

  const icons = [
    { icon: <CalendarDays className="h-6 w-6 text-purple-600" />, position: { top: "15%", left: "10%" } },
    { icon: <Mail className="h-6 w-6 text-indigo-600" />, position: { top: "25%", right: "15%" } },
    { icon: <BarChart3 className="h-6 w-6 text-purple-600" />, position: { bottom: "30%", left: "8%" } },
    { icon: <Clock className="h-6 w-6 text-indigo-600" />, position: { bottom: "20%", right: "12%" } },
    { icon: <Users className="h-6 w-6 text-purple-600" />, position: { top: "40%", left: "5%" } },
    { icon: <Zap className="h-6 w-6 text-indigo-600" />, position: { top: "60%", right: "7%" } },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute p-3 bg-white rounded-full shadow-lg opacity-20"
          style={item.position as any}
          animate={calculateMovement(index)}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  )
}

