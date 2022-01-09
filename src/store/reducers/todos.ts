import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TodoState = {
  id: number;
  text: string;
  priority: number;
  isCompleted: boolean;
};

type TodosState = {
  todos: {
    todos: TodoState[];
  };
};

const initialState: TodosState = {
  todos: {
    todos: [],
  },
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<TodoState>) {
      state.todos.todos.push(action.payload);
    },
  },
});

export default slice.reducer;
