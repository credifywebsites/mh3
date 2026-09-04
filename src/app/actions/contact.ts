"use server";

import siteConfig from "@/config/site";
import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
  const fname = formData.get("fname") as string;
  const lname = formData.get("lname") as string;
  const business = formData.get("business") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${siteConfig.titleSuffix} Web Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: email,
    subject: `New Contact Request from ${fname} ${lname} (${business})`,
    text: `
      Name: ${fname} ${lname}
      Business: ${business}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #1a8a66;">New Contact Request</h2>
        <p><strong>Name:</strong> ${fname} ${lname}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Service Interested:</strong> ${service}</p>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Failed to send email." };
  }
}
