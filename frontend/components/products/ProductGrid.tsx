"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { productCategories } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return productCategories;
    }

    return productCategories.filter((product) => {
      const searchableText = [
        product.name,
        product.slug,
        product.description,
        product.status,
        ...product.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [search]);

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
          top-[-260px]
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
            HEADER
        ======================================================== */}

        <div className="max-w-3xl">
          {/* Label */}

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
            Explore the ecosystem
          </p>

          {/* Heading */}

          <h2
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
            Built for what

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
              comes next.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-gray-500

              sm:text-lg
              sm:leading-8
            "
          >
            Explore applications, intelligent systems, infrastructure and
            technologies being developed by RNOTSKY.
          </p>
        </div>

        {/* =======================================================
            SEARCH
        ======================================================== */}

        <div className="mt-14 lg:mt-16">
          <div
            className="
              group
              relative
              flex
              h-14
              w-full
              items-center
              overflow-hidden
              rounded-[18px]
              border
              border-white/[0.12]
              bg-black
              transition-all
              duration-300

              focus-within:border-purple-500/[0.45]
              focus-within:shadow-[0_0_40px_rgba(168,85,247,0.08)]
            "
          >
            {/* Search glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-0
                top-1/2
                h-24
                w-24
                -translate-y-1/2
                rounded-full
                bg-purple-600/[0.045]
                blur-[40px]
                opacity-0
                transition-opacity
                duration-300

                group-focus-within:opacity-100
              "
            />

            {/* Search icon */}

            <Search
              aria-hidden="true"
              className="
                relative
                z-10
                ml-4
                h-5
                w-5
                shrink-0
                text-white/45
                transition-colors
                duration-300

                group-focus-within:text-purple-300
              "
            />

            {/* Input */}

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products, categories, technologies..."
              type="search"
              aria-label="Search products"
              className="
                relative
                z-10
                h-full
                min-w-0
                flex-1
                bg-transparent
                px-4
                text-sm
                text-white
                outline-none
                placeholder:text-white/30
              "
            />

            {/* Clear button */}

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="
                  relative
                  z-10
                  mr-3
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-white/45
                  transition-all
                  duration-200

                  hover:bg-white/[0.06]
                  hover:text-purple-300
                "
              >
                <X
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </button>
            )}
          </div>

          {/* Search result count */}

          <div className="mt-3 px-1">
            <span
              className="
                text-xs
                text-gray-500
              "
            >
              {search
                ? `${filteredProducts.length} result${
                    filteredProducts.length === 1 ? "" : "s"
                  }`
                : `${productCategories.length} categories`}
            </span>
          </div>
        </div>

        {/* =======================================================
            PRODUCT GRID
        ======================================================== */}

        <div className="mt-10">
          {filteredProducts.length > 0 ? (
            <div
              className="
                grid
                grid-cols-1
                gap-6

                sm:grid-cols-2
              "
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            /* =====================================================
               NO RESULTS
            ====================================================== */

            <div
              className="
                group
                relative
                flex
                min-h-[300px]
                w-full
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-[22px]
                border
                border-white/[0.12]
                bg-black
                px-6
                text-center
                transition-all
                duration-500

                hover:-translate-y-[2px]
                hover:border-purple-500/[0.70]
                hover:shadow-[0_0_45px_rgba(168,85,247,0.13),0_25px_70px_rgba(0,0,0,0.65)]
              "
            >
              {/* Empty-state glow */}

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

              {/* Top purple highlight */}

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

              <div className="relative z-10">
                <span
                  className="
                    text-lg
                    font-bold
                    tracking-[-0.025em]
                    text-white
                  "
                >
                  No products found
                </span>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-md
                    text-sm
                    leading-7
                    text-[#8296ad]
                  "
                >
                  Try searching for another category, technology or product.
                </p>

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="
                      mt-6
                      text-sm
                      font-semibold
                      text-purple-400
                      transition-colors
                      duration-300

                      hover:text-purple-300
                    "
                  >
                    Clear search
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}