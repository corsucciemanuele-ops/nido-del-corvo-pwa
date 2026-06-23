import { useEffect } from "react";
import { SCROLL } from "@/config/constants";

export const useLenis = () => {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Phase 3: import Lenis and initialize
    // const lenis = new Lenis({ duration: SCROLL.LENIS_DURATION, smoothTouch: SCROLL.SMOOTH_TOUCH });
    // const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    // requestAnimationFrame(raf);
    // return () => lenis.destroy();

    void SCROLL; // referenced to avoid unused import warning
  }, []);
};
