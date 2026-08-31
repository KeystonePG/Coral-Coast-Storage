import Link from "next/link";
import { concept, site, status, whyHere } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal-900 px-6 py-24 text-center text-sand-50 sm:px-10">
        <p className="eyebrow text-coral-400">{status.headline}</p>
        <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
          {site.name}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-sand-100">
          {status.blurb}
        </p>
        <div className="mt-8 flex justify-center gap-6 text-sm text-sand-200">
          <span>{concept.indoorUnits}</span>
          <span>·</span>
          <span>{concept.yardBays}</span>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/what-we-offer"
            className="rounded-full bg-coral-500 px-6 py-3 text-sm font-medium text-sand-50 transition hover:bg-coral-600"
          >
            See what we're planning
          </Link>
          <Link
            href="/enquire"
            className="rounded-full border border-sand-50/40 px-6 py-3 text-sm font-medium text-sand-50 transition hover:bg-sand-50/10"
          >
            Register interest
          </Link>
        </div>
      </section>

      {/* Why here */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
        <p className="eyebrow text-center text-gold-500">Why Port Denison</p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
          A gap in the region
        </h2>
        <ul className="mx-auto mt-8 max-w-xl space-y-4 text-ink-700">
          {whyHere.map((reason) => (
            <li key={reason} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
              {reason}
            </li>
          ))}
        </ul>
      </section>

      {/* Quick links to the rest of the site */}
      <section className="bg-sand-100 px-6 py-16 sm:px-10">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          <Link
            href="/what-we-offer"
            className="rounded-2xl bg-sand-50 p-6 text-center transition hover:shadow-md"
          >
            <p className="font-display text-xl text-teal-700">What We Offer</p>
            <p className="mt-2 text-sm text-ink-700">
              Indoor unit sizes, yard classes, pricing and drive-up access.
            </p>
          </Link>
          <Link
            href="/about"
            className="rounded-2xl bg-sand-50 p-6 text-center transition hover:shadow-md"
          >
            <p className="font-display text-xl text-teal-700">About Us</p>
            <p className="mt-2 text-sm text-ink-700">
              Who&apos;s behind the project and why we&apos;re building it.
            </p>
          </Link>
          <Link
            href="/enquire"
            className="rounded-2xl bg-sand-50 p-6 text-center transition hover:shadow-md"
          >
            <p className="font-display text-xl text-teal-700">Bookings &amp; Enquiries</p>
            <p className="mt-2 text-sm text-ink-700">
              Register your interest and we&apos;ll be in touch as plans firm up.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
