import React from "react";
import { useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import { removeTodo, toggleCompleted } from "./todosSlice";

const SingleTodo = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <div className="todo-title">
        {/* <p>title:{title}</p> */}
        {/* <p type="checked" className={`${completed ? "strike" : null}`}>
          completed:{completed ? "true" : "false"}
        </p> */}
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            dispatch(toggleCompleted({ id: id }));
          }}
        />
        <p className={`${completed ? "completed" : ""}`}>{title}</p>
      </div>
      <div
        className="cross-btn"
        onClick={() => dispatch(removeTodo({ id: id }))}
      >
        <ImCross />
      </div>
      {/* <button onClick={() => dispatch(toggleCompleted({ id: id }))}>
          Toggle
        </button> */}
    </div>
  );
};

export default SingleTodo;
