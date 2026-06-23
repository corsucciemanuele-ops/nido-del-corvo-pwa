// Phase 2: Text component
import type { ReactNode } from "react";

interface TextProps {
  children?: ReactNode;
  className?: string;
}

export const Text = ({ children, className = "" }: TextProps) => {
  return <div className={className}>{children}</div>;
};
