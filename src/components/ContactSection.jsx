import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CallIcon, Mail01Icon, SentIcon } from "@hugeicons/core-free-icons"
import Scribble from "./Scribble"

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative border-b-2 border-ink bg-mint-light/40 px-6 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-semibold">
            <HugeiconsIcon icon={CallIcon} size={16} className="text-brand" />
            Talk to an expert
          </span>
          <h2 className="relative mt-5 inline-block font-heading text-4xl font-bold sm:text-5xl">
            Not sure which app fits?
          </h2>
          <p className="mt-4 max-w-md text-ink/60">
            Tell us a bit about what you're building and we'll get back within
            one business day with a plan that fits.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-ink/70">
            <HugeiconsIcon icon={Mail01Icon} size={18} />
            hello@kaagaz.app
          </div>

          <Scribble name="arrow" className="mt-6 h-16 w-16 -rotate-90 text-lilac hidden lg:block" />
        </div>

        <div className="rounded-2xl border-2 border-ink bg-white p-7 paper-shadow sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-ink bg-mint-light">
                <HugeiconsIcon icon={SentIcon} size={26} />
              </span>
              <h3 className="text-xl font-bold">Thanks — message sent!</h3>
              <p className="text-sm text-ink/60">Our team will reach out to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold" htmlFor="name">Name</label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl border-2 border-ink px-4 py-2.5 text-sm outline-none focus:bg-cream"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold" htmlFor="email">Email</label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="rounded-xl border-2 border-ink px-4 py-2.5 text-sm outline-none focus:bg-cream"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold" htmlFor="company">Company (optional)</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  className="rounded-xl border-2 border-ink px-4 py-2.5 text-sm outline-none focus:bg-cream"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold" htmlFor="message">What are you building?</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us a little about your project..."
                  className="resize-none rounded-xl border-2 border-ink px-4 py-2.5 text-sm outline-none focus:bg-cream"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-full border-2 border-ink bg-ink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
