import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ToDosPage from 'pages/todos/ToDosPage';
import ToDoPage from 'pages/todos/ToDoPage';
import IncompleteToDoPage from 'pages/todos/IncompleteToDoPage';
import CompletedToDoPage from 'pages/todos/CompletedToDoPage';
import NotFoundPage from 'pages/rest/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ToDosPage />} />
        </Route>
        <Route path='todos'>
          <Route index element={<ToDosPage />} />
          <Route path=':toDoId' element={<ToDoPage />} />
          <Route path='incomplete' element={<IncompleteToDoPage />} />
          <Route path='completed' element={<CompletedToDoPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
