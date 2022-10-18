import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TaskList } from 'components/TaskList/TaskList';
import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchTasks } from '../redux/tasks/TascsOperations';
import { selectLoading } from '../redux/tasks/TascsSelectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </>
  );
}
