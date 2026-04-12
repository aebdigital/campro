import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata("/kontakt");

export default function KontaktPage() {
  return (
    <main>
      <HeroSection
        title="KONTAKT"
        subtitle="Máte stavebný projekt? Kontaktujte nás a my Vám radi poradíme"
        images={[
          {
            src: "/sources/iStock-1349360708.jpg",
            alt: "Kontaktujte Campro s.r.o. Trnava - elektroinštalácie, fotovoltika, stavebné práce",
          },
        ]}
        minHeightClass="min-h-[30vh]"
      />
      <ContactSection />
    </main>
  );
}
