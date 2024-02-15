import { Todo } from "../utils/model";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((singleTodo) => (
        <TodoItem key={singleTodo.id} todo={singleTodo} />
      ))}
    </>
  );
};

export default TodoList;
