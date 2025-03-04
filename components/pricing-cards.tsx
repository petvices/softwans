import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function PricingCards() {
  return (
    <section id="precios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Precios</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Planes que se adaptan a tu negocio</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elige el plan que mejor se adapte a las necesidades de tu empresa. Todos incluyen soporte técnico,
              actualizaciones y mantenimiento además de mantener tu plataforma digital en linea 24/7.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {/* Plan Básico */}
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="mb-6 flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Básico</h3>
              <p className="text-muted-foreground">Ideal para pequeñas empresas y startups</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$29.99</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Sitio web de 5 páginas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>1GB de almacenamiento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Dominio gratuito por 1 año</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Certificado SSL</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Soporte por email</span>
                </li>
              </ul>
              <br />
              <Link href="https://wa.me/message/Y5IO4FCCEMICH1" className="w-full">
                <Button variant="outline" className="w-full">
                  Seleccionar plan
                </Button>
              </Link>
            </div>
          </div>

          {/* Plan Profesional */}
          <div className="rounded-lg border bg-primary p-8 shadow-sm">
            <div className="mb-6 flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-primary-foreground">Profesional</h3>
              <p className="text-primary-foreground/80">Perfecto para empresas en crecimiento</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-primary-foreground">$79.99</span>
                <span className="text-primary-foreground/80">/mes</span>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="space-y-2.5 text-primary-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Sitio web de 15 páginas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>10GB de almacenamiento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Dominio gratuito por 1 año</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Certificado SSL</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Soporte prioritario 24/5</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>SEO básico</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Integración con redes sociales</span>
                </li>
              </ul>
              <br />
              <Link href="https://wa.me/message/Y5IO4FCCEMICH1" className="w-full">
                <Button variant="secondary" className="w-full">
                  Seleccionar plan
                </Button>
              </Link>
            </div>
          </div>

          {/* Plan Empresarial */}
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="mb-6 flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Empresarial</h3>
              <p className="text-muted-foreground">Solución completa para grandes empresas</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">€199</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Sitio web ilimitado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>50GB de almacenamiento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Dominio gratuito por 1 año</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Certificado SSL</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Soporte prioritario 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>SEO avanzado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Integración con CRM</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Análisis de datos avanzado</span>
                </li>
              </ul>
              <br />
              <Link href="#contacto" className="w-full">
                <Button variant="outline" className="w-full">
                  Contactar Ventas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

