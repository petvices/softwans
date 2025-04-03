"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const plans = [
    {
      name: "Básico",
      price: "9.99",
      description: "Ideal para emprendedores individuales",
      features: ["Gestión de recordatorios", "Envío de correos básico", "Soporte por correo electrónico", "1 usuario", "Preguntas sin limite"],
      popular: true,
    },
//    {
//      name: "Profesional",
//      price: "24.99",
//      description: "Perfecto para pequeñas empresas",
//      features: [
//        "Todo lo del plan Básico",
//        "Análisis de negocio",
//        "Gestión de clientes",
//        "Soporte prioritario",
//        "Hasta 5 usuarios",
//      ],
//      popular: true,
//    },
//    {
//      name: "Empresarial",
//      price: "49.99",
//      description: "Para empresas en crecimiento",
//      features: [
//        "Todo lo del plan Profesional",
//        "API personalizada",
//        "Integraciones avanzadas",
//        "Soporte 24/7",
//        "Usuarios ilimitados",
//      ],
//    },
 ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          ref={ref}
        >
          <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
            Precios
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Planes diseñados para{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              tu crecimiento
            </span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl max-w-[700px] mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y comienza a optimizar tu negocio hoy mismo.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} className="flex">
              <Card
                className={`flex flex-col w-full ${
                  plan.popular
                    ? "border-purple-600 shadow-lg relative overflow-hidden"
                    : "hover:border-purple-300 transition-colors"
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md">
                        Más popular
                      </div>
                    </div>
                    <div className="absolute -left-6 -top-6 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl"></div>
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-600/10 rounded-full blur-2xl"></div>
                  </>
                )}
                <CardHeader>
                  <CardTitle className={plan.popular ? "text-purple-600" : ""}>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold">${plan.price}</span>
                    <span className="text-gray-500 ml-2">/mes</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div
                          className={`flex-shrink-0 h-5 w-5 rounded-full ${
                            plan.popular ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-600"
                          } flex items-center justify-center mr-2`}
                        >
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                <Link href="https://wa.me/message/Y5IO4FCCEMICH1">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.popular ? "Comenzar ahora" : "Elegir plan"}
                  </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center bg-white rounded-xl p-8 shadow-md border border-purple-100 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-2">¿Necesitas un plan personalizado?</h3>
          <p className="text-gray-500 mb-4">Contáctanos para crear un plan a medida para tu empresa.</p>
          <Link href="https://wa.me/message/Y5IO4FCCEMICH1">
          <Button variant="outline">Contactar ventas</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

