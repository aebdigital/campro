import ServicePage from "@/components/service-page";
import { getMetadata } from "@/lib/metadata";
import { SERVICE_PAGES } from "@/lib/site-data";

export const metadata = getMetadata("/stavebne-prace");

export default function StavebnePracePage() {
  return <ServicePage content={SERVICE_PAGES["stavebne-prace"]} />;
}
