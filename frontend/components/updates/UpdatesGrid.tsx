"use client";

import { motion } from "framer-motion";

import type { Update } from "@/lib/updates";
import UpdateCard from "./UpdateCard";

export default function UpdatesGrid({
  updates,
}: {
  updates: Update[];
}) {
  return (
    <section
      className="
        relative
        isolate
        w-full
        max-w-[100vw]
        overflow-x-clip
        bg-black
        text-white
      "
    >
      <div className="relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 sm:mb-12 lg:mb-14"
        >
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
              "
            />

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
              Latest Updates
            </p>
          </div>
        </motion.div>

        {/* Updates */}
        <div
          className="
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2

            lg:gap-6
          "
        >
          {updates.map((update) => (
            <UpdateCard
              key={update.slug}
              update={update}
            />
          ))}
        </div>
      </div>
    </section>
  );
}