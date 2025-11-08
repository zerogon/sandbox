"use client";

import React from "react";
import Link from "next/link";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  items?: NavItem[];
  rightContent?: React.ReactNode;
  className?: string;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ logo, items = [], rightContent, className = "" }, ref) => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarStyle: React.CSSProperties = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "var(--header-height, 64px)",
      backgroundColor: isScrolled
        ? "var(--header-bg, rgba(11,11,11,0.8))"
        : "var(--color-bg-primary)",
      borderBottom: isScrolled
        ? "1px solid var(--header-border, rgba(255,255,255,0.08))"
        : "1px solid transparent",
      backdropFilter: isScrolled ? "blur(20px)" : "none",
      transition: "all var(--transition-quick)",
      zIndex: "var(--layer-header, 100)",
    };

    const containerStyle: React.CSSProperties = {
      maxWidth: "var(--spacing-page-max-width)",
      margin: "0 auto",
      padding: "0 var(--spacing-page-padding-inline)",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    };

    const logoStyle: React.CSSProperties = {
      fontSize: "var(--font-size-large)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-text-primary)",
      textDecoration: "none",
    };

    const navListStyle: React.CSSProperties = {
      display: "flex",
      gap: "32px",
      listStyle: "none",
      margin: 0,
      padding: 0,
      alignItems: "center",
    };

    const navLinkStyle: React.CSSProperties = {
      fontSize: "var(--font-size-regular)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-text-secondary)",
      textDecoration: "none",
      transition: "color var(--transition-quick)",
    };

    return (
      <nav ref={ref} style={navbarStyle} className={className}>
        <div style={containerStyle}>
          <div style={logoStyle}>{logo || "Logo"}</div>

          {items.length > 0 && (
            <ul style={navListStyle}>
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    style={navLinkStyle}
                    className="hover-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {rightContent && <div>{rightContent}</div>}
        </div>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
