import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/config/constants";

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return {
    width,
    isMobile: width < BREAKPOINTS.MD,
    isTablet: width >= BREAKPOINTS.MD && width < BREAKPOINTS.LG,
    isDesktop: width >= BREAKPOINTS.LG,
  };
};
