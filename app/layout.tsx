import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://campro.sk"),
  title: "Campro s.r.o.",
  description: "Profesionálne elektroinštalácie, fotovoltické systémy a stavebné práce v Trnave a okolí.",
  icons: {
    icon: [{ url: "/favicon.jpg", type: "image/jpeg" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className={montserrat.variable}>
      <body className="page-load-animate bg-white text-slate-900 antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
