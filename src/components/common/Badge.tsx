import type { ReactNode } from "react";

type BadgeVariant = "default" | "gold" | "dark" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT: Record<BadgeVariant, string> = {
  default: "bg-nido-avorio text-nido-marrone",
  gold: "bg-nido-oro text-nido-bianco",
  dark: "bg-nido-nero text-nido-avorio",
  outline: "bg-transparent border border-nido-oro text-nido-oro",
};

export const Badge = ({
  children,
  variant = "default",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={[
        "inline-flex items-center px-3 py-1 rounded-full",
        "font-body text-[10px] font-medium tracking-[0.15em] uppercase",
        VARIANT[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
};
