import { NextResponse } from "next/server";
import { contact } from "@/lib/site";

/**
 * Contact form endpoint.
 *
 * Today it validates the payload and logs it — nothing is emailed yet. Wire up
 * delivery here; the front end needs no changes.
 *
 *   1. Email (simplest). Add a provider SDK, e.g.:
 *
 *        import { Resend } from "resend";
 *        const resend = new Resend(process.env.RESEND_API_KEY);
 *        await resend.emails.send({
 *          from: "website@ecohygiene.co.tz",
 *          to: process.env.CONTACT_INBOX ?? "directors@ecohygiene.co.tz",
 *          replyTo: payload.email,
 *          subject: `Website enquiry — ${payload.company}`,
 *          text: body,
 *        });
 *
 *      Any SMTP transport (Nodemailer against the company mailbox) works the
 *      same way. Keep credentials in environment variables, never in the repo.
 *
 *   2. CRM / spreadsheet. POST the same payload to a Google Apps Script,
 *      Airtable or HubSpot endpoint alongside the email.
 *
 *   3. Rate limiting. Front this route with a limiter (Upstash, Vercel KV or
 *      the platform's WAF) before launch — a public POST endpoint will be found.
 */

type Payload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Server-side validation mirrors the client so the endpoint stands alone. */
function validate(payload: Partial<Payload>) {
  const errors: string[] = [];

  if (!payload.name?.trim()) errors.push("name");
  if (!payload.company?.trim()) errors.push("company");
  if (!payload.email?.trim() || !emailPattern.test(payload.email.trim())) errors.push("email");
  if (!payload.message?.trim() || payload.message.trim().length < 20) errors.push("message");

  // Anything oversized is either a mistake or an attack.
  for (const [key, value] of Object.entries(payload)) {
    if (typeof value === "string" && value.length > 5000) errors.push(key);
  }

  return errors;
}

export async function POST(request: Request) {
  let payload: Partial<Payload>;

  try {
    payload = (await request.json()) as Partial<Payload>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const errors = validate(payload);
  if (errors.length > 0) {
    return NextResponse.json(
      { error: "Some fields are missing or invalid.", fields: errors },
      { status: 422 },
    );
  }

  // ---- Replace this block with real delivery ------------------------------
  console.info("[contact] enquiry received", {
    name: payload.name,
    company: payload.company,
    email: payload.email,
    phone: payload.phone || "not given",
    service: payload.service || "unspecified",
    message: payload.message?.slice(0, 200),
    receivedAt: new Date().toISOString(),
    forwardTo: contact.email,
  });
  // -------------------------------------------------------------------------

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
