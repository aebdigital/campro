import CtaLink from "@/components/cta-link";
import { HOME_ABOUT_PARAGRAPHS } from "@/lib/site-data";

export default function HomeAboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-[95%] max-w-[1400px] px-5">
        <div className="grid items-start gap-12 lg:grid-cols-[1.8fr_1fr] lg:gap-16">
          <div>
            <div className="mb-8 space-y-3">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1c7bd1]">Kto sme</span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">O nás</h2>
            </div>

            <div className="space-y-5 text-[15px] leading-7 text-slate-700">
              {HOME_ABOUT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <strong>Tím Campro s. r. o.</strong>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <span className="block text-4xl font-bold text-[#1c7bd1]">10+</span>
                <span className="text-sm text-slate-500">rokov skúseností</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-[#1c7bd1]">100+</span>
                <span className="text-sm text-slate-500">spokojných klientov</span>
              </div>
            </div>

            <div className="mt-8">
              <CtaLink href="/kontakt" label="Kontaktujte nás" variant="primary" />
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <img
              src="/sources/solar/476031584_630667696314485_8185073002251379346_n.jpg"
              alt="Fotovoltaický projekt Campro - inštalácia solárnych panelov na strehe rodinného domu"
              className="h-[420px] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
