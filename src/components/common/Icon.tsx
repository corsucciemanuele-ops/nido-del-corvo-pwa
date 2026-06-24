import type { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
}

export const Icon = ({
  icon: IconComponent,
  size = 20,
  strokeWidth = 1.5,
  className = "",
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
}: IconProps) => {
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden ?? !ariaLabel}
    />
  );
};
