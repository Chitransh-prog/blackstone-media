"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SITE_KEY = "kota-co-uk_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;

const WORK_PROJECTS = [
  {
    title: "Bipsync",
    year: "2025",
    description: "A brand-led digital transformation for a global platform.",
    tags: ["Web design & development"],
    sector: "B2B tech, software & SaaS",
    image: `${IMG}/bipsync-feature.png`,
    slug: "bipsync",
  },
  {
    title: "UPP",
    year: "2025",
    description: "A cinematic web experience for a Hollywood powerhouse.",
    tags: ["Web design & development"],
    sector: "Agencies",
    image: `${IMG}/upp-featured-mobile.jpg`,
    slug: "upp",
  },
  {
    title: "Copper",
    year: "2026",
    description: "A new brand for the technology behind always-on markets.",
    tags: ["Brand strategy", "Tone of voice", "Visual identity", "Branding", "Web design & development"],
    sector: "Finance",
    image: `${IMG}/copper-feature.png`,
    slug: "copper",
  },
  {
    title: "Bucher + Suter",
    year: "2026",
    description: "How Bucher + Suter found brand clarity through a new strategy with KOTA",
    tags: ["Brand strategy", "Tone of voice", "Visual identity", "Branding", "Web design & development"],
    sector: "B2B tech, software & SaaS",
    image: `${IMG}/featured-image.png`,
    slug: "bucher-suter",
  },
  {
    title: "Finura",
    year: "2025",
    description: "A new vision for modern wealth management",
    tags: ["Tone of voice", "Visual identity", "Brand strategy", "Web design & development"],
    sector: "Finance",
    image: `${IMG}/finura-logo-still.png`,
    slug: "finura",
  },
  {
    title: "Navarino",
    year: "2025",
    description: "Charting a new digital frontier for the future of maritime tech.",
    tags: ["Web design & development"],
    sector: "B2B tech, software & SaaS",
    image: `${IMG}/navarino-feature.png`,
    slug: "navarino",
  },
  {
    title: "MGN Events",
    year: "2025",
    description: "A brand built for the next chapter at MGN Events",
    tags: ["Tone of voice", "Visual identity", "Brand strategy", "Web design & development"],
    sector: "Media & Entertainment",
    image: `${IMG}/mgn-events-feature.png`,
    slug: "mgn-events",
  },
  {
    title: "The Goat Agency",
    year: "2025",
    description: "Influence everywhere: a future-ready website for The Goat Agency.",
    tags: ["Web design & development"],
    sector: "Agencies",
    image: `${IMG}/goat-featured.png`,
    slug: "the-goat-agency",
  },
  {
    title: "Ziipline",
    year: "2025",
    description: "Brand transformation for the UK's fastest-growing Salesforce partner.",
    tags: ["Branding", "Web design & development"],
    sector: "B2B tech, software & SaaS",
    image: `${IMG}/ziipline-feature.png`,
    slug: "ziipline",
  },
  {
    title: "ISI Global",
    year: "2025",
    description: "We revamped this global design agency's digital identity.",
    tags: ["Branding", "Web design & development"],
    sector: "Agencies",
    image: `${IMG}/isi-image-whiteoutline.png`,
    slug: "isi-global",
  },
  {
    title: "Incentive Games",
    year: "2025",
    description: "We designed for play with Incentive Games' new website.",
    tags: ["Web design & development"],
    sector: "B2B tech, software & SaaS",
    image: `${IMG}/incentive-games-feature.png`,
    slug: "incentive-games",
  },
  {
    title: "Florence",
    year: "2024",
    description: "Inside Florence's stunning brand and digital transformation.",
    tags: ["Branding", "Web design & development"],
    sector: "Healthcare",
    image: `${IMG}/florence-feature.png`,
    slug: "florence",
  },
  {
    title: "Okopod",
    year: "2024",
    description: "We crafted a bold new site for a fast-growing prefab brand.",
    tags: ["Web design & development"],
    sector: "Retail",
    image: `${IMG}/okopod-feature.png`,
    slug: "okopod",
  },
  {
    title: "Tangerine",
    year: "2023",
    description: "We took on the challenge of creating the new website for tangerine, a global pioneer in design.",
    tags: ["Web design & development"],
    sector: "Agencies",
    image: `${IMG}/tangerine-feature.png`,
    slug: "tangerine",
  },
  {
    title: "Bellsant",
    year: "2023",
    description: "A new brand, website and app for the service using science to make the world healthier and happier.",
    tags: ["Branding", "Web design & development"],
    sector: "Healthcare",
    image: `${IMG}/bellsant-feature.png`,
    slug: "bellsant",
  },
  {
    title: "Wogan Coffee",
    year: "2023",
    description: "We completely transformed the image of Bristol's finest coffee company.",
    tags: ["Branding", "Web design & development", "E-Commerce", "Digital Marketing"],
    sector: "Retail",
    image: `${IMG}/wogan-feature.png`,
    slug: "wogan-coffee",
  },
  {
    title: "BMS Performance",
    year: "2023",
    description: "A new identity for one of UK's greatest recruitment companies.",
    tags: ["Branding", "Web design & development"],
    sector: "B2B tech, software & SaaS",
    image: `${IMG}/bms-feature.png`,
    slug: "bms-performance",
  },
  {
    title: "AnaCap",
    year: "2023",
    description: "A new brand and website for a leading investor in the European financial sector",
    tags: ["Branding", "Web design & development"],
    sector: "B2B tech, software & SaaS",
    image: `${IMG}/anacap-feature.png`,
    slug: "anacap",
  },
  {
    title: "Super Yachts Monaco",
    year: "2021",
    description: "We crafted a beautiful website for the boutique yacht brokerage, SuperYachtsMonaco.",
    tags: ["Web design & development"],
    sector: "Retail",
    image: `${IMG}/superyachts-feature.png`,
    slug: "super-yachts-monaco",
  },
  {
    title: "Hassan Allam",
    year: "2023",
    description: "We took on the challenge of creating a new website for Egypt's largest engineering and construction company.",
    tags: ["Web design & development"],
    sector: "B2B transformation",
    image: `${IMG}/hassan-allam-feature.png`,
    slug: "hassan-allam",
  },
  {
    title: "Patchwork Health",
    year: "2023",
    description: "We created a fresh new platform for an innovative healthcare staffing solution.",
    tags: ["Web design & development"],
    sector: "Healthcare",
    image: `${IMG}/patchwork-feature.png`,
    slug: "patchwork-health",
  },
  {
    title: "Martin Building",
    year: "2019",
    description: "We created a cutting edge platform for San Francisco-based firm Martin Building.",
    tags: ["Branding", "Web design & development"],
    sector: "Agencies",
    image: `${IMG}/martin-building-feature.png`,
    slug: "martin-building",
  },
];

const FILTER_SECTORS = [
  "All",
  "Agencies",
  "SaaS and Tech",
  "B2B Transformation",
  "Healthcare",
  "Media & Entertainment",
  "Retail",
];

const FILTER_SERVICES = [
  "All",
  "Brand strategy",
  "Brand identity design",
  "Tone of voice",
  "Web design & development",
  "Branding",
  "Digital Marketing",
  "E-Commerce",
];

const FOOTER_LOGOS = [
  { src: `${IMG}/dan-logo.png`, alt: "Digital Agency Network" },
  { src: `${IMG}/clutch-footer.svg`, alt: "Clutch" },
  { src: `${IMG}/awwwards-footer.svg`, alt: "Awwwards" },
  { src: `${IMG}/cssda-footer.svg`, alt: "CSSDA" },
];

/* Hooks */

function useIntersectionObserver(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/* FadeIn */

function FadeIn({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* Container */

const containerStyle: React.CSSProperties = {
  maxWidth: "calc(1400px + 15%)",
  margin: "0 auto",
  padding: "0 7%",
};

/* Header */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.625rem 7vw",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <Link href="/" style={{ pointerEvents: "all" }}>
          <svg viewBox="0 0 90 90" width="60" height="60" fill="#000">
            <path d="M5 5h80v80H5V5zM0 90h90V0H0v90zm64.66-15.67l-5.15-16.61h-.1l-5.35 16.61H47.6l9.49-24.09h4.74l9.39 24.09h-6.56zm-39.77 0V55.67h-6.66v-5.43H37.6v5.43h-6.66v18.66h-6.06zm34.52-59.16c-3.94-.1-7.67 1.74-9.99 4.92-.64.81-1.15 1.7-1.52 2.67-.6 1.64-.9 3.38-.9 5.13v.05c.07 6.78 5.62 12.22 12.4 12.15h.56c6.88-.29 12.22-6.1 11.93-12.97-.28-6.69-5.79-11.96-12.48-11.94m.1 19.48c-3.94 0-6.56-3.38-6.56-7.18s2.62-6.97 6.46-6.97 6.46 3.38 6.46 7.07-2.52 7.08-6.36 7.08m-28.87 5.02l-6.46-10.35h-.1v10.35h-6.06v-24.1h6.06v10.87h.1l6.66-10.87h6.36l-7.87 12 8.38 12.1h-7.06z" />
          </svg>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link
            href="#"
            className="hire-us-desktop"
            style={{
              pointerEvents: "all",
              fontSize: "1.125rem",
              fontWeight: 400,
              padding: "0.95rem 1.35rem 1.05rem",
              background: "#000",
              borderRadius: "2.0625rem",
              color: "#fff",
              textDecoration: "none",
              display: "none",
            }}
          >
            Hire us
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            style={{
              pointerEvents: "all",
              width: "3.25rem",
              height: "3.25rem",
              border: "2px solid #000",
              borderRadius: "100%",
              background: "#fff",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span
              style={{
                width: "24px",
                height: "2px",
                background: "#000",
                transform: menuOpen
                  ? "translateY(0px) rotate(45deg)"
                  : "translateY(-3px)",
                transition: "all 0.3s ease",
              }}
            />
            <span
              style={{
                width: "24px",
                height: "2px",
                background: "#000",
                transform: menuOpen
                  ? "translateY(-2px) rotate(-45deg)"
                  : "translateY(3px)",
                transition: "all 0.3s ease",
              }}
            />
          </button>
        </div>
      </header>

      <style jsx>{`
        @media (min-width: 768px) {
          .hire-us-desktop {
            display: inline-block !important;
          }
        }
      `}</style>

      {/* Mobile menu overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100svh",
          background: "#fff",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {["Work", "Services", "About", "Blog"].map((item) => (
          <Link
            key={item}
            href="#"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
              color: "#000",
              textDecoration: "none",
              fontFamily: "var(--font-syne)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
        <Link
          href="#"
          style={{
            marginTop: "1rem",
            border: "1px solid #000",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            fontSize: "1.25rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#000",
            textDecoration: "none",
          }}
          onClick={() => setMenuOpen(false)}
        >
          Hire us
        </Link>
      </div>
    </>
  );
}

/* Hero */

function WorkHero() {
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
              maxWidth: "40ch",
              marginBottom: "2rem",
            }}
          >
            We are <em>experts</em> in bringing brands to life digitally.
          </p>
        </FadeIn>

        <div style={{ position: "relative", marginBottom: "3rem" }}>
          <FadeIn delay={0.1}>
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "0.9375rem",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source
                  src="https://kota-content.b-cdn.net/app/uploads/2025/10/Short-Preview-homepage.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </FadeIn>
        </div>

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
            Work
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h3
            style={{
              fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: "38ch",
              color: "#333",
              marginBottom: "1.5rem",
            }}
          >
            KOTA is a progressive and insightful design agency, technically and
            creatively skilled to translate your brand into its best digital self.
          </h3>
        </FadeIn>

        <FadeIn delay={0.35}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 75.91 75.65"
            fill="none"
          >
            <path
              d="m13.65 67.65 61.93-62L69.92 0 8 61.99V.25H0v75.4h75.91v-8H13.65z"
              fill="#000"
            />
          </svg>
        </FadeIn>
      </div>
    </section>
  );
}

/* Work Card */

function WorkCard({
  project,
  index,
}: {
  project: (typeof WORK_PROJECTS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.05}>
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
            cursor: "pointer",
            aspectRatio: "16/10",
            position: "relative",
            marginBottom: "1rem",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.375rem" }}>
          <h3
            style={{
              fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
              fontWeight: 400,
              color: "#000",
            }}
          >
            {project.title}
          </h3>
          <span style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.4)" }}>
            {project.year}
          </span>
        </div>

        <p
          style={{
            fontSize: "0.9375rem",
            color: "rgba(0,0,0,0.5)",
            lineHeight: 1.4,
            marginBottom: "0.75rem",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.6875rem",
                padding: "4px 10px 5px",
                borderRadius: "2rem",
                border: "1px solid rgba(0,0,0,0.15)",
                color: "rgba(0,0,0,0.5)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </FadeIn>
  );
}

/* Work Grid */

function WorkGrid() {
  const [activeFilterType, setActiveFilterType] = useState<"sectors" | "services">("sectors");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = activeFilterType === "sectors" ? FILTER_SECTORS : FILTER_SERVICES;

  const filteredProjects = WORK_PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilterType === "sectors") {
      return project.sector === activeFilter;
    }
    return project.tags.some((tag) => tag === activeFilter);
  });

  return (
    <section style={{ background: "#efefef", color: "#000", padding: "6rem 0 12rem" }}>
      <div style={containerStyle}>
        {/* Filter buttons */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <button
              onClick={() => {
                setActiveFilterType("sectors");
                setActiveFilter("All");
              }}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "2rem",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: activeFilterType === "sectors" ? 600 : 400,
                background: activeFilterType === "sectors" ? "#000" : "hsla(0,0%,100%,0.5)",
                color: activeFilterType === "sectors" ? "#fff" : "#000",
                transition: "all 0.3s ease",
              }}
            >
              Sectors
            </button>
            <button
              onClick={() => {
                setActiveFilterType("services");
                setActiveFilter("All");
              }}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "2rem",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: activeFilterType === "services" ? 600 : 400,
                background: activeFilterType === "services" ? "#000" : "hsla(0,0%,100%,0.5)",
                color: activeFilterType === "services" ? "#fff" : "#000",
                transition: "all 0.3s ease",
              }}
            >
              Services
            </button>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "2rem",
                  border: "1px solid rgba(0,0,0,0.15)",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: activeFilter === filter ? 600 : 400,
                  background: activeFilter === filter ? "#000" : "transparent",
                  color: activeFilter === filter ? "#fff" : "#000",
                  transition: "all 0.3s ease",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "3rem 1.5rem",
          }}
        >
          {filteredProjects.map((project, i) => (
            <WorkCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <FadeIn>
            <p
              style={{
                fontSize: "1.25rem",
                color: "rgba(0,0,0,0.5)",
                textAlign: "center",
                padding: "4rem 0",
              }}
            >
              No projects found for this filter.
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

/* Footer */

function Footer() {
  return (
    <footer style={{ background: "#000", color: "#fff", padding: "5rem 0" }}>
      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
            gridColumn: "span 12",
            marginBottom: "4rem",
          }}
        >
          {/* Col 1 */}
          <div>
            <a
              href="mailto:hello@kota.co.uk"
              className="rainbow-text"
              style={{
                fontSize: "clamp(1.25rem, 7.1vw, 7.5rem)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "1.5rem",
                wordBreak: "break-all",
              }}
            >
              hello@kota.co.uk
            </a>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
              {["LinkedIn", "Facebook", "Instagram", "Bluesky"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  style={{
                    fontSize: "1.25rem",
                    color: "#fff",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  {social}
                  <svg
                    width="0.7rem"
                    height="0.7rem"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transition: "transform 0.3s ease" }}
                  >
                    <path d="M1 11L11 1M11 1H3.5M11 1v7.5" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.25rem",
                fontWeight: 400,
              }}
            >
              Navigation
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3125rem" }}>
              {["Contact", "FAQs", "Privacy Policy"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid hsla(0,0%,100%,0.3)",
                    borderRadius: "50px",
                    padding: "0.625rem 1.4375rem",
                    textDecoration: "none",
                    margin: "0.3125rem 0.625rem 0.3125rem 0",
                    display: "inline-block",
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.25rem",
                fontWeight: 400,
              }}
            >
              Our sectors
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3125rem" }}>
              {[
                "Agencies",
                "SaaS and Tech",
                "B2B Transformation",
                "Healthcare",
                "Media & Entertainment",
                "Retail",
              ].map((sector) => (
                <Link
                  key={sector}
                  href="#"
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid hsla(0,0%,100%,0.3)",
                    borderRadius: "50px",
                    padding: "0.625rem 1.4375rem",
                    textDecoration: "none",
                    margin: "0.3125rem 0.625rem 0.3125rem 0",
                    display: "inline-block",
                  }}
                >
                  {sector}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1.25rem",
                fontWeight: 400,
              }}
            >
              Newsletter
            </h4>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>
              Sign up to our newsletter
            </p>
            <div style={{ display: "flex" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "50px 0 0 50px",
                  padding: "0.8125rem 1.125rem",
                  fontSize: "1.25rem",
                  color: "#fff",
                  background: "transparent",
                  outline: "none",
                  flex: 1,
                  minWidth: 0,
                }}
              />
              <button
                style={{
                  border: "2px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  fontSize: "1.25rem",
                  padding: "0.8125rem 1.4375rem",
                  borderRadius: "0 50px 50px 0",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = "#fff";
                  (e.target as HTMLButtonElement).style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = "transparent";
                  (e.target as HTMLButtonElement).style.color = "#fff";
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gridColumn: "span 12",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {FOOTER_LOGOS.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={70}
                height={28}
                style={{ height: "2.25rem", width: "auto" }}
              />
            ))}
          </div>
          <p style={{ fontSize: "1.25rem", color: "#fff" }}>&copy; KOTA 2026</p>
        </div>
      </div>
    </footer>
  );
}

/* Floating CTA */

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

/* Page */

export default function WorkPage() {
  return (
    <main>
      <Header />
      <WorkHero />
      <WorkGrid />
      <Footer />
      <FloatingStartButton />
    </main>
  );
}
