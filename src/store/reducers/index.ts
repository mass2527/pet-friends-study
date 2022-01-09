import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from './todos';

const rootReducer = combineReducers({
  todosReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
