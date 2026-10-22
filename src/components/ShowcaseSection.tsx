"use client";

import React from "react";

export default function ShowcaseSection() {
  return (
    <section
      id="nosotros"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white text-black overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Left Title matching AboutSection style & size */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold uppercase text-black leading-[1.12] tracking-tight">
            <span className="block reveal-blur reveal-delay-1">PANELES SOLARES SALTILLO.</span>
            <span className="block reveal-blur reveal-delay-2">TRANSFORMANDO EL MAÑANA.</span>
          </h2>
        </div>

        {/* Main 2-Column Editorial Layout matching the reference structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left Column: 2 Paragraphs + 2 Top-Bordered Details + Underlined CTA Link */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="space-y-5 text-sm sm:text-[15px] text-black/80 leading-relaxed reveal-blur reveal-delay-3">
              <p>
                Transforma tu hogar o negocio con energía solar de primera
                calidad. Nuestra asesoría gratuita te guiará hacia la solución
                ideal para aprovechar al máximo el poder del sol, con
                instaladores expertos que cumplen tus expectativas.
              </p>
              <p>
                Nuestra excelencia se refleja en productos solares certificados
                y un servicio de instalación hecho a medida, aportando ahorros
                en tus facturas de electricidad y avances tecnológicos
                significativos a nuestros usuarios. Con nuestra vasta
                experiencia en tecnología solar, estamos comprometidos a ofrecer
                el mejor servicio de la localidad.
              </p>
            </div>

            {/* 2 Side-by-Side Info Items with Top Horizontal Line */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12 reveal-blur reveal-delay-4">
              <div className="border-t border-black/30 pt-3">
                <p className="text-xs sm:text-[13px] text-black/80 leading-snug">
                  Asesoría gratuita con tu recibo de luz
                </p>
              </div>
              <div className="border-t border-black/30 pt-3">
                <p className="text-xs sm:text-[13px] text-black/80 leading-snug">
                  En Saltillo, Coahuila y cobertura en todo México
                </p>
              </div>
            </div>

            {/* Bottom CTA Button matching site-wide button style */}
            <div className="mt-10 sm:mt-12 reveal-blur reveal-delay-5">
              <a
                href="https://wa.me/5218443929525?text=Hola%20Paneles%20Solares%20Saltillo,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-[#2E71F2] hover:bg-[#3B7DF5] text-white text-xs font-semibold tracking-[0.14em] uppercase px-6 py-3.5 shadow-lg transition-all duration-200"
              >
                CONTÁCTANOS
              </a>
            </div>
          </div>

          {/* Right Column: Same Video (/videos/paneles.mp4) with button border-radius (rounded) */}
          <div className="lg:col-span-6 lg:col-start-7 w-full reveal-blur reveal-delay-3">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded bg-[#1C203D] overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover absolute inset-0"
              >
                <source src="/videos/paneles.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
