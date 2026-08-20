import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon, CallIcon, StarIcon } from "@hugeicons/core-free-icons"
import Scribble from "./Scribble"

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      <div className="dotted-bg absolute inset-0 text-ink/10" />
      <Scribble name="sparkle" className="absolute left-[6%] top-24 h-14 w-14 text-sun rotate-12 hidden sm:block" />
      <Scribble name="burst" className="absolute right-[8%] top-16 h-16 w-16 text-lilac -rotate-6 hidden sm:block" />
      <Scribble name="swoosh" className="absolute right-[4%] bottom-10 h-20 w-20 text-mint hidden lg:block" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 paper-shadow-sm">
          <HugeiconsIcon icon={StarIcon} size={16} className="text-brand" />
          <span className="text-sm font-semibold">10+ tiny apps, one home</span>
        </div>

        <h1 className="font-heading text-5xl font-bold leading-[1.05] sm:text-7xl">
          Build, ship &amp; sell your{" "}
          <span className="relative inline-block whitespace-nowrap text-brand">
            SaaS ideas
            <Scribble name="underline" className="absolute -bottom-3 left-0 h-6 w-full text-brand" />
          </span>{" "}
          faster
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">
          One workspace for every micro-app you're launching — AI tools, generators
          and utilities, all under one roof, one login and one bill.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#signup"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-brand px-7 py-3.5 text-base font-bold text-white paper-shadow transition hover:-translate-y-1"
          >
            Start Now — It's free
            <HugeiconsIcon icon={ArrowRight02Icon} size={20} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-7 py-3.5 text-base font-bold text-ink transition hover:-translate-y-1 hover:bg-lilac-light"
          >
            <HugeiconsIcon icon={CallIcon} size={20} />
            Talk to expert
          </a>
        </div>

        <p className="mt-5 text-sm text-ink/50">No credit card needed · Free forever plan</p>
      </div>
    </section>
  )
}
