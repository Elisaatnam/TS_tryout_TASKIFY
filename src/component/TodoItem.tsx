import { Todo } from "../utils/model";
import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <div className="card w-96 bg-primary text-primary-content mb-3 relativ lg:m-3">
      <RiDeleteBin6Line className="absolute top-4 right-4" />
      <RiEdit2Fill className="absolute top-4 right-10" />
      <div className="card-body">
        <h2 className="card-title">{todo.todo}</h2>
        <div className="card-actions justify-end">
          <button className="btn">Mark as done</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
