import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contenido Visual y Fotografía Comercial | Producción Audiovisual Profesional",
  description:
    "Servicios profesionales de contenido visual, fotografía comercial, producción audiovisual y imagen corporativa. Creamos visuales impactantes para tu marca.",
}

export default function ContenidoVisualLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
