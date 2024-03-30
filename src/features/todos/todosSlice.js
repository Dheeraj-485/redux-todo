import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  // { id: 1, title: "Play Cricket", completed: "false" },
  // { id: 2, title: "Learn React", completed: "False" },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleCompleted: (state, action) => {
      "todos",
        state.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
        });
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todosSlice.actions;
export default todosSlice.reducer;
