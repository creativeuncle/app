import { HugeiconsIcon } from "@hugeicons/react"
import { StarIcon } from "@hugeicons/core-free-icons"

const AVATAR_COLORS = ["bg-chip-blue", "bg-chip-pink", "bg-chip-yellow", "bg-chip-green", "bg-ink"]

const TESTIMONIALS = [
  { name: "Ananya R.", role: "Indie hacker", quote: "Replaced 6 different tools with this. My workflow finally feels like one product." },
  { name: "Rohit M.", role: "Founder, Studio Loop", quote: "The apps actually talk to each other. Login once, use everything — exactly what I wanted." },
  { name: "Sara K.", role: "Freelance designer", quote: "Shipped a client project twice as fast using the built-in generators. Genuinely creative toolkit." },
]

export default function SocialProof() {
  return (
    <section className="relative bg-offwhite px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mx-auto flex w-fit -space-x-3">
          {AVATAR_COLORS.map((c, i) => (
            <span
              key={i}
              className={`h-11 w-11 rounded-full border-2 border-offwhite ${c}`}
              style={{ zIndex: AVATAR_COLORS.length - i }}
            />
          ))}
        </div>

        <h2 className="mt-6 font-heading text-4xl font-bold text-ink sm:text-5xl">
          Join 800+ happy users
        </h2>

        <div className="mt-2 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <HugeiconsIcon key={i} icon={StarIcon} size={18} className="text-ink" strokeWidth={0} fill="currentColor" />
          ))}
          <span className="ml-2 text-sm text-slate">4.9/5 average rating</span>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-white p-6 text-left">
              <p className="text-[15px] text-ink/80">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-chip-blue font-heading text-lg font-bold text-ink">
                  {t.name[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-slate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
