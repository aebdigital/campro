import type { Review } from "@/lib/site-data";

type ReviewsSectionProps = {
  title: string;
  subtitle?: string;
  reviews: Review[];
  id?: string;
};

export default function ReviewsSection({ title, subtitle, reviews, id }: ReviewsSectionProps) {
  return (
    <section id={id} className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto w-[95%] max-w-[1400px] px-5">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-3 text-slate-600">{subtitle}</p> : null}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article key={`${review.author}-${review.text}`} className="rounded-2xl bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,0.07)]">
              {review.rating || review.stars ? (
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-semibold text-[#1c7bd1]">{review.rating}</span>
                  <span className="text-yellow-400">{review.stars}</span>
                </div>
              ) : null}
              <p className="text-[15px] leading-7 text-slate-700">{review.text}</p>
              <div className="mt-6 border-t border-slate-200 pt-4 text-sm">
                <span className="font-semibold text-slate-900">{review.author}</span>
                <span className="ml-2 text-slate-500">{review.location}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
