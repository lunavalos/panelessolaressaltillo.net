"use client";

import React from "react";
import {
  Sun,
  Zap,
  Gauge,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const topCategories = [
  {
    icon: Sun,
    title: "Paneles Solares",
    bullets: ["Celdas fotovoltaicas", "Alta durabilidad climática"],
  },
  {
    icon: Zap,
    title: "Inversores",
    bullets: ["Corriente continua a alterna", "Energía limpia de uso diario"],
  },
  {
    icon: Gauge,
    title: "Medición y Ahorro",
    bullets: ["Registro de excedentes", "Reducción en tu factura"],
  },
  {
    icon: Building2,
    title: "Aplicaciones",
    bullets: ["Hogar y zonas residenciales", "Comercio e industria"],
  },
];

const highlightedBenefits = [
  "Evaluación sin costo con tu recibo de luz",
  "Productos solares 100% certificados",
  "Instalación hecha a tu medida",
  "Instaladores expertos y capacitados",
  "Equipos resistentes a cualquier clima",
  "Cobertura en Saltillo y todo México",
];

export default function SolutionsSection() {
  return (
    <section
      id="soluciones"
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 bg-white text-black overflow-hidden scroll-mt-24"
    >
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Top Centered 2-Line Heading + Subtitle (matching AboutSection) */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-7">
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold uppercase text-black leading-[1.12] tracking-tight">
            <span className="block reveal-blur reveal-delay-1">DISEÑADO PARA TU HOGAR,</span>
            <span className="block reveal-blur reveal-delay-2">NEGOCIO O INDUSTRIA.</span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-black/80 leading-relaxed font-normal reveal-blur reveal-delay-3">
            Paneles Solares Saltillo transforma la luz del sol en
            <span className="block">
              ahorros reales durante toda la vida útil de tu sistema.
            </span>
          </p>
        </div>

        {/* Subheader with Blue Bottom Line (matching reference image + AboutSection style) */}
        <div className="mb-4 reveal-blur reveal-delay-3">
          <h3 className="text-base sm:text-xl font-normal uppercase tracking-tight text-black pb-2">
            TECNOLOGÍA Y <span className="text-[#2E71F2] font-bold">SOLUCIONES</span>
          </h3>
          <div className="w-24 h-[3px] bg-[#2E71F2]" />
        </div>

        {/* Top Row: 4 Category Cards (matching reference image structure + AboutSection gray palette) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-4 sm:mb-5">
          {topCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={idx}
                className={`bg-[#EFEFEF] p-4 sm:p-5 flex items-start gap-3.5 reveal-blur reveal-delay-${idx + 3}`}
              >
                <div className="w-9 h-9 bg-[#D2D2D2] flex items-center justify-center shrink-0">
                  <IconComponent className="w-4 h-4 text-[#2E71F2] stroke-[2.2]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-[15px] font-extrabold text-black leading-snug">
                    {cat.title}
                  </h4>
                  <ul className="mt-1.5 space-y-1">
                    {cat.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-center gap-1.5 text-[11px] sm:text-xs text-black/75"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#2E71F2] shrink-0" />
                        <span className="truncate">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Main Block */}
        <div className="bg-[#EFEFEF] p-5 sm:p-7 reveal-blur reveal-delay-4">
          {/* Header with Title + Description */}
          <div className="mb-5">
            <h3 className="text-base sm:text-xl font-extrabold uppercase tracking-tight text-black">
              Instalación Profesional y Asesoría Especializada
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-black/75 leading-relaxed max-w-2xl">
              Ofrecemos soluciones adicionales para hogares, comercios e
              industrias con asesoría técnica personalizada y equipos solares
              certificados de alta eficiencia.
            </p>
          </div>

          {/* 3-Column Grid of Benefit Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {highlightedBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#E5E5E5] px-4 py-3 flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#2E71F2] shrink-0 stroke-[2.2]" />
                <span className="text-xs sm:text-[13px] font-semibold text-black/85">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Centered Bottom CTA Button */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/5218443929525?text=Hola%20Paneles%20Solares%20Saltillo,%20me%20gustar%C3%ADa%20solicitar%20asesor%C3%ADa%20gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded bg-[#2E71F2] hover:bg-[#3B7DF5] text-white text-xs font-semibold tracking-[0.14em] uppercase px-6 py-3 shadow-md transition-all duration-200"
            >
              <span>SOLICITAR ASESORÍA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
