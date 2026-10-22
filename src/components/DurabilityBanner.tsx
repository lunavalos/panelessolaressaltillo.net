"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";

export default function DurabilityBanner() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      id="durabilidad"
      className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1C203D] text-white overflow-hidden"
    >
      {/* Background Video from user's folder: video 1.mp4 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      >
        <source src="/videos/video-1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#1C203D]/80" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Exact headings from panelessolaressaltillo.net */}
        <div className="lg:col-span-7 space-y-5">
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-[#2E71F2]">
            AHORRA EN TUS FACTURAS Y CONTRIBUYE AL MEDIO AMBIENTE
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
            Durabilidad solar{" "}
            <span className="text-[#2E71F2]">para cualquier clima</span>
          </h2>

          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
            ¡Sorpréndete con la resistencia de nuestros paneles solares en este
            video!
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="group inline-flex items-center gap-3 rounded bg-[#2E71F2] hover:bg-white text-white hover:text-[#1C203D] px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase shadow-lg transition-all duration-200 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>VER VIDEO</span>
            </button>
          </div>
        </div>

        {/* Right: Video Preview Card (paneles.mp4) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-[#1C203D] aspect-video group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/paneles.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[#1C203D]/35 group-hover:bg-[#1C203D]/20 transition-colors flex items-center justify-center">
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                aria-label="Ver video de resistencia"
                className="w-14 h-14 rounded-full bg-[#2E71F2] hover:bg-white text-white hover:text-[#1C203D] flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for the YouTube Durability Video from the original website */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-xl overflow-hidden bg-[#1C203D] border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white">
                Durabilidad solar para cualquier clima
              </h3>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="p-2 rounded bg-white/10 hover:bg-[#2E71F2] text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/BYWtDml53hk?autoplay=1"
                title="Durabilidad de Paneles Solares Saltillo"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
