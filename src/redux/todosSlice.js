const { createSlice } = require("@reduxjs/toolkit");
const { default: Todo } = require("../classes/Todo");

const todosSlice = createSlice({
  name: "todosSlice",
  initialState: [
    new Todo("Example 1", "this is how your todos will look"),
    new Todo("Example 2", "this is how your todos will look"),
  ],
  reducers: {
    addTodo: (todos, { payload: { title, content } }) => {
      console.log(title, content);
      todos.push(new Todo(title, content));
    },

    deleteTodo: (todos, { payload: { id } }) => {
      return todos.filter((item) => {
        console.log(item.id, id);
        return item.id !== id;
      });
    },

    editTodo: (todos, { payload: { id, title, content } }) => {
      return todos.map((item) => {
        if (item.id === id) {
          item.title = title;
          item.content = content;
        }
        return item;
      });
    },

    toggleTodoDone: (todos, { payload: { id } }) => {
      return todos.map((item) => {
        if (item.id === id) {
          item.toggleDone();
        }
        return item;
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodoDone } =
  todosSlice.actions;

export default todosSlice.reducer;
