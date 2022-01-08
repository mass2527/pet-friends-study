import Flex from 'components/atoms/Flex';
import ToDoForm from './components/ToDoForm';

import InCompleteToDos from './components/InCompleteToDos';
import CompletedToDos from './components/CompletedToDos';

const ToDosPage = () => {
  return (
    <Flex direction='column' spacing={3}>
      <ToDoForm />
      <Flex direction='column' alignItems='start' spacing={2}>
        <InCompleteToDos />
        <CompletedToDos />
      </Flex>
    </Flex>
  );
};

export default ToDosPage;
