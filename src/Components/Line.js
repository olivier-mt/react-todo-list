import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Line = ({ textArray, i, doneArray, setDoneArray, setTextArray }) => {
  console.log("done array", doneArray);

  const onClickCheckBox = () => {
    console.log("dans On Click", doneArray);

    if (doneArray) {
      console.log("dans done array");
      if (doneArray[i] === true) {
        let newDoneArray = [...doneArray];
        newDoneArray[i] = false;
        setDoneArray(newDoneArray);
        console.log("change for true ");
      } else {
        let newDoneArray = [...doneArray];
        newDoneArray[i] = true;
        setDoneArray(newDoneArray);
        console.log("changed for false");
      }
    } else {
      console.log("ca marche pas");
    }
  };

  const onClickDelete = () => {
    const newTextArray = [...textArray];
    const newDoneArray = [...doneArray];

    // enlever newTextArray[i]

    newTextArray.splice(i, 1);
    newDoneArray.splice(i, 1);

    // set newValue
    setTextArray(newTextArray);
    setDoneArray(newDoneArray);
  };

  if (textArray) {
    return (
      <div>
        <input
          type="checkbox"
          name="checkbox"
          id={i}
          onClick={onClickCheckBox}
        />
        <span className={`${doneArray[i] && "crossed"} ${"line_text"}`}>
          {textArray[i]}
        </span>
        <FontAwesomeIcon
          icon="trash"
          className="trash-icon"
          onClick={onClickDelete}
        />
      </div>
    );
  }
};

export default Line;
