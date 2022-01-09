import Input from 'components/atoms/Input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { todoCompleted } from 'store/reducers/todos';
import { TODOS_DOMAIN } from '../../commons/constant';

interface TodoItem {
  id: string;
}

const TodoItem = ({ id }: TodoItem) => {
  const todo = useSelector(({ todos }: RootState) =>
    todos[TODOS_DOMAIN].todos.find((todo) => todo.id === id)
  );
  const dispatch = useDispatch();

  const handleTodoCompleted = () => dispatch(todoCompleted(id));

  return (
    <div>
      <p>{todo?.text}</p>
      <img
        src='https://pet-friends.atlassian.net/images/icons/priorities/medium.svg'
        alt='medium priority'
        width='16px'
        height='16px'
      />
      <Input type='checkbox' checked={todo?.isCompleted} onChange={handleTodoCompleted} />
    </div>
  );
};

export default TodoItem;
