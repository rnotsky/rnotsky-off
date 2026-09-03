import type { ProductCategory } from "@/lib/products";

type ProductCategoryIconProps = {
  product: ProductCategory;
  size?: "sm" | "md" | "lg";
};

export default function ProductCategoryIcon({
  product,
  size = "md",
}: ProductCategoryIconProps) {
  const Icon = product.icon;

  const sizes = {
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div
      className="
        flex
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        text-purple-300
        shadow-[0_0_30px_rgba(168,85,247,0.08)]
        transition-all
        duration-500
        group-hover:border-purple-400/30
        group-hover:bg-purple-500/[0.08]
        group-hover:text-purple-200
        group-hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]
      "
      style={{
        width: size === "sm" ? 42 : size === "md" ? 52 : 64,
        height: size === "sm" ? 42 : size === "md" ? 52 : 64,
      }}
    >
      <Icon className={sizes[size]} strokeWidth={1.7} />
    </div>
  );
}