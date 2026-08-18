"use client";

import Link from "next/link";
import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";
import type { ServiceData } from "@/data/services";
import { getSiblingServices } from "@/data/services";

const GRADIENT = "linear-gradient(90deg, #633cc9, #3b8392, #cb24cc)";

function HeroSection({
  service,
  siblings,
}: {
  service: ServiceData;
  siblings: { slug: string; title: string }[];
}) {

  return (
    <section
      style={{
        background: "#efefef",
        paddingTop: "clamp(8rem, 15vw, 14rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={containerStyle}>
        <FadeIn>
          <p
            style={{
              fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(0,0,0,0.5)",
              marginBottom: "1.5rem",
              fontWeight: 500,
            }}
          >
            {service.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              whiteSpace: "pre-line",
              marginBottom: "2rem",
            }}
          >
            {service.heading}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.375rem)",
              lineHeight: 1.6,
              maxWidth: "540px",
              color: "rgba(0,0,0,0.7)",
              marginBottom: "3rem",
            }}
          >
            {service.intro}
          </p>
        </FadeIn>

        {siblings.length > 0 && (
          <FadeIn delay={0.3}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(0,0,0,0.4)",
                  marginRight: "0.5rem",
                  alignSelf: "center",
                }}
              >
                Discover more
              </span>
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/service/${s.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "1rem",
                    color: "#000",
                    textDecoration: "none",
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: "50px",
                    padding: "0.625rem 1.25rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#000";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.color = "#000";
                  }}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

function BentoGrid({ service }: { service: ServiceData }) {
  return (
    <section style={{ background: "#efefef", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
      <div style={containerStyle}>
        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            {service.bentoItems.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  aspectRatio: i % 3 === 0 ? "4/3" : "3/4",
                  marginTop: i >= 2 ? "clamp(-2rem, -4vw, -3rem)" : 0,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: `url(${item.image}) center/cover no-repeat`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.5rem",
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,0.6))",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function IntroSection({ service }: { service: ServiceData }) {
  return (
    <section style={{ background: "#efefef", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "start",
          }}
        >
          <FadeIn>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                whiteSpace: "pre-line",
              }}
            >
              {service.introHeading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.7)",
              }}
            >
              {service.introText}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContentRows({ service }: { service: ServiceData }) {
  return (
    <section style={{ background: "#efefef", padding: "clamp(2rem, 4vw, 4rem) 0" }}>
      <div style={containerStyle}>
        {service.contentRows.map((row, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2rem, 5vw, 5rem)",
              alignItems: "center",
              marginBottom: "clamp(4rem, 8vw, 8rem)",
            }}
          >
            <FadeIn>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    marginBottom: "1.5rem",
                  }}
                >
                  {row.heading}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
                    lineHeight: 1.7,
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  {row.text}
                </p>
              </div>
            </FadeIn>
            {row.image && (
              <FadeIn delay={0.1}>
                <div
                  style={{
                    borderRadius: "1rem",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    background: `url(${row.image}) center/cover no-repeat`,
                  }}
                />
              </FadeIn>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function StatsSection({ service }: { service: ServiceData }) {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
      <div style={containerStyle}>
        <FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
            }}
          >
            {service.stats.map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    fontWeight: 400,
                    lineHeight: 1,
                    background: GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.75rem",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function RelatedProjects({ service }: { service: ServiceData }) {
  if (service.relatedProjects.length === 0) return null;
  return (
    <section style={{ background: "#000", color: "#fff", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
      <div style={containerStyle}>
        <FadeIn>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 400,
              marginBottom: "3rem",
            }}
          >
            Related Projects
          </h2>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(service.relatedProjects.length, 3)}, 1fr)`,
            gap: "1.5rem",
          }}
        >
          {service.relatedProjects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  borderRadius: "1rem",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "4/3",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: `url(${project.image}) center/cover no-repeat`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "2rem 1.5rem 1.5rem",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {project.year}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedArticles({ service }: { service: ServiceData }) {
  if (service.relatedArticles.length === 0) return null;
  return (
    <section style={{ background: "#000", color: "#fff", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
      <div style={containerStyle}>
        <FadeIn>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 400,
              marginBottom: "3rem",
            }}
          >
            Related Articles
          </h2>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(service.relatedArticles.length, 3)}, 1fr)`,
            gap: "1.5rem",
          }}
        >
          {service.relatedArticles.map((article, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ borderRadius: "1rem", overflow: "hidden" }}>
                <div
                  style={{
                    aspectRatio: "16/9",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: `url(${article.image}) center/cover no-repeat`,
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {article.date}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    marginBottom: "0.5rem",
                  }}
                >
                  {article.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>
                  {article.excerpt}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ service }: { service: ServiceData }) {
  if (service.testimonials.length === 0) return null;
  return (
    <section style={{ background: "#000", color: "#fff", padding: "clamp(4rem, 8vw, 8rem) 0" }}>
      <div style={containerStyle}>
        <FadeIn>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 400,
              marginBottom: "3rem",
            }}
          >
            What they said
          </h2>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(service.testimonials.length, 3)}, 1fr)`,
            gap: "1.5rem",
          }}
        >
          {service.testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "1rem",
                  padding: "2rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
                    lineHeight: 1.5,
                    marginBottom: "2rem",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{t.author}</p>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "clamp(6rem, 12vw, 12rem) 0" }}>
      <div style={{ ...containerStyle, textAlign: "center" }}>
        <FadeIn>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
            }}
          >
            Interested in working with Blackstone Media?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <a
            href="mailto:hello@blackstonemedia.com"
            className="rainbow-text"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              fontWeight: 400,
              textDecoration: "none",
              display: "inline-block",
              wordBreak: "break-all",
            }}
          >
            hello@blackstonemedia.com
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

export function ServicePageClient({ service }: { service: ServiceData }) {
  const siblings = getSiblingServices(service.slug);

  return (
    <div style={{ background: "#efefef", minHeight: "100vh" }}>
      <Header />
      <main>
        <HeroSection service={service} siblings={siblings} />
        <BentoGrid service={service} />
        <IntroSection service={service} />
        <ContentRows service={service} />
        <StatsSection service={service} />
        <RelatedProjects service={service} />
        <RelatedArticles service={service} />
        <TestimonialsSection service={service} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
