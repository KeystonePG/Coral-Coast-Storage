import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-sand-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <svg viewBox="0 0 100 60" className="h-9 w-14">
            <rect x="20" y="10" width="60" height="47" rx="8" fill="none" stroke="var(--color-teal-500)" strokeWidth="3" />
            <line x1="20" y1="27" x2="80" y2="27" stroke="var(--color-teal-500)" strokeWidth="2" />
            <line x1="20" y1="42" x2="80" y2="42" stroke="var(--color-teal-500)" strokeWidth="2" />
            <circle cx="50" cy="10" r="5" fill="var(--color-coral-500)" />
          </svg>
          <span className="leading-none">
            <span className="block font-display text-lg text-teal-700">
              Coral Coast
            </span>
            <span className="eyebrow">Self Storage</span>
          </span>
        </Link>
        <nav className="hidden gap-6 lg:flex">
          <Link href="/what-we-offer" className="eyebrow text-ink-700 hover:text-coral-600">
            What We Offer
          </Link>
          <Link href="/about" className="eyebrow text-ink-700 hover:text-coral-600">
            About Us
          </Link>
          <Link href="/enquire" className="eyebrow text-ink-700 hover:text-coral-600">
            Enquire
          </Link>
        </nav>
        <Link
          href="/enquire"
          className="shrink-0 rounded-full bg-coral-500 px-4 py-2 text-sm font-medium text-sand-50 transition hover:bg-coral-600 sm:px-5"
        >
          Register interest
        </Link>
      </div>
    </header>
  );
}
