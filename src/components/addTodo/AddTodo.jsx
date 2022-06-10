import { useState } from "react";
import InputContainer from "../inputContainer/InputContainer";
import "./addTodo.css";

import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "../../redux/todosSlice";

const AddTodo = () => {
  const [title, setTitle] = useState({
    label: "title",
    value: "",
    err: false,
  });

  const [desc, setDesc] = useState({
    label: "description",
    value: "",
    err: false,
  });

  const dispatch = useDispatch();

  const checkTitle = () => {
    if (!title.value.trim()) {
      setTitle({ ...title, err: "*this field is mandatory." });
      return false;
    }

    if (title.length > 10) {
      setTitle({ ...title, err: "*title must have less than 10 characters." });
      return false;
    }

    return true;
  };

  const checkDescription = () => {
    if (!desc.value.trim()) {
      setDesc({ ...desc, err: "*this field is mandatory." });
      return false;
    }
    return true;
  };

  const clear = (value, setValue) => {
    setValue({ ...value, value: "", err: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //check if every field is correct.
    if (checkTitle() === false || checkDescription() === false) return;

    //create todo
    dispatch(addTodo({ title: title.value, content: desc.value }));

    //clear fields
    clear(title, setTitle); //clear title
    clear(desc, setDesc); //clear desc
  };

  return (
    <div className="addTodo-container">
      <form onSubmit={handleSubmit}>
        <InputContainer item={title} setValue={setTitle} />
        <InputContainer item={desc} setValue={setDesc} />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
