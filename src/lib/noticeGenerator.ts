import type { RiskForecast } from '../data/riskForecasts';

export function generateResidentNotice(forecast: RiskForecast) {
  return forecast.residentNotice;
}

export function generateChecklist(forecast: RiskForecast) {
  return forecast.checklist;
}

