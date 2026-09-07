"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServicesCTA() {
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
        pt-4
        pb-24
        text-white

        sm:px-8
        sm:pb-28

        lg:px-12
        lg:pb-36

        xl:px-16
      "
    >
      {/* Top atmosphere */}
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

      {/* Bottom atmosphere */}
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

      {/* CTA */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
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
        className="
          group
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          overflow-hidden
          rounded-[22px]
          border
          border-purple-500/[0.22]
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
        {/* Main purple glow */}
        <div
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
            transition-all
            duration-700
            group-hover:scale-105
            group-hover:bg-purple-600/[0.07]
          "
        />

        {/* Center glow */}
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
            opacity-70
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Soft inner border */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[1px]
            rounded-[21px]
            border
            border-white/[0.025]
            transition-colors
            duration-500
            group-hover:border-purple-400/[0.05]
          "
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[850px]">
          {/* Label */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
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
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
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
              Start something new
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
              "
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
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
            Have an idea worth
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
              building?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
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
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
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
            Whether you&apos;re starting with an idea or looking to transform
            an existing system, let&apos;s build technology that moves it
            forward.
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
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
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9"
          >
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                text-[15px]
                font-semibold
                tracking-[-0.01em]
                text-purple-400
                transition-all
                duration-300

                hover:gap-3
                hover:text-purple-300
                hover:[text-shadow:0_0_18px_rgba(168,85,247,0.35)]
              "
            >
              <span>Start a Project</span>

              <ArrowUpRight
                aria-hidden="true"
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}