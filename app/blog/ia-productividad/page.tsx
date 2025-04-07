import type { Metadata } from "next"
import Image from "next/image"
import { Clock, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react"
import { BlogAuthor } from "@/components/blog/blog-author"
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts"
import { BlogCta } from "@/components/blog/blog-cta"
import { BlogTableOfContents } from "@/components/blog/blog-table-of-contents"
import { Header } from "@/components/softwans/header"
import { Footer } from "@/components/softwans/footer"

export const metadata: Metadata = {
  title: "IA y Productividad: Transformando el Mundo de los Negocios | TechSolutions",
  description:
    "Descubre cómo la Inteligencia Artificial está revolucionando la productividad empresarial y cómo implementarla en tu negocio para obtener resultados excepcionales.",
}

export default function IAProductividadPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Incluir el Header completo para mantener la navegación consistente */}
      <Header />

      <main className="flex-1">
        {/* Cabecera del artículo */}
        <div className="relative overflow-hidden bg-gradient-blue py-16 md:py-24">
          {/* Efecto de partículas animadas */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/30"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent [mask-image:linear-gradient(to_bottom,transparent_30%,black)]"></div>

          {/* Círculos decorativos */}
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>

          <div className="container relative z-10 max-w-screen-md px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <span className="mr-1">🧠</span> Inteligencia Artificial
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                IA y Productividad: Transformando el Mundo de los Negocios
              </h1>
              <p className="max-w-[700px] text-xl text-white/80 mb-8">
                Descubre cómo la Inteligencia Artificial está revolucionando la productividad empresarial y cómo
                implementarla en tu negocio.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>12 min de lectura</span>
                </div>
                <div>Publicado: 7 de abril, 2025</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido del artículo */}
        <div className="container px-4 py-12 md:px-6 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Tabla de contenidos en escritorio */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <BlogTableOfContents />
              </div>
            </div>

            {/* Contenido principal */}
            <div className="lg:col-span-9">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="relative aspect-video overflow-hidden rounded-xl mb-10 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Inteligencia Artificial en el entorno empresarial"
                    width={1200}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium">
                      La IA está transformando la forma en que las empresas operan y toman decisiones
                    </p>
                  </div>
                </div>

                <BlogAuthor />

                <h2 id="introduccion" className="flex items-center gap-2 text-3xl font-bold mt-12 mb-6 text-primary">
                  <span className="bg-primary/10 p-1 rounded-md">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </span>
                  Introducción: La revolución silenciosa de la IA
                </h2>
                <p className="text-lg leading-relaxed">
                  La <strong className="font-semibold">Inteligencia Artificial (IA)</strong> ha dejado de ser un
                  concepto futurista para convertirse en una realidad transformadora en el mundo empresarial. Lejos de
                  las representaciones de ciencia ficción, la IA actual se integra sutilmente en nuestras operaciones
                  diarias, optimizando procesos, automatizando tareas repetitivas y potenciando la toma de decisiones
                  estratégicas.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-8">
                  <p className="text-lg font-medium text-primary mb-2">💡 Dato clave</p>
                  <p className="mb-0">
                    Según un estudio reciente de McKinsey, las empresas que han adoptado tecnologías de IA han
                    experimentado un{" "}
                    <strong className="font-semibold">aumento promedio del 40% en su productividad</strong> y una{" "}
                    <strong className="font-semibold">reducción del 20% en costos operativos</strong>.
                  </p>
                </div>

                <h2 id="transformacion" className="flex items-center gap-2 text-3xl font-bold mt-12 mb-6 text-primary">
                  <span className="bg-primary/10 p-1 rounded-md">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </span>
                  ¿Cómo está transformando la IA la productividad empresarial?
                </h2>
                <p className="text-lg leading-relaxed">
                  La integración de la IA en el entorno empresarial está redefiniendo lo que entendemos por
                  productividad. Ya no se trata simplemente de hacer más en menos tiempo, sino de optimizar recursos,
                  mejorar la calidad y generar valor de formas previamente inimaginables.
                </p>

                <h3 id="automatizacion" className="text-2xl font-bold mt-10 mb-4 text-foreground/90">
                  1. Automatización inteligente de procesos
                </h3>
                <p className="text-lg leading-relaxed">
                  La <strong className="font-semibold">automatización robótica de procesos (RPA)</strong> combinada con
                  IA permite a las empresas automatizar no solo tareas repetitivas, sino también aquellas que requieren
                  cierto grado de juicio. Desde la gestión de inventarios hasta el procesamiento de facturas, la IA
                  puede manejar flujos de trabajo completos con mínima intervención humana.
                </p>
                <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                  <p className="font-semibold mb-2">📊 Caso de estudio:</p>
                  <p className="mb-0">
                    Una empresa de servicios financieros implementó un sistema de IA para procesar solicitudes de
                    préstamos, reduciendo el tiempo de procesamiento de 3 días a 15 minutos, con un aumento del 30% en
                    la precisión de las evaluaciones.
                  </p>
                </div>

                <h3 id="analisis-predictivo" className="text-2xl font-bold mt-10 mb-4 text-foreground/90">
                  2. Análisis predictivo y toma de decisiones
                </h3>
                <p className="text-lg leading-relaxed">
                  Los algoritmos de <strong className="font-semibold">aprendizaje automático</strong> pueden analizar
                  patrones históricos y predecir tendencias futuras con un nivel de precisión sorprendente. Esto permite
                  a las empresas anticiparse a cambios en el mercado, optimizar precios, prever demandas y tomar
                  decisiones estratégicas basadas en datos.
                </p>
                <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                  <p className="font-semibold mb-2">🔍 Aplicación práctica:</p>
                  <p className="mb-0">
                    Sistemas de IA que analizan el comportamiento de compra de los clientes para personalizar ofertas,
                    optimizar inventarios y reducir costos de almacenamiento.
                  </p>
                </div>

                <h3 id="asistentes-virtuales" className="text-2xl font-bold mt-10 mb-4 text-foreground/90">
                  3. Asistentes virtuales y chatbots
                </h3>
                <p className="text-lg leading-relaxed">
                  Los <strong className="font-semibold">asistentes impulsados por IA</strong> están revolucionando la
                  atención al cliente y el soporte interno. Estos sistemas pueden manejar consultas rutinarias,
                  programar reuniones, buscar información y ejecutar tareas administrativas, liberando tiempo valioso
                  para que los empleados se concentren en actividades de mayor valor.
                </p>
                <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                  <p className="font-semibold mb-2">📈 Estadística relevante:</p>
                  <p className="mb-0">
                    Las empresas que implementan chatbots reportan una{" "}
                    <strong className="font-semibold">reducción del 70% en las consultas de soporte</strong> de primer
                    nivel y un <strong className="font-semibold">aumento del 35% en la satisfacción del cliente</strong>
                    .
                  </p>
                </div>

                <h3 id="procesamiento-lenguaje" className="text-2xl font-bold mt-10 mb-4 text-foreground/90">
                  4. Procesamiento de lenguaje natural (NLP)
                </h3>
                <p className="text-lg leading-relaxed">
                  Las tecnologías de <strong className="font-semibold">NLP</strong> permiten a las máquinas comprender,
                  interpretar y generar lenguaje humano. Esto facilita la extracción de información de documentos no
                  estructurados, la generación automática de informes y la realización de análisis de sentimiento en
                  redes sociales.
                </p>
                <div className="bg-muted rounded-xl p-6 my-6 border-l-4 border-primary">
                  <p className="font-semibold mb-2">💻 Ejemplo práctico:</p>
                  <p className="mb-0">
                    Herramientas de IA que pueden resumir automáticamente largas reuniones o documentos extensos,
                    extrayendo los puntos clave y las acciones a seguir.
                  </p>
                </div>

                <div className="my-12 p-8 bg-primary/10 rounded-xl border border-primary/20 shadow-lg">
                  <h4 className="text-2xl font-bold mb-6 text-primary">
                    🛠️ Herramientas de IA para potenciar la productividad
                  </h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-background rounded-lg p-4 border">
                      <p className="font-semibold mb-1">Asana + IA</p>
                      <p className="text-sm text-muted-foreground mb-0">
                        Gestión de proyectos con priorización inteligente de tareas
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <p className="font-semibold mb-1">Notion AI</p>
                      <p className="text-sm text-muted-foreground mb-0">
                        Asistente de escritura y organización de información
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <p className="font-semibold mb-1">Otter.ai</p>
                      <p className="text-sm text-muted-foreground mb-0">
                        Transcripción y resumen automático de reuniones
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <p className="font-semibold mb-1">Grammarly</p>
                      <p className="text-sm text-muted-foreground mb-0">
                        Corrección y mejora de textos con sugerencias contextuales
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <p className="font-semibold mb-1">Jasper</p>
                      <p className="text-sm text-muted-foreground mb-0">Generación de contenido para marketing</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <p className="font-semibold mb-1">Loom + AI</p>
                      <p className="text-sm text-muted-foreground mb-0">Creación y edición de videos explicativos</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <p className="font-semibold mb-1">Krisp</p>
                      <p className="text-sm text-muted-foreground mb-0">Eliminación de ruido en llamadas con IA</p>
                    </div>
                    <div className="bg-background rounded-lg p-4 border">
                      <p className="font-semibold mb-1">Zapier + IA</p>
                      <p className="text-sm text-muted-foreground mb-0">
                        Automatización inteligente entre aplicaciones
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id="implementacion" className="flex items-center gap-2 text-3xl font-bold mt-12 mb-6 text-primary">
                  <span className="bg-primary/10 p-1 rounded-md">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </span>
                  Implementando IA en tu empresa: Guía práctica
                </h2>
                <p className="text-lg leading-relaxed">
                  La adopción de IA no requiere necesariamente grandes inversiones o equipos especializados. Existen
                  múltiples formas de comenzar a integrar estas tecnologías en tu negocio:
                </p>

                <div className="space-y-8 my-8">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Identifica áreas de oportunidad</h3>
                      <p className="text-lg leading-relaxed">
                        Comienza por analizar qué procesos consumen más tiempo, cuáles son repetitivos o dónde se
                        producen más errores. Estas áreas suelen ser candidatas ideales para la implementación de
                        soluciones de IA.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Aprovecha soluciones SaaS existentes</h3>
                      <p className="text-lg leading-relaxed">
                        Numerosas plataformas ofrecen capacidades de IA como servicio, permitiéndote beneficiarte de
                        estas tecnologías sin necesidad de desarrollo propio. Desde CRMs con análisis predictivo hasta
                        herramientas de marketing con optimización automática de campañas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Capacita a tu equipo</h3>
                      <p className="text-lg leading-relaxed">
                        El éxito de la implementación de IA depende en gran medida de la aceptación y comprensión por
                        parte de los empleados. Invierte en formación para que entiendan cómo estas herramientas pueden
                        potenciar su trabajo, no reemplazarlo.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Comienza con proyectos piloto</h3>
                      <p className="text-lg leading-relaxed">
                        Implementa soluciones de IA en áreas específicas y mide los resultados. Esto te permitirá
                        demostrar el valor antes de realizar inversiones mayores y ajustar la estrategia según sea
                        necesario.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Establece métricas claras</h3>
                      <p className="text-lg leading-relaxed">
                        Define qué indicadores utilizarás para medir el éxito: ahorro de tiempo, reducción de errores,
                        aumento de ventas, mejora en satisfacción del cliente, etc. Esto te ayudará a evaluar el retorno
                        de la inversión.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-12">
                  <h3 id="casos-exito" className="text-2xl font-bold mb-6 text-primary">
                    Casos de éxito: IA en acción
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <div className="rounded-xl border bg-background/50 p-6 shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-xl mb-3 text-primary">Sector Retail</h4>
                      <p className="text-lg leading-relaxed mb-0">
                        Una cadena de supermercados implementó IA para optimizar su cadena de suministro, reduciendo el
                        desperdicio de productos perecederos en un <strong className="font-semibold">30%</strong> y
                        mejorando la disponibilidad de productos en un <strong className="font-semibold">25%</strong>.
                      </p>
                    </div>
                    <div className="rounded-xl border bg-background/50 p-6 shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-xl mb-3 text-primary">Sector Salud</h4>
                      <p className="text-lg leading-relaxed mb-0">
                        Un hospital utilizó IA para optimizar la programación de citas, reduciendo los tiempos de espera
                        en un <strong className="font-semibold">60%</strong> y aumentando la utilización de recursos en
                        un <strong className="font-semibold">40%</strong>.
                      </p>
                    </div>
                    <div className="rounded-xl border bg-background/50 p-6 shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-xl mb-3 text-primary">Sector Financiero</h4>
                      <p className="text-lg leading-relaxed mb-0">
                        Un banco implementó algoritmos de IA para detectar fraudes, logrando identificar un{" "}
                        <strong className="font-semibold">85% más</strong>
                        de transacciones sospechosas y reduciendo los falsos positivos en un{" "}
                        <strong className="font-semibold">50%</strong>.
                      </p>
                    </div>
                    <div className="rounded-xl border bg-background/50 p-6 shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-xl mb-3 text-primary">Sector Manufacturero</h4>
                      <p className="text-lg leading-relaxed mb-0">
                        Una fábrica utilizó IA para mantenimiento predictivo, reduciendo el tiempo de inactividad no
                        planificado en un <strong className="font-semibold">45%</strong> y extendiendo la vida útil de
                        los equipos en un <strong className="font-semibold">20%</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id="consideraciones" className="flex items-center gap-2 text-3xl font-bold mt-12 mb-6 text-primary">
                  <span className="bg-primary/10 p-1 rounded-md">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </span>
                  Consideraciones éticas y limitaciones
                </h2>
                <p className="text-lg leading-relaxed">
                  A pesar de sus numerosos beneficios, la implementación de IA también plantea desafíos importantes que
                  las empresas deben abordar:
                </p>

                <div className="space-y-8 my-8">
                  <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-amber-500">
                    <h3 className="text-xl font-bold mb-2">Privacidad y seguridad de datos</h3>
                    <p className="text-lg leading-relaxed mb-0">
                      Los sistemas de IA requieren grandes cantidades de datos para funcionar eficazmente. Es
                      fundamental garantizar que la recopilación y el procesamiento de estos datos cumplan con las
                      normativas vigentes y respeten la privacidad de clientes y empleados.
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-amber-500">
                    <h3 className="text-xl font-bold mb-2">Transparencia algorítmica</h3>
                    <p className="text-lg leading-relaxed mb-0">
                      Los algoritmos de &quot;caja negra&quot; pueden generar desconfianza. Es importante poder explicar, al menos
                      en términos generales, cómo la IA llega a determinadas conclusiones o recomendaciones.
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-amber-500">
                    <h3 className="text-xl font-bold mb-2">Sesgo y equidad</h3>
                    <p className="text-lg leading-relaxed mb-0">
                      Los sistemas de IA pueden perpetuar o amplificar sesgos existentes en los datos con los que son
                      entrenados. Es crucial implementar prácticas para identificar y mitigar estos sesgos.
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-amber-500">
                    <h3 className="text-xl font-bold mb-2">Impacto en el empleo</h3>
                    <p className="text-lg leading-relaxed mb-0">
                      Si bien la IA puede automatizar ciertas tareas, también crea nuevas oportunidades laborales. Las
                      empresas deben planificar cómo reasignar y recapacitar a los empleados para roles de mayor valor.
                    </p>
                  </div>
                </div>

                <h2 id="futuro" className="flex items-center gap-2 text-3xl font-bold mt-12 mb-6 text-primary">
                  <span className="bg-primary/10 p-1 rounded-md">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </span>
                  El futuro de la IA y la productividad empresarial
                </h2>
                <p className="text-lg leading-relaxed">
                  La evolución de la IA promete transformaciones aún más profundas en los próximos años:
                </p>

                <div className="grid gap-6 md:grid-cols-3 my-8">
                  <div className="rounded-xl border bg-primary/5 p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-3 text-primary">IA generativa</h3>
                    <p className="mb-0">
                      Herramientas como GPT-4 y DALL-E están revolucionando la creación de contenido, permitiendo
                      generar textos, imágenes y código de alta calidad con simples instrucciones en lenguaje natural.
                    </p>
                  </div>

                  <div className="rounded-xl border bg-primary/5 p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-3 text-primary">IA colaborativa</h3>
                    <p className="mb-0">
                      El futuro apunta hacia sistemas que no solo automaticen tareas, sino que colaboren activamente con
                      los humanos, complementando nuestras capacidades y potenciando nuestra creatividad.
                    </p>
                  </div>

                  <div className="rounded-xl border bg-primary/5 p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-3 text-primary">Democratización de la IA</h3>
                    <p className="mb-0">
                      Las herramientas de &quot;IA sin código&quot; permitirán que incluso pequeñas empresas sin recursos técnicos
                      especializados puedan implementar soluciones avanzadas adaptadas a sus necesidades.
                    </p>
                  </div>
                </div>

                <h2 id="conclusion" className="flex items-center gap-2 text-3xl font-bold mt-12 mb-6 text-primary">
                  <span className="bg-primary/10 p-1 rounded-md">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </span>
                  Conclusión: La IA como aliada estratégica
                </h2>
                <p className="text-lg leading-relaxed">
                  La Inteligencia Artificial representa mucho más que una simple herramienta tecnológica; es un
                  catalizador de transformación que está redefiniendo lo que es posible en términos de productividad y
                  eficiencia empresarial.
                </p>
                <p className="text-lg leading-relaxed">
                  Las empresas que logren integrar estratégicamente estas tecnologías, manteniendo el equilibrio entre
                  innovación y ética, estarán mejor posicionadas para prosperar en un entorno cada vez más competitivo y
                  dinámico.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 my-8 shadow-md">
                  <p className="text-xl font-semibold text-primary mb-2">Reflexión final</p>
                  <p className="text-lg leading-relaxed mb-0">
                    La pregunta ya no es si deberías implementar IA en tu negocio, sino cómo y cuándo comenzar a
                    aprovechar su potencial transformador.
                  </p>
                </div>

                <div className="not-prose mt-12">
                  <BlogCta />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Artículos relacionados */}
        <BlogRelatedPosts />
      </main>

      {/* Incluir el Footer para mantener la consistencia */}
      <Footer />
    </div>
  )
}

