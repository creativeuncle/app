import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { SparklesIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"

const LINKS = [
  { label: "Apps", href: "#apps" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Help", href: "#help" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink">
            <HugeiconsIcon icon={SparklesIcon} size={16} className="text-white" strokeWidth={2.5} />
          </span>
          <span className="font-heading text-2xl font-bold leading-none text-ink">Kaagaz</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[14px] font-medium text-slate transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#login" className="rounded-full px-4 py-2 text-[14px] font-semibold text-ink transition hover:bg-offwhite">
            Log in
          </a>
          <a
            href="#signup"
            className="rounded-full bg-ink px-4 py-2 text-[14px] font-semibold text-white transition hover:bg-ink/85"
          >
            Get Kaagaz free
          </a>
        </div>

        <button
          className="grid h-9 w-9 place-items-center rounded-lg text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={20} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-cream px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-[15px] font-medium text-ink" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <a href="#login" className="rounded-full border border-border px-5 py-2 text-center text-[14px] font-semibold text-ink">
                Log in
              </a>
              <a href="#signup" className="rounded-full bg-ink px-5 py-2 text-center text-[14px] font-semibold text-white">
                Get Kaagaz free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
