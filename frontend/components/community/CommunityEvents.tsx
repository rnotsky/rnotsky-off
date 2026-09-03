"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const events = [
  {
    title: "RNOTSKY Tech Talks",
    description:
      "Explore AI, software, robotics and emerging technologies through technical discussions and presentations.",
    type: "Tech Talk",
    status: "Coming Soon",
  },
  {
    title: "Developer Sessions",
    description:
      "Practical sessions focused on building, experimenting and learning with modern technology.",
    type: "Developer",
    status: "Coming Soon",
  },
  {
    title: "RNOTSKY Hackathons",
    description:
      "Build ambitious projects, solve real problems and collaborate with developers and creators.",
    type: "Hackathon",
    status: "Coming Soon",
  },
  {
    title: "Community Meetups",
    description:
      "Meet other technology enthusiasts, developers and builders from the growing RNOTSKY community.",
    type: "Meetup",
    status: "Coming Soon",
  },
];

export default function CommunityEvents() {
  return (
    <section className="relative px-5 pb-32 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-3">
            {/* Purple glowing dot */}
            <span
              aria-hidden="true"
              className="relative h-3.5 w-3.5"
            >
              <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />

              <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />

              <span className="absolute inset-[5px] rounded-full bg-purple-300" />
            </span>

            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.25em]
                text-purple-300/70
              "
            >
              Events
            </p>
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-semibold
              tracking-[-0.04em]
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Learn. Build.
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
              Connect in person.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-500
              sm:text-base
              sm:leading-8
            "
          >
            Join future RNOTSKY events designed for developers, creators and
            technology enthusiasts.
          </p>
        </div>

        {/* Events */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-purple-500/[0.10]
                bg-gradient-to-br
                from-white/[0.045]
                via-white/[0.018]
                to-transparent
                p-7
                backdrop-blur-xl
                transition-all
                duration-500
                sm:p-9
              "
            >
              {/* Top highlight */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-8
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-purple-400/30
                  to-transparent
                "
              />

              {/* Card glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[-80px]
                  top-[-80px]
                  h-48
                  w-48
                  rounded-full
                  bg-purple-600/[0.06]
                  blur-[90px]
                  transition-all
                  duration-500
                  group-hover:bg-purple-500/[0.12]
                "
              />

              {/* Top row */}
              <div className="relative flex items-center justify-between">
                {/* Purple glowing dot */}
                <span
                  aria-hidden="true"
                  className="relative h-3.5 w-3.5"
                >
                  <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />

                  <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />

                  <span className="absolute inset-[5px] rounded-full bg-purple-300" />
                </span>

                {/* Event type */}
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
                  {event.type}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-12">
                <div className="flex items-start justify-between gap-6">
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      tracking-[-0.03em]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-purple-100
                      sm:text-[28px]
                    "
                  >
                    {event.title}
                  </h3>
                </div>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-gray-500
                    transition-colors
                    duration-300
                    group-hover:text-gray-400
                  "
                >
                  {event.description}
                </p>

                {/* Status */}
                <div className="mt-7 flex items-center justify-between">
                  <span
                    className="
                      text-xs
                      font-medium
                      text-purple-300/60
                    "
                  >
                    {event.status}
                  </span>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-gray-500
                      transition-all
                      duration-300
                      group-hover:gap-3
                      group-hover:text-purple-300
                    "
                  >
                    Learn more

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:rotate-45
                      "
                    />
                  </span>
                </div>
              </div>

              {/* Bottom highlight */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-8
                  right-8
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