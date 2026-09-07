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

  const dimensions = {
    sm: 42,
    md: 52,
    lg: 64,
  };

  return (
    <div
      className="
        group/icon
        relative
        flex
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-[16px]
        border
        border-white/[0.12]
        bg-black
        text-purple-400
        transition-all
        duration-500
        ease-out

        group-hover:border-purple-500/[0.55]
        group-hover:text-purple-300
        group-hover:shadow-[0_0_30px_rgba(168,85,247,0.16)]
      "
      style={{
        width: dimensions[size],
        height: dimensions[size],
      }}
    >
      {/* =========================================================
          SUBTLE PURPLE ATMOSPHERE
      ========================================================== */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-16
          w-16
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/[0.07]
          blur-[25px]
          opacity-0
          transition-all
          duration-500

          group-hover:scale-125
          group-hover:opacity-100
        "
      />

      {/* =========================================================
          SOFT INNER GLOW
      ========================================================== */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[16px]
          bg-purple-500/[0.025]
          opacity-0
          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* =========================================================
          ICON
      ========================================================== */}

      <Icon
        aria-hidden="true"
        className={`
          relative
          z-10
          ${sizes[size]}
          transition-all
          duration-500
          ease-out

          group-hover:scale-105
          group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.40)]
        `}
        strokeWidth={1.7}
      />
    </div>
  );
}