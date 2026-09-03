"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Update } from "@/lib/updates";

export default function UpdateCard({
  update,
}: {
  update: Update;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
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

        sm:p-8
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

      {/* Purple glow */}
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
          bg-purple-600/[0.06]
          blur-[80px]
          transition-opacity
          duration-500
          group-hover:bg-purple-500/[0.10]
        "
      />

      {/* Dot */}
      <div className="relative h-4 w-4">
        <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />
        <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />
        <span className="absolute inset-[5px] rounded-full bg-purple-300" />
      </div>

      <div className="relative mt-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-purple-400">
            {update.label}
          </span>

          <span className="shrink-0 text-xs text-gray-600">
            {update.date}
          </span>
        </div>

        <h2 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-2xl">
          {update.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
          {update.description}
        </p>

        <Link
          href={`/updates/${update.slug}`}
          className="
            mt-7
            inline-flex
            text-sm
            font-medium
            text-gray-400
            transition-colors
            duration-300
            hover:text-purple-300
          "
        >
          Read update
        </Link>
      </div>
    </motion.article>
  );
}