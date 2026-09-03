import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProduct() {
  return (
    <section className="relative px-5 pb-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">

        {/* Section heading */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            {/* Purple glowing dot */}
            <span
              aria-hidden="true"
              className="
                relative
                h-3.5
                w-3.5
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-purple-500/20
                  blur-md
                "
              />

              <span
                className="
                  absolute
                  inset-[3px]
                  rounded-full
                  bg-purple-400/30
                  animate-pulse
                "
              />

              <span
                className="
                  absolute
                  inset-[5px]
                  rounded-full
                  bg-purple-300
                "
              />
            </span>

            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.25em]
                text-purple-300/70
              "
            >
              Featured product
            </p>
          </div>

          <h2
            className="
              mt-4
              text-3xl
              font-semibold
              tracking-[-0.03em]
              text-white
              sm:text-4xl
            "
          >
            What we're building.
          </h2>
        </div>

        {/* Featured product card */}
        <Link
          href="/products/ai"
          className="
            group
            relative
            block
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
            hover:border-purple-400/20
            hover:bg-white/[0.04]
            sm:p-10
            lg:p-14
          "
        >
          {/* Top highlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-8
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-purple-400/30
              to-transparent
            "
          />

          {/* Main purple glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-[500px]
              w-[500px]
              rounded-full
              bg-purple-700/[0.10]
              blur-[140px]
              transition-all
              duration-700
              group-hover:bg-purple-600/[0.16]
            "
          />

          {/* Secondary purple glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-180px]
              left-1/3
              h-[400px]
              w-[400px]
              rounded-full
              bg-violet-600/[0.06]
              blur-[130px]
            "
          />

          <div
            className="
              relative
              grid
              gap-12
              lg:grid-cols-[1.1fr_0.9fr]
              lg:items-center
            "
          >

            {/* ========================================= */}
            {/* LEFT CONTENT */}
            {/* ========================================= */}

            <div>

              {/* Status */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="
                    relative
                    h-3.5
                    w-3.5
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-purple-500/20
                      blur-md
                    "
                  />

                  <span
                    className="
                      absolute
                      inset-[3px]
                      rounded-full
                      bg-purple-400/30
                      animate-pulse
                    "
                  />

                  <span
                    className="
                      absolute
                      inset-[5px]
                      rounded-full
                      bg-purple-300
                    "
                  />
                </span>

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-purple-400
                  "
                >
                  In Development
                </span>
              </div>

              {/* Product name */}
              <h3
                className="
                  mt-7
                  text-5xl
                  font-semibold
                  tracking-[-0.055em]
                  text-white
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                RNOTSKY AI
              </h3>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-7
                  text-gray-500
                  transition-colors
                  duration-300
                  group-hover:text-gray-400
                  sm:text-lg
                  sm:leading-8
                "
              >
                Intelligent technology designed to understand, reason and
                assist — bringing AI closer to the way people think, create
                and work.
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Agents",
                  "Machine Learning",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      px-4
                      py-2
                      text-xs
                      text-white/30
                      transition-colors
                      duration-300
                      group-hover:border-purple-400/[0.12]
                      group-hover:text-white/40
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Explore link */}
              <div
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-gray-400
                  transition-all
                  duration-300
                  group-hover:gap-3
                  group-hover:text-purple-300
                "
              >
                Explore RNOTSKY AI

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

            {/* ========================================= */}
            {/* RIGHT AI IMAGE */}
            {/* ========================================= */}

            <div
              className="
                relative
                flex
                min-h-[280px]
                items-center
                justify-center
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/[0.06]
                bg-black/30
                sm:min-h-[360px]
              "
            >

              {/* Background glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  h-64
                  w-64
                  rounded-full
                  bg-purple-600/[0.12]
                  blur-[110px]
                  transition-all
                  duration-700
                  group-hover:scale-125
                  group-hover:bg-purple-500/[0.18]
                "
              />

              {/* AI image */}
              <div
                className="
                  relative
                  h-44
                  w-44
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  sm:h-56
                  sm:w-56
                "
              >
                <Image
                  src="/icons/ai.png"
                  alt="RNOTSKY AI"
                  fill
                  priority
                  sizes="(max-width: 640px) 176px, 224px"
                  className="
                    object-contain
                    drop-shadow-[0_0_45px_rgba(168,85,247,0.30)]
                  "
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}