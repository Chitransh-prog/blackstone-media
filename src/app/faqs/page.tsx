"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Header,
  Footer,
  FadeIn,
  containerStyle,
  FloatingStartButton,
} from "@/components/shared";

const SITE_KEY = "kota-co-uk_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;

const FAQS = [
  {
    question: "What projects do you work on?",
    answer:
      "Our projects vary in size often dictated by the service types. Projects we love are rooted in deep strategic thinking that drives real business impact, always led by beautiful design.\n\nExample 1: Brand positioning > Tone of voice / Copywriting > Brand identity > Web design, UX and development > Ongoing SiteCare partnership.\n\nExample 2: You might have already been through a brand process and looking for KOTA to bring it to life online through our web design and development process.\n\nNot sure what you need? We are always happy to chat.",
  },
  {
    question: "What budgets do you work with?",
    answer:
      "We don't offer 'out of the box' solutions and therefore don't have any 'out of the box' pricing. The majority of our full projects sit between £30k and £150k, but project costs will depend on the final scope of work and vary from project to project. We generally have a minimum project size of £25k. We prefer to agree a fixed cost with agreed milestone payments.",
  },
  {
    question: "How long does an average project take?",
    answer:
      "A web design and build project can last around 12-14 weeks, whereas brand into web and marketing deliverables into a launch campaign can take 6 months or more. There are always ways to consider business objectives (such as phased launches) so even if your timescales don't work with this, it's always worth reaching out.",
  },
  {
    question: "Can you start straight away?",
    answer:
      "The start of the project can often involve work on the client side to get into an agreement, gather data and begin answering questionnaires. There will also be general onboarding such as project management and the project schedule. We will also have an internal kick-off to ensure the team is aligned. The client kick-off is the first milestone, and this is often anywhere from 2-4 weeks from the signed agreement.",
  },
  {
    question: "I love your work but I can't see experience in my sector.",
    answer:
      "We deliberately adapt and change our portfolio to keep our website exciting and relevant.\n\nOver 10 years we have been fortunate to work with a range of sectors and brands over both B2B and B2C. We pride ourselves on not being focused on one industry and bringing our experience from multiple industries to each brief. This is something that sets KOTA apart.",
  },
  {
    question: "Do you work with templates?",
    answer:
      "No. We pride ourselves on both our design and build solutions being custom to the requirements of the project. Often templates are filled with code bloat and many other issues that get found further down the line.",
  },
  {
    question: "What clients do you partner with and who is your ideal client?",
    answer:
      "We are lucky to generate an enormous amount of enquiries from our referral network and brand partners. Therefore, we are in a fortunate position to choose our partners carefully;\n\n- We partner with brands where we feel we can add huge value to their business.\n- We partner with brands we are passionate about.\n- We partner with brands that don't want a quick fix but want a long-term partner they can rely on.\n\nOur business is built on referrals and recommendations, therefore it's key our next partner will continue on the same trajectory.\n\nNot sure what you need? We are always happy to chat.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Our clients are based everywhere, from Europe and the United Kingdom, to America or the Middle East. We love immersing ourselves in new countries, cultures and businesses. Some clients prefer collaborative Slack channels and some weekly calls. Our process isn't negotiable but our communication is. Read more about our process here.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "SiteCare is a key part of our business and ensuring the success of the project over a longer period of time. Not only do we offer the expected maintenance and security but we also offer design and marketing support. Our goal is to become an extension of your in-house marketing team and we will tailor a team and offering that empowers your internal team. You can read more about SiteCare here.",
  },
  {
    question: "Will you meet in person?",
    answer:
      "Yes. We are a remote-first company but we LOVE meeting our clients in person, mostly in London but across the UK as well.",
  },
];

/* Hero */

function FaqsHero() {
  return (
    <section
      style={{
        position: "relative",
        background: "#efefef",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
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

      <div
        style={{
          ...containerStyle,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          paddingTop: "8rem",
          paddingBottom: "4rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
              lineHeight: 1.05,
              fontWeight: 400,
              color: "#000",
              maxWidth: "50ch",
            }}
          >
            Working with KOTA.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              aspectRatio: "16/9",
              borderRadius: "1rem",
              overflow: "hidden",
              margin: "2rem 0",
              background: "#ccc",
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
                src="https://kota-content.b-cdn.net/app/uploads/2023/10/Kota-loop.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </FadeIn>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <div style={{ maxWidth: "50ch" }}>
            <FadeIn delay={0.1}>
              <p
                style={{
                  fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: "#000",
                  marginBottom: "2rem",
                }}
              >
                Below we provide some useful guidance that will save you some
                time in helping to establish if we might be a good fit for you
                or your project.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1
                style={{
                  fontSize: "clamp(3rem, 8vw, 8rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#000",
                  lineHeight: 0.95,
                }}
              >
                FAQs
              </h1>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <svg
              width="75"
              height="75"
              viewBox="0 0 75.91 75.65"
              fill="#000"
              style={{ transform: "rotate(90deg)" }}
            >
              <path d="m13.65 67.65 61.93-62L69.92 0 8 61.99V.25H0v75.4h75.91v-8H13.65z" />
            </svg>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* FAQs List */

function FaqsList() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section style={{ background: "#efefef", color: "#000", padding: "6rem 0 2rem" }}>
      <div style={containerStyle}>
        <div style={{ maxWidth: "60rem" }}>
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }}
              >
                <FadeIn>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "1.5rem 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "1.25rem",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 40 40"
                      style={{
                        flexShrink: 0,
                        transition: "transform 0.3s ease",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <path
                        fill="#000"
                        d="M17.5 40V22.5H0v-5h17.5V0h5v17.5H40v5H22.5V40h-5z"
                      />
                    </svg>
                    <span
                      style={{
                        fontSize: "clamp(1.25rem, 1.8vw, 1.75rem)",
                        fontWeight: 400,
                        lineHeight: 1.2,
                        color: "#000",
                      }}
                    >
                      {faq.question}
                    </span>
                  </button>
                </FadeIn>

                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "600px" : "0",
                    transition: "max-height 0.5s ease",
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "1.5rem",
                      paddingLeft: "calc(1.25rem + 28px + 1.25rem)",
                    }}
                  >
                    {faq.answer.split("\n\n").map((paragraph, j) => {
                      if (paragraph.startsWith("- ")) {
                        const items = paragraph.split("\n").filter(Boolean);
                        return (
                          <ul
                            key={j}
                            style={{
                              fontSize: "1.125rem",
                              lineHeight: 1.6,
                              color: "rgba(0,0,0,0.6)",
                              marginBottom: "1rem",
                              paddingLeft: "1.5rem",
                            }}
                          >
                            {items.map((item, k) => (
                              <li key={k} style={{ marginBottom: "0.25rem" }}>
                                {item.replace("- ", "")}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p
                          key={j}
                          style={{
                            fontSize: "1.125rem",
                            lineHeight: 1.6,
                            color: "rgba(0,0,0,0.6)",
                            marginBottom: "1rem",
                          }}
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }} />
        </div>
      </div>
    </section>
  );
}

/* CTA Section */

function FaqsCTA() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "9.375rem 0",
      }}
    >
      <div style={containerStyle}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
          }}
        >
          <FadeIn>
            <p
              style={{
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "#fff",
                maxWidth: "20ch",
              }}
            >
              Have a new project you&apos;d like help with?
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link
              href="#"
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "2rem",
                padding: "1rem 2.5rem",
                fontSize: "1rem",
                color: "#fff",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
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
              Let&apos;s get{" "}
              <em style={{ fontStyle: "italic" }}>started</em>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* Page */

export default function FaqsPage() {
  return (
    <main>
      <Header />
      <FaqsHero />
      <FaqsList />
      <FaqsCTA />
      <Footer />
      <FloatingStartButton />
    </main>
  );
}
