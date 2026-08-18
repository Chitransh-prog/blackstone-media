"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SITE_KEY = "kota-co-uk_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;

const PARTNERS = [
  { name: "Jamie Oliver", logo: `${IMG}/jamie-oliver.svg` },
  { name: "Comptoir Libanais", logo: `${IMG}/comptoir-libanais.svg` },
  { name: "British Red Cross", logo: `${IMG}/british-red-cross.svg` },
  { name: "SYM", logo: `${IMG}/sym.svg` },
  { name: "Penguin", logo: `${IMG}/penguin.svg` },
  { name: "Raw", logo: `${IMG}/raw.svg` },
  { name: "Penhaligons", logo: `${IMG}/penhaligons.svg` },
  { name: "Stoli", logo: `${IMG}/stoli.svg` },
  { name: "Bounce", logo: `${IMG}/bounce.svg` },
  { name: "Tangerine", logo: `${IMG}/tangerine.svg` },
  { name: "Tribepad", logo: `${IMG}/tribepad.svg` },
  { name: "Matchroom", logo: `${IMG}/matchroom.svg` },
  { name: "Diageo", logo: `${IMG}/diageo.svg` },
  { name: "Sonovate", logo: `${IMG}/sonovate.svg` },
  { name: "Saatchi", logo: `${IMG}/saatchi.svg` },
];

const TEAM_MEMBERS = [
  {
    name: "Adhi",
    role: "Graphic Designer",
    image: `${IMG}/adhi-portrait.jpg`,
    bio: "Adhi is a graphic designer with a background in branding, having worked on visual identity systems for global brands across Asia. At KOTA, he focuses on bringing brands to life digitally while maintaining the principles of visual communication.",
  },
  {
    name: "Matt",
    role: "Creative Director",
    image: `${IMG}/matt-portrait.jpg`,
    bio: "Matt brings over a decade of creative leadership to KOTA. He believes in the power of design to transform businesses and is passionate about creating work that pushes boundaries.",
  },
  {
    name: "Saul",
    role: "Managing Director",
    image: `${IMG}/saul-portrait.jpg`,
    bio: "Saul founded KOTA with a vision to create a different kind of agency — one that values craft, creativity, and genuine partnerships with clients.",
  },
  {
    name: "Alex",
    role: "Head of Development",
    image: `${IMG}/alex-portrait.jpg`,
    bio: "Alex leads KOTA's development team with a deep understanding of web technologies and a commitment to building performant, scalable digital experiences.",
  },
];

const AWARDS = [
  { name: "Awwwards", type: "Honourable mention", count: "x 12" },
  { name: "Mindsparkle Mag", type: "Site of the day", count: "x 2" },
  { name: "CSS Design Awards", type: "Special Kudos", count: "x 3" },
  { name: "FWA", type: "Site of the day", count: "x 1" },
  { name: "The Lovies", type: "Best Web Design - Aesthetic", count: "x 1" },
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

function AgencyHero() {
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
            Proudly signing every piece.
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
            Agency
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
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
      </div>
    </section>
  );
}

/* Mission */

function MissionSection() {
  return (
    <section style={{ background: "#efefef", color: "#000", padding: "9.375rem 0" }}>
      <div style={containerStyle}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1.5rem", alignItems: "start" }}>
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
                Our
                <br />
                Mission
              </h2>
            </FadeIn>
          </div>

          <div style={{ gridColumn: "span 6", gridColumnStart: 7 }}>
            <FadeIn delay={0.1}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "810/730",
                  borderRadius: "0.9375rem",
                  overflow: "hidden",
                  marginBottom: "3rem",
                }}
              >
                <Image
                  src="https://kota-content.b-cdn.net/app/uploads/2023/11/mission.jpg"
                  alt="Our Mission"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.1875rem)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                To make the digital world more beautiful, thoughtful &amp; impactful.
              </h3>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  color: "#666",
                  maxWidth: "40ch",
                }}
              >
                Every pixel matters to us because we know it matters to our clients.
                We understand that great creativity is not simply about big ideas;
                it&apos;s also about the smallest details. Our focus on the minutiae
                is not just an obsession, it&apos;s a reflection of our commitment to
                providing the highest quality service, and we&apos;re really proud of that.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Video */

function VideoSection() {
  return (
    <section style={{ background: "#000", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          position: "relative",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src="https://kota-content.b-cdn.net/app/uploads/2025/10/Short-Preview-homepage.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}

/* Approach */

function ApproachSection() {
  return (
    <section style={{ background: "#efefef", color: "#000", padding: "9.375rem 0" }}>
      <div style={containerStyle}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1.5rem", alignItems: "start" }}>
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
                Our
                <br />
                Approach
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
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

            <FadeIn delay={0.2}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1086/1134",
                  borderRadius: "0.9375rem",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="https://kota-content.b-cdn.net/app/uploads/2023/11/approach.jpg"
                  alt="Our Approach"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </FadeIn>
          </div>

          <div style={{ gridColumn: "span 5", gridColumnStart: 8, paddingTop: "20vh" }}>
            <FadeIn delay={0.3}>
              <div style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "#333" }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  We&apos;re not just coders who take instructions – we&apos;re artists
                  who take pride in being bold and draw inspiration from the wider
                  creative world of music, film and the arts.
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  You&apos;ll never see us play it safe, and we especially like
                  partnering with clients who are up for making digital waves.
                </p>
                <p>
                  Sustainability is very close to our hearts, too. If your brand
                  makes a positive impact on the environment, we&apos;d relish in
                  making it even bigger.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Culture */

function CultureSection() {
  return (
    <section style={{ background: "#efefef", color: "#000", padding: "6rem 0" }}>
      <div style={containerStyle}>
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "2rem",
            }}
          >
            <em>Our culture</em> is core to everything we do.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Link
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              border: "1px solid #000",
              borderRadius: "2rem",
              padding: "0.875rem 2rem",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#000",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            Find out more
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

/* Partners */

function PartnersSection() {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "9.375rem 0" }}>
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.6)",
              maxWidth: "50ch",
              marginBottom: "4rem",
            }}
          >
            The brands we partner with are looking to push their industry boundaries,
            and ready to invest quality resources into their digital. They want to work
            with a close, more specialist team they click with – and who they trust to
            take them outside of their creative comfort zone.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1.5rem", alignItems: "center", marginBottom: "4rem" }}>
          <div style={{ gridColumn: "span 6" }}>
            <FadeIn>
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
                  lineHeight: 0.95,
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                }}
              >
                Our
                <br />
                Partners
              </h2>
            </FadeIn>
          </div>
          <div style={{ gridColumn: "span 1", gridColumnStart: 8 }}>
            <FadeIn delay={0.1}>
              <svg width="80" height="80" viewBox="0 0 111.42 110.66" fill="none">
                <polygon
                  points="13.65 102.66 109.53 6.67 103.87 1.02 8 97 8 0 0 0 0 110.66 111.42 110.66 111.42 102.66 13.65 102.66"
                  fill="#fff"
                />
              </svg>
            </FadeIn>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2.5rem 0.75rem",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {PARTNERS.map((partner, i) => (
            <FadeIn key={i} delay={i * 0.03}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={60}
                style={{
                  height: "4rem",
                  width: "auto",
                  opacity: 0.5,
                  filter: "grayscale(100%) brightness(0) invert(1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "1";
                  (e.target as HTMLImageElement).style.filter = "grayscale(0%) brightness(1) invert(0)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "0.5";
                  (e.target as HTMLImageElement).style.filter = "grayscale(100%) brightness(0) invert(1)";
                }}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Big Ups */

function BigUpsSection() {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "6rem 0" }}>
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            Big Ups
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "4rem" }}>
          {[
            { platform: "Clutch", rating: "5.0", reviews: "27 reviews" },
            { platform: "Google", rating: "4.9", reviews: "24 reviews" },
          ].map((review, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>{review.platform}</span>
                <div style={{ display: "flex", gap: "0.125rem" }}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 13.25 12.63">
                      <path fill="#ea4335" d="M13.24 5.05a.616.616 0 00-.5-.72h-.03L8.94 3.8 7.21.36A.492.492 0 006.94.1a.671.671 0 00-.92.24s0 .01-.01.02L4.36 3.8l-3.77.53a.406.406 0 00-.4.2c-.26.24-.27.65-.02.9l.02.02L2.9 8.1l-.66 3.77c-.01.14.01.27.07.4.17.33.58.45.91.28 0 0 .01 0 .02-.01l3.38-1.79L10 12.54c.1.06.22.08.33.07h.13c.36-.08.6-.43.53-.79l-.66-3.77 2.71-2.65c.13-.06.2-.19.2-.34z" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                  {review.rating} ({review.reviews})
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {AWARDS.map((award, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "1.25rem", fontWeight: 400 }}>{award.name}</span>
                  <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                    {award.type}
                  </span>
                </div>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>
                  {award.count}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Team */

function TeamSection() {
  const [activeMember, setActiveMember] = useState<number | null>(null);

  return (
    <section style={{ background: "#000", color: "#fff", padding: "9.375rem 0" }}>
      <div style={containerStyle}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1.5rem", marginBottom: "4rem" }}>
          <div style={{ gridColumn: "span 6" }}>
            <FadeIn>
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
                  lineHeight: 0.95,
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                }}
              >
                Our
                <br />
                Team
              </h2>
            </FadeIn>
          </div>
          <div style={{ gridColumn: "span 5", gridColumnStart: 8, paddingTop: "2rem" }}>
            <FadeIn delay={0.1}>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>
                We&apos;re proud to be a Certified Great Place to Work®! You&apos;ll
                find us working across Creative Web Design, Web Development, Branding,
                and Digital Marketing.
              </p>
            </FadeIn>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {TEAM_MEMBERS.map((member, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  borderRadius: "0.9375rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  aspectRatio: "3/4",
                  background: "#111",
                }}
                onClick={() => setActiveMember(activeMember === i ? null : i)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: "cover", transition: "opacity 0.5s ease" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.5rem",
                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                  }}
                >
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 400, marginBottom: "0.25rem" }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                    {member.role}
                  </p>
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: activeMember === i ? "200px" : "0",
                      transition: "max-height 0.5s ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.5,
                        marginTop: "0.75rem",
                      }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Contact CTA */

function ContactCTA() {
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
            Let&apos;s start
            <br />
            a project
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", marginBottom: "1rem" }}>
            Ready to bring your brand to life digitally?
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

export default function AgencyPage() {
  return (
    <main>
      <Header />
      <AgencyHero />
      <MissionSection />
      <VideoSection />
      <ApproachSection />
      <CultureSection />
      <PartnersSection />
      <BigUpsSection />
      <TeamSection />
      <ContactCTA />
      <Footer />
      <FloatingStartButton />
    </main>
  );
}
