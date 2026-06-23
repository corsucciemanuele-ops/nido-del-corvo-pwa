// Phase 2: Section component
import type { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
  className?: string;
}

export const Section = ({ children, className = "" }: SectionProps) => {
  return <div className={className}>{children}</div>;
};
