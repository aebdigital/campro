import { NextResponse } from "next/server";

function getString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = getString(formData.get("name"));
  const email = getString(formData.get("email"));
  const phone = getString(formData.get("phone"));
  const subject = getString(formData.get("subject"));
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

  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;
  const recipient = process.env.CONTACT_FORM_RECIPIENT;

  if (!apiKey || !sender || !recipient) {
    console.error("Missing SMTP2GO environment variables");
    return NextResponse.json(
      { success: false, message: "Konfiguračná chyba servera. Skúste to prosím znovu neskôr." },
      { status: 500 }
    );
  }

  const emailSubject = subject ? `Kontaktný formulár: ${subject}` : `Kontaktný formulár od ${name}`;
  const textBody = [
    `Meno: ${name}`,
    `Email: ${email}`,
    phone ? `Telefón: ${phone}` : null,
    ``,
    `Správa:`,
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const smtp2goRes = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      to: [recipient],
      sender,
      subject: emailSubject,
      text_body: textBody,
    }),
  });

  const smtp2goData = (await smtp2goRes.json()) as { data?: { succeeded?: number } };

  if (!smtp2goRes.ok || smtp2goData.data?.succeeded !== 1) {
    console.error("SMTP2GO error", smtp2goData);
    return NextResponse.json(
      { success: false, message: "Nastala chyba pri odosielaní správy. Skúste to prosím znovu." },
      { status: 500 }
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
