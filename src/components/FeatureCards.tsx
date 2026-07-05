import { FileSearch, Megaphone, Route, WandSparkles } from 'lucide-react';

const features = [
  {
    title: 'AI 위험 예측',
    description: '민원 패턴과 날씨·시간대를 결합해 위험 징후를 감지합니다.',
    icon: WandSparkles,
  },
  {
    title: '설명 가능한 근거',
    description: '위험 판단 이유를 함께 보여 담당자가 바로 검토합니다.',
    icon: FileSearch,
  },
  {
    title: '부서별 대응 추천',
    description: '교통, 안전, 환경, 복지 부서별 우선 조치를 제안합니다.',
    icon: Route,
  },
  {
    title: '주민 안내문 생성',
    description: '위험 유형별 안내문과 현장 체크리스트를 생성합니다.',
    icon: Megaphone,
  },
];

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
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
