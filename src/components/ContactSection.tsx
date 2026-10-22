"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    tipoInmueble: "Residencial",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Paneles Solares Saltillo, solicito mi asesoría y cotización gratuita:
- Nombre: ${formData.nombre}
- Teléfono: ${formData.telefono}
- Correo: ${formData.correo || "No especificado"}
- Tipo de inmueble: ${formData.tipoInmueble}
- Mensaje: ${formData.mensaje || "Deseo recibir asesoría para mi proyecto."}`;

    const waUrl = `https://wa.me/5218443929525?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white text-black overflow-hidden border-t border-black/5 scroll-mt-24"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Top Centered 2-Line Heading + 2-Line Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold uppercase text-black leading-[1.12] tracking-tight">
            <span className="block reveal-blur reveal-delay-1">INICIA TU PROYECTO SOLAR</span>
            <span className="block reveal-blur reveal-delay-2">CONTÁCTANOS Y COTIZA HOY MISMO.</span>
          </h2>

          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-black/80 leading-relaxed font-normal reveal-blur reveal-delay-3">
            Te asesoramos de forma 100% gratuita con tu recibo de luz en mano.
            <span className="block">
              Expertos en instalaciones residenciales, comerciales e industriales
              en Saltillo y todo México.
            </span>
          </p>
        </div>

        {/* Middle Header Row: Left Title with Bottom Blue Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end mb-8 reveal-blur reveal-delay-3">
          <div className="lg:col-span-8">
            <h3 className="text-lg sm:text-2xl font-normal uppercase tracking-tight text-black pb-2.5">
              FORMULARIO DE CONTACTO Y{" "}
              <span className="text-[#2E71F2] font-bold">COTIZACIÓN</span>
            </h3>
            <div className="w-full h-[3px] bg-[#2E71F2]" />
          </div>
        </div>

        {/* 2-Column Layout: Left Editorial Info + Right Form in Gray Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 cols): Directly on white background */}
          <div className="lg:col-span-5 flex flex-col justify-between reveal-blur reveal-delay-4">
            <div>
              <h4 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-black leading-tight">
                ¿Qué sucede después de enviar tus datos?
              </h4>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2E71F2] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                    <strong>1. Análisis de tu recibo CFE:</strong> Evaluamos tu historial
                    de consumo para calcular la potencia fotovoltaica requerida.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2E71F2] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                    <strong>2. Propuesta técnica y ahorro:</strong> Te presentamos el
                    diseño óptimo de paneles, inversores certificados y el tiempo estimado de retorno de inversión.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2E71F2] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                    <strong>3. Instalación garantizada:</strong> Instaladores certificados
                    con equipos de alta durabilidad para cualquier clima.
                  </p>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="mt-8 pt-6 border-t border-black/15 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#EFEFEF] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#2E71F2]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black/50 block">
                      TELÉFONO / WHATSAPP
                    </span>
                    <a
                      href="tel:8443929525"
                      className="text-sm sm:text-base font-bold text-black hover:text-[#2E71F2] transition-colors"
                    >
                      844-392-9525
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#EFEFEF] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#2E71F2]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black/50 block">
                      CORREO ELECTRÓNICO
                    </span>
                    <a
                      href="mailto:contacto@panelessolaressaltillo.net"
                      className="text-sm font-semibold text-black hover:text-[#2E71F2] transition-colors"
                    >
                      contacto@panelessolaressaltillo.net
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#EFEFEF] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#2E71F2]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black/50 block">
                      COBERTURA
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-black">
                      Saltillo, Coahuila y cobertura en todo México
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Form inside Gray Container (#EFEFEF) */}
          <div className="lg:col-span-7 bg-[#EFEFEF] p-6 sm:p-8 reveal-blur reveal-delay-4">
            <h4 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-black mb-1">
              Completa el formulario
            </h4>
            <p className="text-xs sm:text-sm text-black/70 mb-6">
              Nos comunicaremos contigo a la brevedad para brindarte asesoría personalizada.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-black/70 block mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Roberto Gómez"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className="w-full rounded border border-black/15 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-[#2E71F2] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-black/70 block mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 844 123 4567"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    className="w-full rounded border border-black/15 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-[#2E71F2] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-black/70 block mb-1.5">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.correo}
                    onChange={(e) =>
                      setFormData({ ...formData, correo: e.target.value })
                    }
                    className="w-full rounded border border-black/15 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-[#2E71F2] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-black/70 block mb-1.5">
                    Tipo de Inmueble
                  </label>
                  <select
                    value={formData.tipoInmueble}
                    onChange={(e) =>
                      setFormData({ ...formData, tipoInmueble: e.target.value })
                    }
                    className="w-full rounded border border-black/15 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-black focus:outline-none focus:border-[#2E71F2] transition-colors"
                  >
                    <option value="Residencial">Residencial / Hogar</option>
                    <option value="Comercial">Comercio / Negocio</option>
                    <option value="Industrial">Industrial / Empresa</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-black/70 block mb-1.5">
                  Mensaje o dudas adicionales (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Coméntanos sobre tu consumo aproximado o requerimientos específicos..."
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="w-full rounded border border-black/15 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-[#2E71F2] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded bg-[#2E71F2] hover:bg-[#3B7DF5] text-white text-xs font-semibold tracking-[0.14em] uppercase px-6 py-3.5 shadow-md transition-all duration-200 cursor-pointer"
                >
                  <span>SOLICITAR ASESORÍA GRATUITA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {submitted && (
                <div className="mt-3 p-3 rounded bg-green-50 border border-green-200 text-green-800 text-xs text-center font-medium">
                  ¡Gracias! Se ha abierto WhatsApp con la información de tu solicitud para atenderte de inmediato.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
