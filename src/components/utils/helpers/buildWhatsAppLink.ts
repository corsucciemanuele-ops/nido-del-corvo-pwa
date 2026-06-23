import { LINKS } from "@/config/links";

export const buildWhatsAppLink = (message?: string): string => {
  if (!message) return LINKS.WHATSAPP;
  return `${LINKS.WHATSAPP}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_MESSAGES = {
  prenotazione: "Ciao! Vorrei prenotare un tavolo al Nido del Corvo.",
  evento: "Ciao! Vorrei informazioni per organizzare un evento al Nido del Corvo.",
  info: "Ciao! Vorrei alcune informazioni sul ristorante Nido del Corvo.",
} as const;
