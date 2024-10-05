import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [currentColor, setCurrentColor] = useState([0, 0, 0]);

  function getRandomColor() {
    const randomColor = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
    return randomColor;
  }

  function onClickHandler() {
    console.log("Button pressed");
    setCount(count + 1);
    setCurrentColor(getRandomColor());
  }

  const buttonStyle = {
    backgroundColor: `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`,
    color: "#fff",
    padding: "10px 20px",
    border: "border-box",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={onClickHandler} style={buttonStyle}>
          Counter: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
