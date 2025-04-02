import { Chat } from "@/components/chat"
import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { ParticlesBackground } from "@/components/particles-background"
import { FloatingIcons } from "@/components/floating-icons"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <ParticlesBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FloatingIcons />
        <Features />
        <Testimonials />
        <Pricing />
        <Chat />
      </main>
      <footer className="py-8 border-t relative z-10 bg-gradient-to-r from-purple-900/10 to-indigo-900/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-white"
              >
                <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
                <path d="M12 12 2.1 9.1a10 10 0 0 0 9.8 12.9L12 12Z" />
                <path d="M12 12v10a10 10 0 0 0 10-10h-10Z" />
              </svg>
            </div>
            <span className="text-xl font-bold">Hypatia</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Producto</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Integraciones
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Documentación
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Tutoriales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/message/Y5IO4FCCEMICH1" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                    Política de privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-gray-500 pt-6 border-t">
            © {new Date().getFullYear()} Hypatia AI. Todos los derechos reservados. Softwans 
          </div>
        </div>
      </footer>
    </div>
  )
}

