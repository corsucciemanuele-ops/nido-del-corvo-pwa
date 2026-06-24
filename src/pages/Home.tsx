import { Hero } from "@/components/sections/Hero";
import { Esperienza } from "@/components/sections/Esperienza";
import { Cucina } from "@/components/sections/Cucina";
import { FishDay } from "@/components/sections/FishDay";
import { Accedi } from "@/components/sections/Accedi";

// Placeholder stubs per le sezioni Fase 4
const EventiPlaceholder = () => (
  <div id="eventi" className="bg-nido-sabbia py-32 flex items-center justify-center">
    <p className="font-heading text-xl tracking-[0.15em] uppercase text-nido-marrone/25">
      Eventi · Fase 4
    </p>
  </div>
);

const GalleryPlaceholder = () => (
  <div id="gallery" className="bg-nido-nero py-32 flex items-center justify-center">
    <p className="font-heading text-xl tracking-[0.15em] uppercase text-white/15">
      Gallery · Fase 4
    </p>
  </div>
);

const ContattiPlaceholder = () => (
  <div id="contatti" className="bg-nido-avorio py-32 flex items-center justify-center">
    <p className="font-heading text-xl tracking-[0.15em] uppercase text-nido-marrone/25">
      Contatti · Fase 4
    </p>
  </div>
);

export const Home = () => {
  return (
    <>
      <Hero />
      <Esperienza />
      <Cucina />
      <FishDay />
      <Accedi />
      <EventiPlaceholder />
      <GalleryPlaceholder />
      <ContattiPlaceholder />
    </>
  );
};
