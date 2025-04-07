import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Globe } from "lucide-react"

export function BlogAuthor() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-6 px-6 border-y my-8 bg-muted/30 rounded-xl">
      <Image
        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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

      </div>
    </div>
  )
}

