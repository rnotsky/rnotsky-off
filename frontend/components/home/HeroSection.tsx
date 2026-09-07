"use client";

import { motion } from "framer-motion";

import RButton from "@/components/common/RButton";
import Logo3D from "@/components/Logo3D";

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

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section
      className="
        relative
        isolate
        min-h-screen
        w-full
        max-w-[100vw]
        overflow-x-clip
        overflow-y-hidden
        bg-black
        text-white
      "
    >
      {/* TOP PURPLE ATMOSPHERE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          z-0
          h-[420px]
          w-[760px]
          max-w-[100vw]
          -translate-x-1/2
          rounded-full
          bg-purple-700/[0.13]
          blur-[150px]

          sm:top-[-200px]
          sm:h-[480px]
          sm:w-[850px]

          lg:h-[540px]
          lg:w-[950px]
        "
      />

      {/* SECOND PURPLE ATMOSPHERE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[130px]
          z-0
          h-[300px]
          w-[520px]
          max-w-[90vw]
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.055]
          blur-[120px]

          sm:top-[160px]
          sm:h-[380px]
          sm:w-[650px]

          lg:h-[430px]
          lg:w-[750px]
        "
      />

      {/* CENTER ATMOSPHERE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[48%]
          z-0
          h-[280px]
          w-[280px]
          max-w-[80vw]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/[0.045]
          blur-[100px]

          sm:h-[360px]
          sm:w-[360px]

          md:h-[420px]
          md:w-[420px]

          lg:h-[480px]
          lg:w-[480px]

          xl:h-[540px]
          xl:w-[540px]
        "
      />

      {/* MAIN HERO CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          flex-col
          items-center
          justify-center
          px-5
          pb-20
          pt-28

          sm:px-8
          sm:pb-24
          sm:pt-32

          md:px-10
          md:pb-28
          md:pt-32

          lg:flex-row
          lg:gap-10
          lg:px-12
          lg:pb-20
          lg:pt-24

          xl:gap-16
          xl:px-16
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.13,
                delayChildren: 0.18,
              },
            },
          }}
          className="
            relative
            z-20
            flex
            w-full
            flex-col
            items-center
            text-center

            lg:w-[52%]
            lg:items-start
            lg:text-left
          "
        >
          {/* LABEL */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: easeOut,
            }}
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-purple-500/[0.20]
              bg-purple-500/[0.045]
              px-4
              py-2
              shadow-[0_0_30px_rgba(168,85,247,0.05)]
              backdrop-blur-xl
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-purple-300

                sm:text-[11px]
                sm:tracking-[0.35em]
              "
            >
              Welcome to Rnotsky
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            variants={fadeUp}
            transition={{
              duration: 0.9,
              ease: easeOut,
            }}
            className="
              mt-7
              max-w-[850px]
              text-[42px]
              font-extrabold
              leading-[0.95]
              tracking-[-0.055em]

              sm:text-5xl
              sm:leading-[0.96]

              md:text-6xl

              lg:mt-8
              lg:text-[4.5rem]

              xl:text-[5.3rem]

              2xl:text-[5.7rem]
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
              WHAT&apos;S NEXT
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            transition={{
              duration: 0.8,
              ease: easeOut,
            }}
            className="
              mx-auto
              mt-7
              max-w-[620px]
              text-[15px]
              leading-7
              text-[#8296ad]

              sm:text-base
              sm:leading-7

              md:text-[17px]
              md:leading-8

              lg:mx-0
            "
          >
            RNOTSKY builds intelligent technology across AI, software,
            robotics, and computer vision — engineered to solve complex
            problems, transform bold ideas, and shape what comes next.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.08,
                },
              },
            }}
            className="
              mt-9
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3

              sm:w-auto
              sm:flex-row
              sm:gap-4

              lg:justify-start
            "
          >
            <motion.div
              variants={buttonPop}
              transition={{
                duration: 0.65,
                ease: easeOut,
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

            <motion.div
              variants={buttonPop}
              transition={{
                duration: 0.65,
                ease: easeOut,
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

        {/* RIGHT / 3D MODEL */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            items-center
            justify-center

            lg:w-[48%]
          "
        >
          {/* MODEL GLOW */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[240px]
              w-[240px]
              max-w-[75vw]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-600/[0.045]
              blur-[90px]

              sm:h-[320px]
              sm:w-[320px]

              md:h-[380px]
              md:w-[380px]

              lg:h-[440px]
              lg:w-[440px]

              xl:h-[500px]
              xl:w-[500px]
            "
          />

          {/* 3D MODEL CONTAINER */}
          <div
            className="
              relative
              z-10
              flex
              h-[290px]
              w-full
              max-w-[360px]
              translate-y-8
              items-center
              justify-center

              sm:h-[390px]
              sm:max-w-[460px]
              sm:translate-y-10

              md:h-[450px]
              md:max-w-[520px]
              md:translate-y-12

              /* LAPTOP — MOVE MODEL UP */
              lg:h-[500px]
              lg:max-w-[560px]
              lg:translate-y-8

              /* LARGE DESKTOP */
              xl:h-[560px]
              xl:max-w-[620px]
              xl:translate-y-10

              /* 2K / 4K */
              2xl:h-[620px]
              2xl:max-w-[680px]
              2xl:translate-y-10
            "
          >
            <div
              className="
                relative
                flex
                h-full
                w-full
                items-center
                justify-center

                [&>canvas]:!h-full
                [&>canvas]:!w-full
                [&>canvas]:max-w-full
              "
            >
              <Logo3D />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-20
          h-28
          w-full
          bg-gradient-to-t
          from-black
          via-black/60
          to-transparent
        "
      />
    </section>
  );
}