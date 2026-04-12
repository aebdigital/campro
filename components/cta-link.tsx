import Link from "next/link";

import { ArrowLeftIcon, ArrowUpRightIcon } from "@/components/icons";

type CtaLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "back";
};

export default function CtaLink({ href, label, variant = "primary" }: CtaLinkProps) {
  const isBack = variant === "back";

  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition duration-300";

  const tone =
    variant === "primary"
      ? "bg-[#1c7bd1] text-white hover:bg-[#1667b1]"
      : variant === "secondary"
        ? "border border-white/80 bg-white/15 text-white hover:bg-white hover:text-slate-900"
        : "border border-slate-300 bg-white text-slate-900 hover:border-[#1c7bd1] hover:text-[#1c7bd1]";

  return (
    <Link href={href} className={`${base} ${tone}`}>
      {isBack ? <ArrowLeftIcon className="h-5 w-5" /> : null}
      <span>{label}</span>
      {!isBack ? <ArrowUpRightIcon className="h-5 w-5" /> : null}
    </Link>
  );
}
