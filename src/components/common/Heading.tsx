import type { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingSize = "display" | "xl" | "lg" | "md" | "sm" | "xs";

const TAG: Record<HeadingLevel, "h1" | "h2" | "h3" | "h4"> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
};

const SIZE: Record<HeadingSize, string> = {
  display: "text-5xl md:text-6xl lg:text-7xl leading-none tracking-[-0.02em]",
  xl: "text-4xl md:text-5xl lg:text-6xl leading-none tracking-[-0.02em]",
  lg: "text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight",
  md: "text-2xl md:text-3xl leading-snug tracking-tight",
  sm: "text-xl md:text-2xl leading-snug",
  xs: "text-lg md:text-xl leading-snug",
};

interface HeadingProps {
  level?: HeadingLevel;
  size?: HeadingSize;
  children: ReactNode;
  className?: string;
  serif?: boolean;
}

export const Heading = ({
  level = 2,
  size = "lg",
  children,
  className = "",
  serif = true,
}: HeadingProps) => {
  const Tag = TAG[level];

  return (
    <Tag
      className={[
        serif ? "font-heading font-light" : "font-body font-medium",
        "text-nido-marrone",
        SIZE[size],
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
};
