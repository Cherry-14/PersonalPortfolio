"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type WordToken = {
  text: string
  type: "normal" | "highlight" | "accent"
}

const tokens: WordToken[] = [
  { text: "I", type: "normal" },
  { text: "help", type: "normal" },
  { text: "brands", type: "highlight" },
  { text: "elevate", type: "accent" },
  { text: "their", type: "normal" },
  { text: "online", type: "normal" },
  { text: "presence", type: "highlight" },
  { text: "with", type: "normal" },
  { text: "intentional,", type: "highlight" },
  { text: "beautifully", type: "accent" },
  { text: "crafted", type: "accent" },
  { text: "design", type: "highlight" },
  { text: "that", type: "normal" },
  { text: "blends", type: "normal" },
  { text: "strategy,", type: "highlight" },
  { text: "creativity,", type: "highlight" },
  { text: "and", type: "normal" },
  { text: "conversion-focused", type: "accent" },
  { text: "visuals —", type: "highlight" },
  { text: "making", type: "normal" },
  { text: "every", type: "normal" },
  { text: "customer", type: "normal" },
  { text: "interaction", type: "normal" },
  { text: "feel", type: "normal" },
  { text: "professional,", type: "highlight" },
  { text: "memorable,", type: "accent" },
  { text: "and", type: "normal" },
  { text: "worth", type: "accent" },
  { text: "trusting.", type: "accent" },
]

function Word({
  token,
  progress,
  index,
  total,
}: {
  token: WordToken
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  index: number
  total: number
}) {
  const start = index / total
  const end = start + 1.2 / total

  const opacity = useTransform(progress, [start, end], [0.12, 1])
  const scale = useTransform(
    progress,
    [start, end],
    [token.type === "accent" ? 0.92 : 0.96, 1],
  )

  const baseClass =
    token.type === "accent"
      ? "bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent font-bold"
      : token.type === "highlight"
        ? "text-white font-semibold"
        : "text-white/70"

  const sizeClass =
    token.type === "accent"
      ? "text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
      : token.type === "highlight"
        ? "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
        : "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"

  return (
    <motion.span
      style={{ opacity, scale, display: "inline-block" }}
      className={`${baseClass} ${sizeClass} leading-tight tracking-tight mx-2 my-1`}
    >
      {token.text}
    </motion.span>
  )
}

export default function GoalSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <section
      id="goal"
      ref={ref}
      className="relative w-full bg-black min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden"
    >
      {/* Grid texture — same as sticky scroll header */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:54px_54px] pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 inline-flex items-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm text-white/80"
        >
          My Goal
        </motion.div>

        {/* Animated word-by-word statement */}
        <p className="flex flex-wrap items-baseline justify-center gap-x-1">
          {tokens.map((token, i) => (
            <Word
              key={i}
              token={token}
              progress={scrollYProgress}
              index={i}
              total={tokens.length}
            />
          ))}
        </p>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
