"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    label: "RNOTSKY AI",
    title: "Intelligence for the next generation.",
    description:
      "AI-powered systems designed to understand, assist, automate and solve complex problems.",
  },
  {
    label: "RNOTSKY VISION",
    title: "Making machines see.",
    description:
      "Computer vision technology that enables intelligent systems to understand visual information.",
  },
  {
    label: "RNOTSKY ROBOTICS",
    title: "Intelligence beyond the screen.",
    description:
      "Robotics systems that combine software intelligence, perception and physical interaction.",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

const popUp = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.94,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const popSmall = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

/* =========================================================
   PURPLE GLOW DOT
========================================================= */

function PurpleGlowDot() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      {/* Outer Glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          h-10
          w-10
          rounded-full
          bg-purple-600/20
          blur-xl
          transition-all
          duration-700
          group-hover:h-16
          group-hover:w-16
          group-hover:bg-purple-500/35
        "
      />

      {/* Pulsing Ring */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.08, 0.4],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-7
          w-7
          rounded-full
          border
          border-purple-400/30
        "
      />

      {/* Inner Glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          h-5
          w-5
          rounded-full
          bg-purple-500/20
          blur-md
          transition-all
          duration-500
          group-hover:bg-purple-400/35
        "
      />

      {/* Core */}
      <div
        className="
          relative
          h-2.5
          w-2.5
          rounded-full
          bg-purple-300
          shadow-[0_0_14px_rgba(168,85,247,0.95)]
          transition-all
          duration-500
          group-hover:h-3
          group-hover:w-3
          group-hover:bg-purple-200
          group-hover:shadow-[0_0_28px_rgba(168,85,247,1)]
        "
      />
    </div>
  );
}

/* =========================================================
   PRODUCTS PREVIEW
========================================================= */

export default function ProductsPreview() {
  return (
    <section
      className="
        relative
        overflow-hidden
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
      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            flex
            flex-col
            gap-8

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* =================================================
              HEADER TEXT
          ================================================= */}

          <div className="max-w-3xl">

            {/* LABEL */}

            <motion.div
              variants={fadeUp}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-purple-500/70
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
                Our Products
              </p>
            </motion.div>

            {/* HEADING */}

            <motion.h2
              variants={fadeUp}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                text-3xl
                font-extrabold
                leading-tight
                tracking-[-0.03em]

                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Technology built to

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
                move ideas forward.
              </span>
            </motion.h2>

            {/* DESCRIPTION */}

            <motion.p
              variants={fadeUp}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
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
              Explore the technology we're building across
              artificial intelligence, computer vision and
              robotics.
            </motion.p>
          </div>

          {/* =================================================
              VIEW ALL PRODUCTS
          ================================================= */}

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href="/products"
              className="
                inline-flex
                w-fit
                items-center

                text-sm
                font-semibold
                text-gray-400

                transition-colors
                duration-300

                hover:text-white
              "
            >
              View all products
            </Link>
          </motion.div>
        </motion.div>

        {/* =====================================================
            PRODUCTS
        ====================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.16,
                delayChildren: 0.15,
              },
            },
          }}
          className="
            mt-14
            grid
            grid-cols-1
            gap-6

            md:grid-cols-3

            lg:mt-16
          "
        >
          {products.map((product, index) => (
            <motion.div
              key={product.label}
              variants={popUp}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <Link
                href="/products"
                className="
                  group
                  relative
                  flex
                  h-full
                  min-h-[360px]
                  flex-col
                  overflow-hidden
                  rounded-[2rem]

                  border
                  border-purple-400/[0.13]

                  bg-gradient-to-br
                  from-purple-500/[0.075]
                  via-white/[0.025]
                  to-transparent

                  backdrop-blur-2xl

                  transition-all
                  duration-700

                  hover:-translate-y-2
                  hover:border-purple-400/[0.32]
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]

                  sm:min-h-[380px]
                "
              >
                {/* =================================================
                    TOP GLASS HIGHLIGHT
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0,
                  }}
                  whileInView={{
                    opacity: 0.6,
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.35 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-[8%]
                    right-[8%]
                    top-0
                    h-px
                    origin-center
                    bg-gradient-to-r
                    from-transparent
                    via-purple-300/60
                    to-transparent
                  "
                />

                {/* =================================================
                    CARD PURPLE GLOW
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-20
                    -top-20
                    h-56
                    w-56
                    rounded-full

                    bg-purple-600/[0.07]

                    blur-[90px]

                    transition-all
                    duration-700

                    group-hover:scale-125
                    group-hover:bg-purple-500/[0.16]
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
                    flex-col
                    p-7

                    sm:p-9

                    lg:p-10
                  "
                >
                  {/* =================================================
                      PURPLE DOT
                  ================================================== */}

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    variants={popSmall}
                    transition={{
                      duration: 0.6,
                      delay: 0.25 + index * 0.16,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      relative
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                    "
                  >
                    <PurpleGlowDot />
                  </motion.div>

                  {/* =================================================
                      PRODUCT CONTENT
                  ================================================== */}

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    variants={{
                      hidden: {},

                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.42 + index * 0.16,
                        },
                      },
                    }}
                    className="relative mt-7"
                  >
                    {/* LABEL */}

                    <motion.p
                      variants={fadeUp}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-purple-400
                      "
                    >
                      {product.label}
                    </motion.p>

                    {/* TITLE */}

                    <motion.h3
                      variants={fadeUp}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        mt-3
                        text-2xl
                        font-bold
                        leading-tight
                        tracking-[-0.03em]
                        text-white

                        sm:text-[1.65rem]

                        lg:text-[1.8rem]
                      "
                    >
                      {product.title}
                    </motion.h3>

                    {/* DESCRIPTION */}

                    <motion.p
                      variants={fadeUp}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        mt-4
                        max-w-xl
                        text-sm
                        leading-7
                        text-gray-500

                        transition-colors
                        duration-500

                        group-hover:text-gray-300
                      "
                    >
                      {product.description}
                    </motion.p>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}