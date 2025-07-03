"use client"

import Image from "next/image"

export function BrandsSection() {
  const brands = [
    { name: "Hyaptia", logo: "/images/Hypatia_logo.webp?height=60&width=120&text=Hypatia" },
    { name: "SHIBUI C.A", logo: "/images/shibui_ca.webp?height=60&width=120&text=SHIBUICA" },
    { name: "Catálogo Digital", logo: "/images/catalogo_digital.webp?height=60&width=120&text=CatálogoDigital" },
    { name: "Alimentos Satvicos", logo: "/images/ALIMENTOS_SATVICOS.webpheight=60&width=120&text=AlimentoSatvicos" },
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
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none"></div>

          {/* Contenedor de scroll infinito */}
          <div className="brands-scroll">
            <div className="brands-track">
              {/* Duplicamos las marcas múltiples veces para crear el efecto infinito */}
              {Array.from({ length: 4 }).map((_, setIndex) =>
                brands.map((brand, brandIndex) => (
                  <div key={`${setIndex}-${brandIndex}`} className="brand-item">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={`Logo de ${brand.name}`}
                      width={120}
                      height={60}
                      className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                )),
              )}
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">+30</div>
            <div className="text-sm text-muted-foreground">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">99%</div>
            <div className="text-sm text-muted-foreground">Satisfacción del Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">+5</div>
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
          position: relative;
        }

        .brands-track {
          display: flex;
          animation: infiniteScroll 60s linear infinite;
          width: fit-content;
        }

        .brand-item {
          flex-shrink: 0;
          width: 180px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 20px;
        }

        .brands-track:hover {
          animation-play-state: paused;
        }

        @keyframes infiniteScroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @media (max-width: 768px) {
          .brands-track {
            animation-duration: 40s;
          }
          
          .brand-item {
            width: 140px;
            height: 60px;
            margin: 0 15px;
          }
        }

        @media (max-width: 480px) {
          .brands-track {
            animation-duration: 30s;
          }
          
          .brand-item {
            width: 120px;
            height: 50px;
            margin: 0 10px;
          }
        }
      `}</style>
    </section>
  )
}
