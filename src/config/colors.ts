export const NIDO_COLORS = {
  avorio: "#F4EFE6",
  sabbia: "#D8C3A5",
  oroTenue: "#BFA76A",
  marroneCaldo: "#5A4634",
  verdeOliva: "#6F7A55",
  neroMorbido: "#171512",
  biancoCaldo: "#FFFDF8",
} as const;

export const SEMANTIC_COLORS = {
  primary: NIDO_COLORS.oroTenue,
  secondary: NIDO_COLORS.sabbia,
  accent: NIDO_COLORS.marroneCaldo,
  background: NIDO_COLORS.biancoCaldo,
  text: NIDO_COLORS.neroMorbido,
  muted: NIDO_COLORS.avorio,
} as const;
