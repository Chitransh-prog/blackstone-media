"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Header,
  Footer,
  FadeIn,
  containerStyle,
} from "@/components/shared";

const SITE_KEY = "kota-co-uk_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;

const SERVICES = [
  { label: "Brand strategy & identity", href: "#" },
  { label: "Web design & development", href: "#" },
  { label: "Growth marketing", href: "#" },
];

const FEATURES = [
  {
    heading: "Patient-first design",
    text: "We design healthcare websites that prioritise the patient journey — making it easy for users to find services, book appointments, and access information with clarity and confidence.",
    image: `${IMG}/copper-feature.png`,
  },
  {
    heading: "Compliance & accessibility",
    text: "Every healthcare digital experience we build meets WCAG accessibility standards and NHS digital guidelines, ensuring inclusivity and regulatory compliance at every touchpoint.",
    image: `${IMG}/featured-image.png`,
  },
  {
    heading: "Integrated digital ecosystems",
    text: "From patient portals to telehealth platforms, we create seamless digital ecosystems that connect your clinical systems, patient records, and communication channels into one cohesive experience.",
    image: `${IMG}/goat-featured.png`,
  },
];

const STATISTICS = [
  {
    value: "40%",
    label: "increase in online appointment bookings",
    project: "NHS Trust Website Redesign",
  },
  {
    value: "62%",
    label: "improvement in patient information access",
    project: "Private Healthcare Portal",
  },
  {
    value: "3x",
    label: "more patient engagement across digital channels",
    project: "Health Tech Platform",
  },
];

const RELATED_PROJECTS = [
  {
    title: "Healthcare Trust",
    description: "A digital transformation for modern patient care.",
    tags: ["Web design & development"],
    image: `${IMG}/copper-feature.png`,
  },
  {
    title: "MedTech Solutions",
    description: "Connecting patients and providers through intuitive design.",
    tags: ["Brand strategy", "Web design & development"],
    image: `${IMG}/featured-image.png`,
  },
];

const ARTICLES = [
  {
    title: "The future of NHS digital services",
    excerpt: "How healthcare organisations can embrace digital transformation to improve patient outcomes.",
    image: `${IMG}/goat-featured.png`,
  },
  {
    title: "Designing for accessibility in healthcare",
    excerpt: "Why inclusive design is non-negotiable for medical websites and platforms.",
    image: `${IMG}/copper-feature.png`,
  },
];

const TESTIMONIALS = [
  {
    quote: "KOTA transformed our digital presence completely. Patient engagement has increased dramatically since the new website launched.",
    author: "Sarah Mitchell",
    role: "Director of Digital, NHS Trust",
  },
];

/* Floating Start Button */
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
            Healthcare web design
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
            Healthcare
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
            We create digital experiences for healthcare organisations that
            put patients first — intuitive, accessible, and built to inspire
            trust at every interaction.
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
                src={`${IMG}/copper-feature.png`}
                alt="Healthcare project"
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
                  src={`${IMG}/featured-image.png`}
                  alt="Healthcare project"
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
                  src={`${IMG}/goat-featured.png`}
                  alt="Healthcare project"
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
                Healthcare organisations face unique digital challenges — from
                strict accessibility requirements to the need for patient trust.
                We craft digital experiences that address these needs with
                empathy and precision.
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
            KOTA?
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
            Let&apos;s build
            <br />
            healthcare
            <br />
            digital
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", marginBottom: "1rem" }}>
            Ready to transform your healthcare digital experience?
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <a
            href="mailto:hello@kota.co.uk"
            className="rainbow-text"
            style={{
              fontSize: "clamp(1.25rem, 3vw, 2.5rem)",
              fontWeight: 400,
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "2rem",
            }}
          >
            hello@kota.co.uk
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
export default function HealthcarePage() {
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
