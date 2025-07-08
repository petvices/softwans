import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Softwans | Software Empresarial y Hosting en Caracas",
  description:
    "Empresa dedicada a la distribución y creación de software empresarial pesado. Desarrollo de apps, páginas web y hosting en Caracas.",
  keywords: [
    "software empresarial",
    "desarrollo de software",
    "aplicaciones móviles",
    "hosting en Caracas",
  ],
  openGraph: {
    title: "Softwans | Software & Marketing solutions.",
    description:
      "Somos una empresa especializada en software empresarial, aplicaciones móviles y hosting. Ubicados en Caracas, Venezuela.",
    url: "https://www.softwans.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function loadScript(a){
                  var b = document.getElementsByTagName("head")[0],
                      c = document.createElement("script");
                  c.type = "text/javascript";
                  c.src = "https://tracker.metricool.com/resources/be.js";
                  c.onreadystatechange = a;
                  c.onload = a;
                  b.appendChild(c);
                })(function(){
                  beTracker.t({hash: "e6b053fe2f9c462a7cfc05ef6427b24d"});
                });
              `
            }}
          />
        )}
        <link rel="icon" href="/favicon.ico" />
        {/* Opcional: otros favicons */}
        <link rel="icon" href="images/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
