import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

export function BlogCta() {
  return (
    <div className="rounded-xl border bg-primary/5 p-8 shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
          <Zap className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4">¿Quieres implementar IA en tu negocio?</h3>
        <p className="text-muted-foreground mb-6 max-w-[600px]">
          En TechSolutions te ayudamos a identificar las mejores oportunidades para aplicar inteligencia artificial y
          aumentar la productividad de tu empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/#contacto">
            <Button size="lg" className="w-full sm:w-auto group">
              Solicitar consultoría gratuita
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

