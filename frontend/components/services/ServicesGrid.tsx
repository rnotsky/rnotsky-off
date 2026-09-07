"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent systems that learn, reason and automate complex tasks.",
    tags: ["AI", "ML", "Agents"],
  },
  {
    title: "Software Development",
    description:
      "Modern applications, platforms and backend systems built for scale.",
    tags: ["Web", "Desktop", "Backend"],
  },
  {
    title: "Computer Vision",
    description:
      "Systems that allow machines to see, understand and respond to the world.",
    tags: ["Vision", "Detection", "Recognition"],
  },
  {
    title: "Robotics",
    description:
      "Intelligent robotic systems designed for automation and autonomy.",
    tags: ["ROS2", "Robotics", "Automation"],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Reliable infrastructure for deploying and scaling modern technology.",
    tags: ["Cloud", "APIs", "Infrastructure"],
  },
  {
    title: "Cybersecurity",
    description:
      "Secure systems designed to protect applications, identities and data.",
    tags: ["Security", "Privacy", "Identity"],
  },
];

export default function ServicesGrid() {
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
        {/* Section heading */}
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
              What we do
            </p>
          </div>

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
            Technology across
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
              disciplines.
            </span>
          </h2>

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
            From intelligent systems to modern infrastructure, we engineer
            technology across the disciplines shaping what comes next.
          </p>
        </motion.div>

        {/* Services */}
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
          {services.map((service, index) => (
            <motion.article
              key={service.title}
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
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -2,
              }}
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
                {/* Service label */}
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
                    Service {String(index + 1).padStart(2, "0")}
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
                    {service.title}
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
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/[0.09]
                          bg-white/[0.025]
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.12em]
                          text-white/45
                          transition-all
                          duration-300

                          group-hover:border-purple-400/[0.18]
                          group-hover:bg-purple-500/[0.04]
                          group-hover:text-white/60
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom action */}
                <div className="mt-auto pt-8">
                  <button
                    type="button"
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

                      hover:gap-3
                      hover:text-purple-300
                      hover:[text-shadow:0_0_18px_rgba(168,85,247,0.35)]
                    "
                  >
                    <span>Explore service</span>

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
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}