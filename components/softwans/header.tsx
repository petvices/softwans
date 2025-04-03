"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, ArrowRight } from "lucide-react"
import { LoginModal } from "@/components/login-modal"
import { motion } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Efecto para establecer el modo oscuro por defecto
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  // Efecto para manejar el tema oscuro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <motion.span
              className="text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Tech
            </motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              Solutions
            </motion.span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#servicios" className="text-sm font-medium transition-colors hover:text-primary">
              Servicios
            </Link>
            <Link href="#precios" className="text-sm font-medium transition-colors hover:text-primary">
              Precios
            </Link>
            <Link href="#testimonios" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Cambiar tema</span>
            </Button>
            <Button variant="outline" size="sm" onClick={openLoginModal}>
              Iniciar Sesión
            </Button>
            <Link href="#contacto">
              <Button size="sm" className="group">
                Cotizar
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="flex md:hidden gap-2 items-center">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Cambiar tema</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="container md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link
                href="#servicios"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#precios"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="#testimonios"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link
                href="#contacto"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex gap-4 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false)
                    openLoginModal()
                  }}
                >
                  Iniciar Sesión
                </Button>
                <Link href="#contacto" className="w-full">
                  <Button size="sm" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Cotizar
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  )
}

