// Phase 2: Button component
import type { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

export const Button = ({ children, className = "" }: ButtonProps) => {
  return <div className={className}>{children}</div>;
};
