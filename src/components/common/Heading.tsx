// Phase 2: Heading component
import type { ReactNode } from "react";

interface HeadingProps {
  children?: ReactNode;
  className?: string;
}

export const Heading = ({ children, className = "" }: HeadingProps) => {
  return <div className={className}>{children}</div>;
};
