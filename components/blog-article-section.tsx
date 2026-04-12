import CtaLink from "@/components/cta-link";
import type { BlogArticle } from "@/lib/site-data";

type BlogArticleSectionProps = {
  article: BlogArticle;
};

export default function BlogArticleSection({ article }: BlogArticleSectionProps) {
  return (
    <section id="article" className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-[95%] max-w-[1000px] px-5">
        <div className="mb-8 space-y-3">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1c7bd1]">{article.dateLabel}</span>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{article.title}</h2>
        </div>

        <article className="space-y-6 text-[16px] leading-8 text-slate-700">
          {article.blocks.map((block, index) => {
            if (block.type === "p" || block.type === "note") {
              return <p key={`${block.type}-${index}`}>{block.text}</p>;
            }

            if (block.type === "h3") {
              return (
                <h3 key={`${block.type}-${index}`} className="pt-4 text-2xl font-semibold text-slate-900">
                  {block.text}
                </h3>
              );
            }

            return (
              <div key={`${block.type}-${index}`} className="py-4 text-center">
                <iframe
                  width="100%"
                  height="315"
                  src={block.url}
                  title={block.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="mx-auto max-w-[560px] rounded-lg"
                />
              </div>
            );
          })}
        </article>

        <div className="mt-10 border-t border-slate-200 pt-8">
          <CtaLink href="/blog" label="Späť na blog" variant="back" />
        </div>
      </div>
    </section>
  );
}
