import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TODOS_DOMAIN } from 'pages/todos/TodosPage/commons/constant';

export type Priority = '매우 높음' | '높음' | '보통' | '낮음' | '매우 낮음';

export interface TodoState {
  id: string;
  text: string;
  priority: Priority;
  isCompleted: boolean;
}

interface TodosState {
  [TODOS_DOMAIN]: {
    todos: TodoState[];
  };
}

const initialState: TodosState = {
  [TODOS_DOMAIN]: {
    todos: [],
  },
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(
      state,
      { payload: { priority, text } }: PayloadAction<{ text: string; priority: Priority }>
    ) {
      const addedTodo: TodoState = {
        id: nanoid(),
        priority,
        text,
        isCompleted: false,
      };

      state[TODOS_DOMAIN].todos.push(addedTodo);
    },

    todoCompleted(state, { payload }: PayloadAction<string>) {
      const completedTodoIndex = state[TODOS_DOMAIN].todos.findIndex((todo) => todo.id === payload);
      state[TODOS_DOMAIN].todos[completedTodoIndex].isCompleted = true;
    },
  },
});

export const { todoAdded, todoCompleted } = slice.actions;

export default slice.reducer;
