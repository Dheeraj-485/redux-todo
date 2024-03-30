import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";
const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Please fill input");
      return;
    }
    const newTodo = {
      id: nanoid(),
      title: title,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="todoForm__input"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="todoForm__btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
