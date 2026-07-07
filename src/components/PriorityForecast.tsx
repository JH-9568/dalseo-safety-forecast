import { ArrowRight, Flame, MapPin, Sparkles } from 'lucide-react';
import type { RiskForecast } from '../data/riskForecasts';
import { levelBadgeClass } from '../lib/riskScoring';

type Props = {
  forecasts: RiskForecast[];
  onSelect: (forecast: RiskForecast) => void;
};

export function PriorityForecast({ forecasts, onSelect }: Props) {
  const topForecasts = forecasts.slice(0, 3);

  return (
    <section className="mt-8 rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 p-1 shadow-soft">
      <div className="rounded-[1.8rem] bg-slate-950/70 p-5 text-white backdrop-blur lg:p-6">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-indigo-100 ring-1 ring-white/15">
              <Flame className="h-4 w-4 text-amber-300" /> 오늘 우선 대응 TOP 3
            </div>
            <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">지금 먼저 봐야 할 생활위험</h3>
          </div>
          <p className="max-w-xl text-sm leading-6 text-indigo-100/85">AI가 위험도, 시간대, 반복 민원 신호를 종합해 오늘의 대응 우선순위를 정렬했습니다.</p>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {topForecasts.map((forecast, index) => (
            <button
              key={forecast.id}
              type="button"
              onClick={() => onSelect(forecast)}
              className="group rounded-3xl border border-white/10 bg-white/[0.07] p-4 text-left shadow-sm transition hover:-translate-y-1 hover:bg-white/[0.11]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-lg font-black text-slate-950">{index + 1}</div>
                <span className={'rounded-full px-3 py-1 text-xs font-black ring-1 ' + levelBadgeClass[forecast.level]}>{forecast.level}</span>
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-indigo-100/80">
                <MapPin className="h-4 w-4" /> {forecast.area}
              </p>
              <p className="mt-2 text-xl font-black tracking-tight text-white">{forecast.type}</p>
              <p className="mt-2 text-sm font-semibold text-indigo-100/80">{forecast.expectedTime}</p>
              <div className="mt-4 rounded-2xl bg-white/10 p-3">
                <p className="flex items-center gap-2 text-sm font-bold text-white">
                  <Sparkles className="h-4 w-4 text-violet-200" /> {forecast.actions[0]}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-indigo-100 transition group-hover:text-white">
                AI 대응 열기 <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

