"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    // Skip any section that contains the marquee (it has its own CSS animation)
    const isInMarqueeSection = (el: Element) => {
      const section = el.closest("section");
      return !!section?.querySelector('[class*="animate-["]');
    };

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "main > section:not(:first-child) > div > div > *",
          "footer > div > div > *",
        ].join(", ")
      )
    ).filter((el) => !isInMarqueeSection(el));

    // Group by direct parent so stagger resets per visual group
    const groups = new Map<Element, HTMLElement[]>();
    elements.forEach((el) => {
      const parent = el.parentElement ?? document.body;
      const existing = groups.get(parent) ?? [];
      existing.push(el);
      groups.set(parent, existing);
    });

    groups.forEach((children) => {
      children.forEach((el, i) => {
        el.style.setProperty("--reveal-delay", `${Math.min(i * 80, 360)}ms`);
      });
    });

    const isInViewport = (el: HTMLElement) => {
      const { top, bottom } = el.getBoundingClientRect();
      return top < window.innerHeight && bottom > 0;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
    );

    elements.forEach((el) => {
      if (!isInViewport(el)) {
        el.classList.add("scroll-hidden");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
