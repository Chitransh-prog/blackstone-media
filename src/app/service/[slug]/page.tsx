import type { Metadata } from "next";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/data/services";
import { ServicePageClient } from "./ServicePageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | KOTA`,
    description: service.intro,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#efefef" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "2rem" }}>Service not found</h1>
      </div>
    );
  }

  return <ServicePageClient service={service} />;
}
