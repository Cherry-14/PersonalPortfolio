"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

type ImageItem = {
  id: number | string
  title: string
  desc: string
  url: string
  span: string
}

interface InteractiveImageBentoGalleryProps {
  imageItems: ImageItem[]
  title: string
  description: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

const ImageModal = ({ item, onClose }: { item: ImageItem; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="relative w-full max-w-4xl p-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.url}
        alt={item.title}
        className="h-auto max-h-[90vh] w-full rounded-2xl object-contain"
      />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-white">{item.title}</h3>
        <p className="text-sm text-white/60">{item.desc}</p>
      </div>
    </motion.div>
    <button
      onClick={onClose}
      className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 p-2 text-white/80 backdrop-blur-xl transition-colors hover:bg-white/20 hover:text-white"
      aria-label="Close image view"
    >
      <X size={18} />
    </button>
  </motion.div>
)

const InteractiveImageBentoGallery: React.FC<InteractiveImageBentoGalleryProps> = ({
  imageItems,
  title,
  description,
}) => {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)
  const [dragConstraint, setDragConstraint] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const calculateConstraints = () => {
      if (gridRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const gridWidth = gridRef.current.scrollWidth
        setDragConstraint(Math.min(0, containerWidth - gridWidth - 32))
      }
    }
    calculateConstraints()
    window.addEventListener("resize", calculateConstraints)
    return () => window.removeEventListener("resize", calculateConstraints)
  }, [imageItems])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [30, 0])

  return (
    <section ref={targetRef} className="relative w-full overflow-hidden bg-black py-16 sm:py-24">
      {/* Section header */}
      <motion.div style={{ opacity, y }} className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-12">
        <div className="mb-4 inline-flex items-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm text-white/80">
          Featured Work
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-4">
          {title}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-white/60">{description}</p>
        <p className="mt-2 text-sm text-white/40">Drag to explore · Click to expand</p>
      </motion.div>

      {/* Draggable gallery */}
      <div ref={containerRef} className="relative w-full cursor-grab active:cursor-grabbing">
        <motion.div
          className="w-max"
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          dragElastic={0.05}
        >
          <motion.div
            ref={gridRef}
            className="grid auto-cols-[minmax(15rem,1fr)] grid-flow-col gap-4 px-6 md:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {imageItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={cn(
                  "group relative flex h-full min-h-[15rem] w-full min-w-[15rem] cursor-pointer items-end overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                  item.span,
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
                tabIndex={0}
                aria-label={`View ${item.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-white/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default InteractiveImageBentoGallery
