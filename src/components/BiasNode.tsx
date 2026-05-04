import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { Category } from '../data/categories';
import type { Bias } from '../data/biases';

type BiasNodeData = {
  label: string;
  category: Category;
  bias: Bias;
};

function BiasNodeComponent({ data }: NodeProps) {
  const { label, category } = data as unknown as BiasNodeData;

  return (
    <>
      <Handle type="target" position={Position.Top} className="!opacity-0 !w-1 !h-1" />
      <div
        className="px-3 py-2 rounded-lg text-xs font-medium cursor-pointer select-none
                   transition-all duration-150 hover:scale-105 hover:shadow-md
                   border"
        style={{
          backgroundColor: category.bgColor,
          borderColor: category.borderColor,
          color: category.color,
          width: 180,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {label}
      </div>
      <Handle type="source" position={Position.Bottom} className="!opacity-0 !w-1 !h-1" />
    </>
  );
}

export const BiasNode = memo(BiasNodeComponent);
