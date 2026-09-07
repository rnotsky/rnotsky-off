"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        isolate
        w-full
        max-w-[100vw]
        overflow-x-clip
        overflow-y-hidden
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
          CTA CONTAINER
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 24,
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
          ease: "easeOut",
        }}
        className="
          group
          relative
          mx-auto
          w-full
          max-w-[1400px]
          overflow-hidden
          rounded-[22px]
          border
          border-purple-500/[0.25]
          bg-black
          px-6
          py-16
          text-center
          shadow-[0_0_45px_rgba(168,85,247,0.08),0_25px_70px_rgba(0,0,0,0.65)]
          transition-all
          duration-500
          ease-out

          hover:-translate-y-[2px]
          hover:border-purple-500/[0.70]
          hover:bg-black
          hover:shadow-[0_0_55px_rgba(168,85,247,0.14),0_25px_75px_rgba(0,0,0,0.7)]

          sm:px-10
          sm:py-20

          lg:py-24
        "
      >
        {/* =======================================================
            INNER PURPLE GLOW
        ======================================================== */}

        <motion.div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[320px]
            w-[700px]
            max-w-[100vw]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-600/[0.045]
            blur-[110px]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.35, 0.65, 0.35],
                  scale: [0.96, 1.03, 0.96],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center atmosphere */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-32
            w-80
            max-w-[90vw]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-500/[0.045]
            blur-[80px]
          "
        />

        {/* =======================================================
            SOFT INNER BORDER
        ======================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[1px]
            rounded-[21px]
            border
            border-white/[0.025]
            transition-all
            duration-500
            group-hover:border-purple-400/[0.05]
          "
        />

        {/* =======================================================
            CONTENT
        ======================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[850px]
          "
        >
          {/* =====================================================
              LABEL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 12,
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
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-purple-400
                shadow-[0_0_8px_rgba(168,85,247,0.7)]
                transition-all
                duration-300

                group-hover:scale-125
                group-hover:bg-purple-300
                group-hover:shadow-[0_0_15px_rgba(168,85,247,0.95)]
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
              RNOTSKY
            </p>

            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-purple-400
                shadow-[0_0_8px_rgba(168,85,247,0.7)]
                transition-all
                duration-300

                group-hover:scale-125
                group-hover:bg-purple-300
                group-hover:shadow-[0_0_15px_rgba(168,85,247,0.95)]
              "
            />
          </motion.div>

          {/* =====================================================
              HEADING
          ====================================================== */}

          <motion.h2
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 16,
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
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-3xl
              font-extrabold
              leading-[1.08]
              tracking-[-0.04em]

              sm:text-4xl

              md:text-5xl

              lg:text-6xl
            "
          >
            Build the future

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
              with RNOTSKY.
            </span>
          </motion.h2>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 14,
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
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-gray-500

              sm:text-lg
              sm:leading-8
            "
          >
            Explore the technologies we're building and discover where
            RNOTSKY is heading next.
          </motion.p>

          {/* =====================================================
              BUTTON
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 12,
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
              duration: 0.6,
              delay: 0.28,
              ease: "easeOut",
            }}
            className="mt-9"
          >
            <Link
              href="/about"
              className="
                group/button
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-purple-400/[0.45]
                bg-purple-500/[0.10]
                px-6
                py-3
                text-sm
                font-semibold
                text-purple-100
                shadow-[0_0_25px_rgba(168,85,247,0.07)]
                transition-all
                duration-300

                hover:gap-3.5
                hover:border-purple-400/[0.70]
                hover:bg-purple-500/[0.16]
                hover:text-white
                hover:shadow-[0_0_40px_rgba(168,85,247,0.16)]
              "
            >
              <span>Explore RNOTSKY</span>

              <ArrowRight
                aria-hidden="true"
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300

                  group-hover/button:translate-x-1
                "
              />
            </Link>
          </motion.div>

          {/* =====================================================
              BOTTOM TEXT
          ====================================================== */}

          <p
            className="
              mt-6
              text-[11px]
              tracking-wide
              text-white/40
            "
          >
            Building what comes next.
          </p>
        </div>
      </motion.div>
    </section>
  );
}