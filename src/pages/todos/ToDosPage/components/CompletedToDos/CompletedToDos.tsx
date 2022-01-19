import { useAppSelector } from 'hooks';
import Accordion from 'components/atoms/Accordion';
import { TODOS_DOMAIN } from '../../commons/constant';
import TodoItem from '../TodoItem';

const CompletedTodos = () => {
  const todoIds = useAppSelector(({ todos }) =>
    todos[TODOS_DOMAIN].todos.filter(({ isCompleted }) => isCompleted).map(({ id }) => id)
  );

  return (
    <Accordion title='완료'>
      <ul>
        {todoIds.map((todoId) => (
          <TodoItem key={todoId} id={todoId} />
        ))}
      </ul>
    </Accordion>
  );
};

export default CompletedTodos;
