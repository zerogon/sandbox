import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "info";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant = "default", size = "medium", className = "", children, ...props },
    ref
  ) => {
    const baseStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-regular)",
      fontWeight: "var(--font-weight-medium)",
      borderRadius: "var(--radius-full)",
      whiteSpace: "nowrap",
    };

    const variants = {
      default: {
        backgroundColor: "var(--color-bg-tertiary)",
        color: "var(--color-text-secondary)",
      },
      primary: {
        backgroundColor: "var(--color-accent-tint)",
        color: "var(--color-accent)",
      },
      success: {
        backgroundColor: "rgba(76, 183, 130, 0.1)",
        color: "var(--color-green)",
      },
      warning: {
        backgroundColor: "rgba(242, 201, 76, 0.1)",
        color: "var(--color-yellow)",
      },
      danger: {
        backgroundColor: "rgba(235, 87, 87, 0.1)",
        color: "var(--color-red)",
      },
      info: {
        backgroundColor: "rgba(78, 167, 252, 0.1)",
        color: "var(--color-blue)",
      },
    };

    const sizes = {
      small: {
        padding: "2px 8px",
        fontSize: "var(--font-size-micro)",
      },
      medium: {
        padding: "4px 10px",
        fontSize: "var(--font-size-small)",
      },
      large: {
        padding: "6px 12px",
        fontSize: "var(--font-size-regular)",
      },
    };

    return (
      <span
        ref={ref}
        style={{
          ...baseStyle,
          ...variants[variant],
          ...sizes[size],
        }}
        className={className}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
