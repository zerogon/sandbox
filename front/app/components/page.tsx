"use client";

import React from "react";
import Link from "next/link";
import {
  Button,
  Input,
  Card,
  Badge,
  Select,
  Textarea,
  Navbar,
  Footer,
  Hero,
  ImageCard,
  Carousel,
} from "@/components";

export default function ComponentsPage() {
  const [inputValue, setInputValue] = React.useState("");
  const [textareaValue, setTextareaValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("option1");

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-bg-primary)",
        padding: "var(--spacing-page-padding-block) var(--spacing-page-padding-inline)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--spacing-page-max-width)",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <h1
              style={{
                fontSize: "var(--font-size-title1)",
                fontWeight: "var(--font-weight-semibold)",
                letterSpacing: "-0.012em",
                lineHeight: "1.2",
              }}
            >
              Component Library
            </h1>
            <Link
              href="/"
              style={{
                color: "var(--color-link-primary)",
                fontSize: "var(--font-size-regular)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              ← Back to Home
            </Link>
          </div>
          <p
            style={{
              fontSize: "var(--font-size-large)",
              color: "var(--color-text-tertiary)",
              lineHeight: "var(--line-height-large)",
            }}
          >
            A comprehensive design system based on Linear's visual language
          </p>
        </div>

        {/* Color Palette Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Color Palette
          </h2>
          <Card padding="large">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                { name: "Primary", color: "var(--color-brand-bg)" },
                { name: "Accent", color: "var(--color-accent)" },
                { name: "Red", color: "var(--color-red)" },
                { name: "Orange", color: "var(--color-orange)" },
                { name: "Yellow", color: "var(--color-yellow)" },
                { name: "Green", color: "var(--color-green)" },
                { name: "Blue", color: "var(--color-blue)" },
                { name: "Indigo", color: "var(--color-indigo)" },
              ].map((item) => (
                <div key={item.name}>
                  <div
                    style={{
                      width: "100%",
                      height: "80px",
                      backgroundColor: item.color,
                      borderRadius: "var(--radius-8)",
                      marginBottom: "8px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "var(--font-size-small)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Buttons Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Buttons
          </h2>
          <Card padding="large">
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Variants */}
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-regular)",
                    fontWeight: "var(--font-weight-semibold)",
                    marginBottom: "12px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Variants
                </h3>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="danger">Danger Button</Button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-regular)",
                    fontWeight: "var(--font-weight-semibold)",
                    marginBottom: "12px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Sizes
                </h3>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
                  <Button size="small">Small</Button>
                  <Button size="medium">Medium</Button>
                  <Button size="large">Large</Button>
                </div>
              </div>

              {/* States */}
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-regular)",
                    fontWeight: "var(--font-weight-semibold)",
                    marginBottom: "12px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  States
                </h3>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Badges Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Badges
          </h2>
          <Card padding="large">
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Variants */}
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-regular)",
                    fontWeight: "var(--font-weight-semibold)",
                    marginBottom: "12px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Variants
                </h3>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-regular)",
                    fontWeight: "var(--font-weight-semibold)",
                    marginBottom: "12px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Sizes
                </h3>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                  <Badge size="small" variant="primary">
                    Small
                  </Badge>
                  <Badge size="medium" variant="primary">
                    Medium
                  </Badge>
                  <Badge size="large" variant="primary">
                    Large
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Form Inputs Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Form Inputs
          </h2>
          <Card padding="large">
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Input */}
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-regular)",
                    fontWeight: "var(--font-weight-semibold)",
                    marginBottom: "12px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Input
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "16px",
                  }}
                >
                  <Input
                    label="Username"
                    placeholder="Enter your username"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    helperText="This is a helper text"
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    error="This field is required"
                  />
                </div>
              </div>

              {/* Select */}
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-regular)",
                    fontWeight: "var(--font-weight-semibold)",
                    marginBottom: "12px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Select
                </h3>
                <div style={{ maxWidth: "400px" }}>
                  <Select
                    label="Choose an option"
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                    options={[
                      { value: "option1", label: "Option 1" },
                      { value: "option2", label: "Option 2" },
                      { value: "option3", label: "Option 3" },
                    ]}
                  />
                </div>
              </div>

              {/* Textarea */}
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-regular)",
                    fontWeight: "var(--font-weight-semibold)",
                    marginBottom: "12px",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  Textarea
                </h3>
                <Textarea
                  label="Description"
                  placeholder="Enter your description..."
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                  helperText="Maximum 500 characters"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Cards Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Cards
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            <Card>
              <h3
                style={{
                  fontSize: "var(--font-size-title3)",
                  fontWeight: "var(--font-weight-semibold)",
                  marginBottom: "8px",
                }}
              >
                Basic Card
              </h3>
              <p
                style={{
                  fontSize: "var(--font-size-regular)",
                  color: "var(--color-text-tertiary)",
                  lineHeight: "var(--line-height-regular)",
                }}
              >
                This is a basic card component with medium padding.
              </p>
            </Card>

            <Card hoverable>
              <h3
                style={{
                  fontSize: "var(--font-size-title3)",
                  fontWeight: "var(--font-weight-semibold)",
                  marginBottom: "8px",
                }}
              >
                Hoverable Card
              </h3>
              <p
                style={{
                  fontSize: "var(--font-size-regular)",
                  color: "var(--color-text-tertiary)",
                  lineHeight: "var(--line-height-regular)",
                }}
              >
                Hover over this card to see the effect.
              </p>
            </Card>

            <Card padding="large">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "var(--font-size-title3)",
                      fontWeight: "var(--font-weight-semibold)",
                    }}
                  >
                    Card with Badge
                  </h3>
                  <Badge variant="success">Active</Badge>
                </div>
                <p
                  style={{
                    fontSize: "var(--font-size-regular)",
                    color: "var(--color-text-tertiary)",
                    lineHeight: "var(--line-height-regular)",
                  }}
                >
                  This card combines multiple components together.
                </p>
                <div style={{ marginTop: "8px" }}>
                  <Button size="small" variant="ghost">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Typography Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Typography
          </h2>
          <Card padding="large">
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <h1
                  style={{
                    fontSize: "64px",
                    fontWeight: 510,
                    lineHeight: "67.84px",
                    letterSpacing: "-0.012em",
                    marginBottom: "8px",
                  }}
                >
                  Heading 1
                </h1>
                <code
                  style={{
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-text-tertiary)",
                    fontFamily: "var(--font-monospace)",
                  }}
                >
                  64px / 510 / -0.012em
                </code>
              </div>

              <div>
                <h2
                  style={{
                    fontSize: "56px",
                    fontWeight: 538,
                    lineHeight: "61.6px",
                    letterSpacing: "-0.012em",
                    marginBottom: "8px",
                  }}
                >
                  Heading 2
                </h2>
                <code
                  style={{
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-text-tertiary)",
                    fontFamily: "var(--font-monospace)",
                  }}
                >
                  56px / 538 / -0.012em
                </code>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: 510,
                    lineHeight: "28px",
                    letterSpacing: "-0.012em",
                    marginBottom: "8px",
                  }}
                >
                  Heading 3
                </h3>
                <code
                  style={{
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-text-tertiary)",
                    fontFamily: "var(--font-monospace)",
                  }}
                >
                  21px / 510 / -0.012em
                </code>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "var(--font-size-regular)",
                    lineHeight: "var(--line-height-regular)",
                    color: "var(--color-text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  Body text - Regular
                </p>
                <code
                  style={{
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-text-tertiary)",
                    fontFamily: "var(--font-monospace)",
                  }}
                >
                  0.9375rem / 1.6
                </code>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "var(--font-size-small)",
                    lineHeight: "var(--line-height-small)",
                    color: "var(--color-text-secondary)",
                    marginBottom: "8px",
                  }}
                >
                  Small text
                </p>
                <code
                  style={{
                    fontSize: "var(--font-size-small)",
                    color: "var(--color-text-tertiary)",
                    fontFamily: "var(--font-monospace)",
                  }}
                >
                  0.8125rem / calc(21/14)
                </code>
              </div>
            </div>
          </Card>
        </section>

        {/* Navbar Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Navbar
          </h2>
          <Card padding="none">
            <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
              <Navbar
                logo={
                  <span
                    style={{
                      fontSize: "var(--font-size-large)",
                      fontWeight: "var(--font-weight-bold)",
                    }}
                  >
                    Linear
                  </span>
                }
                items={[
                  { label: "Product", href: "#" },
                  { label: "Features", href: "#" },
                  { label: "Pricing", href: "#" },
                  { label: "Company", href: "#" },
                ]}
                rightContent={
                  <div style={{ display: "flex", gap: "12px" }}>
                    <Button variant="ghost" size="small">
                      Sign In
                    </Button>
                    <Button variant="primary" size="small">
                      Get Started
                    </Button>
                  </div>
                }
              />
              <div
                style={{
                  padding: "120px 24px 24px",
                  textAlign: "center",
                  color: "var(--color-text-tertiary)",
                }}
              >
                <p>Scroll down to see the navbar style change</p>
                <div style={{ height: "300px" }} />
              </div>
            </div>
          </Card>
        </section>

        {/* Hero Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Hero
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Large Centered Hero */}
            <Card padding="none">
              <Hero
                size="large"
                align="center"
                title="Build products faster with Linear"
                subtitle="The issue tracking tool you'll enjoy using. Linear helps thousands of high-impact product teams streamline issues, sprints, and product roadmaps."
                actions={
                  <>
                    <Button variant="primary" size="large">
                      Get Started
                    </Button>
                    <Button variant="ghost" size="large">
                      View Demo
                    </Button>
                  </>
                }
              />
            </Card>

            {/* Medium Left-Aligned Hero with Image */}
            <Card padding="none">
              <Hero
                size="medium"
                align="left"
                title="Meet Linear Mobile"
                subtitle="Stay on top of your work from anywhere. Linear Mobile brings the full power of Linear to your pocket."
                actions={
                  <Button variant="primary">Download App</Button>
                }
                image={
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      backgroundColor: "var(--color-bg-tertiary)",
                      borderRadius: "var(--radius-12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-text-tertiary)",
                    }}
                  >
                    Image Placeholder
                  </div>
                }
              />
            </Card>
          </div>
        </section>

        {/* Footer Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Footer
          </h2>
          <Card padding="none">
            <Footer
              sections={[
                {
                  title: "Product",
                  links: [
                    { label: "Features", href: "#" },
                    { label: "Pricing", href: "#" },
                    { label: "Changelog", href: "#" },
                    { label: "Docs", href: "#" },
                  ],
                },
                {
                  title: "Company",
                  links: [
                    { label: "About", href: "#" },
                    { label: "Blog", href: "#" },
                    { label: "Careers", href: "#" },
                    { label: "Customers", href: "#" },
                  ],
                },
                {
                  title: "Resources",
                  links: [
                    { label: "Community", href: "#" },
                    { label: "Contact", href: "#" },
                    { label: "Support", href: "#" },
                    { label: "Status", href: "#" },
                  ],
                },
                {
                  title: "Legal",
                  links: [
                    { label: "Privacy", href: "#" },
                    { label: "Terms", href: "#" },
                    { label: "Security", href: "#" },
                  ],
                },
              ]}
              copyright="© 2024 Linear Theme Demo. All rights reserved."
              socialLinks={[
                { label: "Twitter", href: "#" },
                { label: "GitHub", href: "#" },
                { label: "LinkedIn", href: "#" },
              ]}
            />
          </Card>
        </section>

        {/* Image Cards Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Image Cards
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Grid of cards */}
            <div>
              <h3
                style={{
                  fontSize: "var(--font-size-regular)",
                  fontWeight: "var(--font-weight-semibold)",
                  marginBottom: "16px",
                  color: "var(--color-text-secondary)",
                }}
              >
                Card Grid (Top Image)
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "24px",
                }}
              >
                <ImageCard
                  image={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, var(--color-indigo) 0%, var(--color-blue) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "24px",
                      }}
                    >
                      1
                    </div>
                  }
                  title="Featured Project"
                  description="A comprehensive design system for modern web applications."
                  badge={<Badge variant="primary">New</Badge>}
                  footer={
                    <div style={{ display: "flex", gap: "8px" }}>
                      <Badge size="small" variant="info">
                        Design
                      </Badge>
                      <Badge size="small" variant="success">
                        Development
                      </Badge>
                    </div>
                  }
                />

                <ImageCard
                  image={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, var(--color-green) 0%, var(--color-yellow) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "24px",
                      }}
                    >
                      2
                    </div>
                  }
                  title="Mobile App"
                  description="Native mobile experience with React Native and Expo."
                  aspectRatio="square"
                  footer={
                    <Button variant="ghost" size="small">
                      View Details
                    </Button>
                  }
                />

                <ImageCard
                  image={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, var(--color-orange) 0%, var(--color-red) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "24px",
                      }}
                    >
                      3
                    </div>
                  }
                  title="Dashboard"
                  description="Analytics dashboard with real-time data visualization."
                  badge={<Badge variant="warning">Beta</Badge>}
                />
              </div>
            </div>

            {/* Horizontal cards */}
            <div>
              <h3
                style={{
                  fontSize: "var(--font-size-regular)",
                  fontWeight: "var(--font-weight-semibold)",
                  marginBottom: "16px",
                  color: "var(--color-text-secondary)",
                }}
              >
                Horizontal Layout (Left Image)
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <ImageCard
                  imagePosition="left"
                  aspectRatio="square"
                  image={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, var(--color-indigo) 0%, var(--color-accent) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      Blog
                    </div>
                  }
                  title="Getting Started with Linear"
                  description="Learn how to set up your workspace and start managing projects effectively with Linear's powerful features."
                  footer={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "var(--font-size-small)",
                        color: "var(--color-text-quaternary)",
                      }}
                    >
                      <span>5 min read</span>
                      <span>Dec 10, 2024</span>
                    </div>
                  }
                />

                <ImageCard
                  imagePosition="left"
                  aspectRatio="square"
                  image={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, var(--color-green) 0%, var(--color-blue) 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      Guide
                    </div>
                  }
                  title="Best Practices for Issue Tracking"
                  description="Discover proven strategies for organizing and prioritizing your team's work with smart labeling and filtering."
                  badge={<Badge variant="success">Popular</Badge>}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "var(--font-size-title2)",
              fontWeight: "var(--font-weight-semibold)",
              marginBottom: "24px",
              letterSpacing: "-0.012em",
            }}
          >
            Carousel
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Auto-play carousel */}
            <div>
              <h3
                style={{
                  fontSize: "var(--font-size-regular)",
                  fontWeight: "var(--font-weight-semibold)",
                  marginBottom: "16px",
                  color: "var(--color-text-secondary)",
                }}
              >
                Auto-play Carousel
              </h3>
              <Carousel autoPlay interval={4000}>
                {[
                  { bg: "linear-gradient(135deg, var(--color-indigo) 0%, var(--color-blue) 100%)", title: "Slide 1", subtitle: "Auto-playing every 4 seconds" },
                  { bg: "linear-gradient(135deg, var(--color-green) 0%, var(--color-yellow) 100%)", title: "Slide 2", subtitle: "Hover to pause" },
                  { bg: "linear-gradient(135deg, var(--color-orange) 0%, var(--color-red) 100%)", title: "Slide 3", subtitle: "Use arrows to navigate" },
                ].map((slide, index) => (
                  <div
                    key={index}
                    style={{
                      width: "100%",
                      height: "400px",
                      background: slide.bg,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                      color: "white",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "var(--font-size-title1)",
                        fontWeight: "var(--font-weight-bold)",
                        margin: 0,
                      }}
                    >
                      {slide.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "var(--font-size-large)",
                        margin: 0,
                      }}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Manual carousel with cards */}
            <div>
              <h3
                style={{
                  fontSize: "var(--font-size-regular)",
                  fontWeight: "var(--font-weight-semibold)",
                  marginBottom: "16px",
                  color: "var(--color-text-secondary)",
                }}
              >
                Card Carousel (Manual)
              </h3>
              <Carousel autoPlay={false} showDots={true} showArrows={true}>
                {[
                  {
                    title: "Project Management",
                    description: "Streamline your workflow with powerful project management tools.",
                    gradient: "linear-gradient(135deg, var(--color-indigo) 0%, var(--color-blue) 100%)",
                  },
                  {
                    title: "Team Collaboration",
                    description: "Work together seamlessly with real-time updates and notifications.",
                    gradient: "linear-gradient(135deg, var(--color-green) 0%, var(--color-blue) 100%)",
                  },
                  {
                    title: "Analytics & Insights",
                    description: "Make data-driven decisions with comprehensive analytics.",
                    gradient: "linear-gradient(135deg, var(--color-orange) 0%, var(--color-yellow) 100%)",
                  },
                  {
                    title: "Integrations",
                    description: "Connect with your favorite tools and services.",
                    gradient: "linear-gradient(135deg, var(--color-red) 0%, var(--color-orange) 100%)",
                  },
                ].map((item, index) => (
                  <div key={index} style={{ padding: "24px" }}>
                    <Card padding="large">
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
                          background: item.gradient,
                          borderRadius: "var(--radius-8)",
                          marginBottom: "24px",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "var(--font-size-title2)",
                          fontWeight: "var(--font-weight-semibold)",
                          marginBottom: "12px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "var(--font-size-regular)",
                          color: "var(--color-text-tertiary)",
                          lineHeight: "var(--line-height-regular)",
                          marginBottom: "24px",
                        }}
                      >
                        {item.description}
                      </p>
                      <Button variant="primary">Learn More</Button>
                    </Card>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
