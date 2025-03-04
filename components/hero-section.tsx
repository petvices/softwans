import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Desarrollo de Software en Caracas | Softwans</title>
        <meta name="description" content="Empresa de desarrollo de software en Caracas. Creamos aplicaciones móviles, páginas web y ofrecemos hosting de alto rendimiento. Solicita tu presupuesto hoy." />
      </Head>
      <HeroSection />
    </>
  );
}

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Desarrollo de Software en Caracas | Apps, Páginas Web y Hosting Empresarial
            </h1>

              <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Soluciones de software empresarial, diseño de páginas web y hosting de alta calidad para impulsar el crecimiento de tu negocio en la era digital.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contacto">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Solicitar Presupuesto
                </Button>
              </Link>
              <Link href="#servicios">
                <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1726056652684-9c135013cef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={550}
            height={550}
            alt="Empresa de desarrollo de software en Caracas"
            unoptimized={true} 
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  )
}

