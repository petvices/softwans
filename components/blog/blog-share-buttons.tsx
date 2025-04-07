"use client"

import { Button } from "@/components/ui/button"
import { Share2, Twitter, Facebook, Linkedin, LinkIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"

export function BlogShareButtons() {
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)
  const [currentUrl, setCurrentUrl] = useState("")
  const [pageTitle, setPageTitle] = useState("IA y Productividad: Transformando el Mundo de los Negocios")

  const [canShare, setCanShare] = useState(false)

  // Obtener la URL actual cuando el componente se monta
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href)
      // Opcionalmente, obtener el título de la página
      if (document.title) {
        setPageTitle(document.title)
      }

      // Verificar si la API de compartir está disponible
      setCanShare(!!navigator.share)
    }
  }, [])

  // Función para compartir en Twitter/X
  const shareOnTwitter = () => {
    const text = encodeURIComponent(`${pageTitle} ${currentUrl}`)
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank", "width=550,height=420")
    toast({
      title: "Compartiendo en Twitter",
      description: "Se ha abierto una ventana para compartir en Twitter",
    })
    setIsOpen(false)
  }

  // Función para compartir en Facebook
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      "_blank",
      "width=550,height=420",
    )
    toast({
      title: "Compartiendo en Facebook",
      description: "Se ha abierto una ventana para compartir en Facebook",
    })
    setIsOpen(false)
  }

  // Función para compartir en LinkedIn
  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      "_blank",
      "width=550,height=420",
    )
    toast({
      title: "Compartiendo en LinkedIn",
      description: "Se ha abierto una ventana para compartir en LinkedIn",
    })
    setIsOpen(false)
  }

  // Función para usar Web Share API si está disponible
  const nativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: pageTitle,
          url: currentUrl,
        })
        .then(() => {
          toast({
            title: "Contenido compartido",
            description: "El artículo ha sido compartido exitosamente",
          })
        })
        .catch((error) => {
          console.error("Error al compartir:", error)
        })
      return true
    }
    return false
  }

  // Función para copiar el enlace al portapapeles
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast({
          title: "Enlace copiado",
          description: "El enlace ha sido copiado al portapapeles",
          duration: 3000,
        })
      })
      .catch((error) => {
        console.error("Error al copiar:", error)
        toast({
          title: "Error al copiar",
          description: "No se pudo copiar el enlace. Inténtalo de nuevo.",
          variant: "destructive",
        })
      })
    setIsOpen(false)
  }

  // Función principal para compartir
  const handleShare = () => {
    // Intentar usar la API nativa de compartir primero
    if (canShare) {
      nativeShare()
    } else {
      // Si no está disponible, abrir el menú desplegable
      setIsOpen(true)
    }
  }

  return (
    <>
      {/* Botón principal de compartir que intenta usar la API nativa primero */}
      <Button variant="ghost" size="sm" className="gap-1" onClick={handleShare}>
        <Share2 className="h-4 w-4" />
        <span>Compartir</span>
      </Button>

      {/* Menú desplegable como fallback */}
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <span className="hidden">Compartir</span> {/* Trigger oculto, ya que usamos el botón de arriba */}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={shareOnTwitter}>
            <Twitter className="h-4 w-4 mr-2" />
            <span>Twitter</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={shareOnFacebook}>
            <Facebook className="h-4 w-4 mr-2" />
            <span>Facebook</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={shareOnLinkedIn}>
            <Linkedin className="h-4 w-4 mr-2" />
            <span>LinkedIn</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleCopyLink}>
            <LinkIcon className="h-4 w-4 mr-2" />
            <span>Copiar enlace</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

