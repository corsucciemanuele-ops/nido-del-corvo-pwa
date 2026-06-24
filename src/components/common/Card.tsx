import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  as?: "div" | "article" | "li";
}

export const Card = ({
  children,
  className = "",
  hover = false,
  onClick,
  as: Tag = "div",
}: CardProps) => {
  const hoverStyles = hover
    ? "transition-all duration-300 cursor-pointer " +
      "hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(23,21,18,0.12)]"
    : "";

  return (
    <Tag
      className={[
        "bg-nido-bianco rounded-xl overflow-hidden",
        "shadow-[0_4px_24px_rgba(23,21,18,0.06)]",
        hoverStyles,
        className,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

/* Sub-components for Card composition */
interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export const CardBody = ({ children, className = "" }: CardBodyProps) => (
  <div className={`p-5 md:p-6 ${className}`}>{children}</div>
);
