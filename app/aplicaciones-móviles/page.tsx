import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Tablet,
  Monitor,
  Code,
  Zap,
  Shield,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Cpu,
  Database,
  Cloud,
  Lock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Desarrollo de Aplicaciones Móviles | Apps iOS y Android Profesionales",
  description:
    "Desarrollo de aplicaciones móviles nativas y multiplataforma. Apps iOS, Android, React Native, Flutter. Diseño UX/UI, backend, publicación App Store y Google Play.",
  keywords:
    "desarrollo aplicaciones móviles, apps iOS, apps Android, aplicaciones nativas, React Native, Flutter, desarrollo app móvil, programación móvil, diseño app, UX UI móvil, App Store, Google Play, aplicaciones multiplataforma, desarrollo iOS, desarrollo Android, programador app, empresa desarrollo móvil, crear aplicación móvil, app nativa, aplicación híbrida, Swift, Kotlin, Xamarin, Ionic, PhoneGap, Cordova, desarrollo app empresarial, aplicación comercial, app startup, prototipo app, MVP móvil, backend móvil, API REST, push notifications, geolocalización, cámara móvil, sensores móvil, realidad aumentada, AR móvil, machine learning móvil, inteligencia artificial app, app e-commerce, tienda online móvil, app delivery, aplicación logística, app salud, telemedicina móvil, app educativa, gamificación móvil, app fintech, banca móvil, wallet digital, app turismo, app restaurante, app fitness, wearables, Apple Watch, Android Wear, testing móvil, QA app, optimización rendimiento, seguridad móvil, cifrado app, autenticación biométrica, Face ID, Touch ID, monetización app, in-app purchases, publicidad móvil, analytics móvil, Firebase, AWS móvil, Azure móvil, CI/CD móvil, DevOps móvil, mantenimiento app, actualización app, soporte técnico móvil, consultoría móvil, arquitectura app, escalabilidad móvil, performance móvil, offline first, sincronización datos, base datos móvil, SQLite, Realm, Core Data, almacenamiento local, cloud storage, backup móvil, migración app, modernización app, refactoring móvil, código limpio móvil, buenas prácticas móvil, metodología ágil móvil, Scrum móvil, sprint móvil, entrega continua móvil",
  authors: [{ name: "Equipo de Desarrollo Móvil | Softwans" }],
  creator: "Agencia de Desarrollo de Apps",
  publisher: "Desarrollo Aplicaciones Móviles",
  robots: "index, follow",
  alternates: {
    canonical: "/desarrollo-aplicaciones-moviles",
  },
  openGraph: {
    title: "Desarrollo de Aplicaciones Móviles Profesionales | iOS y Android",
    description:
      "Creamos aplicaciones móviles nativas y multiplataforma. Especialistas en iOS, Android, React Native y Flutter. Desde la idea hasta la publicación.",
    type: "website",
    locale: "es_ES",
    siteName: "Desarrollo Apps Móviles",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de Apps Móviles | iOS y Android",
    description: "Aplicaciones móviles profesionales. Desarrollo nativo y multiplataforma con las mejores tecnologías.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Desarrollo de Aplicaciones Móviles",
  description:
    "Servicios profesionales de desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android",
  provider: {
    "@type": "Organization",
    name: "Softwans | Agencia de Desarrollo Móvil",
  },
  serviceType: "Desarrollo de Software Móvil",
  areaServed: "España",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Desarrollo Móvil",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo iOS Nativo",
          description: "Aplicaciones nativas para iPhone y iPad con Swift y Objective-C",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo Android Nativo",
          description: "Apps nativas para Android con Kotlin y Java",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo Multiplataforma",
          description: "Aplicaciones híbridas con React Native y Flutter",
        },
      },
    ],
  },
}

export default function DesarrolloAplicacionesMoviles() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Desarrollo de Apps Móviles
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Desarrollo de
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Aplicaciones Móviles
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Creamos aplicaciones móviles nativas y multiplataforma para iOS y Android. Desde la conceptualización
              hasta la publicación en App Store y Google Play, desarrollamos apps que destacan por su rendimiento,
              diseño y experiencia de usuario.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
              >
                <Play className="w-5 h-5 mr-2" />
                Solicitar Presupuesto Gratuito
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                <Download className="w-5 h-5 mr-2" />
                Ver Portfolio de Apps
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">+5</div>
                <div className="text-gray-600">Apps Desarrolladas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600">Tasa de Éxito</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
                <div className="text-gray-600">Rating Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Desarrollo Móvil */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Servicios de Desarrollo de Apps Móviles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos soluciones completas de desarrollo móvil adaptadas a las necesidades específicas de tu negocio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Desarrollo iOS Nativo</CardTitle>
                  <CardDescription className="text-gray-600">
                    Apps nativas para iPhone y iPad con Swift y Objective-C, optimizadas para el ecosistema Apple
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Swift y Objective-C
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Xcode y iOS SDK
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      App Store Guidelines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Core Data y CloudKit
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Desarrollo Android Nativo</CardTitle>
                  <CardDescription className="text-gray-600">
                    Aplicaciones nativas para Android con Kotlin y Java, siguiendo Material Design
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Kotlin y Java
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Android Studio
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Material Design
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Google Play Console
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Tablet className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Apps Multiplataforma</CardTitle>
                  <CardDescription className="text-gray-600">
                    Desarrollo híbrido con React Native y Flutter para máxima eficiencia y alcance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      React Native
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Flutter y Dart
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Código compartido
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Despliegue dual
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Diseño UX/UI Móvil</CardTitle>
                  <CardDescription className="text-gray-600">
                    Interfaces intuitivas y experiencias de usuario optimizadas para dispositivos móviles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Prototipado interactivo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Design System móvil
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Usability Testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Responsive Design
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Backend y APIs</CardTitle>
                  <CardDescription className="text-gray-600">
                    Desarrollo de backend robusto y APIs REST para alimentar tus aplicaciones móviles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      APIs REST y GraphQL
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Base de datos escalable
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Autenticación segura
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Push notifications
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Testing y QA Móvil</CardTitle>
                  <CardDescription className="text-gray-600">
                    Pruebas exhaustivas en dispositivos reales y simuladores para garantizar calidad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Testing automatizado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Pruebas en dispositivos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Performance testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Security testing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tipos de Aplicaciones */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tipos de Aplicaciones Móviles que Desarrollamos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Especializados en diferentes sectores y tipos de aplicaciones móviles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apps E-commerce</h3>
                <p className="text-gray-600 text-sm">
                  Tiendas online móviles con carrito, pagos y gestión de inventario
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apps Empresariales</h3>
                <p className="text-gray-600 text-sm">Soluciones corporativas para gestión interna y productividad</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apps Sociales</h3>
                <p className="text-gray-600 text-sm">Redes sociales, chat, comunidades y plataformas de interacción</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apps Fintech</h3>
                <p className="text-gray-600 text-sm">Aplicaciones financieras, wallets digitales y pagos móviles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por Qué Elegir Nuestro Desarrollo de Apps Móviles?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Combinamos experiencia técnica, diseño innovador y metodologías ágiles para crear apps excepcionales
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnología Avanzada</h3>
                <p className="text-gray-600">
                  Utilizamos las últimas tecnologías y frameworks para desarrollo móvil, garantizando apps modernas y
                  escalables.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Seguridad Garantizada</h3>
                <p className="text-gray-600">
                  Implementamos las mejores prácticas de seguridad móvil, cifrado de datos y autenticación robusta.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Alto Rendimiento</h3>
                <p className="text-gray-600">
                  Optimizamos cada aspecto de la app para máximo rendimiento, velocidad de carga y eficiencia
                  energética.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">UX Excepcional</h3>
                <p className="text-gray-600">
                  Diseñamos interfaces intuitivas y experiencias de usuario que deleitan y fidelizan a tus usuarios.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Escalabilidad Cloud</h3>
                <p className="text-gray-600">
                  Arquitecturas cloud-native que crecen con tu negocio, soportando millones de usuarios sin problemas.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Soporte Continuo</h3>
                <p className="text-gray-600">
                  Mantenimiento, actualizaciones y soporte técnico 24/7 para garantizar el éxito de tu aplicación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Desarrollo */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestro Proceso de Desarrollo de Apps
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Metodología ágil y probada que garantiza el éxito de tu proyecto móvil
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Análisis y Planificación</h3>
                <p className="text-gray-600">
                  Definimos objetivos, audiencia target, funcionalidades clave y arquitectura técnica de la aplicación.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Diseño UX/UI</h3>
                <p className="text-gray-600">
                  Creamos wireframes, prototipos interactivos y diseños finales optimizados para móviles.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Desarrollo y Testing</h3>
                <p className="text-gray-600">
                  Programación ágil con sprints, testing continuo y integración de funcionalidades avanzadas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lanzamiento y Soporte</h3>
                <p className="text-gray-600">
                  Publicación en App Store y Google Play, monitoreo post-lanzamiento y actualizaciones continuas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tecnologías de Desarrollo Móvil</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stack tecnológico completo para desarrollo de aplicaciones móviles modernas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Desarrollo Nativo</h3>
                <div className="space-y-2">
                  <Badge variant="secondary">Swift</Badge>
                  <Badge variant="secondary">Objective-C</Badge>
                  <Badge variant="secondary">Kotlin</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Xcode</Badge>
                  <Badge variant="secondary">Android Studio</Badge>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Multiplataforma</h3>
                <div className="space-y-2">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Flutter</Badge>
                  <Badge variant="secondary">Dart</Badge>
                  <Badge variant="secondary">Xamarin</Badge>
                  <Badge variant="secondary">Ionic</Badge>
                  <Badge variant="secondary">Cordova</Badge>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend y APIs</h3>
                <div className="space-y-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                  <Badge variant="secondary">AWS Mobile</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Base de Datos</h3>
                <div className="space-y-2">
                  <Badge variant="secondary">SQLite</Badge>
                  <Badge variant="secondary">Realm</Badge>
                  <Badge variant="secondary">Core Data</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes sobre Desarrollo de Apps
              </h2>
              <p className="text-xl text-gray-600">
                Resolvemos las dudas más comunes sobre desarrollo de aplicaciones móviles
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Cuánto tiempo tarda en desarrollarse una aplicación móvil?
                </h3>
                <p className="text-gray-600">
                  El tiempo de desarrollo varía según la complejidad: apps simples (2-3 meses), apps medianas (4-6
                  meses), apps complejas (6-12 meses). Incluye diseño, desarrollo, testing y lanzamiento.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Es mejor desarrollar nativo o multiplataforma?
                </h3>
                <p className="text-gray-600">
                  Depende de tus necesidades: nativo ofrece máximo rendimiento y acceso completo a funcionalidades del
                  dispositivo, mientras que multiplataforma es más eficiente en costos y tiempo para llegar a ambas
                  plataformas.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Qué incluye el proceso de publicación en las tiendas?
                </h3>
                <p className="text-gray-600">
                  Incluimos preparación de assets, descripción optimizada para ASO, cumplimiento de guidelines, envío
                  para revisión, gestión del proceso de aprobación y configuración de analytics post-lanzamiento.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Ofrecen mantenimiento y actualizaciones posteriores?
                </h3>
                <p className="text-gray-600">
                  Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones de seguridad, compatibilidad con
                  nuevas versiones de OS, corrección de bugs, nuevas funcionalidades y soporte técnico 24/7.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Cómo garantizan la seguridad de los datos en la app?
                </h3>
                <p className="text-gray-600">
                  Implementamos cifrado end-to-end, autenticación multifactor, almacenamiento seguro local,
                  comunicaciones HTTPS/TLS, auditorías de seguridad y cumplimiento de normativas como GDPR.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  ¿Pueden integrar la app con sistemas existentes?
                </h3>
                <p className="text-gray-600">
                  Absolutamente. Desarrollamos APIs personalizadas y conectores para integrar con CRM, ERP, bases de
                  datos existentes, servicios de pago, sistemas de inventario y cualquier plataforma empresarial.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Crear tu Aplicación Móvil?</h2>
            <p className="text-xl mb-8 opacity-90">
              Convierte tu idea en una app exitosa. Consulta gratuita y presupuesto sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Consulta Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Ver Casos de Éxito
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
