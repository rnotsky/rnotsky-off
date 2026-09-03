import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductCTA() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-6 py-16 text-center sm:px-10 sm:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[120px]" />

        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-300/60">
            RNOTSKY
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Build the future with us.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
            Explore the technologies we're building and discover where
            RNOTSKY is heading next.
          </p>

          <Link
            href="/about"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/10
              px-6
              py-3
              text-sm
              font-medium
              text-purple-100
              transition-all
              duration-300
              hover:border-purple-400/40
              hover:bg-purple-500/15
              hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]
            "
          >
            Explore RNOTSKY
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}