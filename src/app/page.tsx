import { getLang } from "@/lib/i18n";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { ProductsPreview } from "@/components/home/products-preview";
import { WhyUsSection } from "@/components/home/why-us-section";
import { ClientsSection } from "@/components/home/clients-section";
import { CtaSection } from "@/components/home/cta-section";

export default async function HomePage() {
  const lang = await getLang();

  return (
    <>
      <HeroSection lang={lang} />
      <StatsSection lang={lang} />
      <ProductsPreview lang={lang} />
      <WhyUsSection lang={lang} />
      <ClientsSection lang={lang} />
      <CtaSection lang={lang} />
    </>
  );
}
