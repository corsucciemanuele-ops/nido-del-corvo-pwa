export const METADATA = {
  title: "Nido del Corvo – Ristorante sul Colle | Sassocorvaro",
  titleShort: "Nido del Corvo",
  description:
    "Ristorante panoramico sul Lago di Mercatale, Sassocorvaro Auditore. Cucina di pesce, carne alla brace e pizza a lievitazione naturale. Fish Day ogni giovedì. Prenota il tuo tavolo.",
  keywords:
    "ristorante Sassocorvaro, Nido del Corvo, lago di Mercatale, pesce fresco Marche, fish day, carne alla brace, pizza lievitazione naturale, ristorante panoramico Pesaro",
  author: "Nido del Corvo",
  siteUrl: "https://nidodelcorvo.it",
  ogImage: "/og-image.jpg",
  ogImageAlt: "Nido del Corvo – vista panoramica sul Lago di Mercatale",
  locale: "it_IT",
  type: "website",
  phone: "+39 338 863 8823",
  phonePretty: "338 863 8823",
  address: "Via Colle Igea 22/B, 61028 Sassocorvaro Auditore (PU)",
} as const;

export const SCHEMA_RESTAURANT = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Nido del Corvo",
  description:
    "Ristorante panoramico sul Lago di Mercatale. Cucina di pesce, carne alla brace e pizza a lievitazione naturale.",
  url: "https://nidodelcorvo.it",
  telephone: "+39 0722 76334",
  image: "https://nidodelcorvo.it/og-image.jpg",
  priceRange: "€€",
  servesCuisine: ["Italian", "Seafood", "Mediterranean"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Colle Igea 22/B",
    addressLocality: "Sassocorvaro Auditore",
    addressRegion: "PU",
    postalCode: "61028",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7969,
    longitude: 12.4922,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday"],
      opens: "19:00",
      closes: "24:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "18:00",
      closes: "24:00",
    },
  ],
  hasMenu: "https://nidodelcorvo.it/menu",
  acceptsReservations: "True",
} as const;
