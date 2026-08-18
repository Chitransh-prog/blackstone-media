"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const FOOTER_LOGOS = [
  { src: `/sites/kota-co-uk_ddbd9d9c/root-dd72c4c6/images/dan-logo.png`, alt: "Digital Agency Network" },
  { src: `/sites/kota-co-uk_ddbd9d9c/root-dd72c4c6/images/clutch-footer.svg`, alt: "Clutch" },
  { src: `/sites/kota-co-uk_ddbd9d9c/root-dd72c4c6/images/awwwards-footer.svg`, alt: "Awwwards" },
  { src: `/sites/kota-co-uk_ddbd9d9c/root-dd72c4c6/images/cssda-footer.svg`, alt: "CSSDA" },
];

/* Hooks */

export function useIntersectionObserver(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/* FadeIn */

export function FadeIn({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* Container */

export const containerStyle: React.CSSProperties = {
  maxWidth: "calc(1400px + 15%)",
  margin: "0 auto",
  padding: "0 7%",
};

/* Header */

const NAV_ITEMS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar: logo + desktop nav */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.625rem 7vw",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <Link href="/" style={{ pointerEvents: "all" }}>
          <svg viewBox="0 0 90 90" width="60" height="60" fill="#000">
            <path d="M5 5h80v80H5V5zM0 90h90V0H0v90zm64.66-15.67l-5.15-16.61h-.1l-5.35 16.61H47.6l9.49-24.09h4.74l9.39 24.09h-6.56zm-39.77 0V55.67h-6.66v-5.43H37.6v5.43h-6.66v18.66h-6.06zm34.52-59.16c-3.94-.1-7.67 1.74-9.99 4.92-.64.81-1.15 1.7-1.52 2.67-.6 1.64-.9 3.38-.9 5.13v.05c.07 6.78 5.62 12.22 12.4 12.15h.56c6.88-.29 12.22-6.1 11.93-12.97-.28-6.69-5.79-11.96-12.48-11.94m.1 19.48c-3.94 0-6.56-3.38-6.56-7.18s2.62-6.97 6.46-6.97 6.46 3.38 6.46 7.07-2.52 7.08-6.36 7.08m-28.87 5.02l-6.46-10.35h-.1v10.35h-6.06v-24.1h6.06v10.87h.1l6.66-10.87h6.36l-7.87 12 8.38 12.1h-7.06z" />
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav
          className="header-nav-links"
          style={{ pointerEvents: "all", alignItems: "center" }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                color: "#000",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/start-your-project"
            className="header-hire-desktop"
            style={{
              fontSize: "1rem",
              fontWeight: 400,
              padding: "0.75rem 1.5rem",
              background: "#000",
              borderRadius: "2rem",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Hire us
          </Link>
        </nav>
      </header>

      {/* Mobile hamburger — own stacking context, always on top */}
      <button
        className="header-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        style={{
          position: "fixed",
          top: "1.625rem",
          right: "7vw",
          width: "3.25rem",
          height: "3.25rem",
          border: "2px solid #000",
          borderRadius: "100%",
          background: "#fff",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span
          style={{
            width: "24px",
            height: "2px",
            background: "#000",
            transform: menuOpen
              ? "translateY(0px) rotate(45deg)"
              : "translateY(-3px)",
            transition: "all 0.3s ease",
          }}
        />
        <span
          style={{
            width: "24px",
            height: "2px",
            background: "#000",
            transform: menuOpen
              ? "translateY(-2px) rotate(-45deg)"
              : "translateY(3px)",
            transition: "all 0.3s ease",
          }}
        />
      </button>

      {/* Mobile menu overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100svh",
          background: "#fff",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
              color: "#000",
              textDecoration: "none",
              fontFamily: "var(--font-syne)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/start-your-project"
          style={{
            border: "1px solid #000",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            fontSize: "1.25rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#000",
            textDecoration: "none",
          }}
          onClick={() => setMenuOpen(false)}
        >
          Hire us
        </Link>
      </div>
    </>
  );
}

/* Footer */

export function Footer() {
  return (
    <footer style={{ background: "#000", color: "#fff", padding: "5rem 0" }}>
      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
            gridColumn: "span 12",
            marginBottom: "4rem",
          }}
        >
          {/* Col 1 */}
          <div>
            <a
              href="mailto:hello@kota.co.uk"
              className="rainbow-text"
              style={{
                fontSize: "clamp(1.25rem, 7.1vw, 7.5rem)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "1.5rem",
                wordBreak: "break-all",
              }}
            >
              hello@kota.co.uk
            </a>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
              {[
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Bluesky", href: "https://bsky.app" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  style={{
                    fontSize: "1.25rem",
                    color: "#fff",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  {social.label}
                  <svg
                    width="0.7rem"
                    height="0.7rem"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transition: "transform 0.3s ease" }}
                  >
                    <path d="M1 11L11 1M11 1H3.5M11 1v7.5" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.25rem",
                fontWeight: 400,
              }}
            >
              Navigation
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3125rem" }}>
              {[
                { label: "Contact", href: "/contact" },
                { label: "FAQs", href: "/faqs" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid hsla(0,0%,100%,0.3)",
                    borderRadius: "50px",
                    padding: "0.625rem 1.4375rem",
                    textDecoration: "none",
                    margin: "0.3125rem 0.625rem 0.3125rem 0",
                    display: "inline-block",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.25rem",
                fontWeight: 400,
              }}
            >
              Our sectors
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3125rem" }}>
              {[
                { label: "Agencies", href: "/agency" },
                { label: "SaaS and Tech", href: "/b2b-tech-software-saas" },
                { label: "B2B Transformation", href: "/b2b-transformation" },
                { label: "Healthcare", href: "/healthcare" },
                { label: "Media & Entertainment", href: "/media-entertainment" },
                { label: "Retail", href: "/retail" },
              ].map((sector) => (
                <Link
                  key={sector.label}
                  href={sector.href}
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid hsla(0,0%,100%,0.3)",
                    borderRadius: "50px",
                    padding: "0.625rem 1.4375rem",
                    textDecoration: "none",
                    margin: "0.3125rem 0.625rem 0.3125rem 0",
                    display: "inline-block",
                  }}
                >
                  {sector.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.25rem",
                fontWeight: 400,
              }}
            >
              Newsletter
            </h4>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>
              Sign up to our newsletter
            </p>
            <div style={{ display: "flex" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "50px 0 0 50px",
                  padding: "0.8125rem 1.125rem",
                  fontSize: "1.25rem",
                  color: "#fff",
                  background: "transparent",
                  outline: "none",
                  flex: 1,
                  minWidth: 0,
                }}
              />
              <button
                style={{
                  border: "2px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  fontSize: "1.25rem",
                  padding: "0.8125rem 1.4375rem",
                  borderRadius: "0 50px 50px 0",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = "#fff";
                  (e.target as HTMLButtonElement).style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = "transparent";
                  (e.target as HTMLButtonElement).style.color = "#fff";
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gridColumn: "span 12",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {FOOTER_LOGOS.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={70}
                height={28}
                style={{ height: "2.25rem", width: "auto" }}
              />
            ))}
          </div>
          <p style={{ fontSize: "1.25rem", color: "#fff" }}>© KOTA 2026</p>
        </div>
      </div>
    </footer>
  );
}
