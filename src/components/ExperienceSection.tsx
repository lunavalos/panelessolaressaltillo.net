"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const timelineSteps = [
  {
    step: "01 · EVALUACIÓN SIN COSTO",
    title: "Analizamos tu recibo de luz",
    description:
      "Te recomendamos únicamente lo que necesitas de acuerdo a tus necesidades reales de consumo en tu hogar, comercio o industria.",
  },
  {
    step: "02 · PROYECTO A MEDIDA",
    title: "Instaladores expertos y equipos certificados",
    description:
      "Con experiencia en proyectos residenciales como Residencial Saqara y en el sector empresarial en Saltillo, instalamos productos solares de primera calidad.",
  },
  {
    step: "03 · DURABILIDAD Y COBERTURA",
    title: "Resistencia para cualquier clima en todo México",
    description:
      "Te ofrecemos los equipos más actualizados y funcionales para garantizar ahorros reales en tus facturas eléctricas desde Saltillo hacia todo el país.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="proyectos"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0E1D] text-white overflow-hidden scroll-mt-24"
    >
      {/* Subtle Architectural Grid Background fading out radially */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(46, 113, 242, 0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(46, 113, 242, 0.16) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "radial-gradient(circle at center, black 35%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 35%, transparent 78%)",
        }}
      />

      {/* Ambient center glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2E71F2]/15 blur-[140px] pointer-events-none" />

      <div id="galeria" className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Same Title Style as HowItWorksSection */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="block text-xs font-mono tracking-[0.2em] uppercase text-[#2E71F2] reveal-blur reveal-delay-1">
            RESPALDO Y EXPERIENCIA
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight reveal-blur reveal-delay-2">
            ¿Cómo llevamos energía solar a tu proyecto?
          </h2>
        </div>

        {/* Original 2-Column Structure: Left Vertical Timeline + Right Video & Open Metrics Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (6 cols): Continuous Vertical Line with 3 Unboxed Milestones */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative border-l border-[#2E71F2]/35 ml-2 pl-7 sm:pl-9 space-y-10">
              {timelineSteps.map((item, index) => (
                <div
                  key={index}
                  className={`relative reveal-blur reveal-delay-${index + 2}`}
                >
                  {/* Diamond Node on the Vertical Line */}
                  <span className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-2.5 h-2.5 bg-[#2E71F2] rotate-45 shadow-[0_0_10px_rgba(46,113,242,0.9)]" />

                  <span className="text-[11px] font-mono font-semibold tracking-[0.18em] uppercase text-[#2E71F2]">
                    {item.step}
                  </span>
                  <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-10 pl-2 flex flex-wrap items-center gap-6 reveal-blur reveal-delay-5">
              <a
                href="https://wa.me/5218443929525?text=Hola%20Paneles%20Solares%20Saltillo,%20tengo%20a%20la%20mano%20mi%20recibo%20de%20luz%20y%20me%20gustar%C3%ADa%20solicitar%20asesor%C3%ADa%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded bg-[#2E71F2] hover:bg-[#3B7DF5] text-white text-xs font-semibold tracking-[0.14em] uppercase px-6 py-3.5 shadow-lg transition-all duration-200"
              >
                <span>CONTÁCTANOS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:8443929525"
                className="text-xs font-mono tracking-[0.16em] uppercase text-white/80 hover:text-[#2E71F2] transition-colors"
              >
                TEL. 844-392-9525
              </a>
            </div>
          </div>

          {/* Right Column (6 cols): Installation Video + Minimal Divided Strip */}
          <div className="lg:col-span-6 reveal-blur reveal-delay-3">
            <div className="relative w-full aspect-[16/10] rounded overflow-hidden bg-[#1C203D]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover absolute inset-0"
              >
                <source src="/videos/video-1.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Open 3-Item Strip Below Video (no boxes, just thin divider lines) */}
            <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-3 divide-x divide-white/15 reveal-blur reveal-delay-4">
              <div className="pr-4">
                <p className="text-xl sm:text-2xl font-bold text-[#2E71F2] tracking-tight">
                  100%
                </p>
                <p className="mt-1 text-[11px] sm:text-xs text-white/65">
                  Equipos solares certificados
                </p>
              </div>

              <div className="px-4">
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Gratis
                </p>
                <p className="mt-1 text-[11px] sm:text-xs text-white/65">
                  Asesoría con tu recibo
                </p>
              </div>

              <div className="pl-4">
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  México
                </p>
                <p className="mt-1 text-[11px] sm:text-xs text-white/65">
                  Saltillo y cobertura nacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
