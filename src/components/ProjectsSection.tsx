"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

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

const featuredProjects = [
  {
    id: 1,
    title: "Instalación 8 paneles Tier One Risen, Residencial Saqara",
    location: "Saltillo, Coah.",
    date: "30/05/2018",
    image: "/proyectos/img-01.jpg",
  },
  {
    id: 2,
    title: "Instalación en Residencial Saqara",
    location: "Saltillo, Coah.",
    date: "12/07/2018",
    image: "/proyectos/img-02.jpg",
  },
  {
    id: 3,
    title: "Proyecto empresarial",
    location: "Saltillo, Coah.",
    date: "11/07/2018",
    image: "/proyectos/img-03.jpg",
  },
];

const galleryImages = [
  { id: 1, src: "/galeria/6.jpg", label: "Paneles Solares Saltillo - Galería 1" },
  { id: 2, src: "/galeria/5.jpg", label: "Paneles Solares Saltillo - Galería 2" },
  { id: 3, src: "/galeria/12.jpg", label: "Paneles Solares Saltillo - Galería 3" },
  { id: 4, src: "/galeria/10.jpg", label: "Paneles Solares Saltillo - Galería 4" },
  { id: 5, src: "/galeria/2.jpg", label: "Paneles Solares Saltillo - Galería 5" },
  { id: 6, src: "/galeria/1.jpg", label: "Paneles Solares Saltillo - Galería 6" },
  { id: 7, src: "/galeria/7.jpg", label: "Paneles Solares Saltillo - Galería 7" },
  { id: 8, src: "/galeria/3.jpg", label: "Paneles Solares Saltillo - Galería 8" },
  { id: 9, src: "/galeria/11.jpg", label: "Paneles Solares Saltillo - Galería 9" },
  { id: 10, src: "/galeria/9.jpg", label: "Paneles Solares Saltillo - Galería 10" },
  { id: 11, src: "/galeria/4.jpg", label: "Paneles Solares Saltillo - Galería 11" },
  { id: 12, src: "/galeria/8.jpg", label: "Paneles Solares Saltillo - Galería 12" },
];

export default function ProjectsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);

  const visibleGallery = showAllGallery
    ? galleryImages
    : galleryImages.slice(0, 8);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };

  return (
    <section id="proyectos" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Proyectos Destacados */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1C203D] tracking-tight">
              Proyectos <span className="text-[#2E71F2]">Destacados</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#1C203D]/75 leading-relaxed">
              La decisión de instalar paneles solares en tu hogar no solo abraza
              la sostenibilidad, sino que también potencia tu independencia
              energética y ahorro a largo plazo.
            </p>
          </div>
        </div>

        {/* 3 Featured Projects Grid with exact data from panelessolaressaltillo.net */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-[#F6F6F2] border border-[#1C203D]/10 hover:border-[#2E71F2] transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1C203D]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1C203D] group-hover:text-[#2E71F2] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C203D]/10 flex items-center justify-between text-xs font-semibold text-[#1C203D]/70">
                  <span className="inline-flex items-center gap-1.5 text-[#2E71F2]">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Full Gallery Subsection (#galeria) */}
        <div id="galeria" className="mt-24 pt-16 border-t border-[#1C203D]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#1C203D]">
                Galería
              </h3>
            </div>

            <a
              href="https://www.instagram.com/panelessolaressaltillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1C203D]/20 hover:border-[#2E71F2] text-[#1C203D] hover:text-[#2E71F2] px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-[#2E71F2]" />
              <span>Seguir en Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleGallery.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#1C203D] focus:outline-none cursor-pointer shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1C203D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#2E71F2] text-white flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAllGallery(!showAllGallery)}
              className="inline-flex items-center gap-2 rounded-lg bg-[#F6F6F2] hover:bg-[#2E71F2] text-[#1C203D] hover:text-white px-7 py-3 text-xs font-bold tracking-[0.16em] uppercase border border-[#1C203D]/15 transition-colors cursor-pointer"
            >
              {showAllGallery ? "MOSTRAR MENOS" : "CARGAR MÁS"}
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#1C203D]/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#2E71F2] text-white transition-colors"
            aria-label="Cerrar galería"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-[#2E71F2] text-white transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].label}
              className="max-h-[78vh] w-auto rounded-xl object-contain shadow-2xl border border-white/15"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-[#2E71F2] text-white transition-colors"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
