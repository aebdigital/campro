import ServicePage from "@/components/service-page";
import { getMetadata } from "@/lib/metadata";
import { SERVICE_PAGES } from "@/lib/site-data";

export const metadata = getMetadata("/elektroinstalacie");

export default function ElektroinstalaciePage() {
  return <ServicePage content={SERVICE_PAGES.elektroinstalacie} />;
}
