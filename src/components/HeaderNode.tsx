import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';

function HeaderNodeComponent({ data }: NodeProps) {
  const { contentWidth } = data as unknown as { contentWidth: number };

  return (
    <div
      className="flex flex-col items-center justify-center text-center select-none"
      style={{ width: contentWidth }}
    >
      <h1 className="text-4xl text-slate-800 tracking-tight leading-tight">
        <span style={{ fontStyle: 'italic' }}>The Art of Thinking Clearly</span>
        {' '}by Rolf Dobelli: an Infographic
      </h1>
      <p className="text-sm text-slate-400 mt-3">
        Produced without permission &bull; Tim Beeson-Jones
      </p>
    </div>
  );
}

export const HeaderNode = memo(HeaderNodeComponent);
