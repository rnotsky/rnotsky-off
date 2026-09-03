import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function AIPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:px-10 lg:pt-44">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[420px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-purple-700/15
            blur-[140px]
          "
        />

        <div className="relative mx-auto max-w-[1200px]">
          {/* Back */}
          <Link
            href="/products"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              text-white/35
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <ArrowLeft
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Products
          </Link>

          {/* Heading */}
          <div className="mt-14 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="relative h-3.5 w-3.5">
                <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />

                <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />

                <span className="absolute inset-[5px] rounded-full bg-purple-300" />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-purple-300/70">
                RNOTSKY Intelligence
              </span>
            </div>

            <h1
              className="
                mt-6
                text-5xl
                font-semibold
                tracking-[-0.05em]
                text-white
                sm:text-6xl
                lg:text-8xl
              "
            >
              AI
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-white/40
                sm:text-lg
                sm:leading-8
              "
            >
              Intelligent systems designed to understand, reason, learn and
              assist.
            </p>
          </div>
        </div>
      </section>

      {/* RNOTSKY AI */}
      <section className="relative px-5 pb-32 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <article
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
              sm:p-10
              lg:p-14
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

            {/* Main glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-40
                -top-40
                h-[500px]
                w-[500px]
                rounded-full
                bg-purple-700/[0.10]
                blur-[140px]
                transition-all
                duration-700
                group-hover:bg-purple-600/[0.16]
              "
            />

            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="relative h-3.5 w-3.5">
                    <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md" />

                    <span className="absolute inset-[3px] rounded-full bg-purple-400/30 animate-pulse" />

                    <span className="absolute inset-[5px] rounded-full bg-purple-300" />
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-purple-400">
                    Coming Soon
                  </span>
                </div>

                <h2
                  className="
                    mt-7
                    text-5xl
                    font-semibold
                    tracking-[-0.055em]
                    text-white
                    sm:text-6xl
                    lg:text-7xl
                  "
                >
                  RNOTSKY AI
                </h2>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-base
                    leading-7
                    text-gray-500
                    transition-colors
                    duration-300
                    group-hover:text-gray-400
                    sm:text-lg
                    sm:leading-8
                  "
                >
                  Intelligent technology designed to understand, reason and
                  assist — bringing AI closer to the way people think, create
                  and work.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Intelligence",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        px-4
                        py-2
                        text-xs
                        text-white/30
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-gray-500">
                  Coming soon
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* AI visual */}
              <div
                className="
                  relative
                  flex
                  min-h-[280px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-white/[0.06]
                  bg-black/30
                  sm:min-h-[360px]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    h-64
                    w-64
                    rounded-full
                    bg-purple-600/[0.12]
                    blur-[110px]
                    transition-all
                    duration-700
                    group-hover:scale-125
                    group-hover:bg-purple-500/[0.18]
                  "
                />

                <div
                  className="
                    relative
                    h-44
                    w-44
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    sm:h-56
                    sm:w-56
                  "
                >
                  <Image
                    src="/icons/ai.png"
                    alt="RNOTSKY AI"
                    fill
                    sizes="(max-width: 640px) 176px, 224px"
                    className="
                      object-contain
                      drop-shadow-[0_0_45px_rgba(168,85,247,0.30)]
                    "
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}