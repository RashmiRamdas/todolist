import { useContext } from "react";
import { DispatchContext } from "../contexts/todos.context";
import useInputState from "../hooks/useInputState";
import { ADD_TODO } from "../constants/actions.js";
import useStyles from "../styles/TodoFormStyles";

const TodoForm = () => {
  const dispatch = useContext(DispatchContext);
  const classes = useStyles();
  const [value, handleChange, clearValue] = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, task: value });
    clearValue();
  };

  return (
    <form onSubmit={handleSubmit} className={classes.TodoForm}>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        className={classes.input}
        placeholder="Add your task here..."
      />
    </form>
  );
};

export default TodoForm;
