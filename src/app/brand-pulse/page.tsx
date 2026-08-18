"use client";

import { useState } from "react";
import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";

const PILLAR_DATA = [
  {
    id: "strategy",
    title: "Brand Strategy & Positioning",
    description: "Does your brand have a clear, compelling story that resonates with your audience?",
  },
  {
    id: "identity",
    title: "Visual Identity & Design",
    description: "Is your visual identity distinctive, cohesive, and aligned with your brand's personality?",
  },
  {
    id: "voice",
    title: "Tone of Voice & Messaging",
    description: "Does your messaging communicate your value clearly and consistently across touchpoints?",
  },
  {
    id: "digital",
    title: "Digital Presence & Experience",
    description: "Does your digital presence provide a seamless, engaging experience for your audience?",
  },
  {
    id: "culture",
    title: "Brand Culture & Alignment",
    description: "Is your brand consistently experienced by both employees and customers?",
  },
];

export default function BrandPulse() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [started, setStarted] = useState(false);

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          background: "#efefef",
          color: "#000",
          minHeight: "60svh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={containerStyle}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "3rem", alignItems: "center" }}>
            <div style={{ gridColumn: "1 / span 6" }}>
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
                  Brand Pulse Audit Tool
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: 1.5,
                    color: "rgba(0,0,0,0.6)",
                    maxWidth: "35ch",
                    marginBottom: "2.5rem",
                  }}
                >
                  Ready to check your brand&apos;s pulse? Dive in to see where your
                  brand is thriving, and where it needs a little CPR.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <button
                  onClick={() => setStarted(true)}
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
                    background: "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#000";
                    (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "#000";
                  }}
                >
                  Start your audit
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 11L11 1M11 1H3.5M11 1v7.5" />
                  </svg>
                </button>
              </FadeIn>
            </div>
            <div style={{ gridColumn: "8 / span 5" }}>
              <FadeIn delay={0.3}>
                <div
                  style={{
                    background: "rgba(0,0,0,0.04)",
                    borderRadius: "1rem",
                    padding: "2.5rem",
                  }}
                >
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1.5rem" }}>
                    5 Key Pillars
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {PILLAR_DATA.map((pillar, i) => (
                      <div
                        key={pillar.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          padding: "0.75rem 1rem",
                          background: "#fff",
                          borderRadius: "0.5rem",
                          border: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <span
                          style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            background: "#000",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.8125rem",
                            flexShrink: 0,
                          }}
                        >
                          {i + 1}
                        </span>
                        <span style={{ fontSize: "0.9375rem", color: "rgba(0,0,0,0.7)" }}>
                          {pillar.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Content */}
      {started && (
        <section style={{ background: "#000", color: "#fff", padding: "6rem 0 8rem" }}>
          <div style={containerStyle}>
            <FadeIn>
              <div style={{ maxWidth: "50rem" }}>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
                  Question {currentQuestion + 1} of {PILLAR_DATA.length}
                </p>
                <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", marginBottom: "3rem" }}>
                  <div
                    style={{
                      width: `${((currentQuestion + 1) / PILLAR_DATA.length) * 100}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #633cc9, #3b8392)",
                      borderRadius: "2px",
                      transition: "width 0.5s ease",
                    }}
                  />
                </div>
                <h2
                  style={{
                    fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    marginBottom: "1.5rem",
                  }}
                >
                  {PILLAR_DATA[currentQuestion].title}
                </h2>
                <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: "3rem" }}>
                  {PILLAR_DATA[currentQuestion].description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {["Strong - We're doing this well", "Average - There's room for improvement", "Weak - We need significant work here", "Not sure - I need guidance"].map(
                    (answer) => (
                      <button
                        key={answer}
                        onClick={() => {
                          if (currentQuestion < PILLAR_DATA.length - 1) {
                            setCurrentQuestion(currentQuestion + 1);
                          }
                        }}
                        style={{
                          padding: "1.25rem 1.5rem",
                          background: "transparent",
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: "0.5rem",
                          color: "#fff",
                          fontSize: "1.0625rem",
                          textAlign: "left",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.5)";
                          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        }}
                      >
                        {answer}
                      </button>
                    )
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* How it works */}
      {!started && (
        <section style={{ background: "#000", color: "#fff", padding: "8rem 0" }}>
          <div style={containerStyle}>
            <FadeIn>
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  fontWeight: 700,
                  fontFamily: "var(--font-syne)",
                  lineHeight: 1,
                  textAlign: "center",
                  marginBottom: "4rem",
                }}
              >
                How it works
              </h2>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
              {[
                { num: "01", title: "Answer 5 quick questions", desc: "Rate your brand across five essential pillars." },
                { num: "02", title: "Get your results", desc: "Receive a personalised scorecard with insights." },
                { num: "03", title: "Take action", desc: "Use the recommendations to strengthen your brand." },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div
                    style={{
                      background: "hsla(0,0%,100%,0.04)",
                      borderRadius: "1rem",
                      padding: "2.5rem",
                      borderTop: `3px solid ${i === 0 ? "#633cc9" : i === 1 ? "#3b8392" : "#cb24cc"}`,
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "1.5rem" }}>
                      {step.num}
                    </span>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 400, marginBottom: "1rem" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
