import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative isolate overflow-hidden mesh-hero pt-36 pb-20 sm:pt-40">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="flex items-center gap-1.5 text-sm text-sky-200/70">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white">{breadcrumb}</span>
        </nav>
        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-100 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          {eyebrow}
        </span>
        <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sky-100/85">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
