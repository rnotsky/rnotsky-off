"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.12,
  },
  transition: {
    duration: 0.7,
    ease,
  },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <>
        By accessing or using RNOTSKY websites, applications, products,
        services or other offerings, you agree to be bound by these Terms
        & Conditions. If you do not agree with these terms, please do not
        use our services.
      </>
    ),
  },
  {
    title: "2. About RNOTSKY",
    content: (
      <>
        RNOTSKY is a technology company developing products and services
        across areas including artificial intelligence, software,
        applications, computer vision, robotics and other emerging
        technologies.
      </>
    ),
  },
  {
    title: "3. Use of Our Services",
    content: (
      <>
        You agree to use RNOTSKY services only for lawful purposes and in
        accordance with these Terms. You must not misuse, disrupt,
        interfere with or attempt to gain unauthorized access to our
        systems, services or infrastructure.
      </>
    ),
  },
  {
    title: "4. Accounts",
    content: (
      <>
        Some RNOTSKY services may require you to create an account. You
        are responsible for providing accurate information and maintaining
        the security of your account credentials. You are responsible for
        activity performed through your account.
      </>
    ),
  },
  {
    title: "5. AI Services",
    content: (
      <>
        RNOTSKY may provide artificial intelligence features and services.
        AI-generated responses may contain errors, inaccuracies or
        incomplete information. You should independently verify important
        information before relying on AI-generated output.
      </>
    ),
  },
  {
    title: "6. Intellectual Property",
    content: (
      <>
        Unless otherwise stated, RNOTSKY names, logos, designs, software,
        website content, graphics and other materials are owned by or
        licensed to RNOTSKY and may be protected by applicable
        intellectual property laws.
      </>
    ),
  },
  {
    title: "7. User Content",
    content: (
      <>
        If you submit content, feedback, suggestions or other material to
        RNOTSKY, you remain responsible for that content. You grant RNOTSKY
        permission to use submitted feedback and suggestions to improve
        our products and services, where permitted by applicable law.
      </>
    ),
  },
  {
    title: "8. Prohibited Activities",
    content: (
      <>
        You must not use RNOTSKY services to violate applicable laws,
        infringe the rights of others, distribute malicious software,
        attempt unauthorized access, abuse our infrastructure or interfere
        with the normal operation of our services.
      </>
    ),
  },
  {
    title: "9. Third-Party Services",
    content: (
      <>
        RNOTSKY services may integrate with or link to third-party
        services. RNOTSKY is not responsible for the availability,
        security, policies or content of third-party services that are
        outside our control.
      </>
    ),
  },
  {
    title: "10. Availability",
    content: (
      <>
        We aim to provide reliable services, but we do not guarantee that
        every service will always be available, uninterrupted, secure or
        error-free. Services may occasionally be modified, suspended or
        discontinued.
      </>
    ),
  },
  {
    title: "11. Disclaimer",
    content: (
      <>
        RNOTSKY services are provided on an &quot;as is&quot; and
        &quot;as available&quot; basis to the extent permitted by
        applicable law. We do not guarantee that our services will meet
        every individual requirement or that all information provided
        through our services will always be accurate or complete.
      </>
    ),
  },
  {
    title: "12. Limitation of Liability",
    content: (
      <>
        To the maximum extent permitted by applicable law, RNOTSKY and its
        representatives will not be liable for indirect, incidental,
        special or consequential damages arising from your use of our
        services.
      </>
    ),
  },
  {
    title: "13. Changes to These Terms",
    content: (
      <>
        We may update these Terms & Conditions from time to time. When
        changes are made, the updated version will be published on this
        page. Your continued use of our services after changes take effect
        constitutes acceptance of the updated terms.
      </>
    ),
  },
  {
    title: "14. Termination",
    content: (
      <>
        RNOTSKY may suspend or terminate access to services when reasonably
        necessary, including where a user violates these Terms, applicable
        laws or creates a risk to our services or other users.
      </>
    ),
  },
  {
    title: "15. Governing Law",
    content: (
      <>
        These Terms & Conditions are intended to be governed by the laws
        applicable to RNOTSKY and its operations, subject to any mandatory
        rights or protections available to users under applicable law.
      </>
    ),
  },
  {
    title: "16. Contact",
    content: (
      <>
        If you have questions about these Terms & Conditions, please
        contact RNOTSKY through our support page.
      </>
    ),
  },
];

export default function TermsPage() {
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
        {/* ONLY MAIN PAGE PURPLE GLOW */}
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
              RNOTSKY Legal
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
              max-w-[1050px]
              text-[clamp(3rem,7.5vw,7rem)]
              font-extrabold
              leading-[0.88]
              tracking-[-0.065em]
            "
          >
            TERMS

            <span className="block text-white">
              & CONDITIONS.
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
              KNOW THE RULES.
            </span>
          </motion.h1>

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
              max-w-[700px]
              text-sm
              leading-7
              text-white/60
              sm:text-[15px]
              sm:leading-8
            "
          >
            These Terms & Conditions explain the rules that apply when
            using RNOTSKY websites, products and services.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease,
            }}
            className="
              mt-5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/25
            "
          >
            Last updated: September 3, 2026
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section
        className="
          relative
          bg-black
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:px-10
        "
      >
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            {...reveal}
            className="
              max-w-[900px]
              rounded-[28px]
              border
              border-white/[0.07]
              bg-white/[0.018]
              p-7
              shadow-[0_20px_70px_rgba(0,0,0,0.25)]
              backdrop-blur-2xl
              sm:p-9
              lg:p-11
            "
          >
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
                Before you use RNOTSKY
              </span>
            </div>

            <h2
              className="
                mt-6
                text-2xl
                font-semibold
                tracking-[-0.04em]
                sm:text-3xl
              "
            >
              Built for technology.
              <span className="text-purple-300">
                {" "}Used responsibly.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[760px]
                text-sm
                leading-7
                text-white/50
                sm:text-[15px]
                sm:leading-8
              "
            >
              We want RNOTSKY to be useful, reliable and accessible.
              These terms establish a clear understanding between RNOTSKY
              and the people who use our technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TERMS
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
          <div className="grid gap-4">
            {sections.map((section, index) => (
              <motion.article
                key={section.title}
                {...reveal}
                transition={{
                  duration: 0.65,
                  delay: Math.min(index * 0.025, 0.25),
                  ease,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/[0.07]
                  bg-white/[0.018]
                  p-6
                  transition-all
                  duration-500
                  hover:border-purple-500/[0.18]
                  hover:bg-white/[0.025]
                  sm:p-8
                "
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-52
                    w-52
                    rounded-full
                    bg-purple-600/[0.045]
                    blur-[80px]
                    transition-all
                    duration-500
                    group-hover:bg-purple-500/[0.08]
                  "
                />

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <span
                      className="
                        mt-2
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-purple-400
                        shadow-[0_0_12px_rgba(168,85,247,0.9)]
                      "
                    />

                    <div>
                      <h2
                        className="
                          text-lg
                          font-semibold
                          tracking-[-0.02em]
                          text-white
                          sm:text-xl
                        "
                      >
                        {section.title}
                      </h2>

                      <p
                        className="
                          mt-4
                          max-w-[900px]
                          text-sm
                          leading-7
                          text-white/48
                          sm:text-[15px]
                          sm:leading-8
                        "
                      >
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA
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
            {/* Card-only glow */}
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
                  Questions?
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
                Need clarification?

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
                  We&apos;re here to help.
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[600px]
                  text-sm
                  leading-7
                  text-white/50
                "
              >
                If you have questions about these Terms & Conditions,
                contact the RNOTSKY team.
              </p>

              <a
                href="/support"
                className="
                  group
                  mt-8
                  inline-flex
                  h-11
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
                Contact Support

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
              </a>
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