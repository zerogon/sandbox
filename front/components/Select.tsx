import React from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", ...props }, ref) => {
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

    const selectStyle: React.CSSProperties = {
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
      cursor: "pointer",
    };

    const errorStyle: React.CSSProperties = {
      fontSize: "var(--font-size-small)",
      color: "var(--color-red)",
    };

    return (
      <div style={containerStyle} className={className}>
        {label && <label style={labelStyle}>{label}</label>}
        <select
          ref={ref}
          style={selectStyle}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span style={errorStyle}>{error}</span>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
