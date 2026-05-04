import { useCallback, useMemo, useRef } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  type Node,
  type Edge,
  type NodeMouseHandler,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { BiasNode } from './BiasNode';
import { CategoryLabel } from './CategoryLabel';
import type { Bias } from '../data/biases';

const nodeTypes = {
  biasNode: BiasNode,
  categoryLabel: CategoryLabel,
};

interface FlowCanvasProps {
  nodes: Node[];
  edges: Edge[];
  searchQuery: string;
  onBiasClick: (bias: Bias) => void;
}

export function FlowCanvas({ nodes, edges, searchQuery, onBiasClick }: FlowCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredNodes = useMemo(() => {
    if (!searchQuery.trim()) return nodes;

    const query = searchQuery.toLowerCase();
    return nodes.map((node) => {
      if (node.type === 'categoryLabel') return node;
      const matches = (node.data as { label: string }).label.toLowerCase().includes(query);
      return {
        ...node,
        style: {
          ...node.style,
          opacity: matches ? 1 : 0.15,
          transition: 'opacity 0.2s',
        },
      };
    });
  }, [nodes, searchQuery]);

  const filteredEdges = useMemo(() => {
    if (!searchQuery.trim()) return edges;
    const query = searchQuery.toLowerCase();
    const matchingIds = new Set(
      nodes
        .filter(
          (n) =>
            n.type === 'biasNode' &&
            (n.data as { label: string }).label.toLowerCase().includes(query),
        )
        .map((n) => n.id),
    );
    return edges.map((edge) => ({
      ...edge,
      style: {
        ...edge.style,
        opacity: matchingIds.has(edge.source) || matchingIds.has(edge.target) ? 0.5 : 0.05,
      },
    }));
  }, [edges, nodes, searchQuery]);

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
        nodes={filteredNodes}
        edges={filteredEdges}
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
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#e2e8f0" />
      </ReactFlow>
    </div>
  );
}
