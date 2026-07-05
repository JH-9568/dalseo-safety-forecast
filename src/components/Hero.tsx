import { ArrowRight, Brain, ShieldAlert, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.14),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.16),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1 text-sm font-semibold text-indigo-700 shadow-sm">
            <Sparkles className="h-4 w-4" /> 생활안전 AI 예보 대시보드
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            달서 AI 생활안전 예보관
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            AI가 민원·안전신고·날씨·교통·환경 데이터를 분석해 우리 동네 생활위험을 미리 예측합니다.
          </p>
          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-700">
            민원이 발생한 뒤 처리하는 행정에서, 위험이 커지기 전 예보하고 대응하는 선제형 공공서비스입니다.
          </p>
          <a
            href="#dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            오늘의 생활안전 예보 보기
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-soft backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">오늘의 생활안전 지수</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-6xl font-bold tracking-tight text-slate-950">72</span>
                  <span className="pb-2 text-xl font-semibold text-slate-400">/ 100</span>
                </div>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4 text-amber-700 ring-1 ring-amber-200">
                <ShieldAlert className="h-8 w-8" />
              </div>
            </div>
            <div className="mt-6 inline-flex rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700 ring-1 ring-amber-200">
              상태: 주의
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                ['고위험 예보', '3건'],
                ['예측 위험지역', '8곳'],
                ['AI 추천 조치', '12개'],
                ['분석 신뢰도', '86%'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700">
                <Brain className="h-4 w-4" /> AI 예측 요약
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                우천, 하교, 야간 배출 시간대가 겹치는 생활권을 우선 대응 대상으로 분류했습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

