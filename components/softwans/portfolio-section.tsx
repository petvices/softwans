"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Alimentos Satvicos",
      category: "Desarrollo Web",
      image: "/images/satvicosalimentos-ce.webp",
      link: "https://satvicosalimentos.com/",
    },
    {
      title: "Catálogo Digital",
      category: "Aplicación Web",
      image: "/images/demo.webp",
      link: "https://menu.petvices.lat/",
    },
    {
      title: "Hypatia",
      category: "Desarrollo Móvil",
      image: "/images/hypatia-ce.webp",
      link: "/hypatia",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="mr-1">💼</span> Portafolio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos Destacados</h2>
          <p className="max-w-[800px] text-xl text-muted-foreground">
            Conoce algunos de nuestros casos de éxito y cómo hemos ayudado a empresas como la tuya.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background/50 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm font-medium text-primary">{project.category}</div>
                <h3 className="mb-4 text-xl font-bold">{project.title}</h3>
                <Link href={project.link}>
                  <Button variant="link" className="p-0 text-primary">
                    Ver detalles
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >

        </motion.div>
      </div>
    </section>
  )
}

