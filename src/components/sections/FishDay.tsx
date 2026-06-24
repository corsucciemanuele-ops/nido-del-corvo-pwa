import { ArrowRight, Waves } from "lucide-react";
import { useReveal } from "@/components/utils/hooks/useReveal";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { LINKS } from "@/config/links";

export const FishDay = () => {
  const reveal = useReveal();

  return (
    <section
      id="fish-day"
      className="bg-nido-nero overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] lg:min-h-[600px]">

          {/* ── Left: visual panel ── */}
          <div
            className="relative order-2 lg:order-1 min-h-[280px] lg:min-h-full overflow-hidden"
            aria-hidden="true"
          >
            {/* Gradient background (placeholder for photo) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 40% 60%, rgba(111,122,85,0.35) 0%, transparent 65%)," +
                  "radial-gradient(ellipse at 70% 25%, rgba(191,167,106,0.2) 0%, transparent 50%)," +
                  "linear-gradient(170deg, #1f1c18 0%, #2a2018 100%)",
              }}
            />

            {/* Decorative wave icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Waves
                size={200}
                strokeWidth={0.4}
                className="text-nido-oro/6"
                aria-hidden
              />
            </div>

            {/* Decorative label */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="h-px bg-gradient-to-r from-nido-oro/30 to-transparent mb-4" />
              <p className="font-heading italic text-xs text-nido-oro/30 tracking-widest">
                Pesce fresco · Lago di Mercatale
              </p>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div
            ref={reveal}
            className="order-1 lg:order-2 flex items-center px-8 md:px-12 lg:px-16 py-16 lg:py-20"
          >
            <div className="max-w-md">
              <div data-reveal className="flex items-center gap-3 mb-7">
                <Badge variant="gold">Ogni Giovedì & Venerdì</Badge>
              </div>

              <h2
                data-reveal
                data-reveal-delay="80"
                className="font-heading font-light text-white mb-5"
                style={{
                  fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                  lineHeight: 1.05,
                }}
              >
                Fish<br />
                <em className="text-nido-oro">Day.</em>
              </h2>

              <p
                data-reveal
                data-reveal-delay="160"
                className="font-body text-sm text-white/55 leading-relaxed mb-5"
              >
                Ogni giovedì e venerdì sera il mare arriva sul Colle.
                Crudi, antipasti, primi e secondi di pesce fresco: un
                percorso pensato per chi ama il mare anche lontano dalla costa.
              </p>

              <p
                data-reveal
                data-reveal-delay="220"
                className="font-body text-xs text-white/35 leading-relaxed mb-9 italic"
              >
                Disponibilità limitata — consigliamo la prenotazione.
              </p>

              <div data-reveal data-reveal-delay="300">
                <Button
                  href={LINKS.MENU_URL}
                  external
                  variant="white"
                  size="lg"
                  className="gap-2"
                >
                  Scopri il Menù
                  <ArrowRight size={13} strokeWidth={1.8} aria-hidden />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
