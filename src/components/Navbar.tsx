"use client";

import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "INICIO", href: "#inicio" },
  { label: "NOSOTROS", href: "#nosotros" },
  { label: "MÉTODO", href: "#funcionamiento" },
  { label: "SOLUCIONES", href: "#soluciones" },
  { label: "PROYECTOS", href: "#proyectos" },
  { label: "PREGUNTAS", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      const container = document.getElementById("scroll-sequence-container");

      // Desktop: special calculation for pinned 3-step scroll sequence
      if (id === "soluciones" && container && window.innerWidth >= 1024) {
        e.preventDefault();
        const containerY = container.getBoundingClientRect().top + window.scrollY;
        const totalScrollable = container.offsetHeight - window.innerHeight;
        window.scrollTo({
          top: containerY + totalScrollable,
          behavior: "smooth",
        });
        window.history.pushState(null, "", "#soluciones");
        setMobileOpen(false);
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
        setMobileOpen(false);
        return;
      }

      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
        setMobileOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5">
      <div className="max-w-7xl mx-auto">
        {/* Floating Dark Rectangular Bar */}
        <nav
          aria-label="Navegación principal"
          className="w-full rounded-lg bg-[#1C203D]/85 backdrop-blur-md border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)] px-4 sm:px-6 py-2.5 flex items-center justify-between"
        >
          {/* Left: Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo(e, "#inicio")}
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          >
            <img
              src="/imagenes/favicon.png"
              alt="PS"
              className="h-6 sm:h-7 w-auto object-contain brightness-0 invert"
            />
            <img
              src="/imagenes/new-header-logo.png"
              alt="Paneles Solares Saltillo"
              className="h-5 sm:h-6 w-auto object-contain brightness-0 invert"
            />
          </a>

          {/* Center: Navigation Links */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-[11px] font-medium tracking-[0.14em] uppercase text-white/90 hover:text-[#2E71F2] transition-colors py-1 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Direct Phone & Cotizar Action Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:8443929525"
              className="hidden xl:inline-flex items-center gap-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-[11px] font-medium tracking-[0.12em] uppercase px-3 py-2 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#2E71F2]" />
              <span>844-392-9525</span>
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleScrollTo(e, "#contacto")}
              className="rounded bg-[#2E71F2] hover:bg-[#2E71F2]/90 text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-4 py-2 shadow-sm transition-colors cursor-pointer"
            >
              COTIZAR
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú de navegación"
            className="lg:hidden p-1.5 rounded text-white/90 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 rounded-lg bg-[#1C203D]/95 backdrop-blur-xl border border-white/15 shadow-2xl p-5 text-white">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="block py-2 px-3 rounded text-xs font-medium tracking-[0.14em] uppercase text-white/90 hover:text-white hover:bg-white/10 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
              <a
                href="tel:8443929525"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center rounded bg-white/15 text-white py-2.5 px-4 text-xs font-medium tracking-[0.12em] uppercase flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#2E71F2]" />
                <span>844-392-9525</span>
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleScrollTo(e, "#contacto")}
                className="flex-1 text-center rounded bg-[#2E71F2] text-white py-2.5 px-4 text-xs font-semibold tracking-[0.12em] uppercase cursor-pointer"
              >
                COTIZAR AHORA
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
