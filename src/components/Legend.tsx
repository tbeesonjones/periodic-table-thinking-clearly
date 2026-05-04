import { categoryList } from '../data/categories';

export function Legend() {
  return (
    <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur rounded-xl border border-gray-200 shadow-lg p-3">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Categories</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        {categoryList.map((cat) => (
          <div key={cat.id} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: cat.color }}
            />
            <span className="text-xs text-gray-600 whitespace-nowrap">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
