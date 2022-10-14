import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { Wrapper, Text, Btn, Checkbox } from './Task.styled';
import { deleteTask } from '../../redux/Tasks/operations';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <Wrapper>
      <Checkbox type="checkbox" checked={task.completed} />
      <Text>{task.text}</Text>
      <Btn onClick={handleDelete}>
        <MdClose size={24} />
      </Btn>
    </Wrapper>
  );
};
