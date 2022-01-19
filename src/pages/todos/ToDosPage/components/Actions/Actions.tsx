import Button from 'components/atoms/Button';
import Flex from 'components/atoms/Flex';
import { useAppDispatch, useAppSelector } from 'hooks';
import { allTodosIsCompletedSet, selectTodos } from 'store/reducers/todos';

const Actions = () => {
  const todos = useAppSelector(selectTodos);
  const completedTodos = todos.filter(({ isCompleted }) => isCompleted);
  const inCompletedTodos = todos.filter(({ isCompleted }) => !isCompleted);

  const dispatch = useAppDispatch();

  const handleAllTodosCompleteClick = () => {
    dispatch(allTodosIsCompletedSet(true));
  };
  const handleAllTodosInCompleteClick = () => {
    dispatch(allTodosIsCompletedSet(false));
  };

  return (
    <Flex direction='column' spacing={1}>
      <Button
        onClick={handleAllTodosCompleteClick}
        disabled={completedTodos.length === todos.length}
      >
        모든 할 일 완료 처리
      </Button>
      <Button
        onClick={handleAllTodosInCompleteClick}
        disabled={inCompletedTodos.length === todos.length}
      >
        모든 할 일 미완료 처리
      </Button>
    </Flex>
  );
};

export default Actions;
