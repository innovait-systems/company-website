import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || CONTACT_TO_EMAIL;

const transporter =
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
    : null;

export async function POST(req: NextRequest) {
  try {
    if (!CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      return NextResponse.json(
        { error: "Email is not configured on the server." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const {
      name,
      email,
      company,
      type,
      message,
      recaptchaToken,
    } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA if configured
    if (RECAPTCHA_SECRET) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: "Captcha verification failed. Please try again." },
          { status: 400 }
        );
      }

      const params = new URLSearchParams();
      params.append("secret", RECAPTCHA_SECRET);
      params.append("response", recaptchaToken);

      const verifyRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      );

      const verifyJson = (await verifyRes.json()) as {
        success: boolean;
        score?: number;
      };

      if (!verifyJson.success || (verifyJson.score && verifyJson.score < 0.3)) {
        return NextResponse.json(
          { error: "Captcha verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    if (!transporter) {
      return NextResponse.json(
        { error: "Mail transport is not configured on the server." },
        { status: 500 }
      );
    }

    const subject = `New website enquiry from ${name}`;

    const text = `
New enquiry from company website

Name: ${name}
Email: ${email}
Company: ${company || "-"}
Project type: ${type || "-"}

Message:
${message}
`.trim();

    const html = `
      <h2>New enquiry from company website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Project type:</strong> ${type || "-"}</p>
      <p><strong>Message:</strong><br />${(message || "")
        .split("\n")
        .join("<br />")}</p>
    `;

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error in contact form handler:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

