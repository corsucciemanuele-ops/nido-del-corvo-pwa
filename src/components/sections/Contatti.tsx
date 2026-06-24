import { Phone, Smartphone, MessageCircle, MapPin, Clock, AtSign, ExternalLink } from "lucide-react";
import { useReveal } from "@/components/utils/hooks/useReveal";
import { Button } from "@/components/common/Button";
import { CONTACT } from "@/config/contact";
import { LINKS, buildLinks } from "@/config/links";

const HOURS_ROWS: { day: string; hours: string; closed?: boolean }[] = [
  { day: "Giovedì", hours: CONTACT.businessHours.giovedi },
  { day: "Venerdì", hours: CONTACT.businessHours.venerdi },
  { day: "Sabato", hours: CONTACT.businessHours.sabato },
  { day: "Domenica", hours: CONTACT.businessHours.domenica },
  { day: CONTACT.businessHours.closed, hours: "Chiuso", closed: true },
];

export const Contatti = () => {
  const headerReveal = useReveal();
  const contentReveal = useReveal();

  return (
    <section id="contatti" className="bg-nido-avorio py-20 md:py-32">
      {/* ── Header ── */}
      <div
        ref={headerReveal}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 md:mb-20"
      >
        <p
          data-reveal
          className="font-body text-[10px] tracking-[0.35em] uppercase text-nido-oro mb-5"
        >
          Dove siamo
        </p>
        <h2
          data-reveal
          data-reveal-delay="80"
          className="font-heading font-light text-nido-marrone"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.1 }}
        >
          Raggiungici<br />
          sul Colle.
        </h2>
      </div>

      {/* ── Two-column layout ── */}
      <div
        ref={contentReveal}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── Left: contacts ── */}
          <div>
            {/* Phone */}
            <div data-reveal className="flex items-start gap-4 mb-7">
              <div className="w-10 h-10 rounded-xl bg-nido-oro/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={18} strokeWidth={1.4} className="text-nido-marrone" aria-hidden />
              </div>
              <div>
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-nido-marrone/35 mb-1">
                  Telefono fisso
                </p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="font-heading text-xl text-nido-marrone hover:text-nido-oro transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            {/* Mobile */}
            <div data-reveal data-reveal-delay="60" className="flex items-start gap-4 mb-7">
              <div className="w-10 h-10 rounded-xl bg-nido-oro/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Smartphone size={18} strokeWidth={1.4} className="text-nido-marrone" aria-hidden />
              </div>
              <div>
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-nido-marrone/35 mb-1">
                  Cellulare
                </p>
                <a
                  href={`tel:${CONTACT.mobile.replace(/\s/g, "")}`}
                  className="font-heading text-xl text-nido-marrone hover:text-nido-oro transition-colors"
                >
                  {CONTACT.mobile}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div data-reveal data-reveal-delay="120" className="flex items-start gap-4 mb-7">
              <div className="w-10 h-10 rounded-xl bg-nido-oliva/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MessageCircle size={18} strokeWidth={1.4} className="text-nido-marrone" aria-hidden />
              </div>
              <div>
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-nido-marrone/35 mb-1">
                  WhatsApp
                </p>
                <a
                  href={buildLinks.whatsapp("Ciao, vorrei prenotare un tavolo")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xl text-nido-marrone hover:text-nido-oro transition-colors"
                >
                  {CONTACT.mobile}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div data-reveal data-reveal-delay="180" className="flex items-start gap-4 mb-9">
              <div className="w-10 h-10 rounded-xl bg-nido-marrone/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AtSign size={18} strokeWidth={1.4} className="text-nido-marrone" aria-hidden />
              </div>
              <div>
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-nido-marrone/35 mb-1">
                  Instagram
                </p>
                <a
                  href={LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xl text-nido-marrone hover:text-nido-oro transition-colors"
                >
                  {CONTACT.instagram}
                </a>
              </div>
            </div>

            {/* Address + Maps button */}
            <div data-reveal data-reveal-delay="240" className="flex items-start gap-4 mb-9">
              <div className="w-10 h-10 rounded-xl bg-nido-oro/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} strokeWidth={1.4} className="text-nido-marrone" aria-hidden />
              </div>
              <div>
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-nido-marrone/35 mb-1">
                  Indirizzo
                </p>
                <p className="font-heading text-lg text-nido-marrone leading-snug mb-4">
                  {CONTACT.address}
                </p>
                <Button
                  href={LINKS.MAPS}
                  external
                  variant="secondary"
                  size="sm"
                  className="gap-1.5"
                >
                  Apri in Maps
                  <ExternalLink size={11} strokeWidth={1.8} aria-hidden />
                </Button>
              </div>
            </div>
          </div>

          {/* ── Right: hours + map placeholder ── */}
          <div>
            {/* Hours */}
            <div data-reveal className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={16} strokeWidth={1.4} className="text-nido-oro" aria-hidden />
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-nido-marrone/50">
                  Orari di apertura
                </p>
              </div>
              <div className="space-y-3">
                {HOURS_ROWS.map(({ day, hours, closed }) => (
                  <div
                    key={day}
                    className={`flex items-baseline justify-between py-2.5 border-b border-nido-marrone/8 ${
                      closed ? "opacity-40" : ""
                    }`}
                  >
                    <span className={`font-body text-sm ${closed ? "italic text-nido-marrone/50" : "text-nido-marrone"}`}>
                      {day}
                    </span>
                    <span className={`font-body text-sm tabular-nums ${closed ? "text-nido-marrone/40" : "text-nido-marrone/70"}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div
              data-reveal
              data-reveal-delay="80"
              className="relative rounded-2xl overflow-hidden aspect-video bg-nido-sabbia/60"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(191,167,106,0.15) 0%, transparent 70%)," +
                    "linear-gradient(160deg, #e8dfc8 0%, #d4c4a0 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <MapPin size={28} strokeWidth={1} className="text-nido-oro/50" />
                <p className="font-body text-xs text-nido-marrone/35 tracking-wider">
                  {CONTACT.addressShort}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
