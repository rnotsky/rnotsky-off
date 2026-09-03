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
    <section>
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
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
        className="mb-8"
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
          Latest Updates
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {updates.map((update) => (
          <UpdateCard
            key={update.slug}
            update={update}
          />
        ))}
      </div>
    </section>
  );
}