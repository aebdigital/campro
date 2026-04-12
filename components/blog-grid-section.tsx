import Link from "next/link";

import { BLOG_CARDS } from "@/lib/site-data";

export default function BlogGridSection() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-[95%] max-w-[1400px] px-5">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Najnovšie články</h2>
          <p className="mt-3 text-slate-600">Užitočné informácie a tipy zo sveta fotovoltiky a stavebníctva</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {BLOG_CARDS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src={post.image.src} alt={post.image.alt} className="h-56 w-full object-cover" />
              <div className="space-y-4 p-6">
                <span className="text-sm font-semibold text-[#1c7bd1]">{post.date}</span>
                <h3 className="text-xl font-semibold leading-tight text-slate-900">
                  {post.placeholder ? (
                    <span>{post.title}</span>
                  ) : (
                    <Link href={post.href} className="transition hover:text-[#1c7bd1]">
                      {post.title}
                    </Link>
                  )}
                </h3>
                <p className="text-sm leading-6 text-slate-600">{post.excerpt}</p>
                {post.placeholder ? (
                  <span className="text-sm font-semibold text-slate-400">Čoskoro dostupné</span>
                ) : (
                  <Link href={post.href} className="text-sm font-semibold text-[#1c7bd1] transition hover:text-[#14598f]">
                    Čítať viac →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
