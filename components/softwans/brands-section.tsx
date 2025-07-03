"use client"

import Marquee from "react-fast-marquee"

const brands = [
  { name: "Hypatia", logo: "/images/Hypatia_logo.webp" },
  { name: "SHIBUI C.A", logo: "/images/shibui_ca.webp" },
  { name: "Catálogo Digital", logo: "/images/catalogo_digital.webp" },
  { name: "Alimentos Satvicos", logo: "/images/satvicoscopia.webp" },
  { name: "Arkazul", logo: "/images/arkazul.webp" },
]

export function BrandsSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4 mb-8">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Nuestros Clientes
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Marcas que confían en nosotros
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
            Hemos trabajado con empresas de todos los tamaños, desde startups hasta corporaciones multinacionales.
          </p>
        </div>

        <Marquee
          gradient={false}
          speed={70}
          pauseOnHover={false}
          className="py-6"
        >
          {brands.map((brand, i) => (
            <div key={i} className="mx-10 flex items-center justify-center min-w-[150px]">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-24 w-auto object-contain transition duration-300"
              />
            </div>
          ))}
        </Marquee>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border/50">
          <Stat value="+30" label="Proyectos Completados" />
          <Stat value="99%" label="Satisfacción del Cliente" />
          <Stat value="+5" label="Años de Experiencia" />
          <Stat value="24/7" label="Soporte Técnico" />
        </div>
      </div>
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
