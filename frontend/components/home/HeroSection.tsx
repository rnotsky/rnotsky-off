"use client";

import { motion } from "framer-motion";

import RButton from "@/components/common/RButton";
import Logo3D from "@/components/Logo3D";

/* =========================================================
   TEXT ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

const buttonPop = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          CENTER TOP PURPLE GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-0
          h-[520px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.14]
          blur-[160px]
        "
      />

      {/* =====================================================
          SECONDARY SOFT CENTER GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[170px]
          z-0
          h-[400px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.07]
          blur-[140px]
        "
      />

      {/* =====================================================
          VERY SOFT LOWER ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[40%]
          z-0
          h-[420px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/[0.025]
          blur-[150px]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1400px]
          flex-col
          items-center
          justify-center
          gap-10
          px-6
          pb-16
          pt-28

          sm:px-8

          md:gap-12
          md:px-10
          md:pt-32

          lg:flex-row
          lg:gap-12
          lg:px-12
          lg:pt-24

          xl:gap-16
        "
      >
        {/* =================================================
            LEFT CONTENT
            ONLY TEXT + BUTTONS ANIMATED
        ================================================== */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.13,
                delayChildren: 0.2,
              },
            },
          }}
          className="
            relative
            z-20
            w-full
            text-center

            lg:w-[52%]
            lg:text-left
          "
        >
          {/* =================================================
              RNOTSKY LABEL
          ================================================== */}

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-purple-500/[0.2]
              bg-purple-500/[0.045]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-purple-300
              "
            >
              Welcome to Rnotsky
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================== */}

          <motion.h1
            variants={fadeUp}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              text-4xl
              font-extrabold
              leading-[1]
              tracking-[-0.04em]

              sm:text-5xl

              md:text-6xl

              lg:text-left
              lg:text-[4.4rem]

              xl:text-[5rem]
            "
          >
            <span className="block">
              WE BUILD
            </span>

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-purple-300
                via-violet-500
                to-fuchsia-500
                bg-clip-text
                text-transparent
              "
            >
              WHAT'S NEXT
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            variants={fadeUp}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-7
              max-w-[600px]
              text-base
              leading-7
              text-gray-400

              sm:text-[17px]
              sm:leading-8

              lg:mx-0
              lg:text-[17px]
            "
          >
            RNOTSKY builds intelligent technology across AI,
            software, robotics, and computer vision — engineered
            to solve complex problems, transform bold ideas,
            and shape what comes next.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <motion.div
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="
              mt-9
              flex
              flex-col
              items-center
              gap-4

              sm:flex-row
              sm:justify-center

              lg:justify-start
            "
          >
            {/* PRIMARY */}

            <motion.div
              variants={buttonPop}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <RButton
                href="/products"
                variant="primary"
                size="lg"
              >
                Explore Products →
              </RButton>
            </motion.div>

            {/* SECONDARY */}

            <motion.div
              variants={buttonPop}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <RButton
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Contact Us
              </RButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* =================================================
            RIGHT CONTENT — 3D LOGO
            STATIC
        ================================================== */}

        <div
          className="
            relative
            flex
            w-full
            items-center
            justify-center

            lg:w-[48%]
          "
        >
          {/* =================================================
              LOGO ATMOSPHERE
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[320px]
              w-[320px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-600/[0.05]
              blur-[110px]

              sm:h-[400px]
              sm:w-[400px]

              lg:h-[440px]
              lg:w-[440px]
            "
          />

          {/* =================================================
              3D LOGO

              Slightly bigger + shifted right
              on all screen sizes.
          ================================================== */}

          <div
            className="
              relative
              z-10
              flex
              w-full
              items-center
              justify-center

              /* MOBILE */
              scale-[0.98]
              translate-x-5

              /* SMALL TABLET */
              sm:scale-[1.02]
              sm:translate-x-5

              /* TABLET */
              md:scale-[1.05]
              md:translate-x-6

              /* DESKTOP */
              lg:scale-[1.05]
              lg:translate-x-8

              /* LARGE DESKTOP */
              xl:scale-[1.08]
              xl:translate-x-10
            "
          >
            <Logo3D />
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-20
          h-24
          w-full
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />
    </section>
  );
}