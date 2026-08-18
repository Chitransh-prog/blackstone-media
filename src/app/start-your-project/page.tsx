"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";

export default function StartYourProject() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
    newsletter: false,
    privacy: false,
  });

  return (
    <main style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
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
          position: "relative",
        }}
      >
        <div style={{ ...containerStyle, width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "0.75rem", alignItems: "end" }}>
            <div style={{ gridColumn: "span 7" }}>
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
                  {"Let's get your "}
                  <em style={{ fontStyle: "italic" }}>project started.</em>
                </h1>
              </FadeIn>
            </div>
            <div style={{ gridColumn: "span 5" }}>
              <FadeIn delay={0.5}>
                <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.6, marginBottom: "0.5rem" }}>
                  New business
                </p>
                <a
                  href="mailto:newbiz@kota.co.uk"
                  style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#000", textDecoration: "none", display: "block", marginBottom: "0.5rem" }}
                >
                  newbiz@kota.co.uk
                </a>
                <a
                  href="tel:+4402039510562"
                  style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", color: "#000", textDecoration: "none", display: "block", marginBottom: "1.5rem" }}
                >
                  +44(0)20 3951 0562
                </a>
                <p style={{ fontSize: "1rem", color: "rgba(0,0,0,0.5)", lineHeight: 1.5 }}>
                  Have a quick question you need answering?
                  <br />
                  Check out - FAQ&apos;s :{" "}
                  <Link href="#" style={{ color: "#000", textDecoration: "underline" }}>
                    Working with KOTA
                  </Link>
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ background: "#000", color: "#fff", padding: "6rem 0 8rem" }}>
        <div style={containerStyle}>
          <FadeIn>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1.5rem",
              }}
            >
              {/* Interested In */}
              <div style={{ gridColumn: "span 4" }}>
                <legend style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", marginBottom: "1rem", fontWeight: 400 }}>
                  I am interested in :
                </legend>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["A new website", "Branding", "Motion graphics", "E-Commerce", "Development", "On-going support"].map(
                    (item) => (
                      <label
                        key={item}
                        style={{
                          fontSize: "1rem",
                          border: "1px solid rgba(255,255,255,0.3)",
                          borderRadius: "2rem",
                          padding: "0.5rem 1.25rem",
                          color: "#fff",
                          background: "transparent",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <input type="checkbox" style={{ display: "none" }} />
                        {item}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* First Name */}
              <div style={{ gridColumn: "span 2" }}>
                <input
                  type="text"
                  placeholder="First name*"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  style={{
                    width: "100%",
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

              {/* Last Name */}
              <div style={{ gridColumn: "span 2" }}>
                <input
                  type="text"
                  placeholder="Last name*"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  style={{
                    width: "100%",
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

              {/* Email */}
              <div style={{ gridColumn: "span 2" }}>
                <input
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
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

              {/* Budget */}
              <div style={{ gridColumn: "span 2" }}>
                <input
                  type="text"
                  placeholder="Budget (£)"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "0.5rem",
                    color: "#fff",
                    fontSize: "1rem",
                    outline: "none",
                    marginBottom: "0.5rem",
                  }}
                />
                <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
                  More info on minimum/typical budget sizes can be found{" "}
                  <Link href="#" style={{ color: "rgba(255,255,255,0.6)" }}>
                    here
                  </Link>
                  .
                </p>
              </div>

              {/* Attachments */}
              <div style={{ gridColumn: "span 2", position: "relative" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.59 22.38" width="16" height="16">
                    <path fill="#fff" d="M13.86 7.15l-1.42-1.42-7.1 7.1c-1.17 1.18-1.15 3.09.03 4.26a3.006 3.006 0 004.23 0l8.52-8.52a5.022 5.022 0 00-7.1-7.1l-8.95 8.94-.02.02a7.007 7.007 0 000 9.9 7.007 7.007 0 009.9 0l.02-.02 6.11-6.1-1.42-1.42-6.11 6.1-.02.02a4.983 4.983 0 01-7.06-.05 4.986 4.986 0 010-7.01l.02-.02 8.95-8.94a3.015 3.015 0 014.26-.03c1.18 1.17 1.2 3.07.03 4.26l-.03.03-8.52 8.52c-.39.39-1.03.39-1.42 0s-.39-1.03 0-1.42l7.1-7.1z" />
                  </svg>
                  Attachments
                </label>
              </div>

              {/* Message */}
              <div style={{ gridColumn: "span 4" }}>
                <input
                  type="text"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
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

              {/* Checkboxes */}
              <div style={{ gridColumn: "span 4", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer", fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)" }}>
                  <input type="checkbox" checked={formData.newsletter} onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })} style={{ width: "20px", height: "20px" }} />
                  I&apos;m happy to receive a monthly newsletter from KOTA
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer", fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)" }}>
                  <input type="checkbox" checked={formData.privacy} onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })} style={{ width: "20px", height: "20px" }} required />
                  I understand that KOTA will securely hold my data in accordance with their privacy policy.
                </label>
              </div>

              {/* Submit */}
              <div style={{ gridColumn: "span 4", display: "flex", justifyContent: "flex-end" }}>
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
                  Submit
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 11L11 1M11 1H3.5M11 1v7.5" />
                  </svg>
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
