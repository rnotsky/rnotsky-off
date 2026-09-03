"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type RequestType = "support" | "bug" | "feedback";

const reveal = {
  initial: {
    opacity: 0,
    y: 28,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.75,
    ease,
  },
};

const requestTypes: {
  id: RequestType;
  title: string;
  description: string;
}[] = [
  {
    id: "support",
    title: "Get Support",
    description:
      "Having trouble with an RNOTSKY product or service?",
  },
  {
    id: "bug",
    title: "Report a Bug",
    description:
      "Found something that isn't working as expected?",
  },
  {
    id: "feedback",
    title: "Send Feedback",
    description:
      "Have an idea, suggestion or improvement for RNOTSKY?",
  },
];

const faqs = [
  {
    question: "How do I report a bug?",
    answer:
      "Choose Report a Bug above and provide as much information as possible, including what happened and how we can reproduce the issue.",
  },
  {
    question: "Can I suggest a new feature?",
    answer:
      "Yes. Choose Send Feedback and tell us what you would like to see and why it would be useful.",
  },
  {
    question: "What should I include in a support request?",
    answer:
      "Include the product you're using, what you're trying to do, what happened and any relevant device or browser information.",
  },
  {
    question: "Can I contact RNOTSKY about something else?",
    answer:
      "Yes. You can use the support form for general questions and we'll route your request appropriately.",
  },
];

export default function SupportPage() {
  const [requestType, setRequestType] =
    useState<RequestType>("support");

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =========================================================
          HERO
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
        {/* Main page glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-260px]
            h-[620px]
            w-[1050px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.17]
            blur-[175px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1180px]">
          {/* Pill */}
          <motion.div
            {...reveal}
            className="
              mb-7
              inline-flex
              items-center
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/[0.07]
              px-4
              py-2
              shadow-[0_0_30px_rgba(168,85,247,0.08)]
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
              RNOTSKY Support
            </span>
          </motion.div>

          {/* Heading */}
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
              ease,
            }}
            className="
              max-w-[1000px]
              text-[clamp(3rem,7.5vw,7rem)]
              font-extrabold
              leading-[0.88]
              tracking-[-0.065em]
            "
          >
            WE&apos;RE HERE

            <span className="block text-white">
              TO HELP.
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
                drop-shadow-[0_0_35px_rgba(168,85,247,0.2)]
              "
            >
              TELL US WHAT&apos;S UP.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
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
            className="
              mt-9
              max-w-[680px]
              text-sm
              leading-7
              text-white/65
              sm:text-[15px]
              sm:leading-8
            "
          >
            Get help with RNOTSKY products, report problems, share
            feedback or tell us what we should build next.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          REQUEST TYPES
      ========================================================= */}
      <section
        className="
          relative
          bg-black
          px-5
          py-24
          sm:px-8
          sm:py-28
          lg:px-10
        "
      >
        <div className="mx-auto max-w-[1180px]">
          <motion.div {...reveal}>
            <div className="mb-7 flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_14px_rgba(168,85,247,1)]
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
                How can we help?
              </span>
            </div>

            <div
              className="
                grid
                gap-8
                lg:grid-cols-[1fr_0.65fr]
                lg:items-end
              "
            >
              <h2
                className="
                  text-3xl
                  font-semibold
                  leading-[1]
                  tracking-[-0.05em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Choose what you

                <span className="block text-purple-300">
                  need help with.
                </span>
              </h2>

              <p
                className="
                  max-w-[450px]
                  text-sm
                  leading-7
                  text-white/55
                "
              >
                Whether something is broken or you simply have an
                idea, we want to hear from you.
              </p>
            </div>
          </motion.div>

          {/* Options */}
          <motion.div
            {...reveal}
            className="mt-14 grid gap-3 md:grid-cols-3"
          >
            {requestTypes.map((type) => {
              const active = requestType === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setRequestType(type.id)}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    p-7
                    text-left
                    transition-all
                    duration-500
                    sm:p-8
                    ${
                      active
                        ? "border-purple-400/35 bg-purple-500/[0.07] shadow-[0_20px_70px_rgba(124,58,237,0.13)]"
                        : "border-white/[0.08] bg-white/[0.018] hover:border-purple-400/25 hover:bg-white/[0.025]"
                    }
                  `}
                >
                  {/* Glow */}
                  <div
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-purple-600/[0.07]
                      blur-[70px]
                      transition-all
                      duration-500
                      ${
                        active
                          ? "bg-purple-500/[0.15]"
                          : "group-hover:bg-purple-500/[0.12]"
                      }
                    `}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-purple-300/80
                        "
                      >
                        RNOTSKY
                      </span>

                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            active
                              ? "bg-purple-300 shadow-[0_0_15px_rgba(168,85,247,1)]"
                              : "bg-white/20"
                          }
                        `}
                      />
                    </div>

                    <h3
                      className="
                        mt-14
                        text-base
                        font-semibold
                        tracking-[-0.02em]
                        text-white
                      "
                    >
                      {type.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-white/45
                      "
                    >
                      {type.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT FORM
      ========================================================= */}
      <section
        className="
          relative
          bg-black
          px-5
          pb-24
          sm:px-8
          sm:pb-28
          lg:px-10
        "
      >
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            {...reveal}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-purple-500/[0.13]
              bg-white/[0.018]
              p-6
              shadow-[0_25px_90px_rgba(124,58,237,0.06)]
              backdrop-blur-2xl
              sm:p-9
              lg:p-12
            "
          >
            {/* Card glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-220px]
                h-[430px]
                w-[700px]
                -translate-x-1/2
                rounded-full
                bg-purple-600/[0.08]
                blur-[150px]
              "
            />

            <div className="relative z-10">
              <div className="mb-10">
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-purple-400
                      shadow-[0_0_14px_rgba(168,85,247,1)]
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
                    Submit a request
                  </span>
                </div>

                <h2
                  className="
                    mt-5
                    text-3xl
                    font-semibold
                    tracking-[-0.05em]
                    sm:text-4xl
                  "
                >
                  Tell us what&apos;s

                  <span className="text-purple-300">
                    {" "}going on.
                  </span>
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name + Email */}
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="Name"
                    name="name"
                    placeholder="Your name"
                    required
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Product */}
                <div>
                  <label
                    htmlFor="product"
                    className="mb-2 block text-xs font-medium text-white/55"
                  >
                    Product
                  </label>

                  <select
                    id="product"
                    name="product"
                    className="
                      h-12
                      w-full
                      appearance-none
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/40
                      px-4
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      focus:border-purple-400/35
                      focus:bg-white/[0.025]
                    "
                  >
                    <option value="" className="bg-black">
                      Select a product
                    </option>
                    <option value="RNOTSKY AI" className="bg-black">
                      RNOTSKY AI
                    </option>
                    <option value="RNOTSKY Authenticator" className="bg-black">
                      RNOTSKY Authenticator
                    </option>
                    <option value="RNOTSKY Player" className="bg-black">
                      RNOTSKY Player
                    </option>
                    <option value="Other" className="bg-black">
                      Other
                    </option>
                  </select>
                </div>

                {/* Bug-specific fields */}
                {requestType === "bug" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                    className="space-y-6 overflow-hidden"
                  >
                    <div>
                      <label
                        htmlFor="environment"
                        className="mb-2 block text-xs font-medium text-white/55"
                      >
                        Device / Browser
                      </label>

                      <input
                        id="environment"
                        name="environment"
                        placeholder="Windows 11 / Chrome 140"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="steps"
                        className="mb-2 block text-xs font-medium text-white/55"
                      >
                        Steps to reproduce
                      </label>

                      <textarea
                        id="steps"
                        name="steps"
                        rows={4}
                        placeholder="Tell us how we can reproduce the problem..."
                        className={textareaClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="expected"
                        className="mb-2 block text-xs font-medium text-white/55"
                      >
                        Expected result
                      </label>

                      <textarea
                        id="expected"
                        name="expected"
                        rows={3}
                        placeholder="What should have happened?"
                        className={textareaClass}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Feedback-specific field */}
                {requestType === "feedback" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                    className="overflow-hidden"
                  >
                    <div>
                      <label
                        htmlFor="feedbackType"
                        className="mb-2 block text-xs font-medium text-white/55"
                      >
                        Feedback type
                      </label>

                      <select
                        id="feedbackType"
                        name="feedbackType"
                        className="
                          h-12
                          w-full
                          appearance-none
                          rounded-xl
                          border
                          border-white/[0.08]
                          bg-black/40
                          px-4
                          text-sm
                          text-white
                          outline-none
                          transition-all
                          duration-300
                          focus:border-purple-400/35
                          focus:bg-white/[0.025]
                        "
                      >
                        <option value="" className="bg-black">
                          Select feedback type
                        </option>
                        <option value="Feature" className="bg-black">
                          Feature suggestion
                        </option>
                        <option value="Improvement" className="bg-black">
                          Improvement
                        </option>
                        <option value="Experience" className="bg-black">
                          User experience
                        </option>
                        <option value="Other" className="bg-black">
                          Other
                        </option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Subject */}
                <Field
                  label="Subject"
                  name="subject"
                  placeholder={
                    requestType === "bug"
                      ? "Short description of the bug"
                      : requestType === "feedback"
                        ? "What would you like to tell us?"
                        : "How can we help?"
                  }
                  required
                />

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-white/55"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    placeholder={
                      requestType === "bug"
                        ? "Describe what happened..."
                        : requestType === "feedback"
                          ? "Share your thoughts, ideas or suggestions..."
                          : "Describe your question or problem..."
                    }
                    className={textareaClass}
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[11px] leading-5 text-white/25">
                    Please don't include passwords, payment information
                    or other sensitive information.
                  </p>

                  <button
                    type="submit"
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
                      px-7
                      text-xs
                      font-semibold
                      text-white
                      shadow-[0_8px_30px_rgba(124,58,237,0.25)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_12px_40px_rgba(168,85,247,0.42)]
                    "
                  >
                    {submitted ? "Request Sent" : "Submit Request"}

                    {!submitted && (
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
                    )}
                  </button>
                </div>

                {submitted && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      rounded-xl
                      border
                      border-purple-400/20
                      bg-purple-500/[0.06]
                      px-4
                      py-3
                      text-sm
                      text-purple-200
                    "
                  >
                    Your request has been received. We&apos;ll get back
                    to you as soon as possible.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section
        className="
          relative
          bg-black
          px-5
          py-24
          sm:px-8
          sm:py-28
          lg:px-10
        "
      >
        <div className="mx-auto max-w-[1180px]">
          <motion.div {...reveal}>
            <div className="mb-7 flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_14px_rgba(168,85,247,1)]
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
                Support FAQ
              </span>
            </div>

            <h2
              className="
                max-w-[700px]
                text-3xl
                font-semibold
                leading-[1]
                tracking-[-0.05em]
                sm:text-4xl
              "
            >
              A few things you

              <span className="block text-purple-300">
                might want to know.
              </span>
            </h2>
          </motion.div>

          <motion.div
            {...reveal}
            className="mt-12 space-y-2"
          >
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.018]
                    transition-all
                    duration-300
                    hover:border-purple-500/[0.18]
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      px-5
                      py-5
                      text-left
                      sm:px-6
                    "
                  >
                    <span className="text-sm font-medium text-white/80">
                      {faq.question}
                    </span>

                    <span
                      className={`
                        text-lg
                        font-light
                        text-purple-300
                        transition-transform
                        duration-300
                        ${open ? "rotate-45" : ""}
                      `}
                    >
                      +
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: open ? "auto" : 0,
                      opacity: open ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease,
                    }}
                    className="overflow-hidden"
                  >
                    <p
                      className="
                        px-5
                        pb-5
                        text-sm
                        leading-7
                        text-white/45
                        sm:px-6
                        sm:pb-6
                      "
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section
        className="
          relative
          bg-black
          px-5
          pb-24
          sm:px-8
          sm:pb-28
          lg:px-10
        "
      >
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            {...reveal}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-purple-500/[0.15]
              bg-purple-500/[0.045]
              px-7
              py-14
              text-center
              shadow-[0_30px_100px_rgba(124,58,237,0.08)]
              sm:px-12
              sm:py-16
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-180px]
                h-[400px]
                w-[650px]
                -translate-x-1/2
                rounded-full
                bg-purple-600/[0.10]
                blur-[150px]
              "
            />

            <div className="relative z-10">
              <div className="mx-auto mb-7 flex w-fit items-center gap-3">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-purple-300
                    shadow-[0_0_15px_rgba(168,85,247,1)]
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
                  RNOTSKY Support
                </span>
              </div>

              <h2
                className="
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Help us make RNOTSKY

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-purple-300
                    via-violet-400
                    to-fuchsia-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  better.
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[600px]
                  text-sm
                  leading-7
                  text-white/55
                "
              >
                Every bug report, idea and piece of feedback helps
                us build better technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BRAND END
          PURE BLACK — NO PURPLE
      ========================================================= */}
      <section
        className="
          relative
          overflow-hidden
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
          className="relative text-center"
        >
          <p
            className="
              text-[clamp(3.5rem,12vw,10rem)]
              font-extrabold
              leading-none
              tracking-[-0.08em]
              text-white/[0.06]
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
              text-white/40
            "
          >
            BUILDING WHAT COMES NEXT
          </p>
        </motion.div>
      </section>
    </main>
  );
}

/* =========================================================
   FORM FIELD
========================================================= */

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium text-white/55"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

/* =========================================================
   SHARED INPUT STYLES
========================================================= */

const inputClass = `
  h-12
  w-full
  rounded-xl
  border
  border-white/[0.08]
  bg-black/40
  px-4
  text-sm
  text-white
  outline-none
  placeholder:text-white/20
  transition-all
  duration-300
  focus:border-purple-400/35
  focus:bg-white/[0.025]
  focus:shadow-[0_0_25px_rgba(168,85,247,0.05)]
`;

const textareaClass = `
  w-full
  rounded-xl
  border
  border-white/[0.08]
  bg-black/40
  px-4
  py-3
  text-sm
  leading-6
  text-white
  outline-none
  placeholder:text-white/20
  transition-all
  duration-300
  focus:border-purple-400/35
  focus:bg-white/[0.025]
  focus:shadow-[0_0_25px_rgba(168,85,247,0.05)]
  resize-none
`;