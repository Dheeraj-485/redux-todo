import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodosList;
