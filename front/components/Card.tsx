import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  padding?: "none" | "small" | "medium" | "large";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      hoverable = false,
      padding = "medium",
      className = "",
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const paddingValues = {
      none: "0",
      small: "12px",
      medium: "20px",
      large: "32px",
    };

    const baseStyle: React.CSSProperties = {
      backgroundColor: "var(--color-bg-secondary)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--color-border-primary)",
      borderRadius: "var(--radius-12)",
      padding: paddingValues[padding],
      transition: "all var(--transition-quick)",
    };

    const hoverStyle: React.CSSProperties =
      hoverable && isHovered
        ? {
            borderColor: "var(--color-border-secondary)",
            transform: "translateY(-2px)",
            boxShadow: "var(--shadow-low)",
          }
        : {};

    return (
      <div
        ref={ref}
        style={{ ...baseStyle, ...hoverStyle }}
        className={className}
        onMouseEnter={() => hoverable && setIsHovered(true)}
        onMouseLeave={() => hoverable && setIsHovered(false)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
