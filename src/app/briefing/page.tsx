"use client";

import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";

export default function Briefing() {
  return (
    <main style={{ background: "#efefef", color: "#000", minHeight: "100vh" }}>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          background: "#efefef",
          color: "#000",
          minHeight: "50svh",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: "4rem",
          paddingTop: "8rem",
        }}
      >
        <div style={containerStyle}>
          <FadeIn>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                lineHeight: 1,
                fontWeight: 400,
                whiteSpace: "pre-line",
                color: "#000",
              }}
            >
              {"Start crafting "}
              <em style={{ fontStyle: "italic" }}>better</em>{" "}
              briefs
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              style={{
                fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
                lineHeight: 1.5,
                color: "rgba(0,0,0,0.6)",
                marginTop: "2rem",
                maxWidth: "40ch",
              }}
            >
              Clients love how clear and thorough our briefing template is. So we
              thought: why keep it to ourselves when we can raise the industry
              standard?
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ marginTop: "3rem" }}>
              <a
                href="#download"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1px solid #000",
                  borderRadius: "2rem",
                  padding: "0.875rem 2rem",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#000",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#000";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#000";
                }}
              >
                Download the template
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 11L11 1M11 1H3.5M11 1v7.5" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Description Section */}
      <section style={{ background: "#efefef", color: "#000", paddingBottom: "6rem" }}>
        <div style={containerStyle}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "3rem" }}>
            <div style={{ gridColumn: "1 / span 5" }}>
              <FadeIn>
                <h2
                  style={{
                    fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
                    lineHeight: 1.1,
                    fontWeight: 400,
                    color: "#000",
                    marginBottom: "2rem",
                  }}
                >
                  Why a great brief matters
                </h2>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "rgba(0,0,0,0.6)" }}>
                  A clear, well-structured brief is the foundation of every
                  successful project. It aligns teams, sets expectations, and
                  eliminates costly misunderstandings before they happen.
                </p>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "rgba(0,0,0,0.6)", marginTop: "1.5rem" }}>
                  Our briefing template has been refined over years of working with
                  global brands. It covers every essential detail — from objectives
                  and audience to timeline and deliverables.
                </p>
              </FadeIn>
            </div>
            <div style={{ gridColumn: "7 / span 6" }}>
              <FadeIn delay={0.1}>
                <div
                  style={{
                    background: "rgba(0,0,0,0.04)",
                    borderRadius: "1rem",
                    padding: "3rem",
                  }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: "1.5rem" }}>
                    What&apos;s inside the template:
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {[
                      "Project objectives & goals",
                      "Target audience definition",
                      "Brand guidelines & tone of voice",
                      "Technical requirements",
                      "Timeline & milestones",
                      "Budget parameters",
                      "Success metrics",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "1.125rem",
                          color: "rgba(0,0,0,0.7)",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                        }}
                      >
                        <span style={{ color: "#633cc9" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Ready to brief better?
              </h2>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: "30rem",
                  margin: "0 auto 2.5rem",
                  lineHeight: 1.4,
                }}
              >
                Download the template and start crafting briefs that lead to
                exceptional work.
              </p>
              <a
                href="#download"
                style={{
                  border: "1px solid rgba(255,255,255,0.4)",
                  borderRadius: "2rem",
                  padding: "0.875rem 2rem",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#fff",
                  textDecoration: "none",
                  display: "inline-block",
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
                Download Template
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
