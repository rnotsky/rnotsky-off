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
    <section
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
      {/* Top atmosphere */}
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

      {/* Bottom atmosphere */}
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
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Section label */}
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
              "
            />

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
              Our process
            </p>
          </div>

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

          {/* Description */}
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
            A focused process designed to transform ambitious ideas into
            practical, scalable and intelligent solutions.
          </p>
        </motion.div>

        {/* Process cards */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6

            sm:grid-cols-2

            lg:mt-16
            lg:grid-cols-4
          "
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
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
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -2,
              }}
              className="
                group
                relative
                flex
                min-h-[300px]
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

                sm:min-h-[320px]
                sm:px-7
                sm:py-7

                lg:min-h-[340px]
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

              {/* Top hover highlight */}
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

              <div className="relative z-10 flex h-full flex-1 flex-col">
                {/* Step label */}
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
                      text-purple-400
                      transition-colors
                      duration-300
                      group-hover:text-purple-300
                    "
                  >
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3
                    className="
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
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-[14px]
                      leading-[1.75]
                      text-[#8296ad]
                      transition-colors
                      duration-300
                      group-hover:text-[#a9b8c9]
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {/* Step number */}
                <div className="mt-auto pt-8">
                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/25
                      transition-colors
                      duration-300
                      group-hover:text-purple-400/60
                    "
                  >
                    0{index + 1} / 04
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}