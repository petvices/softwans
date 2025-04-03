"use client"

import { motion } from "framer-motion"
import { Award, Clock, Headphones, Zap } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Resultados Rápidos",
      description: "Implementamos estrategias ágiles que generan resultados visibles en el menor tiempo posible.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Calidad Premium",
      description: "Nuestro trabajo cumple con los más altos estándares de calidad y las mejores prácticas del sector.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: "Soporte Continuo",
      description: "Ofrecemos acompañamiento constante y resolvemos tus dudas en cualquier momento del proceso.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Entrega Puntual",
      description: "Nos comprometemos a cumplir con los plazos establecidos sin comprometer la calidad.",
    },
  ]

  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="mr-1">🏆</span> ¿Por qué elegirnos?
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            La Diferencia que Marca el Éxito
          </h2>
          <p className="max-w-[800px] text-xl text-muted-foreground">
            Descubre por qué somos la mejor opción para impulsar tu presencia digital y potenciar tu negocio.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center rounded-xl border bg-background/80 p-6 text-center shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 rounded-xl border bg-background/50 p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-20 md:w-20">
              <span className="text-3xl font-bold">+5</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Años de Experiencia</h3>
              <p className="text-muted-foreground">
                Más de 5 años transformando negocios a través de soluciones digitales innovadoras y efectivas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

