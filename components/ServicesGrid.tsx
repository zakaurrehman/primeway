import { Check } from "lucide-react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { services } from "@/lib/site";

export default function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.07}>
          <article className="card-hover group relative h-full overflow-hidden rounded-3xl border border-navy-800/10 bg-white p-7 shadow-card">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-navy-700 text-white shadow-lg">
                <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <h3 className="font-display mt-5 text-xl font-bold text-navy-900">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.desc}</p>

              {detailed && (
                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-navy-800">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/12 text-emerald-600">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
