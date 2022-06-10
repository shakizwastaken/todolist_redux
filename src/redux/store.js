import { configureStore } from "@reduxjs/toolkit";

import displayedTodosReducer from "./displayedTodosSlice";
import todosReducer from "./todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    displayedTodos: displayedTodosReducer,
  },
});

export default store;
