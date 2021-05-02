const TextBar = ({
  textArray,
  setTextArray,
  text,
  setText,
  doneArray,
  setDoneArray,
}) => {
  const handleChange = (event) => {
    if (textArray) {
      return setText(event.target.value);
    }
  };

  const handleClick = () => {
    const newArray = [...textArray];
    newArray.push(text);
    setTextArray(newArray);

    const newDoneArray = [...doneArray];
    newDoneArray.push(false);
    setDoneArray(newDoneArray);
  };
  return (
    <>
      <input
        className="newTaskBar"
        type="text"
        placeholder="new task"
        onChange={handleChange}
      />
      <button onClick={handleClick} className="add-task">
        Add Task
      </button>
    </>
  );
};

export default TextBar;
