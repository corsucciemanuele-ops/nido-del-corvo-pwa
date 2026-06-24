import { ArrowRight } from "lucide-react";
import { useReveal } from "@/components/utils/hooks/useReveal";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { LINKS } from "@/config/links";

const CATEGORIES = [
  {
    label: "Il Mare",
    heading: "Pesce",
    description:
      "Crudi di mare, primo piatto con frutti di stagione, secondi cucinati con rispetto del prodotto. La freschezza non è un optional.",
    gradient:
      "linear-gradient(160deg, #D8C3A5 0%, #F4EFE6 55%, #BFA76A20 100%)",
    badge: "Fresco ogni giorno",
  },
  {
    label: "La Terra",
    heading: "Carne",
    description:
      "Tagli selezionati, cotture lente e dirette. Il fuoco è parte della ricetta. La semplicità è la tecnica.",
    gradient:
      "linear-gradient(160deg, #5A463430 0%, #D8C3A5 50%, #F4EFE6 100%)",
    badge: "Alla brace",
  },
  {
    label: "L'Impasto",
    heading: "Pizza",
    description:
      "Lievitazione naturale, farine selezionate, idratazione alta. Non una pizza qualsiasi — una pizza che si ricorda.",
    gradient:
      "linear-gradient(160deg, #BFA76A25 0%, #F4EFE6 50%, #D8C3A5 100%)",
    badge: "Lievitazione naturale",
  },
] as const;

export const Cucina = () => {
  const headerReveal = useReveal();
  const cardsReveal = useReveal();

  return (
    <section id="cucina" className="bg-nido-bianco py-20 md:py-32">
      {/* ── Header ── */}
      <div
        ref={headerReveal}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 md:mb-20"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              data-reveal
              className="font-body text-[10px] tracking-[0.35em] uppercase text-nido-oro mb-5"
            >
              La Cucina
            </p>
            <h2
              data-reveal
              data-reveal-delay="80"
              className="font-heading font-light text-nido-marrone"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.1 }}
            >
              Una cucina che<br />
              racconta il territorio.
            </h2>
          </div>
          <div data-reveal data-reveal-delay="160" className="md:pb-1">
            <Button
              href={LINKS.MENU_URL}
              external
              variant="secondary"
              size="md"
              className="gap-2"
            >
              Scopri il Menù
              <ArrowRight size={13} strokeWidth={1.8} aria-hidden />
            </Button>
          </div>
        </div>
      </div>

      {/* ── Category cards ── */}
      <div
        ref={cardsReveal}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map(({ label, heading, description, gradient, badge }, i) => (
            <article
              key={heading}
              data-reveal
              data-reveal-delay={`${i * 110}`}
              className="group"
            >
              {/* Image placeholder */}
              <div
                className="aspect-[3/4] rounded-2xl mb-5 overflow-hidden"
                style={{ background: gradient }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-heading text-4xl font-light text-nido-marrone/20 tracking-wider uppercase">
                    {heading}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="px-1">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-nido-marrone/40">
                    {label}
                  </p>
                  <Badge variant="outline" className="text-[9px]">
                    {badge}
                  </Badge>
                </div>
                <h3 className="font-heading text-2xl font-light text-nido-marrone mb-2 tracking-tight">
                  {heading}
                </h3>
                <p className="font-body text-sm text-nido-marrone/55 leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
