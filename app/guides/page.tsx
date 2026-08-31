import type { Metadata } from "next";
import {
  carStorageGuide,
  itemStorageGuide,
  signUpChecklist,
  site,
} from "@/lib/content";

export const metadata: Metadata = {
  title: `Storage guides | ${site.name}`,
};

export default function GuidesPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 text-center sm:px-10">
        <p className="eyebrow">Guides</p>
        <h1 className="mt-3 font-display text-4xl text-ink-900">
          Getting ready to store
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-700">
          General preparation tips, plus the actual sign-up and move-in
          checklist we&apos;re planning to use — drafted, but not yet final.
        </p>
      </section>

      {/* Car / vehicle storage guide */}
      <section className="px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow text-center">Vehicles, caravans &amp; boats</p>
          <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
            Preparing a vehicle for the yard
          </h2>
          <ul className="mx-auto mt-8 space-y-3 text-ink-700">
            {carStorageGuide.map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other items storage guide */}
      <section className="bg-sand-100 px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow text-center">Everything else</p>
          <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
            Packing an indoor unit well
          </h2>
          <ul className="mx-auto mt-8 space-y-3 text-ink-700">
            {itemStorageGuide.map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sign-up + move-in checklist */}
      <section className="px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow text-center text-gold-500">Sign-up &amp; move-in</p>
          <h2 className="mt-3 text-center font-display text-3xl text-ink-900">
            The checklist we&apos;re planning to use
          </h2>
          <div className="mt-10 space-y-10">
            {signUpChecklist.map((section) => (
              <div key={section.phase}>
                <h3 className="font-display text-xl text-teal-700">{section.phase}</h3>
                <ul className="mt-3 space-y-2 text-ink-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sand-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-ink-700/60">
            This checklist is a general guide, drafted ahead of legal review
            — it doesn&apos;t replace whatever agreement you&apos;d actually
            sign at move-in.
          </p>
        </div>
      </section>
    </>
  );
}
