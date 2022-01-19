import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import {
  Priority,
  selectTodoById,
  todoIsCompletedToggled,
  todoModified,
  todoRemoved,
} from 'store/reducers/todos';

import Flex from 'components/atoms/Flex';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import RadioGroup from 'components/molecules/RadioGroup';

import { PRIORITY_IMOJIES, PRIORITY_OPTIONS } from '../../commons/constant';

interface TodoItem {
  id: string;
}

const TodoItem = ({ id }: TodoItem) => {
  const { isCompleted, priority: initialPriority, text } = useAppSelector(selectTodoById(id))!;
  const [priority, setPriority] = useState(initialPriority);
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const previousPriority = useMemo(() => priority, [isEditMode]);

  useEffect(() => {
    if (isEditMode) {
      inputRef.current?.focus();
    }
  }, [isEditMode]);

  const toggleTodoIsCompleted = () => dispatch(todoIsCompletedToggled(id));

  const handleCancelClick = () => {
    setPriority(previousPriority);
    setIsEditMode(!isEditMode);
  };

  const handleModifyClick = () => setIsEditMode(!isEditMode);

  const handleSave = () => {
    dispatch(todoModified({ id, text: inputRef.current?.value as string }));
    setIsEditMode(false);
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPriority(e.target.value as Priority);

  const handleRemoveClick = () => {
    const isAllowed = window.confirm(`정말 제거할까요?!`);
    if (isAllowed) {
      dispatch(todoRemoved(id));
    }
  };

  return (
    <li>
      {isEditMode ? (
        <form onSubmit={handleSave}>
          <Flex>
            <RadioGroup
              name='priority'
              options={PRIORITY_OPTIONS}
              checked={priority}
              onChange={handlePriorityChange}
            />
            <Input minLength={4} defaultValue={text} autoComplete='off' ref={inputRef} required />
            <Button type='submit'>저장</Button>
            <Button onClick={handleCancelClick}>취소</Button>
          </Flex>
        </form>
      ) : (
        <>
          <Input type='checkbox' checked={isCompleted} onChange={toggleTodoIsCompleted} />
          <span>{PRIORITY_IMOJIES[priority]}</span>
          <span>{text}</span>
          <Button onClick={handleModifyClick}>수정</Button>
          <Button onClick={handleRemoveClick}>제거</Button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
