"use client"

const leftImages = [
  {
    src: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500&auto=format&fit=crop",
    alt: "Brand identity design",
  },
  {
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop",
    alt: "Typography and logo design",
  },
  {
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop",
    alt: "Graphic design composition",
  },
  {
    src: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&auto=format&fit=crop",
    alt: "Product packaging design",
  },
  {
    src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop",
    alt: "Social media creative",
  },
]

const centerImages = [
  {
    src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&auto=format&fit=crop",
    alt: "UI/UX design wireframe",
  },
  {
    src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&auto=format&fit=crop",
    alt: "Web design on laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=500&auto=format&fit=crop",
    alt: "Mobile responsive design",
  },
]

const rightImages = [
  {
    src: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop",
    alt: "Amazon product listing",
  },
  {
    src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&auto=format&fit=crop",
    alt: "Skincare package design",
  },
  {
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop",
    alt: "Web design mockup",
  },
  {
    src: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500&auto=format&fit=crop",
    alt: "Amazon A+ content",
  },
  {
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop",
    alt: "Social media ad design",
  },
]

export default function StickyScrollGallery() {
  return (
    <div className="bg-black">
      {/* Section header — sticky intro panel */}
      <section className="text-white h-screen w-full bg-black grid place-content-center sticky top-0 overflow-hidden">
        {/* Grid texture */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative text-center px-6">
          <div className="mb-6 inline-flex items-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm text-white/80">
            Portfolio
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[115%]">
            Work That{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Speaks
            </span>
            <br />
            for Itself
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">
            A curated collection of Amazon creatives, brand identities, packaging, web designs, and social media campaigns.
          </p>
          <p className="mt-3 text-white/30 text-sm">Scroll down to explore ↓</p>
        </div>
      </section>

      {/* 3-column sticky gallery */}
      <section className="text-white w-full bg-black">
        <div className="grid grid-cols-12 gap-2 px-2">

          {/* Left column — scrolls normally */}
          <div className="grid gap-2 col-span-4">
            {leftImages.map((img, i) => (
              <figure key={i} className="w-full overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="transition-all duration-500 w-full h-96 object-cover hover:scale-105"
                />
              </figure>
            ))}
          </div>

          {/* Center column — sticky */}
          <div className="sticky top-0 h-screen w-full col-span-4 gap-2 grid grid-rows-3">
            {centerImages.map((img, i) => (
              <figure key={i} className="w-full h-full overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="transition-all duration-500 h-full w-full object-cover hover:scale-105"
                />
              </figure>
            ))}
          </div>

          {/* Right column — scrolls normally */}
          <div className="grid gap-2 col-span-4">
            {rightImages.map((img, i) => (
              <figure key={i} className="w-full overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="transition-all duration-500 w-full h-96 object-cover hover:scale-105"
                />
              </figure>
            ))}
          </div>

        </div>
      </section>

      {/* Footer marquee */}
      <div className="bg-black pt-16 pb-0">
        <h2 className="text-[16vw] leading-none uppercase font-bold text-center bg-gradient-to-r from-white/20 via-white/10 to-transparent bg-clip-text text-transparent select-none">
          CMPL.
        </h2>
      </div>
    </div>
  )
}
