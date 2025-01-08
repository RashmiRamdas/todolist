import React from "react";
import useStyles from "../styles/AppStyles";
import TodoApp from "./TodoApp";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1>
          todo<span>list</span>
        </h1>
        <h2>A simple todolist app built with React Hooks & Context</h2>
      </header>
      <TodoApp />
    </div>
  );
}

export default App;
