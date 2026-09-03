import Link from "next/link";
import { notFound } from "next/navigation";
import { updates } from "@/lib/updates";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function UpdatePage({ params }: PageProps) {
  const { slug } = await params;

  const update = updates.find((item) => item.slug === slug);

  if (!update) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-40 lg:px-10 lg:pb-28 lg:pt-44">
        {/* Purple atmosphere */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-220px]
            h-[520px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-purple-700/[0.12]
            blur-[170px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[220px]
            h-[300px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-violet-600/[0.05]
            blur-[150px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1000px]">
          {/* Back */}
          <Link
            href="/updates"
            className="
              inline-flex
              items-center
              text-sm
              text-gray-500
              transition-colors
              duration-300
              hover:text-purple-300
            "
          >
            ← Back to Updates
          </Link>

          {/* Meta */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span
              className="
                rounded-full
                border
                border-purple-500/20
                bg-purple-500/[0.07]
                px-3
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-purple-300
              "
            >
              {update.type === "product" ? "Product Update" : "Company News"}
            </span>

            <span className="text-xs uppercase tracking-[0.25em] text-gray-600">
              {update.label}
            </span>

            <span className="text-xs text-gray-600">
              {update.date}
            </span>
          </div>

          {/* Title */}
          <h1
            className="
              mt-7
              max-w-[950px]
              text-4xl
              font-extrabold
              leading-[1]
              tracking-[-0.04em]

              sm:text-5xl

              md:text-6xl

              lg:text-[4.5rem]
            "
          >
            {update.title}
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-[760px]
              text-base
              leading-8
              text-gray-400

              sm:text-[17px]
            "
          >
            {update.description}
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="relative mx-auto max-w-[900px] px-5 pb-28 sm:px-8 lg:px-10">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/[0.08]
            bg-white/[0.02]
            p-7
            backdrop-blur-xl

            sm:p-10

            lg:p-12
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
              left-1/2
              top-[-150px]
              h-[300px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-purple-600/[0.045]
              blur-[120px]
            "
          />

          <div className="relative">
            <p className="text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
              {update.description}
            </p>

            <div className="my-10 h-px bg-white/[0.07]" />

            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
              The journey continues.
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-500 sm:text-[17px] sm:leading-9">
              RNOTSKY is focused on building technology that can turn
              ambitious ideas into useful products and intelligent systems.
              Every release and milestone is part of that journey.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-500 sm:text-[17px] sm:leading-9">
              We will continue to share important developments,
              announcements, and progress through the RNOTSKY Updates
              platform.
            </p>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/updates"
            className="
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.02]
              px-6
              py-3
              text-sm
              font-medium
              text-gray-400
              transition-all
              duration-300
              hover:border-purple-500/25
              hover:bg-purple-500/[0.06]
              hover:text-purple-300
            "
          >
            View all updates
          </Link>
        </div>
      </article>
    </main>
  );
}