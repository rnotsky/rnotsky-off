"use client";

import { motion } from "framer-motion";
import RButton from "@/components/common/RButton";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const popUp = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const popSmall = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HomeCTA() {
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
        py-24
        text-white

        sm:px-8
        sm:py-28

        md:py-32

        lg:px-12
        lg:py-36

        xl:px-16
      "
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-300px]
          h-[560px]
          w-[900px]
          max-w-[100vw]
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.035]
          blur-[190px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-280px]
          left-1/2
          h-[420px]
          w-[760px]
          max-w-[100vw]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.02]
          blur-[170px]
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1200px]
        "
      >
        {/* =======================================================
            CTA BOX
        ======================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={popUp}
          transition={{
            duration: 0.9,
            ease: easeOut,
          }}
          className="
            group
            relative
            flex
            flex-col
            overflow-hidden
            rounded-[28px]
            border
            border-purple-500/[0.22]
            bg-black
            px-5
            py-14
            text-center
            shadow-[0_0_45px_rgba(168,85,247,0.08),0_25px_90px_rgba(0,0,0,0.75)]
            transition-all
            duration-700

            hover:border-purple-400/[0.55]
            hover:shadow-[0_0_80px_rgba(168,85,247,0.18),0_0_140px_rgba(168,85,247,0.07),0_30px_100px_rgba(0,0,0,0.8)]

            sm:px-10
            sm:py-16

            md:px-16
            md:py-20

            lg:rounded-[32px]
            lg:px-20
            lg:py-24
          "
        >
          {/* =====================================================
              OUTER PURPLE GLOW
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-170px]
              h-[330px]
              w-[700px]
              max-w-[100vw]
              -translate-x-1/2
              rounded-full
              bg-purple-600/[0.07]
              blur-[130px]
            "
          />

          {/* =====================================================
              CENTER PURPLE GLOW
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[600px]
              max-w-[95vw]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-500/[0.025]
              blur-[125px]
              transition-all
              duration-700
              group-hover:bg-purple-500/[0.055]
            "
          />

          {/* =====================================================
              PURPLE EDGE GLOW
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[28px]
              opacity-0
              shadow-[inset_0_0_70px_rgba(168,85,247,0.10)]
              transition-opacity
              duration-700
              group-hover:opacity-100

              lg:rounded-[32px]
            "
          />

          {/* =====================================================
              SOFT INNER BORDER
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-[1px]
              rounded-[27px]
              border
              border-purple-400/[0.06]

              lg:rounded-[31px]
            "
          />

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.11,
                  delayChildren: 0.2,
                },
              },
            }}
            className="relative z-10"
          >
            {/* ===================================================
                LABEL
            ==================================================== */}

            <motion.div
              variants={fadeUp}
              transition={{
                duration: 0.7,
                ease: easeOut,
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
                  h-1
                  w-1
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_12px_rgba(168,85,247,0.9)]
                "
              />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-purple-400

                  sm:text-xs
                  sm:tracking-[0.3em]

                  md:text-sm
                "
              >
                Customer Support
              </p>

              <span
                aria-hidden="true"
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_12px_rgba(168,85,247,0.9)]
                "
              />
            </motion.div>

            {/* ===================================================
                HEADING
            ==================================================== */}

            <motion.h2
              variants={fadeUp}
              transition={{
                duration: 0.8,
                ease: easeOut,
              }}
              className="
                mx-auto
                mt-6
                max-w-4xl
                text-[42px]
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]

                sm:text-5xl
                sm:leading-[1]

                md:text-6xl

                lg:text-7xl
              "
            >
              We're here to

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-purple-300
                  via-violet-500
                  to-fuchsia-500
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_25px_rgba(168,85,247,0.15)]
                "
              >
                help.
              </span>
            </motion.h2>

            {/* ===================================================
                DESCRIPTION
            ==================================================== */}

            <motion.p
              variants={fadeUp}
              transition={{
                duration: 0.8,
                ease: easeOut,
              }}
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-[15px]
                leading-7
                text-[#8296ad]

                sm:text-base
                sm:leading-7

                md:text-lg
                md:leading-8
              "
            >
              Have a question, need assistance, or want to learn more about
              RNOTSKY? Our team is here to help you find the right direction.
            </motion.p>

            {/* ===================================================
                BUTTONS
            ==================================================== */}

            <motion.div
              variants={popSmall}
              transition={{
                duration: 0.7,
                ease: easeOut,
              }}
              className="
                mt-10
                flex
                flex-col
                items-stretch
                justify-center
                gap-3

                sm:flex-row
                sm:items-center
                sm:gap-4
              "
            >
              {/* CONTACT */}

              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                  ease: easeOut,
                }}
                className="flex justify-center"
              >
                <RButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                >
                  Contact Us
                </RButton>
              </motion.div>

              {/* SUPPORT */}

              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                  ease: easeOut,
                }}
                className="flex justify-center"
              >
                <RButton
                  href="/support"
                  variant="secondary"
                  size="lg"
                >
                  Support
                </RButton>
              </motion.div>
            </motion.div>

            {/* ===================================================
                FOOTER DETAIL
            ==================================================== */}

            <motion.p
              variants={fadeUp}
              transition={{
                duration: 0.7,
                ease: easeOut,
              }}
              className="
                mt-8
                text-[11px]
                tracking-wide
                text-white/[0.22]
              "
            >
              We&apos;re building the future. Let&apos;s build it together.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}