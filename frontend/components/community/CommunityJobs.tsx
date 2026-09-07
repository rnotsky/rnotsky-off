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
        isolate
        w-full
        max-w-[100vw]
        scroll-mt-24
        overflow-x-clip
        bg-black
        px-5
        pt-16
        pb-24
        text-white

        sm:px-8
        sm:pt-20
        sm:pb-28

        lg:px-10
        lg:pt-24
        lg:pb-36
      "
    >
      {/* Purple atmosphere */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-240px]
          z-0
          h-[500px]
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

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">

        {/* Header */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          {/* Label */}

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-purple-300

              sm:text-sm
            "
          >
            Jobs & Opportunities
          </p>

          {/* Heading */}

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
              with RNOTSKY.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-[#94a8bd]

              sm:text-lg
              sm:leading-8
            "
          >
            Explore opportunities to work with people building intelligent
            software, AI systems, computer vision and robotics.
          </p>
        </motion.div>

        {/* Job grid */}

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
                amount: 0.12,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              className="
                group
                relative
                flex
                min-h-[300px]
                w-full
                min-w-0
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

                sm:min-h-[320px]
                sm:px-7
                sm:py-7

                lg:px-8
                lg:py-8
              "
            >
              {/* Inner purple glow */}

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

              {/* Top purple highlight */}

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

              {/* Content */}

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
                {/* Top row */}

                <div className="flex items-center justify-between gap-4">

                  {/* Category */}

                  <div className="flex items-center gap-3">
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

                    <span
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-purple-300
                        transition-colors
                        duration-300
                        group-hover:text-purple-200
                      "
                    >
                      {job.category}
                    </span>
                  </div>

                  {/* Job type */}

                  <span
                    className="
                      shrink-0
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-white/50
                      transition-colors
                      duration-300
                      group-hover:text-purple-300
                    "
                  >
                    {job.type}
                  </span>
                </div>

                {/* Job information */}

                <div className="mt-9">
                  <h3
                    className="
                      max-w-[520px]
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
                    {job.title}
                  </h3>

                  {/* Mode */}

                  <div className="mt-4 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-white/40
                        transition-colors
                        duration-300
                        group-hover:bg-purple-400
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-medium
                        text-[#94a8bd]
                        transition-colors
                        duration-300
                        group-hover:text-[#c0ccd8]
                      "
                    >
                      {job.mode}
                    </span>
                  </div>
                </div>

                {/* Bottom action */}

                <div className="mt-auto pt-8">
                  <a
                    href="#"
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
                      group-hover:gap-3
                      group-hover:text-purple-300
                      group-hover:[text-shadow:0_0_18px_rgba(168,85,247,0.35)]
                    "
                  >
                    <span>View opportunities</span>

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
            </motion.article>
          ))}
        </div>

        {/* Availability note */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            mt-8
            rounded-[22px]
            border
            border-white/[0.10]
            bg-black
            px-6
            py-5
            text-center
            transition-all
            duration-500
            hover:border-purple-500/[0.35]
            hover:shadow-[0_0_35px_rgba(168,85,247,0.06)]
          "
        >
          <p
            className="
              text-sm
              font-medium
              text-[#94a8bd]
            "
          >
            New opportunities will appear here as RNOTSKY grows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}