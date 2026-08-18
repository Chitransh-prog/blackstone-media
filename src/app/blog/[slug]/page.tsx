import type { Metadata } from "next";
import { getBlogPost, getAllBlogSlugs, getRelatedPosts } from "@/data/blog-posts";
import BlogPostClient from "./BlogPostClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: `${post.title} | KOTA`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  if (!post) {
    return (
      <main
        style={{
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#efefef",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Post not found
          </h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(0,0,0,0.6)" }}>
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </main>
    );
  }

  const postPromise = Promise.resolve(post);
  const relatedPostsPromise = Promise.resolve(relatedPosts);

  return (
    <BlogPostClient
      postPromise={postPromise}
      relatedPostsPromise={relatedPostsPromise}
    />
  );
}
