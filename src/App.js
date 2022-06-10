import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./app.css";
import AddTodo from "./components/addTodo/AddTodo";
import TodosList from "./components/todosList/TodosList";
import { setDisplayedTodos } from "./redux/displayedTodosSlice";

function App() {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setDisplayedTodos({ todos }));
  }, [todos]);

  return (
    <div className="wrapper">
      <div className="app-container">
        <h1>Todos list</h1>
        <TodosList />
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
