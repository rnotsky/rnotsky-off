"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function FeaturedProduct() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative isolate w-full max-w-[100vw] overflow-x-clip
        bg-black px-5 pt-16 pb-24 text-white
        sm:px-8 sm:pt-20 sm:pb-28
        lg:px-12 lg:pt-24 lg:pb-36
        xl:px-16
      "
    >
      {/* Subtle section atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-[-260px]
          z-0 h-[520px] w-[900px] max-w-[100vw]
          -translate-x-1/2 rounded-full
          bg-purple-700/[0.025] blur-[170px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute bottom-[-220px] right-[-180px]
          z-0 h-[450px] w-[450px] max-w-[100vw]
          rounded-full bg-purple-700/[0.018] blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <p
            className="
              text-xs font-semibold uppercase
              tracking-[0.3em] text-purple-400
              sm:text-sm
            "
          >
            Featured product
          </p>

          <h2
            className="
              mt-5 text-3xl font-extrabold
              leading-[1.08] tracking-[-0.04em]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            What we're
            <span
              className="
                block bg-gradient-to-r
                from-purple-300 via-violet-500 to-fuchsia-500
                bg-clip-text text-transparent
              "
            >
              building.
            </span>
          </h2>

          <p
            className="
              mt-6 max-w-2xl
              text-base leading-7 text-gray-500
              sm:text-lg sm:leading-8
            "
          >
            Explore the technology we're building and discover the products
            shaping the future of RNOTSKY.
          </p>
        </motion.div>

        {/* Featured Product */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: "easeOut",
          }}
          className="mt-14 lg:mt-16"
        >
          <Link
            href="/products/ai"
            className="
              group relative block w-full overflow-hidden
              rounded-[22px] border border-white/[0.12]
              bg-black px-6 py-7
              transition-all duration-500 ease-out
              hover:-translate-y-[2px]
              hover:border-purple-500/[0.70]
              hover:bg-black
              hover:shadow-[0_0_45px_rgba(168,85,247,0.13),0_25px_70px_rgba(0,0,0,0.65)]
              sm:px-7 sm:py-8
              lg:px-8 lg:py-8
            "
          >
            {/* Inner purple glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-1/2 top-1/2
                h-[360px] w-[360px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-purple-600/[0.05]
                blur-[100px]
                opacity-0
                transition-all duration-700
                group-hover:scale-110
                group-hover:opacity-100
              "
            />

            {/* Top highlight */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-[8%] right-[8%] top-0
                h-px
                bg-gradient-to-r
                from-transparent via-purple-400 to-transparent
                opacity-0
                transition-opacity duration-500
                group-hover:opacity-80
              "
            />

            {/* Content */}
            <div
              className="
                relative z-10 grid gap-10
                lg:grid-cols-[1.1fr_0.9fr]
                lg:items-center lg:gap-14
              "
            >
              {/* Left */}
              <div>
                {/* Status */}
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5 w-1.5 shrink-0 rounded-full
                      bg-purple-400
                      shadow-[0_0_8px_rgba(168,85,247,0.7)]
                      transition-all duration-300
                      group-hover:scale-125
                      group-hover:bg-purple-300
                      group-hover:shadow-[0_0_15px_rgba(168,85,247,0.95)]
                    "
                  />

                  <span
                    className="
                      text-[11px] font-semibold uppercase
                      tracking-[0.18em] text-purple-400
                      transition-colors duration-300
                      group-hover:text-purple-300
                    "
                  >
                    In Development
                  </span>
                </div>

                {/* Product name */}
                <h3
                  className="
                    mt-8 text-4xl font-bold
                    leading-[1.08] tracking-[-0.04em]
                    text-white
                    transition-colors duration-300
                    group-hover:text-purple-300
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  RNOTSKY AI
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5 max-w-xl
                    text-[14px] leading-[1.75]
                    text-[#8296ad]
                    transition-colors duration-300
                    group-hover:text-[#a9b8c9]
                    sm:text-base sm:leading-8
                  "
                >
                  Intelligent technology designed to understand, reason and
                  assist — bringing AI closer to the way people think, create
                  and work.
                </p>

                {/* Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Agents",
                    "Machine Learning",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border border-white/[0.09]
                        bg-white/[0.025]
                        px-3 py-1.5
                        text-[10px] font-medium uppercase
                        tracking-[0.12em] text-white/45
                        transition-all duration-300
                        group-hover:border-purple-400/[0.18]
                        group-hover:bg-purple-500/[0.04]
                        group-hover:text-white/60
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore */}
                <div
                  className="
                    mt-8 inline-flex items-center gap-2
                    text-[15px] font-semibold
                    tracking-[-0.01em] text-purple-400
                    transition-all duration-300
                    group-hover:gap-3
                    group-hover:text-purple-300
                    group-hover:[text-shadow:0_0_18px_rgba(168,85,247,0.35)]
                  "
                >
                  <span>Explore RNOTSKY AI</span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="
                      h-4 w-4
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>
              </div>

              {/* Right visual */}
              <div
                className="
                  relative flex min-h-[280px]
                  items-center justify-center
                  overflow-hidden rounded-[20px]
                  border border-white/[0.10]
                  bg-black
                  transition-all duration-500
                  group-hover:border-purple-500/[0.35]
                  sm:min-h-[350px]
                "
              >
                {/* Visual glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    left-1/2 top-1/2
                    h-64 w-64
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full
                    bg-purple-600/[0.07]
                    blur-[100px]
                    transition-all duration-700
                    group-hover:scale-125
                    group-hover:bg-purple-500/[0.12]
                  "
                />

                {/* AI icon */}
                <div
                  className="
                    relative h-40 w-40
                    transition-transform duration-700
                    group-hover:scale-105
                    sm:h-52 sm:w-52
                  "
                >
                  <Image
                    src="/icons/ai.png"
                    alt="RNOTSKY AI"
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 208px, 320px"
                    className="
                      object-contain
                      drop-shadow-[0_0_45px_rgba(168,85,247,0.30)]
                    "
                  />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}