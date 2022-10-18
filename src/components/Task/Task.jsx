import { useDispatch } from 'react-redux';
import { Wrapper, Text, Btn } from './Task.styled';
import { deleteTask } from '../../redux/tasks/TascsOperations';

export const Task = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <Wrapper>
      <Text>{text}</Text>
      <Btn type="button" onClick={handleDelete}>
        Delete
      </Btn>
    </Wrapper>
  );
};
