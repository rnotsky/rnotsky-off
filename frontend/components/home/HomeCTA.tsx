"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import RButton from "@/components/common/RButton";

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
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function HomeCTA() {
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
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1100px]
        "
      >
        {/* ===================================================
            FLOATING SUPPORT GLASS PANEL
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={popUp}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          animate={{
            y: [0, -7, 0],
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]

            border
            border-purple-400/[0.13]

            bg-gradient-to-br
            from-purple-500/[0.055]
            via-white/[0.025]
            to-transparent

            px-6
            py-14

            text-center

            backdrop-blur-2xl

            transition-all
            duration-700

            hover:border-purple-400/[0.25]
            hover:shadow-[0_30px_100px_rgba(0,0,0,0.45)]

            sm:px-10
            sm:py-16

            md:px-16
            md:py-20

            lg:rounded-[2.5rem]
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
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[10%]
              right-[10%]
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
              SUBTLE PANEL GLOW
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.2,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.8, 1, 0.8],
            }}
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-120px]

              h-[260px]
              w-[560px]

              -translate-x-1/2

              rounded-full

              bg-purple-600/[0.045]

              blur-[120px]
            "
          />

          {/* =================================================
              CONTENT
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.25,
                },
              },
            }}
            className="
              relative
              z-10
            "
          >
            {/* =================================================
                LABEL
            ================================================== */}

            <motion.div
              variants={fadeUp}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                items-center
                justify-center
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
                Customer Support
              </p>

              <span
                className="
                  h-px
                  w-8
                  bg-purple-500/70
                "
              />
            </motion.div>

            {/* =================================================
                HEADING
            ================================================== */}

            <motion.h2
              variants={fadeUp}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                mt-6
                max-w-3xl

                text-4xl
                font-extrabold
                leading-[1.02]
                tracking-[-0.045em]

                sm:text-5xl

                md:text-6xl

                lg:text-7xl
              "
            >
              We're here to

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
                help.
              </span>
            </motion.h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              variants={fadeUp}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                mt-7
                max-w-2xl

                text-base
                leading-7
                text-gray-500

                sm:text-lg
                sm:leading-8
              "
            >
              Have a question, need assistance, or want to learn more about
              RNOTSKY? Our team is here to help you find the right direction.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <motion.div
              variants={popSmall}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-10

                flex
                flex-col
                items-center
                justify-center
                gap-4

                sm:flex-row
              "
            >
              {/* =================================================
                  CONTACT US
              ================================================== */}

              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <RButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                >
                  Contact Us
                </RButton>
              </motion.div>

              {/* =================================================
                  SUPPORT
              ================================================== */}

              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <RButton
                  href="/support"
                  variant="secondary"
                  size="lg"
                >
                  Support
                </RButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}