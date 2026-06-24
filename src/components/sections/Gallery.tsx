import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/components/utils/hooks/useReveal";
import { GALLERY_ITEMS } from "@/config/media";

export const Gallery = () => {
  const headerReveal = useReveal();
  const gridReveal = useReveal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const open = (i: number) => {
    setActiveIndex(i);
    document.body.style.overflow = "hidden";
  };

  const close = useCallback(() => {
    setActiveIndex(null);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length));
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_ITEMS.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  useEffect(() => {
    if (activeIndex !== null) {
      dialogRef.current?.focus();
    }
  }, [activeIndex]);

  return (
    <section id="gallery" className="bg-nido-nero py-20 md:py-32">
      {/* ── Header ── */}
      <div
        ref={headerReveal}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14 md:mb-20"
      >
        <p
          data-reveal
          className="font-body text-[10px] tracking-[0.35em] uppercase text-nido-oro mb-5"
        >
          Gallery
        </p>
        <h2
          data-reveal
          data-reveal-delay="80"
          className="font-heading font-light text-white"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.1 }}
        >
          Il Nido,<br />
          <em className="text-nido-oro">in immagini.</em>
        </h2>
      </div>

      {/* ── Grid ── */}
      <div
        ref={gridReveal}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <button
              key={item.src}
              data-reveal
              data-reveal-delay={`${i * 70}`}
              onClick={() => open(i)}
              className="group relative aspect-square overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-nido-oro"
              aria-label={`Apri immagine: ${item.alt}`}
            >
              {/* Gradient placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background: item.category === "esperienza"
                    ? "linear-gradient(160deg, #1f1c18 0%, #2a2018 50%, #3a3020 100%)"
                    : "linear-gradient(160deg, #2a2018 0%, #3a2c1e 50%, #4a3828 100%)",
                }}
              />
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-nido-nero/0 group-hover:bg-nido-nero/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-body text-[9px] tracking-[0.2em] uppercase text-white/70">
                  {item.alt}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Lightbox gallery"
          ref={dialogRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-nido-nero/95 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Chiudi"
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus-visible:outline-2 focus-visible:outline-nido-oro"
          >
            <X size={18} strokeWidth={1.8} />
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Immagine precedente"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus-visible:outline-2 focus-visible:outline-nido-oro"
          >
            <ChevronLeft size={20} strokeWidth={1.8} />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[80vh] mx-16 relative">
            <div
              className="w-full min-h-[300px] rounded-xl"
              style={{
                background: GALLERY_ITEMS[activeIndex].category === "esperienza"
                  ? "linear-gradient(160deg, #1f1c18 0%, #2a2018 100%)"
                  : "linear-gradient(160deg, #2a2018 0%, #4a3828 100%)",
              }}
            />
            <img
              src={GALLERY_ITEMS[activeIndex].src}
              alt={GALLERY_ITEMS[activeIndex].alt}
              className="absolute inset-0 w-full h-full object-contain rounded-xl"
            />
            <p className="mt-3 font-body text-xs text-white/40 text-center tracking-wide">
              {GALLERY_ITEMS[activeIndex].alt}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Immagine successiva"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus-visible:outline-2 focus-visible:outline-nido-oro"
          >
            <ChevronRight size={20} strokeWidth={1.8} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {GALLERY_ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Vai all'immagine ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === activeIndex ? "bg-nido-oro" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
