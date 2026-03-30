import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { ProductsPreview } from "@/components/home/products-preview";
import { WhyUsSection } from "@/components/home/why-us-section";
import { ClientsSection } from "@/components/home/clients-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductsPreview />
      <WhyUsSection />
      <ClientsSection />
      <CtaSection />
    </>
  );
}
