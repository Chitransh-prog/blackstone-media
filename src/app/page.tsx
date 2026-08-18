"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SITE_KEY = "blackstone-media_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;
const VID = `/sites/${SITE_KEY}/${PAGE_KEY}/videos`;

const SERVICES = [
  {
    id: "brand",
    title: "Brand strategy & identity",
    tabs: ["Brand strategy", "Brand identity design", "Tone of voice"],
    description:
      "When growth pulls at it, new audiences dilute it, and good intentions blur it, we'll strengthen your brand with clear decisions that feel inevitable.",
    link: "#",
  },
  {
    id: "web",
    title: "Web design & development",
    tabs: ["Creative web design", "Web development", "WordPress & CMS"],
    description:
      "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
    link: "#",
  },
  {
    id: "growth",
    title: "Growth marketing",
    tabs: ["SiteCare", "SEO & GEO", "Copywriting", "SEO & AI"],
    description:
      "Performance marketing that compounds — turning traffic into measurable growth.",
    link: "#",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    tabTitle: "Strategy first. Always",
    title: "Strategy first.\nAlways.",
    description:
      "Every great brand starts with clarity. We dig deep into your business, audience, and competitive landscape to find the strategic foundation that makes everything else click.",
    image: `${IMG}/copper-feature.png`,
  },
  {
    number: "02",
    tabTitle: "Find the bold idea",
    title: "Find the\nbold idea.",
    description:
      "Strategy without creativity is just a spreadsheet. We find the big idea that makes your brand unmistakable — the thing that makes people stop scrolling.",
    image: `${IMG}/featured-image.png`,
  },
  {
    number: "03",
    tabTitle: "Nail the process",
    title: "Nail the\nprocess.",
    description:
      "Beautiful ideas deserve beautiful execution. Our process is rigorous, collaborative, and built to deliver work that exceeds expectations every time.",
    image: `${IMG}/finura-logo-still.png`,
  },
  {
    number: "04",
    tabTitle: "Create to convert",
    title: "Create to\nconvert.",
    description:
      "Design isn't decoration — it's a growth engine. Every pixel, every interaction, every word is crafted to move your audience closer to action.",
    image: `${IMG}/goat-featured.png`,
  },
  {
    number: "05",
    tabTitle: "Build for scale",
    title: "Build for\nscale.",
    description:
      "Your brand needs to work as hard as you do. We build systems and digital experiences that grow with your business, not against it.",
    image: `${IMG}/upp-featured-mobile.jpg`,
  },
];

const PROJECTS = [
  {
    title: "UPP",
    year: "2025",
    description: "A cinematic web experience for a Hollywood powerhouse.",
    tags: ["Web design & development"],
    sector: "Agencies",
    image: `${IMG}/upp-featured-mobile.jpg`,
    video: `${VID}/featured2-compressed.mp4`,
    logo: `${IMG}/upp-logo.svg`,
  },
  {
    title: "Copper",
    year: "2026",
    description: "A new brand for the technology behind always-on markets.",
    tags: ["Tone of voice", "Visual identity", "Brand strategy", "Branding", "Web design & development"],
    sector: "Finance",
    image: `${IMG}/copper-feature.png`,
    video: `${VID}/copper-feature.mp4`,
    logo: null,
  },
  {
    title: "Bucher + Suter",
    year: "2026",
    description: "How Bucher + Suter found brand clarity through a new strategy with Blackstone Media",
    tags: ["Tone of voice", "Visual identity", "Brand strategy", "Branding", "Web design & development"],
    sector: "SaaS and Tech",
    image: `${IMG}/featured-image.png`,
    video: `${VID}/featured-video.mp4`,
    logo: null,
  },
  {
    title: "Finura",
    year: "2025",
    description: "A brand refresh that captures the essence of financial advisory.",
    tags: ["Brand strategy", "Brand identity design"],
    sector: "Finance",
    image: `${IMG}/finura-logo-still.png`,
    video: `${VID}/finura-logo-animation.mp4`,
    logo: `${IMG}/florence-logo-white.svg`,
  },
  {
    title: "GOAT",
    year: "2025",
    description: "Rebranding the world's largest sneaker marketplace.",
    tags: ["Visual identity", "Brand strategy", "Web design & development"],
    sector: "Retail",
    image: `${IMG}/goat-featured.png`,
    video: `${VID}/goat-feature.mp4`,
    logo: null,
  },
];

const STATISTICS = [
  {
    value: "67.6%",
    label: "rise in engaged sessions per user after 1 month.",
    description: "View Project",
    logo: `${IMG}/pison-logo-white.svg`,
    image: `${IMG}/pison-image.png`,
    bgImage: `${IMG}/statistics-bg-black.jpeg`,
  },
  {
    value: "70.8%",
    label: "increase in average engagement time after 3 months.",
    description: "View Project",
    logo: `${IMG}/dka-logo-white.svg`,
    image: `${IMG}/dka-image.png`,
    bgImage: `${IMG}/statistics-bg-black.jpeg`,
  },
  {
    value: "83.14%",
    label: "increase in sales after 1 year.",
    description: "View Project",
    logo: `${IMG}/wogan-logo-white.svg`,
    image: `${IMG}/wogan-image.png`,
    bgImage: `${IMG}/statistics-bg-black.jpeg`,
  },
  {
    value: "104.9%",
    label: "increase in organic visits after 1 month",
    description: "View project",
    logo: `${IMG}/isi-logo-white.svg`,
    image: `${IMG}/isi-image-whiteoutline.png`,
    bgImage: `${IMG}/statistics-bg-black.jpeg`,
  },
];

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

const TESTIMONIALS = [
  {
    quote:
      "\"It was our brand positioning work that really made everything click. Blackstone Media were empathetic, patient, flexible, quick, and, most importantly, incredibly talented with brand positioning, visual identity, and digital experiences. I've already recommended them twice!\"",
    author: "Shanice Daeche",
    role: "CMO",
  },
  {
    quote:
      "\"Beyond the aesthetics, the website is incredibly functional. The CMS gives us the flexibility and control we need to keep our content fresh and relevant, and they have significantly improved the website's performance and user experience.\"",
    author: "Jenny Frame",
    role: "Head of Marketing",
  },
  {
    quote:
      "\"Blackstone Media brought a level of strategic thinking and creative execution that we hadn't seen before. They didn't just build us a website — they gave us a platform that drives real business results.\"",
    author: "James Wright",
    role: "CEO",
  },
];

const FAQS = [
  {
    question: "How much does web design and development typically cost?",
    answer:
      "The majority of our projects sit between £30k and £150k, but project costs will depend on the final scope of work and vary from project to project. We generally prefer to agree a fixed cost with agreed milestone payments.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "A web design and build project can last around 12-14 weeks, whereas brand-into-website-and-marketing can take 6 months or more. There are always ways to consider business objectives (such as phased launches) so even if your timescales don't work with this, it's always worth reaching out.",
  },
  {
    question: "Can your creative agency accommodate tight deadlines?",
    answer:
      "We understand that sometimes timelines are non-negotiable. While we always aim to deliver the best possible work within the timeframe, we can discuss phased approaches or MVP launches to meet your deadlines.",
  },
  {
    question: "Do you work with startups or only established brands?",
    answer:
      "We work with businesses at every stage — from ambitious startups looking to make their mark, to established brands seeking refresh and growth. Our approach scales to fit your needs and budget.",
  },
  {
    question: "What makes Blackstone Media different from other agencies?",
    answer:
      "We're a brand-to-build agency — meaning we handle everything from strategy and identity through to web design, development, and ongoing marketing. This end-to-end approach ensures consistency and efficiency across every touchpoint.",
  },
];

const ARTICLES = [
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

const AWARD_LOGOS = [
  { src: `${IMG}/digital-agency-network.svg`, alt: "Digital Agency Network" },
  { src: `${IMG}/clutch.svg`, alt: "Clutch" },
  { src: `${IMG}/awwwards.svg`, alt: "Awwwards" },
  { src: `${IMG}/cssda.svg`, alt: "CSSDA" },
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

function HeroSection() {
  return (
    <section
      style={{
        display: "flex",
        height: "100svh",
        minHeight: "100svh",
        pointerEvents: "none",
        position: "relative",
        background: "#efefef",
        overflow: "hidden",
      }}
    >
      {/* Celebrating banner */}
      <div
        style={{
          position: "absolute",
          top: 0,
          fontSize: "0.75rem",
          lineHeight: 1,
          letterSpacing: "0.093em",
          textTransform: "uppercase",
          color: "#000",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "7rem",
          padding: "1.5625rem 6.25rem",
          pointerEvents: "none",
        }}
      >
        Celebrating 13 years : 2013 - 2026
      </div>

      {/* Video behind text mask */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
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
          <source src={`${VID}/hero-short-preview.mp4`} type="video/mp4" />
        </video>
      </div>

      <div
        style={{
          ...containerStyle,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "6rem",
          width: "100%",
          paddingTop: "5.625rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <FadeIn>
          <svg
            viewBox="0 0 1200 300"
            style={{ width: "100%", height: "auto", display: "block" }}
            aria-label="REBEL AGAINST BORING"
          >
            <defs>
              <mask id="hero-mask">
                <rect width="1200" height="300" fill="black" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="130"
                  fontWeight={400}
                  letterSpacing="-0.02em"
                  style={{ fontFamily: "var(--font-montreal)" }}
                >
                  <tspan x="50%" dy="-80">REBEL</tspan>
                  <tspan x="50%" dy="110">AGAINST</tspan>
                  <tspan x="50%" dy="110">BORING</tspan>
                </text>
              </mask>
            </defs>
            <rect
              width="1200"
              height="300"
              fill="#efefef"
              mask="url(#hero-mask)"
              className="hero-clip"
            />
          </svg>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p
            style={{
              fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
              fontWeight: 400,
              lineHeight: 1.25,
              maxWidth: "30ch",
              marginTop: "1.5rem",
              color: "#000",
            }}
          >
            A global branding agency and creative web design studio based in
            London,{" "}
            <strong>
              where strategic-thinkers give bold brands their edge.
            </strong>
          </p>
        </FadeIn>
      </div>

      <style jsx>{`
        .hero-clip {
          animation: heroReveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }
        @keyframes heroReveal {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
    </section>
  );
}

/* Hero Logos */

function HeroLogos() {
  return (
    <FadeIn
      style={{
        padding: "3.5rem 0",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        background: "#efefef",
      }}
    >
      <div style={containerStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(2.5rem, 4vw, 5rem)",
            flexWrap: "wrap",
          }}
        >
          {AWARD_LOGOS.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={48}
              style={{ height: "2.5rem", width: "auto", opacity: 0.5 }}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

/* Approach */

function ApproachSection() {
  return (
    <section
      style={{ padding: "9.375rem 0 0", background: "#efefef", color: "#000" }}
    >
      <div style={containerStyle}>
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 4.26vw, 4.375rem)",
              lineHeight: 1,
              color: "#000",
              whiteSpace: "pre-line",
              fontWeight: 400,
              marginBottom: "4rem",
            }}
          >
            {`Shaping how global\nbrands are seen, trusted,\nand remembered.`}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.4,
              maxWidth: "31.25rem",
              marginBottom: "4rem",
            }}
          >
            There are moments of change for every brand, whether it&apos;s
            rapid growth, new goals, or new expectations. That&apos;s where our
            work begins.
          </p>
        </FadeIn>

        <div
          style={{
            display: "flex",
            gap: "4.7rem",
            marginTop: "4rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "01", title: "Brand Clarity", desc: "Decisions that help brands re-position and commit." },
            { num: "02", title: "Creative Craft", desc: "Visually confident design built to stand out." },
            { num: "03", title: "Commercial Momentum", desc: "Scalable systems with growth in mind." },
          ].map((item, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div
                style={{
                  backgroundColor: "hsla(0, 0%, 100%, 0.4)",
                  padding: "2.1875rem 2rem",
                  borderRadius: "10px 100px 10px 10px",
                  flex: "1 1 280px",
                }}
              >
                <span
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "4.5rem",
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  {item.num}
                </span>
                <h3
                  style={{
                    fontSize: "clamp(1.875rem, 3.5vw, 60px)",
                    width: "min-content",
                    lineHeight: 0.95,
                    marginBottom: "0.5rem",
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "1.25rem", lineHeight: 1.4, color: "#666" }}>
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Services */

function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "9.375rem 0 50vh",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "0.75rem" }}>
            <div style={{ gridColumn: "span 11" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(3rem, 10.6vw, 10rem)",
                  lineHeight: 0.9,
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
                  Our
                </span>
                Services
              </span>
            </div>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "0.75rem" }}>
          <div style={{ gridColumn: "1 / span 11", paddingLeft: "13.5%" }}>
            <div style={{ marginBottom: "10vh" }} />

            {SERVICES.map((service, i) => {
              const isOpen = activeService === i;
              return (
                <div
                  key={service.id}
                  style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)" }}
                >
                  <button
                    onClick={() => setActiveService(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "2.5rem 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(22px, 3vw, 36px)",
                        fontWeight: 400,
                        color: "#fff",
                      }}
                    >
                      {service.title}
                    </span>
                    <span
                      style={{
                        fontSize: "2rem",
                        fontWeight: 300,
                        color: "#fff",
                        flexShrink: 0,
                        transition: "transform 0.3s ease",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: isOpen ? "600px" : "0",
                      transition: "max-height 0.5s ease",
                      paddingBottom: isOpen ? "2.5rem" : 0,
                    }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "4rem",
                        position: "relative",
                        width: "100%",
                        padding: "2.5rem",
                        color: "#000",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                          marginBottom: "1.5rem",
                        }}
                      >
                        {service.tabs.map((tab) => (
                          <span
                            key={tab}
                            style={{
                              fontSize: "1.125rem",
                              border: "2px solid rgba(255, 255, 255, 0.3)",
                              borderRadius: "2rem",
                              padding: "5px 10px",
                              color: "#fff",
                              background: "#000",
                            }}
                          >
                            {tab}
                          </span>
                        ))}
                      </div>

                      <p
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: 1.4,
                          maxWidth: "31.25rem",
                          marginBottom: "2rem",
                          color: "#333",
                        }}
                      >
                        {service.description}
                      </p>

                      <Link
                        href={service.link}
                        style={{
                          fontSize: "12px",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "rgba(0, 0, 0, 0.5)",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
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
                    </div>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Process Carousel */

function ProcessCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      style={{ background: "#efefef", color: "#000", zIndex: 2, overflow: "clip", paddingBottom: "13rem" }}
    >
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              textAlign: "center",
              lineHeight: 0.95,
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              whiteSpace: "pre-line",
            }}
          >
            {`Our brand-to-build\nframework.`}
          </h2>
        </FadeIn>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "3rem",
            overflowX: "auto",
            paddingBottom: "0.5rem",
            scrollbarWidth: "none",
          }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                flexShrink: 0,
                padding: "0.75rem 1.2rem",
                color: activeStep === i ? "#fff" : "#000",
                background: activeStep === i ? "#000" : "hsla(0, 0%, 100%, 0.5)",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                borderRadius: "2rem",
                whiteSpace: "nowrap",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ opacity: 0.5, marginRight: "0.5rem" }}>{step.number}</span>
              {step.tabTitle}
            </button>
          ))}
        </div>

        <div
          key={activeStep}
          style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}
        >
          <FadeIn
            style={{
              flex: "0 0 50%",
              padding: "2rem 2.4rem",
              display: "flex",
              flexFlow: "column",
              gap: "0.875rem",
              minWidth: "300px",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.875rem, 3.5vw, 60px)",
                lineHeight: 1.05,
                whiteSpace: "pre-wrap",
                fontWeight: 400,
                color: "#000",
              }}
            >
              {PROCESS_STEPS[activeStep].title}
            </h3>
            <p
              style={{ fontSize: "1.25rem", lineHeight: 1.4, color: "#666", maxWidth: "30ch" }}
            >
              {PROCESS_STEPS[activeStep].description}
            </p>
          </FadeIn>

          <FadeIn
            key={`img-${activeStep}`}
            delay={0.1}
            style={{
              flex: "0 0 50%",
              minHeight: "15rem",
              aspectRatio: "562/434",
              borderRadius: "1rem",
              overflow: "hidden",
              position: "relative",
              minWidth: "300px",
            }}
          >
            <Image
              src={PROCESS_STEPS[activeStep].image}
              alt={PROCESS_STEPS[activeStep].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* Work */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (hovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        if (videoRef.current.currentTime) videoRef.current.currentTime = 0;
      }
    }
  }, [hovered]);

  return (
    <FadeIn delay={index * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: "0.9375rem",
          overflow: "hidden",
          cursor: "pointer",
          aspectRatio: "16/10",
          position: "relative",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "cover",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.5s ease",
          }}
        />
        {project.video && (
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            <source src={project.video} type="video/mp4" />
          </video>
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
          }}
        />

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.375rem" }}>
            <h3
              style={{
                fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
                fontWeight: 400,
                color: "#fff",
              }}
            >
              {project.title}
            </h3>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>
              {project.year}
            </span>
          </div>

          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.6)",
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
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function WorkSection() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "12rem 0 5.5rem",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "0.75rem",
            marginBottom: "4rem",
          }}
        >
          <FadeIn style={{ gridColumn: "span 6" }}>
            <span
              style={{
                display: "block",
                fontSize: "clamp(3.125rem, 10.6vw, 10rem)",
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
                Our
              </span>
              Work
            </span>
          </FadeIn>

          <FadeIn delay={0.1} style={{ gridColumn: "span 6", paddingLeft: "13.5%", margin: "1rem 0 0" }}>
            <h3
              style={{
                fontSize: "clamp(2.5rem, 4.3vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.07,
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Making brands a damn site better.
            </h3>
            <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.5)" }}>
              Dive into our projects and the decisions that shaped them.
            </p>
          </FadeIn>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5625rem",
          }}
        >
          {PROJECTS.map((project, i) => (
            <div key={project.title} style={{ gridColumn: "span 6" }}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Statistics */

function StatisticsSection() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "2rem 0 12rem",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={containerStyle}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "0.75rem" }}>
          <FadeIn style={{ gridColumn: "span 12" }}>
            <div style={{ marginBottom: "4rem" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(14px, 2vw, 18px)",
                  letterSpacing: "0.06em",
                  opacity: 0.6,
                  marginBottom: "0.5rem",
                }}
              >
                Our
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(3.125rem, 10.6vw, 10rem)",
                  lineHeight: 0.8,
                  textTransform: "uppercase",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                }}
              >
                Results
              </span>
            </div>
          </FadeIn>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {STATISTICS.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link
                href="#"
                style={{
                  border: "2px solid hsla(0,0%,100%,0.4)",
                  background: "#000",
                  padding: "4rem 5rem 2.5rem 4rem",
                  borderRadius: "20px 200px 20px 20px",
                  minHeight: "60vh",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textDecoration: "none",
                }}
              >
                <div style={{ position: "relative", zIndex: 10 }}>
                  <div style={{ marginBottom: "5rem" }}>
                    <Image
                      src={stat.logo}
                      alt=""
                      width={150}
                      height={100}
                      style={{
                        height: "100px",
                        width: "auto",
                        maxWidth: "150px",
                      }}
                    />
                  </div>
                  <h3
                    className="rainbow-text"
                    style={{
                      fontSize: "clamp(6rem, 10vw, 10rem)",
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(1.5rem, 2.125vw, 2.125rem)",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      color: "rgba(255,255,255,0.6)",
                      marginTop: "1rem",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>

                <div style={{ position: "relative", zIndex: 10, marginTop: "2rem" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.5)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    {stat.description}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 11L11 1M11 1H3.5M11 1v7.5" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Partners */

function PartnersSection() {
  return (
    <section style={{ background: "#000", color: "#fff", paddingBottom: "5rem" }}>
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <span
            style={{
              display: "block",
              fontSize: "clamp(3.125rem, 10.6vw, 10rem)",
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
              Our
            </span>
            Partners
          </span>
        </FadeIn>

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
                  filter: "grayscale(100%)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "1";
                  (e.target as HTMLImageElement).style.filter = "grayscale(0%)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.opacity = "0.5";
                  (e.target as HTMLImageElement).style.filter = "grayscale(100%)";
                }}
              />
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
    <section
      style={{ background: "#000", color: "#fff", padding: "4rem 0 10rem" }}
    >
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

/* FAQs */

function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
      style={{ background: "#000", color: "#fff", padding: "6.5rem 0 2rem" }}
    >
      <div style={containerStyle}>
        <FadeIn style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7.1vw, 7.5rem)",
              letterSpacing: "-0.02em",
              fontWeight: 400,
              lineHeight: 1,
              color: "#fff",
            }}
          >
            FAQ&apos;s
          </h2>
        </FadeIn>

        <div style={{ maxWidth: "50rem" }}>
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(1.5rem, 1.8vw, 2.1875rem)",
                      fontWeight: 400,
                      lineHeight: 1.14,
                      maxWidth: "44ch",
                      color: "#fff",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: 300,
                      color: "#fff",
                      flexShrink: 0,
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "400px" : "0",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(1.8rem, 3.8vw, 3.8rem)",
                      paddingLeft: "calc(0.5rem + 1ch)",
                      maxWidth: "22ch",
                      lineHeight: 1.4,
                      color: "rgba(255,255,255,0.5)",
                      paddingBottom: isOpen ? "1.5rem" : 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }} />
        </div>
      </div>
    </section>
  );
}

/* Articles */

function ArticlesSection() {
  return (
    <section style={{ background: "#000", color: "#fff", paddingBottom: "4rem" }}>
      <div style={containerStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "3.125rem 1.5625rem",
          }}
        >
          {ARTICLES.map((article, i) => (
            <FadeIn key={i} delay={i * 0.08} style={{ gridColumn: "span 4" }}>
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
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
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
                    color: "#fff",
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

/* Kotaverse CTA */

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
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
                fontWeight: 700,
                fontFamily: "var(--font-syne)",
                color: "#fff",
                marginBottom: "1.5rem",
              }}
            >
              Enter the
              <br />
              Kotaverse
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                maxWidth: "30rem",
                margin: "0 auto 2.5rem",
                fontSize: "1.25rem",
                lineHeight: 1.4,
              }}
            >
              A creative dimension where brands come alive. Explore our world of
              bold ideas and digital craft.
            </p>
            <Link
              href="#"
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "2rem",
                padding: "0.875rem 2rem",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#fff",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background = "#fff";
                (e.target as HTMLAnchorElement).style.color = "#000";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = "transparent";
                (e.target as HTMLAnchorElement).style.color = "#fff";
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
              href="mailto:hello@blackstonemedia.com"
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
              hello@blackstonemedia.com
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
          <p style={{ fontSize: "1.25rem", color: "#fff" }}>© Blackstone Media 2026</p>
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

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HeroLogos />
      <ApproachSection />
      <ServicesSection />
      <ProcessCarousel />
      <WorkSection />
      <StatisticsSection />
      <PartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <ArticlesSection />
      <KotaverseCTA />
      <Footer />
      <FloatingStartButton />
    </main>
  );
}
