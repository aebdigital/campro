import ServicePage from "@/components/service-page";
import { getMetadata } from "@/lib/metadata";
import { SERVICE_PAGES } from "@/lib/site-data";

export const metadata = getMetadata("/fotovoltika");

export default function FotovoltikaPage() {
  return <ServicePage content={SERVICE_PAGES.fotovoltika} />;
}
