import { useSelector } from "react-redux";
import TodoItem from "../todoItem/TodoItem";
import "./todosList.css";

const TodosList = () => {
  const { displayedTodos: todos } = useSelector((state) => state);

  const renderTodos = () => {
    return todos.map((todo) => <TodoItem todo={todo} />);
  };

  return (
    <div className="todoslist-container">
      {todos.length ? (
        renderTodos()
      ) : (
        <h1>Your todos will be displayed here ...</h1>
      )}
    </div>
  );
};

export default TodosList;
