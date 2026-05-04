import { useMemo, useCallback, useState } from 'react';
import { ReactFlowProvider, useReactFlow } from '@xyflow/react';
import { FlowCanvas } from './components/FlowCanvas';
import { BiasModal } from './components/BiasModal';
import { biases, biasMap } from './data/biases';
import { generateLayout } from './utils/layout';
import type { Bias } from './data/biases';

function AppInner() {
  const [selectedBias, setSelectedBias] = useState<Bias | null>(null);
  const { setCenter } = useReactFlow();

  const { nodes, edges } = useMemo(() => generateLayout(biases), []);

  const handleBiasClick = useCallback((bias: Bias) => {
    setSelectedBias(bias);
  }, []);

  const handleNavigate = useCallback(
    (biasId: string) => {
      const bias = biasMap.get(biasId);
      if (!bias) return;

      const node = nodes.find((n) => n.id === biasId);
      if (node) {
        setCenter(node.position.x + 90, node.position.y + 20, { zoom: 1.2, duration: 500 });
      }

      setSelectedBias(bias);
    },
    [nodes, setCenter],
  );

  const handleCloseModal = useCallback(() => {
    setSelectedBias(null);
  }, []);

  return (
    <div className="w-full h-full relative">
      <FlowCanvas
        nodes={nodes}
        edges={edges}
        onBiasClick={handleBiasClick}
      />
      {selectedBias && (
        <BiasModal
          bias={selectedBias}
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <ReactFlowProvider>
      <AppInner />
    </ReactFlowProvider>
  );
}

export default App;
