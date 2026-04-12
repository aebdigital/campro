import CtaLink from "@/components/cta-link";
import HeroSection from "@/components/hero-section";
import HomeAboutSection from "@/components/home-about-section";
import HomeServicesSection from "@/components/home-services-section";
import PartnerMarquee from "@/components/partner-marquee";
import ReviewsSection from "@/components/reviews-section";
import { getMetadata } from "@/lib/metadata";
import { HOME_HERO_IMAGES, HOME_REVIEWS, PARTNER_SLIDER_LOGOS } from "@/lib/site-data";

export const metadata = getMetadata("/");

export default function HomePage() {
  return (
    <main>
      <HeroSection
        title="UPRAVTE SVOJU NEHNUTELNOSŤ!"
        subtitle="Elektroinštalácia, ktorá rozžiari Vašu nehnutelnosť. Fotovoltaika, pre dostatočnú energiu aj úsporu nákladov. Stavebné práce, aby bolo všetko dokonalé."
        images={HOME_HERO_IMAGES}
        actions={
          <>
            <CtaLink href="#services" label="Naše služby" variant="primary" />
            <CtaLink href="/kontakt" label="Kontaktujte nás" variant="secondary" />
          </>
        }
      />

      <PartnerMarquee logos={PARTNER_SLIDER_LOGOS} />
      <HomeAboutSection />
      <HomeServicesSection />
      <ReviewsSection
        id="reviews"
        title="Čo hovoria naši klienti"
        subtitle="Spokojnosť našich zákazníkov je naša priorita"
        reviews={HOME_REVIEWS}
      />
    </main>
  );
}
