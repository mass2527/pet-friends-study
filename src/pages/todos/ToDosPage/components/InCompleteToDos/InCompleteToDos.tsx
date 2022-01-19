import Accordion from 'components/atoms/Accordion';
import { useAppSelector } from 'hooks';
import { selectTodos } from 'store/reducers/todos';

import TodoItem from '../TodoItem';

const InCompleteTodos = () => {
  const todoIds = useAppSelector(selectTodos)
    .filter(({ isCompleted }) => !isCompleted)
    .map(({ id }) => id);

  return (
    <Accordion title='미완료'>
      <ul>
        {todoIds.map((todoId) => (
          <TodoItem key={todoId} id={todoId} />
        ))}
      </ul>
    </Accordion>
  );
};

export default InCompleteTodos;
