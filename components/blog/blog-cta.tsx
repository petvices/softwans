import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogCta() {
  return (
    <div className="rounded-xl border bg-primary/5 p-8">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold mb-4">¿Quieres implementar IA en tu negocio?</h3>
        <p className="text-muted-foreground mb-6 max-w-[600px]">
          En TechSolutions te ayudamos a identificar las mejores oportunidades para aplicar inteligencia artificial y
          aumentar la productividad de tu empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/#contacto">
            <Button size="lg" className="w-full sm:w-auto">
              Solicitar consultoría gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/#servicios">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Conocer nuestros servicios
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

