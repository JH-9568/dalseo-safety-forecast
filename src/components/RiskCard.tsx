import { ArrowRight, CheckCircle2, Clock, Lightbulb, MapPin } from 'lucide-react';
import type { RiskForecast } from '../data/riskForecasts';
import { getRiskTone, levelBadgeClass } from '../lib/riskScoring';

type Props = {
  forecast: RiskForecast;
  selected: boolean;
  onSelect: (forecast: RiskForecast) => void;
};

export function RiskCard({ forecast, selected, onSelect }: Props) {
  return (
    <article className={'rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft ' + (selected ? 'border-indigo-300 ring-2 ring-indigo-100' : 'border-slate-200')}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <MapPin className="h-4 w-4" /> {forecast.area}
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">{forecast.type}</h3>
        </div>
        <span className={'rounded-full px-4 py-2 text-sm font-black ring-1 shadow-sm ' + levelBadgeClass[forecast.level]}>{forecast.level}</span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-600">
        <Clock className="h-4 w-4 text-indigo-500" /> {forecast.expectedTime}
      </div>

      <div className={'mt-5 rounded-2xl border p-4 shadow-sm ' + getRiskTone(forecast.level)}>
        <p className="flex items-center gap-2 text-sm font-black text-slate-900">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm">
            <Lightbulb className="h-4 w-4" />
          </span>
          AI 분석 근거
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
          {forecast.reasons.map((reason) => (
            <li key={reason} className="flex gap-2 rounded-xl bg-white/70 px-3 py-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <p className="text-sm font-bold text-slate-800">추천 조치</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {forecast.actions.map((action) => (
            <span key={action} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 ring-1 ring-indigo-100">
              {action}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-slate-500">
        담당 분야: {forecast.departments.join(' / ')}
      </div>
      <button
        type="button"
        onClick={() => onSelect(forecast)}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
      >
        AI 대응 보기
        <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}
