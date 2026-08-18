"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, FadeIn, containerStyle, FloatingStartButton } from "@/components/shared";

const SITE_KEY = "blackstone-media_ddbd9d9c";
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
    description: "How Bucher + Suter found brand clarity through a new strategy with Blackstone Media",
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
            Blackstone Media is a progressive and insightful design agency, technically and
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
