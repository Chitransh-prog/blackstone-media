import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getWorkBySlug,
  getRelatedProjects,
  ALL_SLUGS,
} from "@/data/work";
import WorkDetailClient from "./WorkDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | KOTA - Branding & Web Design Agency`,
    description: project.description,
    openGraph: {
      title: `${project.title} | KOTA`,
      description: project.description,
      images: project.image ? [{ url: project.image }] : [],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);

  return <WorkDetailClient project={project} related={related} />;
}
