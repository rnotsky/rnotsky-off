import { productCategories } from "@/lib/products";

export default function ProductStats() {
  const totalCategories = productCategories.length;

  const inDevelopment = productCategories.filter(
    (product) => product.status === "In Development",
  ).length;

  const research = productCategories.filter(
    (product) => product.status === "Research",
  ).length;

  const comingSoon = productCategories.filter(
    (product) => product.status === "Coming Soon",
  ).length;

  const stats = [
    {
      value: totalCategories,
      label: "Product Categories",
    },
    {
      value: inDevelopment,
      label: "In Development",
    },
    {
      value: research,
      label: "Research Areas",
    },
    {
      value: comingSoon,
      label: "Coming Soon",
    },
  ];

  return (
    <section className="relative px-5 pb-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div
          className="
            grid
            grid-cols-2
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.08]
            bg-white/[0.02]
            md:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                group
                relative
                px-6
                py-9
                transition-colors
                duration-300
                hover:bg-white/[0.025]
                sm:px-8
                sm:py-11
                ${
                  index !== stats.length - 1
                    ? "border-r border-white/[0.07]"
                    : ""
                }
                ${
                  index < 2
                    ? "border-b border-white/[0.07] md:border-b-0"
                    : ""
                }
              `}
            >
              <div
                className="
                  text-4xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-purple-200
                  sm:text-5xl
                "
              >
                {stat.value}
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-white/30">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}