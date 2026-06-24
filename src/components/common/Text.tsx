import type { ReactNode, ElementType } from "react";

type TextVariant = "lead" | "body" | "small" | "muted" | "caption";

interface TextProps {
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const VARIANT: Record<TextVariant, string> = {
  lead: "text-lg md:text-xl text-nido-marrone/75 leading-relaxed font-light",
  body: "text-base text-nido-nero/65 leading-relaxed",
  small: "text-sm text-nido-nero/60 leading-relaxed",
  muted: "text-sm text-nido-nero/35",
  caption: "text-xs text-nido-nero/50 tracking-[0.1em] uppercase",
};

export const Text = ({
  variant = "body",
  children,
  className = "",
  as: Tag = "p",
}: TextProps) => {
  return (
    <Tag className={`font-body ${VARIANT[variant]} ${className}`}>
      {children}
    </Tag>
  );
};
