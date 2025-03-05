import { Database, Globe, Laptop, LayoutGrid, Server, ShieldCheck } from "lucide-react"

export function FeatureSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Nuestros Servicios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Soluciones Completas para tu Negocio</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos una amplia gama de servicios tecnológicos para ayudar a tu empresa a crecer y prosperar en el
              mundo digital.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Laptop className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Software Empresarial</h3>
            <p className="text-muted-foreground">
              Soluciones personalizadas para gestión de recursos, CRM, facturación y más, adaptadas a las necesidades
              específicas de tu empresa.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Páginas Web</h3>
            <p className="text-muted-foreground">
              Diseño y desarrollo de sitios web profesionales, responsivos y optimizados para SEO que representan
              perfectamente tu marca.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Hosting</h3>
            <p className="text-muted-foreground">
              Servicios de alojamiento web rápidos, seguros y confiables con soporte técnico 24/7 para mantener la
              presencia de tú negocio siempre en línea.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <LayoutGrid className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Aplicaciones Móviles</h3>
            <p className="text-muted-foreground">
              Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android que conectan tu negocio con
              clientes en cualquier lugar.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Gestión de Datos</h3>
            <p className="text-muted-foreground">
              Soluciones de almacenamiento, análisis y visualización de datos que te ayudan a tomar decisiones
              informadas para tu negocio.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Seguridad Digital</h3>
            <p className="text-muted-foreground">
              Protección integral contra amenazas cibernéticas, auditorías de seguridad y soluciones de cumplimiento
              normativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

