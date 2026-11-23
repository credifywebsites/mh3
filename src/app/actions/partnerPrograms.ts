"use server";

import nodemailer from "nodemailer";
import siteConfig from "@/config/site";

type Result = { success: boolean; error?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function cleanList(value: unknown, max = 60) {
  return Array.isArray(value) ? value.map((v) => clean(v, 200)).filter(Boolean).slice(0, max) : [];
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Sends one form submission to the sales inbox. `title` names the form (e.g.
 * "Affiliate Program Signup"); it leads the subject line and heads the email,
 * and `path` records which page the form was sent from.
 */
async function sendMail(title: string, submitter: string, path: string, replyTo: string, rows: [string, string][]) {
  const subject = `${title} from ${submitter}`;
  const source = `${siteConfig.domain.toLowerCase()}${path}`;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const text = [title, `Submitted from: ${source}`, "", ...rows.map(([k, v]) => `${k}: ${v || "-"}`)].join("\n");
  const html = `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:1px solid #eee;padding:20px;border-radius:10px;">
    <h2 style="color:#1a8a66;margin:0 0 4px;">${escapeHtml(title)}</h2>
    <p style="color:#527060;font-size:13px;margin:0 0 16px;">Submitted from ${escapeHtml(source)}</p>
    ${rows
      .map(([k, v]) => `<p><strong>${escapeHtml(k)}:</strong> <span style="white-space:pre-wrap;">${escapeHtml(v || "-")}</span></p>`)
      .join("")}
  </div>`;

  await transporter.sendMail({
    from: `"${siteConfig.titleSuffix} Web Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo,
    subject,
    text,
    html,
  });
}

export type AffiliateSignup = {
  name: string;
  email: string;
  phone?: string;
  site?: string;
  role: string;
  volume: string;
};

export async function submitAffiliateSignup(input: AffiliateSignup): Promise<Result> {
  const name = clean(input?.name, 200);
  const email = clean(input?.email, 200);
  const role = clean(input?.role, 100);
  const volume = clean(input?.volume, 100);
  if (!name || !EMAIL_RE.test(email) || !role || !volume) {
    return { success: false, error: "Missing required fields." };
  }

  try {
    await sendMail("Affiliate Program Signup", name, "/affiliates", email, [
      ["Name", name],
      ["Email", email],
      ["Phone", clean(input.phone, 50)],
      ["Website or social profile", clean(input.site, 300)],
      ["Role", role],
      ["Agencies they could introduce in a year", volume],
    ]);
    return { success: true };
  } catch (error) {
    console.error("Affiliate signup email error:", error);
    return { success: false, error: "Failed to send." };
  }
}

export type ConsultantApplication = {
  fullName: string;
  email: string;
  phone: string;
  yearsExperience: string;
  states: string[];
  metro?: string;
  website?: string;
  focusAreas: string[];
  ehrExperience?: string;
  clientsServed: string;
};

export async function submitConsultantApplication(input: ConsultantApplication): Promise<Result> {
  const fullName = clean(input?.fullName, 200);
  const email = clean(input?.email, 200);
  const phone = clean(input?.phone, 50);
  const yearsExperience = clean(input?.yearsExperience, 50);
  const states = cleanList(input?.states);
  const focusAreas = cleanList(input?.focusAreas, 30);
  const clientsServed = clean(input?.clientsServed);
  if (
    !fullName ||
    !EMAIL_RE.test(email) ||
    phone.replace(/\D/g, "").length < 10 ||
    !yearsExperience ||
    !states.length ||
    !focusAreas.length ||
    !clientsServed
  ) {
    return { success: false, error: "Missing required fields." };
  }

  try {
    await sendMail("Consultant Partner Application", fullName, "/consultants", email, [
      ["Name", fullName],
      ["Email", email],
      ["Phone", phone],
      ["Years in behavioral health", yearsExperience],
      ["States served", states.join(", ")],
      ["Metro area", clean(input.metro, 200)],
      ["LinkedIn or website", clean(input.website, 300)],
      ["Consulting focus", focusAreas.join(", ")],
      ["EHR or implementation experience", clean(input.ehrExperience)],
      ["Organizations and clients served", clientsServed],
    ]);
    return { success: true };
  } catch (error) {
    console.error("Consultant application email error:", error);
    return { success: false, error: "Failed to send." };
  }
}
