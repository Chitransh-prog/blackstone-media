"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, FadeIn, containerStyle, FloatingStartButton } from "@/components/shared";

const SITE_KEY = "blackstone-media_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;

const BLOG_ARTICLES = [
  {
    title: "Branding inspiration: design trends for 2026",
    tags: "Expertise, Inspiration",
    image: `${IMG}/brand-trend-2026.png`,
    link: "#",
  },
  {
    title: "Design with guts: Blackstone Media's manifesto for creative bravery",
    tags: "Expertise, Inspiration",
    image: `${IMG}/design-with-guts.png`,
    link: "#",
  },
  {
    title: "Blackstone Media wins a Lovie award for Best Web Design – Aesthetic!",
    tags: "Culture, Our work",
    image: `${IMG}/lovie-awards.png`,
    link: "#",
  },
  {
    title: "Brand-First vs Dev-First: What actually sets Blackstone Media apart",
    tags: "Expertise",
    image: `${IMG}/rebel-against-boring.png`,
    link: "#",
  },
  {
    title: "10 creative websites to inspire your next design (2025 update)",
    tags: "Inspiration",
    image: `${IMG}/creative-web-design-inspo.png`,
    link: "#",
  },
  {
    title: "Web design inspiration: 50 sites to bookmark",
    tags: "Inspiration",
    image: `${IMG}/website-design-inspo.png`,
    link: "#",
  },
];

const FILTER_CATEGORIES = [
  "All",
  "Culture",
  "Expertise",
  "Inspiration",
  "Our work",
];

function BlogHero() {
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
          justifyContent: "flex-end",
          paddingBottom: "6rem",
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
            {`News, insights,\n& creative culture\nfrom Blackstone Media.`}
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}

function BlogFilters({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (f: string) => void;
}) {
  return (
    <FadeIn>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          padding: "3rem 0 4rem",
        }}
      >
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: "2rem",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              background:
                activeFilter === cat ? "#000" : "hsla(0, 0%, 90%, 0.5)",
              color: activeFilter === cat ? "#fff" : "#000",
              transition: "all 0.3s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </FadeIn>
  );
}

function BlogArticleCard({
  article,
  index,
}: {
  article: (typeof BLOG_ARTICLES)[0];
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.08}>
      <Link href={article.link} style={{ textDecoration: "none", display: "block" }}>
        <div
          style={{
            position: "relative",
            aspectRatio: "16/9",
            borderRadius: "0.6875rem",
            overflow: "hidden",
            marginBottom: "1rem",
          }}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
          />
        </div>
        <span
          style={{
            display: "inline-block",
            fontSize: "0.8125rem",
            lineHeight: 1,
            letterSpacing: "-0.01em",
            background: "#000",
            padding: "8px 15px",
            borderRadius: "2rem",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.25)",
            marginBottom: "0.75rem",
          }}
        >
          {article.tags}
        </span>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 400,
            lineHeight: 1.4,
            color: "#000",
          }}
        >
          {article.title}
        </h3>
      </Link>
    </FadeIn>
  );
}

function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((a) =>
          a.tags.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section style={{ background: "#efefef", color: "#000", padding: "0 0 6rem" }}>
      <div style={containerStyle}>
        <BlogFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3.125rem 1.5625rem",
          }}
        >
          {filtered.map((article, i) => (
            <BlogArticleCard key={article.title} article={article} index={i} />
          ))}
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
              Explore
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <main>
      <Header />
      <BlogHero />
      <BlogGrid />
      <KotaverseCTA />
      <Footer />
      <FloatingStartButton />
    </main>
  );
}
