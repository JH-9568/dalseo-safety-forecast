import { Bot, GitBranch, MessageSquareText, ShieldCheck } from 'lucide-react';

const pipeline = [
  {
    title: '민원 문장 분류',
    description: '신고 내용을 침수, 주정차, 청소, 시설, 폭염 위험으로 자동 분류',
    icon: MessageSquareText,
  },
  {
    title: '위험도 예측',
    description: '지역·시간대·날씨·반복 신고를 결합해 위험 점수 산출',
    icon: Bot,
  },
  {
    title: '대응 자동 생성',
    description: '부서별 조치, 주민 안내문, 현장 체크리스트를 즉시 제안',
    icon: GitBranch,
  },
];

export function AiPipelineHighlights() {
  return (
    <section className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-sm">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-indigo-700">AI 활용 핵심</p>
            <h3 className="text-2xl font-black tracking-tight text-slate-950">민원 기록을 위험 예측 신호로 전환</h3>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
          신고가 접수된 뒤 처리하는 화면이 아니라, 반복 민원과 외부 데이터를 연결해 위험을 먼저 발견하는 예방 행정 대시보드입니다.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {pipeline.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
                <Icon className="h-5 w-5 text-indigo-700" />
                <h4 className="mt-3 text-base font-black text-slate-950">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-5 shadow-sm lg:p-6">
        <p className="text-sm font-bold text-violet-700">공공 AI 안전장치</p>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">가상 데이터 기반 시제품</h3>
        <div className="mt-5 space-y-3 text-sm font-bold text-slate-700">
          <div className="rounded-2xl bg-white p-4 ring-1 ring-violet-100">실제 개인정보 미사용</div>
          <div className="rounded-2xl bg-white p-4 ring-1 ring-violet-100">AI 자동처분 금지</div>
          <div className="rounded-2xl bg-white p-4 ring-1 ring-violet-100">담당자 최종 확인 후 대응</div>
        </div>
      </div>
    </section>
  );
}

