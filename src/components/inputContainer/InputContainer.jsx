import "./inputContainer.css";

const InputContainer = ({ item, setValue }) => {
  const { label, value, err } = item;

  const handleChange = (e) => {
    setValue({ ...item, value: e.target.value });
  };

  return (
    <div className="input-container">
      <label>{label}: </label>
      <input value={value} onChange={handleChange} />
      {err ? <h4>{err}</h4> : undefined}
    </div>
  );
};

export default InputContainer;
