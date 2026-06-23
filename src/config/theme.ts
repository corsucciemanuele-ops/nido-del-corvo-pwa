export const THEME = {
  spacing: {
    section: "py-16 md:py-24",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  },
  shadows: {
    card: "0 4px 24px rgba(23, 21, 18, 0.08)",
    cardHover: "0 20px 40px rgba(23, 21, 18, 0.15)",
  },
  transitions: {
    default: "transition-all duration-300 ease-out",
    slow: "transition-all duration-500 ease-out",
  },
  borderRadius: {
    card: "rounded-xl",
    button: "rounded-full",
  },
} as const;
