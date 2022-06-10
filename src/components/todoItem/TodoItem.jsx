import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../redux/todosSlice";
import InputContainer from "../inputContainer/InputContainer";
import "./todoItem.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const { id, title, content: desc } = todo;

  const [titleEdit, setTitle] = useState({
    label: "title",
    value: title,
    err: false,
  });

  const [descEdit, setDesc] = useState({
    label: "description",
    value: desc,
    err: false,
  });

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const toggleEdit = () => {
    setEdit(!edit);
    resetEdit();
  };

  const renderActionBtns = () => {
    return (
      <div className="todo-actions">
        <button onClick={handleDelete}>delete</button>
        <button onClick={toggleEdit}>edit </button>
      </div>
    );
  };
  const resetEdit = () => {
    setTitle({ ...titleEdit, value: title });
    setDesc({ ...descEdit, value: desc });
  };

  const handleCancelEdit = () => {
    resetEdit();
    toggleEdit();
  };

  const handleSaveEdit = () => {
    dispatch(editTodo({ id, title: titleEdit.value, content: descEdit.value }));
    toggleEdit();
  };

  const renderEditBtns = () => {
    return (
      <div className="todo-edit">
        <button onClick={handleSaveEdit}>save</button>
        <button onClick={handleCancelEdit}>cancel</button>
      </div>
    );
  };

  return (
    <div className="todo-item-container">
      <div className="todo-content">
        {edit ? (
          <InputContainer item={titleEdit} setValue={setTitle} />
        ) : (
          <h1>{title}</h1>
        )}
        {edit ? (
          <InputContainer item={descEdit} setValue={setDesc} />
        ) : (
          <p>{desc}</p>
        )}
      </div>

      {edit ? renderEditBtns() : renderActionBtns()}
    </div>
  );
};

export default TodoItem;
