"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { LoginModal } from "@/components/login-modal"
import Script from 'next/script';


export function Header() {
  <>
  <Script id="json" 
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Softwans",
        "url": "https://softwans.com",
        "logo": "https://softwans.com/favicon.ico",
        "sameAs": [
          "https://www.instagram.com/softwans/"
        ]
      }),
    }}
  />
  <header>...</header>
</>
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Cambiamos el estado inicial a true para que comience en modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Softwans</span> Corporations
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
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full" aria-label="Cambiar tema">  
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Cambiar tema</span>
            </Button>
            <Button variant="outline" size="sm" onClick={openLoginModal}>
              Iniciar Sesión
            </Button>
            <Link href="https://wa.me/message/Y5IO4FCCEMICH1" passHref>
             <Button size="sm">Contáctanos</Button>
            </Link>
          </div>
          <div className="flex md:hidden gap-2 items-center">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Cambiar tema</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menú">
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
                href="/hypatia"
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
                <Button size="sm" className="w-full">
                  Solicitar Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  )
}




