export interface SrcSetConfig {
  src: string;
  widths?: number[];
}

export const buildSrcSet = ({ src, widths = [640, 1280, 1920] }: SrcSetConfig): string => {
  return widths.map((w) => `${src}?w=${w} ${w}w`).join(", ");
};

export const buildSizes = (mobile = "100vw", tablet = "50vw", desktop = "33vw"): string => {
  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
};
