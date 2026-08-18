"use client";

import { useState } from "react";
import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";

export default function Newsletter() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          background: "#efefef",
          color: "#000",
          minHeight: "40svh",
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
              {"Stay up to date with "}
              <em style={{ fontStyle: "italic" }}>news from KOTA.</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ background: "#000", color: "#fff", padding: "6rem 0 8rem" }}>
        <div style={containerStyle}>
          <FadeIn>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                maxWidth: "50rem",
              }}
            >
              <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                <input
                  type="text"
                  placeholder="First name*"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{
                    flex: "1 1 200px",
                    padding: "1rem",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "0.5rem",
                    color: "#fff",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{
                    flex: "1 1 200px",
                    padding: "1rem",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "0.5rem",
                    color: "#fff",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: "1 1 200px",
                    padding: "1rem",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "0.5rem",
                    color: "#fff",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                }}
              >
                KOTA needs the contact information you provide to us to contact you
                about our products and services. You may unsubscribe from these
                communications at any time. For information on how to unsubscribe, as
                well as our privacy practices and commitment to protecting your
                privacy, please review our Privacy Policy.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer", fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)" }}>
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    required
                    style={{ width: "20px", height: "20px" }}
                  />
                  I&apos;m happy to receive a monthly newsletter from KOTA
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer", fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)" }}>
                  <input type="checkbox" required style={{ width: "20px", height: "20px" }} />
                  I understand that KOTA will securely hold my data in accordance with their privacy policy.
                </label>
              </div>

              <button
                type="submit"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.4)",
                  borderRadius: "2rem",
                  color: "#fff",
                  padding: "0.875rem 2rem",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }}
              >
                Subscribe
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 11L11 1M11 1H3.5M11 1v7.5" />
                </svg>
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
