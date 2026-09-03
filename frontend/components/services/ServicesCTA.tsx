"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 sm:px-8 lg:px-10">
      {/* Purple atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.10]
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[2.5rem]
            border
            border-purple-500/[0.12]
            bg-gradient-to-br
            from-white/[0.045]
            via-white/[0.018]
            to-transparent
            px-6
            py-16
            text-center
            backdrop-blur-xl
            sm:px-10
            sm:py-20
            lg:py-24
          "
        >
          {/* Top highlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-12
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-purple-400/35
              to-transparent
            "
          />

          {/* Main glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-120px]
              h-[360px]
              w-[650px]
              -translate-x-1/2
              rounded-full
              bg-purple-600/[0.09]
              blur-[120px]
              transition-all
              duration-700
              group-hover:bg-purple-500/[0.14]
            "
          />

          <div className="relative z-10">
            {/* Label */}
            <div className="flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="relative h-3.5 w-3.5"
              >
                <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />

                <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />

                <span className="absolute inset-[5px] rounded-full bg-purple-300" />
              </span>

              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-purple-300/70
                "
              >
                Start something new
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mx-auto
                mt-6
                max-w-4xl
                text-4xl
                font-semibold
                tracking-[-0.045em]
                text-white
                sm:text-5xl
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
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-gray-500
                sm:text-base
                sm:leading-8
              "
            >
              Whether you're starting with an idea or looking to transform
              an existing system, let's build technology that moves it
              forward.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="
                mt-9
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-purple-400/20
                bg-purple-500/10
                px-6
                py-3.5
                text-sm
                font-medium
                text-purple-100
                transition-all
                duration-300
                hover:gap-3.5
                hover:border-purple-400/40
                hover:bg-purple-500/15
                hover:shadow-[0_0_45px_rgba(168,85,247,0.14)]
              "
            >
              Start a Project

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}