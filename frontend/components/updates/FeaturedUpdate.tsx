"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Update } from "@/lib/updates";

export default function FeaturedUpdate({
  update,
}: {
  update: Update;
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 35,
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
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mb-20"
    >
      <article
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
          sm:px-8
          sm:py-8

          lg:px-10
          lg:py-10
        "
      >
        {/* Inner purple glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-80px]
            top-[-100px]
            h-[320px]
            w-[320px]
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

        {/* Bottom atmosphere */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-180px]
            left-1/2
            h-[280px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.025]
            blur-[110px]
            opacity-0
            transition-opacity
            duration-700
            group-hover:opacity-100
          "
        />

        {/* Subtle top hover highlight */}
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
          {/* Top metadata */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {/* Featured label */}
            <div className="flex items-center gap-3">
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
                Featured
              </span>
            </div>

            {/* Update category */}
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/45
                transition-colors
                duration-300
                group-hover:text-white/60
              "
            >
              {update.label}
            </span>

            {/* Date */}
            <span
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-white/35
                transition-colors
                duration-300
                group-hover:text-white/50
              "
            >
              {update.date}
            </span>
          </div>

          {/* Main content */}
          <div className="mt-8">
            <h2
              className="
                max-w-[850px]
                text-[28px]
                font-bold
                leading-[1.2]
                tracking-[-0.035em]
                text-white
                transition-colors
                duration-300
                group-hover:text-purple-300

                sm:text-[32px]

                md:text-[36px]

                lg:text-[40px]
              "
            >
              {update.title}
            </h2>

            <p
              className="
                mt-5
                max-w-[760px]
                text-[14px]
                leading-[1.75]
                text-[#8296ad]
                transition-colors
                duration-300
                group-hover:text-[#a9b8c9]

                sm:text-[15px]
              "
            >
              {update.description}
            </p>
          </div>

          {/* Bottom action */}
          <div className="mt-auto pt-8">
            <Link
              href={`/updates/${update.slug}`}
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

                hover:gap-3
                hover:text-purple-300
                hover:[text-shadow:0_0_18px_rgba(168,85,247,0.35)]
              "
            >
              <span>Read update</span>

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
            </Link>
          </div>
        </div>
      </article>
    </motion.section>
  );
}