import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./features/todos/todosSlice";

// Load todos from local storage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from local storage:", error);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  try {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem("todos", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
});
