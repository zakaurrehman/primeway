import type { Metadata } from "next";
import { Target, Compass, ShieldCheck, Award, Building2, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Button from "@/components/Button";
import { stats, site, whyUs } from "@/lib/site";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Prime Way Capital (Private) Limited is an SECP-registered investment and commodity futures firm based in Lahore, committed to transparent, disciplined and people-first trading.",
};

const values = [
  { icon: Target, title: "Integrity First", desc: "We do right by our clients — honest pricing, honest advice, every time." },
  { icon: ShieldCheck, title: "Compliance by Default", desc: "Operating within SECP frameworks with disciplined governance and controls." },
  { icon: TrendingUp, title: "Performance Driven", desc: "We obsess over execution quality and helping clients reach their goals." },
  { icon: Compass, title: "Client Guidance", desc: "Real human support and education at every step of the journey." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="Who we are"
        title={<>A regulated partner for <span className="text-gradient-gold">Pakistan&apos;s investors</span></>}
        subtitle="Prime Way Capital was founded on a simple belief: world-class trading should be transparent, accessible and supported by people who genuinely care."
      />

      {/* Intro / story */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-current" /> Our story
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">
              Built to make markets work for you
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                {site.legalName} is an investment and commodity futures firm
                headquartered in Lahore. We were established to give Pakistani
                investors a trustworthy, technology-driven gateway to both local
                and global markets.
              </p>
              <p>
                Through our PMEX-linked infrastructure, clients trade metals,
                energy, agriculture and financial futures — backed by sharp
                research, fast execution and a relationship manager who knows
                their goals.
              </p>
              <p>
                {site.regNote} Everything we do is grounded in transparency,
                discipline and a long-term commitment to our clients&apos; success.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" arrow>Talk to our team</Button>
              <Button href="/services" variant="outline">Our services</Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/15 to-gold-500/15 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: Building2, k: "Head office", v: "Valencia Town, Lahore" },
                  { icon: ShieldCheck, k: "Regulator", v: "SECP Pakistan" },
                  { icon: Award, k: "Incorporated", v: `Est. ${site.founded}` },
                  { icon: TrendingUp, k: "Market access", v: "22.5 hrs / day" },
                ].map((c, i) => (
                  <div
                    key={c.k}
                    className={`rounded-3xl border border-navy-800/10 bg-white p-6 shadow-card ${
                      i % 2 === 1 ? "mt-6" : ""
                    }`}
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-navy-800 text-white">
                      <c.icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">{c.k}</p>
                    <p className="font-display mt-1 text-base font-bold text-navy-900">{c.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-navy-950 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                <span className="text-gradient-gold">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
              </p>
              <p className="mt-2 text-sm font-medium text-sky-200/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-navy-800/10 bg-gradient-to-br from-sky-100/60 to-white p-9">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white">
                <Target className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <h3 className="font-display mt-5 text-2xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                To empower every Pakistani investor with transparent, regulated
                and technology-driven access to the world&apos;s most important
                markets — supported by research and guidance they can trust.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-navy-800/10 bg-gradient-to-br from-navy-950 to-navy-800 p-9 text-white">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-500 text-navy-900">
                <Compass className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <h3 className="font-display mt-5 text-2xl font-bold">Our Vision</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-sky-100/85">
                To become Pakistan&apos;s most trusted name in commodity and
                financial futures — known for integrity, innovation and an
                unwavering commitment to client success.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sky-100/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our values"
            title={<>The principles we <span className="text-gradient">trade by</span></>}
            subtitle="Four commitments that shape every decision, every trade and every conversation."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card-hover h-full rounded-3xl border border-navy-800/10 bg-white p-7 shadow-card">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-navy-700 text-white">
                    <v.icon className="h-7 w-7" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us reused */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The Prime Way advantage"
            title={<>Why clients choose <span className="text-gradient">Prime Way Capital</span></>}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-navy-800/10 bg-white p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-sky-100/40">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={w.icon} className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
