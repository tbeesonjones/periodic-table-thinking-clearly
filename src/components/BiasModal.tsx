import { useCallback } from 'react';
import type { Bias } from '../data/biases';
import { categories } from '../data/categories';
import { biasMap } from '../data/biases';

interface BiasModalProps {
  bias: Bias;
  onClose: () => void;
  onNavigate: (biasId: string) => void;
}

export function BiasModal({ bias, onClose, onNavigate }: BiasModalProps) {
  const category = categories[bias.category];

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-100 px-6 py-4 flex items-start justify-between">
          <div>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: category.bgColor, color: category.color }}
            >
              {category.name}
            </span>
            <h2 className="text-xl font-bold text-gray-900 mt-1">
              Ch. {bias.chapter}: {bias.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none p-1"
          >
            &times;
          </button>
        </div>

        <div className="px-6 py-4 space-y-5">
          {/* Summary */}
          <div>
            <p className="text-gray-700 leading-relaxed">{bias.summary}</p>
          </div>

          {/* Examples */}
          <Section title="Examples" color={category.color}>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              {bias.examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </Section>

          {/* Research */}
          <Section title="Research & Evidence" color={category.color}>
            <p className="text-gray-600 text-sm">{bias.research}</p>
          </Section>

          {/* Defense */}
          <Section title="Guard Against It" color={category.color}>
            <p className="text-gray-600 text-sm">{bias.defense}</p>
          </Section>

          {/* Related Biases */}
          {bias.relatedBiasIds.length > 0 && (
            <Section title="Related Biases" color={category.color}>
              <div className="flex flex-wrap gap-2">
                {bias.relatedBiasIds.map((id) => {
                  const related = biasMap.get(id);
                  if (!related) return null;
                  const relCat = categories[related.category];
                  return (
                    <button
                      key={id}
                      onClick={() => onNavigate(id)}
                      className="text-xs px-3 py-1.5 rounded-full border cursor-pointer
                                 hover:shadow-sm transition-shadow"
                      style={{
                        backgroundColor: relCat.bgColor,
                        borderColor: relCat.borderColor,
                        color: relCat.color,
                      }}
                    >
                      {related.name}
                    </button>
                  );
                })}
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2" style={{ color }}>
        {title}
      </h3>
      {children}
    </div>
  );
}
