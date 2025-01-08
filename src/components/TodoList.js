import { useContext } from "react";
import { TodosContext } from "../contexts/todos.context";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useContext(TodosContext);
  return (
    <ul style={{ paddingLeft: 10, width: "95%" }}>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </ul>
  );
};

export default TodoList;
{
  /* <li key={todo.id}>{todo.task}</li> */
}
