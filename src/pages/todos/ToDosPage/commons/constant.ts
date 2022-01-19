export const TODOS_DOMAIN = '/todos';

export const INITIAL_TODO_FORM = {
  priority: '3',
  text: '',
} as const;

export const PRIORITY_OPTIONS = [
  { label: '1️⃣', value: '1' },
  { label: '2️⃣', value: '2' },
  { label: '3️⃣', value: '3' },
  { label: '4️⃣', value: '4' },
  { label: '5️⃣', value: '5' },
] as const;

export const PRIORITY_IMOJIES = {
  '1': '1️⃣',
  '2': '2️⃣',
  '3': '3️⃣',
  '4': '4️⃣',
  '5': '5️⃣',
} as const;

export const TODO_OPTIONS = [
  {
    value: 'react',
  },
  {
    value: 'next',
  },
  {
    value: 'redux',
  },
  {
    value: 'recoil',
  },
  {
    value: 'typescript',
  },
  {
    value: 'functional programming',
  },
] as const;
