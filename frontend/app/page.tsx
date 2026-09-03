import HeroSection from "@/components/home/HeroSection";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import ProductsPreview from "@/components/home/ProductsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import CommunityPreview from "@/components/home/CommunityPreview";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />

      <WhatWeBuild />

      <ProductsPreview />

      <ServicesPreview />

      <CommunityPreview />

      <HomeCTA />
    </main>
  );
}