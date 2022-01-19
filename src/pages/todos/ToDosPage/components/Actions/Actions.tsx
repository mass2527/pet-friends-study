import Button from 'components/atoms/Button';
import Flex from 'components/atoms/Flex';
import { useAppDispatch } from 'hooks';
import { allTodosIsCompletedSet } from 'store/reducers/todos';

const Actions = () => {
  const dispatch = useAppDispatch();

  const handleAllTodosCompleteClick = () => {
    dispatch(allTodosIsCompletedSet(true));
  };
  const handleAllTodosInCompleteClick = () => {
    dispatch(allTodosIsCompletedSet(false));
  };

  return (
    <Flex direction='column' spacing={1}>
      <Button onClick={handleAllTodosCompleteClick}>모든 할 일 완료 처리</Button>
      <Button onClick={handleAllTodosInCompleteClick}>모든 할 일 미완료 처리</Button>
    </Flex>
  );
};

export default Actions;
