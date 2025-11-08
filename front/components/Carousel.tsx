"use client";

import React from "react";

export interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      autoPlay = false,
      interval = 3000,
      showDots = true,
      showArrows = true,
      className = "",
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);

    const totalSlides = React.Children.count(children);

    const goToSlide = (index: number) => {
      if (index < 0) {
        setCurrentIndex(totalSlides - 1);
      } else if (index >= totalSlides) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(index);
      }
    };

    const goToPrevious = () => {
      goToSlide(currentIndex - 1);
    };

    const goToNext = () => {
      goToSlide(currentIndex + 1);
    };

    React.useEffect(() => {
      if (!autoPlay || isHovered) return;

      const timer = setInterval(() => {
        goToNext();
      }, interval);

      return () => clearInterval(timer);
    }, [currentIndex, autoPlay, isHovered, interval]);

    const containerStyle: React.CSSProperties = {
      position: "relative",
      width: "100%",
      overflow: "hidden",
      borderRadius: "var(--radius-12)",
    };

    const slidesContainerStyle: React.CSSProperties = {
      display: "flex",
      transition: "transform var(--transition-regular) var(--ease-out-cubic)",
      transform: `translateX(-${currentIndex * 100}%)`,
    };

    const slideStyle: React.CSSProperties = {
      minWidth: "100%",
      flex: "0 0 100%",
    };

    const arrowBaseStyle: React.CSSProperties = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "var(--color-bg-secondary)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--color-border-primary)",
      color: "var(--color-text-primary)",
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      opacity: 0.9,
      transition: "all var(--transition-quick)",
      zIndex: 10,
      fontSize: "20px",
      fontWeight: "var(--font-weight-bold)",
    };

    const leftArrowStyle: React.CSSProperties = {
      ...arrowBaseStyle,
      left: "16px",
    };

    const rightArrowStyle: React.CSSProperties = {
      ...arrowBaseStyle,
      right: "16px",
    };

    const dotsContainerStyle: React.CSSProperties = {
      position: "absolute",
      bottom: "16px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "8px",
      zIndex: 10,
    };

    const dotStyle = (isActive: boolean): React.CSSProperties => ({
      width: isActive ? "24px" : "8px",
      height: "8px",
      borderRadius: "var(--radius-full)",
      backgroundColor: isActive
        ? "var(--color-text-primary)"
        : "var(--color-text-quaternary)",
      cursor: "pointer",
      transition: "all var(--transition-quick)",
      opacity: isActive ? 1 : 0.5,
    });

    return (
      <div
        ref={ref}
        style={containerStyle}
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={slidesContainerStyle}>
          {React.Children.map(children, (child, index) => (
            <div key={index} style={slideStyle}>
              {child}
            </div>
          ))}
        </div>

        {showArrows && totalSlides > 1 && (
          <>
            <button
              style={leftArrowStyle}
              onClick={goToPrevious}
              aria-label="Previous slide"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-bg-tertiary)";
                e.currentTarget.style.borderColor = "var(--color-border-secondary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-bg-secondary)";
                e.currentTarget.style.borderColor = "var(--color-border-primary)";
              }}
            >
              ‹
            </button>
            <button
              style={rightArrowStyle}
              onClick={goToNext}
              aria-label="Next slide"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-bg-tertiary)";
                e.currentTarget.style.borderColor = "var(--color-border-secondary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-bg-secondary)";
                e.currentTarget.style.borderColor = "var(--color-border-primary)";
              }}
            >
              ›
            </button>
          </>
        )}

        {showDots && totalSlides > 1 && (
          <div style={dotsContainerStyle}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                style={dotStyle(index === currentIndex)}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export default Carousel;
