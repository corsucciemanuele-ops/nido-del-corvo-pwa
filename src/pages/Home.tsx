// import { SEO } from "@/components/seo/SEO"; // temporaneamente disabilitato per debug
import { Hero } from "@/components/sections/Hero";
import { Esperienza } from "@/components/sections/Esperienza";
import { Cucina } from "@/components/sections/Cucina";
import { FishDay } from "@/components/sections/FishDay";
import { Accedi } from "@/components/sections/Accedi";
import { Eventi } from "@/components/sections/Eventi";
import { Gallery } from "@/components/sections/Gallery";
import { Contatti } from "@/components/sections/Contatti";

export const Home = () => {
  return (
    <>
      {/* <SEO /> */}
      <Hero />
      <Esperienza />
      <Cucina />
      <FishDay />
      <Accedi />
      <Eventi />
      <Gallery />
      <Contatti />
    </>
  );
};
