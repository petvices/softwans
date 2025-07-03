"use client"

import { useEffect, useState, useRef } from "react"

const brands = [
  { name: "Hyaptia", logo: "/images/Hypatia_logo.webp" },
  { name: "SHIBUI C.A", logo: "/images/shibui_ca.webp" },
  { name: "Catálogo Digital", logo: "/images/catalogo_digital.webp" },
  { name: "Alimentos Satvicos", logo: "/images/ALIMENTOS_SATVICOS.webp" },
]

export function BrandsSection() {
  const [loaded, setLoaded] = useState(0)
  const allLoaded = loaded >= brands.length
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (allLoaded && trackRef.current) {
      trackRef.current.classList.add("animate")
    }
  }, [allLoaded])

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-8 space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Nuestros Clientes
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Marcas que confían en nosotros
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Hemos trabajado con empresas de todos los tamaños, desde startups hasta corporaciones multinacionales.
          </p>
        </div>

        <div className="relative mt-6">
          {/* Gradientes laterales */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-muted via-muted/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-muted via-muted/80 to-transparent pointer-events-none" />

          {/* Contenedor de scroll infinito */}
          <div className="brands-scroll">
            <div className="brands-track" ref={trackRef}>
              {[...brands, ...brands].map((brand, i) => (
                <div key={i} className="brand-item">
                  <img
                    src={brand.logo}
                    alt={`Logo de ${brand.name}`}
                    width={120}
                    height={60}
                    onLoad={() => setLoaded((prev) => prev + 1)}
                    loading="eager"
                    className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border/50">
          <Stat value="+30" label="Proyectos Completados" />
          <Stat value="99%" label="Satisfacción del Cliente" />
          <Stat value="+5" label="Años de Experiencia" />
          <Stat value="24/7" label="Soporte Técnico" />
        </div>
      </div>

      <style jsx>{`
        .brands-scroll {
          width: 100%;
          overflow: hidden;
        }

        .brands-track {
          display: flex;
          width: max-content;
          transform: translateX(0);
          animation: none;
        }

        .brands-track.animate {
          animation: scroll 25s linear infinite;
        }

        .brand-item {
          flex: 0 0 auto;
          width: 180px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 20px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .brand-item {
            width: 140px;
            height: 60px;
            margin: 0 15px;
          }
        }

        @media (max-width: 480px) {
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
