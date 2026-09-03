"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { ProductCategory } from "@/lib/products";

export default function ProductCard({
  product,
}: {
  product: ProductCategory;
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

      {/* Upper-left purple glow */}
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

      {/* Bottom-right subtle glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-80px]
          right-[-60px]
          h-40
          w-40
          rounded-full
          bg-violet-600/[0.04]
          blur-[80px]
          transition-all
          duration-700
          group-hover:bg-purple-500/[0.08]
        "
      />

      {/* Purple glowing dot */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-7
          top-7
          h-4
          w-4
          sm:left-8
          sm:top-8
        "
      >
        {/* Outer glow */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-purple-500/20
            blur-md
          "
        />

        {/* Middle glow */}
        <span
          className="
            absolute
            inset-[3px]
            rounded-full
            bg-purple-400/30
            animate-pulse
          "
        />

        {/* Core */}
        <span
          className="
            absolute
            inset-[5px]
            rounded-full
            bg-purple-300
          "
        />
      </div>

      {/* Card content */}
      <div className="relative pt-10">
        {/* Status */}
        <div className="flex items-center justify-end">
          <span
            className="
              shrink-0
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
            {product.status}
          </span>
        </div>

        {/* Product name */}
        <h2
          className="
            mt-5
            text-2xl
            font-semibold
            leading-tight
            tracking-[-0.03em]
            text-white
            transition-colors
            duration-300
            group-hover:text-purple-100
            sm:text-[28px]
          "
        >
          {product.name}
        </h2>

        {/* Description */}
        <p
          className="
            mt-4
            max-w-[520px]
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

        {/* Tags */}
        <div className="mt-7 flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
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
                transition-colors
                duration-300
                group-hover:border-purple-400/[0.10]
                group-hover:text-white/35
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Explore */}
        <Link
          href={product.href}
          className="
            mt-7
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-gray-400
            transition-all
            duration-300
            hover:gap-3
            hover:text-purple-300
          "
        >
          Explore product

          <ArrowUpRight
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:rotate-45
            "
          />
        </Link>
      </div>
    </motion.article>
  );
}