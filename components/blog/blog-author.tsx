import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Globe } from "lucide-react"

export function BlogAuthor() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-6 px-6 border-y my-8 bg-muted/30 rounded-xl">
      <Image
        src="/placeholder.svg?height=80&width=80"
        alt="Foto del autor"
        width={80}
        height={80}
        className="rounded-full border-2 border-primary/20"
      />
      <div>
        <h3 className="text-xl font-bold text-primary">Carlos Martínez</h3>
        <p className="text-muted-foreground mb-2">
          Especialista en Inteligencia Artificial y Transformación Digital con más de 10 años de experiencia asesorando
          empresas.
        </p>
        <div className="flex gap-3">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Globe className="h-4 w-4" />
            <span className="sr-only">Sitio web</span>
          </Link>
          <Link href="#" className="text-sm text-primary hover:underline ml-1">
            Ver perfil completo
          </Link>
        </div>
      </div>
    </div>
  )
}

