import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks } from '../../redux/Tasks/selectors';
import { List, ListItem } from './TaskList.styled';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
};
