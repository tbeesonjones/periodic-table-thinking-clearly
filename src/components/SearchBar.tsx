interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
}

export function SearchBar({ value, onChange, resultCount, totalCount }: SearchBarProps) {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
      <div className="bg-white/90 backdrop-blur rounded-xl border border-gray-200 shadow-lg px-4 py-2 flex items-center gap-3">
        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search biases..."
          className="bg-transparent border-none outline-none text-sm text-gray-800 w-56 placeholder:text-gray-400"
        />
        {value && (
          <span className="text-xs text-gray-400 whitespace-nowrap">
            {resultCount} / {totalCount}
          </span>
        )}
      </div>
    </div>
  );
}
