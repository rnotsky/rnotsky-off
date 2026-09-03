"use client";

import { motion } from "framer-motion";

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
    <section className="relative px-5 pb-32 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        {/* Section heading */}
        <div className="mb-12">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-purple-300/70
            "
          >
            What we do
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-semibold
              tracking-[-0.03em]
              text-white
              sm:text-4xl
            "
          >
            Technology across disciplines.
          </h2>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
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
                delay: index * 0.05,
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

              {/* Purple glow */}
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
                  bg-purple-600/[0.07]
                  blur-[90px]
                  transition-all
                  duration-500
                  group-hover:bg-purple-500/[0.13]
                "
              />

              {/* Purple glowing dot */}
              <div className="relative flex justify-end">
                <span
                  aria-hidden="true"
                  className="relative h-3.5 w-3.5"
                >
                  <span
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-purple-500/20
                      blur-md
                    "
                  />

                  <span
                    className="
                      absolute
                      inset-[3px]
                      rounded-full
                      bg-purple-400/30
                      animate-pulse
                    "
                  />

                  <span
                    className="
                      absolute
                      inset-[5px]
                      rounded-full
                      bg-purple-300
                    "
                  />
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
                    sm:text-[28px]
                  "
                >
                  {service.title}
                </h3>

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
                        border-white/[0.06]
                        bg-white/[0.025]
                        px-3
                        py-1.5
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-white/25
                        transition-colors
                        duration-300
                        group-hover:border-purple-400/[0.10]
                        group-hover:text-white/35
                      "
                    >
                      {tag}
                    </span>
                  ))}
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