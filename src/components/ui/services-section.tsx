"use client"

import { Monitor, Smartphone, PenTool, Package, Tag, Megaphone, Image, SlidersHorizontal, Sparkles } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import type { FC, ReactNode } from "react"

interface Service {
  icon: ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "UI/UX Design & Website Redesign",
    description: "Crafting intuitive interfaces and refreshing outdated websites into modern, conversion-focused experiences.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile-First & Responsive Design",
    description: "Designs built to perform flawlessly across all screen sizes — from mobile to widescreen.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Wireframing & Prototyping",
    description: "Translating ideas into structured layouts and interactive prototypes before a single pixel is finalized.",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Amazon EBC & Premium A+ Content",
    description: "High-converting Enhanced Brand Content and A+ modules designed to elevate your Amazon presence.",
  },
  {
    icon: <Tag className="h-6 w-6" />,
    title: "Brand-Specific Listing Design",
    description: "Amazon listing visuals tailored to your brand identity — infographics, lifestyle images, and more.",
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: "Social Media & Facebook Ads Design",
    description: "Scroll-stopping creatives for social media campaigns and paid ads that drive clicks and conversions.",
  },
  {
    icon: <Image className="h-6 w-6" />,
    title: "Thumbnail, Label & Brochure Design",
    description: "Print and digital collateral that communicates your brand message with clarity and impact.",
  },
  {
    icon: <SlidersHorizontal className="h-6 w-6" />,
    title: "Photo Editing & Page Deck Presentations",
    description: "Professional retouching and polished presentation decks that make your content look its absolute best.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Assisted Design & Prompt Engineering",
    description: "Leveraging AI tools with precision prompting to accelerate creative output without sacrificing quality.",
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
  }),
}

const ServiceCard: FC<Service & { index: number }> = ({ icon, title, description, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-colors duration-300 hover:bg-white/10 hover:border-white/20 cursor-default"
  >
    {/* Glow on hover */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

    {/* Icon */}
    <motion.div
      whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
      className="mb-4 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 p-3 text-white transition-colors group-hover:bg-white/20"
    >
      {icon}
    </motion.div>

    <h3 className="mb-2 text-base font-semibold text-white leading-snug">{title}</h3>
    <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">{description}</p>
  </motion.div>
)

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm text-white/80">
            What I Do
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Services Built to{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Make You Stand Out
            </span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            From Amazon storefronts to full brand identities — every service is crafted with strategy, precision, and an eye for what truly converts.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
