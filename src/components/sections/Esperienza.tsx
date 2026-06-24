import { Mountain, TreePine, Sunset } from "lucide-react";
import { useReveal } from "@/components/utils/hooks/useReveal";

const FEATURES = [
  {
    icon: Mountain,
    title: "Vista Panoramica",
    description:
      "A 340 metri sul Lago di Mercatale: un orizzonte che si apre sulle colline delle Marche, immobile e infinito.",
  },
  {
    icon: TreePine,
    title: "La Terrazza",
    description:
      "Uno spazio sospeso tra cielo e collina, dove ogni pasto diventa parte di un paesaggio più grande di te.",
  },
  {
    icon: Sunset,
    title: "I Tramonti",
    description:
      "Ogni sera il sole scende lento sull'acqua. Nessun filtro, nessun effetto: il Nido te li regala così.",
  },
] as const;

export const Esperienza = () => {
  const reveal = useReveal();
  const featuresReveal = useReveal();

  return (
    <section id="esperienza" className="bg-nido-avorio py-20 md:py-32">
      {/* ── Intro ── */}
      <div
        ref={reveal}
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center mb-20 md:mb-28"
      >
        <p
          data-reveal
          className="font-body text-[10px] tracking-[0.35em] uppercase text-nido-oro mb-6"
        >
          Il Luogo
        </p>
        <h2
          data-reveal
          data-reveal-delay="80"
          className="font-heading font-light text-nido-marrone mb-6"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.08 }}
        >
          Dove il Colle<br />
          <em>incontra il Lago.</em>
        </h2>
        <p
          data-reveal
          data-reveal-delay="160"
          className="font-body text-base md:text-lg text-nido-marrone/65 leading-relaxed max-w-xl mx-auto"
        >
          Il Nido del Corvo non è semplicemente un ristorante. È un posto
          che hai la sensazione di aver sempre conosciuto. L'aria del colle,
          il riflesso del lago, il silenzio che non pesa — qui il tempo
          scorre come dovrebbe.
        </p>
      </div>

      {/* ── Feature cards ── */}
      <div
        ref={featuresReveal}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {FEATURES.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              data-reveal
              data-reveal-delay={`${i * 100}`}
              className="text-center md:text-left"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-nido-oro/10 mb-5 md:mb-6">
                <Icon
                  size={20}
                  strokeWidth={1.4}
                  aria-hidden
                  className="text-nido-oro"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-light text-nido-marrone mb-3 tracking-tight">
                {title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-nido-marrone/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Decorative divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-nido-sabbia to-transparent" />
      </div>
    </section>
  );
};
