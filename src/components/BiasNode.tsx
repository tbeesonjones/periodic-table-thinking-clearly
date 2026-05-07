import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { Category } from '../data/categories';
import type { Bias } from '../data/biases';

type BiasNodeData = {
  label: string;
  category: Category;
  bias: Bias;
  symbol: string;
  number: number;
};

function BiasNodeComponent({ data }: NodeProps) {
  const { label, category, symbol, number } = data as unknown as BiasNodeData;

  return (
    <>
      <Handle type="target" position={Position.Top} className="!opacity-0 !w-1 !h-1" />
      <div
        className="rounded-md cursor-pointer select-none
                   transition-all duration-150 hover:scale-105 hover:shadow-lg
                   border-2 flex flex-col items-center justify-center"
        style={{
          backgroundColor: category.bgColor,
          borderColor: category.borderColor,
          color: category.color,
          width: 90,
          height: 90,
        }}
      >
        <span className="text-[9px] font-medium opacity-60 leading-none">{number}</span>
        <span className="text-xl font-bold leading-none mt-0.5">{symbol}</span>
        <span
          className="text-[8px] font-medium leading-tight mt-1 px-1 text-center"
          style={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {label}
        </span>
      </div>
      <Handle type="source" position={Position.Bottom} className="!opacity-0 !w-1 !h-1" />
    </>
  );
}

export const BiasNode = memo(BiasNodeComponent);
