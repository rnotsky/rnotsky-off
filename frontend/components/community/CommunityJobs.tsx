"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const jobs = [
  {
    title: "AI / ML Engineer",
    type: "Full-time",
    mode: "Remote",
    category: "Artificial Intelligence",
  },
  {
    title: "Software Developer",
    type: "Full-time",
    mode: "Remote",
    category: "Software Engineering",
  },
  {
    title: "Computer Vision Engineer",
    type: "Full-time",
    mode: "Remote",
    category: "Computer Vision",
  },
  {
    title: "Robotics Engineer",
    type: "Full-time",
    mode: "Remote",
    category: "Robotics",
  },
  {
    title: "AI / ML Intern",
    type: "Internship",
    mode: "Remote",
    category: "Artificial Intelligence",
  },
  {
    title: "Software Engineering Intern",
    type: "Internship",
    mode: "Remote",
    category: "Software Engineering",
  },
];

export default function CommunityJobs() {
  return (
    <section
      id="jobs"
      className="
        relative
        scroll-mt-24
        px-5
        pb-32
        sm:px-8
        lg:px-10
      "
    >
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
              Jobs & Opportunities
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
              with RNOTSKY.
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
            Explore opportunities to work with people building intelligent
            software, AI systems, computer vision and robotics.
          </p>
        </div>

        {/* Jobs */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {jobs.map((job, index) => (
            <motion.article
              key={job.title}
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
                y: -4,
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
                  group-hover:bg-purple-500/[0.10]
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
                  {job.type}
                </span>
              </div>

              {/* Job information */}
              <div className="relative mt-9">
                <h3
                  className="
                    text-xl
                    font-semibold
                    tracking-[-0.03em]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-purple-100
                    sm:text-2xl
                  "
                >
                  {job.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-gray-500
                    transition-colors
                    duration-300
                    group-hover:text-gray-400
                  "
                >
                  {job.category}
                </p>

                {/* Meta */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span
                    className="
                      rounded-full
                      border
                      border-white/[0.06]
                      bg-white/[0.02]
                      px-3
                      py-1.5
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-white/25
                    "
                  >
                    {job.type}
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-white/[0.06]
                      bg-white/[0.02]
                      px-3
                      py-1.5
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-white/25
                    "
                  >
                    {job.mode}
                  </span>
                </div>

                {/* Action */}
                <a
                  href="#"
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
                  View opportunities

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

        {/* Availability note */}
        <div
          className="
            mt-8
            rounded-[1.75rem]
            border
            border-white/[0.06]
            bg-white/[0.015]
            px-6
            py-5
            text-center
          "
        >
          <p className="text-sm text-gray-500">
            New opportunities will appear here as RNOTSKY grows.
          </p>
        </div>
      </div>
    </section>
  );
}