// Phase 2: Image component
import type { ReactNode } from "react";

interface ImageProps {
  children?: ReactNode;
  className?: string;
}

export const Image = ({ children, className = "" }: ImageProps) => {
  return <div className={className}>{children}</div>;
};
