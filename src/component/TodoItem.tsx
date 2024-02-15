import { Todo } from "../utils/model";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <>
      <p>{todo.todo}</p>
    </>
  );
};

export default TodoItem;
