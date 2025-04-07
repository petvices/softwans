"use client";

import { useState, useEffect, useMemo, Button, ChevronDown } from "react";

export function BlogTableOfContents() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sections = useMemo(
    () => [
      { id: "introduccion", title: "Introducción" },
      { id: "transformacion", title: "Transformación de la productividad" },
      { id: "automatizacion", title: "Automatización inteligente" },
      { id: "analisis-predictivo", title: "Análisis predictivo" },
      { id: "asistentes-virtuales", title: "Asistentes virtuales" },
      { id: "procesamiento-lenguaje", title: "Procesamiento de lenguaje" },
      { id: "implementacion", title: "Implementación en empresas" },
      { id: "casos-exito", title: "Casos de éxito" },
      { id: "consideraciones", title: "Consideraciones éticas" },
      { id: "futuro", title: "El futuro de la IA" },
      { id: "conclusion", title: "Conclusión" },
    ],
    [] // Dependencias vacías para evitar redefinición en cada render
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="rounded-xl border bg-background/50 p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Contenido del artículo</h3>
        <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </Button>
      </div>

      <div className={`space-y-1 ${isOpen ? "block" : "hidden lg:block"}`}>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block py-1 px-2 text-sm rounded-md transition-colors ${
              activeSection === section.id ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}
          >
            {section.title}
          </a>
        ))}
      </div>
    </div>
  );
}