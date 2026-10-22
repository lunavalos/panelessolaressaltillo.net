"use client";

import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="min-h-screen lg:h-screen flex flex-col justify-center pt-20 sm:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-white text-black overflow-hidden">
      <div className="max-w-6xl w-full mx-auto">
        {/* Top Centered 2-Line Heading + 2-Line Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold uppercase text-black leading-[1.12] tracking-tight">
            <span className="block reveal-blur reveal-delay-1">TRANSFORMANDO EL MAÑANA</span>
            <span className="block reveal-blur reveal-delay-2">CON ENERGÍA SOLAR EN SALTILLO.</span>
          </h2>
          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-black/80 leading-relaxed font-normal reveal-blur reveal-delay-3">
            Aprovecha al máximo el poder del sol con una solución hecha a tu
            medida.
            <span className="block">
              Paneles Solares Saltillo te guía paso a paso con instaladores
              expertos.
            </span>
          </p>
        </div>

        {/* Middle Header Row: Left Title with Bottom Accent Line + Right Metric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end mb-4 reveal-blur reveal-delay-3">
          <div className="lg:col-span-8">
            <h3 className="text-lg sm:text-2xl font-normal uppercase tracking-tight text-black pb-2.5">
              NUESTRA SOLUCIÓN SOLAR INTEGRAL
            </h3>
            <div className="w-full h-[3px] bg-[#2E71F2]" />
          </div>

          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3">
            <span className="text-xs sm:text-sm font-medium text-[#2E71F2] leading-tight text-right">
              Equipos
              <br />
              certificados
            </span>
            <span className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#2E71F2] leading-none tracking-tight">
              100%
            </span>
          </div>
        </div>

        {/* Main Gray Container */}
        <div className="bg-[#EFEFEF] p-5 sm:p-8 reveal-blur reveal-delay-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Column (8 cols): Header + Paragraphs of text (without table) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-black">
                    PROCESO Y BENEFICIOS
                  </span>
                  <ArrowDown className="w-4 h-4 text-black stroke-[2.2]" />
                </div>

                <div className="space-y-4 text-sm sm:text-[15px] text-black/80 leading-relaxed">
                  <p>
                    Transforma tu hogar o negocio con energía solar de primera
                    calidad. Nuestra asesoría gratuita te guiará hacia la
                    solución ideal para aprovechar al máximo el poder del sol,
                    evaluando tu recibo de luz para recomendarte únicamente lo
                    que necesitas de acuerdo a tu consumo real.
                  </p>
                  <p>
                    Nuestra excelencia se refleja en productos solares
                    certificados y un servicio de instalación hecho a medida por
                    instaladores expertos que cumplen tus expectativas,
                    aportando ahorros reales en tus facturas de electricidad y
                    avances tecnológicos significativos.
                  </p>
                  <p>
                    Con nuestra vasta experiencia en tecnología solar y equipos
                    actualizados resistentes a cualquier clima, estamos
                    comprometidos a ofrecer el mejor servicio desde Saltillo,
                    Coahuila y con cobertura en todo México, garantizando
                    satisfacción y eficiencia a nuestros clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): 2 Stacked Summary Boxes */}
            <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
              {/* Top Right Box */}
              <div className="bg-[#E5E5E5] p-5 sm:p-6 flex flex-col justify-center gap-4 flex-1">
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 bg-[#D2D2D2] flex items-center justify-center shrink-0">
                    <ArrowDown className="w-4 h-4 text-[#2E71F2] stroke-[2.2]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-black/60">
                      FACTURA DE ELECTRICIDAD
                    </p>
                    <p className="text-sm sm:text-base font-extrabold text-black">
                      Reduce tu Gasto
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 bg-[#D2D2D2] flex items-center justify-center shrink-0">
                    <ArrowUp className="w-4 h-4 text-[#2E71F2] stroke-[2.2]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-black/60">
                      COBERTURA DE SERVICIO
                    </p>
                    <p className="text-sm sm:text-base font-extrabold text-black">
                      Saltillo y Todo México
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Right Box with GRATIS left-aligned */}
              <div className="bg-[#E5E5E5] p-5 sm:p-6 flex flex-col justify-between flex-1 min-h-[130px]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-black/60">
                  ASESORÍA CON TU RECIBO
                </span>
                <div className="text-left mt-4">
                  <span className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2E71F2] tracking-tight leading-none">
                    GRATIS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
