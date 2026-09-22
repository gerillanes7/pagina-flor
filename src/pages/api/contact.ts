import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const TO = "florbordenave@gmail.com";
const FROM = process.env.CONTACT_FROM_EMAIL || "Florencia <onboarding@resend.dev>";
const SUBJECT_PREFIX = "[Florencia · web]";

const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const POST: APIRoute = async ({ request }) => {
  if (!process.env.RESEND_API_KEY) {
    return json({ ok: false, error: "Email no configurado todavía." }, 500);
  }

  let data: Record<string, string>;
  const contentType = request.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      data = (await request.json()) as Record<string, string>;
    } else {
      const form = await request.formData();
      data = Object.fromEntries(form.entries()) as Record<string, string>;
    }
  } catch {
    return json({ ok: false, error: "Cuerpo inválido." }, 400);
  }

  const honeypot = (data._gotcha || data.website || "").trim();
  if (honeypot.length > 0) {
    return json({ ok: true });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const subject = (data.subject || "").trim();
  const body = (data.body || "").trim();

  if (!name || name.length > 120) {
    return json({ ok: false, error: "Falta tu nombre." }, 400);
  }
  if (!isEmail(email)) {
    return json({ ok: false, error: "Correo inválido." }, 400);
  }
  if (!body || body.length > 4000) {
    return json({ ok: false, error: "Mensaje vacío o demasiado largo." }, 400);
  }
  if (subject.length > 200) {
    return json({ ok: false, error: "Asunto demasiado largo." }, 400);
  }

  const fullSubject = subject ? `${SUBJECT_PREFIX} ${subject}` : `${SUBJECT_PREFIX} Mensaje de ${name}`;
  const replyTo = `${name} <${email}>`;

  const html = `
    <div style="font-family: 'Source Serif 4', Georgia, serif; font-size: 16px; line-height: 1.6; color: #1F1414;">
      <p style="margin: 0 0 16px;"><strong>De:</strong> ${escape(name)} &lt;${escape(email)}&gt;</p>
      ${subject ? `<p style="margin: 0 0 16px;"><strong>Asunto:</strong> ${escape(subject)}</p>` : ""}
      <hr style="border: 0; border-top: 1px solid #B5A29F; margin: 16px 0;" />
      <p style="margin: 0; white-space: pre-wrap;">${escape(body)}</p>
    </div>
  `;

  const text = [
    `De: ${name} <${email}>`,
    subject ? `Asunto: ${subject}` : "",
    "",
    body,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const result = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo,
      subject: fullSubject,
      html,
      text,
    });

    if (result.error) {
      console.error("[contact] resend error:", result.error);
      return json({ ok: false, error: "No se pudo enviar ahora. Probá más tarde." }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error("[contact] exception:", err);
    return json({ ok: false, error: "No se pudo enviar ahora. Probá más tarde." }, 500);
  }
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
