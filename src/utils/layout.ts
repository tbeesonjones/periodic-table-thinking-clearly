import type { Node, Edge } from '@xyflow/react';
import type { Bias } from '../data/biases';
import { categories, type CategoryId } from '../data/categories';

const CELL_SIZE = 90;
const CELL_GAP = 8;
const CELL_STEP = CELL_SIZE + CELL_GAP;

// Periodic table has 18 columns and 7 main rows + 2 lanthanide/actinide rows
// We'll use 18 columns and fill biases into a periodic-table-shaped grid
// Row shapes (which columns are filled) — mimicking the real periodic table
const TABLE_ROWS: number[][] = [
  [0, 17],                                                          // Row 1: 2 elements
  [0, 1, 12, 13, 14, 15, 16, 17],                                  // Row 2: 8 elements
  [0, 1, 12, 13, 14, 15, 16, 17],                                  // Row 3: 8 elements
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], // Row 4: 18 elements
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], // Row 5: 18 elements
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], // Row 6: 18 elements
  [0, 1, 2, 3, 4, 5, 6, 7, 8],                                     // Row 7: 9 elements (partial)
  // Separated rows (lanthanides/actinides equivalent)
  [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],              // Row 8: 14 elements
  [3, 4, 5, 6, 7],                                                   // Row 9: 5 elements
];
// Total slots: 2 + 8 + 8 + 18 + 18 + 18 + 9 + 14 + 5 = 100 (we have 99 biases)

const LANTHANIDE_GAP = 30; // extra vertical gap before the separated rows

// Generate a short "element symbol" from a bias name
function makeSymbol(name: string): string {
  // Take meaningful initials, up to 2-3 chars
  const words = name.replace(/[^a-zA-Z\s]/g, '').split(/\s+/).filter(Boolean);
  if (words.length === 1) {
    return words[0].substring(0, 2);
  }
  // Use first letter of first two significant words
  const skip = new Set(['of', 'the', 'and', 'to', 'in', 'a', 'an', 'or', 'for', 'with']);
  const significant = words.filter(w => !skip.has(w.toLowerCase()));
  if (significant.length >= 2) {
    return (significant[0][0] + significant[1][0]).toUpperCase();
  }
  return words[0].substring(0, 2);
}

// Category order for filling — groups biases by category so same colours cluster
const CATEGORY_FILL_ORDER: CategoryId[] = [
  'decision-making',
  'statistical',
  'self-deception',
  'information-processing',
  'emotional',
  'professional',
  'causal-reasoning',
  'social-influence',
  'memory-perception',
  'social-group',
];

export function generateLayout(biases: Bias[]): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Sort biases by category order so colours cluster together
  const sortedBiases = [...biases].sort((a, b) => {
    return CATEGORY_FILL_ORDER.indexOf(a.category) - CATEGORY_FILL_ORDER.indexOf(b.category);
  });

  // Build the list of grid slots
  const slots: { col: number; row: number; x: number; y: number }[] = [];
  for (let rowIdx = 0; rowIdx < TABLE_ROWS.length; rowIdx++) {
    const cols = TABLE_ROWS[rowIdx];
    const extraY = rowIdx >= 7 ? LANTHANIDE_GAP : 0;
    const y = rowIdx * CELL_STEP + extraY;
    for (const col of cols) {
      slots.push({ col, row: rowIdx, x: col * CELL_STEP, y });
    }
  }

  // Place biases into slots
  sortedBiases.forEach((bias, i) => {
    if (i >= slots.length) return;
    const slot = slots[i];
    const cat = categories[bias.category];

    nodes.push({
      id: bias.id,
      type: 'biasNode',
      position: { x: slot.x, y: slot.y },
      data: {
        label: bias.name,
        category: cat,
        bias,
        symbol: makeSymbol(bias.name),
        number: bias.chapter,
      },
      style: { zIndex: 1 },
    });
  });

  // Create edges for related biases
  const biasSet = new Set(biases.map(b => b.id));
  const edgeSet = new Set<string>();

  for (const bias of biases) {
    for (const relatedId of bias.relatedBiasIds) {
      if (!biasSet.has(relatedId)) continue;
      const edgeKey = [bias.id, relatedId].sort().join('--');
      if (edgeSet.has(edgeKey)) continue;
      edgeSet.add(edgeKey);

      edges.push({
        id: `e-${edgeKey}`,
        source: bias.id,
        target: relatedId,
        type: 'default',
        style: { stroke: '#94a3b8', strokeWidth: 1, opacity: 0.15 },
        animated: false,
      });
    }
  }

  // Calculate content bounds
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const node of nodes) {
    minX = Math.min(minX, node.position.x);
    minY = Math.min(minY, node.position.y);
    maxX = Math.max(maxX, node.position.x + CELL_SIZE);
    maxY = Math.max(maxY, node.position.y + CELL_SIZE);
  }
  const totalWidth = maxX - minX;

  // Category legend — placed in the gap area (rows 1-3 have empty middle columns)
  // Position it roughly in the middle of the table where there's empty space
  const legendX = 2 * CELL_STEP + 20;
  const legendY = 0.5 * CELL_STEP;
  const legendCols = 2;

  CATEGORY_FILL_ORDER.forEach((catId, i) => {
    const cat = categories[catId];
    const legendCol = i % legendCols;
    const legendRow = Math.floor(i / legendCols);
    nodes.push({
      id: `legend-${catId}`,
      type: 'categoryLabel',
      position: {
        x: legendX + legendCol * (CELL_SIZE * 2.5 + 10),
        y: legendY + legendRow * 28,
      },
      data: {
        label: cat.name,
        color: cat.color,
        bgColor: cat.bgColor,
        borderColor: cat.borderColor,
      },
      draggable: false,
      selectable: false,
    });
  });

  // Header
  const headerHeight = 100;
  const gap = 40;
  nodes.push({
    id: 'header',
    type: 'headerNode',
    position: { x: minX, y: minY - headerHeight - gap },
    data: { contentWidth: totalWidth },
    draggable: false,
    selectable: false,
  });

  // Brain background
  const contentPadding = 100;
  const fullMinY = minY - headerHeight - gap;
  const fullMaxY = maxY;
  const contentWidth = totalWidth + contentPadding * 2;
  const contentHeight = fullMaxY - fullMinY + contentPadding * 2;
  const bgWidth = contentWidth * 2;
  const bgHeight = contentHeight * 2;
  const centerX = minX - contentPadding + contentWidth / 2;
  const centerY = fullMinY - contentPadding + contentHeight / 2;
  nodes.unshift({
    id: 'brain-bg',
    type: 'brainBackground',
    position: { x: centerX - bgWidth / 2, y: centerY - bgHeight / 2 },
    data: { width: bgWidth, height: bgHeight },
    draggable: false,
    selectable: false,
    style: { zIndex: -1 },
  });

  return { nodes, edges };
}
