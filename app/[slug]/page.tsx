import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, getPage, getRouteFromSlug, getStaticSlugs } from "@/lib/campro-pages";

type SlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteFromSlug(slug);

  if (!route) {
    return {};
  }

  return buildMetadata(route);
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const route = getRouteFromSlug(slug);

  if (!route) {
    notFound();
  }

  const page = getPage(route);
  return <main dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />;
}
