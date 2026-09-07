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
    <div className="mb-12 flex flex-wrap justify-center gap-8 sm:mb-16 sm:gap-10">
      {filters.map((filter) => {
        const isActive = active === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActive(filter.id)}
            className={`
              group
              relative
              pb-2
              text-sm
              font-semibold
              tracking-[-0.01em]
              transition-all
              duration-300

              ${
                isActive
                  ? "text-purple-300"
                  : "text-gray-500 hover:text-white"
              }
            `}
          >
            {/* Purple active indicator */}
            <span
              aria-hidden="true"
              className={`
                absolute
                bottom-0
                left-1/2
                h-[2px]
                -translate-x-1/2
                rounded-full
                bg-purple-400
                transition-all
                duration-300

                ${
                  isActive
                    ? "w-6 opacity-100 shadow-[0_0_12px_rgba(168,85,247,0.7)]"
                    : "w-0 opacity-0"
                }
              `}
            />

            {filter.label}
          </button>
        );
      })}
    </div>
  );
}