import type { RiskType } from '../data/riskForecasts';
import { riskTypes } from '../data/riskForecasts';

type Props = {
  selected: '전체' | RiskType;
  onSelect: (type: '전체' | RiskType) => void;
};

export function RiskFilters({ selected, onSelect }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {riskTypes.map((type) => {
        const active = selected === type;
        return (
          <button
            key={type}
            type="button"
            onClick={() => onSelect(type)}
            className={
              'whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ' +
              (active
                ? 'border-slate-950 bg-slate-950 text-white shadow-sm'
                : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-700')
            }
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}

