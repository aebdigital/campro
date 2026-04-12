import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

const PAGE_MAP = {
  "/": "index.html",
  "/elektroinstalacie": "elektroinstalacie.html",
  "/fotovoltika": "fotovoltika.html",
  "/stavebne-prace": "stavebne-prace.html",
  "/kontakt": "kontakt.html",
  "/nasi-partneri": "nasi-partneri.html",
  "/blog": "blog.html",
  "/blog-solarne-panely": "blog-solarne-panely.html",
  "/blog-solarna-energia": "blog-solarna-energia.html",
} as const;

export type CamproRoute = keyof typeof PAGE_MAP;

type ParsedPage = {
  bodyHtml: string;
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

const pageCache = new Map<CamproRoute, ParsedPage>();

function extractMatch(html: string, pattern: RegExp): string | undefined {
  const match = html.match(pattern);
  return match?.[1]?.trim();
}

function extractNamedMeta(html: string, name: string): string | undefined {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`<meta\\s+name=["']${escaped}["']\\s+content=["']([^"']*)["'][^>]*>`, "i");
  return extractMatch(html, regex);
}

function extractPropertyMeta(html: string, property: string): string | undefined {
  const escaped = property.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`<meta\\s+property=["']${escaped}["']\\s+content=["']([^"']*)["'][^>]*>`, "i");
  return extractMatch(html, regex);
}

function parsePage(route: CamproRoute): ParsedPage {
  const fileName = PAGE_MAP[route];
  const filePath = path.join(process.cwd(), "source-pages", fileName);
  const rawHtml = fs.readFileSync(filePath, "utf8");

  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = (bodyMatch?.[1] ?? "")
    .replace(/<script[^>]*src=["']script\.js["'][^>]*>\s*<\/script>/gi, "")
    .trim();

  return {
    bodyHtml,
    title: extractMatch(rawHtml, /<title>([\s\S]*?)<\/title>/i),
    description: extractNamedMeta(rawHtml, "description"),
    keywords: extractNamedMeta(rawHtml, "keywords"),
    author: extractNamedMeta(rawHtml, "author"),
    canonical: extractMatch(rawHtml, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/i),
    robots: extractNamedMeta(rawHtml, "robots"),
    ogTitle: extractPropertyMeta(rawHtml, "og:title"),
    ogDescription: extractPropertyMeta(rawHtml, "og:description"),
    ogImage: extractPropertyMeta(rawHtml, "og:image"),
    twitterTitle: extractPropertyMeta(rawHtml, "twitter:title"),
    twitterDescription: extractPropertyMeta(rawHtml, "twitter:description"),
    twitterImage: extractPropertyMeta(rawHtml, "twitter:image"),
  };
}

export function getPage(route: CamproRoute): ParsedPage {
  const cached = pageCache.get(route);
  if (cached) {
    return cached;
  }

  const parsed = parsePage(route);
  pageCache.set(route, parsed);
  return parsed;
}

export function getRouteFromSlug(slug: string): CamproRoute | null {
  const route = `/${slug}` as CamproRoute;
  return route in PAGE_MAP ? route : null;
}

export function getStaticSlugs(): string[] {
  return (Object.keys(PAGE_MAP) as CamproRoute[])
    .filter((route) => route !== "/")
    .map((route) => route.slice(1));
}

function parseRobots(robots?: string): Metadata["robots"] {
  if (!robots) {
    return undefined;
  }

  const normalized = robots.toLowerCase();
  return {
    index: !normalized.includes("noindex"),
    follow: !normalized.includes("nofollow"),
  };
}

export function buildMetadata(route: CamproRoute): Metadata {
  const page = getPage(route);
  const keywords = page.keywords
    ? page.keywords
        .split(",")
        .map((keyword) => keyword.trim())
        .filter(Boolean)
    : undefined;

  return {
    title: page.title,
    description: page.description,
    keywords,
    authors: page.author ? [{ name: page.author }] : undefined,
    alternates: page.canonical ? { canonical: page.canonical } : undefined,
    robots: parseRobots(page.robots),
    openGraph:
      page.ogTitle || page.ogDescription || page.ogImage
        ? {
            type: "website",
            title: page.ogTitle,
            description: page.ogDescription,
            images: page.ogImage ? [page.ogImage] : undefined,
          }
        : undefined,
    twitter:
      page.twitterTitle || page.twitterDescription || page.twitterImage
        ? {
            card: "summary_large_image",
            title: page.twitterTitle,
            description: page.twitterDescription,
            images: page.twitterImage ? [page.twitterImage] : undefined,
          }
        : undefined,
  };
}
