"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";
import type { WorkProject } from "@/data/work";
import { resolveWorkImages } from "@/data/work";

const TESTIMONIALS = [
  {
    quote:
      "\"KOTA brought a level of strategic thinking and creative execution that we hadn't seen before. They didn't just build us a website \u2014 they gave us a platform that drives real business results.\"",
    author: "James Wright",
    role: "CEO",
  },
  {
    quote:
      "\"It was our brand positioning work that really made everything click. KOTA were empathetic, patient, flexible, quick, and, most importantly, incredibly talented.\"",
    author: "Shanice Daeche",
    role: "CMO",
  },
  {
    quote:
      "\"Beyond the aesthetics, the website is incredibly functional. The CMS gives us the flexibility and control we need to keep our content fresh and relevant.\"",
    author: "Jenny Frame",
    role: "Head of Marketing",
  },
];

const ARTICLES = [
  {
    title: "Branding inspiration: design trends for 2026",
    tags: "Expertise, Inspiration",
    image: `/sites/kota-co-uk_ddbd9d9c/root-dd72c4c6/images/brand-trend-2026.png`,
    link: "#",
  },
  {
    title: "Design with guts: KOTA's manifesto for creative bravery",
    tags: "Expertise, Inspiration",
    image: `/sites/kota-co-uk_ddbd9d9c/root-dd72c4c6/images/design-with-guts.png`,
    link: "#",
  },
  {
    title: "KOTA wins a Lovie award for Best Web Design",
    tags: "Culture, Our work",
    image: `/sites/kota-co-uk_ddbd9d9c/root-dd72c4c6/images/lovie-awards.png`,
    link: "#",
  },
];

/* Hero Section */

function HeroSection({ project }: { project: WorkProject }) {
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
        paddingTop: "5.625rem",
      }}
    >
      <div
        style={{
          ...containerStyle,
          paddingBottom: "6rem",
        }}
      >
        <FadeIn>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 8rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
            }}
          >
            {project.title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            style={{
              fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: "40ch",
              color: "#333",
              marginBottom: "3rem",
            }}
          >
            {project.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            style={{
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "0.9375rem",
              overflow: "hidden",
              position: "relative",
              marginBottom: "2rem",
            }}
          >
            {project.video ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={project.video} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                priority
              />
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.875rem",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "2rem",
                  border: "1px solid rgba(0,0,0,0.15)",
                  color: "#000",
                  background: "hsla(0,0%,100%,0.5)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* Bento Grid */

function BentoGrid({ project }: { project: WorkProject }) {
  return (
    <section style={{ background: "#efefef", padding: "2rem 0" }}>
      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "1rem",
          }}
        >
          {project.bentoImages.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                style={{
                  borderRadius: "0.9375rem",
                  overflow: "hidden",
                  aspectRatio: i === 0 ? "16/10" : i === 3 ? "16/10" : "4/3",
                  position: "relative",
                }}
              >
                <Image
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Intro Section */

function IntroSection({ project }: { project: WorkProject }) {
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
          <FadeIn style={{ gridColumn: "1 / span 7" }}>
            <div
              style={{
                fontSize: "clamp(1.125rem, 1.3vw, 1.25rem)",
                lineHeight: 1.6,
                color: "#333",
              }}
            >
              <p>{project.longDescription}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} style={{ gridColumn: "span 4", gridColumnStart: "9" }}>
            <div style={{ borderLeft: "1px solid rgba(0,0,0,0.15)", paddingLeft: "2rem" }}>
              <div style={{ marginBottom: "2rem" }}>
                <span
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "rgba(0,0,0,0.4)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Industry
                </span>
                <span style={{ fontSize: "1.125rem", color: "#000" }}>
                  {project.industry}
                </span>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <span
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "rgba(0,0,0,0.4)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Location
                </span>
                <span style={{ fontSize: "1.125rem", color: "#000" }}>
                  {project.location}
                </span>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <span
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "rgba(0,0,0,0.4)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Services
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.875rem",
                        padding: "0.375rem 0.875rem",
                        borderRadius: "2rem",
                        border: "1px solid rgba(0,0,0,0.15)",
                        color: "#000",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#000",
                  textDecoration: "none",
                  border: "1px solid rgba(0,0,0,0.15)",
                  borderRadius: "2rem",
                  padding: "0.75rem 1.5rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#000";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#000";
                }}
              >
                Visit site
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
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* Content Sections */

function ContentSections({ project }: { project: WorkProject }) {
  return (
    <section style={{ background: "#efefef", color: "#000", padding: "4rem 0 6rem" }}>
      <div style={containerStyle}>
        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "2rem",
              marginBottom: "4rem",
              alignItems: "center",
            }}
          >
            <div style={{ gridColumn: "span 5" }}>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  whiteSpace: "pre-line",
                }}
              >
                {`The challenge.\n${project.title} needed a digital presence that reflected their position in the market.`}
              </h2>
            </div>
            <div style={{ gridColumn: "span 6", gridColumnStart: "7" }}>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "#333" }}>
                Every project begins with understanding the unique challenges a brand faces.
                For {project.title}, the task was clear: create a digital experience that
                not only looks stunning but drives measurable business results. We worked
                closely with their team to understand their audience, goals, and competitive
                landscape.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div
            style={{
              borderRadius: "0.9375rem",
              overflow: "hidden",
              aspectRatio: "16/9",
              position: "relative",
              marginBottom: "4rem",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </FadeIn>

        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div style={{ gridColumn: "span 6" }}>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "#333" }}>
                The result is a platform that communicates {project.title}&apos;s value
                proposition with clarity and confidence. From the first impression to the
                deepest level of engagement, every touchpoint has been crafted to guide
                visitors toward action.
              </p>
            </div>
            <div style={{ gridColumn: "span 5", gridColumnStart: "8" }}>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                }}
              >
                The solution.
              </h2>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* Related Projects */

function RelatedProjects({ projects }: { projects: WorkProject[] }) {
  if (projects.length === 0) return null;

  return (
    <section style={{ background: "#000", color: "#fff", padding: "8rem 0 6rem" }}>
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <span
            style={{
              display: "block",
              fontSize: "clamp(3rem, 10.6vw, 10rem)",
              lineHeight: 0.8,
              textTransform: "uppercase",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(14px, 2vw, 18px)",
                letterSpacing: "0.06em",
                opacity: 0.6,
                marginBottom: "0.5rem",
              }}
            >
              Next
            </span>
            Related Projects
          </span>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((p, i) => (
            <RelatedCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCard({ project, index }: { project: WorkProject; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.1}>
      <Link
        href={`/work/${project.slug}`}
        style={{ textDecoration: "none", display: "block" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            borderRadius: "0.9375rem",
            overflow: "hidden",
            aspectRatio: "16/10",
            position: "relative",
            marginBottom: "1rem",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>
        <h3
          style={{
            fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
            fontWeight: 400,
            color: "#fff",
            marginBottom: "0.375rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.9375rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.4,
          }}
        >
          {project.description}
        </p>
      </Link>
    </FadeIn>
  );
}

/* Related Articles */

function RelatedArticles() {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "6rem 0" }}>
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              fontWeight: 300,
              lineHeight: 1,
              color: "#fff",
            }}
          >
            Related articles
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {ARTICLES.map((article, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link
                href={article.link}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    borderRadius: "0.9375rem",
                    overflow: "hidden",
                    aspectRatio: "16/10",
                    position: "relative",
                    marginBottom: "1rem",
                  }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.4)",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {article.tags}
                </span>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1.3,
                  }}
                >
                  {article.title}
                </h3>
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
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: "#000", color: "#fff", padding: "6rem 0" }}>
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              fontWeight: 300,
              lineHeight: 1,
              color: "#fff",
            }}
          >
            What our clients say
          </h2>
        </FadeIn>

        <div key={active} style={{ maxWidth: "50rem" }}>
          <FadeIn>
            <blockquote
              style={{
                fontSize: "clamp(1.5rem, 1.8vw, 2.1875rem)",
                fontWeight: 400,
                lineHeight: 1.14,
                maxWidth: "44ch",
                marginBottom: "2.5rem",
                color: "#fff",
              }}
            >
              {TESTIMONIALS[active].quote}
            </blockquote>

            <div style={{ marginBottom: "2rem" }}>
              <p style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#fff" }}>
                {TESTIMONIALS[active].author}
              </p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>
                {TESTIMONIALS[active].role}
              </p>
            </div>
          </FadeIn>
        </div>

        <div style={{ display: "flex", gap: "0.625rem", marginTop: "3rem" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: "0.75rem",
                height: "0.75rem",
                borderRadius: "100%",
                border: "none",
                cursor: "pointer",
                padding: 0,
                background: active === i ? "#fff" : "rgba(255,255,255,0.25)",
                transition: "background 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* CTA Section */

function CTASection() {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "8rem 0" }}>
      <div style={containerStyle}>
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              color: "#fff",
              marginBottom: "3rem",
            }}
          >
            {`Let's make\nsomething\nremarkable.`}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Link
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#fff",
              color: "#000",
              borderRadius: "2rem",
              padding: "1rem 2rem",
              fontSize: "1.125rem",
              fontWeight: 400,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
            }}
          >
            Start your project
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* Page */

export default function WorkDetailClient({
  project,
  related,
}: {
  project: WorkProject;
  related: WorkProject[];
}) {
  const resolved = resolveWorkImages(project);
  const resolvedRelated = related.map(resolveWorkImages);
  return (
    <main>
      <Header />
      <HeroSection project={resolved} />
      <BentoGrid project={resolved} />
      <IntroSection project={resolved} />
      <ContentSections project={resolved} />
      <RelatedProjects projects={resolvedRelated} />
      <RelatedArticles />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
