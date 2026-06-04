import type { Metadata } from "next";
import { Clock, ShieldCheck, Globe2, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import MarketsGrid from "@/components/MarketsGrid";
import Ticker from "@/components/Ticker";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Trade metals, energy, agriculture and financial futures — gold, silver, crude oil, copper, natural gas, cotton, currencies and global indices via PMEX-linked infrastructure.",
};

const highlights = [
  { icon: Clock, title: "22.5 hours a day", desc: "Near round-the-clock access to global market sessions." },
  { icon: ShieldCheck, title: "Regulated venue", desc: "Trade through PMEX — Pakistan's only licensed commodity exchange." },
  { icon: Globe2, title: "Local & global", desc: "One account spanning Pakistani and international markets." },
  { icon: Zap, title: "Fast execution", desc: "Low-latency order routing for tight, reliable fills." },
];

export default function MarketsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Markets"
        eyebrow="Markets we cover"
        title={<>Trade the world&apos;s <span className="text-gradient-gold">most liquid markets</span></>}
        subtitle="From gold and crude oil to the S&P 500, access a diverse universe of futures and financial instruments — all from a single, regulated account."
      />

      <Ticker />

      {/* Asset classes */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            light
            eyebrow="Asset classes"
            title={<>Four asset classes, <span className="text-gradient-gold">one platform</span></>}
            subtitle="Diversify across metals, energy, agriculture and financial futures to build a resilient, opportunity-rich portfolio."
          />
          <MarketsGrid />
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why trade with us"
            title={<>A trading experience <span className="text-gradient">built to perform</span></>}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="card-hover h-full rounded-3xl border border-navy-800/10 bg-gradient-to-b from-sky-100/50 to-white p-7 shadow-card">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-navy-800 text-white">
                    <h.icon className="h-7 w-7" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-navy-900">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risk note + CTA */}
      <section className="bg-sky-100/40 py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-3xl border border-navy-800/10 bg-white p-9 text-center shadow-card">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Ready to access these markets?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                Open your account and start trading with a regulated, transparent
                partner. Our team will help you choose the markets that fit your
                strategy.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <Button href="/contact" arrow>Open Your Account</Button>
                <Button href="/services" variant="outline">Explore services</Button>
              </div>
              <p className="mx-auto mt-7 max-w-2xl text-xs leading-relaxed text-muted/80">
                Risk disclosure: Trading in futures and leveraged products
                carries a high level of risk and may not be suitable for all
                investors. You may lose more than your initial investment. Past
                performance is not indicative of future results.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
