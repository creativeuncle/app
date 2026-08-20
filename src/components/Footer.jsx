import { HugeiconsIcon } from "@hugeicons/react"
import { SparklesIcon, TwitterIcon, InstagramIcon, Github01Icon, Linkedin02Icon } from "@hugeicons/core-free-icons"

const COLUMNS = [
  {
    title: "Product",
    links: ["Apps", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help center", "Community", "Guides", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
]

const SOCIALS = [TwitterIcon, InstagramIcon, Github01Icon, Linkedin02Icon]

export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-14 text-white/90 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand">
                <HugeiconsIcon icon={SparklesIcon} size={18} className="text-white" />
              </span>
              <span className="font-heading text-2xl font-bold text-white">Kaagaz</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              A single home for the 10+ tiny apps we're building — creative
              tools without the tab-juggling.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/5 transition hover:bg-white/10"
                >
                  <HugeiconsIcon icon={icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white/90">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/50 transition hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Kaagaz. All rights reserved.</p>
          <p>Made with care, one app at a time.</p>
        </div>
      </div>
    </footer>
  )
}
