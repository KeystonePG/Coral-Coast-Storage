import type { Metadata } from "next";
import InterestForm from "@/components/InterestForm";
import { site, timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: `Bookings & enquiries | ${site.name}`,
};

export default function EnquirePage() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Bookings &amp; enquiries</p>
        <h1 className="mt-3 font-display text-4xl text-ink-900">
          There&apos;s nothing to book yet — but we&apos;d like to hear from you
        </h1>
        <p className="mt-4 text-ink-700">
          {site.name} hasn&apos;t opened, and zoning for the site isn&apos;t
          confirmed yet, so we can&apos;t take bookings or deposits. What we
          can do is keep a list of everyone interested and reach out as plans
          firm up — expect {timeline.bestCase.toLowerCase()}, or{" "}
          {timeline.worstCase.toLowerCase()}.
        </p>
      </div>
      <InterestForm />
    </section>
  );
}
