import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TodosPage from 'pages/todos/TodosPage';
import TodoPage from 'pages/todos/TodoPage';
import IncompleteTodoPage from 'pages/todos/IncompleteTodoPage';
import CompletedTodoPage from 'pages/todos/CompletedTodoPage';
import NotFoundPage from 'pages/rest/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<TodosPage />} />
        </Route>
        <Route path='todos'>
          <Route index element={<TodosPage />} />
          <Route path=':toDoId' element={<TodoPage />} />
          <Route path='incomplete' element={<IncompleteTodoPage />} />
          <Route path='completed' element={<CompletedTodoPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
