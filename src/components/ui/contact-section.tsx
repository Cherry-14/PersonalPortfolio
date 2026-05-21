"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle, AlertCircle, MapPin } from "lucide-react"

// ── Inline SVG brand icons ──────────────────────────────────────────────────

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.767-.637.17-1.3.254-1.99.254H0V4.51h6.938zm-.56 5.503c.52 0 .94-.12 1.25-.36.31-.25.46-.63.46-1.15 0-.3-.05-.55-.15-.76-.1-.2-.24-.36-.42-.47-.18-.12-.38-.2-.62-.25-.23-.05-.48-.07-.74-.07H3.5v3.06h2.878zm.17 5.744c.28 0 .54-.03.79-.08.25-.06.47-.15.67-.29.2-.13.35-.31.47-.53.12-.22.18-.5.18-.83 0-.67-.18-1.15-.55-1.44-.37-.3-.86-.44-1.47-.44H3.5v3.62h3.048zm8.852-1.566c.28.28.69.42 1.22.42.38 0 .71-.1.98-.28.28-.19.45-.4.51-.63h2.56c-.41 1.27-1.03 2.18-1.87 2.72-.84.54-1.86.81-3.06.81-.83 0-1.58-.13-2.25-.4-.67-.28-1.24-.67-1.7-1.18-.47-.51-.83-1.11-1.08-1.81-.25-.7-.37-1.46-.37-2.28 0-.8.13-1.54.4-2.24.27-.69.65-1.29 1.13-1.8.49-.5 1.06-.9 1.73-1.19.67-.28 1.4-.42 2.21-.42.9 0 1.69.17 2.36.52.67.35 1.22.82 1.65 1.41.43.59.74 1.26.93 2.01.19.75.25 1.54.18 2.37h-7.63c.04.63.24 1.13.52 1.41zm2.1-5.2c-.23-.25-.6-.38-1.1-.38-.32 0-.59.06-.8.17-.22.11-.39.25-.52.42-.13.17-.22.35-.27.54-.05.2-.08.38-.09.55h3.27c-.08-.57-.27-1.05-.49-1.3zm-2.07-4.14h4.93v1.22h-4.93z" />
  </svg>
)

const socials = [
  {
    label: "Email",
    value: "cherrymaepepito14@gmail.com",
    href: "mailto:cherrymaepepito14@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/cherrymaepepito",
    href: "https://linkedin.com",
    icon: <LinkedInIcon />,
  },
  {
    label: "Instagram",
    value: "@cherrymaepepito",
    href: "https://instagram.com",
    icon: <InstagramIcon />,
  },
  {
    label: "Facebook",
    value: "Cherry Mae Pepito",
    href: "https://facebook.com",
    icon: <FacebookIcon />,
  },
  {
    label: "Behance",
    value: "behance.net/cherrymaepepito",
    href: "https://behance.net",
    icon: <BehanceIcon />,
  },
]

type FormState = "idle" | "loading" | "success" | "error"

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 text-white placeholder:text-white/30 text-sm outline-none transition-all focus:border-white/30 focus:bg-white/10"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<FormState>("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="relative w-full bg-black py-32 overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:54px_54px] pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm text-white/80">
            Contact Me
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* ── Left: info + socials ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Location */}
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="mt-0.5 rounded-xl border border-white/10 bg-white/10 p-2.5 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-white/40 mb-1 uppercase tracking-widest">Location</p>
                <p className="text-white font-medium">Philippines</p>
                <p className="text-white/60 text-sm">Available for remote work worldwide</p>
              </div>
            </div>

            {/* Socials */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-5">Find me on</p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 px-3 py-2.5 transition-all duration-200"
                  >
                    <span className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
                      {s.icon}
                    </span>
                    <div>
                      <p className="text-xs text-white/40">{s.label}</p>
                      <p className="text-sm text-white/80 group-hover:text-white transition-colors truncate">
                        {s.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/50 uppercase tracking-widest">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/50 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Feedback */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white"
                >
                  <CheckCircle className="h-4 w-4 flex-shrink-0" />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  Something went wrong. Please try again.
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
                {/* Shimmer */}
                <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Bottom brand footer */}
      <div className="relative mt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
            <span className="text-xl font-bold text-white/60 tracking-tight">CMPL.</span>
            <span>© {new Date().getFullYear()} Cherry Mae Pepito. All rights reserved.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
