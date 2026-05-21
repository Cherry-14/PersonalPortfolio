import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Brand Identity System",
    thumbnail: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&q=80",
  },
  {
    title: "Amazon A+ Content",
    thumbnail: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80",
  },
  {
    title: "Product Package Design",
    thumbnail: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80",
  },
  {
    title: "Web UI Design",
    thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
  },
  {
    title: "Social Media Ads",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
  },
  {
    title: "Typography & Logo",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    title: "Skincare Label Design",
    thumbnail: "https://images.unsplash.com/photo-1571942676516-bcab84649e44?w=600&q=80",
  },
  {
    title: "Brochure & Print",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    title: "Photo Retouching",
    thumbnail: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
  },
  {
    title: "E-Commerce Design",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    title: "AI-Assisted Visuals",
    thumbnail: "https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=600&q=80",
  },
  {
    title: "Presentation Deck",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Amazon Storefront",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    title: "Brand Color Palette",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80",
  },
  {
    title: "Responsive Web Design",
    thumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-black">
      <HeroParallax products={products} />
    </section>
  );
}
