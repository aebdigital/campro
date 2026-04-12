import CtaLink from "@/components/cta-link";
import type { ServicePageContent } from "@/lib/site-data";

type ServiceDetailsSectionProps = {
  content: ServicePageContent;
};

export default function ServiceDetailsSection({ content }: ServiceDetailsSectionProps) {
  return (
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-[95%] max-w-[1400px] px-5">
        <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">V našej spoločnosti poskytujeme</h2>
            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-700">
              <p className={content.lead ? "font-semibold" : ""}>{content.intro}</p>
              <ul className="grid list-disc gap-2 pl-5 text-left sm:grid-cols-2 sm:gap-x-8">
                {content.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <CtaLink href="/kontakt" label="Kontaktujte nás" variant="primary" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src={content.photos[0].src} alt={content.photos[0].alt} className="h-52 w-full rounded-xl object-cover shadow-lg" />
              <img src={content.photos[1].src} alt={content.photos[1].alt} className="h-52 w-full rounded-xl object-cover shadow-lg" />
            </div>
            <div>
              <img src={content.photos[2].src} alt={content.photos[2].alt} className="h-full min-h-[430px] w-full rounded-xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
