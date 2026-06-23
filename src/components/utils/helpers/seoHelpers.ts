import { SCHEMA_RESTAURANT } from "@/config/metadata";

export const getSchemaString = (): string => {
  return JSON.stringify(SCHEMA_RESTAURANT);
};

export const buildPageTitle = (section?: string): string => {
  const base = "Nido del Corvo – Ristorante sul Colle | Sassocorvaro";
  return section ? `${section} | ${base}` : base;
};
