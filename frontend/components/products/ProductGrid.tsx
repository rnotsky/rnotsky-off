"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

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
    <section className="relative mx-auto max-w-[1500px] px-5 pb-32 sm:px-8 lg:px-10">
      {/* Section heading */}
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-300/70">
            Explore the ecosystem
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for what comes next.
          </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-white/40 md:text-right">
          Explore applications, intelligent systems, infrastructure and
          technologies being developed by RNOTSKY.
        </p>
      </div>

      {/* Search */}
      <div className="mb-10">
        <div
          className="
            group
            relative
            flex
            h-14
            items-center
            rounded-2xl
            border
            border-white/[0.09]
            bg-white/[0.025]
            px-4
            transition-all
            duration-300
            focus-within:border-purple-400/30
            focus-within:bg-white/[0.04]
            focus-within:shadow-[0_0_50px_rgba(168,85,247,0.08)]
          "
        >
          <Search
            className="
              h-5
              w-5
              shrink-0
              text-white/30
              transition-colors
              duration-300
              group-focus-within:text-purple-300
            "
          />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products, categories, technologies..."
            className="
              h-full
              min-w-0
              flex-1
              bg-transparent
              px-4
              text-sm
              text-white
              outline-none
              placeholder:text-white/25
            "
            type="search"
            aria-label="Search products"
          />
        </div>

        {/* Search result count */}
        <div className="mt-3 px-1">
          <span className="text-xs text-white/25">
            {search
              ? `${filteredProducts.length} result${
                  filteredProducts.length === 1 ? "" : "s"
                }`
              : `${productCategories.length} categories`}
          </span>
        </div>
      </div>

      {/* Product cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        /* No results */
        <div
          className="
            flex
            min-h-[300px]
            flex-col
            items-center
            justify-center
            rounded-[28px]
            border
            border-white/[0.08]
            bg-white/[0.02]
            px-6
            text-center
          "
        >
          <div className="text-lg font-medium text-white">
            No products found
          </div>

          <p className="mt-2 max-w-md text-sm text-white/35">
            Try searching for another category, technology or product.
          </p>
        </div>
      )}
    </section>
  );
}