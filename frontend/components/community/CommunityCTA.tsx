"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CommunityCTA() {
  const reducedMotion = useReducedMotion();

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
        sm:pt-6
        sm:pb-28

        lg:px-12
        lg:pt-8
        lg:pb-36

        xl:px-16
      "
    >
      {/* =========================================================
          BACKGROUND PURPLE ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-220px]
          z-0
          h-[520px]
          w-[900px]
          max-w-[100vw]
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.035]
          blur-[170px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* =========================================================
            CTA BOX
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
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
            rounded-[22px]
            border
            border-purple-500/[0.22]
            bg-black
            px-6
            py-16
            text-center
            shadow-[0_0_45px_rgba(168,85,247,0.08),0_25px_90px_rgba(0,0,0,0.75)]
            transition-all
            duration-500

            hover:border-purple-500/[0.55]
            hover:shadow-[0_0_70px_rgba(168,85,247,0.16),0_25px_90px_rgba(0,0,0,0.8)]

            sm:px-10
            sm:py-20

            lg:py-24
          "
        >
          {/* =======================================================
              OUTER PURPLE GLOW
          ======================================================== */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-150px]
              h-[420px]
              w-[700px]
              max-w-[90vw]
              -translate-x-1/2
              rounded-full
              bg-purple-600/[0.09]
              blur-[120px]
            "
            animate={
              reducedMotion
                ? undefined
                : {
                    scale: [1, 1.06, 1],
                    opacity: [0.65, 0.9, 0.65],
                  }
            }
            transition={
              reducedMotion
                ? undefined
                : {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />

          {/* =======================================================
              CENTER PURPLE GLOW
          ======================================================== */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[260px]
              w-[520px]
              max-w-[85vw]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-500/[0.045]
              blur-[110px]
            "
            animate={
              reducedMotion
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.65, 0.4],
                  }
            }
            transition={
              reducedMotion
                ? undefined
                : {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />

          {/* =======================================================
              PURPLE EDGE GLOW
          ======================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[22px]
              ring-1
              ring-purple-500/[0.08]
              transition-all
              duration-500
              group-hover:ring-purple-400/[0.22]
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
              border-white/[0.035]
            "
          />

          {/* =======================================================
              CONTENT
          ======================================================== */}

          <div className="relative z-10">
            {/* =====================================================
                LABEL
            ====================================================== */}

            <div className="flex items-center justify-center gap-3">
              {/* PURPLE DOT */}

              <span
                aria-hidden="true"
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_10px_rgba(168,85,247,0.85)]
                  transition-all
                  duration-300
                  group-hover:scale-125
                  group-hover:bg-purple-300
                  group-hover:shadow-[0_0_18px_rgba(168,85,247,1)]
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-purple-400

                  sm:text-sm
                "
              >
                Join the community
              </span>

              {/* PURPLE DOT */}

              <span
                aria-hidden="true"
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_10px_rgba(168,85,247,0.85)]
                  transition-all
                  duration-300
                  group-hover:scale-125
                  group-hover:bg-purple-300
                  group-hover:shadow-[0_0_18px_rgba(168,85,247,1)]
                "
              />
            </div>

            {/* =====================================================
                HEADING
            ====================================================== */}

            <h2
              className="
                mx-auto
                mt-6
                max-w-4xl
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.045em]

                sm:text-5xl

                lg:text-6xl
              "
            >
              Be part of

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
                what's next.
              </span>
            </h2>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-[#8296ad]
                transition-colors
                duration-300
                group-hover:text-[#9eacbc]

                sm:text-base
                sm:leading-8
              "
            >
              Connect with the RNOTSKY community, discover new opportunities,
              join upcoming events and grow with people building the future
              of technology.
            </p>

            {/* =====================================================
                BUTTONS
            ====================================================== */}

            <div
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-3

                sm:flex-row
              "
            >
              {/* =================================================
                  JOIN COMMUNITY
              ================================================== */}

              <a
                href="#channels"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  border
                  border-purple-500/[0.35]
                  bg-purple-500/[0.10]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-purple-200
                  transition-all
                  duration-300

                  hover:gap-3.5
                  hover:border-purple-400/[0.65]
                  hover:bg-purple-500/[0.16]
                  hover:text-purple-100
                  hover:shadow-[0_0_45px_rgba(168,85,247,0.18)]
                "
              >
                <span>Join the Community</span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              {/* =================================================
                  EXPLORE JOBS
              ================================================== */}

              <a
                href="#jobs"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-black
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white/60
                  transition-all
                  duration-300

                  hover:border-purple-400/[0.25]
                  hover:bg-black
                  hover:text-purple-200
                  hover:shadow-[0_0_35px_rgba(168,85,247,0.08)]
                "
              >
                <span>Explore Jobs</span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    hover:translate-x-0.5
                    hover:-translate-y-0.5
                  "
                />
              </a>
            </div>

            {/* =====================================================
                SMALL FOOTER TEXT
            ====================================================== */}

            <p
              className="
                mt-8
                text-[11px]
                tracking-wide
                text-white/20
              "
            >
              Build. Connect. Create what&apos;s next.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}