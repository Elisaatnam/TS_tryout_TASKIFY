import { Todo } from "../utils/model";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo, todos, setTodos }) => {
  const addTodo: (e: React.FormEvent) => void = (e) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const newTodo = data.get("todo") as string;
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), todo: newTodo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <form className="" onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Enter task"
        className="input input-bordered input-accent mr-2.5"
        name="todo"
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn btn-neutral">Add task</button>
    </form>
  );
};

export default InputField;
