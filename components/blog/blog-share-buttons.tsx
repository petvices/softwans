"use client"

import { Button } from "@/components/ui/button"
import { Share2, Twitter, Facebook, Linkedin, LinkIcon } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"

export function BlogShareButtons() {
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)

  const handleShare = (platform: string) => {
    // En un caso real, aquí iría la lógica para compartir en cada plataforma
    toast({
      title: "Compartiendo contenido",
      description: `Compartiendo en ${platform}...`,
    })
    setIsOpen(false)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Enlace copiado",
      description: "El enlace ha sido copiado al portapapeles.",
    })
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          <Share2 className="h-4 w-4" />
          <span>Compartir</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleShare("Twitter")}>
          <Twitter className="h-4 w-4 mr-2" />
          <span>Twitter</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("Facebook")}>
          <Facebook className="h-4 w-4 mr-2" />
          <span>Facebook</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("LinkedIn")}>
          <Linkedin className="h-4 w-4 mr-2" />
          <span>LinkedIn</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyLink}>
          <LinkIcon className="h-4 w-4 mr-2" />
          <span>Copiar enlace</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

