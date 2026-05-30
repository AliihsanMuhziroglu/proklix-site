import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.TELEGRAM_BOT_WEBHOOK_URL;

type ContactPayload = {
  name?: string;
  company?: string;
  phone?: string;
  process?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, company, phone, process } = body;

    if (!name?.trim() || !company?.trim() || !phone?.trim() || !process?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const message = [
      "📩 Новая заявка с сайта Proklix",
      "",
      `👤 Имя: ${name.trim()}`,
      `🏢 Компания: ${company.trim()}`,
      `📞 Телефон: ${phone.trim()}`,
      `⚙️ Процесс: ${process.trim()}`,
    ].join("\n");

    if (WEBHOOK_URL) {
      const webhookRes = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: message, message }),
      });

      if (!webhookRes.ok) {
        console.error("Telegram webhook failed:", await webhookRes.text());
        return NextResponse.json({ error: "Webhook delivery failed" }, { status: 502 });
      }
    } else {
      console.log("Contact form submission (no webhook configured):", message);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
