"use client";

import React, { useEffect, useRef } from "react";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollSequenceWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const howLayerRef = useRef<HTMLDivElement>(null);
  const aboutLayerRef = useRef<HTMLDivElement>(null);
  const solutionsLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const updateAnimation = () => {
      rafId = null;
      const container = containerRef.current;
      const howEl = howLayerRef.current;
      const aboutEl = aboutLayerRef.current;
      const solutionsEl = solutionsLayerRef.current;

      if (!container || !howEl || !aboutEl || !solutionsEl) return;

      // On mobile/tablet (< 1024px), reset inline transforms so stacked sections flow naturally
      if (window.innerWidth < 1024) {
        howEl.style.transform = "";
        aboutEl.style.transform = "";
        aboutEl.style.opacity = "";
        aboutEl.style.filter = "";
        aboutEl.style.pointerEvents = "";
        solutionsEl.style.transform = "";
        solutionsEl.style.opacity = "";
        solutionsEl.style.filter = "";
        solutionsEl.style.pointerEvents = "";
        return;
      }

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = container.offsetHeight - viewportHeight;

      if (totalScrollable <= 0) return;

      const scrolled = clamp(-rect.top, 0, totalScrollable);
      const progress = scrolled / totalScrollable; // 0 -> 1

      // Reveal elements progressively inside the sequence layers
      if (rect.top < viewportHeight * 0.75) {
        howEl.querySelectorAll(".reveal-blur").forEach((el) => el.classList.add("is-revealed"));
      }
      if (progress >= 0.4) {
        aboutEl.querySelectorAll(".reveal-blur").forEach((el) => el.classList.add("is-revealed"));
      }
      if (progress >= 0.72) {
        solutionsEl.querySelectorAll(".reveal-blur").forEach((el) => el.classList.add("is-revealed"));
      }

      // Phase 1 (0.00 -> 0.58): HowItWorksSection lifts up (0% -> -100%) revealing AboutSection underneath
      const liftProgress = clamp(progress / 0.58, 0, 1);
      howEl.style.transform = `translate3d(0, ${-liftProgress * 100}%, 0)`;

      // Phase 2 (0.63 -> 0.93): Fast inward scale (1 -> 0.85) + blur (0 -> 14px) + fade out (1 -> 0)
      const fadeOutProgress = clamp((progress - 0.63) / 0.3, 0, 1);
      const aboutScale = 1 - fadeOutProgress * 0.15;
      const aboutOpacity = 1 - fadeOutProgress;
      const aboutBlur = fadeOutProgress * 14;

      aboutEl.style.transform = `scale(${aboutScale.toFixed(4)})`;
      aboutEl.style.opacity = aboutOpacity.toFixed(4);
      aboutEl.style.filter =
        aboutBlur > 0.1 ? `blur(${aboutBlur.toFixed(2)}px)` : "none";
      aboutEl.style.pointerEvents = fadeOutProgress > 0.7 ? "none" : "auto";

      // SolutionsSection appears simultaneously and quickly as AboutSection blurs out
      const fadeInProgress = clamp((progress - 0.65) / 0.28, 0, 1);
      const solutionsScale = 0.94 + fadeInProgress * 0.06;
      const solutionsOpacity = fadeInProgress;
      const solutionsBlur = (1 - fadeInProgress) * 10;

      solutionsEl.style.transform = `scale(${solutionsScale.toFixed(4)})`;
      solutionsEl.style.opacity = solutionsOpacity.toFixed(4);
      solutionsEl.style.filter =
        solutionsBlur > 0.1 ? `blur(${solutionsBlur.toFixed(2)}px)` : "none";
      solutionsEl.style.pointerEvents =
        fadeInProgress > 0.4 ? "auto" : "none";
    };

    const onScrollOrResize = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateAnimation);
      }
    };

    const onHashChange = () => {
      const container = containerRef.current;
      if (!container) return;
      if (window.innerWidth >= 1024) {
        if (window.location.hash === "#soluciones") {
          const containerY = container.getBoundingClientRect().top + window.scrollY;
          const totalScrollable = container.offsetHeight - window.innerHeight;
          window.scrollTo({ top: containerY + totalScrollable, behavior: "smooth" });
        } else if (window.location.hash === "#funcionamiento") {
          const containerY = container.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: containerY, behavior: "smooth" });
        }
      }
    };

    updateAnimation();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    window.addEventListener("hashchange", onHashChange);

    // If page is loaded with hash, trigger alignment
    if (window.location.hash === "#soluciones" || window.location.hash === "#funcionamiento") {
      setTimeout(onHashChange, 350);
    }

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("hashchange", onHashChange);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      id="scroll-sequence-container"
      ref={containerRef}
      className="relative w-full lg:h-[250vh]"
    >
      <div className="lg:sticky lg:top-0 lg:h-screen lg:w-full lg:overflow-hidden bg-white">
        {/* Layer 3 (Top): ¿Cómo funcionan los paneles solares? — sube como cortina al hacer scroll */}
        <div
          ref={howLayerRef}
          className="relative lg:absolute lg:inset-0 z-30 will-change-transform"
        >
          <HowItWorksSection />
        </div>

        {/* Layer 2 (Middle): Transformando el mañana... — aparece debajo y luego se encoge y difumina */}
        <div
          id="about-sequence-layer"
          ref={aboutLayerRef}
          className="relative lg:absolute lg:inset-0 z-20 origin-center will-change-[transform,opacity,filter]"
        >
          <AboutSection />
        </div>

        {/* Layer 1 (Bottom): Nueva sección (01, 02, 03) — aparece cuando se difumina la anterior */}
        <div
          id="solutions-sequence-layer"
          ref={solutionsLayerRef}
          className="relative lg:absolute lg:inset-0 z-10 origin-center will-change-[transform,opacity,filter]"
        >
          <SolutionsSection />
        </div>
      </div>
    </div>
  );
}
