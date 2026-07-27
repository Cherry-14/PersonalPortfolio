import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  // Row 1 — Website designs
  { title: "Website Design I",    thumbnail: "/portfolio/website/Frame 41.jpg" },
  { title: "Website Design II",   thumbnail: "/portfolio/website/Frame 55.png" },
  { title: "Website Design III",  thumbnail: "/portfolio/website/Frame 28.png" },
  { title: "Website Design IV",   thumbnail: "/portfolio/website/Frame 57.png" },
  { title: "Website Design V",    thumbnail: "/portfolio/website/Frame 30.png" },

  // Row 2 — More website + listing images
  { title: "Website Design VI",   thumbnail: "/portfolio/website/Frame 31.png" },
  { title: "Amazon Listing I",    thumbnail: "/portfolio/listing-images/Frame 37.png" },
  { title: "Amazon Listing II",   thumbnail: "/portfolio/listing-images/Frame 38.png" },
  { title: "Amazon Listing III",  thumbnail: "/portfolio/listing-images/Frame 39.png" },
  { title: "Amazon Listing IV",   thumbnail: "/portfolio/listing-images/Frame 40.png" },
  // Row 4 — Carousel + Flyers
  { title: "Flyers II",   thumbnail: "/portfolio/flyers/Frame 63.png" },
  { title: "Carousel I",  thumbnail: "/portfolio/carousel/Frame 60.png" },
  { title: "Carousel II", thumbnail: "/portfolio/carousel/Frame 61.png" },
  { title: "Flyers I",thumbnail: "/portfolio/flyers/Frame 62.png" },
  { title: "Thumbnail Design III",  thumbnail: "/portfolio/thumbnails/Frame 54.png" },

  // Row 3 — More listing images
  { title: "Amazon Listing V",    thumbnail: "/portfolio/listing-images/Frame 41.png" },
  { title: "Amazon Listing VI",   thumbnail: "/portfolio/listing-images/Frame 42.png" },
  { title: "Amazon Listing VII",  thumbnail: "/portfolio/listing-images/Frame 43.png" },
  { title: "Amazon Listing VIII", thumbnail: "/portfolio/listing-images/Frame 44.png" },
  { title: "Amazon Listing IX",   thumbnail: "/portfolio/listing-images/Frame 58.png" },

  // Row 4 — Packaging + thumbnails
  { title: "Product Packaging I",  thumbnail: "/portfolio/product-packaging/Frame 46.png" },
  { title: "Product Packaging II", thumbnail: "/portfolio/product-packaging/Frame 47.png" },
  { title: "Product Packaging III",thumbnail: "/portfolio/product-packaging/Frame 48.png" },
  { title: "Thumbnail Design I",   thumbnail: "/portfolio/thumbnails/Frame 32.png" },
  { title: "Thumbnail Design II",  thumbnail: "/portfolio/thumbnails/Frame 33.png" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-black">
      <HeroParallax products={products} />
    </section>
  );
}
