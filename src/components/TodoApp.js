import { TodosProvider } from "../contexts/todos.context";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  return (
    <TodosProvider>
      <TodoForm />
      <TodoList />
    </TodosProvider>
  );
};

export default TodoApp;
