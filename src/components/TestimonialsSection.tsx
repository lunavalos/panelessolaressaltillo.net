"use client";

import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    author: "Zenneth B",
    quote:
      "Empresa comprometida y eficiente con resultados fabulosos. Excelente servicio y sobre todo equipos actualizados y funcionales.",
  },
  {
    id: 2,
    author: "Karla K",
    quote:
      "Lo mejor nos recomiendan lo que necesitamos de acuerdo a nuestras necesidades y no lo hacen solo por vender más paneles o inversores de más capacidad.",
  },
  {
    id: 3,
    author: "AGMEL SA de CV",
    quote:
      "Excelente calidad, buen servicio y amabilidad. Lo recomendamos mucho.",
  },
  {
    id: 4,
    author: "Nelly S",
    quote:
      "Lo recomiendo porque el consumo de luz bajo considerablemente ahora solo pagamos 46 pesos. Muy buena inversión.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F6F6F2] border-t border-[#1C203D]/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1C203D] tracking-tight">
            Opiniones de nuestros{" "}
            <span className="text-[#2E71F2]">distinguidos clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-8 sm:p-10 border border-[#1C203D]/10 hover:border-[#2E71F2] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-7 h-7 text-[#2E71F2]/30 mb-3" />
                <p className="text-base sm:text-lg text-[#1C203D] font-normal leading-relaxed">
                  “{item.quote}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1C203D]/10">
                <h4 className="text-sm sm:text-base font-bold text-[#2E71F2]">
                  {item.author}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
