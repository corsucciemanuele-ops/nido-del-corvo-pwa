import { useState } from "react";

type ObjectFit = "cover" | "contain" | "fill";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  objectFit?: ObjectFit;
}

const FIT: Record<ObjectFit, string> = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
};

export const Image = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  objectFit = "cover",
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-nido-avorio ${className}`}
      style={{ width, height }}
    >
      {/* Skeleton pulse while loading */}
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-nido-avorio" />
      )}

      {error ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-body text-xs text-nido-sabbia">
            Immagine non disponibile
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full transition-opacity duration-500 ${FIT[objectFit]} ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};
