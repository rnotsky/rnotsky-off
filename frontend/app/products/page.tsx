import ProductsHero from "@/components/products/ProductsHero";
import ProductCategories from "@/components/products/ProductCategories";
import FeaturedProduct from "@/components/products/FeaturedProduct";
import ProductStats from "@/components/products/ProductStats";
import ProductCTA from "@/components/products/ProductCTA";

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <ProductsHero />

      <ProductCategories />

      <FeaturedProduct />

      <ProductStats />

      <ProductCTA />
    </main>
  );
}