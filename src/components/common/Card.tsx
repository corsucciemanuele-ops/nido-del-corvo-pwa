// Phase 2: Card component
import type { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return <div className={className}>{children}</div>;
};
