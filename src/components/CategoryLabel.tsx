import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';

type CategoryLabelData = {
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  width: number;
  height: number;
};

function CategoryLabelComponent({ data }: NodeProps) {
  const { label, color, bgColor, borderColor, width, height } = data as unknown as CategoryLabelData;

  return (
    <div
      className="rounded-xl border-2 border-dashed"
      style={{
        width,
        height,
        backgroundColor: `${bgColor}80`,
        borderColor: borderColor,
      }}
    >
      <div
        className="text-sm font-bold px-3 py-1.5 rounded-tl-lg rounded-br-lg inline-block"
        style={{ backgroundColor: color, color: 'white' }}
      >
        {label}
      </div>
    </div>
  );
}

export const CategoryLabel = memo(CategoryLabelComponent);
