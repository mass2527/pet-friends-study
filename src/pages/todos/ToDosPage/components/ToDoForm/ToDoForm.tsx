import { useState, FormEvent, ChangeEvent } from 'react';

import Flex from 'components/atoms/Flex';
import InputLabel from 'components/molecules/InputLabel';
import Button from 'components/atoms/Button';

const TodoForm = () => {
  const [toDo, setToDo] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('submit');
    // dispatch todo
    // 작성한 할 일을 미완료 리스트에 넣기

    setToDo('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setToDo(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <InputLabel
          value={toDo}
          onChange={handleInputChange}
          label='오늘 할 일'
          placeholder='4글자 이상'
          minLength={4}
          required
        />
        <Button type='submit'>추가</Button>
      </Flex>
    </form>
  );
};

export default TodoForm;
