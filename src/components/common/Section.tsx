import type { ReactNode, ElementType } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  container?: boolean;
  as?: ElementType;
}

export const Section = ({
  id,
  children,
  className = "",
  innerClassName = "",
  container = true,
  as: Tag = "section",
}: SectionProps) => {
  return (
    <Tag id={id} className={`py-16 md:py-24 ${className}`}>
      {container ? (
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${innerClassName}`}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  );
};
