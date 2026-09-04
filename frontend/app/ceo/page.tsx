"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Glow({
  size = "large",
  opacity = 0.2,
}: {
  size?: "small" | "medium" | "large";
  opacity?: number;
}) {
  const sizes = {
    small: "h-[180px] w-[280px]",
    medium: "h-[280px] w-[450px]",
    large: "h-[380px] w-[650px]",
  };

  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] ${sizes[size]}`}
      style={{
        background: `radial-gradient(circle, rgba(109,40,217,${opacity}) 0%, rgba(76,29,149,${
          opacity * 0.45
        }) 38%, transparent 72%)`,
      }}
    />
  );
}

function PurpleText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-br from-purple-100 via-purple-500 to-purple-950 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export default function CEOPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.045]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -55]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020202] text-white selection:bg-purple-500/30">
      {/* GLOBAL ATMOSPHERE */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-300px] h-[700px] w-[900px] -translate-x-1/2 rounded-full blur-[190px]"
          style={{
            background:
              "radial-gradient(circle, rgba(76,29,149,0.16), transparent 70%)",
          }}
        />

        <div
          className="absolute left-[-250px] top-[42%] h-[450px] w-[450px] rounded-full blur-[180px]"
          style={{
            background:
              "radial-gradient(circle, rgba(76,29,149,0.065), transparent 70%)",
          }}
        />

        <div
          className="absolute right-[-250px] top-[68%] h-[450px] w-[450px] rounded-full blur-[180px]"
          style={{
            background:
              "radial-gradient(circle, rgba(109,40,217,0.065), transparent 70%)",
          }}
        />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        ref={heroRef}
        className="relative z-10 flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-20 sm:px-8 lg:px-12"
      >
        {/* RESPONSIVE BACKGROUND WORD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none"
        >
          <span
            className="
              block
              w-full
              px-2
              text-center
              text-[clamp(3.2rem,15vw,14rem)]
              font-black
              leading-none
              tracking-[-0.09em]
              text-white/[0.018]
              whitespace-nowrap
            "
          >
            RNOTSKY
          </span>
        </motion.div>

        {/* MAIN HERO GLOW */}
        <Glow size="large" opacity={0.24} />

        {/* PORTRAIT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 60,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          style={{
            y: portraitY,
            scale: portraitScale,
          }}
          className="
            absolute
            left-1/2
            top-[53%]
            z-20
            h-[58vh]
            w-[92vw]
            max-w-[500px]
            -translate-x-1/2
            -translate-y-1/2

            sm:h-[68vh]
            sm:max-w-[570px]

            md:h-[76vh]
            md:max-w-[610px]

            lg:h-[82vh]
            lg:max-w-[620px]
          "
        >
          {/* PORTRAIT ATMOSPHERIC GLOW */}
          <div
            className="absolute left-1/2 top-1/2 h-[360px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[105px] sm:h-[450px] sm:w-[380px]"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.28), rgba(76,29,149,0.10) 45%, transparent 72%)",
            }}
          />

          <Image
            src="/images/ceo.png"
            alt="Founder of RNOTSKY"
            fill
            priority
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 65vw, 620px"
            className="relative z-10 object-contain object-center"
          />
        </motion.div>

        {/* NAME */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
          style={{
            y: titleY,
          }}
          className="
            absolute
            left-5
            top-[16%]
            z-30

            sm:left-[8%]
            sm:top-[19%]

            md:left-[8%]

            lg:left-[10%]
          "
        >
          <div className="relative">
            <Glow size="medium" opacity={0.18} />

            <p className="mb-4 text-[9px] uppercase tracking-[0.38em] text-purple-400/80">
              Founder / CEO
            </p>

            <h1
              className="
                text-[3.25rem]
                font-semibold
                leading-[0.84]
                tracking-[-0.075em]

                sm:text-6xl
                md:text-7xl
                lg:text-[7rem]
              "
            >
              <span className="block">Athi</span>

              <span className="block">
                <PurpleText>Kesavan</PurpleText>
              </span>
            </h1>
          </div>
        </motion.div>

        {/* HERO DESCRIPTION */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.5,
          }}
          style={{
            y: titleY,
          }}
          className="
            absolute
            right-5
            top-[69%]
            z-30
            w-[215px]

            sm:right-[8%]
            sm:w-[280px]

            md:right-[9%]
            md:top-[65%]

            lg:right-[10%]
          "
        >
          <div className="relative">
            <Glow size="small" opacity={0.13} />

            <p className="text-[13px] leading-6 text-white/40 sm:text-base sm:leading-7">
              Building intelligent technology for a future that doesn&apos;t
              exist yet.
            </p>

            <p className="mt-5 text-[9px] uppercase tracking-[0.32em] text-white/20">
              RNOTSKY / EST. NOW
            </p>
          </div>
        </motion.div>

        {/* SCROLL TEXT */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="absolute bottom-7 left-1/2 z-40 -translate-x-1/2"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/20">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <section className="relative z-10 flex min-h-[85svh] items-center justify-center px-6 py-32 sm:px-10 lg:px-16">
        <div className="relative mx-auto max-w-6xl text-center">
          <Glow size="large" opacity={0.16} />

          <motion.p
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
            }}
            className="mb-7 text-[9px] uppercase tracking-[0.42em] text-purple-400/70"
          >
            The philosophy
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
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
              duration: 0.9,
            }}
            className="
              text-[2.9rem]
              font-semibold
              leading-[0.93]
              tracking-[-0.065em]

              sm:text-5xl
              md:text-7xl
              lg:text-[7.7rem]
            "
          >
            <span className="text-white/90">Don&apos;t just imagine</span>

            <br />

            <PurpleText>the future.</PurpleText>
          </motion.h2>

          <motion.p
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
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-9 text-sm text-white/30 sm:text-base"
          >
            Build it.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          BIGGER IDEA
      ========================================================= */}

      <section className="relative z-10 px-6 py-36 sm:px-10 sm:py-48 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative"
          >
            <Glow size="large" opacity={0.15} />

            <p className="mb-8 text-[9px] uppercase tracking-[0.4em] text-purple-400/70">
              A bigger idea
            </p>

            <h2
              className="
                max-w-6xl
                text-[3.15rem]
                font-semibold
                leading-[0.91]
                tracking-[-0.07em]

                sm:text-5xl
                md:text-7xl
                lg:text-[8.5rem]
              "
            >
              <span className="text-white/90">Technology</span>

              <br />

              <PurpleText>should feel</PurpleText>

              <br />

              <span className="text-white/90">limitless.</span>
            </h2>
          </motion.div>

          <div className="mt-24 grid gap-16 md:mt-32 md:grid-cols-2 md:gap-24">
            <motion.div
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
                01 / Origin
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/50 sm:text-xl sm:leading-9">
                RNOTSKY started with curiosity — the desire to understand how
                technology works and eventually build something of my own.
              </p>
            </motion.div>

            <motion.div
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
              }}
            >
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
                02 / Direction
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/50 sm:text-xl sm:leading-9">
                That curiosity became a direction: artificial intelligence,
                intelligent software, computer vision and robotics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISION
      ========================================================= */}

      <section className="relative z-10 px-6 py-36 sm:px-10 sm:py-52 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 45,
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
              duration: 0.9,
            }}
            className="relative text-center"
          >
            <Glow size="large" opacity={0.18} />

            <p className="mb-8 text-[9px] uppercase tracking-[0.4em] text-purple-400/70">
              The vision
            </p>

            <h2
              className="
                text-[3.2rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.07em]

                sm:text-5xl
                md:text-7xl
                lg:text-[8rem]
              "
            >
              <span className="text-white/90">Make intelligence</span>

              <br />

              <PurpleText>real.</PurpleText>
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-sm leading-7 text-white/30 sm:text-base sm:leading-8">
              Not trapped inside a screen. Not limited to one device.
              Intelligence that can understand, interact, move and create.
            </p>
          </motion.div>

          <div className="mt-28 grid gap-20 sm:mt-36 md:grid-cols-3 md:gap-14">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Systems that can perceive information and make sense of complex environments.",
              },
              {
                number: "02",
                title: "Create",
                text: "Technology that transforms ideas into useful experiences and possibilities.",
              },
              {
                number: "03",
                title: "Move",
                text: "Intelligence that eventually leaves the screen and enters the physical world.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.1,
                }}
                className="relative"
              >
                <Glow size="small" opacity={0.09} />

                <p className="text-[9px] tracking-[0.35em] text-purple-500/60">
                  {item.number}
                </p>

                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-white">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/30">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION
      ========================================================= */}

      <section className="relative z-10 flex min-h-[90svh] items-center px-6 py-40 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative"
          >
            <Glow size="large" opacity={0.18} />

            <p className="mb-8 text-[9px] uppercase tracking-[0.4em] text-purple-400/70">
              The mission
            </p>

            <h2
              className="
                text-[3.3rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.075em]

                sm:text-6xl
                md:text-8xl
                lg:text-[9rem]
              "
            >
              <span className="text-white/90">Build things</span>

              <br />

              <PurpleText>worth remembering.</PurpleText>
            </h2>
          </motion.div>

          <motion.p
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
              duration: 0.8,
            }}
            className="ml-auto mt-20 max-w-xl text-base leading-8 text-white/35 sm:mt-28 sm:text-lg sm:leading-9"
          >
            The ambition is bigger than launching products. It is about
            creating technology with a distinct identity — technology that
            makes people stop, look and wonder what comes next.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          FUTURE
      ========================================================= */}

      <section className="relative z-10 px-6 py-36 sm:px-10 sm:py-52 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 45,
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
              duration: 0.9,
            }}
            className="relative text-center"
          >
            <Glow size="large" opacity={0.16} />

            <p className="mb-8 text-[9px] uppercase tracking-[0.4em] text-purple-400/70">
              What comes next
            </p>

            <h2
              className="
                text-[3.15rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.07em]

                sm:text-6xl
                md:text-8xl
                lg:text-[9rem]
              "
            >
              <span className="text-white/90">AI.</span>{" "}
              <PurpleText>Vision.</PurpleText>{" "}
              <span className="text-white/90">Robotics.</span>
            </h2>
          </motion.div>

          <div className="mt-28 grid gap-20 sm:mt-36 md:grid-cols-2 md:gap-28">
            <motion.div
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >
              <Glow size="small" opacity={0.09} />

              <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
                The short term
              </p>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Build the foundation.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/30 sm:text-base">
                Develop products, software and intelligent systems that turn
                the RNOTSKY vision into something people can experience.
              </p>
            </motion.div>

            <motion.div
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
              }}
              className="relative"
            >
              <Glow size="small" opacity={0.09} />

              <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
                The long term
              </p>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Build the impossible.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/30 sm:text-base">
                Push toward intelligent machines, advanced robotics and
                technology that feels like it belongs to tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUNDER NOTE
      ========================================================= */}

      <section className="relative z-10 flex min-h-[90svh] items-center justify-center px-6 py-40 sm:px-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
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
            duration: 0.9,
          }}
          className="relative max-w-6xl text-center"
        >
          <Glow size="large" opacity={0.2} />

          <p className="mb-9 text-[9px] uppercase tracking-[0.4em] text-purple-400/70">
            Founder&apos;s note
          </p>

          <h2
            className="
              text-[3rem]
              font-semibold
              leading-[0.92]
              tracking-[-0.07em]

              sm:text-5xl
              md:text-7xl
              lg:text-[7.5rem]
            "
          >
            <span className="text-white/85">
              I don&apos;t want to build
            </span>

            <br />

            <PurpleText>another company.</PurpleText>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-sm leading-8 text-white/30 sm:mt-14 sm:text-lg sm:leading-9">
            I want to build something that changes how people think about
            technology — and eventually, what they believe technology can do.
          </p>
        </motion.div>
      </section>

      {/* =========================================================
          SOCIAL / CONNECT
      ========================================================= */}

      <section className="relative z-10 px-6 py-36 sm:px-10 sm:py-48 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
              duration: 0.9,
            }}
            className="relative"
          >
            <Glow size="large" opacity={0.17} />

            <p className="mb-8 text-[9px] uppercase tracking-[0.42em] text-purple-400/70">
              Connect
            </p>

            <h2
              className="
                text-[3rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.07em]

                sm:text-5xl
                md:text-7xl
                lg:text-[7rem]
              "
            >
              <span className="text-white/90">Follow the</span>

              <br />

              <PurpleText>journey.</PurpleText>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/30 sm:text-base sm:leading-8">
              Follow the work, ideas and journey behind RNOTSKY.
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
              {/* INSTAGRAM */}
              <motion.a
                href="https://www.instagram.com/athik7.dev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  w-full
                  max-w-[300px]
                  rounded-full
                  bg-white/[0.045]
                  px-8
                  py-4
                  text-sm
                  text-white/65
                  backdrop-blur-xl
                  transition-colors
                  duration-500
                  hover:bg-purple-500/[0.10]
                  hover:text-white

                  sm:w-auto
                  sm:min-w-[250px]
                "
              >
                <span className="block">Instagram</span>

                <span className="mt-1 block text-[11px] text-purple-400/70">
                  @athik7.dev
                </span>
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                href="https://www.linkedin.com/in/athi-kesavan-dev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  w-full
                  max-w-[300px]
                  rounded-full
                  bg-white/[0.045]
                  px-8
                  py-4
                  text-sm
                  text-white/65
                  backdrop-blur-xl
                  transition-colors
                  duration-500
                  hover:bg-purple-500/[0.10]
                  hover:text-white

                  sm:w-auto
                  sm:min-w-[250px]
                "
              >
                <span className="block">LinkedIn</span>

                <span className="mt-1 block text-[11px] text-purple-400/70">
                  Athi Kesavan
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL
      ========================================================= */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-40 sm:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 1,
          }}
          className="relative text-center"
        >
          <Glow size="large" opacity={0.23} />

          <p className="mb-9 text-[9px] uppercase tracking-[0.42em] text-purple-400/70">
            This is only the beginning
          </p>

          <h2
            className="
              text-[4.2rem]
              font-semibold
              leading-[0.84]
              tracking-[-0.08em]

              sm:text-7xl
              md:text-8xl
              lg:text-[10rem]
            "
          >
            <span className="block text-white">Build.</span>

            <span className="block">
              <PurpleText>Imagine.</PurpleText>
            </span>

            <span className="block text-white">Repeat.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-lg text-sm leading-7 text-white/25 sm:mt-14 sm:text-base">
            The journey of RNOTSKY has only just started.
          </p>

          <Link
            href="/"
            className="
              mt-10
              inline-flex
              rounded-full
              bg-white
              px-8
              py-4
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-purple-100

              sm:mt-12
            "
          >
            Enter RNOTSKY
          </Link>
        </motion.div>
      </section>
    </main>
  );
}