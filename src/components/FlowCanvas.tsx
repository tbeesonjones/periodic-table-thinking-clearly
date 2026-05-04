import { useCallback, useRef } from 'react';
import {
  ReactFlow,
  Controls,
  type Node,
  type Edge,
  type NodeMouseHandler,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { BiasNode } from './BiasNode';
import { CategoryLabel } from './CategoryLabel';
import { BrainBackgroundNode } from './BrainBackground';
import { HeaderNode } from './HeaderNode';
import type { Bias } from '../data/biases';

const nodeTypes = {
  biasNode: BiasNode,
  categoryLabel: CategoryLabel,
  brainBackground: BrainBackgroundNode,
  headerNode: HeaderNode,
};

interface FlowCanvasProps {
  nodes: Node[];
  edges: Edge[];
  onBiasClick: (bias: Bias) => void;
}

export function FlowCanvas({ nodes, edges, onBiasClick }: FlowCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNodeClick: NodeMouseHandler = useCallback(
    (_event, node) => {
      if (node.type !== 'biasNode') return;
      const bias = (node.data as { bias: Bias }).bias;
      onBiasClick(bias);
    },
    [onBiasClick],
  );

  return (
    <div ref={containerRef} className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        minZoom={0.1}
        maxZoom={2}
        panOnScroll
        zoomOnPinch
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Controls position="bottom-right" showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
