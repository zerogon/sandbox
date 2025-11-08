import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = "", ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const containerStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%",
    };

    const labelStyle: React.CSSProperties = {
      fontSize: "var(--font-size-small)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-text-secondary)",
    };

    const inputStyle: React.CSSProperties = {
      width: "100%",
      padding: "10px 12px",
      fontSize: "var(--font-size-regular)",
      fontFamily: "var(--font-regular)",
      color: "var(--color-text-primary)",
      backgroundColor: "var(--color-bg-secondary)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: error
        ? "var(--color-red)"
        : isFocused
        ? "var(--color-accent)"
        : "var(--color-border-primary)",
      borderRadius: "var(--radius-8)",
      outline: "none",
      transition: "all var(--transition-quick)",
    };

    const helperStyle: React.CSSProperties = {
      fontSize: "var(--font-size-small)",
      color: error ? "var(--color-red)" : "var(--color-text-tertiary)",
    };

    return (
      <div style={containerStyle} className={className}>
        {label && <label style={labelStyle}>{label}</label>}
        <input
          ref={ref}
          style={inputStyle}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {(error || helperText) && (
          <span style={helperStyle}>{error || helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
