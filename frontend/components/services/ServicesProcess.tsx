"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    description:
      "We understand your idea, goals and technical requirements before anything is built.",
  },
  {
    title: "Design",
    description:
      "We create the architecture, user experience and technical direction for the solution.",
  },
  {
    title: "Build",
    description:
      "We develop, test and refine the technology into a reliable working product.",
  },
  {
    title: "Deploy",
    description:
      "We launch the solution and prepare it for real-world use, scaling and future improvements.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="relative overflow-hidden bg-black px-5 pb-32 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-[1500px]">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
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
              Our process
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
            From idea to
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
              real technology.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-gray-500
              sm:text-base
              sm:leading-8
            "
          >
            A focused process designed to transform ambitious ideas into
            practical, scalable and intelligent solutions.
          </p>
        </div>

        {/* Process cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
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
                duration: 0.7,
                delay: index * 0.08,
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
                border-white/[0.07]
                bg-white/[0.02]
                p-7
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-purple-400/[0.18]
                hover:bg-white/[0.035]
                sm:p-8
              "
            >
              {/* Card purple glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[-60px]
                  top-[-60px]
                  h-40
                  w-40
                  rounded-full
                  bg-purple-600/[0.06]
                  blur-[80px]
                  transition-all
                  duration-500
                  group-hover:bg-purple-500/[0.12]
                "
              />

              {/* Purple glowing dot */}
              <div className="relative flex justify-end">
                <span
                  aria-hidden="true"
                  className="relative h-3.5 w-3.5"
                >
                  <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />
                  <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />
                  <span className="absolute inset-[5px] rounded-full bg-purple-300" />
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-12">
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
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-gray-500
                    transition-colors
                    duration-300
                    group-hover:text-gray-400
                  "
                >
                  {step.description}
                </p>
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