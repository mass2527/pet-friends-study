import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import Flex from 'components/atoms/Flex';
import InputLabel from 'components/molecules/InputLabel';
import { todoAdded } from 'store/reducers/todos';
import RadioGroup from 'components/molecules/RadioGroup';
import { INITIAL_TODO_FORM, PRIORITY_OPTIONS, TODO_OPTIONS } from '../../commons/constant';

const TodoForm = () => {
  const [todoForm, setTodoForm] = useState(INITIAL_TODO_FORM);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(todoAdded(todoForm));
    setTodoForm(INITIAL_TODO_FORM);
  };

  const handleTodoFormChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoForm({ ...todoForm, [e.target.name]: e.target.value });

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
            <option value={value} />
          ))}
        </datalist>
      </Flex>
    </form>
  );
};

export default TodoForm;
