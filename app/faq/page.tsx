import type { Metadata } from "next";
import Link from "next/link";
import { faqs, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `FAQ | ${site.name}`,
};

export default function FaqPage() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow text-center">FAQ</p>
        <h1 className="mt-3 text-center font-display text-4xl text-ink-900">
          Common questions
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-ink-700">
          {site.name} hasn&apos;t opened yet, so most of this is our current
          plan rather than settled policy — we&apos;ve tried to be upfront
          about what&apos;s decided and what&apos;s still open.
        </p>
        <div className="mt-10 divide-y divide-sand-200 border-y border-sand-200">
          {faqs.map((f) => (
            <div key={f.question} className="py-6">
              <p className="font-display text-lg text-teal-700">{f.question}</p>
              <p className="mt-2 text-ink-700">{f.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-ink-700">
            Question not answered here?
          </p>
          <Link
            href="/enquire"
            className="mt-3 inline-block rounded-full bg-coral-500 px-6 py-3 text-sm font-medium text-sand-50 transition hover:bg-coral-600"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
