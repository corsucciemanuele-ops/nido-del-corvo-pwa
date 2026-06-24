import { UtensilsCrossed, CalendarCheck, Sparkles, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/components/utils/hooks/useReveal";
import { LINKS } from "@/config/links";

interface AccediCard {
  icon: LucideIcon;
  eyebrow: string;
  heading: string;
  description: string;
  cta: string;
  href: string;
  accent: string; // bg tint for icon circle
}

const CARDS: AccediCard[] = [
  {
    icon: UtensilsCrossed,
    eyebrow: "Esplora",
    heading: "Menù Digitale",
    description:
      "Piatti del giorno, proposte stagionali e Fish Day. Tutto il Nido, aggiornato in tempo reale.",
    cta: "Apri il Menù",
    href: LINKS.MENU_URL,
    accent: "bg-nido-oro/10",
  },
  {
    icon: CalendarCheck,
    eyebrow: "Riserva",
    heading: "Prenota il Tavolo",
    description:
      "Scegli data, orario e numero di coperti. La tua serata sul Colle inizia qui.",
    cta: "Prenota ora",
    href: LINKS.BOOKING_URL,
    accent: "bg-nido-oliva/10",
  },
  {
    icon: Sparkles,
    eyebrow: "Organizza",
    heading: "Crea il tuo Evento",
    description:
      "Matrimoni, compleanni, cene aziendali. Raccontaci cosa hai in mente, pensiamo noi al resto.",
    cta: "Richiedi info",
    href: LINKS.EVENT_REQUEST_URL,
    accent: "bg-nido-marrone/8",
  },
];

export const Accedi = () => {
  const headerReveal = useReveal();
  const cardsReveal = useReveal();

  return (
    <section id="accedi" className="bg-nido-avorio py-20 md:py-32">
      {/* ── Header ── */}
      <div
        ref={headerReveal}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14 md:mb-20"
      >
        <p
          data-reveal
          className="font-body text-[10px] tracking-[0.35em] uppercase text-nido-oro mb-5"
        >
          Accedi
        </p>
        <h2
          data-reveal
          data-reveal-delay="80"
          className="font-heading font-light text-nido-marrone"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.1 }}
        >
          Tutto il Nido,<br />
          a portata di tap.
        </h2>
      </div>

      {/* ── Cards ── */}
      <div
        ref={cardsReveal}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {CARDS.map(({ icon: Icon, eyebrow, heading, description, cta, href, accent }, i) => (
            <a
              key={heading}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              data-reveal-delay={`${i * 100}`}
              aria-label={heading}
              className={[
                "card-3d group block",
                "bg-nido-bianco rounded-2xl p-7 lg:p-8",
                "shadow-[0_4px_24px_rgba(23,21,18,0.07)]",
                "focus-visible:outline-2 focus-visible:outline-nido-oro",
                "no-underline",
              ].join(" ")}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${accent} mb-7`}
              >
                <Icon
                  size={22}
                  strokeWidth={1.4}
                  aria-hidden
                  className="text-nido-marrone"
                />
              </div>

              {/* Eyebrow */}
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-nido-marrone/35 mb-2">
                {eyebrow}
              </p>

              {/* Heading */}
              <h3 className="font-heading text-2xl font-light text-nido-marrone mb-3 tracking-tight">
                {heading}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-nido-marrone/55 leading-relaxed mb-7">
                {description}
              </p>

              {/* CTA row */}
              <div className="flex items-center gap-1.5 text-nido-oro font-body text-xs font-medium tracking-[0.1em] uppercase transition-gap duration-200 group-hover:gap-2.5">
                {cta}
                <ArrowUpRight
                  size={13}
                  strokeWidth={2}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
