"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const interests = [
  "AI & Machine Learning",
  "Software Development",
  "Computer Vision",
  "Robotics",
  "Partnership",
  "General Inquiry",
];

const workAreas = [
  "Artificial Intelligence",
  "Software",
  "Computer Vision",
  "Robotics",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Frontend only for now.
    // Connect this form to your backend/email service later.
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* =========================================================
          HERO
          ONLY PURPLE ATMOSPHERE ON THE PAGE
      ========================================================= */}
      <section
        className="
          relative
          overflow-hidden
          bg-black
          px-5
          pb-20
          pt-32
          sm:px-8
          sm:pb-24
          sm:pt-36
          lg:px-10
          lg:pt-40
        "
      >
        {/* ONLY TOP PURPLE GLOW */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-300px]
            h-[650px]
            w-[1050px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.15]
            blur-[180px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1180px]">

          {/* Hero label */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="
              mb-7
              inline-flex
              items-center
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/[0.06]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-purple-300
              "
            >
              Contact RNOTSKY
            </span>
          </motion.div>

          {/* Hero heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.05,
              ease,
            }}
            className="
              max-w-[1050px]
              text-[clamp(3.2rem,8vw,7rem)]
              font-extrabold
              leading-[0.86]
              tracking-[-0.07em]
            "
          >
            HAVE AN IDEA?

            <span className="block text-white">
              LET&apos;S
            </span>

            <span
              className="
                block
                bg-gradient-to-r
                from-purple-300
                via-violet-400
                to-fuchsia-400
                bg-clip-text
                pb-2
                text-transparent
                drop-shadow-[0_0_35px_rgba(168,85,247,0.18)]
              "
            >
              BUILD IT.
            </span>
          </motion.h1>

          {/* Hero description */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease,
            }}
            className="mt-9 max-w-[700px]"
          >
            <p
              className="
                text-sm
                leading-7
                text-white/60
                sm:text-[15px]
                sm:leading-8
              "
            >
              Tell us what you&apos;re building, what you&apos;re trying to
              solve, or where you want to take an idea. Let&apos;s explore
              what&apos;s possible together.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          CONTACT AREA
          NO SECTION LINES
      ========================================================= */}
      <section
        className="
          bg-black
          px-5
          pb-24
          sm:px-8
          sm:pb-28
          lg:px-10
        "
      >
        <div className="mx-auto max-w-[1180px]">

          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">

            {/* =====================================================
                INFORMATION CARD
            ===================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.75,
                ease,
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-white/[0.018]
                p-7
                shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                backdrop-blur-2xl
                sm:p-9
              "
            >
              <div className="relative">

                {/* Label */}
                <div className="flex items-center gap-3">

                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-purple-400
                      shadow-[0_0_12px_rgba(168,85,247,0.9)]
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-purple-300
                    "
                  >
                    Let&apos;s connect
                  </span>

                </div>

                {/* Heading */}
                <h2
                  className="
                    mt-8
                    text-3xl
                    font-semibold
                    leading-[1.02]
                    tracking-[-0.05em]
                    sm:text-4xl
                  "
                >
                  Something

                  <span className="block text-purple-300">
                    worth building?
                  </span>
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-white/50
                  "
                >
                  We&apos;re interested in ambitious ideas, meaningful
                  collaborations and technology that pushes things forward.
                </p>

                {/* Areas */}
                <div className="mt-10">

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-purple-300/80
                    "
                  >
                    What we work on
                  </p>

                  <div className="mt-5 space-y-3">

                    {workAreas.map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          text-white/60
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            h-1
                            w-1
                            rounded-full
                            bg-purple-400
                            shadow-[0_0_7px_rgba(168,85,247,0.8)]
                          "
                        />

                        {item}
                      </div>
                    ))}

                  </div>

                </div>

                {/* Email */}
                <div className="mt-10">

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-purple-300/80
                    "
                  >
                    General inquiries
                  </p>

                  <a
                    href="mailto:rnotsky.official@gmail.com"
                    className="
                      mt-3
                      inline-block
                      text-sm
                      font-medium
                      text-white
                      transition-colors
                      duration-300
                      hover:text-purple-300
                    "
                  >
                    rnotsky.official@gmail.com
                  </a>

                </div>

              </div>
            </motion.div>

            {/* =====================================================
                CONTACT FORM
            ===================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.75,
                delay: 0.05,
                ease,
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-white/[0.022]
                p-6
                shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                backdrop-blur-3xl
                sm:p-9
                lg:p-10
              "
            >

              {submitted ? (

                /* =================================================
                   SUCCESS STATE
                ================================================= */
                <div
                  className="
                    relative
                    flex
                    min-h-[560px]
                    flex-col
                    items-center
                    justify-center
                    px-4
                    text-center
                  "
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-purple-400/25
                      bg-purple-500/[0.06]
                      text-2xl
                      text-purple-300
                      shadow-[0_0_35px_rgba(168,85,247,0.12)]
                    "
                  >
                    ✓
                  </div>

                  <h2
                    className="
                      mt-8
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    Message received.
                  </h2>

                  <p
                    className="
                      mt-4
                      max-w-[480px]
                      text-sm
                      leading-7
                      text-white/45
                    "
                  >
                    Thanks for reaching out to RNOTSKY. Your message has been
                    received by this form and is ready to be connected to our
                    communication system.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="
                      mt-8
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      px-5
                      py-2.5
                      text-xs
                      font-semibold
                      text-white/60
                      transition-all
                      duration-300
                      hover:border-purple-400/30
                      hover:bg-purple-500/[0.05]
                      hover:text-purple-300
                    "
                  >
                    Send another message
                  </button>

                </div>

              ) : (

                /* =================================================
                   FORM
                ================================================= */
                <form
                  onSubmit={handleSubmit}
                  className="relative space-y-6"
                >

                  {/* Form title */}
                  <div className="mb-8">

                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.3em]
                        text-purple-300
                      "
                    >
                      Start a conversation
                    </p>

                    <h2
                      className="
                        mt-3
                        text-2xl
                        font-semibold
                        tracking-[-0.04em]
                        text-white
                        sm:text-3xl
                      "
                    >
                      Tell us about it.
                    </h2>

                  </div>

                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="name"
                        className="
                          mb-2.5
                          block
                          text-[11px]
                          font-medium
                          text-white/55
                        "
                      >
                        Your name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className="
                          h-12
                          w-full
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-black
                          px-4
                          text-sm
                          text-white
                          outline-none
                          placeholder:text-white/20
                          transition-all
                          duration-300
                          focus:border-purple-400/40
                          focus:bg-white/[0.015]
                          focus:shadow-[0_0_25px_rgba(168,85,247,0.05)]
                        "
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="email"
                        className="
                          mb-2.5
                          block
                          text-[11px]
                          font-medium
                          text-white/55
                        "
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="
                          h-12
                          w-full
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-black
                          px-4
                          text-sm
                          text-white
                          outline-none
                          placeholder:text-white/20
                          transition-all
                          duration-300
                          focus:border-purple-400/40
                          focus:bg-white/[0.015]
                          focus:shadow-[0_0_25px_rgba(168,85,247,0.05)]
                        "
                      />

                    </div>

                  </div>

                  {/* Interest */}
                  <div>

                    <label
                      htmlFor="interest"
                      className="
                        mb-2.5
                        block
                        text-[11px]
                        font-medium
                        text-white/55
                      "
                    >
                      What are you interested in?
                    </label>

                    <div className="relative">

                      <select
                        id="interest"
                        name="interest"
                        required
                        defaultValue=""
                        className="
                          h-12
                          w-full
                          appearance-none
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-black
                          px-4
                          text-sm
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          focus:border-purple-400/40
                          focus:bg-white/[0.015]
                          focus:shadow-[0_0_25px_rgba(168,85,247,0.05)]
                        "
                      >
                        <option
                          value=""
                          disabled
                          className="bg-black"
                        >
                          Select an area
                        </option>

                        {interests.map((interest) => (
                          <option
                            key={interest}
                            value={interest}
                            className="bg-black text-white"
                          >
                            {interest}
                          </option>
                        ))}
                      </select>

                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          right-4
                          top-1/2
                          -translate-y-1/2
                          text-xs
                          text-white/30
                        "
                      >
                        ↓
                      </span>

                    </div>

                  </div>

                  {/* Message */}
                  <div>

                    <label
                      htmlFor="message"
                      className="
                        mb-2.5
                        block
                        text-[11px]
                        font-medium
                        text-white/55
                      "
                    >
                      Tell us about your project
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell us what you're building, what you're trying to solve, or what you'd like to explore..."
                      className="
                        min-h-[170px]
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-black
                        px-4
                        py-3.5
                        text-sm
                        leading-6
                        text-white
                        outline-none
                        placeholder:text-white/20
                        transition-all
                        duration-300
                        focus:border-purple-400/40
                        focus:bg-white/[0.015]
                        focus:shadow-[0_0_25px_rgba(168,85,247,0.05)]
                      "
                    />

                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="
                      group
                      flex
                      h-12
                      w-full
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-r
                      from-purple-700
                      via-purple-600
                      to-fuchsia-500
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_8px_30px_rgba(124,58,237,0.18)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_12px_35px_rgba(168,85,247,0.32)]
                    "
                  >
                    Send Message

                    <span
                      className="
                        ml-2
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>

                  </button>

                  <p
                    className="
                      text-center
                      text-[10px]
                      leading-5
                      text-white/20
                    "
                  >
                    By submitting this form, you agree to be contacted
                    regarding your inquiry.
                  </p>

                </form>
              )}

            </motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================
          WHAT'S NEXT
          PURE BLACK — NO LINES — NO GLOW
      ========================================================= */}
      <section
        className="
          bg-black
          px-5
          pb-24
          pt-10
          sm:px-8
          sm:pb-28
          lg:px-10
        "
      >

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
            duration: 0.8,
            ease,
          }}
          className="mx-auto max-w-[1180px]"
        >

          {/* NO BORDER */}
          <div className="pt-8">

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              What&apos;s next
            </p>

            <h2
              className="
                mt-6
                max-w-[950px]
                text-[clamp(2.8rem,6vw,5.8rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.065em]
              "
            >
              The next great idea

              <span className="text-purple-300">
                {" "}could start here.
              </span>
            </h2>

            <div
              className="
                mt-10
                flex
                flex-col
                gap-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <p
                className="
                  max-w-[520px]
                  text-sm
                  leading-7
                  text-white/40
                "
              >
                Explore what RNOTSKY is building, or get in touch and start
                a conversation.
              </p>

              <Link
                href="/products"
                className="
                  group
                  inline-flex
                  h-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-purple-700
                  via-purple-600
                  to-fuchsia-500
                  px-6
                  text-xs
                  font-semibold
                  text-white
                  shadow-[0_8px_30px_rgba(124,58,237,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_35px_rgba(168,85,247,0.35)]
                "
              >
                Explore RNOTSKY

                <span
                  className="
                    ml-2
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </Link>

            </div>

          </div>

        </motion.div>
      </section>

      {/* =========================================================
          BRAND END
          PURE BLACK — ABSOLUTELY NO PURPLE GLOW
      ========================================================= */}
      <section
        className="
          bg-black
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:px-10
        "
      >

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
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            max-w-[1180px]
            text-center
          "
        >

          <p
            className="
              text-[clamp(3.5rem,12vw,10rem)]
              font-extrabold
              leading-none
              tracking-[-0.08em]
              text-white/[0.025]
            "
          >
            RNOTSKY
          </p>

          <p
            className="
              mt-[-1vw]
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.5em]
              text-white/25
            "
          >
            BUILDING WHAT COMES NEXT
          </p>

        </motion.div>

      </section>

    </main>
  );
}