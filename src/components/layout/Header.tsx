import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const textColor = isScrolled ? "text-nido-marrone" : "text-white";

  return (
    <>
      {/* ── Fixed header bar ── */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-nido-bianco/95 backdrop-blur-sm shadow-[0_1px_0_rgba(23,21,18,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo (text until SVG provided in Phase 3) */}
            <a
              href="/"
              aria-label="Nido del Corvo — homepage"
              className={`font-heading text-lg font-normal tracking-[0.2em] uppercase transition-colors duration-300 ${textColor}`}
            >
              Nido del Corvo
            </a>

            {/* Desktop nav */}
            <nav
              role="navigation"
              aria-label="Menu principale"
              className="hidden lg:flex items-center gap-8"
            >
              <Navigation isScrolled={isScrolled} />
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Apri menu di navigazione"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-drawer"
              className={`lg:hidden p-2 -mr-2 transition-colors duration-300 ${textColor}`}
            >
              <Menu size={22} strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer backdrop ── */}
      <div
        className={`fixed inset-0 bg-nido-nero/60 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile drawer panel ── */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        className={`fixed top-0 left-0 h-full w-72 bg-nido-bianco z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-nido-avorio">
          <span className="font-heading text-base tracking-[0.2em] uppercase text-nido-marrone">
            Nido del Corvo
          </span>
          <button
            onClick={() => setIsMobileOpen(false)}
            aria-label="Chiudi menu"
            className="p-1 -mr-1 text-nido-marrone"
          >
            <X size={20} strokeWidth={1.5} aria-hidden />
          </button>
        </div>

        {/* Drawer nav */}
        <nav
          role="navigation"
          aria-label="Menu mobile"
          className="px-6 pt-4 pb-8"
        >
          <Navigation mobile onClose={() => setIsMobileOpen(false)} />
        </nav>
      </div>
    </>
  );
};
