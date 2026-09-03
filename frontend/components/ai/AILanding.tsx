"use client";

import { motion } from "framer-motion";
import AIChat from "./AIChat";

export default function AILanding() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-28 text-white sm:pt-32">
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
          bg-purple-700/[0.12]
          blur-[170px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[280px]
          h-[400px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.045]
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 pb-20 sm:px-8 lg:px-10">
        {/* Hero */}
        <div className="mx-auto max-w-[850px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-purple-500/[0.2]
              bg-purple-500/[0.045]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span className="relative h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-purple-500/30 blur-md" />
              <span className="absolute inset-[3px] rounded-full bg-purple-300" />
            </span>

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-purple-300
              "
            >
              RNOTSKY AI
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              pb-3
              text-5xl
              font-extrabold
              leading-[1.12]
              tracking-[-0.05em]
              sm:text-6xl
              md:text-7xl
              lg:text-[5.5rem]
            "
          >
            Intelligence,
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
              built for what's next.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-6
              max-w-[680px]
              text-base
              leading-7
              text-gray-400
              sm:text-[17px]
              sm:leading-8
            "
          >
            Ask questions, explore ideas, solve problems and build with
            RNOTSKY AI.
          </motion.p>
        </div>

        {/* Chat */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-12 max-w-[900px] sm:mt-16"
        >
          <AIChat />
        </motion.div>

        {/* Small footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-6 text-center text-[11px] tracking-wide text-white/20"
        >
          RNOTSKY AI is currently in development.
        </motion.p>
      </div>
    </section>
  );
}