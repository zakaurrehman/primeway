import { TrendingUp, TrendingDown } from "lucide-react";
import { tickers } from "@/lib/site";

export default function Ticker({ dark = false }: { dark?: boolean }) {
  const row = [...tickers, ...tickers];
  return (
    <div
      className={`relative overflow-hidden border-y ${
        dark
          ? "border-white/10 bg-navy-900/60"
          : "border-navy-800/10 bg-white"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24"
        style={{
          background: dark
            ? "linear-gradient(90deg, var(--color-navy-950), transparent)"
            : "linear-gradient(90deg, #fff, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24"
        style={{
          background: dark
            ? "linear-gradient(270deg, var(--color-navy-950), transparent)"
            : "linear-gradient(270deg, #fff, transparent)",
        }}
      />
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-8 py-3.5 hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-2.5 whitespace-nowrap px-2">
            <span
              className={`text-xs font-bold tracking-wide ${
                dark ? "text-sky-200" : "text-navy-800"
              }`}
            >
              {t.sym}
            </span>
            <span
              className={`text-xs font-medium ${
                dark ? "text-white/70" : "text-muted"
              }`}
            >
              {t.price}
            </span>
            <span
              className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                dark
                  ? t.up
                    ? "bg-emerald-400/20 text-emerald-300 ring-1 ring-inset ring-emerald-400/30"
                    : "bg-rose-400/20 text-rose-300 ring-1 ring-inset ring-rose-400/30"
                  : t.up
                    ? "bg-emerald-500/12 text-emerald-600"
                    : "bg-rose-500/12 text-rose-600"
              }`}
            >
              {t.up ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {t.chg}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
