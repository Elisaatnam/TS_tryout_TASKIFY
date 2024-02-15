import { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./utils/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <main className="font-sans w-screen h-screen flex flex-col items-center">
      <h1 className=" text-3xl uppercase my-8 z-10">Taskify</h1>
      <InputField
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </main>
  );
};

export default App;
