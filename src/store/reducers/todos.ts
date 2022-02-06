import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TODOS_DOMAIN } from 'pages/todos/TodosPage/commons/constant';
import { RootState } from 'store';

export type Priority = '1' | '2' | '3' | '4' | '5';
export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface TodoState {
  id: string;
  text: string;
  priority: Priority;
  isCompleted: boolean;
}

interface TodosState {
  [TODOS_DOMAIN]: {
    todos: TodoState[];
    status: Status;
    error: string | null;
  };
}

interface TodoForm {
  text: string;
  priority: Priority;
}

interface AsyncTodoForm extends TodoForm {
  count: number;
}

const initialState: TodosState = {
  [TODOS_DOMAIN]: {
    todos: [],
    status: 'idle',
    error: null,
  },
};

const delay = async (seconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('timeout');
      resolve();
    }, seconds);
  });
};

export const todoAsyncAdded = createAsyncThunk(
  `${TODOS_DOMAIN}/todoAsyncAdded`,
  async ({ count, priority, text }: AsyncTodoForm) => {
    await delay(count * 1000);
    const addedTodo: TodoState = {
      id: nanoid(),
      priority,
      text,
      isCompleted: false,
    };
    return addedTodo;
  }
);

export const todoRandomAdded = createAsyncThunk(
  `${TODOS_DOMAIN}/todoRandomAdded`,
  async ({ priority }: { priority: Priority }, { dispatch, rejectWithValue }) => {
    const randomNumber = Math.ceil(Math.random() * 200);
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`);
    const { title } = await res.json();
    // return rejectWithValue('Something went wrong!!');
    dispatch(todoAdded({ priority, text: title }));
  }
);

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, { payload: { priority, text } }: PayloadAction<TodoForm>) {
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

    todoAsyncAddCanceled(state) {
      state[TODOS_DOMAIN].status = 'idle';
    },
  },
  extraReducers: (builder) => {
    // todoAsyncAdded
    builder.addCase(todoAsyncAdded.pending, (state) => {
      state[TODOS_DOMAIN].status = 'loading';
    });
    builder.addCase(todoAsyncAdded.fulfilled, (state, action) => {
      if (state[TODOS_DOMAIN].status === 'loading') {
        state[TODOS_DOMAIN].todos.push(action.payload);
        state[TODOS_DOMAIN].status = 'succeeded';
      }
    });
    builder.addCase(todoAsyncAdded.rejected, (state) => {
      state[TODOS_DOMAIN].error = 'Something went wrong';
    });

    // todoRandomAdded
    builder.addCase(todoRandomAdded.rejected, (state, action) => {
      alert(action.payload);
    });
  },
});

export const {
  todoAdded,
  todoIsCompletedToggled,
  todoModified,
  todoRemoved,
  allTodosIsCompletedSet,
  todoAsyncAddCanceled,
} = slice.actions;

export const selectTodos = ({ todos }: RootState) => todos[TODOS_DOMAIN].todos;

export const selectTodoById =
  (id: string) =>
  ({ todos }: RootState) =>
    todos[TODOS_DOMAIN].todos.find((todo) => todo.id === id);

export default slice.reducer;
