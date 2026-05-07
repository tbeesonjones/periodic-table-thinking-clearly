import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';

type CategoryLabelData = {
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
};

function CategoryLabelComponent({ data }: NodeProps) {
  const { label, color, bgColor, borderColor } = data as unknown as CategoryLabelData;

  return (
    <div className="flex items-center gap-2 select-none">
      <div
        className="w-4 h-4 rounded-sm border-2 shrink-0"
        style={{ backgroundColor: bgColor, borderColor }}
      />
      <span className="text-xs font-semibold whitespace-nowrap" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

export const CategoryLabel = memo(CategoryLabelComponent);
