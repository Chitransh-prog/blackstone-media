"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, FadeIn, containerStyle, FloatingStartButton } from "@/components/shared";

const SITE_KEY = "blackstone-media_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;

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
                I&apos;m happy to receive a monthly newsletter from Blackstone Media
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
                I understand that Blackstone Media will securely hold my data in accordance
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
                  Blackstone Media
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
                  Blackstone Media
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
                Working with Blackstone Media
              </Link>
            </p>
          </FadeIn>

          <FadeIn delay={0.1} style={{ gridColumn: "span 5" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                { label: "General", email: "hello@blackstonemedia.com" },
                { label: "New business", email: "newbiz@blackstonemedia.com" },
                { label: "Careers", email: "careers@blackstonemedia.com" },
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
