"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SITE_KEY = "kota-co-uk_ddbd9d9c";
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
    title: "Design with guts: KOTA's manifesto for creative bravery",
    tags: "Expertise, Inspiration",
    image: `${IMG}/design-with-guts.png`,
    link: "#",
  },
  {
    title: "KOTA wins a Lovie award for Best Web Design – Aesthetic!",
    tags: "Culture, Our work",
    image: `${IMG}/lovie-awards.png`,
    link: "#",
  },
  {
    title: "Brand-First vs Dev-First: What actually sets KOTA apart",
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

const FOOTER_LOGOS = [
  { src: `${IMG}/dan-logo.png`, alt: "Digital Agency Network" },
  { src: `${IMG}/clutch-footer.svg`, alt: "Clutch" },
  { src: `${IMG}/awwwards-footer.svg`, alt: "Awwwards" },
  { src: `${IMG}/cssda-footer.svg`, alt: "CSSDA" },
];

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

const containerStyle: React.CSSProperties = {
  maxWidth: "calc(1400px + 15%)",
  margin: "0 auto",
  padding: "0 7%",
};

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
            {`News, insights,\n& creative culture\nfrom KOTA.`}
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginTop: "1.5rem",
              }}
            >
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
                  >
                    <path d="M1 11L11 1M11 1H3.5M11 1v7.5" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

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
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "1rem",
              }}
            >
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
                  (e.target as HTMLButtonElement).style.background =
                    "transparent";
                  (e.target as HTMLButtonElement).style.color = "#fff";
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

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
