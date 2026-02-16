import type { Metadata } from "next";
import { ThemeScript } from "@/components/ThemeScript";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SITE_URL, PERSONA } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${PERSONA.marca} — Viajar sin stress empieza aquí`,
    template: `%s | ${PERSONA.marca}`,
  },
  description:
    "Asesoría y planificación de viajes personalizada. Cotiza gratis por WhatsApp con Nati, tu asesora de viajes de confianza.",
  keywords: [
    "asesora de viajes",
    "planificación de viajes",
    "viajes a medida",
    "cotizar viaje",
    "agente de viajes Chile",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_URL,
    siteName: PERSONA.marca,
    title: `${PERSONA.marca} — Viajar sin stress empieza aquí`,
    description:
      "Asesoría y planificación de viajes personalizada. Cotiza gratis por WhatsApp.",
    // TODO: agregar imagen OG → images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONA.marca} — Viajar sin stress empieza aquí`,
    description:
      "Asesoría y planificación de viajes personalizada. Cotiza gratis por WhatsApp.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="solar" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
