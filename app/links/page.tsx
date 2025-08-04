import type React from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Instagram, Globe, ArrowLeft, MessagesSquare } from "lucide-react"
import { FaTiktok } from "react-icons/fa"


import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Enlaces | Softwans Corporations",
  description: "Conecta con nosotros en todas nuestras plataformas sociales y canales digitales para que no te pierdas ninguna de nuestras novedades.",
}

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 flex flex-col items-center px-4 py-12">
      {/* Botón para volver al inicio */}
      <div className="w-full max-w-md mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al inicio</span>
          </Button>
        </Link>
      </div>

      <div className="w-full max-w-md flex flex-col items-center">
        {/* Avatar y nombre */}
        <div className="relative mb-6">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-md opacity-70"></div>
          <div className="relative rounded-full border-2 border-primary/20 p-1 bg-background">
            <Image
              src="/images/Softwans.webp"
              alt="Softwans"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2 text-center">Softwans Corporations</h1>
        <p className="text-muted-foreground text-center mb-8 max-w-sm">
          Soluciones tecnológicas para empresas. Desarrollo web, marketing digital y más.
        </p>

        {/* Enlaces */}
        <div className="w-full space-y-4">
          <LinkButton 
            href="https://www.softwans.com" 
            icon={<Globe className="h-5 w-5" />} 
            label="Sitio Web Oficial" 
            />

          <LinkButton 
            href="https://menu.petvices.lat/" 
            icon={<Globe className="h-5 w-5" />} 
            label="Catálogo Digital" 
            />

          <LinkButton
            href="https://wa.me/message/Y5IO4FCCEMICH1"
            icon={<MessagesSquare className="h-5 w-5" />}
            label="WhatsApp"
            color="bg-[#25D366]"
          />

          <LinkButton
            href="https://instagram.com/softwans"
            icon={<Instagram className="h-5 w-5" />}
            label="Instagram"
            color="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]"
          />

          <LinkButton
            href="https://www.tiktok.com/@softwansc?is_from_webapp=1&sender_device=pc"
            icon={<FaTiktok className="h-5 w-5" />}
            label="TikTok"
            color="bg-black"
          />

        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Softwans</p>
          <p className="mt-1">Hosted by Softwans Corporations </p>
        </div>
      </div>
    </div>
  )
}

interface LinkButtonProps {
  href: string
  icon: React.ReactNode
  label: string
  color?: string
}

function LinkButton({ href, icon, label, color = "bg-primary" }: LinkButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full group">
      <div
        className={`
        relative overflow-hidden rounded-lg ${color} p-4
        transition-all duration-300 transform hover:scale-[1.02]
        hover:shadow-lg hover:shadow-primary/20
        flex items-center justify-between
      `}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-medium">{label}</span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Efecto de brillo al pasar el mouse */}
        <div className="absolute inset-0 w-full h-full shine-effect"></div>
      </div>
    </a>
  )
}
