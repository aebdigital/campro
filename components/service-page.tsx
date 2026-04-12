import HeroSection from "@/components/hero-section";
import ReviewsSection from "@/components/reviews-section";
import ServiceDetailsSection from "@/components/service-details-section";
import { SERVICE_REVIEWS, type ServicePageContent } from "@/lib/site-data";

type ServicePageProps = {
  content: ServicePageContent;
};

export default function ServicePage({ content }: ServicePageProps) {
  return (
    <main>
      <HeroSection title={content.title} subtitle={content.subtitle} images={[content.heroImage]} minHeightClass="min-h-[30vh]" />
      <ServiceDetailsSection content={content} />
      <ReviewsSection title="Referencie" reviews={SERVICE_REVIEWS} />
    </main>
  );
}
