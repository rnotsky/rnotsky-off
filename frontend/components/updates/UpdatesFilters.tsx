"use client";

import { useState } from "react";

export default function UpdatesFilters() {
  const [active, setActive] = useState("all");

  const filters = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "product",
      label: "Products",
    },
    {
      id: "company",
      label: "Company",
    },
  ];

  return (
    <div className="mb-12 flex flex-wrap justify-center gap-2 sm:mb-16">
      {filters.map((filter) => {
        const isActive = active === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => setActive(filter.id)}
            className={`
              rounded-full
              border
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                isActive
                  ? "border-purple-500/40 bg-purple-500/10 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.08)]"
                  : "border-white/[0.08] bg-white/[0.02] text-gray-500 hover:border-purple-500/20 hover:text-gray-300"
              }
            `}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}