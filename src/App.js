import "./App.css";
import TextBar from "./Components/TextBar";
import Line from "./Components/Line";
import { useState } from "react";

function App() {
  const [textArray, setTextArray] = useState([]);
  const [text, setText] = useState("");
  const [doneArray, setDoneArray] = useState([false]);
  return (
    <div>
      {textArray.length > 0 &&
        textArray.map((elem, index) => {
          return (
            <Line
              textArray={textArray}
              i={index}
              doneArray={doneArray}
              setDoneArray={setDoneArray}
              setTextArray={setTextArray}
            />
          );
        })}
      <TextBar
        textArray={textArray}
        setTextArray={setTextArray}
        text={text}
        setText={setText}
        doneArray={doneArray}
        setDoneArray={setDoneArray}
      />
    </div>
  );
}

export default App;
