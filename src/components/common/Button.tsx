import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "white"
  | "whiteOutline"
  | "whiteGhost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

const VARIANT: Record<ButtonVariant, string> = {
  // Standard (light bg)
  primary:
    "bg-nido-oro text-nido-bianco border border-nido-oro " +
    "hover:bg-nido-marrone hover:border-nido-marrone",
  secondary:
    "bg-transparent text-nido-oro border border-nido-oro " +
    "hover:bg-nido-oro hover:text-nido-bianco",
  ghost:
    "bg-transparent text-nido-marrone border border-transparent " +
    "hover:text-nido-oro",
  // Dark bg contexts (Hero, FishDay)
  white:
    "bg-white text-nido-marrone border border-white " +
    "hover:bg-nido-bianco",
  whiteOutline:
    "bg-transparent text-white border border-white/60 " +
    "hover:bg-white hover:text-nido-marrone",
  whiteGhost:
    "bg-transparent text-white/70 border border-transparent " +
    "hover:text-white",
};

const SIZE: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-[10px] tracking-[0.15em]",
  md: "px-7 py-3 text-[10px] tracking-[0.15em]",
  lg: "px-9 py-4 text-xs tracking-[0.15em]",
};

export const Button = ({
  variant = "primary",
  size = "md",
  href,
  external,
  disabled,
  onClick,
  children,
  className = "",
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) => {
  const base = [
    "inline-flex items-center justify-center gap-2 rounded-full",
    "font-body font-medium uppercase transition-all duration-200 select-none",
    VARIANT[variant],
    SIZE[size],
    disabled ? "opacity-40 pointer-events-none" : "cursor-pointer",
    className,
  ].join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={base}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={base}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
