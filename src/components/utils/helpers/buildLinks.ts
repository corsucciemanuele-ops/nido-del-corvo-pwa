import { LINKS } from "@/config/links";

export const buildMenuLink = (params?: Record<string, string>) => {
  if (!params) return LINKS.MENU_URL;
  const url = new URL(LINKS.MENU_URL);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.toString();
};

export const buildBookingLink = (params?: Record<string, string>) => {
  if (!params) return LINKS.BOOKING_URL;
  const url = new URL(LINKS.BOOKING_URL);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.toString();
};
