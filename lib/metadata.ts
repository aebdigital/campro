import type { Metadata } from "next";
import { PAGE_META_MAP } from "@/lib/site-data";

export function getMetadata(path: keyof typeof PAGE_META_MAP): Metadata {
  const page = PAGE_META_MAP[path];

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.canonical,
    },
    openGraph: {
      type: page.ogType,
      url: page.canonical,
      title: page.title,
      description: page.description,
      images: [page.ogImage],
      locale: "sk_SK",
      siteName: "Campro s.r.o.",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
