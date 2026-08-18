"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SITE_KEY = "kota-co-uk_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;

const FOOTER_LOGOS = [
  { src: `${IMG}/dan-logo.png`, alt: "Digital Agency Network" },
  { src: `${IMG}/clutch-footer.svg`, alt: "Clutch" },
  { src: `${IMG}/awwwards-footer.svg`, alt: "Awwwards" },
  { src: `${IMG}/cssda-footer.svg`, alt: "CSSDA" },
];

function useIntersectionObserver(threshold = 0.1) {
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

function FadeIn({
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

const containerStyle: React.CSSProperties = {
  maxWidth: "calc(1400px + 15%)",
  margin: "0 auto",
  padding: "0 7%",
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link
            href="#"
            className="hire-us-desktop"
            style={{
              pointerEvents: "all",
              fontSize: "1.125rem",
              fontWeight: 400,
              padding: "0.95rem 1.35rem 1.05rem",
              background: "#000",
              borderRadius: "2.0625rem",
              color: "#fff",
              textDecoration: "none",
              display: "none",
            }}
          >
            Hire us
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            style={{
              pointerEvents: "all",
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
        </div>
      </header>

      <style jsx>{`
        @media (min-width: 768px) {
          .hire-us-desktop {
            display: inline-block !important;
          }
        }
      `}</style>

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
        {["Work", "Services", "About", "Blog"].map((item) => (
          <Link
            key={item}
            href="#"
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
            {item}
          </Link>
        ))}
        <Link
          href="#"
          style={{
            marginTop: "1rem",
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

function ContactHero() {
  return (
    <section
      style={{
        display: "flex",
        height: "100svh",
        minHeight: "100svh",
        position: "relative",
        background: "#efefef",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          ...containerStyle,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          paddingTop: "5.625rem",
        }}
      >
        <FadeIn>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              lineHeight: 0.95,
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              whiteSpace: "pre-line",
              color: "#000",
            }}
          >
            {`Good things\nhappen when\nyou say hey.`}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ marginTop: "3rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 75.91 75.65"
              style={{ width: "3rem", height: "3rem" }}
            >
              <path
                d="m13.65 67.65 61.93-62L69.92 0 8 61.99V.25H0v75.4h75.91v-8H13.65z"
                fill="#000"
                style={{ strokeWidth: 0 }}
              />
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactForm() {
  const interests = [
    "A new website",
    "Branding",
    "Motion graphics",
    "E-Commerce",
    "Development",
    "On-going support",
  ];

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (value: string) => {
    setSelectedInterests((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
    newsletter: false,
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section style={{ background: "#efefef", color: "#000", padding: "0 0 6rem" }}>
      <div style={containerStyle}>
        <FadeIn>
          <form onSubmit={handleSubmit}>
            <fieldset
              style={{
                border: "none",
                padding: 0,
                margin: 0,
                marginBottom: "1.5rem",
              }}
            >
              <legend
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                  color: "#000",
                }}
              >
                I am interested in :
              </legend>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {interests.map((interest) => (
                  <label
                    key={interest}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      value={interest}
                      checked={selectedInterests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                      style={{ display: "none" }}
                    />
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "1rem",
                        border: selectedInterests.includes(interest)
                          ? "2px solid #000"
                          : "2px solid rgba(0,0,0,0.2)",
                        borderRadius: "2rem",
                        padding: "0.5rem 1.25rem",
                        color: selectedInterests.includes(interest)
                          ? "#000"
                          : "rgba(0,0,0,0.5)",
                        background: selectedInterests.includes(interest)
                          ? "#fff"
                          : "transparent",
                        transition: "all 0.3s ease",
                        userSelect: "none",
                      }}
                    >
                      {interest}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="First name*"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={{
                  border: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.2)",
                  padding: "1rem 0",
                  fontSize: "1.125rem",
                  background: "transparent",
                  outline: "none",
                  color: "#000",
                }}
              />
              <input
                type="text"
                placeholder="Last name*"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={{
                  border: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.2)",
                  padding: "1rem 0",
                  fontSize: "1.125rem",
                  background: "transparent",
                  outline: "none",
                  color: "#000",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <input
                type="email"
                placeholder="Email*"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  border: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.2)",
                  padding: "1rem 0",
                  fontSize: "1.125rem",
                  background: "transparent",
                  outline: "none",
                  color: "#000",
                }}
              />
              <div>
                <input
                  type="text"
                  placeholder="Budget (£)"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  style={{
                    border: "none",
                    borderBottom: "1px solid rgba(0,0,0,0.2)",
                    padding: "1rem 0",
                    fontSize: "1.125rem",
                    background: "transparent",
                    outline: "none",
                    width: "100%",
                    color: "#000",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(0,0,0,0.4)",
                    marginTop: "0.5rem",
                  }}
                >
                  More info on minimum/typical budget sizes can be found{" "}
                  <Link href="#" style={{ textDecoration: "underline" }}>
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  border: "1px solid rgba(0,0,0,0.2)",
                  borderRadius: "0.5rem",
                  padding: "0.75rem 1rem",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.59 22.38"
                  style={{ width: "1rem", height: "1.25rem", flexShrink: 0 }}
                >
                  <path
                    fill="#000"
                    d="M13.86 7.15l-1.42-1.42-7.1 7.1c-1.17 1.18-1.15 3.09.03 4.26a3.006 3.006 0 004.23 0l8.52-8.52a5.022 5.022 0 00-7.1-7.1l-8.95 8.94-.02.02a7.007 7.007 0 000 9.9 7.007 7.007 0 009.9 0l.02-.02 6.11-6.1-1.42-1.42-6.11 6.1-.02.02a4.983 4.983 0 01-7.06-.05 4.986 4.986 0 010-7.01l.02-.02 8.95-8.94a3.015 3.015 0 014.26-.03c1.18 1.17 1.2 3.07.03 4.26l-.03.03-8.52 8.52c-.39.39-1.03.39-1.42 0s-.39-1.03 0-1.42l7.1-7.1z"
                  />
                </svg>
                <span style={{ fontSize: "1rem", color: "rgba(0,0,0,0.5)" }}>
                  Attachments
                </span>
              </div>
            </div>

            <input
              type="text"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid rgba(0,0,0,0.2)",
                padding: "1rem 0",
                fontSize: "1.125rem",
                background: "transparent",
                outline: "none",
                marginBottom: "2rem",
                color: "#000",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "0.875rem",
                  color: "rgba(0,0,0,0.6)",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  style={{
                    width: "1.125rem",
                    height: "1.125rem",
                    flexShrink: 0,
                    accentColor: "#000",
                  }}
                />
                I&apos;m happy to receive a monthly newsletter from KOTA
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "0.875rem",
                  color: "rgba(0,0,0,0.6)",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  checked={formData.privacy}
                  onChange={handleChange}
                  style={{
                    width: "1.125rem",
                    height: "1.125rem",
                    flexShrink: 0,
                    accentColor: "#000",
                  }}
                />
                I understand that KOTA will securely hold my data in accordance
                with their privacy policy.
              </label>
            </div>

            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "2rem",
                padding: "1rem 2rem",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <span>Submit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17.1 15.17"
                style={{ width: "1rem", height: "1rem" }}
              >
                <path
                  d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactDetails() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section style={{ background: "#efefef", color: "#000", padding: "6rem 0" }}>
      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2rem",
          }}
        >
          <FadeIn style={{ gridColumn: "span 7" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "3rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                    fontWeight: 400,
                    marginBottom: "1.5rem",
                    color: "#000",
                  }}
                >
                  London
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.6,
                    color: "#000",
                  }}
                >
                  KOTA
                  <br />
                  1-5 Clerkenwell Rd
                  <br />
                  London
                  <br />
                  EC1M 5PA
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                    fontWeight: 400,
                    marginBottom: "1.5rem",
                    color: "#000",
                  }}
                >
                  New York
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.6,
                    color: "#000",
                  }}
                >
                  KOTA
                  <br />
                  477 Madison Ave
                  <br />
                  Midtown Manhattan
                  <br />
                  6th Floor, NY 10022
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: "1.125rem",
                marginTop: "2.5rem",
                color: "#000",
              }}
            >
              <a
                href="tel:+44(0)2039510562"
                style={{ color: "#000", textDecoration: "none" }}
              >
                +44(0)20 3951 0562
              </a>
            </p>

            <p
              style={{
                fontSize: "0.875rem",
                marginTop: "2rem",
                color: "rgba(0,0,0,0.5)",
                lineHeight: 1.6,
              }}
            >
              Have a quick question you need answering?
              <br />
              Check out - FAQ&apos;s :{" "}
              <Link
                href="#"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                Working with KOTA
              </Link>
            </p>
          </FadeIn>

          <FadeIn delay={0.1} style={{ gridColumn: "span 5" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                { label: "General", email: "hello@kota.co.uk" },
                { label: "New business", email: "newbiz@kota.co.uk" },
                { label: "Careers", email: "careers@kota.co.uk" },
              ].map((item) => (
                <div key={item.email}>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "rgba(0,0,0,0.4)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <button
                    onClick={() => copyEmail(item.email)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      fontSize: "1.125rem",
                      color: "#000",
                      textDecoration: "none",
                      fontFamily: "inherit",
                      textAlign: "left",
                    }}
                  >
                    {item.email}
                    <span
                      style={{
                        fontSize: "0.75rem",
                        marginLeft: "0.5rem",
                        color: "rgba(0,0,0,0.4)",
                      }}
                    >
                      {copiedEmail === item.email
                        ? "Copied!"
                        : "Copy email address"}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function KotaverseCTA() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, rgba(99,60,201,0.3), rgba(59,131,146,0.2), rgba(203,36,204,0.3))",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        zIndex: 10,
        padding: "12rem 0",
      }}
    >
      <div style={{ ...containerStyle, position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center" }}>
          <FadeIn>
            <Link
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "2rem",
                padding: "0.875rem 2rem",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#fff",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#fff";
                (e.currentTarget as HTMLAnchorElement).style.color = "#000";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
            >
              Watch Now
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginTop: "1.5rem",
              }}
            >
              {["LinkedIn", "Facebook", "Instagram", "Bluesky"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  style={{
                    fontSize: "1.25rem",
                    color: "#fff",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  {social}
                  <svg
                    width="0.7rem"
                    height="0.7rem"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 11L11 1M11 1H3.5M11 1v7.5" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

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
              {["Contact", "FAQs", "Privacy Policy"].map((item) => (
                <Link
                  key={item}
                  href="#"
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
                  {item}
                </Link>
              ))}
            </div>
          </div>

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
                "Agencies",
                "SaaS and Tech",
                "B2B Transformation",
                "Healthcare",
                "Media & Entertainment",
                "Retail",
              ].map((sector) => (
                <Link
                  key={sector}
                  href="#"
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
                  {sector}
                </Link>
              ))}
            </div>
          </div>

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
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "1rem",
              }}
            >
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
                  (e.target as HTMLButtonElement).style.background =
                    "transparent";
                  (e.target as HTMLButtonElement).style.color = "#fff";
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

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
          <p style={{ fontSize: "1.25rem", color: "#fff" }}>&copy; KOTA 2026</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingStartButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 50 }}>
      <Link
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "#000",
          color: "#fff",
          borderRadius: "2rem",
          padding: "1rem 1.5rem",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          textDecoration: "none",
          transition: "background 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#333";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "#000";
        }}
      >
        Start your project
      </Link>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactDetails />
      <KotaverseCTA />
      <Footer />
      <FloatingStartButton />
    </main>
  );
}
