import { Todo } from "../utils/model";
import TodoItem from "./TodoItem";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <section className="lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-center">
        <article className="lg:w-screen lg:flex lg:justify-evenly">
          <Droppable droppableId="TodosList">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h2>Active Tasks</h2>
                {todos.map((singleTodo) => (
                  <TodoItem
                    key={singleTodo.id}
                    todo={singleTodo}
                    todos={todos}
                    setTodos={setTodos}
                  />
                ))}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="CompletedTodosList">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <h2>Completed Tasks</h2>
                {completedTodos.map((singleTodo) => (
                  <TodoItem
                    key={singleTodo.id}
                    todo={singleTodo}
                    todos={completedTodos}
                    setTodos={setCompletedTodos}
                  />
                ))}
              </div>
            )}
          </Droppable>
        </article>
      </section>
    </DragDropContext>
  );
};

export default TodoList;
