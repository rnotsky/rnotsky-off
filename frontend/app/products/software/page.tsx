import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const softwareProducts = [
  {
    name: "RNOTSKY Player",
    description:
      "A modern video player for Windows, designed for a fast, clean and powerful media experience.",
    platform: "Windows",
    type: "Desktop Software",
  },
];

export default function SoftwarePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:px-10 lg:pt-44">
        {/* Purple glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[420px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-purple-700/15
            blur-[140px]
          "
        />

        <div className="relative mx-auto max-w-[1200px]">
          {/* Back */}
          <Link
            href="/products"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              text-white/35
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <ArrowLeft
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Products
          </Link>

          {/* Heading */}
          <div className="mt-14 max-w-4xl">
            <div className="flex items-center gap-3">
              {/* Purple dot */}
              <span className="relative h-3.5 w-3.5">
                <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />

                <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />

                <span className="absolute inset-[5px] rounded-full bg-purple-300" />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-purple-300/70">
                RNOTSKY Software
              </span>
            </div>

            <h1
              className="
                mt-6
                text-5xl
                font-semibold
                tracking-[-0.05em]
                text-white
                sm:text-6xl
                lg:text-8xl
              "
            >
              Software
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-white/40
                sm:text-lg
                sm:leading-8
              "
            >
              Desktop software built for modern computing, entertainment and
              everyday digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Software products */}
      <section className="relative px-5 pb-32 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {softwareProducts.map((product) => (
              <article
                key={product.name}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-purple-500/[0.10]
                  bg-gradient-to-br
                  from-white/[0.045]
                  via-white/[0.018]
                  to-transparent
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:border-purple-400/20
                  sm:p-9
                "
              >
                {/* Top highlight */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-6
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-purple-400/30
                    to-transparent
                  "
                />

                {/* Upper-left glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-40
                    w-40
                    rounded-full
                    bg-purple-600/[0.07]
                    blur-[80px]
                    transition-all
                    duration-500
                    group-hover:bg-purple-500/[0.12]
                  "
                />

                {/* Purple glowing dot */}
                <div className="absolute left-7 top-7 h-4 w-4 sm:left-8 sm:top-8">
                  <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />

                  <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />

                  <span className="absolute inset-[5px] rounded-full bg-purple-300" />
                </div>

                {/* Content */}
                <div className="relative pt-10">
                  {/* Status */}
                  <div className="flex justify-end">
                    <span
                      className="
                        rounded-full
                        border
                        border-purple-400/[0.12]
                        bg-purple-500/[0.05]
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-purple-300/70
                      "
                    >
                      Coming Soon
                    </span>
                  </div>

                  {/* Name */}
                  <h2
                    className="
                      mt-5
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-purple-100
                    "
                  >
                    {product.name}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-sm
                      leading-7
                      text-gray-500
                      transition-colors
                      duration-300
                      group-hover:text-gray-400
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
                        border-white/[0.06]
                        bg-white/[0.025]
                        px-3
                        py-1.5
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-white/25
                      "
                    >
                      {product.platform}
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/[0.06]
                        bg-white/[0.025]
                        px-3
                        py-1.5
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-white/25
                      "
                    >
                      {product.type}
                    </span>
                  </div>

                  {/* Coming soon */}
                  <div
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-gray-500
                      transition-all
                      duration-300
                      group-hover:gap-3
                      group-hover:text-purple-300
                    "
                  >
                    Coming soon

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:rotate-45
                      "
                    />
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