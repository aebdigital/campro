import CtaLink from "@/components/cta-link";
import HeroSection from "@/components/hero-section";
import LogoGrid from "@/components/logo-grid";
import { getMetadata } from "@/lib/metadata";
import { CUSTOMERS_PAGE_LOGOS, PARTNERS_PAGE_LOGOS } from "@/lib/site-data";

export const metadata = getMetadata("/nasi-partneri");

export default function PartnersPage() {
  return (
    <main>
      <HeroSection
        title="PARTNERI"
        subtitle="Spolupracujeme iba s najlepšími partnermi na trhu"
        images={[
          {
            src: "/sources/iStock-1349360708.jpg",
            alt: "Partneri a zákazníci Campro s.r.o. - spolupráca so svetoznámymi značkami",
          },
        ]}
        minHeightClass="min-h-[30vh]"
      />

      <section id="partners" className="bg-white py-20 lg:py-24">
        <div className="mx-auto w-[95%] max-w-[1200px] px-5">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Naši partneri</h2>
          <p className="mt-6 text-[15px] leading-7 text-slate-700">
            Spolupracujeme iba s najlepšími partnermi, pri ktorých sme si istý kvalitou – väčšinu riešení sami používame v
            súkromnom živote, preto vieme narovinu povedať výhody a rovnako tak nevýhody konkrétnych riešení. Našimi partnermi
            sú známe firmy, kde už len meno je zárukou kvality a spokojnosti konečného zákazníka.
          </p>
          <LogoGrid logos={PARTNERS_PAGE_LOGOS} />
        </div>
      </section>

      <section id="customers" className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto w-[95%] max-w-[1200px] px-5">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Naši zákazníci</h2>
          <p className="mt-6 text-[15px] leading-7 text-slate-700">
            Ruku k dielu sme priložili pri známych projektoch lokálneho, ale aj celoslovenského významu. Na konci každej našej
            práce je spokojný zákazník, a preto sa veľká väčšina týchto zákazníkov často vracia s novými projektami. Naše
            skúsenosti sú rokmi zúročené, a aj preto sme mali možnosť pracovať okrem iného aj na týchto projektoch:
          </p>

          <LogoGrid logos={CUSTOMERS_PAGE_LOGOS} />

          <div className="mt-10">
            <CtaLink href="/kontakt" label="Kontaktujte nás" variant="primary" />
          </div>
        </div>
      </section>
    </main>
  );
}
