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
  description: "Empresa dedicada a la distribución y creación de software empresarial pesado. Desarrollo de apps, páginas web y hosting en Caracas.",
  keywords: ["software empresarial", "desarrollo de software", "aplicaciones móviles", "hosting en Caracas"],
  openGraph: {
    title: "Softwans | Desarrollo de Software y Hosting en Caracas",
    description: "Somos una empresa especializada en software empresarial, aplicaciones móviles y hosting. Ubicados en Caracas, Venezuela.",
    url: "https://softwans.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
