import { useState, FormEvent, ChangeEvent, useRef } from 'react';

import Flex from 'components/atoms/Flex';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import InputLabel from 'components/molecules/InputLabel';
import { Status, todoAdded, todoAsyncAdded, todoRandomAdded } from 'store/reducers/todos';
import RadioGroup from 'components/molecules/RadioGroup';
import { INITIAL_TODO_FORM, PRIORITY_OPTIONS, TODO_OPTIONS } from '../../commons/constant';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect } from 'react';

type Progress = {
  [status in Status]: 0 | 100 | undefined;
};

const PROGRESS: Progress = {
  idle: 0,
  loading: undefined,
  succeeded: 100,
  failed: 0,
};

const TodoForm = () => {
  const [todoForm, setTodoForm] = useState(INITIAL_TODO_FORM);
  const [count, setCount] = useState(1);
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const dispatch = useAppDispatch();
  const status = useAppSelector(({ todos }) => todos['/todos'].status);
  const intervalId = useRef<number | null>(null);

  const secondsPassed = (currentTime - startTime) / 1000;
  const progress = PROGRESS[status] ?? (secondsPassed / count) * 100;

  useEffect(() => {
    if (status === 'loading') {
      setStartTime(Date.now());
      setCurrentTime(Date.now());
      intervalId.current = window.setInterval(() => {
        setCurrentTime(Date.now());
      }, 100);
      return;
    }

    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
    }
  }, [status]);
  console.log(status);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(todoAdded(todoForm));
    setTodoForm(INITIAL_TODO_FORM);
  };

  const handleTodoFormChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoForm({ ...todoForm, [e.target.name]: e.target.value });

  const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => setCount(e.target.valueAsNumber);

  const handleAsyncAddClick = () => {
    dispatch(todoAsyncAdded({ ...todoForm, count }));
    setTodoForm(INITIAL_TODO_FORM);
  };

  const handleRandomAddClick = () => {
    dispatch(todoRandomAdded({ priority: todoForm.priority }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex alignItems='flex-start' spacing={4}>
        <RadioGroup
          name='priority'
          label='우선순위'
          options={PRIORITY_OPTIONS}
          checked={todoForm.priority}
          onChange={handleTodoFormChange}
        />
        <InputLabel
          name='text'
          label='오늘 할 일'
          placeholder='4글자 이상'
          minLength={4}
          value={todoForm.text}
          onChange={handleTodoFormChange}
          autoComplete='off'
          list='todo-options'
          required
        />
        <datalist id='todo-options'>
          {TODO_OPTIONS.map(({ value }) => (
            <option key={value} value={value} />
          ))}
        </datalist>

        <Input
          type='number'
          value={count}
          onChange={handleCountChange}
          min='1'
          disabled={status === 'loading'}
        />
        <Button onClick={handleAsyncAddClick} disabled={status === 'loading'}>
          {count}초 후 비동기로 추가`
        </Button>
        <Flex>
          <span>{progress.toFixed(0)}%</span>
          <progress max='100' value={progress} />
        </Flex>
        <Button onClick={handleRandomAddClick}>랜덤 할 일 추가</Button>
      </Flex>
    </form>
  );
};

export default TodoForm;
