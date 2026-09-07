import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const appProducts = [
  {
    name: "RNOTSKY Authenticator",
    description:
      "A secure mobile authentication application designed to protect accounts and digital identity.",
    platform: "Mobile",
    type: "Security Application",
  },
];

export default function AppsPage() {
  return (
    <main className="relative min-h-screen w-full max-w-[100vw] overflow-x-clip bg-black text-white">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section
        className="
          relative isolate w-full max-w-[100vw]
          overflow-x-clip
          bg-black
          px-5 pt-16 pb-24
          sm:px-8 sm:pt-20 sm:pb-28
          lg:px-12 lg:pt-24 lg:pb-36
          xl:px-16
        "
      >
        {/* Subtle purple atmosphere */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            left-1/2 top-[-260px]
            z-0 h-[520px] w-[900px]
            max-w-[100vw]
            -translate-x-1/2
            rounded-full
            bg-purple-700/[0.025]
            blur-[170px]
          "
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          {/* Back */}
          <Link
            href="/products"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-white/40
              transition-colors
              duration-300
              hover:text-purple-300
            "
          >
            <ArrowLeft
              aria-hidden="true"
              className="
                h-4 w-4
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Products
          </Link>

          {/* Header */}
          <div className="mt-14 max-w-3xl">
            {/* Section label */}
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-purple-400
                sm:text-sm
              "
            >
              RNOTSKY Apps
            </p>

            {/* Heading */}
            <h1
              className="
                mt-5
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.04em]
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Applications
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-purple-300
                  via-violet-500
                  to-fuchsia-500
                  bg-clip-text
                  text-transparent
                "
              >
                built for what's next.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-[#94a8bd]
                sm:text-lg
                sm:leading-8
              "
            >
              Mobile applications designed to make everyday technology
              simpler, smarter and more secure.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          APP PRODUCTS
      ========================================================== */}

      <section
        className="
          relative isolate w-full max-w-[100vw]
          overflow-x-clip
          bg-black
          px-5 pb-24
          sm:px-8 sm:pb-28
          lg:px-12 lg:pb-36
          xl:px-16
        "
      >
        {/* Bottom atmosphere */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
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

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {appProducts.map((product) => (
              <article
                key={product.name}
                className="
                  group
                  relative
                  flex
                  min-h-[330px]
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

                  sm:min-h-[350px]
                  sm:px-7
                  sm:py-7

                  lg:px-8
                  lg:py-8
                "
              >
                {/* Card inner glow */}
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

                {/* Top highlight */}
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

                {/* Content */}
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  {/* Top row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
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

                      <span
                        className="
                          truncate
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
                        RNOTSKY APP
                      </span>
                    </div>

                    <span
                      className="
                        shrink-0
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/50
                        transition-colors
                        duration-300
                        group-hover:text-purple-300
                      "
                    >
                      Coming Soon
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="mt-8">
                    <h2
                      className="
                        max-w-[500px]
                        text-[26px]
                        font-bold
                        leading-[1.2]
                        tracking-[-0.035em]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-purple-300
                        sm:text-[28px]
                      "
                    >
                      {product.name}
                    </h2>

                    <p
                      className="
                        mt-5
                        max-w-[500px]
                        text-[14px]
                        leading-[1.75]
                        text-[#8296ad]
                        transition-colors
                        duration-300
                        group-hover:text-[#a9b8c9]
                      "
                    >
                      {product.description}
                    </p>

                    {/* Metadata */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      <span
                        className="
                          rounded-full
                          border
                          border-white/[0.09]
                          bg-white/[0.025]
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.12em]
                          text-white/45
                          transition-all
                          duration-300
                          group-hover:border-purple-400/[0.18]
                          group-hover:bg-purple-500/[0.04]
                          group-hover:text-white/60
                        "
                      >
                        {product.platform}
                      </span>

                      <span
                        className="
                          rounded-full
                          border
                          border-white/[0.09]
                          bg-white/[0.025]
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.12em]
                          text-white/45
                          transition-all
                          duration-300
                          group-hover:border-purple-400/[0.18]
                          group-hover:bg-purple-500/[0.04]
                          group-hover:text-white/60
                        "
                      >
                        {product.type}
                      </span>
                    </div>
                  </div>

                  {/* Bottom action */}
                  <div className="mt-auto pt-8">
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-[15px]
                        font-semibold
                        tracking-[-0.01em]
                        text-purple-400
                        transition-all
                        duration-300
                        group-hover:gap-3
                        group-hover:text-purple-300
                        group-hover:[text-shadow:0_0_18px_rgba(168,85,247,0.35)]
                      "
                    >
                      <span>Coming soon</span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}