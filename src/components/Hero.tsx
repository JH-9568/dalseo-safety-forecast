import { ArrowRight, Brain, Clock3, ShieldAlert, Sparkles, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,250,252,0.96)_0%,rgba(239,246,255,0.92)_44%,rgba(245,243,255,0.95)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1 text-sm font-semibold text-indigo-700 shadow-sm">
            <Sparkles className="h-4 w-4" /> 생활안전 AI 예보 대시보드
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            <span className="block">달서 AI 생활안전</span>
            <span className="block">예보관</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-slate-700">
            민원이 생기기 전에, AI가 동네 위험을 먼저 예보합니다.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            민원·안전신고·날씨·교통·환경 데이터를 분석해 오늘 위험한 지역, 판단 근거, 부서별 조치를 한 화면에 정리합니다.
          </p>
          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ['예측', '위험 지역 사전 감지'],
              ['근거', 'AI 판단 이유 공개'],
              ['대응', '부서별 조치 추천'],
            ].map(([label, text]) => (
              <div key={label} className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-bold text-indigo-600">{label}</p>
                <p className="mt-1 text-sm font-semibold leading-5 text-slate-800">{text}</p>
              </div>
            ))}
          </div>
          <a
            href="#dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            오늘의 생활안전 예보 보기
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-soft backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-slate-100 bg-gradient-to-br from-white via-white to-indigo-50/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">오늘의 생활안전 지수</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-7xl font-bold tracking-tight text-slate-950">72</span>
                  <span className="pb-2 text-xl font-semibold text-slate-400">/ 100</span>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-white p-4 text-amber-700 ring-1 ring-amber-200">
                <ShieldAlert className="h-8 w-8" />
              </div>
            </div>
            <div className="mt-5 inline-flex rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700 ring-1 ring-amber-200">
              상태: 주의
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                ['고위험 예보', '3건'],
                ['예측 위험지역', '8곳'],
                ['AI 추천 조치', '12개'],
                ['분석 신뢰도', '86%'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-xs font-semibold text-slate-500">{label}</p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700">
                <Brain className="h-4 w-4" /> AI 예측 요약
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                우천·하교·야간 배출 시간대를 분석해 우선 대응 지역을 선별했습니다.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white">
                <Zap className="h-4 w-4 text-indigo-200" /> 선제 대응
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
                <Clock3 className="h-4 w-4 text-indigo-600" /> 오늘 16시
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
