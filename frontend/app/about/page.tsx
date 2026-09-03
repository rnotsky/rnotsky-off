"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: {
    opacity: 0,
    y: 28,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.75,
    ease,
  },
};

const technologies = [
  {
    title: "INTELLIGENCE",
    description: "AI & Machine Learning",
  },
  {
    title: "PERCEPTION",
    description: "Computer Vision",
  },
  {
    title: "SOFTWARE",
    description: "Digital Systems",
  },
  {
    title: "PHYSICAL",
    description: "Robotics & Machines",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* =========================================================
          HERO
          ONLY PURPLE ATMOSPHERE ON THE PAGE
      ========================================================= */}
      <section
        className="
          relative
          overflow-hidden
          bg-black
          px-5
          pb-20
          pt-32
          sm:px-8
          sm:pb-24
          sm:pt-36
          lg:px-10
          lg:pt-40
        "
      >

        {/* ONLY TOP PURPLE GLOW */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-260px]
            h-[620px]
            w-[1050px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.16]
            blur-[170px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1180px]">

          {/* Hero label */}
          <motion.div
            {...reveal}
            className="
              mb-7
              inline-flex
              items-center
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/[0.07]
              px-4
              py-2
              shadow-[0_0_30px_rgba(168,85,247,0.08)]
              backdrop-blur-xl
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-purple-300
              "
            >
              About RNOTSKY
            </span>
          </motion.div>

          {/* Hero heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="
              max-w-[1000px]
              text-[clamp(3rem,7.5vw,7rem)]
              font-extrabold
              leading-[0.87]
              tracking-[-0.065em]
            "
          >
            WE DON&apos;T JUST

            <span className="block text-white">
              IMAGINE
            </span>

            <span
              className="
                block
                bg-gradient-to-r
                from-purple-300
                via-violet-400
                to-fuchsia-400
                bg-clip-text
                pb-2
                text-transparent
                drop-shadow-[0_0_35px_rgba(168,85,247,0.2)]
              "
            >
              THE FUTURE.
            </span>
          </motion.h1>

          {/* Hero description */}
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
              duration: 0.7,
              delay: 0.2,
              ease,
            }}
            className="
              mt-9
              max-w-[680px]
              text-sm
              leading-7
              text-white/65
              sm:text-[15px]
              sm:leading-7
            "
          >
            RNOTSKY is a technology company exploring artificial
            intelligence, software, computer vision, robotics and the
            systems that connect them.
          </motion.p>

        </div>
      </section>

      {/* =========================================================
          BEGINNING
          PURE BLACK
      ========================================================= */}
      <section
        className="
          bg-black
          px-5
          py-24
          sm:px-8
          sm:py-28
          lg:px-10
        "
      >

        <motion.div
          {...reveal}
          className="mx-auto max-w-[1180px]"
        >

          <div className="mb-7 flex items-center gap-3">

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-purple-400
                shadow-[0_0_14px_rgba(168,85,247,1)]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-purple-300
              "
            >
              The beginning
            </span>

          </div>

          <div
            className="
              grid
              gap-10
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-20
            "
          >

            <h2
              className="
                text-3xl
                font-semibold
                leading-[1.05]
                tracking-[-0.045em]
                sm:text-4xl
                lg:text-[3.4rem]
              "
            >
              Curiosity became an idea.

              <span className="block text-purple-300">
                The idea became RNOTSKY.
              </span>
            </h2>

            <div
              className="
                space-y-5
                text-sm
                leading-7
                text-white/60
                sm:text-[15px]
              "
            >

              <p>
                We started with a simple question:

                <span className="text-white">
                  {" "}
                  what could we build if technology stopped being viewed as
                  separate pieces?
                </span>
              </p>

              <p>
                RNOTSKY brings AI, software, vision and robotics together as
                parts of one larger technological ecosystem.
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* =========================================================
          BIG STATEMENT
          PURE BLACK — NO BORDER — NO GLOW
      ========================================================= */}
      <section className="bg-black">

        <div
          className="
            mx-auto
            max-w-[1180px]
            px-5
            py-24
            sm:px-8
            sm:py-28
            lg:px-10
          "
        >

          <motion.div
            {...reveal}
            className="
              grid
              gap-8
              lg:grid-cols-[150px_1fr]
            "
          >

            <div className="flex items-start gap-3">

              <span
                className="
                  mt-1.5
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_15px_rgba(168,85,247,1)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-purple-300
                "
              >
                Our belief
              </span>

            </div>

            <div>

              <h2
                className="
                  max-w-[900px]
                  text-[clamp(2.2rem,5vw,4.8rem)]
                  font-semibold
                  leading-[1]
                  tracking-[-0.055em]
                "
              >
                Technology should

                <span className="text-purple-300">
                  {" "}expand
                </span>{" "}

                what humans can do.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[580px]
                  text-sm
                  leading-7
                  text-white/55
                  sm:text-[15px]
                "
              >
                We believe technology should amplify curiosity, creativity
                and human ambition — not simply replace them.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =========================================================
          DIRECTION
          PURE BLACK
      ========================================================= */}
      <section
        className="
          bg-black
          px-5
          py-24
          sm:px-8
          sm:py-28
          lg:px-10
        "
      >

        <div className="mx-auto max-w-[1180px]">

          <motion.div {...reveal}>

            <div className="mb-7 flex items-center gap-3">

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_14px_rgba(168,85,247,1)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-purple-300
                "
              >
                The direction
              </span>

            </div>

            <div
              className="
                grid
                gap-8
                lg:grid-cols-[1fr_0.7fr]
                lg:items-end
              "
            >

              <h2
                className="
                  text-3xl
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                One ecosystem.

                <span className="block text-purple-300">
                  Many possibilities.
                </span>
              </h2>

              <p
                className="
                  max-w-[450px]
                  text-sm
                  leading-7
                  text-white/55
                "
              >
                Our work moves across different areas of technology while
                remaining connected by one common purpose.
              </p>

            </div>

          </motion.div>

          {/* Technology cards */}
          <motion.div
            {...reveal}
            className="
              mt-14
              grid
              gap-3
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {technologies.map((item, index) => (
              <motion.div
                key={item.title}
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
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease,
                }}
                className="
                  group
                  relative
                  min-h-[155px]
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-purple-500/[0.12]
                  bg-black
                  p-5
                  shadow-[0_15px_50px_rgba(124,58,237,0.035)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-purple-400/30
                  hover:shadow-[0_20px_60px_rgba(124,58,237,0.14)]
                "
              >

                {/* Card-only glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-purple-600/[0.08]
                    blur-[70px]
                    transition-all
                    duration-500
                    group-hover:bg-purple-500/[0.16]
                  "
                />

                <div className="relative flex items-center justify-between">

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-purple-300/80
                    "
                  >
                    RNOTSKY
                  </span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-purple-400
                      shadow-[0_0_14px_rgba(168,85,247,1)]
                    "
                  />

                </div>

                <div className="relative mt-12">

                  <h3
                    className="
                      text-[12px]
                      font-semibold
                      tracking-[0.12em]
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-white/50">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </section>

      {/* =========================================================
          PHILOSOPHY
          NO PAGE-WIDE GLOW
          NO INTERNAL DIVIDER
      ========================================================= */}
      <section
        className="
          bg-black
          px-5
          pb-24
          sm:px-8
          sm:pb-28
          lg:px-10
        "
      >

        <div
          className="
            relative
            mx-auto
            max-w-[1180px]
            overflow-hidden
            rounded-[28px]
            border
            border-purple-500/[0.12]
            bg-white/[0.018]
            px-6
            py-12
            shadow-[0_25px_90px_rgba(124,58,237,0.06)]
            backdrop-blur-2xl
            sm:px-10
            sm:py-14
            lg:px-14
            lg:py-16
          "
        >

          {/* Card-only glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-220px]
              h-[430px]
              w-[700px]
              -translate-x-1/2
              rounded-full
              bg-purple-600/[0.07]
              blur-[150px]
            "
          />

          <motion.div
            {...reveal}
            className="relative z-10"
          >

            <div className="mb-7 flex items-center gap-3">

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_14px_rgba(168,85,247,1)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-purple-300
                "
              >
                What drives us
              </span>

            </div>

            <h2
              className="
                max-w-[900px]
                text-3xl
                font-semibold
                leading-[1.02]
                tracking-[-0.05em]
                sm:text-4xl
                lg:text-5xl
              "
            >
              We believe the most interesting technology

              <span className="block text-purple-300">
                hasn&apos;t been built yet.
              </span>
            </h2>

            {/* Philosophy cards — no divider */}
            <div
              className="
                mt-10
                grid
                gap-7
                pt-2
                md:grid-cols-3
              "
            >

              <div>

                <h3
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[0.14em]
                    text-purple-200
                  "
                >
                  THINK DEEPER
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-6
                    text-white/50
                  "
                >
                  Question assumptions and explore possibilities beyond what
                  already exists.
                </p>

              </div>

              <div>

                <h3
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[0.14em]
                    text-purple-200
                  "
                >
                  BUILD BETTER
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-6
                    text-white/50
                  "
                >
                  Turn ambitious ideas into technology that actually works.
                </p>

              </div>

              <div>

                <h3
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[0.14em]
                    text-purple-200
                  "
                >
                  MOVE FORWARD
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-6
                    text-white/50
                  "
                >
                  Keep learning, experimenting and pushing technology ahead.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =========================================================
          FUTURE
          PURE BLACK — NO TOP BORDER
      ========================================================= */}
      <section
        className="
          bg-black
          px-5
          pb-20
          pt-14
          sm:px-8
          sm:pb-24
          lg:px-10
        "
      >

        <motion.div
          {...reveal}
          className="mx-auto max-w-[1180px]"
        >

          <div className="mb-7 flex items-center gap-3">

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-purple-400
                shadow-[0_0_14px_rgba(168,85,247,1)]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-purple-300
              "
            >
              What&apos;s next
            </span>

          </div>

          <h2
            className="
              text-[clamp(3.2rem,8vw,7rem)]
              font-extrabold
              leading-[0.84]
              tracking-[-0.07em]
            "
          >
            STILL

            <span className="block text-white">
              JUST
            </span>

            <span
              className="
                block
                bg-gradient-to-r
                from-purple-300
                via-violet-400
                to-fuchsia-400
                bg-clip-text
                pb-2
                text-transparent
                drop-shadow-[0_0_35px_rgba(168,85,247,0.18)]
              "
            >
              BEGINNING.
            </span>
          </h2>

          {/* No divider */}
          <div
            className="
              mt-10
              flex
              flex-col
              gap-6
              pt-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p
              className="
                max-w-[500px]
                text-sm
                leading-7
                text-white/55
              "
            >
              RNOTSKY is only getting started. What we&apos;re building today is
              the foundation for what comes next.
            </p>

            <Link
              href="/products"
              className="
                group
                inline-flex
                h-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-purple-700
                via-purple-600
                to-fuchsia-500
                px-6
                text-xs
                font-semibold
                text-white
                shadow-[0_8px_30px_rgba(124,58,237,0.25)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_12px_40px_rgba(168,85,247,0.42)]
              "
            >
              Explore RNOTSKY

              <span
                className="
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </Link>

          </div>

        </motion.div>

      </section>

      {/* =========================================================
          BRAND END
          PURE BLACK — ZERO PURPLE GLOW
      ========================================================= */}
      <section
        className="
          bg-black
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:px-10
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            max-w-[1180px]
            text-center
          "
        >

          <p
            className="
              text-[clamp(3.5rem,12vw,10rem)]
              font-extrabold
              leading-none
              tracking-[-0.08em]
              text-white/[0.025]
            "
          >
            RNOTSKY
          </p>

          <p
            className="
              mt-[-1vw]
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.5em]
              text-white/25
            "
          >
            BUILDING WHAT COMES NEXT
          </p>

        </motion.div>

      </section>

    </main>
  );
}