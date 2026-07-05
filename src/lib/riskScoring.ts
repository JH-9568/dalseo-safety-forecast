import type { RiskForecast, RiskLevel } from '../data/riskForecasts';

export const levelRank: Record<RiskLevel, number> = {
  안정: 0,
  관심: 1,
  주의: 2,
  위험: 3,
};

export const levelBadgeClass: Record<RiskLevel, string> = {
  안정: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  관심: 'bg-sky-50 text-sky-700 ring-sky-200',
  주의: 'bg-amber-50 text-amber-700 ring-amber-200',
  위험: 'bg-rose-50 text-rose-700 ring-rose-200',
};

export function sortByRisk(forecasts: RiskForecast[]) {
  return [...forecasts].sort((a, b) => levelRank[b.level] - levelRank[a.level]);
}

export function getRiskTone(level: RiskLevel) {
  if (level === '위험') return 'border-rose-200 bg-rose-50/50';
  if (level === '주의') return 'border-amber-200 bg-amber-50/40';
  if (level === '관심') return 'border-sky-200 bg-sky-50/40';
  return 'border-emerald-200 bg-emerald-50/40';
}

