"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    label: "Community 01",
    title: "Connect with builders.",
    description:
      "Meet developers, creators, engineers, and technology enthusiasts building what comes next.",
    action: "Explore community",
    href: "/community",
  },
  {
    label: "Community 02",
    title: "Find your next opportunity.",
    description:
      "Explore opportunities at RNOTSKY and discover where your skills can contribute to the technologies we're building.",
    action: "Explore careers",
    href: "/community/jobs",
  },
];

export default function CommunityPreview() {
  return (
    <section
      className="
        relative
        isolate
        w-full
        max-w-[100vw]
        overflow-x-clip
        bg-black
        px-5
        py-24
        text-white

        sm:px-8
        sm:py-28

        lg:px-12
        lg:py-36

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

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          {/* LABEL */}

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
            Community
          </p>

          {/* HEADING */}

          <h2
            className="
              mt-5
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
              with us.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-gray-500

              sm:text-lg
              sm:leading-8
            "
          >
            Connect with people building ambitious technology, discover
            opportunities, and become part of the RNOTSKY ecosystem.
          </p>
        </motion.div>

        {/* =========================================================
            COMMUNITY GRID
        ========================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2

            lg:mt-16
          "
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
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
                amount: 0.12,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="min-w-0"
            >
              {/* =================================================
                  COMMUNITY CARD
              ================================================== */}

              <Link
                href={card.href}
                className="
                  group
                  relative
                  flex
                  min-h-[330px]
                  w-full
                  flex-col
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/[0.12]
                  bg-black
                  px-7
                  py-7
                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-[2px]
                  hover:border-purple-500/[0.70]
                  hover:bg-black
                  hover:shadow-[0_0_45px_rgba(168,85,247,0.13),0_25px_70px_rgba(0,0,0,0.65)]

                  sm:min-h-[350px]
                  sm:px-7
                  sm:py-7

                  lg:px-8
                  lg:py-8
                "
              >
                {/* =================================================
                    CARD INNER PURPLE GLOW
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[300px]
                    w-[300px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-purple-600/[0.05]
                    blur-[100px]
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:scale-110
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    TOP PURPLE HIGHLIGHT
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-[8%]
                    right-[8%]
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-purple-400
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-80
                  "
                />

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-1
                    flex-col
                  "
                >
                  {/* COMMUNITY LABEL */}

                  <div className="flex items-center gap-3">
                    <span
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
                        group-hover:shadow-[0_0_13px_rgba(168,85,247,0.9)]
                      "
                    />

                    <p
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-purple-400
                        transition-colors
                        duration-300
                        group-hover:text-purple-300
                      "
                    >
                      {card.label}
                    </p>
                  </div>

                  {/* =================================================
                      TITLE + DESCRIPTION
                  ================================================== */}

                  <div className="mt-7">
                    <h3
                      className="
                        max-w-[400px]
                        text-[26px]
                        font-bold
                        leading-[1.2]
                        tracking-[-0.035em]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-purple-300

                        sm:text-[28px]
                      "
                    >
                      {card.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-[500px]
                        text-[14px]
                        leading-[1.75]
                        text-[#8296ad]
                        transition-colors
                        duration-300
                        group-hover:text-[#a9b8c9]
                      "
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* =================================================
                      BOTTOM ACTION
                  ================================================== */}

                  <div className="mt-auto pt-8">
                    <span
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
                        group-hover:text-purple-300
                        group-hover:[text-shadow:0_0_18px_rgba(168,85,247,0.35)]
                      "
                    >
                      <span>{card.action}</span>

                      <span
                        aria-hidden="true"
                        className="
                          text-[20px]
                          font-normal
                          leading-none
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}