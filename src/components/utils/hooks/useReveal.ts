import { useEffect, useRef } from "react";

/**
 * Scroll reveal via IntersectionObserver.
 * Usa [data-reveal] su elementi figli del container ref.
 * data-reveal-delay="200" per delay custom (ms, si somma allo stagger).
 * Rispetta prefers-reduced-motion: se attivo, niente animazione.
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!items.length) return;

    // Progressive enhancement: nascondi via JS, non CSS.
    // Così senza JS gli elementi sono sempre visibili.
    if (!prefersReduced) {
      items.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(18px)";
        el.style.transition =
          "opacity 0.65s ease-out, transform 0.65s ease-out";
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        items.forEach((el, i) => {
          const customDelay = parseInt(
            (el as HTMLElement).dataset.revealDelay ?? "0",
            10,
          );
          const stagger = prefersReduced ? 0 : i * 90 + customDelay;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "none";
          }, stagger);
        });
        observer.unobserve(container);
      },
      { threshold: 0.08 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return ref;
};
