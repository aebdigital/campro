import BlogArticleSection from "@/components/blog-article-section";
import HeroSection from "@/components/hero-section";
import { getMetadata } from "@/lib/metadata";
import { BLOG_ARTICLES } from "@/lib/site-data";

export const metadata = getMetadata("/blog-solarne-panely");

export default function BlogSolarnePanelyPage() {
  const article = BLOG_ARTICLES["blog-solarne-panely"];

  return (
    <main>
      <HeroSection
        title={article.heroTitle}
        subtitle={article.heroSubtitle}
        images={[article.hero]}
        minHeightClass="min-h-[30vh]"
      />
      <BlogArticleSection article={article} />
    </main>
  );
}
