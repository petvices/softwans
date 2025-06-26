"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, ArrowRight } from "lucide-react"
import { LoginModal } from "@/components/login-modal"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { setTheme } = useTheme()

  // Efecto para establecer el modo oscuro por defecto
  useEffect(() => {
    document.documentElement.classList.add("dark")
    setTheme("dark")
  }, [setTheme])

  // Efecto para manejar el tema oscuro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      setTheme("light")
    }
  }, [isDarkMode, setTheme])

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

  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios web profesionales y aplicaciones web modernas",
      href: "/desarrollo-web",
      icon: "🌐",
    },
    {
      title: "Marketing Digital",
      description: "Estrategias digitales para hacer crecer tu negocio",
      href: "/marketing-digital",
      icon: "📈",
    },
    {
      title: "Gestión de Redes Sociales",
      description: "Interfaces intuitivas y experiencias de usuario excepcionales",
      href: "/gestión-redes-sociales",
      icon: "🎨",
    },
    {
      title: "Desarrollo de Software",
      description: "Tiendas online que convierten visitantes en clientes",
      href: "/desarrollo-software",
      icon: "🛒",
    },
    {
      title: "Contenido visual",
      description: "Contenido visual: imágenes, videos y gráficos que cuentan tus historias mejor que mil palabras.",
      href: "/contenido-visual",
      icon: "📷",
    },
  ]

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
              Softwans
            </motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              Corporations
            </motion.span>
          </Link>

          <nav className="hidden md:flex gap-6 items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium transition-colors hover:text-primary">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] grid-cols-2">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.href} asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-2 text-sm font-medium leading-none">
                              <span className="text-lg">{service.icon}</span>
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/#precios" className="text-sm font-medium transition-colors hover:text-primary">
              Precios
            </Link>
            <Link href="/#testimonios" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonios
            </Link>
            <Link href="/#contacto" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
            <Link href="/blog/ia-productividad" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
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

        {/* Menú móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="container md:hidden py-4 border-t"
            >
              <nav className="flex flex-col gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Servicios</p>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary pl-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{service.icon}</span>
                      {service.title}
                    </Link>
                  ))}
                </div>
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
                <Link
                  href="/blog/ia-productividad"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
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
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  )
}
