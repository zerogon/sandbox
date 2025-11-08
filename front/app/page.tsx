"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 510,
            lineHeight: "67.84px",
            letterSpacing: "-0.012em",
          }}
        >
          Linear Theme Demo
        </h1>
        <p
          style={{
            fontSize: "17px",
            color: "var(--color-text-tertiary)",
            lineHeight: "27.2px",
          }}
        >
          A component library based on Linear's design system
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/components"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-100 hover:-translate-y-0.5 hover:shadow-sm"
            style={{
              backgroundColor: "var(--color-brand-bg)",
              fontSize: "var(--font-size-regular)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            View Components
          </Link>
        </div>
      </div>
    </div>
  );
}
