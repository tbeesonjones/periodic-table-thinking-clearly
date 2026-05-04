export type CategoryId =
  | 'social-group'
  | 'memory-perception'
  | 'decision-making'
  | 'statistical'
  | 'self-deception'
  | 'information-processing'
  | 'emotional'
  | 'causal-reasoning'
  | 'social-influence'
  | 'professional';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const categories: Record<CategoryId, Category> = {
  'social-group': {
    id: 'social-group',
    name: 'Social & Group',
    description: 'How groups and social dynamics distort our thinking',
    color: '#2563eb',
    bgColor: '#dbeafe',
    borderColor: '#93c5fd',
  },
  'memory-perception': {
    id: 'memory-perception',
    name: 'Memory & Perception',
    description: 'How we misremember and misperceive reality',
    color: '#7c3aed',
    bgColor: '#ede9fe',
    borderColor: '#c4b5fd',
  },
  'decision-making': {
    id: 'decision-making',
    name: 'Decision-Making',
    description: 'Systematic errors in how we choose and act',
    color: '#dc2626',
    bgColor: '#fee2e2',
    borderColor: '#fca5a5',
  },
  'statistical': {
    id: 'statistical',
    name: 'Statistical & Probability',
    description: 'Misunderstanding randomness, probability, and data',
    color: '#ea580c',
    bgColor: '#fff7ed',
    borderColor: '#fdba74',
  },
  'self-deception': {
    id: 'self-deception',
    name: 'Self-Deception',
    description: 'Overestimating our knowledge, skill, and control',
    color: '#ca8a04',
    bgColor: '#fefce8',
    borderColor: '#fde047',
  },
  'information-processing': {
    id: 'information-processing',
    name: 'Information Processing',
    description: 'How we filter, frame, and distort information',
    color: '#16a34a',
    bgColor: '#dcfce7',
    borderColor: '#86efac',
  },
  'emotional': {
    id: 'emotional',
    name: 'Emotional & Motivational',
    description: 'How emotions and desires warp our judgment',
    color: '#db2777',
    bgColor: '#fce7f3',
    borderColor: '#f9a8d4',
  },
  'causal-reasoning': {
    id: 'causal-reasoning',
    name: 'Causal Reasoning',
    description: 'Misattributing causes, seeing patterns that aren\'t there',
    color: '#0d9488',
    bgColor: '#ccfbf1',
    borderColor: '#5eead4',
  },
  'social-influence': {
    id: 'social-influence',
    name: 'Social Influence',
    description: 'How authority, persuasion, and framing sway us',
    color: '#4f46e5',
    bgColor: '#e0e7ff',
    borderColor: '#a5b4fc',
  },
  'professional': {
    id: 'professional',
    name: 'Professional & Systemic',
    description: 'Institutional and expertise-based blind spots',
    color: '#475569',
    bgColor: '#f1f5f9',
    borderColor: '#cbd5e1',
  },
};

export const categoryList = Object.values(categories);
