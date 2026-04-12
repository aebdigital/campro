"use client";

import { FormEvent, useState } from "react";

import { ClockIcon, LocationIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { CONTACT_INFO } from "@/lib/site-data";

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        setStatus({
          type: "error",
          message: data.message ?? "Nastala chyba pri odosielaní správy. Skúste to prosím znovu.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: data.message ?? "Ďakujeme za Vašu správu. Budeme Vás kontaktovať čo najskôr.",
      });

      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Nastala chyba pri odosielaní správy. Skúste to prosím znovu.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-[95%] max-w-[1400px] px-5">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">Napíšte nám</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1 text-sm font-medium text-slate-700">
                  <span>Meno *</span>
                  <input name="name" type="text" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5" />
                </label>
                <label className="space-y-1 text-sm font-medium text-slate-700">
                  <span>Email *</span>
                  <input name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5" />
                </label>
              </div>

              <label className="space-y-1 text-sm font-medium text-slate-700">
                <span>Telefón</span>
                <input name="phone" type="tel" className="w-full rounded-lg border border-slate-300 px-4 py-2.5" />
              </label>

              <label className="space-y-1 text-sm font-medium text-slate-700">
                <span>Predmet</span>
                <input name="subject" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5" />
              </label>

              <label className="space-y-1 text-sm font-medium text-slate-700">
                <span>Správa *</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5"
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center rounded-full bg-[#1c7bd1] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#1667b1] disabled:opacity-60"
              >
                {submitting ? "Odosielanie..." : "Odoslať správu"}
              </button>

              {status ? (
                <p
                  className={`rounded-lg px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>

          <div className="space-y-5">
            <InfoCard icon={<LocationIcon className="h-10 w-10" />} title="Adresa">
              {CONTACT_INFO.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </InfoCard>

            <InfoCard icon={<PhoneIcon className="h-10 w-10" />} title="Telefón">
              {CONTACT_INFO.phones.map((phone) => {
                const plain = phone.replace(/\s+/g, "");
                return (
                  <p key={phone}>
                    <a href={`tel:${plain}`} className="transition hover:text-[#1c7bd1]">
                      {phone}
                    </a>
                  </p>
                );
              })}
            </InfoCard>

            <InfoCard icon={<MailIcon className="h-10 w-10" />} title="Email">
              {CONTACT_INFO.emails.map((email) => (
                <p key={email}>
                  <a href={`mailto:${email}`} className="transition hover:text-[#1c7bd1]">
                    {email}
                  </a>
                </p>
              ))}
            </InfoCard>

            <InfoCard icon={<ClockIcon className="h-10 w-10" />} title="Otváracie hodiny">
              {CONTACT_INFO.openingHours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </InfoCard>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Obchodné údaje</h3>
              <div className="space-y-1 text-sm text-slate-700">
                {CONTACT_INFO.business.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-4 text-[#1c7bd1]">
        {icon}
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="space-y-1 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}
