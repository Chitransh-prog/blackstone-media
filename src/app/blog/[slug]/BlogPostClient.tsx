"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, FadeIn, containerStyle } from "@/components/shared";
import type { BlogPost } from "@/data/blog-posts";

const SITE_KEY = "kota-co-uk_ddbd9d9c";
const PAGE_KEY = "root-dd72c4c6";
const IMG = `/sites/${SITE_KEY}/${PAGE_KEY}/images`;

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleHero({ post }: { post: BlogPost }) {
  return (
    <section
      style={{
        background: "#efefef",
        paddingTop: "8rem",
        paddingBottom: "3rem",
      }}
    >
      <div style={containerStyle}>
        <FadeIn>
          <div style={{ marginBottom: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: "inline-block",
                  fontSize: "0.8125rem",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                  background: "#000",
                  padding: "8px 15px",
                  borderRadius: "2rem",
                  color: "#fff",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.05,
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              color: "#000",
              maxWidth: "900px",
              marginBottom: "1.5rem",
            }}
          >
            {post.title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(0,0,0,0.5)",
              marginBottom: "2rem",
            }}
          >
            {formatDate(post.date)}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "0.6875rem",
              overflow: "hidden",
            }}
          >
            <Image
              src={`${IMG}/creative-web-design-inspo.png`}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ArticleBody({ post }: { post: BlogPost }) {
  return (
    <section
      style={{
        background: "#efefef",
        color: "#000",
        padding: "4rem 0 6rem",
      }}
    >
      <div style={containerStyle}>
        <div
          style={{
            maxWidth: "70ch",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            fontFamily: "var(--font-montreal)",
          }}
        >
          <FadeIn>
            <p style={{ marginBottom: "1.5rem" }}>
              {post.excerpt} In today&apos;s fast-paced digital landscape, staying ahead of the curve
              is essential for brands looking to make a lasting impact. At KOTA, we&apos;re passionate
              about sharing our expertise and insights to help businesses thrive online.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                marginTop: "3rem",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Understanding the Landscape
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p style={{ marginBottom: "1.5rem" }}>
              The digital world is constantly evolving, and with it, the strategies that drive
              successful brands. From emerging design trends to shifting consumer behaviours,
              understanding the broader context is crucial for making informed decisions about
              your brand&apos;s digital presence.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p style={{ marginBottom: "1.5rem" }}>
              We&apos;ve seen firsthand how brands that embrace innovation while staying true to
              their core identity are the ones that resonate most deeply with their audiences.
              It&apos;s not about following every trend — it&apos;s about choosing the right ones
              that align with your brand&apos;s unique story.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                marginTop: "3rem",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Key Takeaways
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ul
              style={{
                marginBottom: "1.5rem",
                paddingLeft: "1.5rem",
              }}
            >
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Authenticity matters:</strong> Brands that communicate with genuine voice
                and purpose build stronger connections with their audiences.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Design is a business tool:</strong> Thoughtful, strategic design isn&apos;t
                just about aesthetics — it&apos;s a powerful driver of business outcomes.
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Stay curious:</strong> The most successful brands are those that continue
                to learn, adapt, and evolve with the changing landscape.
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.35}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                marginTop: "3rem",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Looking Ahead
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p style={{ marginBottom: "1.5rem" }}>
              As we look to the future, we&apos;re excited about the possibilities that lie ahead.
              Whether it&apos;s through innovative web design, strategic branding, or cutting-edge
              digital marketing, we&apos;re committed to helping our clients navigate the
              ever-changing digital landscape.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p style={{ marginBottom: "1.5rem" }}>
              Want to learn more about how we can help your brand? Get in touch with our team
              to start a conversation about your next project.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section
      style={{
        background: "#efefef",
        padding: "0 0 6rem",
      }}
    >
      <div style={containerStyle}>
        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              maxWidth: "70ch",
              padding: "2rem",
              background: "#fff",
              borderRadius: "0.6875rem",
            }}
          >
            <div
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                background: "linear-gradient(90deg, #633cc9, #3b8392, #cb24cc)",
                flexShrink: 0,
              }}
            />
            <div>
              <p
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                }}
              >
                The KOTA Team
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(0,0,0,0.6)",
                  lineHeight: 1.5,
                }}
              >
                KOTA is a London-based creative agency specialising in branding,
                web design, and digital marketing.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "6rem 0",
      }}
    >
      <div style={containerStyle}>
        <FadeIn>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              marginBottom: "3rem",
            }}
          >
            Related articles
          </h2>
        </FadeIn>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
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
                    src={`${IMG}/creative-web-design-inspo.png`}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.8125rem",
                    lineHeight: 1,
                    background: "rgba(255,255,255,0.15)",
                    padding: "8px 15px",
                    borderRadius: "2rem",
                    color: "#fff",
                    marginBottom: "0.75rem",
                  }}
                >
                  {post.tags.join(", ")}
                </span>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: "#fff",
                  }}
                >
                  {post.title}
                </h3>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterCTA() {
  return (
    <section
      style={{
        background: "#efefef",
        padding: "6rem 0",
      }}
    >
      <div style={containerStyle}>
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                marginBottom: "1rem",
                color: "#000",
              }}
            >
              Stay in the loop
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(0,0,0,0.6)",
                marginBottom: "2rem",
              }}
            >
              Sign up to our newsletter for the latest insights, inspiration, and updates from KOTA.
            </p>
            <div style={{ display: "flex", maxWidth: "450px", margin: "0 auto" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  border: "1px solid rgba(0,0,0,0.2)",
                  borderRadius: "50px 0 0 50px",
                  padding: "0.9375rem 1.25rem",
                  fontSize: "1.125rem",
                  color: "#000",
                  background: "#fff",
                  outline: "none",
                  flex: 1,
                  minWidth: 0,
                }}
              />
              <button
                style={{
                  border: "2px solid #000",
                  color: "#fff",
                  fontSize: "1.125rem",
                  padding: "0.9375rem 1.75rem",
                  borderRadius: "0 50px 50px 0",
                  background: "#000",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = "#333";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = "#000";
                }}
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function LargeCTA() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "8rem 0",
      }}
    >
      <div style={containerStyle}>
        <FadeIn>
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                lineHeight: 1.05,
                marginBottom: "2rem",
                maxWidth: "800px",
                margin: "0 auto 2rem",
              }}
            >
              Interested in working with KOTA?
            </h2>
            <Link
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "#fff",
                color: "#000",
                borderRadius: "2rem",
                padding: "1rem 2.5rem",
                fontSize: "1.125rem",
                fontWeight: 400,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "linear-gradient(90deg, #633cc9, #3b8392, #cb24cc)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                (e.currentTarget as HTMLAnchorElement).style.color = "#000";
              }}
            >
              Start a project
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function BlogPostClient({
  postPromise,
  relatedPostsPromise,
}: {
  postPromise: Promise<BlogPost>;
  relatedPostsPromise: Promise<BlogPost[]>;
}) {
  const post = use(postPromise);
  const relatedPosts = use(relatedPostsPromise);

  return (
    <main>
      <Header />
      <ArticleHero post={post} />
      <ArticleBody post={post} />
      <AuthorSection />
      <RelatedArticles posts={relatedPosts} />
      <NewsletterCTA />
      <LargeCTA />
      <Footer />
    </main>
  );
}
