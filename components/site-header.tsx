"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { NAV_ITEMS } from "@/lib/site-data";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = useMemo(() => pathname === "/", [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * (isHome ? 0.3 : 0.05);
      const shouldBeScrolled = window.scrollY > threshold;
      setScrolled(shouldBeScrolled || mobileOpen);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, mobileOpen]);

  const containerClass = scrolled
    ? "bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,0.1)] backdrop-blur"
    : "bg-transparent";

  const linkClass = scrolled ? "text-slate-900" : "text-white";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${containerClass}`}>
      <div className="mx-auto flex w-[95%] max-w-[1400px] items-center justify-between px-5 py-3 lg:py-4">
        <Link href="/" className="flex items-center" aria-label="Campro domov">
          <img src="/logo.png" alt="Campro Logo" className="h-14 w-auto lg:h-20" />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative text-sm font-semibold tracking-wide transition-colors ${linkClass} ${
                      isActive ? "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-current" : "hover:opacity-75"
                    } uppercase`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Otvoriť menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className={`relative z-50 inline-flex h-11 w-11 items-center justify-center rounded lg:hidden ${linkClass}`}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-full bg-current transition-opacity duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-full bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-300 lg:hidden ${
          mobileOpen ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto w-[95%] px-2 py-3">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded px-3 py-2 text-base font-semibold uppercase tracking-wide ${
                      isActive ? "bg-blue-50 text-[#1c7bd1]" : "text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
