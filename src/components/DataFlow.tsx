import { ArrowDown } from 'lucide-react';

const steps = [
  '민원·안전신고·날씨·교통·환경 데이터 수집',
  'AI 위험 유형 분류',
  '지역·시간대별 위험도 예측',
  '위험 예보 카드 생성',
  '부서별 대응 우선순위 추천',
  '주민 안내문 및 점검 체크리스트 생성',
  '담당 부서 확인 후 선제 대응',
];

export function DataFlow() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold text-indigo-700">Data & AI Flow</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">제안서용 서비스 흐름도</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">실제 개인정보나 실데이터 없이, 시제품 화면에서는 가상 데이터와 규칙 기반 AI 시뮬레이션으로 흐름을 보여줍니다.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-7 md:items-stretch">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-3 md:flex-col">
              <div className="flex min-h-28 flex-1 items-center rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-bold leading-6 text-slate-800">
                {step}
              </div>
              {index < steps.length - 1 && <ArrowDown className="h-5 w-5 shrink-0 text-indigo-500 md:rotate-[-90deg]" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

