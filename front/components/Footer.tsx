import React from "react";
import Link from "next/link";

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  sections?: FooterSection[];
  copyright?: string;
  socialLinks?: { label: string; href: string; icon?: React.ReactNode }[];
  className?: string;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ sections = [], copyright, socialLinks = [], className = "" }, ref) => {
    const footerStyle: React.CSSProperties = {
      backgroundColor: "var(--color-bg-level-1)",
      borderTop: "1px solid var(--color-border-primary)",
      padding: "64px var(--spacing-page-padding-inline) 32px",
      marginTop: "auto",
    };

    const containerStyle: React.CSSProperties = {
      maxWidth: "var(--spacing-page-max-width)",
      margin: "0 auto",
    };

    const gridStyle: React.CSSProperties = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "48px",
      marginBottom: "48px",
    };

    const sectionTitleStyle: React.CSSProperties = {
      fontSize: "var(--font-size-small)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-text-primary)",
      marginBottom: "16px",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    };

    const linkListStyle: React.CSSProperties = {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    };

    const linkStyle: React.CSSProperties = {
      fontSize: "var(--font-size-regular)",
      color: "var(--color-text-tertiary)",
      textDecoration: "none",
      transition: "color var(--transition-quick)",
    };

    const bottomStyle: React.CSSProperties = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "24px",
      borderTop: "1px solid var(--color-border-primary)",
      flexWrap: "wrap",
      gap: "16px",
    };

    const copyrightStyle: React.CSSProperties = {
      fontSize: "var(--font-size-small)",
      color: "var(--color-text-quaternary)",
    };

    const socialListStyle: React.CSSProperties = {
      display: "flex",
      gap: "16px",
      listStyle: "none",
      padding: 0,
      margin: 0,
    };

    return (
      <footer ref={ref} style={footerStyle} className={className}>
        <div style={containerStyle}>
          {sections.length > 0 && (
            <div style={gridStyle}>
              {sections.map((section, index) => (
                <div key={index}>
                  <h3 style={sectionTitleStyle}>{section.title}</h3>
                  <ul style={linkListStyle}>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} style={linkStyle}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div style={bottomStyle}>
            <div style={copyrightStyle}>
              {copyright || `© ${new Date().getFullYear()} All rights reserved.`}
            </div>

            {socialLinks.length > 0 && (
              <ul style={socialListStyle}>
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <Link href={social.href} style={linkStyle}>
                      {social.icon || social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export default Footer;
