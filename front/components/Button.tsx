import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "medium", className = "", children, ...props },
    ref
  ) => {
    const baseStyles = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-regular)",
      fontWeight: "var(--font-weight-medium)",
      borderRadius: "var(--radius-8)",
      transition: "all var(--transition-quick)",
      cursor: props.disabled ? "not-allowed" : "pointer",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "transparent",
      opacity: props.disabled ? 0.5 : 1,
    };

    const variants = {
      primary: {
        backgroundColor: "var(--color-brand-bg)",
        color: "var(--color-brand-text)",
      },
      secondary: {
        backgroundColor: "var(--color-bg-tertiary)",
        color: "var(--color-text-primary)",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "var(--color-text-secondary)",
        borderColor: "var(--color-border-primary)",
      },
      danger: {
        backgroundColor: "var(--color-red)",
        color: "var(--color-brand-text)",
      },
    };

    const sizes = {
      small: {
        padding: "6px 12px",
        fontSize: "var(--font-size-small)",
      },
      medium: {
        padding: "10px 16px",
        fontSize: "var(--font-size-regular)",
      },
      large: {
        padding: "14px 24px",
        fontSize: "var(--font-size-large)",
      },
    };

    const [isHovered, setIsHovered] = React.useState(false);

    const hoverStyles =
      isHovered && !props.disabled
        ? {
            transform: "translateY(-1px)",
            boxShadow: "var(--shadow-low)",
          }
        : {};

    return (
      <button
        ref={ref}
        style={{
          ...baseStyles,
          ...variants[variant],
          ...sizes[size],
          ...hoverStyles,
        }}
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
