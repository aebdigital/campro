import type { PartnerLogo } from "@/lib/site-data";

type PartnerMarqueeProps = {
  logos: PartnerLogo[];
};

export default function PartnerMarquee({ logos }: PartnerMarqueeProps) {
  const doubled = [...logos, ...logos];

  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="overflow-hidden">
        <div className="flex min-w-max animate-[marquee_24s_linear_infinite] items-center gap-12 px-8">
          {doubled.map((logo, idx) => (
            <div key={`${logo.src}-${idx}`} className="flex h-20 items-center justify-center">
              <img src={logo.src} alt={logo.alt} className={`${logo.heightClass} w-auto object-contain opacity-90`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
