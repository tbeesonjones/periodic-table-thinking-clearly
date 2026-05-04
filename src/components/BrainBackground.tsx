import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';
import brainImage from '../assets/human-brain-anatomy-side-view-outlined-illustration-isolated-on-white-background-vector.jpg';

type BrainBackgroundData = {
  width: number;
  height: number;
};

function BrainBackgroundComponent({ data }: NodeProps) {
  const { width, height } = data as unknown as BrainBackgroundData;

  return (
    <div style={{ width, height }} className="pointer-events-none">
      <img
        src={brainImage}
        alt=""
        className="w-full h-full object-contain"
        style={{ opacity: 0.04, filter: 'grayscale(100%) brightness(0.8)' }}
      />
    </div>
  );
}

export const BrainBackgroundNode = memo(BrainBackgroundComponent);
