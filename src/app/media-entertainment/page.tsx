"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Header,
  Footer,
  FadeIn,
  containerStyle,
  FloatingStartButton,
} from "@/components/shared";

const SITE_KEY = "blackstone-media_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;

const SERVICES = [
  { label: "Brand strategy & identity", href: "#" },
  { label: "Web design & development", href: "#" },
  { label: "Growth marketing", href: "#" },
];

const FEATURES = [
  {
    heading: "Immersive brand experiences",
    text: "Media and entertainment brands demand attention. We craft digital experiences that captivate audiences with cinematic visuals, dynamic interactions, and storytelling that resonates far beyond the screen.",
    image: `${IMG}/upp-featured-mobile.jpg`,
  },
  {
    heading: "Content-driven platforms",
    text: "From streaming services to publishing platforms, we build digital ecosystems that showcase content beautifully while delivering seamless playback, discovery, and engagement across all devices.",
    image: `${IMG}/copper-feature.png`,
  },
  {
    heading: "Community & audience engagement",
    text: "Entertainment is about connection. We design social features, event platforms, and community spaces that keep audiences engaged and coming back for more.",
    image: `${IMG}/featured-image.png`,
  },
];

const STATISTICS = [
  {
    value: "3x",
    label: "increase in audience engagement",
    project: "Film Studio Rebrand",
  },
  {
    value: "72%",
    label: "improvement in content discoverability",
    project: "Streaming Platform",
  },
  {
    value: "45%",
    label: "growth in subscriber sign-ups",
    project: "Digital Publishing Platform",
  },
];

const RELATED_PROJECTS = [
  {
    title: "UPP",
    description: "A cinematic web experience for a Hollywood powerhouse.",
    tags: ["Web design & development"],
    image: `${IMG}/upp-featured-mobile.jpg`,
  },
  {
    title: "Media Studio",
    description: "Reimagining digital entertainment for a new generation.",
    tags: ["Brand strategy", "Visual identity", "Web design & development"],
    image: `${IMG}/copper-feature.png`,
  },
];

const ARTICLES = [
  {
    title: "The evolution of entertainment brands",
    excerpt: "How media companies can build lasting digital identities.",
    image: `${IMG}/upp-featured-mobile.jpg`,
  },
  {
    title: "Designing for engagement in 2026",
    excerpt: "Key trends shaping the future of media and entertainment design.",
    image: `${IMG}/copper-feature.png`,
  },
];

const TESTIMONIALS = [
  {
    quote: "Blackstone Media brought our vision to life with stunning creativity. The new platform has transformed how our audiences interact with our content.",
    author: "Michael Torres",
    role: "Creative Director, Media Studio",
  },
];

/* Hero */
function HeroSection() {
  return (
    <section
      style={{
        background: "#efefef",
        color: "#000",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          ...containerStyle,
          paddingBottom: "6rem",
          paddingTop: "5.625rem",
        }}
      >
        <FadeIn>
          <p
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              maxWidth: "30ch",
              marginBottom: "1rem",
            }}
          >
            Media & entertainment web design
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1
            style={{
              fontSize: "clamp(4rem, 12vw, 12rem)",
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Media &amp;
            <br />
            Entertainment
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              lineHeight: 1.6,
              maxWidth: "45ch",
              color: "#666",
              marginBottom: "2rem",
            }}
          >
            We create digital experiences for media and entertainment brands
            that captivate audiences. Cinematic design meets cutting-edge
            technology to tell stories that resonate.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Link
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "#000",
              color: "#fff",
              borderRadius: "2rem",
              padding: "1rem 2rem",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
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
            Get in touch
            <svg
              width="12"
              height="12"
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
        </FadeIn>
      </div>
    </section>
  );
}

/* Bento Grid */
function BentoGridSection() {
  return (
    <section style={{ background: "#efefef", padding: "1.5rem 0" }}>
      <div style={containerStyle}>
        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "1rem",
              minHeight: "60vh",
            }}
          >
            <div
              style={{
                gridColumn: "span 7",
                borderRadius: "0.9375rem",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={`${IMG}/upp-featured-mobile.jpg`}
                alt="Media project"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ gridColumn: "span 5", display: "grid", gap: "1rem" }}>
              <div
                style={{
                  borderRadius: "0.9375rem",
                  overflow: "hidden",
                  position: "relative",
                  flex: 1,
                }}
              >
                <Image
                  src={`${IMG}/copper-feature.png`}
                  alt="Media project"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  borderRadius: "0.9375rem",
                  overflow: "hidden",
                  position: "relative",
                  flex: 1,
                }}
              >
                <Image
                  src={`${IMG}/featured-image.png`}
                  alt="Media project"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* Intro / What We Offer */
function IntroSection() {
  return (
    <section style={{ background: "#efefef", color: "#000", padding: "9.375rem 0" }}>
      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          <div style={{ gridColumn: "span 5" }}>
            <FadeIn>
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
                  lineHeight: 0.95,
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  marginBottom: "2rem",
                }}
              >
                What we
                <br />
                offer:
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <svg
                width="60"
                height="60"
                viewBox="0 0 75.91 75.65"
                fill="none"
                style={{ marginBottom: "2rem" }}
              >
                <path
                  d="m13.65 67.65 61.93-62L69.92 0 8 61.99V.25H0v75.4h75.91v-8H13.65z"
                  fill="#000"
                />
              </svg>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  color: "#666",
                  maxWidth: "40ch",
                }}
              >
                The media and entertainment industry thrives on creativity.
                We partner with studios, publishers, and entertainment brands
                to create digital experiences as bold as their content.
              </p>
            </FadeIn>
          </div>

          <div style={{ gridColumn: "span 5", gridColumnStart: 8, paddingTop: "6rem" }}>
            {SERVICES.map((service, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.1}>
                <Link
                  href={service.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.5rem 0",
                    borderBottom: "1px solid rgba(0,0,0,0.15)",
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = "0.6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  }}
                >
                  {service.label}
                  <svg
                    width="12"
                    height="12"
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
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Features */
function FeaturesSection() {
  return (
    <section style={{ background: "#efefef", color: "#000", padding: "9.375rem 0" }}>
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              lineHeight: 0.95,
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
            }}
          >
            Why choose
            <br />
            Blackstone Media?
          </h2>
        </FadeIn>

        {FEATURES.map((feature, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "1.5rem",
              alignItems: "center",
              marginBottom: "6rem",
              flexDirection: i % 2 === 1 ? "row-reverse" : undefined,
            }}
          >
            <div
              style={{
                gridColumn: "span 5",
                order: i % 2 === 1 ? 2 : 1,
              }}
            >
              <FadeIn>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    borderRadius: "0.9375rem",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.heading}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </FadeIn>
            </div>
            <div
              style={{
                gridColumn: "span 6",
                gridColumnStart: i % 2 === 1 ? 1 : 7,
                order: i % 2 === 1 ? 1 : 2,
                paddingTop: "4rem",
              }}
            >
              <FadeIn delay={0.1}>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.1875rem)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    marginBottom: "1.5rem",
                  }}
                >
                  {feature.heading}
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.6,
                    color: "#666",
                    maxWidth: "40ch",
                  }}
                >
                  {feature.text}
                </p>
              </FadeIn>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Statistics */
function StatisticsSection() {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "9.375rem 0" }}>
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              lineHeight: 0.95,
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
            }}
          >
            Results
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
          {STATISTICS.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                <p
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    marginBottom: "1rem",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.5,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {stat.project}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Related Projects */
function RelatedProjectsSection() {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "9.375rem 0" }}>
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              lineHeight: 0.95,
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
            }}
          >
            Related
            <br />
            Projects
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
          {RELATED_PROJECTS.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link href="#" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    borderRadius: "0.9375rem",
                    overflow: "hidden",
                    position: "relative",
                    aspectRatio: "16/10",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "1rem",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        fontSize: "0.75rem",
                        border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: "50px",
                        padding: "0.375rem 1rem",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Related Articles */
function RelatedArticlesSection() {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "9.375rem 0", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              lineHeight: 0.95,
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
            }}
          >
            Related
            <br />
            Articles
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
          {ARTICLES.map((article, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link href="#" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    borderRadius: "0.9375rem",
                    overflow: "hidden",
                    position: "relative",
                    aspectRatio: "16/10",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    marginBottom: "0.5rem",
                  }}
                >
                  {article.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {article.excerpt}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Testimonials */
function TestimonialsSection() {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "9.375rem 0" }}>
      <div style={containerStyle}>
        {TESTIMONIALS.map((testimonial, i) => (
          <FadeIn key={i}>
            <div style={{ maxWidth: "800px" }}>
              <p
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                  lineHeight: 1.4,
                  fontWeight: 400,
                  marginBottom: "2rem",
                }}
              >
                {testimonial.quote}
              </p>
              <div>
                <p style={{ fontSize: "1rem", fontWeight: 600 }}>{testimonial.author}</p>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* CTA */
function CTASection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, rgba(99,60,201,0.3), rgba(59,131,146,0.2), rgba(203,36,204,0.3))",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        padding: "12rem 0",
      }}
    >
      <div style={{ ...containerStyle, position: "relative", zIndex: 10, textAlign: "center" }}>
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              fontWeight: 400,
              lineHeight: 1,
              marginBottom: "2rem",
            }}
          >
            Let&apos;s create
            <br />
            something
            <br />
            extraordinary
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", marginBottom: "1rem" }}>
            Ready to elevate your media brand digitally?
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <a
            href="mailto:hello@blackstonemedia.com"
            className="rainbow-text"
            style={{
              fontSize: "clamp(1.25rem, 3vw, 2.5rem)",
              fontWeight: 400,
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "2rem",
            }}
          >
            hello@blackstonemedia.com
          </a>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              maxWidth: "40rem",
              margin: "0 auto",
              fontSize: "1.125rem",
              lineHeight: 1.6,
            }}
          >
            We are a Creative Digital Agency based in Clerkenwell London,
            specialising in Creative Web Design, Web Development, Branding
            and Digital Marketing.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* Page */
export default function MediaEntertainmentPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BentoGridSection />
      <IntroSection />
      <FeaturesSection />
      <StatisticsSection />
      <RelatedProjectsSection />
      <RelatedArticlesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingStartButton />
    </main>
  );
}
