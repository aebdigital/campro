import Link from "next/link";

import { HOME_SERVICE_CARDS } from "@/lib/site-data";

export default function HomeServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto w-[95%] max-w-[1400px] px-5">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold uppercase text-slate-900 sm:text-4xl">Naše služby</h2>
          <p className="mt-3 text-slate-600">Profesionálne riešenia pre vaše potreby</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {HOME_SERVICE_CARDS.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative block h-[360px] overflow-hidden rounded-2xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-white/90">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
