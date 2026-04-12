import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 className="mb-3 text-4xl font-bold text-slate-900">404</h1>
        <p className="mb-5 text-slate-600">Stránka nebola nájdená.</p>
        <Link href="/" className="font-semibold text-[#1c7bd1] underline">
          Späť na domovskú stránku
        </Link>
      </div>
    </main>
  );
}
