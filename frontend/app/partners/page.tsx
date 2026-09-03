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

const partnerTypes = [
  {
    title: "TECHNOLOGY",
    description:
      "Companies building the tools, platforms and infrastructure shaping modern technology.",
  },
  {
    title: "RESEARCH",
    description:
      "Researchers and institutions exploring new possibilities in AI, robotics and computing.",
  },
  {
    title: "BUILDERS",
    description:
      "Developers, creators and teams turning ambitious ideas into real products.",
  },
  {
    title: "VISIONARIES",
    description:
      "People and organizations thinking beyond today's technology.",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =========================================================
          HERO
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
        {/* MAIN PAGE PURPLE GLOW */}
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
            bg-purple-600/[0.17]
            blur-[175px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1180px]">
          {/* Hero pill */}
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
              RNOTSKY Partners
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
              max-w-[1050px]
              text-[clamp(3rem,7.5vw,7rem)]
              font-extrabold
              leading-[0.87]
              tracking-[-0.065em]
            "
          >
            BUILDING

            <span className="block text-white">
              TOGETHER
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
              WHAT&apos;S NEXT.
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
              sm:leading-8
            "
          >
            RNOTSKY is building an ecosystem of people, companies and
            organizations working together to explore what technology can
            become.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          INTRO STATEMENT
      ========================================================= */}
      <section className="relative bg-black">
        <div
          className="
            relative
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
            className="max-w-[1000px]"
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
                The idea
              </span>
            </div>

            <h2
              className="
                text-[clamp(2.3rem,5vw,4.8rem)]
                font-semibold
                leading-[1]
                tracking-[-0.055em]
              "
            >
              Great technology is rarely built

              <span className="text-purple-300">
                {" "}alone.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-[680px]
                text-sm
                leading-7
                text-white/55
                sm:text-[15px]
                sm:leading-8
              "
            >
              The right partnership can turn an experiment into a product,
              an idea into a platform and a possibility into something real.
              That&apos;s the kind of ecosystem we&apos;re building at RNOTSKY.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PARTNER ECOSYSTEM
      ========================================================= */}
      <section
        className="
          relative
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
                Our ecosystem
              </span>
            </div>

            <div
              className="
                grid
                gap-8
                lg:grid-cols-[1fr_0.65fr]
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
                Different strengths.

                <span className="block text-purple-300">
                  One direction.
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
                We want to work with people and organizations that share our
                curiosity about what comes next.
              </p>
            </div>
          </motion.div>

          {/* Partner categories */}
          <motion.div
            {...reveal}
            className="mt-14 grid gap-3 sm:grid-cols-2"
          >
            {partnerTypes.map((partner) => (
              <div
                key={partner.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-purple-500/[0.12]
                  bg-white/[0.018]
                  p-7
                  shadow-[0_15px_50px_rgba(124,58,237,0.035)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-purple-400/30
                  hover:bg-white/[0.025]
                  hover:shadow-[0_25px_70px_rgba(124,58,237,0.12)]
                  sm:p-8
                "
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-purple-600/[0.07]
                    blur-[70px]
                    transition-all
                    duration-500
                    group-hover:bg-purple-500/[0.16]
                  "
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
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

                  <h3
                    className="
                      mt-14
                      text-sm
                      font-semibold
                      tracking-[0.12em]
                      text-white
                    "
                  >
                    {partner.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[460px]
                      text-sm
                      leading-6
                      text-white/50
                    "
                  >
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PARTNER SPACE
      ========================================================= */}
      <section
        className="
          relative
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
            rounded-[30px]
            border
            border-purple-500/[0.12]
            bg-white/[0.018]
            px-6
            py-14
            shadow-[0_25px_90px_rgba(124,58,237,0.07)]
            backdrop-blur-2xl
            sm:px-10
            sm:py-16
            lg:px-14
            lg:py-18
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
              bg-purple-600/[0.09]
              blur-[150px]
            "
          />

          <motion.div
            {...reveal}
            className="relative z-10"
          >
            <div className="flex items-center gap-3">
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
                Partners
              </span>
            </div>

            <div
              className="
                mt-7
                grid
                gap-10
                lg:grid-cols-[1fr_0.7fr]
                lg:items-center
              "
            >
              <div>
                <h2
                  className="
                    text-3xl
                    font-semibold
                    leading-[1]
                    tracking-[-0.05em]
                    sm:text-4xl
                  "
                >
                  The ecosystem is

                  <span className="block text-purple-300">
                    just beginning.
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-[560px]
                    text-sm
                    leading-7
                    text-white/55
                  "
                >
                  RNOTSKY is currently developing its partner ecosystem.
                  Future partnerships will appear here as we build
                  meaningful collaborations.
                </p>
              </div>

              {/* Coming soon */}
              <div
                className="
                  relative
                  flex
                  min-h-[180px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-purple-500/[0.12]
                  bg-black/50
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    h-[180px]
                    w-[180px]
                    rounded-full
                    bg-purple-600/[0.12]
                    blur-[80px]
                  "
                />

                <div className="relative text-center">
                  <div
                    className="
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    COMING
                  </div>

                  <div
                    className="
                      mt-1
                      bg-gradient-to-r
                      from-purple-300
                      via-violet-400
                      to-fuchsia-400
                      bg-clip-text
                      text-3xl
                      font-semibold
                      tracking-[-0.04em]
                      text-transparent
                    "
                  >
                    SOON
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BECOME A PARTNER
      ========================================================= */}
      <section
        className="
          relative
          bg-black
          px-5
          pb-24
          sm:px-8
          sm:pb-28
          lg:px-10
        "
      >
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            {...reveal}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-purple-500/[0.16]
              bg-purple-500/[0.045]
              px-7
              py-14
              text-center
              shadow-[0_30px_100px_rgba(124,58,237,0.09)]
              sm:px-12
              sm:py-16
            "
          >
            {/* Card-only glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-180px]
                h-[400px]
                w-[650px]
                -translate-x-1/2
                rounded-full
                bg-purple-600/[0.12]
                blur-[150px]
              "
            />

            <div className="relative z-10">
              <div className="mx-auto mb-7 flex w-fit items-center gap-3">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-purple-300
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
                  Start a conversation
                </span>
              </div>

              <h2
                className="
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Build something

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-purple-300
                    via-violet-400
                    to-fuchsia-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  meaningful with us.
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[600px]
                  text-sm
                  leading-7
                  text-white/55
                "
              >
                Whether you&apos;re building technology, researching the
                future or exploring a new idea, we&apos;d love to hear from you.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-8
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-purple-700
                  via-purple-600
                  to-fuchsia-500
                  px-7
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
                Become a Partner

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
        </div>
      </section>

      {/* =========================================================
          BRAND END
          PURE BLACK — NO PURPLE
      ========================================================= */}
      <section
        className="
          relative
          overflow-hidden
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
          className="relative text-center"
        >
          {/* NO PURPLE */}
          <p
            className="
              text-[clamp(3.5rem,12vw,10rem)]
              font-extrabold
              leading-none
              tracking-[-0.08em]
              text-white/[0.06]
            "
          >
            RNOTSKY
          </p>

          {/* NO PURPLE */}
          <p
            className="
              mt-[-1vw]
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.5em]
              text-white/40
            "
          >
            BUILDING WHAT COMES NEXT
          </p>
        </motion.div>
      </section>
    </main>
  );
}