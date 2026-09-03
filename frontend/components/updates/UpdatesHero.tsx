"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function UpdatesHero() {
  return (
    <section className="relative overflow-hidden bg-black px-5 pb-20 pt-36 text-white sm:px-8 sm:pb-24 sm:pt-40 lg:px-10 lg:pb-28 lg:pt-44">
      {/* Purple atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-220px]
          h-[520px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.13]
          blur-[170px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[180px]
          h-[300px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.06]
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1000px] text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center rounded-full border border-purple-500/[0.2] bg-purple-500/[0.045] px-4 py-2 backdrop-blur-xl"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-purple-300">
              RNOTSKY Updates
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              text-4xl
              font-extrabold
              leading-[0.98]
              tracking-[-0.04em]

              sm:text-5xl

              md:text-6xl

              lg:text-[5rem]
            "
          >
            What's happening
            <span className="block bg-gradient-to-r from-purple-300 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              at RNOTSKY.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-7 max-w-[680px] text-base leading-7 text-gray-400 sm:text-[17px] sm:leading-8"
          >
            Discover the latest product developments, company news,
            announcements, and milestones from RNOTSKY.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}