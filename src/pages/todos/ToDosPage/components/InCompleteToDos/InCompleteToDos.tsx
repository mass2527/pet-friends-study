import Accordion from 'components/atoms/Accordion';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { TODOS_DOMAIN } from '../../commons/constant';
import TodoItem from '../TodoItem';

const InCompleteTodos = () => {
  const todoIds = useSelector(({ todos }: RootState) =>
    todos[TODOS_DOMAIN].todos.filter(({ isCompleted }) => !isCompleted).map(({ id }) => id)
  );

  return (
    <Accordion title='미완료'>
      <div>
        {todoIds.map((todoId) => (
          <TodoItem key={todoId} id={todoId} />
        ))}
      </div>
    </Accordion>
  );
};

export default InCompleteTodos;
