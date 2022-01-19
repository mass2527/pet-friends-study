import { useAppSelector } from 'hooks';
import Accordion from 'components/atoms/Accordion';
import TodoItem from '../TodoItem';
import { selectTodos } from 'store/reducers/todos';

const CompletedTodos = () => {
  const todoIds = useAppSelector(selectTodos)
    .filter(({ isCompleted }) => isCompleted)
    .map(({ id }) => id);

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
