import Flex from 'components/atoms/Flex';
import BasicTemplate from 'components/templates/BasicTemplate';

import TodoForm from './components/TodoForm';
import InCompleteTodos from './components/InCompleteTodos';
import CompletedTodos from './components/CompletedTodos';
import Dashboard from './components/Dashboard';

const TodosPage = () => {
  return (
    <BasicTemplate
      header={<h1>Redux, Typescript 투두앱</h1>}
      main={
        <Flex direction='column' spacing={3}>
          <TodoForm />
          <Flex direction='column' alignItems='start' spacing={2}>
            <InCompleteTodos />
            <CompletedTodos />
          </Flex>
          <Dashboard />
        </Flex>
      }
      footer={<p>Made by philly</p>}
    />
  );
};

export default TodosPage;
