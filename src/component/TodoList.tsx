import { Todo } from "../utils/model";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <section className="lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-center">
      {todos.map((singleTodo) => (
        <TodoItem
          key={singleTodo.id}
          todo={singleTodo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </section>
  );
};

export default TodoList;
