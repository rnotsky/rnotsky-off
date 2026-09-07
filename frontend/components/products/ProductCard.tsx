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
        ease: "easeOut",
      }}
      whileHover={{
        y: -2,
      }}
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
      {/* =========================================================
          CARD INNER PURPLE GLOW
      ========================================================== */}

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

      {/* =========================================================
          TOP PURPLE HIGHLIGHT
      ========================================================== */}

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

      {/* =========================================================
          CONTENT
      ========================================================== */}

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
        {/* =======================================================
            TOP ROW
        ======================================================== */}

        <div className="flex items-center justify-between gap-4">
          {/* Product label */}

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
              RNOTSKY PRODUCT
            </span>
          </div>

          {/* Status */}

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
            {product.status}
          </span>
        </div>

        {/* =======================================================
            PRODUCT CONTENT
        ======================================================== */}

        <div className="mt-8">
          {/* Product name */}

          <h2
            className="
              max-w-[400px]
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

          {/* Description */}

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

          {/* =====================================================
              TAGS
          ====================================================== */}

          <div className="mt-7 flex flex-wrap gap-2">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
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
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* =======================================================
            BOTTOM ACTION
        ======================================================== */}

        <div className="mt-auto pt-8">
          <Link
            href={product.href}
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
            <span>Explore product</span>

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
    </motion.article>
  );
}