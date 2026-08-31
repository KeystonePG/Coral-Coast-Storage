import { officeHours, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-teal-900 px-6 py-16 text-sand-100 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
        <p className="font-display text-2xl text-sand-50">{site.name}</p>
        <p className="max-w-md text-sand-200">{site.location}</p>
        <p className="text-sm text-sand-200">
          Office hours: {officeHours.hours}, {officeHours.days}
        </p>
        <p className="mt-6 text-xs text-sand-300/70">
          &copy; {new Date().getFullYear()} {site.name} — a Keystone
          Property Group project, currently in planning
        </p>
      </div>
    </footer>
  );
}
