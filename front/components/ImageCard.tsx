import React from "react";

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string | React.ReactNode;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  badge?: React.ReactNode;
  footer?: React.ReactNode;
  aspectRatio?: "square" | "video" | "portrait";
  hoverable?: boolean;
  imagePosition?: "top" | "left";
}

const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
  (
    {
      image,
      title,
      description,
      badge,
      footer,
      aspectRatio = "video",
      hoverable = true,
      imagePosition = "top",
      className = "",
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const aspectRatios = {
      square: "1 / 1",
      video: "16 / 9",
      portrait: "3 / 4",
    };

    const cardStyle: React.CSSProperties = {
      backgroundColor: "var(--color-bg-secondary)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: isHovered && hoverable
        ? "var(--color-border-secondary)"
        : "var(--color-border-primary)",
      borderRadius: "var(--radius-12)",
      overflow: "hidden",
      transition: "all var(--transition-quick)",
      cursor: hoverable ? "pointer" : "default",
      transform: isHovered && hoverable ? "translateY(-4px)" : "translateY(0)",
      boxShadow: isHovered && hoverable ? "var(--shadow-medium)" : "none",
      display: imagePosition === "left" ? "flex" : "block",
    };

    const imageContainerStyle: React.CSSProperties = {
      position: "relative",
      width: imagePosition === "left" ? "40%" : "100%",
      aspectRatio: aspectRatios[aspectRatio],
      overflow: "hidden",
      backgroundColor: "var(--color-bg-tertiary)",
    };

    const imageStyle: React.CSSProperties = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };

    const contentStyle: React.CSSProperties = {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      flex: imagePosition === "left" ? "1" : "initial",
    };

    const badgeContainerStyle: React.CSSProperties = {
      position: "absolute",
      top: "12px",
      right: "12px",
      zIndex: 1,
    };

    const titleStyle: React.CSSProperties = {
      fontSize: "var(--font-size-large)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-text-primary)",
      lineHeight: "var(--line-height-small)",
      margin: 0,
    };

    const descriptionStyle: React.CSSProperties = {
      fontSize: "var(--font-size-regular)",
      color: "var(--color-text-tertiary)",
      lineHeight: "var(--line-height-regular)",
      margin: 0,
    };

    const footerStyle: React.CSSProperties = {
      marginTop: "auto",
      paddingTop: "12px",
      borderTop: footer ? "1px solid var(--color-border-primary)" : "none",
    };

    return (
      <div
        ref={ref}
        style={cardStyle}
        className={className}
        onMouseEnter={() => hoverable && setIsHovered(true)}
        onMouseLeave={() => hoverable && setIsHovered(false)}
        {...props}
      >
        <div style={imageContainerStyle}>
          {typeof image === "string" ? (
            <img src={image} alt={typeof title === "string" ? title : ""} style={imageStyle} />
          ) : (
            image
          )}
          {badge && <div style={badgeContainerStyle}>{badge}</div>}
        </div>

        {(title || description || footer) && (
          <div style={contentStyle}>
            {title && (
              typeof title === "string" ? (
                <h3 style={titleStyle}>{title}</h3>
              ) : (
                title
              )
            )}

            {description && (
              typeof description === "string" ? (
                <p style={descriptionStyle}>{description}</p>
              ) : (
                description
              )
            )}

            {footer && <div style={footerStyle}>{footer}</div>}
          </div>
        )}
      </div>
    );
  }
);

ImageCard.displayName = "ImageCard";

export default ImageCard;
