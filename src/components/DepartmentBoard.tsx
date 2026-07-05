const columns = [
  { title: '재난·안전', items: ['월성동 배수 취약구역 점검', '폭염 행동요령 안내'] },
  { title: '교통', items: ['상인동 하교 시간대 단속', '용산동 주차 안내'] },
  { title: '환경·청소', items: ['두류동 수거 동선 조정', '배수로 퇴적물 확인'] },
  { title: '공원·시설', items: ['본리동 공원 조명 점검', '야간 시설물 확인'] },
  { title: '복지', items: ['송현동 안부 확인', '무더위쉼터 안내'] },
];

export function DepartmentBoard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold text-indigo-700">부서 대응 보드</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">부서별 오늘의 선제 대응</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600">부서별로 오늘 먼저 볼 조치만 간결하게 정리합니다.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {columns.map((column) => (
          <article key={column.title} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="rounded-2xl bg-gradient-to-r from-slate-950 to-indigo-950 px-4 py-3 text-sm font-bold text-white">{column.title}</h3>
            <div className="mt-4 space-y-3">
              {column.items.map((item, index) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-bold leading-6 text-slate-700">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-black text-indigo-700">{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
