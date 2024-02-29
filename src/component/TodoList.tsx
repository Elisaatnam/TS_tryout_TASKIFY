import { Todo } from "../utils/model";
import TodoItem from "./TodoItem";
import { Droppable } from "react-beautiful-dnd";

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
    <section className="lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-center">
      <article className="lg:w-screen lg:flex lg:justify-evenly">
        <Droppable droppableId="TodosList">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2>Active Tasks</h2>
              {todos.map((singleTodo, index) => (
                <TodoItem
                  key={singleTodo.id}
                  index={index}
                  todo={singleTodo}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="CompletedTodosList">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2>Completed Tasks</h2>
              {completedTodos.map((singleTodo, index) => (
                <TodoItem
                  key={singleTodo.id}
                  index={index}
                  todo={singleTodo}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </article>
    </section>
  );
};

export default TodoList;
