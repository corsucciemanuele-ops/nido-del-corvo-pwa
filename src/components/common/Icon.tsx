// Phase 2: Icon component
import type { ReactNode } from "react";

interface IconProps {
  children?: ReactNode;
  className?: string;
}

export const Icon = ({ children, className = "" }: IconProps) => {
  return <div className={className}>{children}</div>;
};
