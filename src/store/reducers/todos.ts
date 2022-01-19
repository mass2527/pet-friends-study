import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TODOS_DOMAIN } from 'pages/todos/TodosPage/commons/constant';
import { RootState } from 'store';

export type Priority = '1' | '2' | '3' | '4' | '5';

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

    todoIsCompletedToggled(state, { payload }: PayloadAction<string>) {
      const selectedIndex = state[TODOS_DOMAIN].todos.findIndex((todo) => todo.id === payload);
      state[TODOS_DOMAIN].todos[selectedIndex].isCompleted =
        !state[TODOS_DOMAIN].todos[selectedIndex].isCompleted;
    },

    todoModified(state, { payload: { id, text } }: PayloadAction<{ id: string; text: string }>) {
      const selectedIndex = state[TODOS_DOMAIN].todos.findIndex((todo) => todo.id === id);
      state[TODOS_DOMAIN].todos[selectedIndex].text = text;
    },

    todoRemoved(state, { payload }: PayloadAction<string>) {
      const selectedIndex = state[TODOS_DOMAIN].todos.findIndex((todo) => todo.id === payload);
      state[TODOS_DOMAIN].todos.splice(selectedIndex, 1);
    },

    allTodosIsCompletedSet(state, { payload }: PayloadAction<boolean>) {
      state[TODOS_DOMAIN].todos = state[TODOS_DOMAIN].todos.map((todo) => ({
        ...todo,
        isCompleted: payload,
      }));
    },
  },
});

export const {
  todoAdded,
  todoIsCompletedToggled,
  todoModified,
  todoRemoved,
  allTodosIsCompletedSet,
} = slice.actions;

export const selectTodos = ({ todos }: RootState) => todos[TODOS_DOMAIN].todos;

export const selectTodoById =
  (id: string) =>
  ({ todos }: RootState) =>
    todos[TODOS_DOMAIN].todos.find((todo) => todo.id === id);

export default slice.reducer;
