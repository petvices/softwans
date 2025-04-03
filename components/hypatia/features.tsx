"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CalendarDays, Mail, BarChart3, Clock, Users, Zap } from 'lucide-react'
import Image from "next/image"

// Definimos una interfaz para el tipo de feature
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  color: string;
  lightColor: string;
}

export function Features() {
  const features: Feature[] = [
    {
      icon: <CalendarDays className="h-10 w-10" />,
      title: "Gestión de recordatorios",
      description:
        "Hypatia te ayuda a organizar tu agenda y nunca olvidar una cita importante. Configura recordatorios recurrentes o puntuales y recibe notificaciones en el momento adecuado.",
      image: "/placeholder.svg?height=300&width=400&text=Recordatorios",
      color: "from-purple-500 to-indigo-500",
      lightColor: "bg-purple-100",
    },
    {
      icon: <Mail className="h-10 w-10" />,
      title: "Envío de correos",
      description:
        "Redacta y programa correos electrónicos con facilidad, ahorrando tiempo valioso. Hypatia puede sugerir respuestas y crear plantillas personalizadas para tus necesidades.",
      image: "/placeholder.svg?height=300&width=400&text=Emails",
      color: "from-indigo-500 to-blue-500",
      lightColor: "bg-indigo-100",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Análisis de negocio",
      description:
        "Obtén insights valiosos sobre el rendimiento de tu negocio o emprendimiento. Visualiza tendencias, identifica oportunidades y toma decisiones basadas en datos reales.",
      image: "/placeholder.svg?height=300&width=400&text=Análisis",
      color: "from-blue-500 to-cyan-500",
      lightColor: "bg-blue-100",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Ahorro de tiempo",
      description:
        "Automatiza tareas repetitivas y enfócate en lo que realmente importa. Hypatia puede gestionar múltiples tareas simultáneamente, liberando tu tiempo para actividades de mayor valor.",
      image: "/placeholder.svg?height=300&width=400&text=Productividad",
      color: "from-cyan-500 to-teal-500",
      lightColor: "bg-cyan-100",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Gestión de clientes",
      description:
        "Mantén un seguimiento efectivo de tus clientes y sus necesidades. Organiza contactos, registra interacciones y programa seguimientos para mejorar tus relaciones comerciales.",
      image: "/placeholder.svg?height=300&width=400&text=Clientes",
      color: "from-teal-500 to-green-500",
      lightColor: "bg-teal-100",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Respuestas rápidas",
      description:
        "Hypatia responde al instante, proporcionando la información que necesitas cuando la necesitas. Obtén respuestas precisas a tus preguntas sin esperas innecesarias.",
      image: "/placeholder.svg?height=300&width=400&text=Respuestas",
      color: "from-green-500 to-purple-500",
      lightColor: "bg-green-100",
    },
  ]

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-4">
            Funcionalidades
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            ¿Qué puede hacer{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Hypatia
            </span>{" "}
            por ti?
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl max-w-[700px] mx-auto">
            Descubre todas las formas en que Hypatia puede ayudarte a optimizar tu negocio y mejorar tu productividad.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              feature={feature} 
              index={index} 
              totalFeatures={features.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  feature: Feature;
  index: number;
  totalFeatures: number;
}

function FeatureItem({ feature, index, totalFeatures }: FeatureItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;
  
  return (
    <div ref={ref} className="relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className={`absolute ${isEven ? '-left-20' : '-right-20'} ${index % 3 === 0 ? 'top-0' : index % 3 === 1 ? 'top-1/3' : 'bottom-0'} w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-r ${feature.color}`}
        ></div>
      </div>
      
      <motion.div 
        className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
        initial={{ 
          opacity: 0, 
          x: isEven ? -100 : 100 
        }}
        animate={isInView ? { 
          opacity: 1, 
          x: 0 
        } : {}}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        <div className="w-full md:w-1/2">
          <div className={`rounded-2xl overflow-hidden shadow-xl transform ${isEven ? 'md:rotate-2' : 'md:-rotate-2'} transition-transform hover:rotate-0 duration-500`}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image 
                src={feature.image || "/placeholder.svg"} 
                alt={feature.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} opacity-40`}></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="text-sm font-medium">Funcionalidad #{index + 1}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-4">
          <motion.div 
            className={`inline-flex items-center gap-3 p-2 rounded-full ${feature.lightColor} text-gray-800`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={`p-2 rounded-full bg-gradient-to-r ${feature.color} text-white`}>
              {feature.icon}
            </div>
            <span className="font-medium pr-2">Característica destacada</span>
          </motion.div>
          
          <motion.h3 
            className="text-2xl md:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {feature.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {feature.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
          </motion.div>
          
          {/* Feature highlights */}
          <motion.div 
            className="mt-6 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <div className={`p-1 rounded-full bg-gradient-to-r ${feature.color} text-white mt-0.5 flex-shrink-0`}>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">Beneficio destacado #{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Connector line */}
      {index < totalFeatures - 1 && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-16 w-px h-16 bg-gradient-to-b from-purple-300 to-transparent"></div>
      )}
    </div>
  );
}

