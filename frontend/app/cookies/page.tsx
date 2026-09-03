import Link from "next/link";

const sections = [
  {
    title: "1. What Are Cookies?",
    content: [
      "Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, improve functionality and understand how visitors use the site.",
      "RNOTSKY may use cookies and similar technologies to provide, secure and improve our website and services.",
    ],
  },
  {
    title: "2. How We Use Cookies",
    content: [
      "We may use cookies and similar technologies for several purposes, including:",
    ],
    bullets: [
      "Keeping the website functional and secure.",
      "Remembering preferences and settings.",
      "Understanding how visitors interact with our website.",
      "Improving website performance and user experience.",
      "Detecting errors, abuse and unusual activity.",
      "Supporting authentication and account-related functionality.",
    ],
  },
  {
    title: "3. Types of Cookies We May Use",
    content: [],
    subsections: [
      {
        title: "Essential Cookies",
        text: "These cookies are necessary for core website functionality. They may support authentication, security, session management and other features required for the website to operate.",
      },
      {
        title: "Preference Cookies",
        text: "These cookies may remember choices such as interface preferences or settings so that your experience can be more convenient.",
      },
      {
        title: "Analytics Cookies",
        text: "If analytics services are enabled, these cookies may help us understand website traffic, usage patterns and performance.",
      },
      {
        title: "Functional Cookies",
        text: "These cookies may support additional features and functionality provided through our website or services.",
      },
    ],
  },
  {
    title: "4. Third-Party Cookies",
    content: [
      "Some services integrated into the RNOTSKY website may place their own cookies or similar technologies on your device.",
      "These may include services used for analytics, authentication, infrastructure, security, embedded content or other website functionality.",
      "Third-party providers control their own technologies and may have separate privacy and cookie policies. We recommend reviewing the policies of any third-party service you choose to use.",
    ],
  },
  {
    title: "5. Authentication & Account Cookies",
    content: [
      "If you create an account or sign in to RNOTSKY services, cookies or similar browser storage technologies may be used to maintain your session and help keep your account secure.",
      "Disabling essential authentication technologies may prevent certain account features from functioning correctly.",
    ],
  },
  {
    title: "6. Analytics & Performance",
    content: [
      "Where analytics tools are enabled, we may use cookies or similar technologies to understand how visitors use our website.",
      "This information may help us identify frequently visited pages, technical issues, performance problems and opportunities to improve the RNOTSKY experience.",
    ],
  },
  {
    title: "7. Managing Cookies",
    content: [
      "Most modern web browsers allow you to control, block or delete cookies through their settings.",
      "You can usually find these controls under your browser's privacy, security or site settings.",
      "Please note that disabling certain cookies may affect the functionality of parts of the RNOTSKY website or services.",
    ],
  },
  {
    title: "8. Browser Settings",
    content: [
      "You can manage cookies directly through your browser. Depending on the browser you use, you may be able to:",
    ],
    bullets: [
      "Block all cookies.",
      "Block third-party cookies.",
      "Delete existing cookies.",
      "Allow cookies only from selected websites.",
      "Receive notifications before cookies are stored.",
    ],
  },
  {
    title: "9. Do Not Track",
    content: [
      "Some browsers provide a Do Not Track setting. Because there is currently no universally accepted technical standard for responding to these signals, RNOTSKY may not respond to every browser-based Do Not Track preference.",
    ],
  },
  {
    title: "10. Cookies & Personal Information",
    content: [
      "Cookies themselves may not always directly identify you. However, information collected through cookies or similar technologies may sometimes be associated with other information connected to your account or device.",
      "Our handling of personal information is described in our Privacy Policy.",
    ],
  },
  {
    title: "11. Changes to This Cookie Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes to our website, services, technologies or legal requirements.",
      "When changes are made, we will update the 'Last updated' date shown on this page.",
    ],
  },
  {
    title: "12. Contact Us",
    content: [
      "If you have questions about this Cookie Policy or how cookies are used by RNOTSKY, you can contact us through our Support page.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen overflow-visible bg-black text-white">
      {/* Top atmosphere */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-40">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-260px]
            h-[560px]
            w-[1000px]
            -translate-x-1/2
            rounded-full
            bg-purple-700/[0.13]
            blur-[180px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[15%]
            top-[-100px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-violet-600/[0.06]
            blur-[140px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1050px] text-center">
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-purple-500/[0.20]
              bg-purple-500/[0.045]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-purple-300 sm:text-[11px]">
              RNOTSKY Legal
            </span>
          </div>

          <h1
            className="
              mt-7
              text-4xl
              font-extrabold
              leading-[1.08]
              tracking-[-0.045em]
              sm:text-5xl
              md:text-6xl
              lg:text-[5.5rem]
            "
          >
            COOKIES
            <span className="block bg-gradient-to-r from-purple-300 via-violet-500 to-fuchsia-500 bg-clip-text pb-2 text-transparent">
              & PRIVACY.
            </span>
            <span className="block text-white">
              KNOW HOW THEY WORK.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[700px] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            This Cookie Policy explains how RNOTSKY may use cookies and
            similar technologies to operate, secure and improve our website
            and services.
          </p>

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.25em] text-white/30">
            Last updated: September 3, 2026
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-[1050px]">
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-[220px]
                w-[220px]
                rounded-full
                bg-purple-600/[0.07]
                blur-[100px]
              "
            />

            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-300/80">
                Cookie Policy
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Technology should work quietly.
              </h2>

              <p className="mt-4 max-w-[820px] text-sm leading-7 text-white/55 sm:text-[15px] sm:leading-8">
                We use cookies and similar technologies only where they help
                us operate, secure, understand and improve the RNOTSKY
                experience. This policy explains what they are and how you
                can manage them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy sections */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
        <div className="mx-auto max-w-[1050px] space-y-5">
          {sections.map((section) => (
            <article
              key={section.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-white/[0.07]
                bg-white/[0.018]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-purple-500/[0.18]
                hover:bg-white/[0.025]
                hover:shadow-[0_20px_70px_rgba(124,58,237,0.07)]
                sm:p-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-[150px]
                  w-[220px]
                  rounded-full
                  bg-purple-600/[0.035]
                  blur-[80px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative">
                <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.content.map((paragraph, index) => (
                    <p
                      key={`${section.title}-paragraph-${index}`}
                      className="text-sm leading-7 text-white/55 sm:text-[15px] sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-7 text-white/55 sm:text-[15px]"
                      >
                        <span
                          aria-hidden="true"
                          className="
                            mt-[11px]
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-purple-400
                            shadow-[0_0_10px_rgba(168,85,247,0.8)]
                          "
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {section.subsections.map((subsection) => (
                      <div
                        key={subsection.title}
                        className="
                          rounded-2xl
                          border
                          border-white/[0.06]
                          bg-black/[0.22]
                          p-5
                        "
                      >
                        <h3 className="text-sm font-semibold text-white">
                          {subsection.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/45">
                          {subsection.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10">
        <div className="mx-auto max-w-[1050px]">
          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] px-6 py-12 text-center shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:px-10 sm:py-16">
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[320px]
                w-[600px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-purple-600/[0.07]
                blur-[140px]
              "
            />

            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-300/80">
                Need help?
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Have a question about
                <span className="block bg-gradient-to-r from-purple-300 via-violet-500 to-fuchsia-500 bg-clip-text pb-1 text-transparent">
                  cookies or privacy?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-white/45">
                If you have questions about how RNOTSKY handles cookies or
                your information, we're here to help.
              </p>

              <Link
                href="/support"
                className="
                  mt-8
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-purple-700
                  via-purple-600
                  to-purple-500
                  px-6
                  text-xs
                  font-semibold
                  text-white
                  shadow-[0_8px_30px_rgba(124,58,237,0.2)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_40px_rgba(168,85,247,0.35)]
                "
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand End */}
      <section className="bg-black px-5 pb-20 pt-4 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1050px] text-center">
          <div className="text-3xl font-extrabold tracking-[-0.05em] text-white/[0.08] sm:text-5xl">
            RNOTSKY
          </div>

          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.35em] text-white/[0.25]">
            Intelligence · Technology · What's Next
          </p>
        </div>
      </section>
    </main>
  );
}