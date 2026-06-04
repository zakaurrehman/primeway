import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import MarketsGrid from "@/components/MarketsGrid";
import FAQ from "@/components/FAQ";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { stats, steps, whyUs, testimonials, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker dark />

      {/* Stats */}
      <section className="relative border-b border-navy-800/10 bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl font-extrabold text-navy-900 sm:text-5xl">
                <span className="text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
              </p>
              <p className="mt-2 text-sm font-medium text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative bg-sky-100/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we do"
            title={<>Everything you need to <span className="text-gradient">trade & invest</span></>}
            subtitle="From commodity futures to managed portfolios, Prime Way Capital gives you a complete, regulated gateway to local and global markets."
          />
          <ServicesGrid detailed />
          <Reveal className="mt-12 text-center">
            <Button href="/services" variant="outline" arrow>
              View all services
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Markets */}
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            light
            eyebrow="Markets we cover"
            title={<>Trade the world&apos;s <span className="text-gradient-gold">most liquid markets</span></>}
            subtitle="Access metals, energy, agriculture and financial futures through our PMEX-linked infrastructure — all from a single account."
          />
          <MarketsGrid />
        </div>
      </section>

      {/* Why us */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Prime Way"
            title={<>Built on <span className="text-gradient">trust, speed</span> & transparency</>}
            subtitle="We combine institutional-grade technology with a people-first approach, so you always trade with clarity and confidence."
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

      {/* Process */}
      <section className="relative overflow-hidden bg-sky-100/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Getting started"
            title={<>Start trading in <span className="text-gradient">four simple steps</span></>}
            subtitle="From onboarding to your first trade, our team guides you the whole way."
          />
          <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent lg:block" />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="font-display grid h-18 w-18 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-navy-800 text-2xl font-extrabold text-white shadow-lg ring-8 ring-sky-100/40">
                    {s.n}
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Client voices"
            title={<>Trusted by traders <span className="text-gradient">across Pakistan</span></>}
            subtitle="Real people, real goals — supported by a team that genuinely cares."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="card-hover flex h-full flex-col rounded-3xl border border-navy-800/10 bg-gradient-to-b from-sky-100/50 to-white p-7 shadow-card">
                  <Quote className="h-9 w-9 text-brand-500/40" />
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-800">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-navy-800/10 pt-5">
                    <p className="font-display font-bold text-navy-900">{t.name}</p>
                    <p className="text-sm text-muted">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-sky-100/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Questions, answered"
            title={<>Frequently asked <span className="text-gradient">questions</span></>}
            subtitle="Everything you need to know before getting started. Still curious? Our team is one message away."
          />
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden mesh-hero py-24">
        <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Take the prime way to your financial goals.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-100/85">
              Join Prime Way Capital today and trade with a regulated, transparent
              partner that puts your success first.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="gold" size="lg" arrow>
                Open Your Account
              </Button>
              <Link
                href={site.whatsapp}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                Chat on WhatsApp <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
