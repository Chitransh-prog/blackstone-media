"use client";

import Link from "next/link";
import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";

export default function BrandPulseResults() {
  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      <Header />

      {/* Results Hero */}
      <section
        style={{
          background: "#efefef",
          color: "#000",
          minHeight: "50svh",
          display: "flex",
          alignItems: "center",
          paddingTop: "8rem",
          paddingBottom: "4rem",
        }}
      >
        <div style={containerStyle}>
          <FadeIn>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                lineHeight: 1,
                fontWeight: 400,
                color: "#000",
                marginBottom: "2rem",
              }}
            >
              Your Brand Pulse Results
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.5,
                color: "rgba(0,0,0,0.6)",
                maxWidth: "40ch",
                marginBottom: "2rem",
              }}
            >
              Here&apos;s how your brand stacks up across the five key pillars.
              Review your scorecard and discover opportunities for growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Scorecard */}
      <section style={{ background: "#000", color: "#fff", padding: "6rem 0" }}>
        <div style={containerStyle}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p
                style={{
                  fontSize: "clamp(5rem, 8vw, 8rem)",
                  fontWeight: 400,
                  lineHeight: 1,
                  background: "linear-gradient(90deg, #633cc9, #3b8392, #cb24cc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "1rem",
                }}
              >
                72%
              </p>
              <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.5)" }}>
                Overall Brand Health Score
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Brand Strategy & Positioning", score: 80, color: "#633cc9" },
              { title: "Visual Identity & Design", score: 75, color: "#3b8392" },
              { title: "Tone of Voice & Messaging", score: 65, color: "#cb24cc" },
              { title: "Digital Presence & Experience", score: 70, color: "#633cc9" },
              { title: "Brand Culture & Alignment", score: 72, color: "#3b8392" },
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: "hsla(0,0%,100%,0.04)",
                    borderRadius: "1rem",
                    padding: "2rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>
                    {pillar.title}
                  </p>
                  <p
                    style={{
                      fontSize: "3rem",
                      fontWeight: 400,
                      color: pillar.color,
                      marginBottom: "1rem",
                    }}
                  >
                    {pillar.score}%
                  </p>
                  <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                    <div
                      style={{
                        width: `${pillar.score}%`,
                        height: "100%",
                        background: pillar.color,
                        borderRadius: "2px",
                        transition: "width 1s ease",
                      }}
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#000", color: "#fff", padding: "8rem 0" }}>
        <div style={containerStyle}>
          <div style={{ textAlign: "center" }}>
            <FadeIn>
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  fontWeight: 700,
                  fontFamily: "var(--font-syne)",
                  lineHeight: 1,
                  marginBottom: "2rem",
                }}
              >
                Time to level up your brand?
              </h2>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: "30rem",
                  margin: "0 auto 1rem",
                  lineHeight: 1.4,
                }}
              >
                Blackstone Media shapes brand identities that the world wants to see more of.
                Reach out to our award-winning team to get started.
              </p>
              <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem" }}>
                Drop us a line at{" "}
                <a href="mailto:hello@blackstonemedia.com" style={{ color: "#fff", textDecoration: "underline" }}>
                  hello@blackstonemedia.com
                </a>
              </p>
              <Link
                href="/start-your-project"
                style={{
                  border: "1px solid rgba(255,255,255,0.4)",
                  borderRadius: "2rem",
                  padding: "0.875rem 2rem",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#fff",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
              >
                Start your project
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 11L11 1M11 1H3.5M11 1v7.5" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
