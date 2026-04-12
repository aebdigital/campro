import { NextResponse } from "next/server";

function getString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = getString(formData.get("name"));
  const email = getString(formData.get("email"));
  const message = getString(formData.get("message"));

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        success: false,
        message: "Prosím vyplňte všetky povinné polia.",
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Ďakujeme za Vašu správu. Budeme Vás kontaktovať čo najskôr.",
  });
}

export function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed.",
    },
    { status: 405 }
  );
}
