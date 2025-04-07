import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogRelatedPosts() {
  const relatedPosts = [
    {
      title: "Cómo implementar Machine Learning en pequeñas empresas",
      excerpt: "Guía práctica para aprovechar el aprendizaje automático sin grandes inversiones.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Machine Learning",
      date: "2 de abril, 2025",
      slug: "#",
    },
    {
      title: "5 herramientas de IA para optimizar el marketing digital",
      excerpt: "Descubre cómo la inteligencia artificial está revolucionando las estrategias de marketing.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Marketing Digital",
      date: "28 de marzo, 2025",
      slug: "#",
    },
    {
      title: "El futuro del trabajo: colaboración entre humanos e IA",
      excerpt: "Análisis de cómo la inteligencia artificial está transformando los entornos laborales.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Futuro del Trabajo",
      date: "15 de marzo, 2025",
      slug: "#",
    },
  ]

  return (
    <section className="bg-muted/30 py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-2">
            <span className="mr-1">📚</span> Más contenido
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Artículos relacionados</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Sigue explorando cómo la tecnología puede transformar tu negocio con estos artículos seleccionados.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post, index) => (
            <Link key={index} href={post.slug} className="group">
              <div className="rounded-xl border bg-background overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">{post.date}</div>
                    <div className="text-primary text-sm font-medium group-hover:underline">Leer más</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" className="group">
            Ver todos los artículos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

