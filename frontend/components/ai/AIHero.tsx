"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AIHero() {
  return (
    <section
      className="
        relative
        overflow-visible
        bg-black
        px-5
        pb-12
        pt-32
        text-white
        sm:px-8
        sm:pb-16
        sm:pt-36
        lg:px-10
        lg:pb-14
        lg:pt-36
      "
    >
      {/* =========================
          PURPLE ATMOSPHERE
      ========================== */}

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
          top-[160px]
          h-[300px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.05]
          blur-[150px]
        "
      />

      {/* =========================
          HERO CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto max-w-[1000px] text-center">

        {/* =========================
            RNOTSKY AI PILL
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
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
          <Image
            src="/icons/ai.png"
            alt=""
            aria-hidden="true"
            width={18}
            height={18}
            className="
              h-[17px]
              w-[17px]
              object-contain
              drop-shadow-[0_0_9px_rgba(168,85,247,0.5)]
            "
          />

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

        {/* =========================
            HEADING
        ========================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.85,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            pb-4
            text-4xl
            font-extrabold
            leading-[1.15]
            tracking-[-0.04em]
            sm:text-5xl
            md:text-6xl
            lg:text-[5rem]
          "
        >
          Intelligence,

          <span
            className="
              block
              pb-1
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

        {/* =========================
            DESCRIPTION
        ========================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-5
            max-w-[680px]
            text-sm
            leading-7
            text-gray-400
            sm:text-base
            sm:leading-8
          "
        >
          Ask questions, explore ideas, solve problems and build
          with RNOTSKY AI.
        </motion.p>
      </div>
    </section>
  );
}