"use client";

import React from "react";

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

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16.02C14.36 16.93 14.79 16.75 15.23 16.7C15.68 16.66 16.69 16.1 16.89 15.53C17.1 14.95 17.1 14.47 17.04 14.36C16.97 14.26 16.81 14.2 16.56 14.08C16.31 13.95 15.09 13.35 14.87 13.27C14.64 13.18 14.48 13.14 14.31 13.39C14.15 13.64 13.67 14.2 13.53 14.36C13.38 14.53 13.24 14.55 12.99 14.43C12.74 14.3 11.94 14.04 10.99 13.2C10.25 12.54 9.75 11.72 9.61 11.47C9.46 11.22 9.59 11.09 9.72 10.96C9.83 10.85 9.97 10.67 10.1 10.52C10.22 10.38 10.27 10.27 10.35 10.1C10.43 9.94 10.39 9.79 10.33 9.67C10.27 9.54 9.77 8.32 9.56 7.82C9.36 7.34 9.16 7.4 9.01 7.39C8.86 7.38 8.7 7.33 8.53 7.33Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-screen min-h-[680px] bg-[#1C203D] text-white overflow-hidden p-2.5 sm:p-4 select-none flex flex-col"
    >
      {/* Full-bleed Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/videos/hero-video-2.mp4" type="video/mp4" />
      </video>

      {/* Solid uniform overlay */}
      <div className="absolute inset-0 bg-[#0E1122]/80 pointer-events-none" />

      {/* Inner Architectural Border Frame with Chamfered Top Corners */}
      <div className="relative z-10 flex-1 w-full flex flex-col justify-between">
        {/* Perimeter Border Lines with Top-Left and Top-Right Diagonal Cuts */}
        <div className="pointer-events-none absolute inset-0">
          {/* Top horizontal line */}
          <div className="absolute top-0 left-[22px] right-[22px] h-px bg-white/15" />
          {/* Bottom horizontal line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />
          {/* Left vertical line */}
          <div className="absolute top-[22px] bottom-0 left-0 w-px bg-white/15" />
          {/* Right vertical line */}
          <div className="absolute top-[22px] bottom-0 right-0 w-px bg-white/15" />
          {/* Top-left 45° chamfer line */}
          <svg
            className="absolute top-0 left-0 w-[23px] h-[23px]"
            viewBox="0 0 23 23"
            fill="none"
          >
            <line
              x1="0.5"
              y1="22.5"
              x2="22.5"
              y2="0.5"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1"
            />
          </svg>
          {/* Top-right 45° chamfer line */}
          <svg
            className="absolute top-0 right-0 w-[23px] h-[23px]"
            viewBox="0 0 23 23"
            fill="none"
          >
            <line
              x1="0.5"
              y1="0.5"
              x2="22.5"
              y2="22.5"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Top Spacer */}
        <div className="h-20" />

        {/* Bottom-Center Content: Logo, 2-Line Title, Description, and Regular Rectangular Button */}
        <div className="max-w-3xl w-full mx-auto px-4 pb-8 sm:pb-10 flex flex-col items-center text-center mt-auto">
          {/* Brand Tagline Logo in hero center */}
          <div className="mb-5 sm:mb-7 reveal-blur reveal-delay-1">
            <img
              src="/imagenes/tagline-logo.png"
              alt="Paneles Solares Saltillo - Transformando el mañana"
              className="w-44 sm:w-52 md:w-60 h-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)]"
            />
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-[0.08em] uppercase text-white leading-[1.15]">
            <span className="block reveal-blur reveal-delay-2">TRANSFORMA TU HOGAR</span>
            <span className="block reveal-blur reveal-delay-3">CON PANELES SOLARES</span>
          </h1>

          <p className="mt-4 text-white/80 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-xl font-normal reveal-blur reveal-delay-4">
            Solicita una cotización para una instalación profesional con los
            mejores expertos en Saltillo, ahorra en tus facturas y contribuye al
            medio ambiente.
          </p>

          {/* Rectangular Button */}
          <div className="mt-7 reveal-blur reveal-delay-5">
            <a
              href="https://wa.me/5218443929525?text=Hola%20Paneles%20Solares%20Saltillo,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded bg-[#1C203D]/85 hover:bg-[#2E71F2] backdrop-blur-md border border-white/20 hover:border-[#2E71F2] text-white text-[11px] font-bold tracking-[0.18em] uppercase px-7 py-3.5 transition-all duration-300 shadow-lg"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-3.5 h-3.5 text-[#2E71F2] group-hover:text-white transition-colors"
              >
                <circle cx="8" cy="3" r="1.5" />
                <circle cx="13" cy="8" r="1.5" />
                <circle cx="8" cy="13" r="1.5" />
                <circle cx="3" cy="8" r="1.5" />
              </svg>
              <span>CONTÁCTANOS</span>
            </a>
          </div>
        </div>

        {/* Bottom Framed Bar with Horizontal Line, Brand Tagline on Left, and Larger Social Icons on Right */}
        <div className="w-full border-t border-white/15 flex items-center justify-between reveal-blur reveal-delay-5">
          <div className="px-5 sm:px-8 py-4">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-white/90">
              TRANSFORMANDO EL MAÑANA · SALTILLO, COAH.
            </span>
          </div>

          <div className="border-l border-white/15 px-6 sm:px-8 py-4 flex items-center gap-6">
            <a
              href="https://www.instagram.com/panelessolaressaltillo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Paneles Solares Saltillo"
              className="text-white/75 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.facebook.com/panelessolaressaltillo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Paneles Solares Saltillo"
              className="text-white/75 hover:text-white transition-colors"
            >
              <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://wa.me/5218443929525"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Paneles Solares Saltillo"
              className="text-white/75 hover:text-white transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
