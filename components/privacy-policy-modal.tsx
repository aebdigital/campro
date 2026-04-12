"use client";

import { FOOTER_PRIVACY_SECTIONS } from "@/lib/site-data";

type PrivacyPolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function PrivacyPolicyModal({ open, onClose }: PrivacyPolicyModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between border-b bg-white px-6 py-4">
          <h2 className="text-xl font-bold text-slate-900">Ochrana osobných údajov</h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-2xl text-slate-500 hover:bg-slate-100"
            aria-label="Zavrieť"
          >
            ×
          </button>
        </div>

        <div className="space-y-8 px-6 py-6 text-sm leading-7 text-slate-700">
          {FOOTER_PRIVACY_SECTIONS.map((section) => (
            <section key={section.title}>
              <h3 className="mb-3 text-lg font-semibold text-slate-900">{section.title}</h3>
              <div className="space-y-3">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
