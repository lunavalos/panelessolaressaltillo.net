"use client";

import React from "react";

const leftFeatures = [
  {
    number: "01",
    title: "El Panel Solar",
    description:
      "Transforma la luz solar en corriente continua mediante sus celdas fotovoltaicas.",
  },
  {
    number: "03",
    title: "La Corriente",
    description:
      "La corriente alterna se utiliza directamente en el hogar o negocio de forma limpia y eficiente.",
  },
  {
    number: "05",
    title: "Durabilidad Solar",
    description:
      "Equipos actualizados y funcionales con resistencia comprobada para cualquier clima.",
  },
];

const rightFeatures = [
  {
    number: "02",
    title: "El Inversor",
    description:
      "Convierte la corriente continua en electricidad de uso diario para tus instalaciones.",
  },
  {
    number: "04",
    title: "El Medidor",
    description:
      "Registra el excedente de electricidad devuelto a la red para reflejar tu ahorro.",
  },
  {
    number: "06",
    title: "Asesoría a Medida",
    description:
      "Te recomendamos lo que necesitas de acuerdo a tus necesidades reales con tu recibo de luz.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="funcionamiento"
      className="relative w-full min-h-screen lg:h-screen flex flex-col justify-center pt-20 sm:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-[#0B0E1D] text-white overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)] scroll-mt-24"
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

      {/* Ambient center glow behind the solar panel */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2E71F2]/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="block text-xs font-mono tracking-[0.2em] uppercase text-[#2E71F2] reveal-blur reveal-delay-1">
            FUNCIONAMIENTO Y TECNOLOGÍA
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight reveal-blur reveal-delay-2">
            ¿Cómo funcionan los paneles solares?
          </h2>
        </div>

        {/* 3-Column Layout: Left (3 cols) + Center Image (6 cols) + Right (3 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: 01, 03, 05 */}
          <div className="lg:col-span-3 space-y-8 sm:space-y-10">
            {leftFeatures.map((item, idx) => (
              <div
                key={item.number}
                className={`flex items-start gap-4 reveal-blur reveal-delay-${idx + 2}`}
              >
                <div
                  className="shrink-0 w-10 h-10 bg-white/[0.04] border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-[#2E71F2]"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
                  }}
                >
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-white/55 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Cutout Solar Panel Image (panel sin fondo.png) */}
          <div className="lg:col-span-6 flex items-center justify-center py-2 lg:py-0">
            <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[560px] flex items-center justify-center reveal-blur reveal-delay-3">
              <img
                src="/imagenes/panel sin fondo.png"
                alt="Panel Solar Fotovoltaico - Paneles Solares Saltillo"
                className="w-full max-h-[46vh] h-auto object-contain scale-105 lg:scale-110 drop-shadow-[0_25px_55px_rgba(46,113,242,0.32)] transition-transform duration-500 hover:scale-115"
              />
            </div>
          </div>

          {/* Right Column: 02, 04, 06 */}
          <div className="lg:col-span-3 space-y-8 sm:space-y-10">
            {rightFeatures.map((item, idx) => (
              <div
                key={item.number}
                className={`flex items-start gap-4 reveal-blur reveal-delay-${idx + 2}`}
              >
                <div
                  className="shrink-0 w-10 h-10 bg-white/[0.04] border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-[#2E71F2]"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
                  }}
                >
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-white/55 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
