"use client";

import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

const questions = [
  {
    q: "¿Cómo sé cuántos paneles solares necesito?",
    a: "Con tu recibo de luz a la mano, realizamos una asesoría totalmente gratuita para analizar tu consumo y recomendarte exactamente lo que necesitas.",
  },
  {
    q: "¿Cuál es la durabilidad de los paneles solares?",
    a: "Te ofrecemos los equipos más actualizados y funcionales del mercado, certificados para que su resistencia sea óptima ante cualquier condición climática.",
  },
  {
    q: "¿Dónde ofrecen servicio de instalación?",
    a: "Atendemos proyectos residenciales, comerciales e industriales de forma directa en Saltillo, Coahuila y contamos con cobertura en todo México.",
  },
  {
    q: "¿El trámite de interconexión con CFE viene incluido?",
    a: "Sí, nos encargamos de todo el proceso técnico y la gestión del medidor bidireccional ante CFE para que comiences a generar ahorro sin complicaciones.",
  },
];

export default function WhiteEditorialSection() {
  return (
    <section
      id="faq"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white text-black overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Top Centered 2-Line Heading + 2-Line Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold uppercase text-black leading-[1.12] tracking-tight">
            <span className="block reveal-blur reveal-delay-1">ENERGÍA LIMPIA Y AHORRO</span>
            <span className="block reveal-blur reveal-delay-2">CON ATENCIÓN PERSONALIZADA.</span>
          </h2>

          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-black/80 leading-relaxed font-normal reveal-blur reveal-delay-3">
            Resolvemos tus dudas y te acompañamos en cada etapa de tu proyecto
            solar.
            <span className="block">
              Ten a la mano tu recibo de luz y solicita tu asesoría sin costo.
            </span>
          </p>
        </div>

        {/* Middle Header Row */}
        <div className="mb-8 reveal-blur reveal-delay-3">
          <h3 className="text-lg sm:text-2xl font-normal uppercase tracking-tight text-black">
            PREGUNTAS FRECUENTES Y{" "}
            <span className="text-[#2E71F2] font-bold">CONTACTO DIRECTO</span>
          </h3>
        </div>

        {/* 2-Column Layout: Left Text Directly on White Background + Right Block in Gray Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols): Directly on white background (no gray container) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6 reveal-blur reveal-delay-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-black">
                INFORMACIÓN CLAVE
              </span>
              <ArrowDown className="w-4 h-4 text-black stroke-[2.2]" />
            </div>

            <div className="divide-y divide-black/15 border-t border-b border-black/15">
              {questions.map((item, idx) => (
                <div key={idx} className={`py-5 reveal-blur reveal-delay-${idx + 3}`}>
                  <h4 className="text-sm sm:text-base font-extrabold text-black">
                    {item.q}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-black/75 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Inside the Gray Container (#EFEFEF) */}
          <div className="lg:col-span-5 bg-[#EFEFEF] p-6 sm:p-8 flex flex-col justify-between reveal-blur reveal-delay-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E71F2]">
                PANELES SOLARES SALTILLO
              </span>
              <h4 className="mt-2 text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-black leading-tight">
                ¡Te asesoramos gratis con tu recibo de luz!
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-black/75 leading-relaxed">
                Estamos comprometidos a ofrecer el mejor servicio desde
                Saltillo, Coahuila y en todo México, garantizando satisfacción y
                eficiencia a nuestros clientes.
              </p>

              <div className="mt-6 pt-6 border-t border-black/15 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#2E71F2]/15 text-[#2E71F2] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <span className="font-bold text-black block text-xs sm:text-[13px]">
                      Ten a la mano tu recibo CFE
                    </span>
                    <span className="text-black/70 text-[11px] sm:text-xs leading-snug">
                      Revisamos tu consumo histórico para cotizar de forma precisa.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#2E71F2]/15 text-[#2E71F2] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <span className="font-bold text-black block text-xs sm:text-[13px]">
                      Propuesta a tu medida
                    </span>
                    <span className="text-black/70 text-[11px] sm:text-xs leading-snug">
                      Calculamos el número exacto de paneles y tu ahorro estimado.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#2E71F2]/15 text-[#2E71F2] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <span className="font-bold text-black block text-xs sm:text-[13px]">
                      Instalación y monitoreo
                    </span>
                    <span className="text-black/70 text-[11px] sm:text-xs leading-snug">
                      Personal experto con equipos certificados para cualquier clima.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5218443929525?text=Hola%20Paneles%20Solares%20Saltillo,%20tengo%20a%20la%20mano%20mi%20recibo%20de%20luz%20y%20me%20gustar%C3%ADa%20iniciar%20mi%20asesor%C3%ADa."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center inline-flex items-center gap-2.5 rounded bg-[#2E71F2] hover:bg-[#3B7DF5] text-white text-xs font-semibold tracking-[0.14em] uppercase px-6 py-3.5 shadow-md transition-all duration-200"
              >
                <span>COMENZAR ASESORÍA SIN COSTO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
