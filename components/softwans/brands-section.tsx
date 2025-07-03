"use client"

import Image from "next/image"

export function BrandsSection() {
  const brands = [
    { name: "Hyaptia", logo: "/images/Hypatia_logo.webp?height=60&width=120&text=Hypatia" },
    { name: "InnovaLab", logo: "/placeholder.svg?height=60&width=120&text=InnovaLab" },
    { name: "GlobalTech", logo: "/placeholder.svg?height=60&width=120&text=GlobalTech" },
    { name: "StartupHub", logo: "/placeholder.svg?height=60&width=120&text=StartupHub" },
    { name: "DigitalPro", logo: "/placeholder.svg?height=60&width=120&text=DigitalPro" },
    { name: "CloudSoft", logo: "/placeholder.svg?height=60&width=120&text=CloudSoft" },
    { name: "WebMaster", logo: "/placeholder.svg?height=60&width=120&text=WebMaster" },
    { name: "AppDev", logo: "/placeholder.svg?height=60&width=120&text=AppDev" },
    { name: "DataFlow", logo: "/placeholder.svg?height=60&width=120&text=DataFlow" },
    { name: "CodeLab", logo: "/placeholder.svg?height=60&width=120&text=CodeLab" },
    { name: "TechSolutions", logo: "/placeholder.svg?height=60&width=120&text=TechSolutions" },
    { name: "InnovaTech", logo: "/placeholder.svg?height=60&width=120&text=InnovaTech" },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Nuestros Clientes
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Marcas que confían en nosotros
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Hemos trabajado con empresas de todos los tamaños, desde startups hasta corporaciones multinacionales.
            </p>
          </div>
        </div>

        {/* Contenedor de la animación */}
        <div className="relative">
          {/* Gradientes para efecto fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-muted/30 to-transparent"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-muted/30 to-transparent"></div>

          {/* Contenedor de scroll infinito */}
          <div className="brands-scroll">
            <div className="brands-track">
              {/* Primera fila de marcas */}
              {brands.map((brand, index) => (
                <div key={`first-${index}`} className="brand-item flex-shrink-0 mx-8 flex items-center justify-center">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`Logo de ${brand.name}`}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
              {/* Segunda fila de marcas (duplicada para scroll infinito) */}
              {brands.map((brand, index) => (
                <div key={`second-${index}`} className="brand-item flex-shrink-0 mx-8 flex items-center justify-center">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`Logo de ${brand.name}`}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Satisfacción del Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Soporte Técnico</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brands-scroll {
          width: 100%;
          overflow: hidden;
        }

        .brands-track {
          display: flex;
          animation: scroll-brands 30s linear infinite;
          width: calc(200% + 64px);
        }

        .brand-item {
          min-width: 160px;
          height: 80px;
        }

        .brands-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-brands {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .brands-track {
            animation-duration: 20s;
          }
          
          .brand-item {
            min-width: 120px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  )
}
