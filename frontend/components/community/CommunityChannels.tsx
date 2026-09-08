"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const channels = [
  {
    name: "Discord",
    description:
      "Join the RNOTSKY community, discuss technology, share ideas and connect with other builders.",
    label: "Community",
    href: "https://discord.gg/aSfKrUKagq",
  },
  {
    name: "YouTube",
    description:
      "Explore technology, tutorials, product demonstrations and the latest from RNOTSKY.",
    label: "Content",
    href: "https://www.youtube.com/@Rnotsky-official",
  },
  {
    name: "LinkedIn",
    description:
      "Follow RNOTSKY for company updates, technology news, opportunities and announcements.",
    label: "Professional",
    href: "https://linkedin.com/company/rnotsky",
  },
  {
    name: "Instagram",
    description:
      "Follow RNOTSKY for visual updates, behind-the-scenes content, projects and technology.",
    label: "Visual",
    href: "https://instagram.com/rnotsky",
  },
  {
    name: "X",
    description:
      "Follow the latest thoughts, updates, announcements and conversations from RNOTSKY.",
    label: "Updates",
    href: "https://x.com/rnotskyofficial",
  },
];

export default function CommunityChannels() {
  return (
    <section
      id="channels"
      className="
        relative
        isolate
        w-full
        max-w-[100vw]
        overflow-x-clip
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
          MAIN CONTAINER
      ========================================================== */}

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
            Connect with RNOTSKY
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
            Find us

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
              across the internet.
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
            Follow RNOTSKY across our social and community channels to stay
            connected with the latest technology, projects, discussions and
            opportunities.
          </p>
        </motion.div>

        {/* =========================================================
            CHANNEL GRID
        ========================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6

            sm:grid-cols-2

            lg:mt-16
            lg:grid-cols-3
          "
        >
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
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
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="min-w-0"
            >
              {/* =================================================
                  CHANNEL CARD
              ================================================== */}

              <article
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
                  {/* =================================================
                      TOP ROW
                  ================================================== */}

                  <div className="flex items-center gap-3">
                    {/* PURPLE DOT */}

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

                    {/* CHANNEL LABEL */}

                    <span
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
                      {channel.label}
                    </span>
                  </div>

                  {/* =================================================
                      CHANNEL CONTENT
                  ================================================== */}

                  <div className="mt-8">
                    {/* CHANNEL NAME */}

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
                      {channel.name}
                    </h3>

                    {/* DESCRIPTION */}

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
                      {channel.description}
                    </p>
                  </div>

                  {/* =================================================
                      BOTTOM ACTION
                  ================================================== */}

                  <div className="mt-auto pt-8">
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
                        hover:gap-3
                      "
                    >
                      <span>Visit channel</span>

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
                    </a>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}