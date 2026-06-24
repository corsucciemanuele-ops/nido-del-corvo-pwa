import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { LINKS, buildLinks } from "@/config/links";
import { MEDIA_PATHS } from "@/config/media";
import { Button } from "@/components/common/Button";

export const Hero = () => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="hero"
      aria-label="Hero — Nido del Corvo"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* ── Base dark background (visible until video loads) ── */}
      <div className="absolute inset-0 bg-nido-nero" />

      {/* ── Atmospheric gradient placeholder ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 22% 68%, rgba(90,70,52,0.65) 0%, transparent 58%)," +
            "radial-gradient(ellipse at 78% 35%, rgba(111,122,85,0.2) 0%, transparent 45%)",
        }}
      />

      {/* ── Hero video (loads in background, fades in when ready) ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={MEDIA_PATHS.hero.poster}
        onCanPlay={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <source src={MEDIA_PATHS.hero.video} type="video/mp4" />
      </video>

      {/* ── Cinematic overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(23,21,18,0.45) 0%, rgba(23,21,18,0.15) 45%, rgba(23,21,18,0.72) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 animate-fade-in">
        {/* Eyebrow */}
        <p className="font-body text-[10px] text-white/50 tracking-[0.4em] uppercase mb-6">
          Sassocorvaro Auditore · Marche
        </p>

        {/* Logo / H1 */}
        <h1
          className="font-heading font-light text-white tracking-[0.12em] uppercase mb-3"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          Nido del Corvo
        </h1>

        {/* Tagline */}
        <p
          className="font-heading italic text-white/65 mb-12"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
        >
          Dove il Colle incontra il Lago
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Button
            href={LINKS.BOOKING_URL}
            external
            variant="white"
            size="lg"
            aria-label="Prenota un tavolo"
          >
            Prenota
          </Button>
          <Button
            href={LINKS.MENU_URL}
            external
            variant="whiteOutline"
            size="lg"
            aria-label="Scopri il menù"
          >
            Menù
          </Button>
          <Button
            href={buildLinks.whatsapp("Ciao! Vorrei fare una prenotazione al Nido del Corvo.")}
            external
            variant="whiteGhost"
            size="lg"
            aria-label="Contattaci su WhatsApp"
          >
            WhatsApp
          </Button>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="animate-bounce-soft absolute bottom-8 left-1/2"
        aria-hidden="true"
      >
        <ChevronDown
          size={22}
          strokeWidth={1.5}
          className="text-white/35"
        />
      </div>
    </section>
  );
};
