import Image from "next/image"
import Link from "next/link"

export function BlogAuthor() {
  return (
    <div className="flex items-center gap-4 py-6 border-y my-8">
      <Image
        src="/placeholder.svg?height=80&width=80"
        alt="Foto del autor"
        width={80}
        height={80}
        className="rounded-full"
      />
      <div>
        <h3 className="text-lg font-semibold">Carlos Martínez</h3>
        <p className="text-sm text-muted-foreground">
          Especialista en Inteligencia Artificial y Transformación Digital con más de 10 años de experiencia asesorando
          empresas.
        </p>
        <Link href="#" className="text-sm text-primary hover:underline">
          Ver perfil
        </Link>
      </div>
    </div>
  )
}

