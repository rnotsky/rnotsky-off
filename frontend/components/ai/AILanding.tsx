"use client";

import { motion } from "framer-motion";
import AIChat from "./AIChat";

export default function AILanding() {
  return (
    <section
      className="
        relative
        w-full
        max-w-full
        min-w-0
        overflow-hidden
        bg-black
        pt-28
        text-white
        sm:pt-32
      "
    >
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
          max-w-none
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
          max-w-none
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.045]
          blur-[160px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1200px]
          min-w-0
          px-4
          pb-20
          sm:px-8
          lg:px-10
        "
      >
        {/* Hero */}
        <div className="mx-auto w-full max-w-[850px] min-w-0 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              inline-flex
              max-w-full
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
            <span className="relative h-2.5 w-2.5 shrink-0">
              <span className="absolute inset-0 rounded-full bg-purple-500/30 blur-md" />
              <span className="absolute inset-[3px] rounded-full bg-purple-300" />
            </span>

            <span
              className="
                whitespace-nowrap
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-purple-300
                sm:text-[11px]
                sm:tracking-[0.35em]
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
              mx-auto
              mt-7
              max-w-full
              overflow-visible
              pb-3
              text-4xl
              font-extrabold
              leading-[1.12]
              tracking-[-0.045em]
              sm:text-6xl
              md:text-7xl
              lg:text-[5.5rem]
            "
          >
            Intelligence,
            <span
              className="
                block
                max-w-full
                bg-gradient-to-r
                from-purple-300
                via-violet-500
                to-fuchsia-500
                bg-clip-text
                pb-1
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
              w-full
              max-w-[680px]
              px-2
              text-sm
              leading-7
              text-gray-400
              sm:px-0
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
          className="
            mx-auto
            mt-12
            w-full
            max-w-[900px]
            min-w-0
            overflow-hidden
            sm:mt-16
          "
        >
          <AIChat />
        </motion.div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            mt-6
            px-4
            text-center
            text-[10px]
            tracking-wide
            text-white/20
            sm:text-[11px]
          "
        >
          RNOTSKY AI is currently in development.
        </motion.p>
      </div>
    </section>
  );
}