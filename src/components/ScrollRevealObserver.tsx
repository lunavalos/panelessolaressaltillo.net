"use client";

import { useEffect } from "react";

export default function ScrollRevealObserver() {
  useEffect(() => {
    let heroRevealed = false;

    // 1. Trigger Hero elements once the page intro loader curtain splits
    const revealHero = () => {
      if (heroRevealed) return;
      heroRevealed = true;
      const heroElements = document.querySelectorAll("#inicio .reveal-blur");
      heroElements.forEach((el) => el.classList.add("is-revealed"));
    };

    window.addEventListener("pageIntroComplete", revealHero);

    // Safety fallback: if event didn't fire within 2.8s (e.g. background tab)
    const fallbackHeroTimer = setTimeout(revealHero, 2800);

    // 2. IntersectionObserver for standard sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeElements = () => {
      const allReveal = document.querySelectorAll(".reveal-blur");
      const isDesktop = window.innerWidth >= 1024;

      allReveal.forEach((el) => {
        // Exclude hero elements (handled by revealHero)
        if (el.closest("#inicio")) return;

        // On desktop, exclude layers inside the pinned 3-step sequence wrapper;
        // ScrollSequenceWrapper triggers them exactly when they are scrolled into view.
        if (
          isDesktop &&
          (el.closest("#about-sequence-layer") ||
            el.closest("#solutions-sequence-layer"))
        ) {
          return;
        }

        observer.observe(el);
      });
    };

    observeElements();
    const backupTimer = setTimeout(observeElements, 500);

    return () => {
      window.removeEventListener("pageIntroComplete", revealHero);
      clearTimeout(fallbackHeroTimer);
      clearTimeout(backupTimer);
      observer.disconnect();
    };
  }, []);

  return null;
}
