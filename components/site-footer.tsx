"use client";

import Link from "next/link";
import { useState } from "react";

import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "@/components/icons";
import PrivacyPolicyModal from "@/components/privacy-policy-modal";
import { NAV_ITEMS } from "@/lib/site-data";

export default function SiteFooter() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-950 pb-8 pt-14 text-slate-100">
        <div className="mx-auto w-[95%] max-w-[1400px]">
          <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.1fr_1fr_1fr]">
            <div className="space-y-4">
              <img src="/logo.png" alt="Campro Logo" className="h-12 w-auto" />
              <p className="max-w-md text-sm text-slate-300">
                Elektroinštalácie, fotovoltika a stavebné práce v Trnave a okolí. Dôraz na kvalitu, bezpečnosť a férový prístup.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Stránky</h3>
              <nav className="grid gap-2 text-sm">
                {NAV_ITEMS.map((item) => (
                  <Link key={item.href} href={item.href} className="text-slate-300 transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Kontakt</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <a href="mailto:office@campro.sk" className="flex items-center gap-2 transition hover:text-white">
                  <MailIcon className="h-5 w-5" />
                  <span>office@campro.sk</span>
                </a>
                <a href="tel:+421905602690" className="flex items-center gap-2 transition hover:text-white">
                  <PhoneIcon className="h-5 w-5" />
                  <span>+421 905 602 690</span>
                </a>
                <a href="tel:+421908758701" className="flex items-center gap-2 transition hover:text-white">
                  <PhoneIcon className="h-5 w-5" />
                  <span>+421 908 758 701</span>
                </a>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://www.facebook.com/campro.sk"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-300 transition hover:border-white hover:text-white"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/campro_s.r.o/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-300 transition hover:border-white hover:text-white"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-3 text-sm text-slate-400 md:flex-row md:items-center">
            <p>© 2024 Campro s.r.o. Všetky práva vyhradené.</p>
            <button type="button" onClick={() => setPrivacyOpen(true)} className="transition hover:text-white">
              Ochrana osobných údajov
            </button>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
