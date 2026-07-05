import { FileSearch, Megaphone, Route, WandSparkles } from 'lucide-react';

const features = [
  {
    title: 'AI 위험 예측',
    description: '과거 민원 패턴과 날씨·시간대 데이터를 분석해 생활위험을 사전에 감지합니다.',
    icon: WandSparkles,
  },
  {
    title: '설명 가능한 근거',
    description: 'AI가 왜 위험하다고 판단했는지 근거를 함께 제시합니다.',
    icon: FileSearch,
  },
  {
    title: '부서별 대응 추천',
    description: '교통, 재난·안전, 환경·청소, 공원·시설 분야별 우선 조치를 제안합니다.',
    icon: Route,
  },
  {
    title: '주민 안내문 생성',
    description: '위험 유형에 맞는 주민 안내문과 현장 점검 체크리스트를 자동 생성합니다.',
    icon: Megaphone,
  },
];

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-bold text-slate-950">{feature.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

