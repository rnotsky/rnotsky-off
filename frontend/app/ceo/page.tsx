"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

/* =========================================================
   PURPLE TEXT
========================================================= */

function PurpleText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="bg-gradient-to-br from-[#eee5ff] via-[#a855f7] to-[#5b21b6] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

/* =========================================================
   GLOW
========================================================= */

function Glow({
  className = "",
  opacity = 0.2,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-[120px] ${className}`}
      style={{
        background: `radial-gradient(circle, rgba(124,58,237,${opacity}) 0%, rgba(91,33,182,${
          opacity * 0.45
        }) 38%, transparent 72%)`,
      }}
    />
  );
}

/* =========================================================
   INSTAGRAM ICON
========================================================= */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="4.1"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="17.5"
        cy="6.7"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   LINKEDIN ICON
========================================================= */

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M7.5 10.2V16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="7.5"
        cy="7.4"
        r="1"
        fill="currentColor"
      />

      <path
        d="M11 16.5V10.2M11 13.1C11 11.5 12 10.2 13.6 10.2C15.2 10.2 16.5 11.3 16.5 13.3V16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   PARTICLES
========================================================= */

const particles = [
  { x: "8%", y: "21%", size: 2, delay: 0 },
  { x: "14%", y: "63%", size: 1, delay: 1.4 },
  { x: "21%", y: "36%", size: 2, delay: 2.2 },
  { x: "27%", y: "78%", size: 1, delay: 0.8 },
  { x: "34%", y: "18%", size: 1, delay: 2.8 },
  { x: "41%", y: "67%", size: 2, delay: 1.1 },
  { x: "48%", y: "13%", size: 1, delay: 3.2 },
  { x: "55%", y: "76%", size: 2, delay: 1.8 },
  { x: "63%", y: "22%", size: 1, delay: 2.4 },
  { x: "71%", y: "61%", size: 2, delay: 0.4 },
  { x: "78%", y: "31%", size: 1, delay: 1.7 },
  { x: "84%", y: "75%", size: 2, delay: 2.9 },
  { x: "91%", y: "44%", size: 1, delay: 0.9 },
];

/* =========================================================
   PAGE
========================================================= */

export default function CEOPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  );

  const portraitScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const logoY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -60]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 0]
  );

  /* =========================================================
     MOUSE PARALLAX
  ========================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#010101] text-white selection:bg-purple-500/30">

      {/* =====================================================
          GLOBAL ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0">

        <div
          className="
            absolute
            left-1/2
            top-[-420px]
            h-[900px]
            w-[1100px]
            -translate-x-1/2
            rounded-full
            blur-[180px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(91,33,182,0.18), transparent 68%)",
          }}
        />

        <div
          className="
            absolute
            -left-[300px]
            top-[35%]
            h-[600px]
            w-[600px]
            rounded-full
            blur-[190px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(76,29,149,0.07), transparent 70%)",
          }}
        />

        <div
          className="
            absolute
            -right-[300px]
            top-[65%]
            h-[600px]
            w-[600px]
            rounded-full
            blur-[190px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(109,40,217,0.08), transparent 70%)",
          }}
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,.75)_100%)]
          "
        />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="
          relative
          z-10
          min-h-[100svh]
          overflow-hidden
        "
      >

        {/* BACKGROUND WORD */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
            overflow-hidden
            select-none
          "
        >
          <span
            className="
              translate-y-[-5vh]
              whitespace-nowrap
              text-[clamp(5rem,22vw,22rem)]
              font-black
              leading-none
              tracking-[-0.12em]
              text-white/[0.014]
            "
          >
            RNOTSKY
          </span>
        </motion.div>

        {/* TOP LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[1px]
            w-[min(850px,80vw)]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-purple-400/70
            to-transparent
            shadow-[0_0_40px_rgba(139,92,246,.6)]
          "
        />

        {/* PARTICLES */}

        <div className="pointer-events-none absolute inset-0">
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="
                absolute
                rounded-full
                bg-purple-300/70
                shadow-[0_0_10px_rgba(168,85,247,.8)]
              "
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                opacity: [0.1, 0.8, 0.15],
                y: [0, -18, 0],
                scale: [0.7, 1.3, 0.7],
              }}
              transition={{
                duration: 4 + particle.delay,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* CENTRAL LIGHT BEAM */}

        <motion.div
          style={{
            x: smoothX,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[5%]
            h-[85%]
            w-[1px]
            -translate-x-1/2
            bg-gradient-to-b
            from-purple-300/0
            via-purple-400/30
            to-transparent
            blur-[1px]
          "
        />

        {/* MASSIVE LOGO */}

        <motion.div
          style={{
            y: logoY,
            x: smoothX,
          }}
          className="
            absolute
            left-1/2
            top-[5vh]
            z-30
            h-[clamp(180px,30vw,430px)]
            w-[clamp(180px,30vw,430px)]
            -translate-x-1/2
          "
        >
          <motion.div
            animate={{
              scale: [0.92, 1.08, 0.92],
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[85%]
              w-[85%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-600/20
              blur-[70px]
            "
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[90%]
              w-[90%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-purple-400/[0.10]
            "
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[74%]
              w-[74%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-purple-300/[0.08]
            "
          />

          <Image
            src="/brand/logo.png"
            alt="RNOTSKY"
            fill
            priority
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 300px, 430px"
            className="
              relative
              z-10
              object-contain
              drop-shadow-[0_0_35px_rgba(139,92,246,.5)]
              drop-shadow-[0_0_100px_rgba(109,40,217,.28)]
            "
          />
        </motion.div>

        {/* PORTRAIT */}

        <motion.div
          style={{
            y: portraitY,
            scale: portraitScale,
            x: useTransform(
              smoothX,
              [-0.5, 0.5],
              [-12, 12]
            ),
          }}
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.5,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            left-1/2
            top-[28vh]
            z-20
            h-[67vh]
            w-[92vw]
            max-w-[620px]
            -translate-x-1/2
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-[45%]
              h-[430px]
              w-[330px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              blur-[100px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,.25), rgba(76,29,149,.08) 48%, transparent 72%)",
            }}
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-[48%]
              h-[85%]
              w-[65%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
              border-purple-400/[0.07]
            "
          />

          <Image
            src="/images/ceo.png"
            alt="Founder of RNOTSKY"
            fill
            priority
            sizes="(max-width: 640px) 92vw, 620px"
            className="
              relative
              z-10
              object-contain
              object-center
              drop-shadow-[0_35px_80px_rgba(0,0,0,.85)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              h-[28%]
              bg-gradient-to-t
              from-[#010101]
              via-[#010101]/50
              to-transparent
            "
          />
        </motion.div>

        {/* LEFT IDENTITY */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          style={{
            y: titleY,
            x: useTransform(
              smoothX,
              [-0.5, 0.5],
              [-5, 5]
            ),
          }}
          transition={{
            duration: 1,
            delay: 0.65,
          }}
          className="
            absolute
            left-6
            top-[48%]
            z-40
            sm:left-[8vw]
            md:top-[43%]
            lg:left-[10vw]
          "
        >
          <div className="relative">
            <p className="mb-4 text-[8px] uppercase tracking-[0.42em] text-purple-400/80 sm:text-[9px]">
              Founder / CEO
            </p>

            <h1
              className="
                text-[3.25rem]
                font-semibold
                leading-[0.82]
                tracking-[-0.075em]
                sm:text-6xl
                md:text-7xl
                lg:text-[6.8rem]
              "
            >
              <span className="block text-white/95">
                Athi
              </span>

              <span className="block">
                <PurpleText>Kesavan</PurpleText>
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-purple-500/70" />

              <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                RNOTSKY
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT MESSAGE */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          style={{
            y: titleY,
            x: useTransform(
              smoothX,
              [-0.5, 0.5],
              [5, -5]
            ),
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="
            absolute
            right-6
            top-[70%]
            z-40
            w-[220px]
            sm:right-[8vw]
            sm:w-[270px]
            md:right-[9vw]
            md:top-[66%]
            lg:right-[10vw]
          "
        >
          <p className="text-[13px] leading-6 text-white/40 sm:text-[15px] sm:leading-7">
            Building intelligent technology for a future
            that doesn&apos;t exist yet.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-5 bg-purple-500/50" />

            <span className="text-[7px] uppercase tracking-[0.32em] text-white/20">
              Artificial Intelligence
            </span>
          </div>
        </motion.div>

        {/* SCROLL */}

        <motion.div
          style={{
            opacity,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            z-50
            -translate-x-1/2
          "
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[7px] uppercase tracking-[0.42em] text-white/20">
              Explore
            </span>

            <motion.div
              animate={{
                height: [20, 36, 20],
                opacity: [0.25, 0.8, 0.25],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-px bg-purple-400/70"
            />
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="relative z-10 flex min-h-[90svh] items-center justify-center px-6 py-32 sm:px-10 lg:px-16">
        <Glow
          className="left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2"
          opacity={0.12}
        />

        <div className="relative mx-auto max-w-7xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-[8px] uppercase tracking-[0.45em] text-purple-400/70"
          >
            The philosophy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="
              text-[3.2rem]
              font-semibold
              leading-[0.9]
              tracking-[-0.075em]
              sm:text-6xl
              md:text-8xl
              lg:text-[9rem]
            "
          >
            <span className="text-white/90">
              Don&apos;t just imagine
            </span>

            <br />

            <PurpleText>the future.</PurpleText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-10 text-sm text-white/25 sm:text-base"
          >
            Build it.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          BIG IDEA
      ===================================================== */}

      <section className="relative z-10 px-6 py-36 sm:px-10 sm:py-48 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9 }}
          >
            <p className="mb-8 text-[8px] uppercase tracking-[0.45em] text-purple-400/70">
              A bigger idea
            </p>

            <h2
              className="
                max-w-6xl
                text-[3.4rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.075em]
                sm:text-6xl
                md:text-8xl
                lg:text-[9.2rem]
              "
            >
              <span className="text-white/90">
                Technology
              </span>

              <br />

              <PurpleText>should feel</PurpleText>

              <br />

              <span className="text-white/90">
                limitless.
              </span>
            </h2>
          </motion.div>

          <div className="mt-28 grid gap-20 md:mt-40 md:grid-cols-2 md:gap-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[8px] uppercase tracking-[0.35em] text-purple-400/60">
                01 / Origin
              </p>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/45 sm:text-xl sm:leading-9">
                RNOTSKY began with curiosity — the desire
                to understand technology deeply enough to
                eventually create something of its own.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-[8px] uppercase tracking-[0.35em] text-purple-400/60">
                02 / Direction
              </p>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/45 sm:text-xl sm:leading-9">
                That curiosity became a direction:
                artificial intelligence, intelligent
                software, computer vision and robotics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION
      ===================================================== */}

      <section className="relative z-10 px-6 py-40 sm:px-10 sm:py-56 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-8 text-[8px] uppercase tracking-[0.45em] text-purple-400/70"
            >
              The vision
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
              className="
                text-[3.5rem]
                font-semibold
                leading-[0.88]
                tracking-[-0.075em]
                sm:text-6xl
                md:text-8xl
                lg:text-[9rem]
              "
            >
              <span className="text-white/90">
                Make intelligence
              </span>

              <br />

              <PurpleText>real.</PurpleText>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mx-auto mt-10 max-w-2xl text-sm leading-7 text-white/28 sm:text-base sm:leading-8"
            >
              Not trapped inside a screen.
              Not limited to one device.
              Intelligence that can understand,
              interact, move and create.
            </motion.p>
          </div>

          <div className="mt-32 grid gap-20 md:grid-cols-3 md:gap-12">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Systems that perceive information and make sense of complex environments.",
              },
              {
                number: "02",
                title: "Create",
                text: "Technology that turns ideas into useful experiences and new possibilities.",
              },
              {
                number: "03",
                title: "Move",
                text: "Intelligence that eventually leaves the screen and enters the physical world.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[8px] tracking-[0.35em] text-purple-400/70">
                    {item.number}
                  </span>

                  <span className="h-px w-8 bg-purple-500/30" />
                </div>

                <h3 className="mt-7 text-3xl font-semibold tracking-[-0.055em]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/28">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ===================================================== */}

      <section className="relative z-10 flex min-h-[90svh] items-center px-6 py-40 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9 }}
          >
            <p className="mb-8 text-[8px] uppercase tracking-[0.45em] text-purple-400/70">
              The mission
            </p>

            <h2
              className="
                text-[3.4rem]
                font-semibold
                leading-[0.88]
                tracking-[-0.08em]
                sm:text-6xl
                md:text-8xl
                lg:text-[9rem]
              "
            >
              <span className="text-white/90">
                Build things
              </span>

              <br />

              <PurpleText>
                worth remembering.
              </PurpleText>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              ml-auto
              mt-20
              max-w-xl
              text-base
              leading-8
              text-white/30
              sm:mt-28
              sm:text-lg
              sm:leading-9
            "
          >
            The ambition is bigger than launching
            products. It is about creating technology
            with a distinct identity — technology that
            makes people stop, look and wonder what
            comes next.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          FUTURE
      ===================================================== */}

      <section className="relative z-10 px-6 py-40 sm:px-10 sm:py-56 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-8 text-[8px] uppercase tracking-[0.45em] text-purple-400/70">
              What comes next
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="
                text-[3.2rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.075em]
                sm:text-6xl
                md:text-8xl
                lg:text-[8.5rem]
              "
            >
              <span className="text-white/90">
                AI.
              </span>{" "}
              <PurpleText>Vision.</PurpleText>{" "}
              <span className="text-white/90">
                Robotics.
              </span>
            </motion.h2>
          </div>

          <div className="mt-32 grid gap-20 md:grid-cols-2 md:gap-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[8px] uppercase tracking-[0.35em] text-white/20">
                The short term
              </p>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                Build the foundation.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/28 sm:text-base">
                Develop products, software and intelligent
                systems that turn the RNOTSKY vision into
                something people can actually experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
            >
              <p className="text-[8px] uppercase tracking-[0.35em] text-white/20">
                The long term
              </p>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                Build the impossible.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/28 sm:text-base">
                Push toward intelligent machines,
                advanced robotics and technology that
                feels like it belongs to tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDER NOTE
      ===================================================== */}

      <section className="relative z-10 flex min-h-[90svh] items-center justify-center px-6 py-40 sm:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-9 text-[8px] uppercase tracking-[0.45em] text-purple-400/70"
          >
            Founder&apos;s note
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              text-[3.1rem]
              font-semibold
              leading-[0.9]
              tracking-[-0.075em]
              sm:text-6xl
              md:text-8xl
              lg:text-[8rem]
            "
          >
            <span className="text-white/85">
              I don&apos;t want to build
            </span>

            <br />

            <PurpleText>
              another company.
            </PurpleText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mx-auto mt-10 max-w-2xl text-sm leading-8 text-white/28 sm:mt-14 sm:text-lg sm:leading-9"
          >
            I want to build something that changes
            how people think about technology — and
            eventually, what they believe technology
            can do.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          CONNECT
      ===================================================== */}

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
            }}
            transition={{
              duration: 0.9,
            }}
          >

            <p className="mb-8 text-[8px] uppercase tracking-[0.45em] text-purple-400/70">
              Connect
            </p>

            <h2
              className="
                text-[3.2rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.075em]
                sm:text-6xl
                md:text-8xl
                lg:text-[7.5rem]
              "
            >
              <span className="text-white/90">
                Follow the
              </span>

              <br />

              <PurpleText>
                journey.
              </PurpleText>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/25 sm:text-base">
              Follow the work, ideas and journey
              behind RNOTSKY.
            </p>

            {/* =================================================
                PREMIUM SOCIAL BUTTONS
            ================================================= */}

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

              {/* -------------------------------------------------
                  INSTAGRAM
              ------------------------------------------------- */}

              <motion.a
                href="https://www.instagram.com/athik7.dev/"
                target="_blank"
                rel="noopener noreferrer"
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
                }}
                whileHover={{
                  y: -7,
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  w-full
                  max-w-[310px]
                  overflow-hidden
                  rounded-[22px]
                  p-[1px]
                  sm:w-[285px]
                "
              >

                {/* Animated gradient border */}

                <motion.span
                  className="
                    absolute
                    inset-[-100%]
                    bg-[conic-gradient(from_0deg,transparent_0deg,#a855f7_90deg,transparent_180deg,#7c3aed_270deg,transparent_360deg)]
                  "
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Inner button */}

                <span
                  className="
                    relative
                    flex
                    items-center
                    gap-4
                    overflow-hidden
                    rounded-[21px]
                    bg-[#09070d]
                    px-5
                    py-4
                    text-left
                    transition-all
                    duration-500
                    group-hover:bg-[#100b18]
                  "
                >

                  {/* Hover glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -left-20
                      top-1/2
                      h-32
                      w-32
                      -translate-y-1/2
                      rounded-full
                      bg-purple-600/20
                      blur-3xl
                      transition-all
                      duration-700
                      group-hover:left-10
                    "
                  />

                  {/* Icon */}

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-[14px]
                      border
                      border-purple-400/15
                      bg-gradient-to-br
                      from-purple-500/15
                      to-fuchsia-500/[0.04]
                      text-purple-300
                      shadow-[0_0_25px_rgba(168,85,247,.08)]
                      transition-all
                      duration-500
                      group-hover:border-purple-300/35
                      group-hover:bg-purple-500/20
                      group-hover:text-white
                      group-hover:shadow-[0_0_30px_rgba(168,85,247,.2)]
                    "
                  >
                    <InstagramIcon />
                  </span>

                  {/* Text */}

                  <span className="relative z-10 min-w-0 flex-1">
                    <span className="block text-[9px] uppercase tracking-[0.28em] text-purple-400/55 transition-colors duration-300 group-hover:text-purple-300/80">
                      Instagram
                    </span>

                    <span className="mt-1 block truncate text-[14px] font-medium tracking-[-0.01em] text-white/75 transition-colors duration-300 group-hover:text-white">
                      @athik7.dev
                    </span>
                  </span>

                  {/* Arrow */}

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.06]
                      bg-white/[0.025]
                      text-white/25
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:border-purple-400/20
                      group-hover:bg-purple-500/10
                      group-hover:text-purple-300
                    "
                  >
                    <span className="text-sm">
                      ↗
                    </span>
                  </span>

                </span>
              </motion.a>

              {/* -------------------------------------------------
                  LINKEDIN
              ------------------------------------------------- */}

              <motion.a
                href="https://www.linkedin.com/in/athi-kesavan-dev/"
                target="_blank"
                rel="noopener noreferrer"
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
                whileHover={{
                  y: -7,
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  w-full
                  max-w-[310px]
                  overflow-hidden
                  rounded-[22px]
                  p-[1px]
                  sm:w-[285px]
                "
              >

                {/* Animated gradient border */}

                <motion.span
                  className="
                    absolute
                    inset-[-100%]
                    bg-[conic-gradient(from_180deg,transparent_0deg,#8b5cf6_90deg,transparent_180deg,#c084fc_270deg,transparent_360deg)]
                  "
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Inner button */}

                <span
                  className="
                    relative
                    flex
                    items-center
                    gap-4
                    overflow-hidden
                    rounded-[21px]
                    bg-[#09070d]
                    px-5
                    py-4
                    text-left
                    transition-all
                    duration-500
                    group-hover:bg-[#100b18]
                  "
                >

                  {/* Hover glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -left-20
                      top-1/2
                      h-32
                      w-32
                      -translate-y-1/2
                      rounded-full
                      bg-violet-600/20
                      blur-3xl
                      transition-all
                      duration-700
                      group-hover:left-10
                    "
                  />

                  {/* Icon */}

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-[14px]
                      border
                      border-purple-400/15
                      bg-gradient-to-br
                      from-purple-500/15
                      to-violet-500/[0.04]
                      text-purple-300
                      shadow-[0_0_25px_rgba(139,92,246,.08)]
                      transition-all
                      duration-500
                      group-hover:border-purple-300/35
                      group-hover:bg-purple-500/20
                      group-hover:text-white
                      group-hover:shadow-[0_0_30px_rgba(139,92,246,.2)]
                    "
                  >
                    <LinkedInIcon />
                  </span>

                  {/* Text */}

                  <span className="relative z-10 min-w-0 flex-1">
                    <span className="block text-[9px] uppercase tracking-[0.28em] text-purple-400/55 transition-colors duration-300 group-hover:text-purple-300/80">
                      LinkedIn
                    </span>

                    <span className="mt-1 block truncate text-[14px] font-medium tracking-[-0.01em] text-white/75 transition-colors duration-300 group-hover:text-white">
                      Athi Kesavan
                    </span>
                  </span>

                  {/* Arrow */}

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.06]
                      bg-white/[0.025]
                      text-white/25
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:border-purple-400/20
                      group-hover:bg-purple-500/10
                      group-hover:text-purple-300
                    "
                  >
                    <span className="text-sm">
                      ↗
                    </span>
                  </span>

                </span>
              </motion.a>

            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-6 py-40 sm:px-10">

        <Glow
          className="left-1/2 top-1/2 h-[600px] w-[850px] -translate-x-1/2 -translate-y-1/2"
          opacity={0.18}
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-purple-400/[0.05]
          "
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-purple-400/[0.06]
          "
        />

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
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-10 text-center"
        >
          <p className="mb-9 text-[8px] uppercase tracking-[0.45em] text-purple-400/70">
            This is only the beginning
          </p>

          <h2
            className="
              text-[4.2rem]
              font-semibold
              leading-[0.82]
              tracking-[-0.085em]
              sm:text-7xl
              md:text-8xl
              lg:text-[10rem]
            "
          >
            <span className="block">
              Build.
            </span>

            <span className="block">
              <PurpleText>
                Imagine.
              </PurpleText>
            </span>

            <span className="block">
              Repeat.
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-lg text-sm leading-7 text-white/25 sm:mt-14 sm:text-base">
            The journey of RNOTSKY has only just started.
          </p>

          <motion.a
            href="https://rnotsky.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-10
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-white
              px-7
              py-4
              text-sm
              font-semibold
              text-black
              shadow-[0_20px_70px_rgba(139,92,246,.18)]
              transition-colors
              duration-300
              hover:bg-purple-100
              sm:mt-12
            "
          >
            Explore RNOTSKY

            <span className="text-base">
              ↗
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative z-10 px-6 pb-10 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/[0.04] pt-8 sm:flex-row">

          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt="RNOTSKY"
              width={36}
              height={36}
              className="object-contain opacity-70"
            />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
              RNOTSKY
            </span>
          </div>

          <p className="text-[8px] uppercase tracking-[0.25em] text-white/15">
            Building tomorrow&apos;s technology.
          </p>

          <span className="text-[8px] tracking-[0.2em] text-white/15">
            © 2026
          </span>

        </div>
      </footer>
    </main>
  );
}