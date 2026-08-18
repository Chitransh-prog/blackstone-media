"use client";

import Link from "next/link";
import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";

const SERVICE_CATEGORIES = [
  {
    label: "Brand",
    description: "Strategy, identity, and voice.",
    services: [
      { title: "Brand strategy & identity", slug: "brand-strategy-and-identity" },
      { title: "Brand strategy", slug: "brand-strategy" },
      { title: "Brand identity design", slug: "brand-identity-design" },
      { title: "Tone of voice", slug: "tone-of-voice" },
    ],
  },
  {
    label: "Web",
    description: "Design, development, and platforms.",
    services: [
      { title: "Web design & development", slug: "web-design-development" },
      { title: "Creative web design", slug: "creative-web-design" },
      { title: "Web development", slug: "web-development" },
      { title: "WordPress & CMS", slug: "wordpress-cms" },
    ],
  },
  {
    label: "Growth",
    description: "Marketing, SEO, and ongoing care.",
    services: [
      { title: "Growth marketing", slug: "growth-marketing" },
      { title: "SiteCare", slug: "sitecare" },
      { title: "SEO & GEO", slug: "seo-geo" },
      { title: "Copywriting", slug: "copywriting" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main style={{ background: "#efefef", color: "#000", minHeight: "100vh" }}>
      <Header />

      {/* Hero */}
      <section style={{ padding: "10rem 7vw 5rem" }}>
        <div style={containerStyle}>
          <FadeIn>
            <h1
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Services
            </h1>
          </FadeIn>
          <FadeIn>
            <p
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                maxWidth: "40rem",
                marginTop: "2rem",
                lineHeight: 1.5,
                color: "#555",
              }}
            >
              We build brands, design digital experiences, and drive growth.
              Everything under one roof.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      {SERVICE_CATEGORIES.map((cat) => (
        <section key={cat.label} style={{ padding: "3rem 7vw 5rem" }}>
          <div style={containerStyle}>
            <FadeIn>
              <div style={{ marginBottom: "2rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  {cat.label}
                </h2>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "#666",
                    marginTop: "0.5rem",
                  }}
                >
                  {cat.description}
                </p>
              </div>
            </FadeIn>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                gap: "1rem",
              }}
            >
              {cat.services.map((svc) => (
                <FadeIn key={svc.slug}>
                  <Link
                    href={`/service/${svc.slug}`}
                    style={{
                      display: "block",
                      padding: "2rem",
                      background: "#fff",
                      borderRadius: "1rem",
                      textDecoration: "none",
                      color: "#000",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      {svc.title}
                    </h3>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "1rem",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      Learn more →
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: "5rem 7vw 8rem" }}>
        <div style={containerStyle}>
          <FadeIn>
            <div
              style={{
                background: "#000",
                color: "#fff",
                borderRadius: "1.5rem",
                padding: "clamp(3rem, 6vw, 5rem)",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Ready to start?
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  marginTop: "1rem",
                  color: "#aaa",
                  maxWidth: "30rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Let&apos;s talk about your project.
              </p>
              <Link
                href="/start-your-project"
                style={{
                  display: "inline-block",
                  marginTop: "2rem",
                  padding: "1rem 2.5rem",
                  background: "#fff",
                  color: "#000",
                  borderRadius: "2rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Hire us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
