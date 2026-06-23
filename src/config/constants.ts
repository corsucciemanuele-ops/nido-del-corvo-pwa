export const SCROLL = {
  LENIS_DURATION: 1.2,
  LENIS_EASE: "easeInOutCubic",
  SMOOTH_TOUCH: false,
} as const;

export const ANIMATION = {
  REVEAL_THRESHOLD: 0.1,
  REVEAL_DELAY_BASE: 100,
  REVEAL_DELAY_STEP: 150,
  TRANSITION_DURATION: 300,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;
