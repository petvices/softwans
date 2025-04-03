"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      name: "María González",
      role: "Fundadora de StartupX",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Hypatia ha transformado por completo la forma en que gestiono mi negocio. Los recordatorios automáticos y el envío de correos me han ahorrado horas de trabajo cada semana.",
      rating: 4
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Marketing",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "La capacidad de análisis de Hypatia es impresionante. Me ha ayudado a identificar tendencias en mi negocio que no había notado antes, lo que ha resultado en un aumento del 30% en ventas.",
      rating: 5
    },
    {
      name: "Rodrigo Martínez",
      role: "Emprendedor",
      image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Como emprendedor, necesitaba una solución que me ayudara a gestionar múltiples tareas. Hypatia no solo cumplió con mis expectativas, sino que las superó. ¡Es como tener un asistente personal 24/7!",
      rating: 4
    }
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null; // Definir tipo explícito
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);  

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50 to-white pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          ref={ref}
        >
          <div className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 mb-4">
            Testimonios
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Lo que dicen nuestros <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">usuarios</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl max-w-[700px] mx-auto">
            Descubre cómo Hypatia está transformando la forma en que las personas gestionan sus negocios y aumentan su productividad.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1, x: `-${activeIndex * 100}%` } : {}}
              transition={{ duration: 0.5 }}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
                    <div className="flex items-center gap-2 mb-6">
                      <Image 
                        src={testimonial.image || "/placeholder.svg"} 
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full border-purple-200 hover:border-purple-600 hover:bg-purple-50"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full border-purple-200 hover:border-purple-600 hover:bg-purple-50"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

