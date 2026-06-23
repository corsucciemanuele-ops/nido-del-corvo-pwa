export const METADATA = {
  title: "Nido del Corvo – Ristorante sul Colle | Sassocorvaro",
  description:
    "Ristorante panoramico sul Lago di Mercatale. Cucina gourmet, pesce, carne e pizza. Atmosfera unica su Il Colle.",
  keywords:
    "ristorante, lago, Sassocorvaro, pesce, panorama, tramonti, Marche",
  author: "Nido del Corvo",
  ogImage: "/og-image.jpg",
  locale: "it_IT",
  type: "website",
  phone: "+39 338 863 8823",
  address: "Via Colle Igea 22/B, 61028 Sassocorvaro Auditore (PU)",
} as const;

export const SCHEMA_RESTAURANT = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Nido del Corvo",
  description: "Ristorante panoramico sul Lago di Mercatale",
  url: "https://nidodelcorvo.it",
  telephone: "+39 0722 76334",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Colle Igea 22/B",
    addressLocality: "Sassocorvaro Auditore",
    addressRegion: "PU",
    postalCode: "61028",
    addressCountry: "IT",
  },
  priceRange: "€€",
  cuisine: ["Italian", "Seafood", "Mediterranean"],
} as const;
