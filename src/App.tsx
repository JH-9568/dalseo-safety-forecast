import { useEffect, useMemo, useRef, useState } from 'react';
import { AiPipelineHighlights } from './components/AiPipelineHighlights';
import { DataFlow } from './components/DataFlow';
import { DashboardSummary } from './components/DashboardSummary';
import { DepartmentBoard } from './components/DepartmentBoard';
import { FeatureCards } from './components/FeatureCards';
import { FooterNotice } from './components/FooterNotice';
import { Hero } from './components/Hero';
import { PriorityForecast } from './components/PriorityForecast';
import { RiskCard } from './components/RiskCard';
import { RiskDetailPanel } from './components/RiskDetailPanel';
import { RiskFilters } from './components/RiskFilters';
import type { RiskType } from './data/riskForecasts';
import { riskForecasts } from './data/riskForecasts';
import { sortByRisk } from './lib/riskScoring';

export default function App() {
  const [selectedType, setSelectedType] = useState<'전체' | RiskType>('전체');
  const [selectedRisk, setSelectedRisk] = useState(riskForecasts[0]);
  const detailPanelRef = useRef<HTMLDivElement>(null);

  const filteredForecasts = useMemo(() => {
    const filtered = selectedType === '전체' ? riskForecasts : riskForecasts.filter((forecast) => forecast.type === selectedType);
    return sortByRisk(filtered);
  }, [selectedType]);

  useEffect(() => {
    if (!filteredForecasts.some((forecast) => forecast.id === selectedRisk.id)) {
      setSelectedRisk(filteredForecasts[0]);
    }
  }, [filteredForecasts, selectedRisk.id]);

  const handleRiskSelect = (forecast: typeof selectedRisk) => {
    setSelectedRisk(forecast);
    window.requestAnimationFrame(() => {
      detailPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Hero />
      <FeatureCards />

      <section id="dashboard" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold text-indigo-700">오늘의 생활안전 예보</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">오늘 위험한 곳과 대응 조치</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            AI가 위험 징후, 판단 근거, 부서별 우선 조치를 한 번에 정리합니다.
          </p>
        </div>

        <DashboardSummary />
        <PriorityForecast forecasts={sortByRisk(riskForecasts)} onSelect={handleRiskSelect} />
        <AiPipelineHighlights />

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
                onSelect={handleRiskSelect}
              />
            ))}
          </div>
          <div ref={detailPanelRef} className="scroll-mt-6">
            <RiskDetailPanel forecast={selectedRisk} />
          </div>
        </div>
      </section>

      <DepartmentBoard />
      <DataFlow />
      <FooterNotice />
    </main>
  );
}
