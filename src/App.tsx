import { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./utils/model";
import TodoList from "./component/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completetTodos, setCompletedTodos] = useState<Todo[]>([]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className="font-sans w-screen min-h-screen flex flex-col items-center">
        <h1 className=" text-3xl uppercase my-8 z-10">Taskify</h1>
        <InputField
          todo={todo}
          setTodo={setTodo}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completetTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </main>
    </DragDropContext>
  );
};

export default App;
