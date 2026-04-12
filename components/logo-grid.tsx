import type { PartnerLogo } from "@/lib/site-data";

type LogoGridProps = {
  logos: PartnerLogo[];
};

export default function LogoGrid({ logos }: LogoGridProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-6">
      {logos.map((logo) => (
        <div key={logo.src} className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <img src={logo.src} alt={logo.alt} className={`${logo.heightClass} w-auto object-contain`} />
        </div>
      ))}
    </div>
  );
}
