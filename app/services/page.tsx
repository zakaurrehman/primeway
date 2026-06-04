import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commodity futures brokerage, currency & index trading, portfolio management, research, risk advisory and managed accounts — a complete, regulated trading partner.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="What we offer"
        title={<>Complete solutions to <span className="text-gradient-gold">trade & grow</span></>}
        subtitle="Whether you're an active trader or a long-term investor, our services are designed to give you an edge — with transparency at every step."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our services"
            title={<>A full-service <span className="text-gradient">trading partner</span></>}
            subtitle="Six core offerings, one seamless experience — all backed by sharp research and people-first support."
          />
          <ServicesGrid detailed />
        </div>
      </section>

      {/* Process */}
      <section className="bg-sky-100/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How it works"
            title={<>Your journey, <span className="text-gradient">simplified</span></>}
            subtitle="Onboarding is quick and fully guided — you could be trading within days."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative h-full rounded-3xl border border-navy-800/10 bg-white p-7 shadow-card">
                  <span className="font-display text-5xl font-extrabold text-sky-200">{s.n}</span>
                  <h3 className="font-display mt-3 text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden mesh-hero py-20">
        <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Not sure which service fits you?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sky-100/85">
              Speak with a Prime Way advisor and we&apos;ll tailor a plan around
              your goals, capital and risk appetite.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="gold" size="lg" arrow>Book a free consultation</Button>
              <Button href="/markets" variant="ghost" size="lg">See the markets</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
