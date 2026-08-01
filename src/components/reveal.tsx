"use client";

import { useEffect } from "react";

/**
 * Enables the scroll-reveal effect defined in globals.css.
 *
 * Content is visible by default; this component flags the document as
 * JS-capable and only then does CSS hide `.reveal` elements, so anyone without
 * JavaScript (or with reduced motion) still sees a complete page.
 */
export function RevealProvider() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) return;

    root.dataset.revealReady = "true";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const observe = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not([data-visible])").forEach((el) => {
        // Anything already on screen at load reveals immediately.
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.dataset.visible = "true";
          return;
        }
        observer.observe(el);
      });
    };

    observe();

    // Catch content added by client navigation.
    const mutation = new MutationObserver(observe);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
      delete root.dataset.revealReady;
    };
  }, []);

  return null;
}
