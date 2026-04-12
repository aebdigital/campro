"use client";

import { useEffect, useState } from "react";

import type { HeroImage } from "@/lib/site-data";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  images: HeroImage[];
  minHeightClass?: string;
  actions?: React.ReactNode;
};

export default function HeroSection({
  title,
  subtitle,
  images,
  minHeightClass = "min-h-[86vh]",
  actions,
}: HeroSectionProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <section className={`relative flex w-full items-center justify-center overflow-hidden ${minHeightClass}`}>
      <div className="absolute inset-0">
        {images.map((image, imageIndex) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              imageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/50" />
      </div>

      <div className="relative z-10 mx-auto w-[95%] max-w-[1400px] px-5 pb-16 pt-28 text-white lg:pt-32">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-6xl">{title}</h1>
          <p className="text-base leading-relaxed text-white/90 sm:text-lg">{subtitle}</p>
          {actions ? <div className="flex flex-wrap items-center gap-3 pt-2">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
