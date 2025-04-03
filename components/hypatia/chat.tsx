"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

// Definimos las preguntas predefinidas y sus respuestas
const predefinedQuestions = [
  {
    id: 1,
    question: "¿Cómo puedo adquirir Hypatia?",
    answer: "Puedes adquirir Hypatia a través de nuestra página web. Simplemente selecciona el plan que mejor se adapte a tus necesidades en nuestra sección de precios y haz clic en 'Comenzar ahora'. El proceso de registro toma menos de 2 minutos."
  },
  {
    id: 2,
    question: "¿Qué incluye el plan Profesional?",
    answer: "Nuestro plan Profesional por $24.99/mes incluye análisis de negocio avanzado, gestión de clientes, soporte prioritario y hasta 5 usuarios. Además, tendrás acceso a todas las funcionalidades del plan Básico como gestión de recordatorios y envío de correos."
  },
  {
    id: 3,
    question: "¿Cómo me ayuda Hypatia con mis recordatorios?",
    answer: "Hypatia te ayuda a gestionar tus recordatorios de manera eficiente. Puedes configurar recordatorios recurrentes o puntuales, recibir notificaciones en el momento adecuado y sincronizar con tu calendario. Nunca más olvidarás una cita o tarea importante."
  },
  {
    id: 4,
    question: "¿Puedo probar Hypatia antes de comprarla?",
    answer: "¡Por supuesto! Ofrecemos una prueba gratuita de 14 días de cualquiera de nuestros planes. Durante este período podrás explorar todas las funcionalidades sin compromiso. No requerimos datos de pago para comenzar tu prueba gratuita."
  },
  {
    id: 5,
    question: "¿Qué hace diferente a Hypatia de otros asistentes?",
    answer: "Hypatia se diferencia por su capacidad de aprendizaje adaptativo, que le permite entender tus preferencias y hábitos para ofrecerte una experiencia personalizada. Además, nuestra IA está especializada en gestión de negocios y emprendimientos, con funcionalidades diseñadas específicamente para aumentar tu productividad profesional."
  }
];

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy Hypatia, tu asistente IA. Puedo ayudarte con la gestión de recordatorios, envío de correos y optimización de tu negocio. ¿Qué te gustaría saber?",
      sender: "bot",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState<number[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    // Guardar una referencia al elemento actual para usarla en la limpieza
    const currentChatContainer = chatContainerRef.current;
    
    if (currentChatContainer) {
      observer.observe(currentChatContainer);
    }
    
    return () => {
      if (currentChatContainer) {
        observer.unobserve(currentChatContainer);
      }
    };
  }, []);

  const handleQuestionSelect = (questionId: number) => {
    const selectedQuestion = predefinedQuestions.find(q => q.id === questionId);
    if (!selectedQuestion) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: selectedQuestion.question,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setAskedQuestions((prev) => [...prev, questionId]);
    setIsTyping(true);

    // Simulate bot response with typing effect
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: messages.length + 2,
        text: selectedQuestion.answer,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.03,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.97 }
  };

  return (
    <section id="chat" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50 to-white pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 mb-4">
            Prueba ahora
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Interactúa con <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Hypatia</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl max-w-[700px] mx-auto">
            Descubre cómo Hypatia puede ayudarte en tu día a día. Selecciona una pregunta para ver cómo Hypatia puede asistirte.
          </p>
        </div>
        
        <motion.div 
          ref={chatContainerRef}
          className="max-w-2xl mx-auto border rounded-xl overflow-hidden bg-white shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
                  <path d="M12 12 2.1 9.1a10 10 0 0 0 9.8 12.9L12 12Z" />
                  <path d="M12 12v10a10 10 0 0 0 10-10h-10Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Hypatia</h3>
                <p className="text-xs text-white/70">Asistente IA • En línea</p>
              </div>
            </div>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                        : "bg-white border shadow-sm text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  className="mb-4 flex justify-start"
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="max-w-[80%] rounded-2xl p-4 bg-white border shadow-sm text-gray-800">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t">
            <div className="space-y-3">
              <p className="text-sm text-gray-500 mb-2">Selecciona una pregunta:</p>
              <div className="grid grid-cols-1 gap-2">
                {predefinedQuestions.map((q) => (
                  <motion.button
                    key={q.id}
                    onClick={() => handleQuestionSelect(q.id)}
                    className={`text-left p-3 rounded-lg text-sm transition-all duration-200 ${
                      askedQuestions.includes(q.id)
                        ? "bg-purple-100 text-purple-700 border border-purple-200"
                        : "bg-white border hover:border-purple-300 text-gray-700 hover:bg-purple-50"
                    }`}
                    disabled={isTyping || askedQuestions.includes(q.id)}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {q.question}
                    {askedQuestions.includes(q.id) && (
                      <span className="ml-2 text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full">
                        Preguntado
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
              
              {askedQuestions.length === predefinedQuestions.length && (
                <motion.button
                  onClick={() => setAskedQuestions([])}
                  className="w-full mt-2 text-center p-2 rounded-lg text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Reiniciar conversación
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

