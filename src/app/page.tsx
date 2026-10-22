import React from "react";
import PageIntroLoader from "@/components/PageIntroLoader";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowcaseSection from "@/components/ShowcaseSection";
import ScrollSequenceWrapper from "@/components/ScrollSequenceWrapper";
import ExperienceSection from "@/components/ExperienceSection";
import WhiteEditorialSection from "@/components/WhiteEditorialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#1C203D]">
      {/* Animación de carga inicial (solo en index): logo en fondo sólido que se parte a la mitad */}
      <PageIntroLoader />

      {/* Observador global de animaciones de carga estilo Killian Herzer por elemento */}
      <ScrollRevealObserver />

      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Primera Sección debajo del Hero */}
      <ShowcaseSection />

      {/* Secuencia de Scroll:
          1. ¿Cómo funcionan los paneles solares? (100vh, sube y descubre la siguiente sección debajo)
          2. Transformando el mañana con energía solar en Saltillo (se hace más chica hacia adentro y se difumina al dar scroll)
          3. Sección Diseñado para tu hogar, negocio o industria */}
      <ScrollSequenceWrapper />

      {/* Sección con fondo oscuro de cuadrícula */}
      <ExperienceSection />

      {/* Nueva Sección con estilo de fondo blanco sin muchas cajas */}
      <WhiteEditorialSection />

      {/* Sección de Formulario de Contacto */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
