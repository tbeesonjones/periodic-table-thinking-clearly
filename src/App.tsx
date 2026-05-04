import { useState, useMemo, useCallback } from 'react';
import { ReactFlowProvider, useReactFlow } from '@xyflow/react';
import { FlowCanvas } from './components/FlowCanvas';
import { BiasModal } from './components/BiasModal';
import { Legend } from './components/Legend';
import { SearchBar } from './components/SearchBar';
import { biases, biasMap } from './data/biases';
import { generateLayout } from './utils/layout';
import type { Bias } from './data/biases';

function AppInner() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBias, setSelectedBias] = useState<Bias | null>(null);
  const { setCenter } = useReactFlow();

  const { nodes, edges } = useMemo(() => generateLayout(biases), []);

  const biasNodeCount = nodes.filter((n) => n.type === 'biasNode').length;
  const matchCount = useMemo(() => {
    if (!searchQuery.trim()) return biasNodeCount;
    const q = searchQuery.toLowerCase();
    return biases.filter((b) => b.name.toLowerCase().includes(q)).length;
  }, [searchQuery, biasNodeCount]);

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
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        resultCount={matchCount}
        totalCount={biasNodeCount}
      />
      <Legend />
      <FlowCanvas
        nodes={nodes}
        edges={edges}
        searchQuery={searchQuery}
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
