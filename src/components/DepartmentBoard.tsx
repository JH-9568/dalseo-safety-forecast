const columns = [
  { title: '재난·안전', items: ['월성동 배수 취약구역 사전 점검', '폭염 행동요령 안내 검토', '이곡동 출근길 보행 안전 안내'] },
  { title: '교통', items: ['상인동 학교 앞 하교 시간대 단속 강화', '용산동 상가 밀집구역 주차 안내', '도시철도역 주변 혼잡 시간대 점검'] },
  { title: '환경·청소', items: ['두류동 무단투기 예상 구역 수거 동선 조정', '월성동 배수로 주변 퇴적물 확인'] },
  { title: '공원·시설', items: ['본리동 어린이공원 조명 작동 확인', '야간 이용 시설물 안전 점검'] },
  { title: '복지', items: ['송현동 취약계층 안부 확인', '무더위쉼터 이용 안내 발송'] },
];

export function DepartmentBoard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold text-indigo-700">Department Response Board</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">부서별 오늘의 선제 대응</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600">AI가 위험 예보를 담당 분야별 업무 후보로 정리해 현장 대응 우선순위를 빠르게 공유합니다.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-5">
        {columns.map((column) => (
          <article key={column.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="rounded-xl bg-slate-950 px-3 py-2 text-sm font-bold text-white">{column.title}</h3>
            <div className="mt-4 space-y-3">
              {column.items.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium leading-6 text-slate-700">
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

