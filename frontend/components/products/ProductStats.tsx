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
    <section
      className="
        relative
        isolate
        w-full
        max-w-[100vw]
        overflow-x-clip
        bg-black
        px-5
        pt-16
        pb-24
        text-white

        sm:px-8
        sm:pt-20
        sm:pb-28

        lg:px-12
        lg:pt-24
        lg:pb-36

        xl:px-16
      "
    >
      {/* =========================================================
          SUBTLE PURPLE ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-220px]
          z-0
          h-[520px]
          w-[900px]
          max-w-[100vw]
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.025]
          blur-[170px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          right-[-180px]
          z-0
          h-[450px]
          w-[450px]
          max-w-[100vw]
          rounded-full
          bg-purple-700/[0.018]
          blur-[150px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* =======================================================
            STATS GRID
        ======================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="
                group
                relative
                flex
                min-h-[210px]
                w-full
                flex-col
                overflow-hidden
                rounded-[22px]
                border
                border-white/[0.12]
                bg-black
                px-7
                py-7
                transition-all
                duration-500
                ease-out

                hover:-translate-y-[2px]
                hover:border-purple-500/[0.70]
                hover:bg-black
                hover:shadow-[0_0_45px_rgba(168,85,247,0.13),0_25px_70px_rgba(0,0,0,0.65)]

                sm:min-h-[220px]
                sm:px-7
                sm:py-7

                lg:min-h-[240px]
                lg:px-8
                lg:py-8
              "
            >
              {/* =================================================
                  CARD INNER PURPLE GLOW
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[300px]
                  w-[300px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-purple-600/[0.05]
                  blur-[100px]
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  TOP PURPLE HIGHLIGHT
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[8%]
                  right-[8%]
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-purple-400
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-80
                "
              />

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-1
                  flex-col
                "
              >
                {/* =================================================
                    TOP ROW
                ================================================== */}

                <div className="flex items-center gap-3">
                  {/* Purple dot */}

                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-purple-400
                      shadow-[0_0_8px_rgba(168,85,247,0.7)]
                      transition-all
                      duration-300

                      group-hover:scale-125
                      group-hover:bg-purple-300
                      group-hover:shadow-[0_0_15px_rgba(168,85,247,0.95)]
                    "
                  />

                  {/* Stat label */}

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-purple-400
                      transition-colors
                      duration-300

                      group-hover:text-purple-300
                    "
                  >
                    {stat.label}
                  </span>
                </div>

                {/* =================================================
                    STAT VALUE
                ================================================== */}

                <div className="mt-auto pt-12">
                  <div
                    className="
                      text-5xl
                      font-bold
                      leading-none
                      tracking-[-0.045em]
                      text-white
                      transition-all
                      duration-300

                      group-hover:text-purple-300
                      group-hover:[text-shadow:0_0_24px_rgba(168,85,247,0.18)]

                      sm:text-6xl
                    "
                  >
                    {stat.value}
                  </div>

                  <p
                    className="
                      mt-4
                      text-sm
                      font-medium
                      leading-6
                      text-[#8296ad]
                      transition-colors
                      duration-300

                      group-hover:text-[#a9b8c9]
                    "
                  >
                    RNOTSKY product ecosystem
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}