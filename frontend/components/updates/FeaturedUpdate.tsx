"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mb-20"
    >
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[2.2rem]
          border
          border-purple-500/[0.14]
          bg-gradient-to-br
          from-purple-500/[0.07]
          via-white/[0.025]
          to-transparent
          p-7
          backdrop-blur-xl

          sm:p-10

          lg:p-12
        "
      >
        {/* Main glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-100px]
            top-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-600/[0.09]
            blur-[120px]
          "
        />

        {/* Highlight */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-10
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-purple-400/40
            to-transparent
          "
        />

        <div className="relative max-w-[900px]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-300">
              Featured
            </span>

            <span className="text-xs uppercase tracking-[0.25em] text-gray-600">
              {update.label}
            </span>

            <span className="text-xs text-gray-600">
              {update.date}
            </span>
          </div>

          <h2 className="mt-7 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            {update.title}
          </h2>

          <p className="mt-5 max-w-[700px] text-base leading-8 text-gray-400">
            {update.description}
          </p>

          <Link
            href={`/updates/${update.slug}`}
            className="
              mt-8
              inline-flex
              rounded-full
              border
              border-purple-500/25
              bg-purple-500/[0.07]
              px-5
              py-2.5
              text-sm
              font-medium
              text-purple-300
              transition-all
              duration-300
              hover:border-purple-400/40
              hover:bg-purple-500/[0.12]
              hover:text-purple-200
            "
          >
            Read update
          </Link>
        </div>
      </div>
    </motion.section>
  );
}