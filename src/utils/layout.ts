import type { Node, Edge } from '@xyflow/react';
import type { Bias } from '../data/biases';
import { categories, type CategoryId } from '../data/categories';

const CATEGORY_PADDING = 40;
const NODE_WIDTH = 180;
const NODE_HEIGHT = 40;
const NODE_GAP_X = 20;
const NODE_GAP_Y = 16;
const COLS_PER_CATEGORY = 3;
const GRID_COLS = 4;
const GRID_GAP_X = 80;
const GRID_GAP_Y = 80;

export function generateLayout(biases: Bias[]): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Group biases by category
  const grouped = new Map<CategoryId, Bias[]>();
  for (const bias of biases) {
    const list = grouped.get(bias.category) || [];
    list.push(bias);
    grouped.set(bias.category, list);
  }

  const categoryIds = Object.keys(categories) as CategoryId[];
  let gridX = 0;
  let gridY = 0;
  let col = 0;
  const maxHeightInRow: number[] = [0];
  let rowIndex = 0;

  // First pass: calculate category group sizes and positions
  const categoryPositions = new Map<CategoryId, { x: number; y: number; width: number; height: number }>();

  for (const catId of categoryIds) {
    const catBiases = grouped.get(catId) || [];
    const rows = Math.ceil(catBiases.length / COLS_PER_CATEGORY);
    const groupWidth = COLS_PER_CATEGORY * (NODE_WIDTH + NODE_GAP_X) - NODE_GAP_X + CATEGORY_PADDING * 2;
    const groupHeight = rows * (NODE_HEIGHT + NODE_GAP_Y) - NODE_GAP_Y + CATEGORY_PADDING * 2 + 40; // +40 for label

    if (col >= GRID_COLS) {
      col = 0;
      rowIndex++;
      gridY += maxHeightInRow[rowIndex - 1] + GRID_GAP_Y;
      maxHeightInRow.push(0);
    }

    // Calculate x position based on previous categories in this row
    gridX = 0;
    let currentCol = 0;
    for (const prevCatId of categoryIds) {
      if (prevCatId === catId) break;
      const prevPos = categoryPositions.get(prevCatId);
      if (prevPos) {
        const prevRow = Math.floor(currentCol / GRID_COLS);
        if (prevRow === rowIndex) {
          gridX = prevPos.x + prevPos.width + GRID_GAP_X;
        }
        currentCol++;
      }
    }

    categoryPositions.set(catId, { x: gridX, y: gridY, width: groupWidth, height: groupHeight });
    maxHeightInRow[rowIndex] = Math.max(maxHeightInRow[rowIndex], groupHeight);
    col++;
  }

  // Second pass: create nodes
  for (const catId of categoryIds) {
    const cat = categories[catId];
    const catBiases = grouped.get(catId) || [];
    const pos = categoryPositions.get(catId)!;

    // Category group node
    nodes.push({
      id: `cat-${catId}`,
      type: 'categoryLabel',
      position: { x: pos.x, y: pos.y },
      data: { label: cat.name, color: cat.color, bgColor: cat.bgColor, borderColor: cat.borderColor, width: pos.width, height: pos.height },
      draggable: false,
      selectable: false,
      style: { width: pos.width, height: pos.height, zIndex: 0 },
    });

    // Bias nodes within category
    catBiases.forEach((bias, i) => {
      const biasCol = i % COLS_PER_CATEGORY;
      const biasRow = Math.floor(i / COLS_PER_CATEGORY);
      const x = pos.x + CATEGORY_PADDING + biasCol * (NODE_WIDTH + NODE_GAP_X);
      const y = pos.y + CATEGORY_PADDING + 40 + biasRow * (NODE_HEIGHT + NODE_GAP_Y);

      nodes.push({
        id: bias.id,
        type: 'biasNode',
        position: { x, y },
        data: {
          label: bias.name,
          category: cat,
          bias,
        },
        style: { zIndex: 1 },
      });
    });
  }

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
        style: { stroke: '#94a3b8', strokeWidth: 1, opacity: 0.3 },
        animated: false,
      });
    }
  }

  // Add header and footer nodes
  const contentPadding = 100;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const node of nodes) {
    const w = (node.style?.width as number) || NODE_WIDTH;
    const h = (node.style?.height as number) || NODE_HEIGHT;
    minX = Math.min(minX, node.position.x);
    minY = Math.min(minY, node.position.y);
    maxX = Math.max(maxX, node.position.x + w);
    maxY = Math.max(maxY, node.position.y + h);
  }
  const totalWidth = maxX - minX;
  const headerHeight = 100;
  const gap = 40;

  // Header above all content
  nodes.push({
    id: 'header',
    type: 'headerNode',
    position: { x: minX, y: minY - headerHeight - gap },
    data: { contentWidth: totalWidth },
    draggable: false,
    selectable: false,
  });

  // Brain background node sized to cover all content (including header)
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
