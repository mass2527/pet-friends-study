import { Priority } from 'store/reducers/todos';

export const TODOS_DOMAIN = '/todos';

export const INITIAL_TODO_FORM = {
  priority: '보통',
  text: '',
} as const;

export const PRIORITY_OPTIONS: { label: Priority; value: Priority }[] = [
  { label: '매우 높음', value: '매우 높음' },
  { label: '높음', value: '높음' },
  { label: '보통', value: '보통' },
  { label: '매우 낮음', value: '매우 낮음' },
  { label: '낮음', value: '낮음' },
];
