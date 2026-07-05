import { Activity, ClipboardList, MapPinned, Siren } from 'lucide-react';

const summary = [
  { label: '오늘의 생활안전 지수', value: '72 / 100', note: '주의', icon: Activity, tone: 'text-amber-700 bg-amber-50 ring-amber-200' },
  { label: '고위험 예보', value: '3건', note: '우선 대응', icon: Siren, tone: 'text-rose-700 bg-rose-50 ring-rose-200' },
  { label: '예측 위험지역', value: '8곳', note: '동네 단위', icon: MapPinned, tone: 'text-sky-700 bg-sky-50 ring-sky-200' },
  { label: 'AI 추천 조치', value: '12개', note: '부서 배정', icon: ClipboardList, tone: 'text-indigo-700 bg-indigo-50 ring-indigo-200' },
];

export function DashboardSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {summary.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{item.value}</p>
              </div>
              <div className={'rounded-xl p-3 ring-1 ' + item.tone}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-600">{item.note}</p>
          </article>
        );
      })}
    </div>
  );
}

