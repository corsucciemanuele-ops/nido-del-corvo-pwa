export const MEDIA_PATHS = {
  hero: {
    video: "/assets/placeholder/hero-placeholder.mp4",
    poster: "/assets/placeholder/hero-poster.jpg",
  },
  gallery: {
    esperienza: [
      "/assets/placeholder/gallery-vista-1.jpg",
      "/assets/placeholder/gallery-vista-2.jpg",
      "/assets/placeholder/gallery-terrazza.jpg",
    ],
    cucina: [
      "/assets/placeholder/gallery-pesce-1.jpg",
      "/assets/placeholder/gallery-carne.jpg",
      "/assets/placeholder/gallery-pizza.jpg",
    ],
  },
  eventi: {
    placeholder: "/assets/placeholder/gallery-evento.jpg",
  },
} as const;

export interface GalleryItem {
  src: string;
  alt: string;
  category: "esperienza" | "cucina";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: MEDIA_PATHS.gallery.esperienza[0], alt: "Vista panoramica dal Nido del Corvo", category: "esperienza" },
  { src: MEDIA_PATHS.gallery.esperienza[1], alt: "Vista sul Lago di Mercatale", category: "esperienza" },
  { src: MEDIA_PATHS.gallery.esperienza[2], alt: "La terrazza del Nido al tramonto", category: "esperienza" },
  { src: MEDIA_PATHS.gallery.cucina[0], alt: "Crudo di pesce fresco", category: "cucina" },
  { src: MEDIA_PATHS.gallery.cucina[1], alt: "Carne alla brace", category: "cucina" },
  { src: MEDIA_PATHS.gallery.cucina[2], alt: "Pizza a lievitazione naturale", category: "cucina" },
];
