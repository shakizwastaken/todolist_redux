class Todo {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.id = `#${Math.floor(Math.random() * 1000)}`;
    this.isDone = false;
  }

  toggleDone = () => {
    this.isDone = !this.isDone;
  };
}

export function getTodoFromId(todos, input) {
  return todos.filter((item) => item.id !== input);
}

export default Todo;
