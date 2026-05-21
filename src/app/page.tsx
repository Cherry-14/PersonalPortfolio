import EtherealBeamsHero from "@/components/ui/ethereal-beams-hero";
import AboutSection from "@/components/ui/about-section";
import ServicesSection from "@/components/ui/services-section";
import PortfolioSection from "@/components/ui/portfolio-section";
import GoalSection from "@/components/ui/goal-section";
import ContactSection from "@/components/ui/contact-section";

export default function Home() {
  return (
    <main>
      <EtherealBeamsHero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <GoalSection />
      <ContactSection />
    </main>
  );
}
