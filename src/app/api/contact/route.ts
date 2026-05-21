import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 12px; border: 1px solid #333;">
          <h2 style="margin: 0 0 24px; font-size: 22px; color: #fff;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #888; width: 90px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #fff;"><a href="mailto:${email}" style="color: #ccc;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; color: #fff;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #fff; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Email send error:", err)
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }
}
