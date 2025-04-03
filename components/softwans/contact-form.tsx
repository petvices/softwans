"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    projectDescription: "", // Nuevo campo para la descripción del proyecto
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
          projectDescription: "",
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        setError(result.error);
      }
    } catch {
      setError("Error al enviar el mensaje. Inténtalo de nuevo.");
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border bg-background p-6 shadow-sm"
    >
      {isSubmitted ? (
        <div className="rounded-md bg-green-50 p-4 text-green-700">
          <p className="font-medium">¡Mensaje enviado con éxito!</p>
          <p className="text-sm">
            Nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
      ) : (
        <>
          {error && (
            <div className="rounded-md bg-red-50 p-4 text-red-700">
              <p>{error}</p>
            </div>
          )}

          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nombre completo
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="company" className="text-sm font-medium">
              Empresa
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nombre de tu empresa"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="service" className="text-sm font-medium">
              Servicio de interés
            </label>
            <Select value={formData.service} onValueChange={handleServiceChange}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="software">Software Empresarial</SelectItem>
                <SelectItem value="web">Páginas Web</SelectItem>
                <SelectItem value="hosting">Hosting</SelectItem>
                <SelectItem value="app">Aplicaciones Móviles</SelectItem>
                <SelectItem value="data">Gestión de Datos</SelectItem>
                <SelectItem value="security">Seguridad Digital</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Nueva Sección: Descripción del Proyecto */}
          <div className="grid gap-2">
            <label htmlFor="projectDescription" className="text-sm font-medium">
              Descripción del Proyecto
            </label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              placeholder="Describe brevemente tu proyecto..."
              rows={6}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </>
      )}
    </form>
  );
}
