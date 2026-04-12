import BlogGridSection from "@/components/blog-grid-section";
import HeroSection from "@/components/hero-section";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/blog");

export default function BlogPage() {
  return (
    <main>
      <HeroSection
        title="BLOG"
        subtitle="Aktuálne informácie a tipy zo sveta stavebníctva a elektroinštalácií"
        images={[
          {
            src: "/sources/iStock-1367492947-2048x1363-1.jpg",
            alt: "Blog Campro s.r.o. - články o elektroinštaláciách, fotovoltike a stavebných prácach",
          },
        ]}
        minHeightClass="min-h-[30vh]"
      />
      <BlogGridSection />
    </main>
  );
}
