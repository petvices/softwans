import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Desarrollo de Aplicaciones Móviles | Apps iOS y Android",
  description:
    "Desarrollo profesional de aplicaciones móviles nativas y multiplataforma. Especialistas en iOS, Android, React Native y Flutter.",
}

export default function DesarrolloAplicacionesMovilesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
