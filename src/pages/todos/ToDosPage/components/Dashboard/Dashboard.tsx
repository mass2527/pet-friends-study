import { useAppSelector } from 'hooks';
import { TODOS_DOMAIN } from '../../commons/constant';

const Dashboard = () => {
  const todos = useAppSelector(({ todos }) => todos[TODOS_DOMAIN].todos);

  const inCompleteTodos = todos.filter(({ isCompleted }) => !isCompleted);
  const completedTodos = todos.filter(({ isCompleted }) => isCompleted);

  const calculatePercent = (parts: number, whole: number, fractionDigits: number = 0): number =>
    whole && Number(((parts / whole) * 100).toFixed(fractionDigits));

  const 완료율 = calculatePercent(completedTodos.length, todos.length, 2);

  return (
    <div>
      <p>미완료: {inCompleteTodos.length}개</p>
      <p>완료: {completedTodos.length}개</p>
      <p>완료율: {완료율}%</p>
      <meter min={0} max={100} low={30} high={60} optimum={80} value={완료율}></meter>
    </div>
  );
};

export default Dashboard;
