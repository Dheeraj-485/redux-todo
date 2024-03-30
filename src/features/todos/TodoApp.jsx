import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodosList from "./TodosList";

const TodoApp = () => {
  return (
    <div className="container">
      <h1 className="main-app">Todo App</h1>
      <AddTodoForm />
      <TodosList />
    </div>
  );
};

export default TodoApp;
