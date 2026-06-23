export const LINKS = {
  MENU_URL: "https://nidodelcorvo.it/menu",
  EVENTS_URL: "https://nidodelcorvo.it/menu",
  BOOKING_URL: "https://colle-eventi.netlify.app/",
  EVENT_REQUEST_URL: "https://colle-eventi.netlify.app/",
  WHATSAPP: "https://wa.me/393388638823",
  INSTAGRAM: "https://instagram.com/nido_del_corvo",
  MAPS: "https://maps.google.com/?q=Sassocorvaro+Auditore",
} as const;

export const buildLinks = {
  menu: () => LINKS.MENU_URL,
  events: () => LINKS.EVENTS_URL,
  booking: () => LINKS.BOOKING_URL,
  eventRequest: () => LINKS.EVENT_REQUEST_URL,
  whatsapp: (message?: string) => {
    const base = LINKS.WHATSAPP;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
  },
};
