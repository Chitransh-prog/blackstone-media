"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, FadeIn, containerStyle, FloatingStartButton } from "@/components/shared";

const SITE_KEY = "blackstone-media_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;

const VALUES = [
  {
    number: "01",
    title: "Always\nLearning",
    description:
      "We stay curious and keep growing. Every project is a chance to learn something new and push our craft further.",
  },
  {
    number: "02",
    title: "Innovative Problem\nSolving",
    description:
      "We find creative solutions to complex challenges, thinking outside the box to deliver work that stands out.",
  },
  {
    number: "03",
    title: "Meaningful\nConnections",
    description:
      "We build genuine relationships with our clients and each other, fostering a culture of trust and collaboration.",
  },
  {
    number: "04",
    title: "Balanced\nAmbition",
    description:
      "We are ambitious about our work while maintaining balance, ensuring we deliver excellence without burning out.",
  },
];

/* Hero */

function CultureHero() {
  return (
    <section
      style={{
        position: "relative",
        background: "#efefef",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          fontSize: "0.75rem",
          lineHeight: 1,
          letterSpacing: "0.093em",
          textTransform: "uppercase",
          color: "#000",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "7rem",
          padding: "1.5625rem 6.25rem",
          pointerEvents: "none",
        }}
      >
        Celebrating 13 years : 2013 - 2026
      </div>

      <div
        style={{
          ...containerStyle,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          paddingTop: "8rem",
          paddingBottom: "4rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
              lineHeight: 1.05,
              fontWeight: 400,
              color: "#000",
              maxWidth: "50ch",
            }}
          >
            Be part of a{" "}
            <em style={{ fontStyle: "italic" }}>great</em>{" "}
            <br />
            <em style={{ fontStyle: "italic" }}>team,</em> but work <br />
            from anywhere.
          </h2>
        </FadeIn>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <FadeIn delay={0.3}>
            <h1
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#000",
                lineHeight: 0.95,
              }}
            >
              Culture
            </h1>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "#000",
                  opacity: 0.6,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Great Place To Work
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background:
            "linear-gradient(to top, rgba(239,239,239,0.8), transparent)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

/* Values */

function ValuesSection() {
  return (
    <section
      style={{
        padding: "9.375rem 0 0",
        background: "#efefef",
        color: "#000",
      }}
    >
      <div style={containerStyle}>
        <FadeIn>
          <h3
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              color: "#000",
              marginBottom: "2rem",
              maxWidth: "40ch",
            }}
          >
            Why we love what we do, <em style={{ fontStyle: "italic" }}>even on a Monday.</em>
          </h3>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontSize: "clamp(3rem, 10.6vw, 10rem)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#000",
              marginBottom: "4rem",
            }}
          >
            <span style={{ display: "block" }}>Our</span>
            <span style={{ display: "block" }}>Values</span>
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {VALUES.map((value, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div
                style={{
                  backgroundColor: "hsla(0, 0%, 100%, 0.4)",
                  padding: "2.1875rem 2rem",
                  borderRadius: "10px 100px 10px 10px",
                  minHeight: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "2rem",
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  {value.number}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(1.875rem, 3.5vw, 3.5rem)",
                      whiteSpace: "pre-line",
                      lineHeight: 0.95,
                      marginBottom: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      lineHeight: 1.4,
                      color: "#666",
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CTA Section */

function CultureCTA() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "9.375rem 0",
        marginTop: "9.375rem",
      }}
    >
      <div style={containerStyle}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
          }}
        >
          <FadeIn>
            <p
              style={{
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "#fff",
                maxWidth: "20ch",
              }}
            >
              Have a new project you&apos;d like help with?
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link
              href="#"
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "2rem",
                padding: "1rem 2.5rem",
                fontSize: "1rem",
                color: "#fff",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background = "#fff";
                (e.target as HTMLAnchorElement).style.color = "#000";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = "transparent";
                (e.target as HTMLAnchorElement).style.color = "#fff";
              }}
            >
              Let&apos;s get{" "}
              <em style={{ fontStyle: "italic" }}>started</em>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* Page */

export default function CulturePage() {
  return (
    <main>
      <Header />
      <CultureHero />
      <ValuesSection />
      <CultureCTA />
      <Footer />
      <FloatingStartButton />
    </main>
  );
}
