"use client"

import Image from "next/image"
import { Brush, Globe, Package, Star } from "lucide-react"
import { motion } from "framer-motion"

const specialties = [
  { icon: <Globe className="h-4 w-4" />, label: "Web & UI/UX Design" },
  { icon: <Package className="h-4 w-4" />, label: "Amazon EBC & A+ Content" },
  { icon: <Brush className="h-4 w-4" />, label: "Branding & Package Design" },
  { icon: <Star className="h-4 w-4" />, label: "Social Media Creatives" },
]

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Happy Clients" },
  { value: "98%", label: "Positive Feedback" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" },
  }),
}

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-black py-24 overflow-visible">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom-left,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">

          {/* ── Content column (left) ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 inline-flex w-fit items-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm text-white/80"
            >
              About Me
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight"
            >
              Turning Visions Into{" "}
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Designs That Work
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 text-white/70 text-base leading-relaxed"
            >
              Hi, I&apos;m Cherry — a passionate graphic designer with over 8 years of experience helping brands look their best and perform at their highest. I specialize in creating compelling visual content that doesn&apos;t just look good, it converts.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 text-white/70 text-base leading-relaxed"
            >
              From crafting Premium A+ Content for Amazon sellers to building full brand identities and responsive websites, I bring strategy and creativity together in every project. My work is built around understanding your audience and delivering designs that speak directly to them.
            </motion.p>

            {/* Specialties */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
              }}
              className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {specialties.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 16, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
                  }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 text-sm text-white/80"
                >
                  <span className="text-white">{s.icon}</span>
                  {s.label}
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
              }}
              className="flex flex-wrap gap-8"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-center gap-8"
                >
                  <div>
                    <div className="text-3xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-white/50 mt-1">{s.label}</div>
                  </div>
                  {i < stats.length - 1 && <div className="w-px h-10 bg-white/10" />}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Image column (right) ── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 overflow-visible"
          >
            {/* Glow circle — pulses softly */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: [1, 1.06, 1] }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity, repeatType: "mirror", repeatDelay: 2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl pointer-events-none"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              <Image
                src="/cherry2.png"
                alt="Cherry Mae Pepito — Graphic Designer"
                width={500}
                height={650}
                className="relative z-10 object-contain drop-shadow-2xl"
                style={{ maxHeight: "650px", width: "auto" }}
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
