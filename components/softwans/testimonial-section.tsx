import Image from "next/image"

export function TestimonialSection() {
  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonios</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lo que dicen nuestros clientes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre por qué las empresas confían en nosotros para su presencia online y necesidades tecnológicas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {/* Testimonio 1 */}
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="https://img.freepik.com/free-photo/medium-shot-woman-spending-quality-time-outdoors_23-2150757174.jpg?t=st=1741039636~exp=1741043236~hmac=45bceaa800d2736f9c3ab45b15e09e97946175655672b032bbedf934cca0c7fc&w=740"
                  width={60}
                  height={60}
                  alt="María García | CEO de Innovatech"
                  unoptimized={true} 
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">María García</h3>
                  <p className="text-sm text-muted-foreground">CEO, Innovatech</p>
                </div>
              </div>
              <p className="text-muted-foreground">
              &quot;Gracias a Softwans y su software de gestión, hemos aumentado nuestra productividad en un 40%. El equipo de soporte
                siempre está disponible cuando lo necesitamos.&quot;
              </p>
              <div className="flex text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <defs>
                    <linearGradient id="half-fill">
                      <stop offset="50%" stop-color="currentColor"/>
                      <stop offset="50%" stop-color="gray"/> 
                    </linearGradient>
                  </defs>

                  <polygon 
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 
                            12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    fill="url(#half-fill)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="https://img.freepik.com/free-photo/modern-man-with-coffee-cup-urban-environment_23-2147960999.jpg?t=st=1741039292~exp=1741042892~hmac=279bcd25dd999cdcf00accffaebe01663691d54185dd6f59378dff3229249121&w=740"
                  width={60}
                  height={60}
                  alt="Carlos Rodríguez | Director General de Marketing en Global Shop"
                  unoptimized={true} 
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Carlos Rodríguez</h3>
                  <p className="text-sm text-muted-foreground">Director de Marketing, Global Shop</p>
                </div>
              </div>
              <p className="text-muted-foreground">
              &quot;Nuestra nueva página web ha incrementado nuestras ventas online en un 75%. El diseño es exactamente lo
                que buscábamos y la velocidad de carga es impresionante.&quot;
              </p>
              <div className="flex text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Testimonio 3 */}
          <div className="rounded-lg border bg-background p-8 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="https://img.freepik.com/free-photo/smiling-woman-wearing-hat-park_1301-1199.jpg?t=st=1741039451~exp=1741043051~hmac=f0550d473cb20fa6c7cc3d6958d26970ef99c2e43936ef6862cc182072a421e7&w=740"
                  width={60}
                  height={60}
                  alt="Laura Martínez | CTO de TechStart"
                  unoptimized={true} 
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Laura Martínez</h3>
                  <p className="text-sm text-muted-foreground">CTO, TechStart</p>
                </div>
              </div>
              <p className="text-muted-foreground">
              &quot;El servicio de hosting es excepcional. Desde que migramos nuestros servidores con ellos, no hemos
                experimentado ningún tiempo de inactividad. Altamente recomendable.&quot;
              </p>
              <div className="flex text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <defs>
                    <linearGradient id="half-fill">
                      <stop offset="50%" stop-color="currentColor"/>
                      <stop offset="50%" stop-color="gray"/> 
                    </linearGradient>
                  </defs>
                  
                  <polygon 
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 
                            12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    fill="url(#half-fill)"
                  />
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

