import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';

function FooterNodeComponent({ data }: NodeProps) {
  const { contentWidth } = data as unknown as { contentWidth: number };

  return (
    <div
      className="flex flex-col items-center justify-center text-center select-none"
      style={{ width: contentWidth }}
    >
      <p className="text-sm text-slate-400 italic">
        Produced without permission
      </p>
      <p className="text-sm text-slate-500 mt-1">
        Tim Beeson-Jones
      </p>
    </div>
  );
}

export const FooterNode = memo(FooterNodeComponent);
