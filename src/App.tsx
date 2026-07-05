import { useMemo, useState } from 'react';
import { DataFlow } from './components/DataFlow';
import { DashboardSummary } from './components/DashboardSummary';
import { DepartmentBoard } from './components/DepartmentBoard';
import { FeatureCards } from './components/FeatureCards';
import { FooterNotice } from './components/FooterNotice';
import { Hero } from './components/Hero';
import { RiskCard } from './components/RiskCard';
import { RiskDetailPanel } from './components/RiskDetailPanel';
import { RiskFilters } from './components/RiskFilters';
import type { RiskType } from './data/riskForecasts';
import { riskForecasts } from './data/riskForecasts';
import { sortByRisk } from './lib/riskScoring';

export default function App() {
  const [selectedType, setSelectedType] = useState<'전체' | RiskType>('전체');
  const [selectedRisk, setSelectedRisk] = useState(riskForecasts[0]);

  const filteredForecasts = useMemo(() => {
    const filtered = selectedType === '전체' ? riskForecasts : riskForecasts.filter((forecast) => forecast.type === selectedType);
    return sortByRisk(filtered);
  }, [selectedType]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Hero />
      <FeatureCards />

      <section id="dashboard" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold text-indigo-700">Today Safety Forecast</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">오늘 어디가 위험하고, 왜 위험하고, 뭘 해야 하는지</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            민원 발생 후 처리하는 행정을 넘어, AI가 위험 징후를 먼저 포착하고 부서별 조치까지 추천합니다.
          </p>
        </div>

        <DashboardSummary />

        <div className="mt-8">
          <RiskFilters selected={selectedType} onSelect={setSelectedType} />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_420px]">
          <div className="grid gap-5 lg:grid-cols-2">
            {filteredForecasts.map((forecast) => (
              <RiskCard
                key={forecast.id}
                forecast={forecast}
                selected={forecast.id === selectedRisk.id}
                onSelect={setSelectedRisk}
              />
            ))}
          </div>
          <RiskDetailPanel forecast={selectedRisk} />
        </div>
      </section>

      <DepartmentBoard />
      <DataFlow />
      <FooterNotice />
    </main>
  );
}

