import { Coins, Flame, Wheat, CandlestickChart } from "lucide-react";
import Reveal from "./Reveal";
import { markets } from "@/lib/site";

const icons = { Coins, Flame, Wheat, CandlestickChart };

export default function MarketsGrid() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {markets.map((m, i) => {
        const Ico = icons[m.icon as keyof typeof icons];
        return (
          <Reveal key={m.name} delay={i * 0.08}>
            <div className="card-hover group relative h-full overflow-hidden rounded-3xl border border-navy-800/10 bg-navy-950 p-6 text-white">
              <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" />
              <div className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${m.accent} opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60`} />
              <div className="relative">
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${m.accent} text-white shadow-lg`}>
                  <Ico className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">{m.name}</h3>
                <ul className="mt-4 space-y-2">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-sky-200/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
