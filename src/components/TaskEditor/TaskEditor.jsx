import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/TascsOperations';
import { Form, Input, Button } from './TaskEditor.styled';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Заполни текст заметки.');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="text" />
      <Button type="submit">Add todo</Button>
    </Form>
  );
};
