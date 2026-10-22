"use client";

import React, { useEffect, useState } from "react";

export default function PageIntroLoader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<
    "counting" | "flattening" | "splitting" | "done"
  >("counting");

  useEffect(() => {
    const duration = 1500; // ms for 0 -> 100%
    const startTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const rawPct = Math.min(100, (elapsed / duration) * 100);
      const pct = Math.floor(rawPct);
      setProgress(pct);

      if (rawPct < 100) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        setPhase("flattening");

        // Split the top and bottom curtains apart
        window.setTimeout(() => {
          setPhase("splitting");

          // Dispatch event right as curtains split and reveal the hero content
          window.setTimeout(() => {
            window.dispatchEvent(new CustomEvent("pageIntroComplete"));
          }, 500);
        }, 240);

        // Unmount after curtains finish sliding off-screen
        window.setTimeout(() => {
          setPhase("done");
        }, 1200);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  if (phase === "done") return null;

  const isSplitting = phase === "splitting";
  const isComplete = progress >= 100;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-hidden select-none"
    >
      {/* TOP CURTAIN (50% height, slides UP on split) */}
      <div
        className={`absolute top-0 left-0 w-full h-[50.2%] bg-[#0B0E1D] border-b border-[#2E71F2]/40 transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${
          isSplitting ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(46, 113, 242, 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(46, 113, 242, 0.14) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
      </div>

      {/* BOTTOM CURTAIN (50% height, slides DOWN on split) */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[50.2%] bg-[#0B0E1D] border-t border-[#2E71F2]/40 transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${
          isSplitting ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(46, 113, 242, 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(46, 113, 242, 0.14) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
      </div>

      {/* UI & HUD LAYER (fades out as curtains split) */}
      <div
        className={`relative z-10 w-full h-full flex items-center justify-center transition-all duration-300 ${
          isSplitting ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Center Scope Frame with Corner Brackets + tagline-logo above it */}
        <div className="relative w-[84vw] max-w-5xl h-[280px] sm:h-[320px] border border-[#2E71F2]/20">
          {/* tagline-logo positioned in the white-circled area right above the scope box */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 sm:mb-8 flex justify-center">
            <img
              src="/imagenes/tagline-logo.png"
              alt="Paneles Solares Saltillo - Transformando el mañana"
              className="w-36 sm:w-44 md:w-48 h-auto object-contain"
            />
          </div>

          {/* Top-left bracket */}
          <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-[#2E71F2]" />
          {/* Top-right bracket */}
          <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-[#2E71F2]" />
          {/* Bottom-left bracket */}
          <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-[#2E71F2]" />
          {/* Bottom-right bracket */}
          <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-[#2E71F2]" />
        </div>

        {/* Top-Left Brand Logo */}
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 flex items-center gap-2.5">
          <img
            src="/imagenes/favicon.png"
            alt="PS"
            className="h-7 sm:h-8 w-auto object-contain brightness-0 invert"
          />
          <img
            src="/imagenes/new-header-logo.png"
            alt="Paneles Solares Saltillo"
            className="h-5 sm:h-6 w-auto object-contain brightness-0 invert"
          />
        </div>

        {/* Top-Right Telemetry Text (radar circle removed) */}
        <div className="hidden sm:flex flex-col items-end gap-2 absolute top-8 right-10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/50">
            SALTILLO, COAH. · MÉXICO
          </span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#2E71F2] border border-[#2E71F2] px-2 py-0.5">
            {isComplete ? "CONECTADO" : "SINCRONIZANDO"}
          </span>
        </div>

        {/* Center Straight Loading Line across 100% width */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-white/10">
          <div
            className="h-full bg-[#2E71F2]"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 10px rgba(46, 113, 242, 0.95)",
            }}
          />
        </div>

        {/* Center Status Box + Big 00% -> 100% Counter */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center">
          <div
            className={`px-4 py-1.5 text-[11px] sm:text-xs font-mono tracking-[0.22em] uppercase border transition-colors duration-200 ${
              isComplete
                ? "bg-[#2E71F2] border-[#2E71F2] text-white"
                : "bg-[#0B0E1D] border-white/25 text-white"
            }`}
          >
            {isComplete
              ? "PANELES SOLARES LISTO"
              : "CARGANDO PANELES SOLARES..."}
          </div>

          <span className="mt-3 text-5xl sm:text-7xl font-bold font-mono text-white leading-none tracking-tight tabular-nums drop-shadow-[0_4px_24px_rgba(46,113,242,0.45)]">
            {String(progress).padStart(2, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
}
