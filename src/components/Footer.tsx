"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export default function Footer() {
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      const container = document.getElementById("scroll-sequence-container");

      if (id === "soluciones" && container && window.innerWidth >= 1024) {
        e.preventDefault();
        const containerY = container.getBoundingClientRect().top + window.scrollY;
        const totalScrollable = container.offsetHeight - window.innerHeight;
        window.scrollTo({
          top: containerY + totalScrollable,
          behavior: "smooth",
        });
        window.history.pushState(null, "", "#soluciones");
        return;
      }

      if (id === "funcionamiento" && container && window.innerWidth >= 1024) {
        e.preventDefault();
        const containerY = container.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: containerY,
          behavior: "smooth",
        });
        window.history.pushState(null, "", "#funcionamiento");
        return;
      }

      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer className="bg-[#1C203D] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Column: Brand Logo */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo(e, "#inicio")}
            className="inline-block group"
          >
            <img
              src="/imagenes/tagline-logo.png"
              alt="Paneles Solares Saltillo - Transformando el mañana"
              className="w-48 sm:w-56 h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>
          <p className="mt-4 text-xs text-white/70 max-w-xs leading-relaxed">
            Especialistas en energía fotovoltaica en Saltillo, Coahuila y con cobertura en todo México. Proyectos residenciales, comerciales e industriales.
          </p>
        </div>

        {/* Right 8-Column Block: 3 Navigation Columns + Divider + Contact CTA + Divider + Copyright */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Top 3 Columns (Proyectos removed per user request) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {/* Column 1: Soluciones & Método */}
            <div>
              <h3 className="text-xs font-semibold text-white/90 mb-4 uppercase tracking-wider">
                Soluciones
              </h3>
              <ul className="space-y-3 text-xs font-mono text-white/85">
                <li>
                  <a
                    href="#funcionamiento"
                    onClick={(e) => handleScrollTo(e, "#funcionamiento")}
                    className="underline underline-offset-4 decoration-white/40 hover:decoration-[#2E71F2] hover:text-[#2E71F2] transition-colors cursor-pointer"
                  >
                    ¿Cómo Funciona?
                  </a>
                </li>
                <li>
                  <a
                    href="#soluciones"
                    onClick={(e) => handleScrollTo(e, "#soluciones")}
                    className="underline underline-offset-4 decoration-white/40 hover:decoration-[#2E71F2] hover:text-[#2E71F2] transition-colors cursor-pointer"
                  >
                    Residencial / Hogar
                  </a>
                </li>
                <li>
                  <a
                    href="#soluciones"
                    onClick={(e) => handleScrollTo(e, "#soluciones")}
                    className="underline underline-offset-4 decoration-white/40 hover:decoration-[#2E71F2] hover:text-[#2E71F2] transition-colors cursor-pointer"
                  >
                    Comercio / Negocio
                  </a>
                </li>
                <li>
                  <a
                    href="#soluciones"
                    onClick={(e) => handleScrollTo(e, "#soluciones")}
                    className="underline underline-offset-4 decoration-white/40 hover:decoration-[#2E71F2] hover:text-[#2E71F2] transition-colors cursor-pointer"
                  >
                    Industrial / Empresa
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Empresa */}
            <div>
              <h3 className="text-xs font-semibold text-white/90 mb-4 uppercase tracking-wider">
                Empresa
              </h3>
              <ul className="space-y-3 text-xs font-mono text-white/85">
                <li>
                  <a
                    href="#nosotros"
                    onClick={(e) => handleScrollTo(e, "#nosotros")}
                    className="underline underline-offset-4 decoration-white/40 hover:decoration-[#2E71F2] hover:text-[#2E71F2] transition-colors cursor-pointer"
                  >
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleScrollTo(e, "#faq")}
                    className="underline underline-offset-4 decoration-white/40 hover:decoration-[#2E71F2] hover:text-[#2E71F2] transition-colors cursor-pointer"
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleScrollTo(e, "#faq")}
                    className="underline underline-offset-4 decoration-white/40 hover:decoration-[#2E71F2] hover:text-[#2E71F2] transition-colors cursor-pointer"
                  >
                    Trámite con CFE
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    onClick={(e) => handleScrollTo(e, "#contacto")}
                    className="underline underline-offset-4 decoration-white/40 hover:decoration-[#2E71F2] hover:text-[#2E71F2] transition-colors cursor-pointer"
                  >
                    Cotización Gratuita
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contacto & Redes */}
            <div>
              <h3 className="text-xs font-semibold text-white/90 mb-4 uppercase tracking-wider">
                Contacto
              </h3>
              <ul className="space-y-3 text-xs font-mono text-white/85">
                <li>
                  <a
                    href="tel:8443929525"
                    className="underline underline-offset-4 decoration-white/40 hover:decoration-[#2E71F2] hover:text-[#2E71F2] transition-colors block"
                  >
                    844-392-9525
                  </a>
                </li>
                <li>
                  <span className="text-[11px] text-white/60 block font-sans">
                    Saltillo, Coahuila
                  </span>
                </li>
              </ul>

              <h4 className="text-xs font-semibold text-white/90 mt-5 mb-2.5 uppercase tracking-wider">
                Síguenos
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/panelessolaressaltillo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Paneles Solares Saltillo"
                  className="text-white hover:text-[#2E71F2] transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/panelessolaressaltillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Paneles Solares Saltillo"
                  className="text-white hover:text-[#2E71F2] transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* First Horizontal Line */}
          <div className="w-full h-[1px] bg-white/15 my-8 sm:my-10" />

          {/* Middle Section: CTA Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-lg">
              <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                ¿Listo para reducir tu recibo de CFE?
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-white/75 leading-relaxed">
                Ten a la mano tu recibo de luz y solicita tu asesoría y cotización sin ningún costo en Saltillo o cualquier parte de México.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#contacto"
                onClick={(e) => handleScrollTo(e, "#contacto")}
                className="group inline-flex items-center gap-2.5 bg-[#2E71F2] hover:bg-[#2E71F2]/90 text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>Cotizar en Línea</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/5218443929525?text=Hola%20Paneles%20Solares%20Saltillo,%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Second Horizontal Line */}
          <div className="w-full h-[1px] bg-white/15 my-8" />

          {/* Bottom Copyright Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/75">
            <p>© 2026 Paneles Solares Saltillo · Todos los derechos reservados</p>
            <a
              href="https://lunavalos.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-white/40 hover:decoration-[#2E71F2] hover:text-[#2E71F2] transition-colors font-medium"
            >
              Creado por Lunavalos Digital House
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
