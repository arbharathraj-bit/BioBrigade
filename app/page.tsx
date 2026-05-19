import { Nav } from "./(marketing)/_components/Nav";
import { Hero } from "./(marketing)/_components/Hero";
import { TrustStrip } from "./(marketing)/_components/TrustStrip";
import { ProblemSection } from "./(marketing)/_components/ProblemSection";
import { PlatformIntro } from "./(marketing)/_components/PlatformIntro";
import { ProductsSection } from "./(marketing)/_components/ProductsSection";
import { HowItWorksSection } from "./(marketing)/_components/HowItWorksSection";
import { SolutionsSection } from "./(marketing)/_components/SolutionsSection";
import { TechSection } from "./(marketing)/_components/TechSection";
import { PricingSection } from "./(marketing)/_components/PricingSection";
import { CTASection } from "./(marketing)/_components/CTASection";
import { Footer } from "./(marketing)/_components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <PlatformIntro />
        <ProductsSection />
        <HowItWorksSection />
        <SolutionsSection />
        <TechSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
