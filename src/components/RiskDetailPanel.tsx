import { CheckCircle2, ClipboardCheck, Megaphone, Sparkles } from 'lucide-react';
import { useState } from 'react';
import type { RiskForecast } from '../data/riskForecasts';
import { generateChecklist, generateResidentNotice } from '../lib/noticeGenerator';
import { levelBadgeClass } from '../lib/riskScoring';

type Props = {
  forecast: RiskForecast;
};

export function RiskDetailPanel({ forecast }: Props) {
  const [showNotice, setShowNotice] = useState(true);
  const [showChecklist, setShowChecklist] = useState(true);
  const notice = generateResidentNotice(forecast);
  const checklist = generateChecklist(forecast);

  return (
    <aside className="sticky top-6 rounded-3xl border border-indigo-100 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-1 shadow-soft">
      <div className="rounded-[1.35rem] bg-white/95 p-6 backdrop-blur-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold text-indigo-700">
              <Sparkles className="h-4 w-4" /> AI 대응 요약
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">{forecast.area}</h3>
          </div>
          <span className={'rounded-full px-4 py-2 text-sm font-black ring-1 shadow-sm ' + levelBadgeClass[forecast.level]}>{forecast.level}</span>
        </div>

        <div className="mt-6 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-4">
          <p className="text-sm font-black text-slate-900">왜 위험한가?</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            {forecast.reasons.map((reason) => (
              <li key={reason} className="flex gap-2 rounded-xl bg-white/80 px-3 py-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-sm font-bold text-slate-800">담당 분야</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {forecast.departments.map((department) => (
              <span key={department} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 ring-1 ring-indigo-100">
                {department}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setShowNotice((value) => !value)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-indigo-200 hover:text-indigo-700"
          >
            <Megaphone className="h-4 w-4" /> 주민 안내문 생성
          </button>
          <button
            type="button"
            onClick={() => setShowChecklist((value) => !value)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
          >
            <ClipboardCheck className="h-4 w-4" /> 부서 대응 체크리스트 보기
          </button>
        </div>

        {showChecklist && (
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-black text-slate-900">우선 대응 체크리스트</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              {checklist.map((item) => (
                <li key={item} className="flex gap-2 rounded-xl bg-slate-50 px-3 py-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {showNotice && (
          <div className="mt-5 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-indigo-50 p-4">
            <p className="text-sm font-black text-violet-800">주민 안내문</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">“{notice}”</p>
          </div>
        )}
      </div>
    </aside>
  );
}
