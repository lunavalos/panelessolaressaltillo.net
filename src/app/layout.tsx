import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paneles Solares Saltillo | Transformando el Mañana",
  description:
    "Transforma tu hogar o negocio con paneles solares en Saltillo y todo México. Solicita una cotización gratuita con instaladores expertos y equipos certificados Tier 1.",
  icons: {
    icon: "/imagenes/favicon.png",
    shortcut: "/imagenes/favicon.png",
    apple: "/imagenes/favicon.png",
  },
  openGraph: {
    title: "Paneles Solares Saltillo — Transformando el Mañana",
    description:
      "Solicita una cotización para una instalación profesional con los mejores expertos en Saltillo. Ahorra en tus facturas de CFE y contribuye al medio ambiente.",
    url: "https://panelessolaressaltillo.net/",
    siteName: "Paneles Solares Saltillo",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={rubik.variable}>
      <body className="font-sans antialiased bg-white text-[#1C203D]">
        {children}
      </body>
    </html>
  );
}
