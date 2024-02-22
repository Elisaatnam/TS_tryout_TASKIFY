import { useState } from "react";
import { Todo } from "../utils/model";
import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.todo);

  const markAsDone = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number): void => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editedTodo } : todo
      )
    );
    setEdit((prev) => !prev);
  };

  const handleDelete = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="card w-96 bg-primary text-primary-content mb-3 relativ lg:m-3 hover:scale-105 transition-all">
      <RiDeleteBin6Line
        onClick={() => handleDelete(todo.id)}
        className="absolute top-4 right-4"
      />
      <RiEdit2Fill
        onClick={() => setEdit((prev) => !prev)}
        className="absolute top-4 right-10"
      />
      <div className="card-body">
        {edit ? (
          <form onSubmit={(e) => handleEdit(e, todo.id)}>
            <input
              type="text"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
          </form>
        ) : (
          <h2
            className={`card-title ${
              todo.isDone ? "line-through" : "no-underline"
            }`}
          >
            {todo.todo}
          </h2>
        )}

        <div className="card-actions justify-end">
          <button onClick={() => markAsDone(todo.id)} className="btn">
            {todo.isDone ? "Mark as undone" : "Mark as done"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
