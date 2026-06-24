import { ArrowRight, CalendarDays, Star } from "lucide-react";
import { useReveal } from "@/components/utils/hooks/useReveal";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { LINKS } from "@/config/links";
import { MEDIA_PATHS } from "@/config/media";

const EVENT_TYPES = [
  { icon: Star, label: "Serate a Tema" },
  { icon: CalendarDays, label: "Cene Private" },
  { icon: CalendarDays, label: "Matrimoni" },
];

export const Eventi = () => {
  const reveal = useReveal();

  return (
    <section id="eventi" className="bg-nido-sabbia overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] lg:min-h-[600px]">

          {/* ── Left: content ── */}
          <div
            ref={reveal}
            className="flex items-center px-8 md:px-12 lg:px-16 py-16 lg:py-20"
          >
            <div className="max-w-md">
              <div data-reveal className="flex items-center gap-3 mb-7">
                <Badge variant="outline">Il Colle ti aspetta</Badge>
              </div>

              <h2
                data-reveal
                data-reveal-delay="80"
                className="font-heading font-light text-nido-marrone mb-5"
                style={{
                  fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                  lineHeight: 1.05,
                }}
              >
                Un luogo<br />
                <em className="text-nido-oro">per ogni</em><br />
                occasione.
              </h2>

              <p
                data-reveal
                data-reveal-delay="160"
                className="font-body text-sm text-nido-marrone/60 leading-relaxed mb-8"
              >
                Serate a tema, cene private, compleanni e matrimoni.
                Il Nido del Corvo ospita ogni tipo di evento con la stessa cura
                riservata ai piatti: attenzione al dettaglio, qualità senza compromessi.
              </p>

              <div
                data-reveal
                data-reveal-delay="220"
                className="flex flex-wrap gap-2 mb-9"
              >
                {EVENT_TYPES.map(({ label }) => (
                  <span
                    key={label}
                    className="font-body text-[10px] tracking-[0.2em] uppercase text-nido-marrone/50 bg-nido-marrone/6 rounded-full px-3 py-1.5"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div data-reveal data-reveal-delay="300">
                <Button
                  href={LINKS.EVENTS_URL}
                  external
                  variant="primary"
                  size="lg"
                  className="gap-2"
                >
                  Scopri gli eventi
                  <ArrowRight size={13} strokeWidth={1.8} aria-hidden />
                </Button>
              </div>
            </div>
          </div>

          {/* ── Right: visual panel ── */}
          <div
            className="relative order-first lg:order-last min-h-[280px] lg:min-h-full overflow-hidden"
            aria-hidden="true"
          >
            <img
              src={MEDIA_PATHS.eventi.placeholder}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(212,195,165,0.4) 0%, transparent 60%)," +
                  "linear-gradient(to top, rgba(23,21,18,0.35) 0%, transparent 50%)",
              }}
            />
            {/* Fallback gradient (shown while image loads or if missing) */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, rgba(191,167,106,0.3) 0%, transparent 65%)," +
                  "linear-gradient(160deg, #d8c3a5 0%, #c4a882 100%)",
              }}
            />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-px bg-gradient-to-r from-nido-marrone/20 to-transparent mb-4" />
              <p className="font-heading italic text-xs text-nido-marrone/40 tracking-widest">
                Ogni evento, una storia unica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
