// Sezioni placeholder — verranno sostituite in Fase 3

const SECTIONS: { id: string; label: string; bg: string }[] = [
  { id: "hero",       label: "Hero · Video fullscreen",    bg: "bg-nido-nero" },
  { id: "esperienza", label: "Esperienza · Vista sul Lago", bg: "bg-nido-avorio" },
  { id: "cucina",     label: "Cucina · Pesce Carne Pizza",  bg: "bg-nido-bianco" },
  { id: "fish-day",   label: "Fish Day · Promo",            bg: "bg-nido-avorio" },
  { id: "accedi",     label: "Accedi · 3 Card CTA",         bg: "bg-nido-bianco" },
  { id: "eventi",     label: "Eventi · Vetrina statica",    bg: "bg-nido-sabbia" },
  { id: "gallery",    label: "Gallery · Lightbox",          bg: "bg-nido-nero" },
  { id: "contatti",   label: "Contatti · Mappa & Info",     bg: "bg-nido-avorio" },
];

export const Home = () => {
  return (
    <>
      {SECTIONS.map(({ id, label, bg }) => (
        <div
          key={id}
          id={id}
          className={`${bg} flex items-center justify-center ${
            id === "hero" ? "min-h-screen" : "py-32"
          }`}
        >
          <p
            className={`font-heading text-xl md:text-2xl tracking-[0.15em] uppercase ${
              bg === "bg-nido-nero" ? "text-white/20" : "text-nido-marrone/25"
            }`}
          >
            {label}
          </p>
        </div>
      ))}
    </>
  );
};
