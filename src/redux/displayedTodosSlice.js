import { createSlice } from "@reduxjs/toolkit";

const displayedTodosSlice = createSlice({
  name: "displayedTodosSlice",
  initialState: [],
  reducers: {
    setDisplayedTodos: (current, { payload: { todos } }) => {
      return todos;
    },
  },
});

export const { setDisplayedTodos } = displayedTodosSlice.actions;
export default displayedTodosSlice.reducer;
