import React from "react";

export interface HeroProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  actions?: React.ReactNode;
  image?: React.ReactNode;
  align?: "left" | "center";
  size?: "medium" | "large";
  className?: string;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      title,
      subtitle,
      actions,
      image,
      align = "center",
      size = "large",
      className = "",
    },
    ref
  ) => {
    const sectionStyle: React.CSSProperties = {
      padding: size === "large" ? "120px 24px" : "80px 24px",
      position: "relative",
      overflow: "hidden",
    };

    const containerStyle: React.CSSProperties = {
      maxWidth: image ? "var(--spacing-page-max-width)" : "800px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: image ? "1fr 1fr" : "1fr",
      gap: "64px",
      alignItems: "center",
    };

    const contentStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
    };

    const titleStyle: React.CSSProperties = {
      fontSize: size === "large" ? "64px" : "48px",
      fontWeight: "var(--font-weight-semibold)",
      lineHeight: size === "large" ? "1.1" : "1.2",
      letterSpacing: "-0.022em",
      color: "var(--color-text-primary)",
      margin: 0,
    };

    const subtitleStyle: React.CSSProperties = {
      fontSize: size === "large" ? "var(--font-size-large)" : "var(--font-size-regular)",
      lineHeight: "var(--line-height-large)",
      color: "var(--color-text-tertiary)",
      maxWidth: "600px",
      margin: 0,
    };

    const actionsStyle: React.CSSProperties = {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "8px",
    };

    const imageContainerStyle: React.CSSProperties = {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    return (
      <section ref={ref} style={sectionStyle} className={className}>
        <div style={containerStyle}>
          <div style={contentStyle}>
            {typeof title === "string" ? (
              <h1 style={titleStyle}>{title}</h1>
            ) : (
              title
            )}

            {subtitle && (
              typeof subtitle === "string" ? (
                <p style={subtitleStyle}>{subtitle}</p>
              ) : (
                subtitle
              )
            )}

            {actions && <div style={actionsStyle}>{actions}</div>}
          </div>

          {image && <div style={imageContainerStyle}>{image}</div>}
        </div>
      </section>
    );
  }
);

Hero.displayName = "Hero";

export default Hero;
