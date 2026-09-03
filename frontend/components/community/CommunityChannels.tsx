"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const channels = [
  {
    name: "Discord",
    description:
      "Join the RNOTSKY community, discuss technology, share ideas and connect with other builders.",
    label: "Community",
    href: "#",
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
      className="relative px-5 pb-32 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="relative h-3.5 w-3.5"
            >
              <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />

              <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />

              <span className="absolute inset-[5px] rounded-full bg-purple-300" />
            </span>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-300/70">
              Connect with RNOTSKY
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Find us
            <span className="block bg-gradient-to-r from-purple-300 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              across the internet.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            Follow RNOTSKY across our social and community channels to stay
            connected with the latest technology, projects, discussions and
            opportunities.
          </p>
        </div>

        {/* Channels */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <motion.article
              key={channel.name}
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
                duration: 0.65,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/[0.07]
                bg-white/[0.02]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-purple-400/[0.18]
                hover:bg-white/[0.035]
                sm:p-7
              "
            >
              {/* Card glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[-70px]
                  top-[-70px]
                  h-44
                  w-44
                  rounded-full
                  bg-purple-600/[0.05]
                  blur-[85px]
                  transition-all
                  duration-500
                  group-hover:bg-purple-500/[0.11]
                "
              />

              {/* Top row */}
              <div className="relative flex items-center justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="relative h-3.5 w-3.5 shrink-0"
                >
                  <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />

                  <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />

                  <span className="absolute inset-[5px] rounded-full bg-purple-300" />
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white/30
                    transition-colors
                    duration-300
                    group-hover:border-purple-400/[0.12]
                    group-hover:text-purple-300/60
                  "
                >
                  {channel.label}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-9">
                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-[-0.03em]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-purple-100
                  "
                >
                  {channel.name}
                </h3>

                <p
                  className="
                    mt-3
                    min-h-[72px]
                    text-sm
                    leading-6
                    text-gray-500
                    transition-colors
                    duration-300
                    group-hover:text-gray-400
                  "
                >
                  {channel.description}
                </p>

                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-gray-400
                    transition-all
                    duration-300
                    hover:gap-3
                    hover:text-purple-300
                  "
                >
                  Visit channel

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  />
                </a>
              </div>

              {/* Bottom highlight */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-7
                  right-7
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-purple-400/10
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}